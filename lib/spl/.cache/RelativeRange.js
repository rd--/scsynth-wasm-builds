sl.addType(
  false,
  "RelativeRange",
  "RelativeRange",
  [
    "Object",
    "Storeable",
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
  "RelativeRange",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "RelativeRange",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "RelativeRange",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "RelativeRange",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "RelativeRange",
);

sl.copyTraitMethodsToType(
  "Collection",
  "RelativeRange",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "RelativeRange",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "RelativeRange",
);

sl.copyTraitMethodsToType(
  "ArithmeticProgression",
  "RelativeRange",
);

sl.addMethodToExistingType(
  "RelativeRange",
  "RelativeRange",
  "asRange",
  ["self", "extent"],
  sl.annotateFunction(function (_self, _extent) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _extent";
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
        return _start = _plusSign_2(_hyphenMinus_2(_extent, _abs_1(_start)), 1);
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
        return _stop = _plusSign_2(_hyphenMinus_2(_extent, _abs_1(_stop)), 1);
      }, []),
    );
    return _Range_3(_start, _stop, _step_1(_self));
  }, ["self", "extent"]),
  "{ :self :extent |\n\t\tlet start = self.start;\n\t\tlet stop = self.stop;\n\t\t(start < 1).ifTrue {\n\t\t\tstart := extent - start.abs + 1\n\t\t};\n\t\t(stop < 1).ifTrue {\n\t\t\tstop := extent - stop.abs + 1\n\t\t};\n\t\tRange(start, stop, self.step)\n\t}",
);

sl.addMethodToExistingType(
  "RelativeRange",
  "RelativeRange",
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
  "RelativeRange",
  "RelativeRange",
  "isSorted",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_stop_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.stop < 1\n\t}",
);

sl.addMethodToExistingType(
  "RelativeRange",
  "RelativeRange",
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
  "RelativeRange",
  "RelativeRange",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "size");
  }, ["self"]),
  "{ :self |\n\t\tself.error('size')\n\t}",
);

sl.addMethodToExistingType(
  "RelativeRange",
  "RelativeRange",
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

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "RelativeRange",
  "isIntegerRange",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2([_start, _stop, _step], _isInteger_1);
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\t[start stop step].allSatisfy(isInteger:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "RelativeRange",
  "isRelativeRange",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Temporaries */
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
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\tlet relativeStart = start.isNegative & {\n\t\t\tstop.isPositive & {\n\t\t\t\tstep.isNegative\n\t\t\t}\n\t\t};\n\t\tlet relativeStop = start.isPositive & {\n\t\t\tstop.isNegative & {\n\t\t\t\tstep.isPositive\n\t\t\t}\n\t\t};\n\t\trelativeStart || relativeStop\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "RelativeRange",
  "rangeOrRelativeRange",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isRelativeRange_3(_start, _stop, _step),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _RelativeRange_3(_start, _stop, _step);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(_start, _stop, _step);
      }, []),
    );
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\tisRelativeRange(start, stop, step).if {\n\t\t\tRelativeRange(start, stop, step)\n\t\t} {\n\t\t\tRange(start, stop, step)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "RelativeRange",
  "RelativeRange",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isRelativeRange_3(_start, _stop, _step),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isIntegerRange_3(_start, _stop, _step);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_4(_newRelativeRange_0(), _start, _stop, _step);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_start, _stop, _step], "RelativeRange");
      }, []),
    );
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\t(\n\t\t\tisRelativeRange(start, stop, step) & {\n\t\t\t\tisIntegerRange(start, stop, step)\n\t\t\t}\n\t\t).if {\n\t\t\tnewRelativeRange().initializeSlots(start, stop, step)\n\t\t} {\n\t\t\t[start, stop, step].error('RelativeRange')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "RelativeRange",
  "RelativeRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_self, 3);
    let _start = _at_2(__SplVar1, 1);
    let _stop = _at_2(__SplVar1, 2);
    let _step = _at_2(__SplVar1, 3);
    /* Statements */
    return _RelativeRange_3(_start, _stop, _step);
  }, ["self"]),
  "{ :self |\n\t\tlet [start, stop, step] = self;\n\t\tRelativeRange(start, stop, step)\n\t}",
);
