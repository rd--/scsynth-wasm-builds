/*  Requires: TimeStamp  */

sl.addType(
  false,
  "TimeInterval",
  "TimeInterval",
  ["Object"],
  ["min", "max"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TimeInterval",
);

sl.addMethodToExistingType(
  "TimeInterval",
  "TimeInterval",
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
  "TimeInterval",
  "TimeInterval",
  "absoluteTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Interval_2(
      _absoluteTime_1(_min_1(_self)),
      _absoluteTime_1(_max_1(_self)),
    );
  }, ["self"]),
  "{ :self | Interval(absoluteTime(min(self)), absoluteTime(max(self))) }",
);

sl.addMethodToExistingType(
  "TimeInterval",
  "TimeInterval",
  "duration",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duration_1(
      _hyphenMinus_2(
        _absoluteTime_1(_max_1(_self)),
        _absoluteTime_1(_min_1(_self)),
      ),
    );
  }, ["self"]),
  "{ :self | Duration(-(absoluteTime(max(self)), absoluteTime(min(self)))) }",
);

sl.addMethodToExistingType(
  "TimeInterval",
  "TimeInterval",
  "includes",
  ["self", "aTimeStamp"],
  sl.annotateFunction(function (_self, _aTimeStamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeStamp";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSignEqualsSign_2(_aTimeStamp, _min_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_aTimeStamp, _max_1(_self));
      }, []),
    );
  }, ["self", "aTimeStamp"]),
  "{ :self :aTimeStamp | &(>=(aTimeStamp, min(self)), { <(aTimeStamp, max(self)) }) }",
);

sl.addMethodToExistingType(
  "TimeInterval",
  "TimeInterval",
  "minMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_min_1(_self), _max_1(_self)];
  }, ["self"]),
  "{ :self | [min(self), max(self)] }",
);

sl.addMethodToExistingType(
  "TimeInterval",
  "TimeInterval",
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
  "TimeStamp",
  "TimeInterval",
  "TimeInterval",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isTimeStamp_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newTimeInterval_0(), _self, _operand);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isDuration_1(_operand),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _TimeInterval_2(_self, _plusSign_2(_self, _operand));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "TimeStamp>>TimeInterval: invalid operand");
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isTimeStamp(operand), { initializeSlots(newTimeInterval(),self, operand) }, { if(isDuration(operand), { TimeInterval(self, +(self, operand)) }, { error(self,'TimeStamp>>TimeInterval: invalid operand') }) }) }",
);
