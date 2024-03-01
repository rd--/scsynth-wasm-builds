sl.addType(
  false,
  "Range",
  "Range",
  ["Object", "Iterable", "Collection", "Indexable", "Sequence"],
  ["start", "stop", "step"],
);

sl.copyTraitToType(
  "Object",
  "Range",
);

sl.copyTraitToType(
  "Iterable",
  "Range",
);

sl.copyTraitToType(
  "Collection",
  "Range",
);

sl.copyTraitToType(
  "Indexable",
  "Range",
);

sl.copyTraitToType(
  "Sequence",
  "Range",
);

sl.addMethod(
  "Range",
  "Range",
  "equalsSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isRange_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_start_1(_self), _start_1(_operand)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(
            _equalsSign_2(_stop_1(_self), _stop_1(_operand)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _equalsSign_2(_step_1(_self), _step_1(_operand));
            },
          );
        },
      );
    });
  },
  "{ :self :operand |\n\t\toperand.isRange & {\n\t\t\tself.start = operand.start & {\n\t\t\t\tself.stop = operand.stop & {\n\t\t\t\t\tself.step = operand.step\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "plusSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSmallFloat_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Range_3(
        _plusSign_2(_start_1(_self), _operand),
        _plusSign_2(_stop_1(_self), _operand),
        _step_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToCollectionAndApply_3(_operand, _self, _plusSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isSmallFloat.if {\n\t\t\tRange(self.start + operand, self.stop + operand, self.step)\n\t\t} {\n\t\t\toperand.adaptToCollectionAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "hyphenMinus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSmallFloat_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Range_3(
        _hyphenMinus_2(_start_1(_self), _operand),
        _hyphenMinus_2(_stop_1(_self), _operand),
        _step_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToCollectionAndApply_3(_operand, _self, _hyphenMinus_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isSmallFloat.if {\n\t\t\tRange(self.start - operand, self.stop - operand, self.step)\n\t\t} {\n\t\t\toperand.adaptToCollectionAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
  "copyFromTo",
  ["self", "startIndex", "stopIndex"],
  function (_self, _startIndex, _stopIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _stopIndex";
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
        return _equalsSign_2(_stopIndex, _size_1(_self));
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
          _at_2(_self, _stopIndex),
          _step_1(_self),
        );
      },
    );
  },
  "{ :self :startIndex :stopIndex |\n\t\t(startIndex = 1 & {\n\t\t\tstopIndex = self.size\n\t\t}).if {\n\t\t\tself\n\t\t} {\n\t\t\tself[startIndex].toBy(self[stopIndex], self.step)\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
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
    let _endValue = _stop_1(_self);
    /* Statements */
    _if_3(_greaterThanSign_2(_step_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_nextValue, _endValue);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _aBlock_1(_nextValue);
        return _nextValue = _plusSign_2(_nextValue, _step_1(_self));
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSignEqualsSign_2(_nextValue, _endValue);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _aBlock_1(_nextValue);
        return _nextValue = _plusSign_2(_nextValue, _step_1(_self));
      });
    });
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\tlet nextValue = self.start;\n\t\tlet endValue = self.stop;\n\t\t(self.step > 0).if {\n\t\t\t{\n\t\t\t\tnextValue <= endValue\n\t\t\t}.whileTrue {\n\t\t\t\taBlock(nextValue);\n\t\t\t\tnextValue := nextValue + self.step\n\t\t\t}\n\t\t} {\n\t\t\t{\n\t\t\t\tnextValue >= endValue\n\t\t\t}.whileTrue {\n\t\t\t\taBlock(nextValue);\n\t\t\t\tnextValue := nextValue + self.step\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
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
        _plusSignPlusSign_2("Range>>", _methodName),
        ": empty",
      ),
    );
  },
  "{ :self :methodName |\n\t\tself.error('Range>>' ++ methodName ++ ': empty')\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
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
      return _emptyError_2(_self, "last");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _hyphenMinus_2(
        _stop_1(_self),
        _percentSign_2(
          _hyphenMinus_2(_stop_1(_self), _start_1(_self)),
          _step_1(_self),
        ),
      );
    });
  },
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.emptyError('last')\n\t\t} {\n\t\t\tself.stop - (self.stop - self.start % self.step)\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_step_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSignPlusSign_2(
        _plusSignPlusSign_2(_printString_1(_start_1(_self)), ":"),
        _printString_1(_stop_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _storeString_1(_self);
    });
  },
  "{ :self |\n\t\t(self.step = 1).if {\n\t\t\tself.start.printString ++ ':' ++ self.stop.printString\n\t\t} {\n\t\t\tself.storeString\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "removeFirst",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _emptyError_2(_self, "removeFirst");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _removed = _start_1(_self);
      /* Statements */
      _start_2(_self, _plusSign_2(_start_1(_self), _step_1(_self)));
      return _removed;
    });
  },
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tself.emptyError('removeFirst')\n\t\t} {\n\t\t\tlet removed = self.start;\n\t\t\tself.start := self.start + self.step;\n\t\t\tremoved\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "removeLast",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _emptyError_2(_self, "removeLast");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _removed = _stop_1(_self);
      /* Statements */
      _stop_2(_self, _hyphenMinus_2(_stop_1(_self), _step_1(_self)));
      return _removed;
    });
  },
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tself.emptyError('removeLast')\n\t\t} {\n\t\t\tlet removed = self.stop;\n\t\t\tself.stop := self.stop - self.step;\n\t\t\tremoved\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
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
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Range_3(
        _stop_1(_self),
        _start_1(_self),
        _negated_1(_step_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Range_3(
        _last_1(_self),
        _start_1(_self),
        _negated_1(_step_1(_self)),
      );
    });
  },
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tRange(self.stop, self.start, self.step.negated)\n\t\t} {\n\t\t\tRange(self.last, self.start, self.step.negated)\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
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

sl.addMethod(
  "Range",
  "Range",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _derived = _plusSign_2(
      _quotient_2(
        _hyphenMinus_2(_stop_1(_self), _start_1(_self)),
        _step_1(_self),
      ),
      1,
    );
    /* Statements */
    return _if_3(_lessThanSign_2(_step_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _lessThanSign_2(_start_1(_self), _stop_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return 0;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _derived;
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _lessThanSign_2(_stop_1(_self), _start_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return 0;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _derived;
        },
      );
    });
  },
  "{ :self |\n\t\tlet derived = (self.stop - self.start).quotient(self.step) + 1;\n\t\t(self.step < 0).if {\n\t\t\t(self.start < self.stop).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tderived\n\t\t\t}\n\t\t} {\n\t\t\t(self.stop < self.start).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tderived\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "sorted",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_step_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _reversed_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\t(self.step < 0).if {\n\t\t\tself.reversed\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _List_1;
  },
  "{ :self |\n\t\tList:/1\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Range(",
      _start_1(_self),
      ", ",
      _stop_1(_self),
      ", ",
      _step_1(_self),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'Range(',\n\t\t\t\tself.start,\n\t\t\t\t', ',\n\t\t\t\tself.stop,\n\t\t\t\t', ',\n\t\t\t\tself.step,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
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

sl.extendTraitWithMethod(
  "Number",
  "Range",
  "downTo",
  ["self", "stop"],
  function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_greaterThanSign_2(_stop, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "downTo: non descending");
    });
    return _Range_3(_self, _stop, -1);
  },
  "{ :self :stop |\n\t\t(stop > self).ifTrue {\n\t\t\tself.error('downTo: non descending')\n\t\t};\n\t\tRange(self, stop, -1)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Range",
  "Range",
  ["start", "stop", "step"],
  function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newRange_0(), _start, _stop, _step);
  },
  "{ :start :stop :step |\n\t\tnewRange().initializeSlots(start, stop, step)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Range",
  "thenTo",
  ["self", "second", "last"],
  function (_self, _second, _last) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _second, _last";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Range_3(_self, _last, _hyphenMinus_2(_second, _self));
  },
  "{ :self :second :last |\n\t\tRange(self, last, second - self)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Range",
  "to",
  ["self", "stop"],
  function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Range_3(_self, _stop, 1);
  },
  "{ :self :stop |\n\t\tRange(self, stop, 1)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Range",
  "toBy",
  ["self", "stop", "step"],
  function (_self, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _stop, _step";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Range_3(_self, _stop, _step);
  },
  "{ :self :stop :step |\n\t\tRange(self, stop, step)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Range",
  "upOrDownTo",
  ["self", "stop"],
  function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Range_3(
      _self,
      _stop,
      _if_3(_lessThanSignEqualsSign_2(_self, _stop), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return -1;
      }),
    );
  },
  "{ :self :stop |\n\t\tRange(\n\t\t\tself,\n\t\t\tstop,\n\t\t\t(self <= stop).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t-1\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Range",
  "upTo",
  ["self", "stop"],
  function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_lessThanSign_2(_stop, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "upTo: non ascending");
    });
    return _Range_3(_self, _stop, 1);
  },
  "{ :self :stop |\n\t\t(stop < self).ifTrue {\n\t\t\tself.error('upTo: non ascending')\n\t\t};\n\t\tRange(self, stop, 1)\n\t}",
);
