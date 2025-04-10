sl.addType(
  false,
  "TimeStamp",
  "TimeStamp",
  ["Object", "Magnitude"],
  ["absoluteTime"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TimeStamp",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "TimeStamp",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "equalsSign",
  ["self", "aTimeStamp"],
  sl.annotateFunction(function (_self, _aTimeStamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeStamp";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isTimeStamp_1(_aTimeStamp),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _absoluteTime_1(_self),
          _absoluteTime_1(_aTimeStamp),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "aTimeStamp"]),
  "{ :self :aTimeStamp | if(isTimeStamp(aTimeStamp), { =(absoluteTime(self), absoluteTime(aTimeStamp)) }, { false }) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "lessThanSign",
  ["self", "aTimeStamp"],
  sl.annotateFunction(function (_self, _aTimeStamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeStamp";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(
      _absoluteTime_1(_self),
      _absoluteTime_1(_aTimeStamp),
    );
  }, ["self", "aTimeStamp"]),
  "{ :self :aTimeStamp | <(absoluteTime(self), absoluteTime(aTimeStamp)) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeStamp_1(
      _plusSign_2(_absoluteTime_1(_self), _asSeconds_1(_operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand | TimeStamp(+(absoluteTime(self), asSeconds(operand))) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeStamp_1(
      _hyphenMinus_2(_absoluteTime_1(_self), _asSeconds_1(_operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand | TimeStamp(-(absoluteTime(self), asSeconds(operand))) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "asDate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDate_1(_absoluteTime_1(_self));
  }, ["self"]),
  "{ :self | asDate(absoluteTime(self)) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "asTimeStamp",
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
  "TimeStamp",
  "TimeStamp",
  "dateTimeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dateTimeString_1(_asDate_1(_self));
  }, ["self"]),
  "{ :self | dateTimeString(asDate(self)) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "roundTo",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    _absoluteTime_2(
      _self,
      _roundTo_2(_absoluteTime_1(_self), _asSeconds_1(_operand)),
    );
    return _self;
  }, ["self", "operand"]),
  "{ :self :operand | absoluteTime(self, roundTo(absoluteTime(self),asSeconds(operand))); self }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
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
  "System",
  "TimeStamp",
  "now",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeStamp_1(_absoluteTime_1(_self));
  }, ["self"]),
  "{ :self | TimeStamp(absoluteTime(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TimeStamp",
  "asTimeStamp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeStamp_1(_self);
  }, ["self"]),
  "{ :self | TimeStamp(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TimeStamp",
  "TimeStamp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTimeStamp_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newTimeStamp(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TimeStamp",
  "absoluteTime",
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

sl.extendTypeOrTraitWithMethod(
  "String",
  "TimeStamp",
  "parseTimeStamp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2([24, 29], _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asTimeStamp_1(_basicParseDate_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseTimeStamp: invalid size");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(includes([24, 29],size(self)), { asTimeStamp(basicParseDate(self)) }, { error(self,'parseTimeStamp: invalid size') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "TimeStamp",
  "valueAt",
  ["self", "time"],
  sl.annotateFunction(function (_self, _time) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _time";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _now = _absoluteTime_1(_system);
    /* Statements */
    return _valueAfter_2(_self, _hyphenMinus_2(_absoluteTime_1(_time), _now));
  }, ["self", "time"]),
  "{ :self :time | let now = absoluteTime(system); valueAfter(self,-(absoluteTime(time), now)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "TimeStamp",
  "valueAtWith",
  ["self", "time", "anObject"],
  sl.annotateFunction(function (_self, _time, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _time, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _now = _absoluteTime_1(_system);
    /* Statements */
    return _valueAfterWith_3(
      _self,
      _hyphenMinus_2(_absoluteTime_1(_time), _now),
      _anObject,
    );
  }, ["self", "time", "anObject"]),
  "{ :self :time :anObject | let now = absoluteTime(system); valueAfterWith(self,-(absoluteTime(time), now), anObject) }",
);
