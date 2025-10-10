/*  Requires: TimeStamp  */

sl.addType(
  false,
  "TimeInterval",
  "TimeInterval",
  ["Object", "Equatable"],
  ["min", "max"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TimeInterval",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "TimeInterval",
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
  "{ :self |\n\t\tInterval(\n\t\t\tself.min.absoluteTime,\n\t\t\tself.max.absoluteTime\n\t\t)\n\t}",
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
  "{ :self |\n\t\tDuration(\n\t\t\tself.max.absoluteTime - self.min.absoluteTime\n\t\t)\n\t}",
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
  "{ :self :aTimeStamp |\n\t\taTimeStamp >= self.min & {\n\t\t\taTimeStamp < self.max\n\t\t}\n\t}",
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
  "{ :self |\n\t\t[self.min, self.max]\n\t}",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
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
  "{ :self :operand |\n\t\toperand.isTimeStamp.if {\n\t\t\tnewTimeInterval().initializeSlots(self, operand)\n\t\t} {\n\t\t\toperand.isDuration.if {\n\t\t\t\tTimeInterval(self, self + operand)\n\t\t\t} {\n\t\t\t\tself.error('TimeStamp>>TimeInterval: invalid operand')\n\t\t\t}\n\t\t}\n\t}",
);
