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
    let __SplVar1 = _assertIsOfSize_2(_start_1(_self), 2);
    let _t1 = _at_2(__SplVar1, 1);
    let _x1 = _at_2(__SplVar1, 2);
    let __SplVar2 = _assertIsOfSize_2(_end_1(_self), 2);
    let _t2 = _at_2(__SplVar2, 1);
    let _x2 = _at_2(__SplVar2, 2);
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
    let __SplVar3 = _assertIsOfSize_2(_t, 3);
    let _tMin = _at_2(__SplVar3, 1);
    let _tMax = _at_2(__SplVar3, 2);
    let _dt = _at_2(__SplVar3, 3);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _exclamationMarkEqualsSign_2(_t1, _tMin),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _exclamationMarkEqualsSign_2(_t2, _tMax);
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
              let __SplVar4 = _assertIsOfSize_2(
                _eulerMaruyamaMethod_5(_r, _a_2, _b_2, _t, _x1),
                2,
              );
              let _p = _at_2(__SplVar4, 1);
              let _q = _at_2(__SplVar4, 2);
              let _k = _size_1(_q);
              /* Statements */
              _atPut_3(_q, _k, _x2);
              return _transpose_1([_p, _q]);
            }, []),
            _n,
          ),
        );
      }, []),
    );
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n |\n\t\tlet sigma = self.sigma;\n\t\tlet [t1, x1] = self.start;\n\t\tlet [t2, x2] = self.end;\n\t\tlet a = { :y :t | (x2 - y) / (t2 - t) };\n\t\tlet b = { :y :t | sigma };\n\t\tlet [tMin, tMax, dt] = t;\n\t\t(t1 != tMin | { t2 != tMax }).if {\n\t\t\tself.error('randomFunction: invalid t')\n\t\t} {\n\t\t\tTemporalData(\n\t\t\t\t{\n\t\t\t\t\tlet [p, q] = r.eulerMaruyamaMethod(a:/2, b:/2, t, x1);\n\t\t\t\t\tlet k = q.size;\n\t\t\t\t\tq[k] := x2;\n\t\t\t\t\t[p, q].transpose\n\t\t\t\t} ! n\n\t\t\t)\n\t\t}\n\t}",
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
  "{ :sigma :start :end |\n\t\tnewBrownianBridgeProcess().initializeSlots(sigma, start, end)\n\t}",
);
