sl.addType(
  false,
  "Span",
  "Span",
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
  "Span",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Span",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Span",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Span",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "Span",
);

sl.copyTraitMethodsToType(
  "ArithmeticProgression",
  "Span",
);

sl.addMethodToExistingType(
  "Span",
  "Span",
  "equalsSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand | hasEqualSlots(self,operand) }",
);

sl.addMethodToExistingType(
  "Span",
  "Span",
  "tilde",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand | =(self, operand) }",
);

sl.addMethodToExistingType(
  "Span",
  "Span",
  "asRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isRelative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asRange: relative span");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(_start_1(_self), _stop_1(_self), _step_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isRelative(self), { error(self,'asRange: relative span') }, { Range(start(self), stop(self), step(self)) }) }",
);

sl.addMethodToExistingType(
  "Span",
  "Span",
  "asRange",
  ["self", "extent"],
  sl.annotateFunction(function (_self, _extent) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _extent";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isRelative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _start = _start_1(_self);
        let _stop = _stop_1(_self);
        /* Statements */
        _ifTrue_2(
          _lessThanSign_2(_start, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _start = _plusSign_2(
              _hyphenMinus_2(_extent, _abs_1(_start)),
              1,
            );
          }, []),
        );
        _ifTrue_2(
          _lessThanSign_2(_stop, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _stop = _plusSign_2(
              _hyphenMinus_2(_extent, _abs_1(_stop)),
              1,
            );
          }, []),
        );
        return _Range_3(_start, _stop, _step_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(_start_1(_self), _stop_1(_self), _step_1(_self));
      }, []),
    );
  }, ["self", "extent"]),
  "{ :self :extent | if(isRelative(self), { let start = start(self); let stop = stop(self); ifTrue((<(start, 1)), { start := +(-(extent, abs(start)), 1) }); ifTrue((<(stop, 1)), { stop := +(-(extent, abs(stop)), 1) }); Range(start, stop, step(self)) }, { Range(start(self), stop(self), step(self)) }) }",
);

sl.addMethodToExistingType(
  "Span",
  "Span",
  "asSpan",
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
  "Span",
  "Span",
  "isRelative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _start = _start_1(_self);
    let _stop = _stop_1(_self);
    let _step = _step_1(_self);
    let _relativeStart = _ampersand_2(
      _isNegative_1(_start),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isPositive_1(_stop),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isNegative_1(_step);
          }, []),
        );
      }, []),
    );
    let _relativeStop = _ampersand_2(
      _isPositive_1(_start),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isNegative_1(_stop),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isPositive_1(_step);
          }, []),
        );
      }, []),
    );
    /* Statements */
    return _verticalLineVerticalLine_2(_relativeStart, _relativeStop);
  }, ["self"]),
  "{ :self | let start = start(self); let stop = stop(self); let step = step(self); let relativeStart = &(isNegative(start), { &(isPositive(stop), { isNegative(step) }) }); let relativeStop = &(isPositive(start), { &(isNegative(stop), { isPositive(step) }) }); ||(relativeStart, relativeStop) }",
);

sl.addMethodToExistingType(
  "Span",
  "Span",
  "partIndex",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAll_2(_operand, _asRange_2(_self, _size_1(_operand)));
  }, ["self", "operand"]),
  "{ :self :operand | atAll(operand,asRange(self,size(operand))) }",
);

sl.addMethodToExistingType(
  "Span",
  "Span",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isRelative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "size: relative span");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_asRange_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isRelative(self), { error(self,'size: relative span') }, { size(asRange(self)) }) }",
);

sl.addMethodToExistingType(
  "Span",
  "Span",
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
  "Span",
  "Span",
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
  "SmallFloat",
  "Span",
  "basicSpan",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _allSatisfy_2([_start, _stop, _step], _isInteger_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_4(_newSpan_0(), _start, _stop, _step);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_start, "SmallFloat>>Span: invalid operand?");
      }, []),
    );
  }, ["start", "stop", "step"]),
  "{ :start :stop :step | if(allSatisfy([start, stop, step],isInteger:/1), { initializeSlots(newSpan(),start, stop, step) }, { error(start,'SmallFloat>>Span: invalid operand?') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Span",
  "Span",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _span = _basicSpan_3(_start, _stop, _step);
    /* Statements */
    return _if_3(
      _isRelative_1(_span),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _span;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asRange_1(_span);
      }, []),
    );
  }, ["start", "stop", "step"]),
  "{ :start :stop :step | let span = basicSpan(start, stop, step); if(isRelative(span), { span }, { asRange(span) }) }",
);
