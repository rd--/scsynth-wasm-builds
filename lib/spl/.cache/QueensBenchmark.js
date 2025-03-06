sl.addType(
  false,
  "QueensBenchmark",
  "QueensBenchmark",
  ["Object"],
  ["freeMaxs", "freeRows", "freeMins", "queenRows"],
);

sl.copyTraitMethodsToType(
  "Object",
  "QueensBenchmark",
);

sl.addMethodToExistingType(
  "QueensBenchmark",
  "QueensBenchmark",
  "benchmark",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _result = true;
    /* Statements */
    _toDo_3(
      1,
      10,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _result = _ampersand_2(
          _result,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _queens_1(_self);
          }, []),
        );
      }, ["i"]),
    );
    return _result;
  }, ["self"]),
  "{ :self | let result = true; toDo(1, 10, { :i | result := &(result, { queens(self) }) }); result }",
);

sl.addMethodToExistingType(
  "QueensBenchmark",
  "QueensBenchmark",
  "queens",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _freeRows_2(_self, _List_2(8, true));
    _freeMaxs_2(_self, _List_2(16, true));
    _freeMins_2(_self, _List_2(16, true));
    _queenRows_2(_self, _List_2(8, -1));
    return _placeQueen_2(_self, 1);
  }, ["self"]),
  "{ :self | freeRows(self, List(8, true)); freeMaxs(self, List(16, true)); freeMins(self, List(16, true)); queenRows(self, List(8, -1)); placeQueen(self,1) }",
);

sl.addMethodToExistingType(
  "QueensBenchmark",
  "QueensBenchmark",
  "placeQueen",
  ["self", "c"],
  sl.annotateFunction(function (_self, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        1,
        8,
        sl.annotateFunction(function (_r) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _r";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _rowColumn_3(_self, _r, _c),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _atPut_3(_queenRows_1(_self), _r, _c);
              _rowColumnPut_4(_self, _r, _c, false);
              _ifTrue_2(
                _equalsSign_2(_c, 8),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(true);
                }, []),
              );
              _ifTrue_2(
                _placeQueen_2(_self, _plusSign_2(_c, 1)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(true);
                }, []),
              );
              return _rowColumnPut_4(_self, _r, _c, true);
            }, []),
          );
        }, ["r"]),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "c"]),
  "{ :self :c | valueWithReturn({ :return:/1 | toDo(1, 8, { :r | ifTrue(rowColumn(self,r, c), { atPut(queenRows(self), r, c); rowColumnPut(self,r, c, false); ifTrue((=(c, 8)), { return(true) }); ifTrue(placeQueen(self,+(c, 1)), { return(true) }); rowColumnPut(self,r, c, true) }) }); false }) }",
);

sl.addMethodToExistingType(
  "QueensBenchmark",
  "QueensBenchmark",
  "rowColumn",
  ["self", "r", "c"],
  sl.annotateFunction(function (_self, _r, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _at_2(_freeRows_1(_self), _r),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _at_2(_freeMaxs_1(_self), _plusSign_2(_c, _r)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(
              _freeMins_1(_self),
              _plusSign_2(_hyphenMinus_2(_c, _r), 8),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "r", "c"]),
  "{ :self :r :c | &(at(freeRows(self), r), { &(at(freeMaxs(self), +(c, r)), { at(freeMins(self), +(-(c, r), 8)) }) }) }",
);

sl.addMethodToExistingType(
  "QueensBenchmark",
  "QueensBenchmark",
  "rowColumnPut",
  ["self", "r", "c", "v"],
  sl.annotateFunction(function (_self, _r, _c, _v) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _c, _v";
      throw new Error(errorMessage);
    } /* Statements */
    _atPut_3(_freeRows_1(_self), _r, _v);
    _atPut_3(_freeMaxs_1(_self), _plusSign_2(_c, _r), _v);
    return _atPut_3(
      _freeMins_1(_self),
      _plusSign_2(_hyphenMinus_2(_c, _r), 8),
      _v,
    );
  }, ["self", "r", "c", "v"]),
  "{ :self :r :c :v | atPut(freeRows(self), r, v); atPut(freeMaxs(self), +(c, r), v); atPut(freeMins(self), +(-(c, r), 8), v) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "QueensBenchmark",
  "QueensBenchmark",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _benchmark_1(_newQueensBenchmark_0());
  }, []),
  "{ benchmark(newQueensBenchmark()) }",
);
