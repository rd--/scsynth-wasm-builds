sl.addTrait("Iterable", "Iterable");

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "ampersand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _value_1);
  },
  "{ :self |\n\t\tself.allSatisfy(value:/1)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "verticalLine",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_self, _value_1);
  },
  "{ :self |\n\t\tself.anySatisfy(value:/1)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "absMax",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _injectInto_3(
      _self,
      _abs_1(_anyOne_1(_self)),
      function (_answer, _each) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _answer, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _max_2(_answer, _abs_1(_each));
      },
    );
  },
  "{ :self |\n\t\tself.injectInto(self.anyOne.abs) { :answer :each |\n\t\t\tanswer.max(each.abs)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "allSatisfy",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(_aBlock_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(false);
        });
      });
      return true;
    });
  },
  "{ :self :aBlock:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.aBlock.ifFalse {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "allTrue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _identity_1);
  },
  "{ :self |\n\t\tself.allSatisfy(identity:/1)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "anyOne",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _return_1(_each);
      });
      return _error_2(_self, "@Iterable>>anyOne: empty iterable");
    });
  },
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.return\n\t\t\t};\n\t\t\tself.error('@Iterable>>anyOne: empty iterable')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "anySatisfy",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_aBlock_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(true);
        });
      });
      return false;
    });
  },
  "{ :self :aBlock:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.aBlock.ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "anyTrue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_self, _identity_1);
  },
  "{ :self |\n\t\tself.anySatisfy(identity:/1)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "contents",
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
  "Iterable",
  "Iterable",
  "count",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = 0;\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "countAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _count_2(_self, function (_unusedItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedItem";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return true;
    });
  },
  "{ :self |\n\t\tself.count { :unusedItem |\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "deepDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _deepDo_2(_each, _aBlock_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_each);
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet type = self.typeOf;\n\t\tself.do { :each |\n\t\t\t(each.typeOf = type).if {\n\t\t\t\teach.deepDo(aBlock:/1)\n\t\t\t} {\n\t\t\t\taBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "deepMax",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _deepReduce_2(_self, _max_2);
  },
  "{ :self |\n\t\tself.deepReduce(max:/2)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "deepMin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _deepReduce_2(_self, _min_2);
  },
  "{ :self |\n\t\tself.deepReduce(min:/2)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "deepReduce",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reduceBy_3(_self, _aBlock_2, _deepDo_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.reduceBy(aBlock:/2, deepDo:/2)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "detect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfNone_3(_self, _aBlock_1, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Iterable>>detect: not found");
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.detectIfNone(aBlock:/1) {\n\t\t\tself.error('@Iterable>>detect: not found')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "detectIfFound",
  ["self", "aBlock:/1", "foundBlock:/1"],
  function (_self, _aBlock_1, _foundBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _foundBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(_self, _aBlock_1, _foundBlock_1, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return null;
    });
  },
  "{ :self :aBlock:/1 :foundBlock:/1 |\n\t\tself.detectIfFoundIfNone(aBlock:/1, foundBlock:/1) {\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "detectIfFoundIfNone",
  ["self", "aBlock:/1", "foundBlock:/1", "exceptionBlock:/0"],
  function (_self, _aBlock_1, _foundBlock_1, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aBlock_1, _foundBlock_1, _exceptionBlock_0";
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
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_aBlock_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(_foundBlock_1(_each));
        });
      });
      return _exceptionBlock_0();
    });
  },
  "{ :self :aBlock:/1 :foundBlock:/1 :exceptionBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\taBlock(each).ifTrue {\n\t\t\t\t\tfoundBlock(each).return\n\t\t\t\t}\n\t\t\t};\n\t\t\texceptionBlock()\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "detectIfNone",
  ["self", "aBlock:/1", "whenAbsent:/0"],
  function (_self, _aBlock_1, _whenAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _whenAbsent_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(_self, _aBlock_1, _identity_1, _whenAbsent_0);
  },
  "{ :self :aBlock:/1 :whenAbsent:/0 |\n\t\tself.detectIfFoundIfNone(aBlock:/1, identity:/1, whenAbsent:/0)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "detectSum",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sum = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _sum = _plusSign_2(_sum, _aBlock_1(_each));
    });
    return _sum;
  },
  "{ :self :aBlock:/1 |\n\t\tlet sum = 0;\n\t\tself.do { :each |\n\t\t\tsum := sum + aBlock(each)\n\t\t};\n\t\tsum\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "detectMax",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxElement = null;
    let _maxValue = null;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifNil_3(_maxValue, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _maxElement = _each;
        return _maxValue = _aBlock_1(_each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextValue = _aBlock_1(_each);
        /* Statements */
        return _ifTrue_2(
          _greaterThanSign_2(_nextValue, _maxValue),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _maxElement = _each;
            return _maxValue = _nextValue;
          },
        );
      });
    });
    return _maxElement;
  },
  "{ :self :aBlock:/1 |\n\t\tlet maxElement = nil;\n\t\tlet maxValue = nil;\n\t\tself.do { :each |\n\t\t\tmaxValue.ifNil {\n\t\t\t\tmaxElement := each;\n\t\t\t\tmaxValue := aBlock(each)\n\t\t\t} {\n\t\t\t\tlet nextValue = aBlock(each);\n\t\t\t\t(nextValue > maxValue).ifTrue {\n\t\t\t\t\tmaxElement := each;\n\t\t\t\t\tmaxValue := nextValue\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tmaxElement\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "detectMin",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _minElement = null;
    let _minValue = null;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifNil_3(_minValue, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _minElement = _each;
        return _minValue = _aBlock_1(_each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextValue = _aBlock_1(_each);
        /* Statements */
        return _ifTrue_2(_lessThanSign_2(_nextValue, _minValue), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          _minElement = _each;
          return _minValue = _nextValue;
        });
      });
    });
    return _minElement;
  },
  "{ :self :aBlock:/1 |\n\t\tlet minElement = nil;\n\t\tlet minValue = nil;\n\t\tself.do { :each |\n\t\t\tminValue.ifNil {\n\t\t\t\tminElement := each;\n\t\t\t\tminValue := aBlock(each)\n\t\t\t} {\n\t\t\t\tlet nextValue = aBlock(each);\n\t\t\t\t(nextValue < minValue).ifTrue {\n\t\t\t\t\tminElement := each;\n\t\t\t\t\tminValue := nextValue\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tminElement\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Iterable>>do");
  },
  "{ :self :aBlock:/1 |\n\t\tself.typeResponsibility('@Iterable>>do')\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "doSeparatedBy",
  ["self", "elementBlock:/1", "separatorBlock:/0"],
  function (_self, _elementBlock_1, _separatorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _elementBlock_1, _separatorBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _beforeFirst = true;
    /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _if_3(_beforeFirst, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _beforeFirst = false;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _separatorBlock_0();
      });
      return _elementBlock_1(_each);
    });
  },
  "{ :self :elementBlock:/1 :separatorBlock:/0 |\n\t\tlet beforeFirst = true;\n\t\tself.do { :each |\n\t\t\tbeforeFirst.if {\n\t\t\t\tbeforeFirst := false\n\t\t\t} {\n\t\t\t\tseparatorBlock()\n\t\t\t};\n\t\t\telementBlock(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "doWithout",
  ["self", "aBlock:/1", "anItem"],
  function (_self, _aBlock_1, _anItem) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _anItem";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifFalse_2(_equalsSign_2(_anItem, _each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_each);
      });
    });
  },
  "{ :self :aBlock:/1 :anItem |\n\t\tself.do { :each |\n\t\t\t(anItem = each).ifFalse {\n\t\t\t\taBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "includesBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_each, _anObject);
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tself.anySatisfy { :each |\n\t\t\taBlock(each, anObject)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "includes",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includesBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject |\n\t\tself.includesBy(anObject, =)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "includesAnyOf",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
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
      _do_2(_aCollection, function (_elem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _elem";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_includes_2(_self, _elem), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(true);
        });
      });
      return false;
    });
  },
  "{ :self :aCollection |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\taCollection.do { :elem |\n\t\t\t\tself.includes(elem).ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "includesAllOf",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
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
      _do_2(_aCollection, function (_elem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _elem";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(_includes_2(_self, _elem), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(false);
        });
      });
      return true;
    });
  },
  "{ :self :aCollection |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\taCollection.do { :elem |\n\t\t\t\tself.includes(elem).ifFalse {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "injectInto",
  ["self", "initialValue", "aBlock:/2"],
  function (_self, _initialValue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _initialValue, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nextValue = _initialValue;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _nextValue = _aBlock_2(_nextValue, _each);
    });
    return _nextValue;
  },
  "{ :self :initialValue :aBlock:/2 |\n\t\tlet nextValue = initialValue;\n\t\tself.do { :each |\n\t\t\tnextValue := aBlock(nextValue, each)\n\t\t};\n\t\tnextValue\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "isDuplicateFree",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _items = [];
      /* Statements */
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(_includesBy_3(_items, _each, _aBlock_2), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(false);
        });
        return _add_2(_items, _each);
      });
      return true;
    });
  },
  "{ :self :aBlock:/2 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet items = [];\n\t\t\tself.do { :each |\n\t\t\t\titems.includesBy(each, aBlock:/2).ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t};\n\t\t\t\titems.add(each)\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "isProperSubsetOf",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_includesAllOf_2(_aCollection, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _tildeEqualsSign_2(_self, _aCollection);
    });
  },
  "{ :self :aCollection |\n\t\taCollection.includesAllOf(self) & {\n\t\t\tself ~= aCollection\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "isSubsetOf",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includesAllOf_2(_aCollection, _self);
  },
  "{ :self :aCollection |\n\t\taCollection.includesAllOf(self)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "max",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _max_2);
  },
  "{ :self |\n\t\tself.reduce(max:/2)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "maxBy",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _maxBy_3(_i, _j, _aBlock_1);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.reduce { :i :j |\n\t\t\ti.maxBy(j, aBlock:/1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "min",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _min_2);
  },
  "{ :self |\n\t\tself.reduce(min:/2)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "minBy",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _minBy_3(_i, _j, _aBlock_1);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.reduce { :i :j |\n\t\t\ti.minBy(j, aBlock:/1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "minMax",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _min = _anyOne_1(_self);
    let _max = _min;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _min = _min_2(_min, _each);
      return _max = _max_2(_max, _each);
    });
    return [_min, _max];
  },
  "{ :self |\n\t\tlet min = self.anyOne;\n\t\tlet max = min;\n\t\tself.do { :each |\n\t\t\tmin := min.min(each);\n\t\t\tmax := max.max(each)\n\t\t};\n\t\t[min, max]\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "neumaierSum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sum = 0.0;
    let _c = 0.0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _t = _plusSign_2(_sum, _each);
      /* Statements */
      _if_3(
        _greaterThanSignEqualsSign_2(_abs_1(_sum), _abs_1(_each)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _c = _plusSign_2(
            _c,
            _plusSign_2(_hyphenMinus_2(_sum, _t), _each),
          );
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _c = _plusSign_2(
            _c,
            _plusSign_2(_hyphenMinus_2(_each, _t), _sum),
          );
        },
      );
      return _sum = _t;
    });
    return _plusSign_2(_sum, _c);
  },
  "{ :self |\n\t\tlet sum = 0.0;\n\t\tlet c = 0.0;\n\t\tself.do { :each |\n\t\t\tlet t = sum + each;\n\t\t\t(sum.abs >= each.abs).if {\n\t\t\t\tc := c + ((sum - t) + each)\n\t\t\t} {\n\t\t\t\tc := c + ((each - t) + sum)\n\t\t\t};\n\t\t\tsum := t\n\t\t};\n\t\tsum + c\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "noneSatisfy",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_aBlock_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(false);
        });
      });
      return true;
    });
  },
  "{ :self :aBlock:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.aBlock.ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "occurrencesOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tally = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_equalsSign_2(_anObject, _each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _tally = _plusSign_2(_tally, 1);
      });
    });
    return _tally;
  },
  "{ :self :anObject |\n\t\tlet tally = 0;\n\t\tself.do { :each |\n\t\t\t(anObject = each).ifTrue {\n\t\t\t\ttally := tally + 1\n\t\t\t}\n\t\t};\n\t\ttally\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "oneSatisfies",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_count_2(_self, _aBlock_1), 1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.count(aBlock:/1) = 1\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "product",
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
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _reduce_2(_self, _asterisk_2);
    });
  },
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\t1\n\t\t} {\n\t\t\tself.reduce(*)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "range",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_max_1(_self), _min_1(_self));
  },
  "{ :self |\n\t\tself.max - self.min\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "reduceBy",
  ["self", "aBlock:/2", "iterationBlock:/2"],
  function (_self, _aBlock_2, _iterationBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlock_2, _iterationBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _isFirst = true;
    let _nextValue = null;
    /* Statements */
    _iterationBlock_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isFirst, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _nextValue = _each;
        return _isFirst = false;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _nextValue = _aBlock_2(_nextValue, _each);
      });
    });
    _ifTrue_2(_isFirst, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Iterable>>reduceBy: empty collection");
    });
    return _nextValue;
  },
  "{ :self :aBlock:/2 :iterationBlock:/2 |\n\t\tlet isFirst = true;\n\t\tlet nextValue = nil;\n\t\tself.iterationBlock { :each |\n\t\t\tisFirst.if {\n\t\t\t\tnextValue := each;\n\t\t\t\tisFirst := false\n\t\t\t} {\n\t\t\t\tnextValue := aBlock(nextValue, each)\n\t\t\t}\n\t\t};\n\t\tisFirst.ifTrue {\n\t\t\tself.error('@Iterable>>reduceBy: empty collection')\n\t\t};\n\t\tnextValue\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "reduce",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reduceBy_3(_self, _aBlock_2, _do_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.reduceBy(aBlock:/2, do:/2)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "rejectThenDo",
  ["self", "rejectBlock:/1", "doBlock:/1"],
  function (_self, _rejectBlock_1, _doBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _rejectBlock_1, _doBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifFalse_2(_rejectBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _doBlock_1(_each);
      });
    });
  },
  "{ :self :rejectBlock:/1 :doBlock:/1 |\n\t\tself.do { :each |\n\t\t\trejectBlock(each).ifFalse {\n\t\t\t\tdoBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "selectThenDo",
  ["self", "selectBlock:/1", "doBlock:/1"],
  function (_self, _selectBlock_1, _doBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectBlock_1, _doBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_selectBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _doBlock_1(_each);
      });
    });
  },
  "{ :self :selectBlock:/1 :doBlock:/1 |\n\t\tself.do { :each |\n\t\t\tselectBlock(each).ifTrue {\n\t\t\t\tdoBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
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
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _tally = _plusSign_2(_tally, 1);
    });
    return _tally;
  },
  "{ :self |\n\t\tlet tally = 0;\n\t\tself.do { :each |\n\t\t\ttally := tally + 1\n\t\t};\n\t\ttally\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "sum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _plusSign_2);
  },
  "{ :self |\n\t\tself.reduce(+)\n\t}",
);

sl.addTraitMethod(
  "Iterable",
  "Iterable",
  "sumOfSquares",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _injectInto_3(_self, 0, function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(_i, _squared_1(_j));
    });
  },
  "{ :self |\n\t\tself.injectInto(0) { :i :j |\n\t\t\ti + j.squared\n\t\t}\n\t}",
);
