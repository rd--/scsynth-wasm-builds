/*  Requires: Benchmark SomRandom  */

sl.addType(
  false,
  "Ball",
  "BounceBenchmark",
  ["Object"],
  ["x", "y", "xVel", "yVel"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Ball",
);

sl.addMethodToExistingType(
  "Ball",
  "BounceBenchmark",
  "bounce",
  ["self"],
  function (_self) {
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
    _ifTrue_2(_greaterThanSign_2(_x_1(_self), _xLimit), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _x_2(_self, _xLimit);
      _xVel_2(_self, _hyphenMinus_2(0, _abs_1(_xVel_1(_self))));
      return _bounced = true;
    });
    _ifTrue_2(_lessThanSign_2(_x_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _x_2(_self, 0);
      _xVel_2(_self, _abs_1(_xVel_1(_self)));
      return _bounced = true;
    });
    _ifTrue_2(_greaterThanSign_2(_y_1(_self), _yLimit), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _y_2(_self, _yLimit);
      _yVel_2(_self, _hyphenMinus_2(0, _abs_1(_yVel_1(_self))));
      return _bounced = true;
    });
    _ifTrue_2(_lessThanSign_2(_y_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _y_2(_self, 0);
      _yVel_2(_self, _abs_1(_yVel_1(_self)));
      return _bounced = true;
    });
    return _bounced;
  },
  "{ :self | let xLimit = 500; let yLimit = 500; let bounced = false; x(self, +(x(self), xVel(self))); y(self, +(y(self), yVel(self))); ifTrue((>(x(self), xLimit)), { x(self, xLimit); xVel(self, -(0, abs(xVel(self)))); bounced := true }); ifTrue((<(x(self), 0)), { x(self, 0); xVel(self, abs(xVel(self))); bounced := true }); ifTrue((>(y(self), yLimit)), { y(self, yLimit); yVel(self, -(0, abs(yVel(self)))); bounced := true }); ifTrue((<(y(self), 0)), { y(self, 0); yVel(self, abs(yVel(self))); bounced := true }); bounced }",
);

sl.extendTypeOrTraitWithMethod(
  "SomRandom",
  "BounceBenchmark",
  "Ball",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newBall_0(),
      _percentSign_2(_next_1(_self), 500),
      _percentSign_2(_next_1(_self), 500),
      _hyphenMinus_2(_percentSign_2(_next_1(_self), 300), 150),
      _hyphenMinus_2(_percentSign_2(_next_1(_self), 300), 150),
    );
  },
  "{ :self | initializeSlots(newBall(),%(next(self), 500), %(next(self), 500), -((%(next(self), 300)), 150), -((%(next(self), 300)), 150)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "BounceBenchmark",
  "BounceBenchmark",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Benchmark_3(
      "Bounce",
      _asMap_1([_hyphenMinusGreaterThanSign_2(100, 1331)]),
      function (_ballCount) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _ballCount";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _random = _SomRandom_0();
        let _bounces = 0;
        let _balls = _fill_2(_ballCount, function (_unusedIndex) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _unusedIndex";
            throw new Error(errorMessage);
          } /* Statements */
          return _Ball_1(_random);
        });
        /* Statements */
        _toDo_3(1, 50, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _do_2(_balls, function (_ball) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _ball";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(_bounce_1(_ball), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _bounces = _plusSign_2(_bounces, 1);
            });
          });
        });
        return _bounces;
      },
    );
  },
  "{ Benchmark('Bounce', asMap([->(100, 1331)]), { :ballCount | let random = SomRandom(); let bounces = 0; let balls = fill(ballCount, { :unusedIndex | Ball(random) }); toDo(1, 50, { :i | do(balls, { :ball | ifTrue(bounce(ball), { bounces := +(bounces, 1) }) }) }); bounces }) }",
);
