sl.addType(
  false,
  "Range",
  "Range",
  [
    "Object",
    "Iterable",
    "Collection",
    "Indexable",
    "Sequenceable",
    "ArithmeticProgression",
  ],
  ["start", "stop", "step"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Range",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Range",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Range",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Range",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "Range",
);

sl.copyTraitMethodsToType(
  "ArithmeticProgression",
  "Range",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "equalsSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isRange_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_start_1(_self), _start_1(_operand)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _equalsSign_2(_stop_1(_self), _stop_1(_operand)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_step_1(_self), _step_1(_operand));
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | &(isRange(operand), { &(=(start(self), start(operand)), { &(=(stop(self), stop(operand)), { =(step(self), step(operand)) }) }) }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallFloat_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(
          _plusSign_2(_start_1(_self), _operand),
          _plusSign_2(_stop_1(_self), _operand),
          _step_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToCollectionAndApply_3(_operand, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isSmallFloat(operand), { Range(+(start(self), operand), +(stop(self), operand), step(self)) }, { adaptToCollectionAndApply(operand,self, +) }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "hyphenMinus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _negated_1(_self);
  }, ["self"]),
  "{ :self | negated(self) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallFloat_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(
          _hyphenMinus_2(_start_1(_self), _operand),
          _hyphenMinus_2(_stop_1(_self), _operand),
          _step_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToCollectionAndApply_3(_operand, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isSmallFloat(operand), { Range(-(start(self), operand), -(stop(self), operand), step(self)) }, { adaptToCollectionAndApply(operand,self, -) }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "asRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_self);
  }, ["self"]),
  "{ :self | printString(self) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "isIntegerRange",
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
        return _ampersand_2(
          _isInteger_1(_stop_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isInteger_1(_step_1(_self));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isInteger(start(self)), { &(isInteger(stop(self)), { isInteger(step(self)) }) }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "isNormal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isProper_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_start_1(_self), _stop_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isProper(self), { <=(start(self), stop(self)) }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "isProper",
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
        return _tilde_2(_stop_1(_self), _last_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | &(not(isEmpty(self)), { ~(stop(self), last(self)) }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "isMatrix",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["unused"]),
  "{ :unused | false }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "isRegularlySpaced",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused | true }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "isVector",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused | true }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "negated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(
      _negated_1(_start_1(_self)),
      _negated_1(_stop_1(_self)),
      _negated_1(_step_1(_self)),
    );
  }, ["self"]),
  "{ :self | Range(negated(start(self)), negated(stop(self)), negated(step(self))) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_step_1(_self), 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _not_1(_isEmpty_1(_self));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _plusSignPlusSign_2(_printString_1(_start_1(_self)), ":"),
          _printString_1(_stop_1(_self)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("%:%:%", [
          _printString_1(_start_1(_self)),
          _printString_1(_step_1(_self)),
          _printString_1(_stop_1(_self)),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((&(=(step(self), 1), { not(isEmpty(self)) })), { ++(++(printString(start(self)), ':'), printString(stop(self))) }, { format('%:%:%',[printString(start(self)), printString(step(self)), printString(stop(self))]) }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "removeFirst",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _emptyError_2(_self, "removeFirst");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _removed = _start_1(_self);
        /* Statements */
        _start_2(_self, _plusSign_2(_start_1(_self), _step_1(_self)));
        return _removed;
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { emptyError(self,'removeFirst') }, { let removed = start(self); start(self, +(start(self), step(self))); removed }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "removeLast",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _emptyError_2(_self, "removeLast");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _removed = _stop_1(_self);
        /* Statements */
        _stop_2(_self, _hyphenMinus_2(_stop_1(_self), _step_1(_self)));
        return _removed;
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { emptyError(self,'removeLast') }, { let removed = stop(self); stop(self, -(stop(self), step(self))); removed }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "reversed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(
          _stop_1(_self),
          _start_1(_self),
          _negated_1(_step_1(_self)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(
          _last_1(_self),
          _start_1(_self),
          _negated_1(_step_1(_self)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { Range(stop(self), start(self), negated(step(self))) }, { Range(last(self), start(self), negated(step(self))) }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
    return _if_3(
      _lessThanSign_2(_step_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_start_1(_self), _stop_1(_self)),
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
            return _derived;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_stop_1(_self), _start_1(_self)),
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
            return _derived;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let derived = +(quotient((-(stop(self), start(self))),step(self)), 1); if((<(step(self), 0)), { if((<(start(self), stop(self))), { 0 }, { derived }) }, { if((<(stop(self), start(self))), { 0 }, { derived }) }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "sorted",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_step_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reversed_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
    );
  }, ["self"]),
  "{ :self | if((<(step(self), 0)), { reversed(self) }, { self }) }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_1;
  }, ["self"]),
  "{ :self | List:/1 }",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "Range",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_step),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_start, "Number>>Range: step is zero");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_4(_newRange_0(), _start, _stop, _step);
      }, []),
    );
  }, ["start", "stop", "step"]),
  "{ :start :stop :step | if(isZero(step), { error(start,'Number>>Range: step is zero') }, { initializeSlots(newRange(),start, stop, step) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "thenTo",
  ["self", "second", "last"],
  sl.annotateFunction(function (_self, _second, _last) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _second, _last";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(_self, _last, _hyphenMinus_2(_second, _self));
  }, ["self", "second", "last"]),
  "{ :self :second :last | Range(self, last, -(second, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "to",
  ["self", "stop"],
  sl.annotateFunction(function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSequenceable_1(_stop),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _to_2([_self], _stop);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(_self, _stop, 1);
      }, []),
    );
  }, ["self", "stop"]),
  "{ :self :stop | if(isSequenceable(stop), { to([self],stop) }, { Range(self, stop, 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "toBy",
  ["self", "stop", "step"],
  sl.annotateFunction(function (_self, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(_self, _stop, _step);
  }, ["self", "stop", "step"]),
  "{ :self :stop :step | Range(self, stop, step) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "upOrDownTo",
  ["self", "stop"],
  sl.annotateFunction(function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(
      _self,
      _stop,
      _if_3(
        _lessThanSignEqualsSign_2(_self, _stop),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return -1;
        }, []),
      ),
    );
  }, ["self", "stop"]),
  "{ :self :stop | Range(self, stop, if((<=(self, stop)), { 1 }, { -1 })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Range",
  "to",
  ["self", "stop"],
  sl.annotateFunction(function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _self, _to_2);
  }, ["self", "stop"]),
  "{ :self :stop | adaptToCollectionAndApply(stop,self, to:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Range",
  "to",
  ["self", "stop"],
  sl.annotateFunction(function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _self, _to_2);
  }, ["self", "stop"]),
  "{ :self :stop | adaptToCollectionAndApply(stop,self, to:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Range",
  "upOrDownTo",
  ["self", "stop"],
  sl.annotateFunction(function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _self, _upOrDownTo_2);
  }, ["self", "stop"]),
  "{ :self :stop | adaptToCollectionAndApply(stop,self, upOrDownTo:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Range",
  "upOrDownTo",
  ["self", "stop"],
  sl.annotateFunction(function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _self, _upOrDownTo_2);
  }, ["self", "stop"]),
  "{ :self :stop | adaptToCollectionAndApply(stop,self, upOrDownTo:/2) }",
);
