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
  "{ :self |\n\t\t[\n\t\t\t{ self.isBooleanString } -> { 'Boolean' },\n\t\t\t{ self.isDecimalIntegerString } -> { 'Integer' },\n\t\t\t{ self.isFractionString } -> { 'Fraction' },\n\t\t\t{ self.isComplexString } -> { 'Complex' },\n\t\t\t{ self.isFloatString } -> { 'Real' },\n\t\t\t{ self.isDateString } -> { 'Date' },\n\t\t\t{ self.isDateAndTimeString } -> { 'DateAndTime' },\n\t\t\t{ self.isIso8601DurationString } -> { 'Duration' },\n\t\t\t{ self.isTimeString } -> { 'Time' },\n\t\t\ttrue -> 'String'\n\t\t].which\n\t}",
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
  "{ :self |\n\t\tself.caseOf(\n\t\t\t[\n\t\t\t\t'Boolean' -> { parseBoolean:/2 },\n\t\t\t\t'Integer' -> { parseDecimalInteger:/2 },\n\t\t\t\t'Fraction' -> { parseFraction:/2 },\n\t\t\t\t'Complex' -> { parseComplex:/2 },\n\t\t\t\t'Real' -> { parseNumber:/2 },\n\t\t\t\t'Date' -> { parseDate:/2 },\n\t\t\t\t'DateAndTime' -> { parseDateAndTime:/2 },\n\t\t\t\t'Duration' -> { parseDuration:/2 },\n\t\t\t\t'Time' -> { parseTime:/2 },\n\t\t\t\t'String' -> { { :s :f:/0 | s } }\n\t\t\t]\n\t\t) {\n\t\t\tself.error('schemaTypeParser: unknown type')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.caseOf(\n\t\t\t[\n\t\t\t\t'Boolean' -> { isBoolean:/1 },\n\t\t\t\t'Integer' -> { isInteger:/1 },\n\t\t\t\t'Fraction' -> { isFraction:/1 },\n\t\t\t\t'Complex' -> { isComplex:/1 },\n\t\t\t\t'Real' -> { isSmallFloat:/1 },\n\t\t\t\t'Date' -> { isDate:/1 },\n\t\t\t\t'DateAndTime' -> { isDateAndTime:/1 },\n\t\t\t\t'Duration' -> { isDuration:/1 },\n\t\t\t\t'Time' -> { isTime:/1 },\n\t\t\t\t'String' -> { isString:/1 }\n\t\t\t]\n\t\t) {\n\t\t\tself.error('schemaTypePredicate: unknown type')\n\t\t}\n\t}",
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
  "{ :self :schemaType |\n\t\tschemaType.schemaTypePredicate.value(self)\n\t}",
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
  "{ :self :schemaType :elseClause:/0 |\n\t\tlet parser:/2 = schemaType.schemaTypeParser;\n\t\tself.collect { :each |\n\t\t\tparser(each, elseClause:/0)\n\t\t}\n\t}",
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
  "{ :self :schemaType |\n\t\tself.parseSchemaType(schemaType) {\n\t\t\tself.error('parseSchemeType: unknown type or invalid input')\n\t\t}\n\t}",
);
