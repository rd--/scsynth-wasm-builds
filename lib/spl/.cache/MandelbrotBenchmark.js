sl.extendTypeOrTraitWithMethod(
  "Void",
  "MandelbrotBenchmark",
  "MandelbrotBenchmark",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Benchmark_3(
      "Mandelbrot",
      _Map_1([[1, 128], [500, 191], [750, 50]]),
      sl.annotateFunction(function (_size) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _size";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _sum = 0;
        let _byteAcc = 0;
        let _bitNum = 0;
        let _y = 0;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_y, _size);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _ci = _hyphenMinus_2(_solidus_2(_asterisk_2(2, _y), _size), 1);
            let _x = 0;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSign_2(_x, _size);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _zrzr = 0;
                let _zr = 0;
                let _zizi = 0;
                let _zi = 0;
                let _cr = _hyphenMinus_2(
                  _solidus_2(_asterisk_2(2, _x), _size),
                  1.5,
                );
                let _z = 0;
                let _notDone = true;
                let _escape = 0;
                /* Statements */
                _whileTrue_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _ampersand_2(
                      _notDone,
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _lessThanSign_2(_z, 50);
                      }, []),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _zr = _plusSign_2(_hyphenMinus_2(_zrzr, _zizi), _cr);
                    _zi = _plusSign_2(
                      _asterisk_2(_asterisk_2(2, _zr), _zi),
                      _ci,
                    );
                    _zrzr = _asterisk_2(_zr, _zr);
                    _zizi = _asterisk_2(_zi, _zi);
                    _ifTrue_2(
                      _greaterThanSign_2(_plusSign_2(_zrzr, _zizi), 4),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        _notDone = false;
                        return _escape = 1;
                      }, []),
                    );
                    return _z = _plusSign_2(_z, 1);
                  }, []),
                );
                _byteAcc = _plusSign_2(
                  _lessThanSignLessThanSign_2(_byteAcc, 1),
                  _escape,
                );
                _bitNum = _plusSign_2(_bitNum, 1);
                _if_3(
                  _equalsSign_2(_bitNum, 8),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _sum = _bitXor_2(_sum, _byteAcc);
                    _byteAcc = 0;
                    return _bitNum = 0;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _ifTrue_2(
                      _equalsSign_2(_x, _hyphenMinus_2(_size, 1)),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        _byteAcc = _lessThanSignLessThanSign_2(
                          _byteAcc,
                          _hyphenMinus_2(8, _bitNum),
                        );
                        _sum = _bitXor_2(_sum, _byteAcc);
                        _byteAcc = 0;
                        return _bitNum = 0;
                      }, []),
                    );
                  }, []),
                );
                return _x = _plusSign_2(_x, 1);
              }, []),
            );
            return _y = _plusSign_2(_y, 1);
          }, []),
        );
        return _sum;
      }, ["size"]),
    );
  }, []),
  "{\n\t\tBenchmark('Mandelbrot', [\n\t\t\t1: 128,\n\t\t\t500: 191,\n\t\t\t750: 50\n\t\t]) { :size |\n\t\t\tlet sum = 0;\n\t\t\tlet byteAcc = 0;\n\t\t\tlet bitNum = 0;\n\t\t\tlet y = 0;\n\t\t\t{\n\t\t\t\ty < size\n\t\t\t}.whileTrue {\n\t\t\t\tlet ci = (2 * y / size) - 1;\n\t\t\t\tlet x = 0;\n\t\t\t\t{\n\t\t\t\t\tx < size\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tlet zrzr = 0;\n\t\t\t\t\tlet zr = 0;\n\t\t\t\t\tlet zizi = 0;\n\t\t\t\t\tlet zi = 0;\n\t\t\t\t\tlet cr = (2 * x / size) - 1.5;\n\t\t\t\t\tlet z = 0;\n\t\t\t\t\tlet notDone = true;\n\t\t\t\t\tlet escape = 0;\n\t\t\t\t\t{\n\t\t\t\t\t\tnotDone & {\n\t\t\t\t\t\t\tz < 50\n\t\t\t\t\t\t}\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tzr := zrzr - zizi + cr;\n\t\t\t\t\t\tzi := 2 * zr * zi + ci;\n\t\t\t\t\t\tzrzr := zr * zr;\n\t\t\t\t\t\tzizi := zi * zi;\n\t\t\t\t\t\t(zrzr + zizi > 4).ifTrue {\n\t\t\t\t\t\t\tnotDone := false;\n\t\t\t\t\t\t\tescape := 1\n\t\t\t\t\t\t};\n\t\t\t\t\t\tz := z + 1\n\t\t\t\t\t};\n\t\t\t\t\tbyteAcc := (byteAcc << 1) + escape;\n\t\t\t\t\tbitNum := bitNum + 1;\n\t\t\t\t\t(bitNum = 8).if {\n\t\t\t\t\t\tsum := sum.bitXor(byteAcc);\n\t\t\t\t\t\tbyteAcc := 0;\n\t\t\t\t\t\tbitNum := 0\n\t\t\t\t\t} {\n\t\t\t\t\t\t(x = (size - 1)).ifTrue {\n\t\t\t\t\t\t\tbyteAcc := byteAcc << (8 - bitNum);\n\t\t\t\t\t\t\tsum := sum.bitXor(byteAcc);\n\t\t\t\t\t\t\tbyteAcc := 0;\n\t\t\t\t\t\t\tbitNum := 0\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\tx := x + 1\n\t\t\t\t};\n\t\t\t\ty := y + 1\n\t\t\t};\n\t\t\tsum\n\t\t}\n\t}",
);
