sl.addMethod(
  "Void",
  "MandelbrotBenchmark",
  "MandelbrotBenchmark",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Benchmark_3(
      "Mandelbrot",
      _asMap_1([
        _minusGreaterThan_2(1, 128),
        _minusGreaterThan_2(500, 191),
        _minusGreaterThan_2(750, 50),
      ]),
      function (_size) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _size";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _sum = 0;
        let _byteAcc = 0;
        let _bitNum = 0;
        let _y = 0;
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _lessThan_2(_y, _size);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _ci = _minus_2(_dividedBy_2(_times_2(2, _y), _size), 1);
          let _x = 0;
          /* Statements */
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _lessThan_2(_x, _size);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Temporaries */
            let _zrzr = 0;
            let _zr = 0;
            let _zizi = 0;
            let _zi = 0;
            let _cr = _minus_2(_dividedBy_2(_times_2(2, _x), _size), 1.5);
            let _z = 0;
            let _notDone = true;
            let _escape = 0;
            /* Statements */
            _whileTrue_2(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _and_2(_notDone, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                return _lessThan_2(_z, 50);
              });
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              _zr = _plus_2(_minus_2(_zrzr, _zizi), _cr);
              _zi = _plus_2(_times_2(_times_2(2, _zr), _zi), _ci);
              _zrzr = _times_2(_zr, _zr);
              _zizi = _times_2(_zi, _zi);
              _ifTrue_2(_greaterThan_2(_plus_2(_zrzr, _zizi), 4), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                _notDone = false;
                return _escape = 1;
              });
              return _z = _plus_2(_z, 1);
            });
            _byteAcc = _plus_2(_lessThanLessThan_2(_byteAcc, 1), _escape);
            _bitNum = _plus_2(_bitNum, 1);
            _if_3(_equals_2(_bitNum, 8), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              _sum = _bitXor_2(_sum, _byteAcc);
              _byteAcc = 0;
              return _bitNum = 0;
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _ifTrue_2(_equals_2(_x, _minus_2(_size, 1)), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                _byteAcc = _lessThanLessThan_2(_byteAcc, _minus_2(8, _bitNum));
                _sum = _bitXor_2(_sum, _byteAcc);
                _byteAcc = 0;
                return _bitNum = 0;
              });
            });
            return _x = _plus_2(_x, 1);
          });
          return _y = _plus_2(_y, 1);
        });
        return _sum;
      },
    );
  },
  "{\n\t\tBenchmark('Mandelbrot', [\n\t\t\t1 -> 128,\n\t\t\t500 -> 191,\n\t\t\t750 -> 50\n\t\t].asMap) { :size |\n\t\t\tlet sum = 0;\n\t\t\tlet byteAcc = 0;\n\t\t\tlet bitNum = 0;\n\t\t\tlet y = 0;\n\t\t\t{\n\t\t\t\ty < size\n\t\t\t}.whileTrue {\n\t\t\t\tlet ci = (2 * y / size) - 1;\n\t\t\t\tlet x = 0;\n\t\t\t\t{\n\t\t\t\t\tx < size\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tlet zrzr = 0;\n\t\t\t\t\tlet zr = 0;\n\t\t\t\t\tlet zizi = 0;\n\t\t\t\t\tlet zi = 0;\n\t\t\t\t\tlet cr = (2 * x / size) - 1.5;\n\t\t\t\t\tlet z = 0;\n\t\t\t\t\tlet notDone = true;\n\t\t\t\t\tlet escape = 0;\n\t\t\t\t\t{\n\t\t\t\t\t\tnotDone & {\n\t\t\t\t\t\t\tz < 50\n\t\t\t\t\t\t}\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tzr := zrzr - zizi + cr;\n\t\t\t\t\t\tzi := 2 * zr * zi + ci;\n\t\t\t\t\t\tzrzr := zr * zr;\n\t\t\t\t\t\tzizi := zi * zi;\n\t\t\t\t\t\t(zrzr + zizi > 4).ifTrue {\n\t\t\t\t\t\t\tnotDone := false;\n\t\t\t\t\t\t\tescape := 1\n\t\t\t\t\t\t};\n\t\t\t\t\t\tz := z + 1\n\t\t\t\t\t};\n\t\t\t\t\tbyteAcc := (byteAcc << 1) + escape;\n\t\t\t\t\tbitNum := bitNum + 1;\n\t\t\t\t\t(bitNum = 8).if {\n\t\t\t\t\t\tsum := sum.bitXor(byteAcc);\n\t\t\t\t\t\tbyteAcc := 0;\n\t\t\t\t\t\tbitNum := 0\n\t\t\t\t\t} {\n\t\t\t\t\t\t(x = (size - 1)).ifTrue {\n\t\t\t\t\t\t\tbyteAcc := byteAcc << (8 - bitNum);\n\t\t\t\t\t\t\tsum := sum.bitXor(byteAcc);\n\t\t\t\t\t\t\tbyteAcc := 0;\n\t\t\t\t\t\t\tbitNum := 0\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\tx := x + 1\n\t\t\t\t};\n\t\t\t\ty := y + 1\n\t\t\t};\n\t\t\tsum\n\t\t}\n\t}",
);
