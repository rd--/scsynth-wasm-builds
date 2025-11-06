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
  "{ :self :r |\n\t\tlet p0 = AliasMethod(self.p0);\n\t\tlet m = self.m.collect(AliasMethod:/1);\n\t\tlet x = p0.nextRandom(r);\n\t\tBlockStream {\n\t\t\tlet h = x;\n\t\t\tx := m[x].nextRandom(r);\n\t\t\th\n\t\t} {\n\t\t\tx := p0.nextRandom(r)\n\t\t}\n\t}",
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
  "{ :self :r :t :n |\n\t\tself.asStream(r).valueSeriesRandomFunction(t, n)\n\t}",
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
  "{ :p0 :m |\n\t\tnewDiscreteMarkovProcess().initializeSlots(p0, m)\n\t}",
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
      _equalsSign_2(_stateList, _asList_1(_nonemptyRange_3(1, _k, 1))),
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
  "{ :self |\n\t\tlet stateList = self.catenate.nub.sort;\n\t\tlet k = stateList.size;\n\t\t(stateList = [1 .. k]).if {\n\t\t\tlet m = [k, k].zeroMatrix;\n\t\t\tself.do { :each |\n\t\t\t\teach.adjacentPairsDo { :i :j |\n\t\t\t\t\tm[i][j] := m[i][j] + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tm / m.collect(sum:/1)\n\t\t} {\n\t\t\tself.error('stochasticMatrix: invalid observations')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet v = self.valueList;\n\t\tlet m = v.stochasticMatrix;\n\t\tlet k = m.size;\n\t\tlet i = v.collect(first:/1);\n\t\tlet p0 = i.stochasticVector(k);\n\t\tDiscreteMarkovProcess(p0, m)\n\t}",
);
