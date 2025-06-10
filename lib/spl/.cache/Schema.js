sl.extendTypeOrTraitWithMethod(
  "String",
  "Schema",
  "inferSchemaType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _which_1([
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isBooleanString_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Boolean";
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isDecimalIntegerString_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Integer";
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isFractionString_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Fraction";
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isComplexString_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Complex";
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isFloatString_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Real";
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isDateString_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Date";
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isDateAndTimeString_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "DateAndTime";
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isIso8601DurationString_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Duration";
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isTimeString_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Time";
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(true, "String"),
    ]);
  }, ["self"]),
  "{ :self | which([->({ isBooleanString(self) }, { 'Boolean' }), ->({ isDecimalIntegerString(self) }, { 'Integer' }), ->({ isFractionString(self) }, { 'Fraction' }), ->({ isComplexString(self) }, { 'Complex' }), ->({ isFloatString(self) }, { 'Real' }), ->({ isDateString(self) }, { 'Date' }), ->({ isDateAndTimeString(self) }, { 'DateAndTime' }), ->({ isIso8601DurationString(self) }, { 'Duration' }), ->({ isTimeString(self) }, { 'Time' }), ->(true, 'String')]) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Schema",
  "schemaTypeParser",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
          "Boolean",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseBoolean_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Integer",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseDecimalInteger_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Fraction",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseFraction_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Complex",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseComplex_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Real",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseNumber_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Date",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseDate_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "DateAndTime",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseDateAndTime_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Duration",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseDuration_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Time",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseTime_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "String",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_s, _f_0) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _s, _f_0";
                throw new Error(errorMessage);
              } /* Statements */
              return _s;
            }, ["s", "f:/0"]);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "schemaTypeParser: unknown type");
      }, []),
    );
  }, ["self"]),
  "{ :self | caseOf(self, [->('Boolean', { parseBoolean:/2 }), ->('Integer', { parseDecimalInteger:/2 }), ->('Fraction', { parseFraction:/2 }), ->('Complex', { parseComplex:/2 }), ->('Real', { parseNumber:/2 }), ->('Date', { parseDate:/2 }), ->('DateAndTime', { parseDateAndTime:/2 }), ->('Duration', { parseDuration:/2 }), ->('Time', { parseTime:/2 }), ->('String', { { :s :f:/0 | s } })], { error(self,'schemaTypeParser: unknown type') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Schema",
  "schemaTypePredicate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
          "Boolean",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isBoolean_1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Integer",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isInteger_1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Fraction",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isFraction_1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Complex",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isComplex_1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Real",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isSmallFloat_1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Date",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isDate_1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "DateAndTime",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isDateAndTime_1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Duration",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isDuration_1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Time",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isTime_1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "String",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isString_1;
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "schemaTypePredicate: unknown type");
      }, []),
    );
  }, ["self"]),
  "{ :self | caseOf(self, [->('Boolean', { isBoolean:/1 }), ->('Integer', { isInteger:/1 }), ->('Fraction', { isFraction:/1 }), ->('Complex', { isComplex:/1 }), ->('Real', { isSmallFloat:/1 }), ->('Date', { isDate:/1 }), ->('DateAndTime', { isDateAndTime:/1 }), ->('Duration', { isDuration:/1 }), ->('Time', { isTime:/1 }), ->('String', { isString:/1 })], { error(self,'schemaTypePredicate: unknown type') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Schema",
  "isSchemaType",
  ["self", "schemaType"],
  sl.annotateFunction(function (_self, _schemaType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _schemaType";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_schemaTypePredicate_1(_schemaType), _self);
  }, ["self", "schemaType"]),
  "{ :self :schemaType | value(schemaTypePredicate(schemaType),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Schema",
  "parseSchemaType",
  ["self", "schemaType", "elseClause:/0"],
  sl.annotateFunction(function (_self, _schemaType, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _schemaType, _elseClause_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parser_2 = _schemaTypeParser_1(_schemaType);
    /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _parser_2(_each, _elseClause_0);
      }, ["each"]),
    );
  }, ["self", "schemaType", "elseClause:/0"]),
  "{ :self :schemaType :elseClause:/0 | let parser:/2 = schemaTypeParser(schemaType); collect(self, { :each | parser(each, elseClause:/0) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Schema",
  "parseSchemaType",
  ["self", "schemaType"],
  sl.annotateFunction(function (_self, _schemaType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _schemaType";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseSchemaType_3(
      _self,
      _schemaType,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "parseSchemeType: unknown type or invalid input",
        );
      }, []),
    );
  }, ["self", "schemaType"]),
  "{ :self :schemaType | parseSchemaType(self, schemaType, { error(self,'parseSchemeType: unknown type or invalid input') }) }",
);
