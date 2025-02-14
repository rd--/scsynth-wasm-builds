sl.addType(
  false,
  "Range",
  "Range",
  [
    "Object",
    "Iterable",
    "Collection",
    "Indexable",
    "Sequence",
    "ArithmeticProgression",
  ],
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

sl.copyTraitToType(
  "ArithmeticProgression",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isRange_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_start_1(_self), _start_1(_operand)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _equalsSign_2(_stop_1(_self), _stop_1(_operand)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSmallFloat_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Range_3(
        _plusSign_2(_start_1(_self), _operand),
        _plusSign_2(_stop_1(_self), _operand),
        _step_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToCollectionAndApply_3(_operand, _self, _plusSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isSmallFloat.if {\n\t\t\tRange(self.start + operand, self.stop + operand, self.step)\n\t\t} {\n\t\t\toperand.adaptToCollectionAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "hyphenMinus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _negated_1(_self);
  },
  "{ :self |\n\t\tself.negated\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSmallFloat_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Range_3(
        _hyphenMinus_2(_start_1(_self), _operand),
        _hyphenMinus_2(_stop_1(_self), _operand),
        _step_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToCollectionAndApply_3(_operand, _self, _hyphenMinus_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isSmallFloat.if {\n\t\t\tRange(self.start - operand, self.stop - operand, self.step)\n\t\t} {\n\t\t\toperand.adaptToCollectionAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "asRange",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "concisePrintString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_self);
  },
  "{ :self |\n\t\tself.printString\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "isIntegerRange",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isInteger_1(_start_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_isInteger_1(_stop_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _isInteger_1(_step_1(_self));
      });
    });
  },
  "{ :self |\n\t\tself.start.isInteger & {\n\t\t\tself.stop.isInteger & {\n\t\t\t\tself.step.isInteger\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "isNormal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isProper_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSignEqualsSign_2(_start_1(_self), _stop_1(_self));
    });
  },
  "{ :self |\n\t\tself.isProper & {\n\t\t\tself.start <= self.stop\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "isProper",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_not_1(_isEmpty_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _tilde_2(_stop_1(_self), _last_1(_self));
    });
  },
  "{ :self |\n\t\tself.isEmpty.not & {\n\t\t\tself.stop ~ self.last\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Range",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(
      _negated_1(_start_1(_self)),
      _negated_1(_stop_1(_self)),
      _negated_1(_step_1(_self)),
    );
  },
  "{ :self |\n\t\tRange(self.start.negated, self.stop.negated, self.step.negated)\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(_equalsSign_2(_step_1(_self), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_isEmpty_1(_self));
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _plusSignPlusSign_2(_printString_1(_start_1(_self)), ":"),
          _printString_1(_stop_1(_self)),
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _join_2([
          _printString_1(_start_1(_self)),
          _printString_1(_step_1(_self)),
          _printString_1(_stop_1(_self)),
        ], ":");
      },
    );
  },
  "{ :self |\n\t\t(\n\t\t\tself.step = 1 & {\n\t\t\t\tself.isEmpty.not\n\t\t\t}\n\t\t).if {\n\t\t\tself.start.printString ++ ':' ++ self.stop.printString\n\t\t} {\n\t\t\t[\n\t\t\t\tself.start.printString,\n\t\t\t\tself.step.printString,\n\t\t\t\tself.stop.printString\n\t\t\t].join(':')\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _emptyError_2(_self, "removeFirst");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _emptyError_2(_self, "removeLast");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Range_3(
        _stop_1(_self),
        _start_1(_self),
        _negated_1(_step_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
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
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_start_1(_self), _stop_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _derived;
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_stop_1(_self), _start_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSign_2(_step_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _reversed_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      "Range(",
      _storeString_1(_start_1(_self)),
      ", ",
      _storeString_1(_stop_1(_self)),
      ", ",
      _storeString_1(_step_1(_self)),
      ")",
    ], "");
  },
  "{ :self |\n\t\t[\n\t\t\t'Range(',\n\t\t\tself.start.storeString,\n\t\t\t', ',\n\t\t\tself.stop.storeString,\n\t\t\t', ',\n\t\t\tself.step.storeString,\n\t\t\t')'\n\t\t].join('')\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isZero_1(_step), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_start, "Number>>Range: step is zero");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_4(_newRange_0(), _start, _stop, _step);
    });
  },
  "{ :start :stop :step |\n\t\tstep.isZero.if {\n\t\t\tstart.error('Number>>Range: step is zero')\n\t\t} {\n\t\t\tnewRange().initializeSlots(start, stop, step)\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSequence_1(_stop), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _to_2([_self], _stop);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Range_3(_self, _stop, 1);
    });
  },
  "{ :self :stop |\n\t\tstop.isSequence.if {\n\t\t\t[self].to(stop)\n\t\t} {\n\t\t\tRange(self, stop, 1)\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(
      _self,
      _stop,
      _if_3(_lessThanSignEqualsSign_2(_self, _stop), function () {
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
        return -1;
      }),
    );
  },
  "{ :self :stop |\n\t\tRange(\n\t\t\tself,\n\t\t\tstop,\n\t\t\t(self <= stop).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t-1\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Range",
  "to",
  ["self", "stop"],
  function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _self, _to_2);
  },
  "{ :self :stop |\n\t\tstop.adaptToCollectionAndApply(self, to:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Range",
  "upOrDownTo",
  ["self", "stop"],
  function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _self, _upOrDownTo_2);
  },
  "{ :self :stop |\n\t\tstop.adaptToCollectionAndApply(self, upOrDownTo:/2)\n\t}",
);
