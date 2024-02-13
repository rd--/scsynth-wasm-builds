sl.addType(
  true,
  "Date",
  "Date",
  ["Object", "Magnitude"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Date",
);

sl.copyTraitToType(
  "Magnitude",
  "Date",
);

sl.addMethod(
  "Date",
  "Date",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isDate_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(
        _unixTimeInMilliseconds_1(_self),
        _unixTimeInMilliseconds_1(_anObject),
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isDate & {\n\t\t\tself.unixTimeInMilliseconds = anObject.unixTimeInMilliseconds\n\t\t}\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "lessThanSign",
  ["self", "aDate"],
  function (_self, _aDate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDate";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(
      _unixTimeInMilliseconds_1(_self),
      _unixTimeInMilliseconds_1(_aDate),
    );
  },
  "{ :self :aDate |\n\t\tself.unixTimeInMilliseconds < aDate.unixTimeInMilliseconds\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "dayOfWeek",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getDay() + 1;
  },
  "{ :self |\n\t\t<primitive: return _self.getDay() + 1;>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "dayOfMonth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getDate();
  },
  "{ :self |\n\t\t<primitive: return _self.getDate();>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "hours",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getHours();
  },
  "{ :self |\n\t\t<primitive: return _self.getHours();>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "iso8601",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toISOString();
  },
  "{ :self |\n\t\t<primitive: return _self.toISOString();>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "localeTimeString",
  ["self", "localeName"],
  function (_self, _localeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _localeName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toLocaleTimeString(_localeName);
  },
  "{ :self :localeName |\n\t\t<primitive: return _self.toLocaleTimeString(_localeName);>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "milliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getMilliseconds();
  },
  "{ :self |\n\t\t<primitive: return _self.getMilliseconds();>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "minutes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getMinutes();
  },
  "{ :self |\n\t\t<primitive: return _self.getMinutes();>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "month",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getMonth() + 1;
  },
  "{ :self |\n\t\t<primitive: return _self.getMonth() + 1;>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "offsetSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.round(_self.getTimezoneOffset() * 60);
  },
  "{ :self |\n\t\t<primitive: return Math.round(_self.getTimezoneOffset() * 60);>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "seconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getSeconds();
  },
  "{ :self |\n\t\t<primitive: return _self.getSeconds();>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "unixTimeInMilliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getTime();
  },
  "{ :self |\n\t\t<primitive: return _self.getTime();>\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "unixTimeInSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_unixTimeInMilliseconds_1(_self), 1000);
  },
  "{ :self |\n\t\tself.unixTimeInMilliseconds / 1000\n\t}",
);

sl.addMethod(
  "Date",
  "Date",
  "year",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getFullYear();
  },
  "{ :self |\n\t\t<primitive: return _self.getFullYear();>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Date",
  "asDate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Date(_self * 1000);
  },
  "{ :self |\n\t\t<primitive: return new Date(_self * 1000);>\n\t}",
);

sl.addMethod(
  "String",
  "Date",
  "parseDate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Date(_self);
  },
  "{ :self |\n\t\t<primitive: return new Date(_self);>\n\t}",
);

sl.addMethod(
  "System",
  "Date",
  "Date",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Date();
  },
  "{ :self |\n\t\t<primitive: return new Date();>\n\t}",
);
