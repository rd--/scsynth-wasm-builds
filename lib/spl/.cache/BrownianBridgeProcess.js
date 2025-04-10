sl.addType(
  false,
  "BrownianBridgeProcess",
  "BrownianBridgeProcess",
  ["Object"],
  ["sigma", "start", "end"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BrownianBridgeProcess",
);

sl.addMethodToExistingType(
  "BrownianBridgeProcess",
  "BrownianBridgeProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sigma = _sigma_1(_self);
    let __SPL303 = _assertIsOfSize_2(_start_1(_self), 2);
    let _t1 = _at_2(__SPL303, 1);
    let _x1 = _at_2(__SPL303, 2);
    let __SPL304 = _assertIsOfSize_2(_end_1(_self), 2);
    let _t2 = _at_2(__SPL304, 1);
    let _x2 = _at_2(__SPL304, 2);
    let _a_2 = sl.annotateFunction(function (_y, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(_hyphenMinus_2(_x2, _y), _hyphenMinus_2(_t2, _t));
    }, ["y", "t"]);
    let _b_2 = sl.annotateFunction(function (_y, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _sigma;
    }, ["y", "t"]);
    let __SPL305 = _assertIsOfSize_2(_t, 3);
    let _tMin = _at_2(__SPL305, 1);
    let _tMax = _at_2(__SPL305, 2);
    let _dt = _at_2(__SPL305, 3);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _tildeEqualsSign_2(_t1, _tMin),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _tildeEqualsSign_2(_t2, _tMax);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "randomFunction: invalid t");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _TemporalData_1(
          _exclamationMark_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SPL306 = _assertIsOfSize_2(
                _eulerMaruyamaMethod_5(_r, _a_2, _b_2, _t, _x1),
                2,
              );
              let _p = _at_2(__SPL306, 1);
              let _q = _at_2(__SPL306, 2);
              let _k = _size_1(_q);
              /* Statements */
              _atPut_3(_q, _k, _x2);
              return _transposed_1([_p, _q]);
            }, []),
            _n,
          ),
        );
      }, []),
    );
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n | let sigma = sigma(self); let __SPL303 = assertIsOfSize(start(self), 2); let t1 = at(__SPL303, 1); let x1 = at(__SPL303, 2); let __SPL304 = assertIsOfSize(end(self), 2); let t2 = at(__SPL304, 1); let x2 = at(__SPL304, 2); let a = { :y :t | /((-(x2, y)), (-(t2, t))) }; let b = { :y :t | sigma }; let __SPL305 = assertIsOfSize(t, 3); let tMin = at(__SPL305, 1); let tMax = at(__SPL305, 2); let dt = at(__SPL305, 3); if((|(~=(t1, tMin), { ~=(t2, tMax) })), { error(self,'randomFunction: invalid t') }, { TemporalData(!({ let __SPL306 = assertIsOfSize(eulerMaruyamaMethod(r,a:/2, b:/2, t, x1), 2); let p = at(__SPL306, 1); let q = at(__SPL306, 2); let k = size(q); atPut(q, k, x2); transposed([p, q]) }, n)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "BrownianBridgeProcess",
  "BrownianBridgeProcess",
  ["sigma", "start", "end"],
  sl.annotateFunction(function (_sigma, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _sigma, _start, _end";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newBrownianBridgeProcess_0(),
      _sigma,
      _start,
      _end,
    );
  }, ["sigma", "start", "end"]),
  "{ :sigma :start :end | initializeSlots(newBrownianBridgeProcess(),sigma, start, end) }",
);
