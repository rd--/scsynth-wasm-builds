sl.addTrait("ArithmeticProgression", "ArithmeticProgression");

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "adaptToCollectionAndApply",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_aCollection, _asList_1(_self));
  },
  "{ :self :aCollection :aBlock:/2 |\n\t\taBlock(aCollection, self.asList)\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
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
      return _aBlock_2(_aNumber, _each);
    });
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aNumber, each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _identity_1);
  },
  "{ :self |\n\t\tself.collect(identity:/1)\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
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
    return _if_3(_includesIndex_2(_self, _index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSign_2(
        _asterisk_2(_step_1(_self), _hyphenMinus_2(_index, 1)),
        _start_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _errorInvalidIndex_3(_self, "at", _index);
    });
  },
  "{ :self :index |\n\t\tself.includesIndex(index).if {\n\t\t\tself.step * (index - 1) + self.start\n\t\t} {\n\t\t\tself.errorInvalidIndex('at', index)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "basicAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_step_1(_self), _hyphenMinus_2(_index, 1)),
      _start_1(_self),
    );
  },
  "{ :self :index |\n\t\tself.step * (index - 1) + self.start\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _result = _List_1(_size_1(_self));
    let _index = 1;
    /* Statements */
    _do_2(_self, function (_nextValue) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _nextValue";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_result, _index, _aBlock_1(_nextValue));
      return _index = _plusSign_2(_index, 1);
    });
    return _result;
  },
  "{ :self :aBlock:/1 |\n\t\tlet result = List(self.size);\n\t\tlet index = 1;\n\t\tself.do { :nextValue |\n\t\t\tresult[index] := aBlock(nextValue);\n\t\t\tindex := index + 1\n\t\t};\n\t\tresult\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "copyFromTo",
  ["self", "startIndex", "endIndex"],
  function (_self, _startIndex, _endIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _endIndex";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _ampersand_2(_equalsSign_2(_startIndex, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_endIndex, _size_1(_self));
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _self;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toBy_3(
          _at_2(_self, _startIndex),
          _at_2(_self, _endIndex),
          _step_1(_self),
        );
      },
    );
  },
  "{ :self :startIndex :endIndex |\n\t\t(\n\t\t\tstartIndex = 1 & {\n\t\t\t\tendIndex = self.size\n\t\t\t}\n\t\t).if {\n\t\t\tself\n\t\t} {\n\t\t\tself[startIndex].toBy(self[endIndex], self.step)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _nextValue = _start_1(_self);
    let _count = _size_1(_self);
    let _stepSize = _step_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSignEqualsSign_2(_count, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_nextValue);
      _nextValue = _plusSign_2(_nextValue, _stepSize);
      return _count = _hyphenMinus_2(_count, 1);
    });
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\tlet nextValue = self.start;\n\t\tlet count = self.size;\n\t\tlet stepSize = self.step;\n\t\t{\n\t\t\tcount >= 1\n\t\t}.whileTrue {\n\t\t\taBlock(nextValue);\n\t\t\tnextValue := nextValue + stepSize;\n\t\t\tcount := count - 1\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "emptyError",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2(
        _plusSignPlusSign_2("@ArithmeticProgression>>", _methodName),
        ": empty",
      ),
    );
  },
  "{ :self :methodName |\n\t\tself.error('@ArithmeticProgression>>' ++ methodName ++ ': empty')\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "end",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _start_1(_self),
      _asterisk_2(_hyphenMinus_2(_size_1(_self), 1), _step_1(_self)),
    );
  },
  "{ :self |\n\t\tself.start + (self.size - 1 * self.step)\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "increment",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _step_1(_self);
  },
  "{ :self |\n\t\tself.step\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isArithmeticSeries",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isArithmeticSeriesBy",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_step_1(_self), _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.step = anInteger\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  },
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isIntegerArithmeticSeries",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isInteger_1(_start_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isInteger_1(_step_1(_self));
    });
  },
  "{ :self |\n\t\tself.start.isInteger & {\n\t\t\tself.step.isInteger\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isNormal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_not_1(_isEmpty_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_start_1(_self), _end_1(_self));
    });
  },
  "{ :self |\n\t\tself.isEmpty.not & {\n\t\t\tself.start <= self.end\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
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
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _emptyError_2(_self, "@ArithmeticProgression>>last");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _end_1(_self);
    });
  },
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.emptyError('@ArithmeticProgression>>last')\n\t\t} {\n\t\t\tself.end\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "max",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _emptyError_2(_self, "@ArithmeticProgression>>max");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _max_2(_start_1(_self), _end_1(_self));
    });
  },
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.emptyError('@ArithmeticProgression>>max')\n\t\t} {\n\t\t\tself.start.max(self.end)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "min",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _emptyError_2(_self, "@ArithmeticProgression>>min");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _min_2(_start_1(_self), _end_1(_self));
    });
  },
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.emptyError('@ArithmeticProgression>>min')\n\t\t} {\n\t\t\tself.start.min(self.end)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "permutationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _permutationsDo_2(_asList_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.asList.permutationsDo(aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "product",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _start_1(_self);
    let _d = _step_1(_self);
    let _n = _size_1(_self);
    /* Statements */
    return _asterisk_2(
      _circumflexAccent_2(_d, _n),
      _solidus_2(
        _gamma_1(_plusSign_2(_solidus_2(_a, _d), _n)),
        _gamma_1(_solidus_2(_a, _d)),
      ),
    );
  },
  "{ :self |\n\t\tlet a = self.start;\n\t\tlet d = self.step;\n\t\tlet n = self.size;\n\t\t(d ^ n) * ((a / d + n).gamma / (a / d).gamma)\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "reverseDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _each = _last_1(_self);
    let _predicate = _if_3(_lessThanSign_2(_step_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return (function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSignEqualsSign_2(_start_1(_self), _each);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return (function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_start_1(_self), _each);
      });
    });
    /* Statements */
    return _whileTrue_2(_predicate, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_each);
      return _each = _hyphenMinus_2(_each, _step_1(_self));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet each = self.last;\n\t\tlet predicate = (self.step < 0).if {\n\t\t\t{ self.start >= each }\n\t\t} {\n\t\t\t{ self.start <= each }\n\t\t};\n\t\tpredicate.whileTrue {\n\t\t\taBlock(each);\n\t\t\teach := each - self.step\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
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
    return _typeReponsibility_2(_self, "@ArithmeticProgression>>size");
  },
  "{ :self |\n\t\tself.typeReponsibility('@ArithmeticProgression>>size')\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "start",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeReponsibility_2(_self, "@ArithmeticProgression>>start");
  },
  "{ :self |\n\t\tself.typeReponsibility('@ArithmeticProgression>>start')\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "step",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeReponsibility_2(_self, "@ArithmeticProgression>>step");
  },
  "{ :self |\n\t\tself.typeReponsibility('@ArithmeticProgression>>step')\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "sum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _asterisk_2(
        _size_1(_self),
        _plusSign_2(
          _asterisk_2(_hyphenMinus_2(_size_1(_self), 1), _step_1(_self)),
          _asterisk_2(_start_1(_self), 2),
        ),
      ),
      2,
    );
  },
  "{ :self |\n\t\tself.size * ((self.size - 1) * self.step + (self.start * 2)) / 2\n\t}",
);

sl.addTraitMethod(
  "ArithmeticProgression",
  "ArithmeticProgression",
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
    let _nextValue = _start_1(_self);
    let _nextIndex = 1;
    let _endIndex = _size_1(_self);
    let _stepSize = _step_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_nextIndex, _endIndex);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _aBlock_2(_nextValue, _nextIndex);
      _nextValue = _plusSign_2(_nextValue, _stepSize);
      return _nextIndex = _plusSign_2(_nextIndex, 1);
    });
    return _self;
  },
  "{ :self :aBlock:/2 |\n\t\tlet nextValue = self.start;\n\t\tlet nextIndex = 1;\n\t\tlet endIndex = self.size;\n\t\tlet stepSize = self.step;\n\t\t{\n\t\t\tnextIndex <= endIndex\n\t\t}.whileTrue {\n\t\t\taBlock(nextValue, nextIndex);\n\t\t\tnextValue := nextValue + stepSize;\n\t\t\tnextIndex := nextIndex + 1\n\t\t};\n\t\tself\n\t}",
);
