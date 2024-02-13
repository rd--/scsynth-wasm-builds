sl.addType(
  false,
  "QueensBenchmark",
  "QueensBenchmark",
  ["Object"],
  ["freeMaxs", "freeRows", "freeMins", "queenRows"],
);

sl.copyTraitToType(
  "Object",
  "QueensBenchmark",
);

sl.addMethod(
  "QueensBenchmark",
  "QueensBenchmark",
  "benchmark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _result = true;
    /* Statements */
    _toDo_3(1, 10, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _result = _ampersand_2(_result, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _queens_1(_self);
      });
    });
    return _result;
  },
  "{ :self |\n\t\tlet result = true;\n\t\t1.toDo(10) { :i |\n\t\t\tresult := result & { self.queens }\n\t\t};\n\t\tresult\n\t}",
);

sl.addMethod(
  "QueensBenchmark",
  "QueensBenchmark",
  "queens",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _freeRows_2(_self, _List_2(8, true));
    _freeMaxs_2(_self, _List_2(16, true));
    _freeMins_2(_self, _List_2(16, true));
    _queenRows_2(_self, _List_2(8, -1));
    return _placeQueen_2(_self, 1);
  },
  "{ :self |\n\t\tself.freeRows := List(8, true);\n\t\tself.freeMaxs := List(16, true);\n\t\tself.freeMins := List(16, true);\n\t\tself.queenRows := List(8, -1);\n\t\tself.placeQueen(1)\n\t}",
);

sl.addMethod(
  "QueensBenchmark",
  "QueensBenchmark",
  "placeQueen",
  ["self", "c"],
  function (_self, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _c";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _toDo_3(1, 8, function (_r) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _r";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_rowColumn_3(_self, _r, _c), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _atPut_3(_queenRows_1(_self), _r, _c);
          _rowColumnPut_4(_self, _r, _c, false);
          _ifTrue_2(_equalsSign_2(_c, 8), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(true);
          });
          _ifTrue_2(_placeQueen_2(_self, _plusSign_2(_c, 1)), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(true);
          });
          return _rowColumnPut_4(_self, _r, _c, true);
        });
      });
      return false;
    });
  },
  "{ :self :c |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(8) { :r |\n\t\t\t\tself.rowColumn(r, c).ifTrue {\n\t\t\t\t\tself.queenRows[r] := c;\n\t\t\t\t\tself.rowColumnPut(r, c, false);\n\t\t\t\t\t(c = 8).ifTrue {\n\t\t\t\t\t\ttrue.return\n\t\t\t\t\t};\n\t\t\t\t\tself.placeQueen(c + 1).ifTrue {\n\t\t\t\t\t\ttrue.return\n\t\t\t\t\t};\n\t\t\t\t\tself.rowColumnPut(r, c, true)\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "QueensBenchmark",
  "QueensBenchmark",
  "rowColumn",
  ["self", "r", "c"],
  function (_self, _r, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _c";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_at_2(_freeRows_1(_self), _r), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _at_2(_freeMaxs_1(_self), _plusSign_2(_c, _r)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _at_2(
            _freeMins_1(_self),
            _plusSign_2(_hyphenMinus_2(_c, _r), 8),
          );
        },
      );
    });
  },
  "{ :self :r :c |\n\t\tself.freeRows[r] & {\n\t\t\tself.freeMaxs[c + r] & {\n\t\t\t\tself.freeMins[c - r + 8]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "QueensBenchmark",
  "QueensBenchmark",
  "rowColumnPut",
  ["self", "r", "c", "v"],
  function (_self, _r, _c, _v) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _c, _v";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _atPut_3(_freeRows_1(_self), _r, _v);
    _atPut_3(_freeMaxs_1(_self), _plusSign_2(_c, _r), _v);
    return _atPut_3(
      _freeMins_1(_self),
      _plusSign_2(_hyphenMinus_2(_c, _r), 8),
      _v,
    );
  },
  "{ :self :r :c :v |\n\t\tself.freeRows[r] := v;\n\t\tself.freeMaxs[c + r] := v;\n\t\tself.freeMins[c - r + 8] := v\n\t}",
);

sl.addMethod(
  "Void",
  "QueensBenchmark",
  "QueensBenchmark",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _benchmark_1(_newQueensBenchmark_0());
  },
  "{\n\t\tnewQueensBenchmark().benchmark\n\t}",
);
