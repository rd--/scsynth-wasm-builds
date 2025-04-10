sl.addType(
  false,
  "HiddenMarkovProcess",
  "HiddenMarkovProcess",
  ["Object"],
  ["p0", "m", "e"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HiddenMarkovProcess",
);

sl.addMethodToExistingType(
  "HiddenMarkovProcess",
  "HiddenMarkovProcess",
  "asStream",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p0 = _AliasMethod_1(_p0_1(_self));
    let _m = _collect_2(_m_1(_self), _AliasMethod_1);
    let _e = _collect_2(_e_1(_self), _AliasMethod_1);
    let _x = _nextRandom_2(_p0, _r);
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _nextRandom_2(_at_2(_e, _x), _r);
        /* Statements */
        _x = _nextRandom_2(_at_2(_m, _x), _r);
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x = _nextRandom_2(_p0, _r);
      }, []),
    );
  }, ["self", "r"]),
  "{ :self :r | let p0 = AliasMethod(p0(self)); let m = collect(m(self),AliasMethod:/1); let e = collect(e(self),AliasMethod:/1); let x = nextRandom(p0,r); BlockStream({ let answer = nextRandom(at(e, x),r); x := nextRandom(at(m, x),r); answer }, { x := nextRandom(p0,r) }) }",
);

sl.addMethodToExistingType(
  "HiddenMarkovProcess",
  "HiddenMarkovProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueSeriesRandomFunction_3(_asStream_2(_self, _r), _t, _n);
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n | valueSeriesRandomFunction(asStream(self,r),t, n) }",
);

sl.addMethodToExistingType(
  "HiddenMarkovProcess",
  "HiddenMarkovProcess",
  "viterbiDecoding",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p0 = _p0_1(_self);
    let _m = _m_1(_self);
    let _e = _e_1(_self);
    let _o = _aList;
    let _t = _size_1(_o);
    let _s = _size_1(_p0);
    let _p = _zeroMatrix_2(_t, _s);
    let _z = _zeroMatrix_2(_t, _s);
    let _answer = _List_1(_t);
    /* Statements */
    _toDo_3(
      1,
      _s,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _at_2(_p, 1),
          _i,
          _asterisk_2(_at_2(_p0, _i), _at_2(_at_2(_e, _i), _at_2(_o, 1))),
        );
      }, ["i"]),
    );
    _toDo_3(
      2,
      _t,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _s,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _s,
              sl.annotateFunction(function (_k) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _k";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _x = _asterisk_2(
                  _asterisk_2(
                    _at_2(_at_2(_p, _hyphenMinus_2(_i, 1)), _k),
                    _at_2(_at_2(_m, _k), _j),
                  ),
                  _at_2(_at_2(_e, _j), _at_2(_o, _i)),
                );
                /* Statements */
                return _ifTrue_2(
                  _greaterThanSign_2(_x, _at_2(_at_2(_p, _i), _j)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _atPut_3(_at_2(_p, _i), _j, _x);
                    return _atPut_3(_at_2(_z, _i), _j, _k);
                  }, []),
                );
              }, ["k"]),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    _atPut_3(_answer, _t, _indexOf_2(_at_2(_p, _t), _max_1(_at_2(_p, _t))));
    _downToDo_3(
      _hyphenMinus_2(_t, 1),
      1,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _answer,
          _i,
          _at_2(
            _at_2(_z, _plusSign_2(_i, 1)),
            _at_2(_answer, _plusSign_2(_i, 1)),
          ),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["self", "aList"]),
  "{ :self :aList | let p0 = p0(self); let m = m(self); let e = e(self); let o = aList; let t = size(o); let s = size(p0); let p = zeroMatrix(t, s); let z = zeroMatrix(t, s); let answer = List(t); toDo(1, s, { :i | atPut(at(p, 1), i, *(at(p0, i), at(at(e, i), at(o, 1)))) }); toDo(2, t, { :i | toDo(1, s, { :j | toDo(1, s, { :k | let x = *(*(at(at(p, -(i, 1)), k), at(at(m, k), j)), at(at(e, j), at(o, i))); ifTrue((>(x, at(at(p, i), j))), { atPut(at(p, i), j, x); atPut(at(z, i), j, k) }) }) }) }); atPut(answer, t, indexOf(at(p, t),max(at(p, t)))); downToDo((-(t, 1)), 1, { :i | atPut(answer, i, at(at(z, +(i, 1)), at(answer, +(i, 1)))) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HiddenMarkovProcess",
  "HiddenMarkovProcess",
  ["p0", "m", "e"],
  sl.annotateFunction(function (_p0, _m, _e) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p0, _m, _e";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHiddenMarkovProcess_0(), _p0, _m, _e);
  }, ["p0", "m", "e"]),
  "{ :p0 :m :e | initializeSlots(newHiddenMarkovProcess(),p0, m, e) }",
);
