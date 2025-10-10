sl.addType(
  false,
  "Span",
  "Span",
  [
    "Object",
    "Equatable",
    "Comparable",
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
  "Equatable",
  "Span",
);

sl.copyTraitMethodsToType(
  "Comparable",
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
  "{ :self |\n\t\tself.isRelative.if {\n\t\t\tself.error('asRange: relative span')\n\t\t} {\n\t\t\tRange(self.start, self.stop, self.step)\n\t\t}\n\t}",
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
  "{ :self :extent |\n\t\tself.isRelative.if {\n\t\t\tlet start = self.start;\n\t\t\tlet stop = self.stop;\n\t\t\t(start < 1).ifTrue {\n\t\t\t\tstart := extent - start.abs + 1\n\t\t\t};\n\t\t\t(stop < 1).ifTrue {\n\t\t\t\tstop := extent - stop.abs + 1\n\t\t\t};\n\t\t\tRange(start, stop, self.step)\n\t\t} {\n\t\t\tRange(self.start, self.stop, self.step)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Span",
  "Span",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_3(_self, _anObject, _aBlock_2);
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tself.hasEqualSlots(anObject, aBlock:/2)\n\t}",
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
  "{ :self |\n\t\tlet start = self.start;\n\t\tlet stop = self.stop;\n\t\tlet step = self.step;\n\t\tlet relativeStart = start.isNegative & { stop.isPositive & { step.isNegative } };\n\t\tlet relativeStop = start.isPositive & { stop.isNegative & { step.isPositive } };\n\t\trelativeStart || relativeStop\n\t}",
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
  "{ :self :operand |\n\t\toperand.atAll(self.asRange(operand.size))\n\t}",
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
  "{ :self |\n\t\tself.isRelative.if {\n\t\t\tself.error('size: relative span')\n\t\t} {\n\t\t\tself.asRange.size\n\t\t}\n\t}",
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
  "{ :self |\n\t\tList:/1\n\t}",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
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
  "{ :start :stop :step |\n\t\t[start, stop, step].allSatisfy(isInteger:/1).if {\n\t\t\tnewSpan().initializeSlots(start, stop, step)\n\t\t} {\n\t\t\tstart.error('SmallFloat>>Span: invalid operand?')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
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
  "{ :start :stop :step |\n\t\tlet span = basicSpan(start, stop, step);\n\t\tspan.isRelative.if {\n\t\t\tspan\n\t\t} {\n\t\t\tspan.asRange\n\t\t}\n\t}",
);
