/*  Requires: Benchmark SomRandom  */

sl.addType(
  false,
  "BounceBall",
  "BounceBenchmark",
  ["Object"],
  ["x", "y", "xVel", "yVel"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BounceBall",
);

sl.addMethodToExistingType(
  "BounceBall",
  "BounceBenchmark",
  "bounce",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _xLimit = 500;
    let _yLimit = 500;
    let _bounced = false;
    /* Statements */
    _x_2(_self, _plusSign_2(_x_1(_self), _xVel_1(_self)));
    _y_2(_self, _plusSign_2(_y_1(_self), _yVel_1(_self)));
    _ifTrue_2(
      _greaterThanSign_2(_x_1(_self), _xLimit),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x_2(_self, _xLimit);
        _xVel_2(_self, _hyphenMinus_2(0, _abs_1(_xVel_1(_self))));
        return _bounced = true;
      }, []),
    );
    _ifTrue_2(
      _lessThanSign_2(_x_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x_2(_self, 0);
        _xVel_2(_self, _abs_1(_xVel_1(_self)));
        return _bounced = true;
      }, []),
    );
    _ifTrue_2(
      _greaterThanSign_2(_y_1(_self), _yLimit),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _y_2(_self, _yLimit);
        _yVel_2(_self, _hyphenMinus_2(0, _abs_1(_yVel_1(_self))));
        return _bounced = true;
      }, []),
    );
    _ifTrue_2(
      _lessThanSign_2(_y_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _y_2(_self, 0);
        _yVel_2(_self, _abs_1(_yVel_1(_self)));
        return _bounced = true;
      }, []),
    );
    return _bounced;
  }, ["self"]),
  "{ :self |\n\t\tlet xLimit = 500;\n\t\tlet yLimit = 500;\n\t\tlet bounced = false;\n\t\tself.x := self.x + self.xVel;\n\t\tself.y := self.y + self.yVel;\n\t\t(self.x > xLimit).ifTrue {\n\t\t\tself.x := xLimit;\n\t\t\tself.xVel := 0 - self.xVel.abs;\n\t\t\tbounced := true\n\t\t};\n\t\t(self.x < 0).ifTrue {\n\t\t\tself.x := 0;\n\t\t\tself.xVel := self.xVel.abs;\n\t\t\tbounced := true\n\t\t};\n\t\t(self.y > yLimit).ifTrue {\n\t\t\tself.y := yLimit;\n\t\t\tself.yVel := 0 - self.yVel.abs;\n\t\t\tbounced := true\n\t\t};\n\t\t(self.y < 0).ifTrue {\n\t\t\tself.y := 0;\n\t\t\tself.yVel := self.yVel.abs;\n\t\t\tbounced := true\n\t\t};\n\t\tbounced\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SomRandom",
  "BounceBenchmark",
  "BounceBall",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newBounceBall_0(),
      _percentSign_2(_next_1(_self), 500),
      _percentSign_2(_next_1(_self), 500),
      _hyphenMinus_2(_percentSign_2(_next_1(_self), 300), 150),
      _hyphenMinus_2(_percentSign_2(_next_1(_self), 300), 150),
    );
  }, ["self"]),
  "{ :self |\n\t\tnewBounceBall().initializeSlots(\n\t\t\tself.next % 500,\n\t\t\tself.next % 500,\n\t\t\t(self.next % 300) - 150,\n\t\t\t(self.next % 300) - 150\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "BounceBenchmark",
  "BounceBenchmark",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Benchmark_3(
      "Bounce",
      _Map_1([[100, 1331]]),
      sl.annotateFunction(function (_ballCount) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _ballCount";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _random = _SomRandom_0();
        let _bounces = 0;
        let _balls = _fill_2(
          _ballCount,
          sl.annotateFunction(function (_unusedIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _unusedIndex";
              throw new Error(errorMessage);
            } /* Statements */
            return _BounceBall_1(_random);
          }, ["unusedIndex"]),
        );
        /* Statements */
        _toDo_3(
          1,
          50,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _do_2(
              _balls,
              sl.annotateFunction(function (_ball) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _ball";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifTrue_2(
                  _bounce_1(_ball),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _bounces = _plusSign_2(_bounces, 1);
                  }, []),
                );
              }, ["ball"]),
            );
          }, ["i"]),
        );
        return _bounces;
      }, ["ballCount"]),
    );
  }, []),
  "{\n\t\tBenchmark('Bounce', [100: 1331]) { :ballCount |\n\t\t\tlet random = SomRandom();\n\t\t\tlet bounces = 0;\n\t\t\tlet balls = ballCount.fill { :unusedIndex |\n\t\t\t\tBounceBall(random)\n\t\t\t};\n\t\t\t1.toDo(50) { :i |\n\t\t\t\tballs.do { :ball |\n\t\t\t\t\tball.bounce.ifTrue {\n\t\t\t\t\t\tbounces := bounces + 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tbounces\n\t\t}\n\t}",
);
