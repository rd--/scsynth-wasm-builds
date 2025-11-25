sl.addTrait("ArithmeticProgression", "ArithmeticProgression");

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "adaptToCollectionAndApply",
  ["self", "aCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aCollection, _asList_1(_self));
  }, ["self", "aCollection", "aBlock:/2"]),
  "{ :self :aCollection :aBlock:/2 |\n\t\taBlock(aCollection, self.asList)\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
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
        return _aBlock_2(_aNumber, _each);
      }, ["each"]),
    );
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aNumber, each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(identity:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_self, _index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _asterisk_2(_step_1(_self), _hyphenMinus_2(_index, 1)),
          _start_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      }, []),
    );
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 |\n\t\tself.includesIndex(index).if {\n\t\t\tself.step * (index - 1) + self.start\n\t\t} {\n\t\t\tifAbsent()\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _result = _List_1(_size_1(_self));
    let _index = 1;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_nextValue) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _nextValue";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_result, _index, _aBlock_1(_nextValue));
        return _index = _plusSign_2(_index, 1);
      }, ["nextValue"]),
    );
    return _result;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet result = List(self.size);\n\t\tlet index = 1;\n\t\tself.do { :nextValue |\n\t\t\tresult[index] := aBlock(nextValue);\n\t\t\tindex := index + 1\n\t\t};\n\t\tresult\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "copyFromTo",
  ["self", "startIndex", "endIndex"],
  sl.annotateFunction(function (_self, _startIndex, _endIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _endIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_startIndex, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_endIndex, _size_1(_self));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_startIndex, _endIndex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _to_2(1, 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _toBy_3(
              _at_2(_self, _startIndex),
              _at_2(_self, _endIndex),
              _step_1(_self),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "startIndex", "endIndex"]),
  "{ :self :startIndex :endIndex |\n\t\t(\n\t\t\tstartIndex = 1 & {\n\t\t\t\tendIndex = self.size\n\t\t\t}\n\t\t).if {\n\t\t\tself\n\t\t} {\n\t\t\t(startIndex > endIndex).if {\n\t\t\t\t1.to(0)\n\t\t\t} {\n\t\t\t\tself[startIndex].toBy(self[endIndex], self.step)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nextValue = _start_1(_self);
    let _count = _size_1(_self);
    let _stepSize = _step_1(_self);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_count, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(_nextValue);
        _nextValue = _plusSign_2(_nextValue, _stepSize);
        return _count = _hyphenMinus_2(_count, 1);
      }, []),
    );
    _ifTrue_2(
      _greaterThanSign_2(_count, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_end_1(_self));
      }, []),
    );
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet nextValue = self.start;\n\t\tlet count = self.size;\n\t\tlet stepSize = self.step;\n\t\t{\n\t\t\tcount > 1\n\t\t}.whileTrue {\n\t\t\taBlock(nextValue);\n\t\t\tnextValue := nextValue + stepSize;\n\t\t\tcount := count - 1\n\t\t};\n\t\t(count > 0).ifTrue {\n\t\t\taBlock(self.end)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "emptyError",
  ["self", "methodName"],
  sl.annotateFunction(function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2(
        _plusSignPlusSign_2("@ArithmeticProgression>>", _methodName),
        ": empty",
      ),
    );
  }, ["self", "methodName"]),
  "{ :self :methodName |\n\t\tself.error('@ArithmeticProgression>>' ++ methodName ++ ': empty')\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "end",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _start_1(_self),
      _asterisk_2(_hyphenMinus_2(_size_1(_self), 1), _step_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.start + (self.size - 1 * self.step)\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "increment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _step_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.step\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "indexOf",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _plusSign_2(
      _solidus_2(_hyphenMinus_2(_aNumber, _start_1(_self)), _step_1(_self)),
      1,
    );
    /* Statements */
    return _if_3(
      _includesIndex_2(_self, _i),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _i;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tlet i = (aNumber - self.start) / self.step + 1;\n\t\tself.includesIndex(i).if {\n\t\t\ti\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isArithmeticProgression",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_step_1(_self), _aNumber);
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 |\n\t\taBlock(self.step, aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isArithmeticProgression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isIntegerArithmeticSeries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_start_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isInteger_1(_step_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.start.isInteger & {\n\t\t\tself.step.isInteger\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "isNormal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _not_1(_isEmpty_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_start_1(_self), _end_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.not & {\n\t\t\tself.start <= self.end\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "last",
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
        return _emptyError_2(_self, "@ArithmeticProgression>>last");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _end_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.emptyError('@ArithmeticProgression>>last')\n\t\t} {\n\t\t\tself.end\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "max",
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
        return _emptyError_2(_self, "@ArithmeticProgression>>max");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _max_2(_start_1(_self), _end_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.emptyError('@ArithmeticProgression>>max')\n\t\t} {\n\t\t\tself.start.max(self.end)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "min",
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
        return _emptyError_2(_self, "@ArithmeticProgression>>min");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _min_2(_start_1(_self), _end_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.emptyError('@ArithmeticProgression>>min')\n\t\t} {\n\t\t\tself.start.min(self.end)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "product",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _start_1(_self);
    let _d = _step_1(_self);
    let _n = _size_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_d, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_gamma_1(_plusSign_2(_a, _n)), _gamma_1(_a));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _solidus_2(_a, _d);
        /* Statements */
        return _asterisk_2(
          _circumflexAccent_2(_d, _n),
          _solidus_2(_gamma_1(_plusSign_2(_m, _n)), _gamma_1(_m)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.start;\n\t\tlet d = self.step;\n\t\tlet n = self.size;\n\t\t(d = 1).if {\n\t\t\t(a + n).gamma / a.gamma\n\t\t} {\n\t\t\tlet m = a / d;\n\t\t\t(d ^ n) * ((m + n).gamma / m.gamma)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "reverseDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nextValue = _end_1(_self);
    let _count = _size_1(_self);
    let _stepSize = _negate_1(_step_1(_self));
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_count, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(_nextValue);
        _nextValue = _plusSign_2(_nextValue, _stepSize);
        return _count = _hyphenMinus_2(_count, 1);
      }, []),
    );
    _ifTrue_2(
      _greaterThanSign_2(_count, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_start_1(_self));
      }, []),
    );
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet nextValue = self.end;\n\t\tlet count = self.size;\n\t\tlet stepSize = self.step.negate;\n\t\t{\n\t\t\tcount > 1\n\t\t}.whileTrue {\n\t\t\taBlock(nextValue);\n\t\t\tnextValue := nextValue + stepSize;\n\t\t\tcount := count - 1\n\t\t};\n\t\t(count > 0).ifTrue {\n\t\t\taBlock(self.start)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@ArithmeticProgression>>size");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@ArithmeticProgression>>size')\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "start",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@ArithmeticProgression>>start");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@ArithmeticProgression>>start')\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "step",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@ArithmeticProgression>>step");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@ArithmeticProgression>>step')\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "sum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
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
  }, ["self"]),
  "{ :self |\n\t\tself.size * ((self.size - 1) * self.step + (self.start * 2)) / 2\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "uncheckedAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_step_1(_self), _hyphenMinus_2(_index, 1)),
      _start_1(_self),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.step * (index - 1) + self.start\n\t}",
);

sl.addMethodToExistingTrait(
  "ArithmeticProgression",
  "ArithmeticProgression",
  "withIndexDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nextValue = _start_1(_self);
    let _nextIndex = 1;
    let _endIndex = _size_1(_self);
    let _stepSize = _step_1(_self);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_nextIndex, _endIndex);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_2(_nextValue, _nextIndex);
        _nextValue = _plusSign_2(_nextValue, _stepSize);
        return _nextIndex = _plusSign_2(_nextIndex, 1);
      }, []),
    );
    _aBlock_2(_end_1(_self), _endIndex);
    return _self;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet nextValue = self.start;\n\t\tlet nextIndex = 1;\n\t\tlet endIndex = self.size;\n\t\tlet stepSize = self.step;\n\t\t{\n\t\t\tnextIndex < endIndex\n\t\t}.whileTrue {\n\t\t\taBlock(nextValue, nextIndex);\n\t\t\tnextValue := nextValue + stepSize;\n\t\t\tnextIndex := nextIndex + 1\n\t\t};\n\t\taBlock(self.end, endIndex);\n\t\tself\n\t}",
);
