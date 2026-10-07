sl.addType(
  false,
  "TimeStamp",
  "TimeStamp",
  ["Object", "Copy", "Store", "Equal", "Compare"],
  ["absoluteTime"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TimeStamp",
);

sl.copyTraitMethodsToType(
  "Copy",
  "TimeStamp",
);

sl.copyTraitMethodsToType(
  "Store",
  "TimeStamp",
);

sl.copyTraitMethodsToType(
  "Equal",
  "TimeStamp",
);

sl.copyTraitMethodsToType(
  "Compare",
  "TimeStamp",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "less",
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
  "{ :self :aTimeStamp |\n\t\tself.absoluteTime < aTimeStamp.absoluteTime\n\t}",
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
  "{ :self :aTimeStamp |\n\t\tself.absoluteTime < aTimeStamp.absoluteTime\n\t}",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "plus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeStamp_1(
      _plusSign_2(_absoluteTime_1(_self), _inSeconds_1(_operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tTimeStamp(self.absoluteTime + operand.inSeconds)\n\t}",
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
      _plusSign_2(_absoluteTime_1(_self), _inSeconds_1(_operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tTimeStamp(self.absoluteTime + operand.inSeconds)\n\t}",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "subtract",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeStamp_1(
      _hyphenMinus_2(_absoluteTime_1(_self), _inSeconds_1(_operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tTimeStamp(self.absoluteTime - operand.inSeconds)\n\t}",
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
      _hyphenMinus_2(_absoluteTime_1(_self), _inSeconds_1(_operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tTimeStamp(self.absoluteTime - operand.inSeconds)\n\t}",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "Date",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Date_1(_absoluteTime_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tDate(self.absoluteTime)\n\t}",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "DateAndTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _DateAndTime_1(_absoluteTime_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tDateAndTime(self.absoluteTime)\n\t}",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "dateAndTimeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dateAndTimeString_1(_DateAndTime_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tDateAndTime(self).dateAndTimeString\n\t}",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "equalBy",
  ["self", "aTimeStamp", "aBlock/2"],
  sl.annotateFunction(function (_self, _aTimeStamp, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aTimeStamp, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isTimeStamp_1(_aTimeStamp),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_absoluteTime_1(_self), _absoluteTime_1(_aTimeStamp));
      }, []),
    );
  }, ["self", "aTimeStamp", "aBlock/2"]),
  "{ :self :aTimeStamp :aBlock/2 |\n\t\taTimeStamp.isTimeStamp & {\n\t\t\taBlock(self.absoluteTime, aTimeStamp.absoluteTime)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "round",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    _absoluteTimeMutateInPlace_2(
      _self,
      _round_2(_absoluteTime_1(_self), _inSeconds_1(_operand)),
    );
    return _self;
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.absoluteTime := self.absoluteTime.round(operand.inSeconds);\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "TimeStamp",
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
  "{ :self |\n\t\tTimeStamp(self.absoluteTime)\n\t}",
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
  "{ :self |\n\t\tnewTimeStamp().initializeSlots(self)\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
    return _TimeStamp_1(_parseDateAndTime_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.parseDateAndTime.TimeStamp\n\t}",
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
    } /* Statements */
    let _now = _absoluteTime_1(_system);
    return _valueAfter_2(_self, _hyphenMinus_2(_absoluteTime_1(_time), _now));
  }, ["self", "time"]),
  "{ :self :time |\n\t\tlet now = system.absoluteTime;\n\t\tself.valueAfter(time.absoluteTime - now)\n\t}",
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
    } /* Statements */
    let _now = _absoluteTime_1(_system);
    return _valueAfterWith_3(
      _self,
      _hyphenMinus_2(_absoluteTime_1(_time), _now),
      _anObject,
    );
  }, ["self", "time", "anObject"]),
  "{ :self :time :anObject |\n\t\tlet now = system.absoluteTime;\n\t\tself.valueAfterWith(time.absoluteTime - now, anObject)\n\t}",
);
