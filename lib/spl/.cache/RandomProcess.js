sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "RandomProcess",
  "timeSeriesRandomFunction",
  ["self", "t", "n"],
  sl.annotateFunction(function (_self, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _t, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL542 = _assertIsOfSize_2(_t, 2);
    let _tMin = _at_2(__SPL542, 1);
    let _tMax = _at_2(__SPL542, 2);
    /* Statements */
    return _TemporalData_1(_exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        /* Statements */
        _whileTrue_1(sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL543 = _assertIsOfSize_2(_next_1(_self), 2);
          let _t = _at_2(__SPL543, 1);
          let _x = _at_2(__SPL543, 2);
          /* Statements */
          _t = _min_2(_t, _tMax);
          _add_2(_answer, [_t, _x]);
          return _lessThanSign_2(_t, _tMax);
        }, []));
        _reset_1(_self);
        return _answer;
      }, []),
      _n,
    ));
  }, ["self", "t", "n"]),
  "{ :self :t :n | let __SPL542 = assertIsOfSize(t, 2); let tMin = at(__SPL542, 1); let tMax = at(__SPL542, 2); TemporalData(!({ let answer = []; whileTrue({ let __SPL543 = assertIsOfSize(next(self), 2); let t = at(__SPL543, 1); let x = at(__SPL543, 2); t := min(t,tMax); add(answer,[t, x]); <(t, tMax) }); reset(self); answer }, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "RandomProcess",
  "valueSeriesRandomFunction",
  ["self", "t", "n"],
  sl.annotateFunction(function (_self, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _t, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _regularTemporalData_2(
      sl.annotateFunction(function (_timeList) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _timeList";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _next_2(_self, _size_1(_timeList));
        /* Statements */
        _reset_1(_self);
        return _answer;
      }, ["timeList"]),
      _exclamationMark_2(_plusSignPlusSign_2(_t, [1]), _n),
    );
  }, ["self", "t", "n"]),
  "{ :self :t :n | regularTemporalData({ :timeList | let answer = next(self,size(timeList)); reset(self); answer },!((++(t, [1])), n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "RandomProcess",
  "eulerMaruyamaMethod",
  ["self", "a:/2", "b:/2", "t", "y0"],
  sl.annotateFunction(function (_self, _a_2, _b_2, _t, _y0) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _a_2, _b_2, _t, _y0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL544 = _assertIsOfSize_2(_t, 3);
    let _tMin = _at_2(__SPL544, 1);
    let _tMax = _at_2(__SPL544, 2);
    let _dt = _at_2(__SPL544, 3);
    let _ts = _asList_1(_thenTo_3(_tMin, _plusSign_2(_tMin, _dt), _tMax));
    let _n = _size_1(_ts);
    let _ys = _List_2(_n, 0);
    let _dW_1 = sl.annotateFunction(function (_dt) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _dt";
        throw new Error(errorMessage);
      } /* Statements */
      return _normalDistribution_3(_self, 0, _sqrt_1(_dt));
    }, ["dt"]);
    /* Statements */
    _atPut_3(_ys, 1, _y0);
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _t = _at_2(_ts, _hyphenMinus_2(_i, 1));
        let _y = _at_2(_ys, _hyphenMinus_2(_i, 1));
        let _dw = _dW_1(_dt);
        /* Statements */
        return _atPut_3(
          _ys,
          _i,
          _plusSign_2(
            _plusSign_2(_y, _asterisk_2(_a_2(_y, _t), _dt)),
            _asterisk_2(_b_2(_y, _t), _dw),
          ),
        );
      }, ["i"]),
    );
    return [_ts, _ys];
  }, ["self", "a:/2", "b:/2", "t", "y0"]),
  "{ :self :a:/2 :b:/2 :t :y0 | let __SPL544 = assertIsOfSize(t, 3); let tMin = at(__SPL544, 1); let tMax = at(__SPL544, 2); let dt = at(__SPL544, 3); let ts = asList(thenTo(tMin, +(tMin, dt), tMax)); let n = size(ts); let ys = List(n, 0); let dW = { :dt | normalDistribution(self,0, sqrt(dt)) }; atPut(ys, 1, y0); toDo(2, n, { :i | let t = at(ts, -(i, 1)); let y = at(ys, -(i, 1)); let dw = dW(dt); atPut(ys, i, +(+(y, (*(a(y, t), dt))), (*(b(y, t), dw)))) }); [ts, ys] }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "RandomProcess",
  "milsteinMethod",
  ["self", "a:/1", "b:/1", "c:/1", "t", "y0"],
  sl.annotateFunction(function (_self, _a_1, _b_1, _c_1, _t, _y0) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _a_1, _b_1, _c_1, _t, _y0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL545 = _assertIsOfSize_2(_t, 3);
    let _tMin = _at_2(__SPL545, 1);
    let _tMax = _at_2(__SPL545, 2);
    let _dt = _at_2(__SPL545, 3);
    let _ts = _asList_1(_thenTo_3(_tMin, _plusSign_2(_tMin, _dt), _tMax));
    let _n = _size_1(_ts);
    let _ys = _List_2(_n, 0);
    let _dW_1 = sl.annotateFunction(function (_dt) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _dt";
        throw new Error(errorMessage);
      } /* Statements */
      return _normalDistribution_3(_self, 0, _sqrt_1(_dt));
    }, ["dt"]);
    /* Statements */
    _atPut_3(_ys, 1, _y0);
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _at_2(_ys, _hyphenMinus_2(_i, 1));
        let _dw = _dW_1(_dt);
        /* Statements */
        return _atPut_3(
          _ys,
          _i,
          _plusSign_2(
            _plusSign_2(
              _plusSign_2(_y, _asterisk_2(_a_1(_y), _dt)),
              _asterisk_2(_b_1(_y), _dw),
            ),
            _asterisk_2(
              _asterisk_2(0.5, _c_1(_y)),
              _hyphenMinus_2(_square_1(_dw), _dt),
            ),
          ),
        );
      }, ["i"]),
    );
    return [_ts, _ys];
  }, ["self", "a:/1", "b:/1", "c:/1", "t", "y0"]),
  "{ :self :a:/1 :b:/1 :c:/1 :t :y0 | let __SPL545 = assertIsOfSize(t, 3); let tMin = at(__SPL545, 1); let tMax = at(__SPL545, 2); let dt = at(__SPL545, 3); let ts = asList(thenTo(tMin, +(tMin, dt), tMax)); let n = size(ts); let ys = List(n, 0); let dW = { :dt | normalDistribution(self,0, sqrt(dt)) }; atPut(ys, 1, y0); toDo(2, n, { :i | let y = at(ys, -(i, 1)); let dw = dW(dt); atPut(ys, i, +(+(+(y, (*(a(y), dt))), (*(b(y), dw))), (*(*(0.5, c(y)), (-(square(dw), dt)))))) }); [ts, ys] }",
);
