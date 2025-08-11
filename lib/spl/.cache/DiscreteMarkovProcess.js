sl.addType(
  false,
  "DiscreteMarkovProcess",
  "DiscreteMarkovProcess",
  ["Object"],
  ["p0", "m"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DiscreteMarkovProcess",
);

sl.addMethodToExistingType(
  "DiscreteMarkovProcess",
  "DiscreteMarkovProcess",
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
    let _x = _nextRandom_2(_p0, _r);
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _h = _x;
        /* Statements */
        _x = _nextRandom_2(_at_2(_m, _x), _r);
        return _h;
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
  "{ :self :r | let p0 = AliasMethod(p0(self)); let m = collect(m(self),AliasMethod:/1); let x = nextRandom(p0,r); BlockStream({ let h = x; x := nextRandom(at(m, x),r); h }, { x := nextRandom(p0,r) }) }",
);

sl.addMethodToExistingType(
  "DiscreteMarkovProcess",
  "DiscreteMarkovProcess",
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

sl.extendTypeOrTraitWithMethod(
  "List",
  "DiscreteMarkovProcess",
  "DiscreteMarkovProcess",
  ["p0", "m"],
  sl.annotateFunction(function (_p0, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p0, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newDiscreteMarkovProcess_0(), _p0, _m);
  }, ["p0", "m"]),
  "{ :p0 :m | initializeSlots(newDiscreteMarkovProcess(),p0, m) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DiscreteMarkovProcess",
  "stochasticMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stateList = _sort_1(_nub_1(_catenate_1(_self)));
    let _k = _size_1(_stateList);
    /* Statements */
    return _if_3(
      _equalsSign_2(_stateList, _asList_1(_upOrDownTo_2(1, _k))),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _zeroMatrix_1([_k, _k]);
        /* Statements */
        _do_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _adjacentPairsDo_2(
              _each,
              sl.annotateFunction(function (_i, _j) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _i, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _at_2(_m, _i),
                  _j,
                  _plusSign_2(_at_2(_at_2(_m, _i), _j), 1),
                );
              }, ["i", "j"]),
            );
          }, ["each"]),
        );
        return _solidus_2(_m, _collect_2(_m, _sum_1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "stochasticMatrix: invalid observations");
      }, []),
    );
  }, ["self"]),
  "{ :self | let stateList = sort(nub(catenate(self))); let k = size(stateList); if((=(stateList, asList(upOrDownTo(1, k)))), { let m = zeroMatrix([k, k]); do(self, { :each | adjacentPairsDo(each, { :i :j | atPut(at(m, i), j, +(at(at(m, i), j), 1)) }) }); /(m, collect(m,sum:/1)) }, { error(self,'stochasticMatrix: invalid observations') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "TemporalData",
  "DiscreteMarkovProcess",
  "estimatedDiscreteMarkovProcess",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _valueList_1(_self);
    let _m = _stochasticMatrix_1(_v);
    let _k = _size_1(_m);
    let _i = _collect_2(_v, _first_1);
    let _p0 = _stochasticVector_2(_i, _k);
    /* Statements */
    return _DiscreteMarkovProcess_2(_p0, _m);
  }, ["self"]),
  "{ :self | let v = valueList(self); let m = stochasticMatrix(v); let k = size(m); let i = collect(v,first:/1); let p0 = stochasticVector(i,k); DiscreteMarkovProcess(p0, m) }",
);
