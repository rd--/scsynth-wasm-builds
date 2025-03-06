sl.addType(
  true,
  "Date",
  "Date",
  ["Object", "Magnitude"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Date",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Date",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isDate_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _unixTimeInMilliseconds_1(_self),
          _unixTimeInMilliseconds_1(_anObject),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isDate(anObject), { =(unixTimeInMilliseconds(self), unixTimeInMilliseconds(anObject)) }) }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "lessThanSign",
  ["self", "aDate"],
  sl.annotateFunction(function (_self, _aDate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDate";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(
      _unixTimeInMilliseconds_1(_self),
      _unixTimeInMilliseconds_1(_aDate),
    );
  }, ["self", "aDate"]),
  "{ :self :aDate | <(unixTimeInMilliseconds(self), unixTimeInMilliseconds(aDate)) }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "asDate",
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
  "Date",
  "Date",
  "asTimeStamp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asTimeStamp_1(_unixTimeInMilliseconds_1(_self));
  }, ["self"]),
  "{ :self | asTimeStamp(unixTimeInMilliseconds(self)) }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "dayOfWeek",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getDay() + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.getDay() + 1;>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "dayOfMonth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getDate();
  }, ["self"]),
  "{ :self | <primitive: return _self.getDate();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "hour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getHours();
  }, ["self"]),
  "{ :self | <primitive: return _self.getHours();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "iso8601",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toISOString();
  }, ["self"]),
  "{ :self | <primitive: return _self.toISOString();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "localeTimeString",
  ["self", "localeName"],
  sl.annotateFunction(function (_self, _localeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _localeName";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toLocaleTimeString(_localeName);
  }, ["self", "localeName"]),
  "{ :self :localeName | <primitive: return _self.toLocaleTimeString(_localeName);>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "millisecond",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getMilliseconds();
  }, ["self"]),
  "{ :self | <primitive: return _self.getMilliseconds();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "minute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getMinutes();
  }, ["self"]),
  "{ :self | <primitive: return _self.getMinutes();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "month",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getMonth() + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.getMonth() + 1;>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "offsetSeconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.round(_self.getTimezoneOffset() * 60);
  }, ["self"]),
  "{ :self | <primitive: return Math.round(_self.getTimezoneOffset() * 60);>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "second",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSeconds();
  }, ["self"]),
  "{ :self | <primitive: return _self.getSeconds();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "unixTimeInMilliseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getTime();
  }, ["self"]),
  "{ :self | <primitive: return _self.getTime();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "unixTimeInSeconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_unixTimeInMilliseconds_1(_self), 1000);
  }, ["self"]),
  "{ :self | /(unixTimeInMilliseconds(self), 1000) }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "year",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getFullYear();
  }, ["self"]),
  "{ :self | <primitive: return _self.getFullYear();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "asDate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Date(_self * 1000);
  }, ["self"]),
  "{ :self | <primitive: return new Date(_self * 1000);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Date",
  "parseDate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Date(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Date(_self);>\n }",
);
