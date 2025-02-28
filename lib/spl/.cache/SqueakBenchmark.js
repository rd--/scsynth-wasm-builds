sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "SqueakBenchmark",
  "squeakBenchFib",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSign_2(_self, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _plusSign_2(
          _squeakBenchFib_1(_hyphenMinus_2(_self, 1)),
          _squeakBenchFib_1(_hyphenMinus_2(_self, 2)),
        ),
        1,
      );
    });
  },
  "{ :self | if((<(self, 2)), { 1 }, { +(+(squeakBenchFib((-(self, 1))), squeakBenchFib((-(self, 2)))), 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "SqueakBenchmark",
  "squeakTinyBenchmarks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = 8190;
    let _count = null;
    /* Statements */
    _timesRepeat_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _flags = _List_1(_size);
      /* Statements */
      _atAllPut_2(_flags, true);
      _count = 0;
      return _toDo_3(1, _size, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_at_2(_flags, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _prime = _plusSign_2(_index, 1);
          let _k = _plusSign_2(_index, _prime);
          /* Statements */
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_k, _size);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_flags, _k, false);
            return _k = _plusSign_2(_k, _prime);
          });
          return _count = _plusSign_2(_count, 1);
        });
      });
    });
    return _count;
  },
  "{ :self | let size = 8190; let count = nil; timesRepeat(self, { let flags = List(size); atAllPut(flags,true); count := 0; toDo(1, size, { :index | ifTrue(at(flags, index), { let prime = +(index, 1); let k = +(index, prime); whileTrue({ <=(k, size) }, { atPut(flags, k, false); k := +(k, prime) }); count := +(count, 1) }) }) }); count }",
);
