sl.extendTraitWithMethod(
  "Integer",
  "SqueakBenchmark",
  "squeakBenchFib",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThan_2(_self, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plus_2(
        _plus_2(
          _squeakBenchFib_1(_minus_2(_self, 1)),
          _squeakBenchFib_1(_minus_2(_self, 2)),
        ),
        1,
      );
    });
  },
  "{ :self |\n\t\t(self < 2).if {\n\t\t\t1\n\t\t} {\n\t\t\t(self - 1).squeakBenchFib + (self - 2).squeakBenchFib + 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "SqueakBenchmark",
  "squeakTinyBenchmarks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = 8190;
    let _count = null;
    /* Statements */
    _timesRepeat_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _flags = _Array_1(_size);
      /* Statements */
      _atAllPut_2(_flags, true);
      _count = 0;
      return _upToDo_3(1, _size, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_at_2(_flags, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _prime = _plus_2(_index, 1);
          let _k = _plus_2(_index, _prime);
          /* Statements */
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _lessThanEquals_2(_k, _size);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _atPut_3(_flags, _k, false);
            return _k = _plus_2(_k, _prime);
          });
          return _count = _plus_2(_count, 1);
        });
      });
    });
    return _count;
  },
  "{ :self |\n\t\tlet size = 8190;\n\t\tlet count = nil;\n\t\tself.timesRepeat {\n\t\t\tlet flags = Array(size);\n\t\t\tflags.atAllPut(true);\n\t\t\tcount := 0;\n\t\t\t1.upToDo(size) { :index |\n\t\t\t\tflags[index].ifTrue {\n\t\t\t\t\tlet prime = index + 1;\n\t\t\t\t\tlet k = index + prime;\n\t\t\t\t\t{ k <= size }.whileTrue {\n\t\t\t\t\t\tflags[k] := false;\n\t\t\t\t\t\tk := k + prime\n\t\t\t\t\t};\n\t\t\t\t\tcount := count + 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tcount\n\t}",
);
