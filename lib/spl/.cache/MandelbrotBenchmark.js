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
      _asMap_1([
        _hyphenMinusGreaterThanSign_2(1, 128),
        _hyphenMinusGreaterThanSign_2(500, 191),
        _hyphenMinusGreaterThanSign_2(750, 50),
      ]),
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
  "{ Benchmark('Mandelbrot', asMap([->(1, 128), ->(500, 191), ->(750, 50)]), { :size | let sum = 0; let byteAcc = 0; let bitNum = 0; let y = 0; whileTrue({ <(y, size) }, { let ci = -((/(*(2, y), size)), 1); let x = 0; whileTrue({ <(x, size) }, { let zrzr = 0; let zr = 0; let zizi = 0; let zi = 0; let cr = -((/(*(2, x), size)), 1.5); let z = 0; let notDone = true; let escape = 0; whileTrue({ &(notDone, { <(z, 50) }) }, { zr := +(-(zrzr, zizi), cr); zi := +(*(*(2, zr), zi), ci); zrzr := *(zr, zr); zizi := *(zi, zi); ifTrue((>(+(zrzr, zizi), 4)), { notDone := false; escape := 1 }); z := +(z, 1) }); byteAcc := +((<<(byteAcc, 1)), escape); bitNum := +(bitNum, 1); if((=(bitNum, 8)), { sum := bitXor(sum,byteAcc); byteAcc := 0; bitNum := 0 }, { ifTrue((=(x, (-(size, 1)))), { byteAcc := <<(byteAcc, (-(8, bitNum))); sum := bitXor(sum,byteAcc); byteAcc := 0; bitNum := 0 }) }); x := +(x, 1) }); y := +(y, 1) }); sum }) }",
);
