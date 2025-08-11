sl.addType(
  false,
  "TimeSeries",
  "TimeSeries",
  ["Object", "Iterable", "Indexable", "Collection"],
  ["values", "times"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TimeSeries",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "TimeSeries",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "TimeSeries",
);

sl.copyTraitMethodsToType(
  "Collection",
  "TimeSeries",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "associations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _associationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; associationsDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "associationsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_t, _v) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _t, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_hyphenMinusGreaterThanSign_2(_t, _v));
      }, ["t", "v"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | keysAndValuesDo(self, { :t :v | aBlock(->(t, v)) }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "akimaInterpolator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _akimaInterpolator_2(_times_1(_self), _values_1(_self));
  }, ["self"]),
  "{ :self | akimaInterpolator(times(self),values(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "atIfAbsent",
  ["self", "time", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _time, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _time, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(
      _values_1(_self),
      _indexOfIfAbsent_3(_times_1(_self), _time, _ifAbsent_0),
    );
  }, ["self", "time", "ifAbsent:/0"]),
  "{ :self :time :ifAbsent:/0 | at(values(self),indexOfIfAbsent(times(self),time, ifAbsent:/0)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "atPut",
  ["self", "time", "item"],
  sl.annotateFunction(function (_self, _time, _item) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _time, _item";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _values = _values_1(_self);
    let _times = _times_1(_self);
    let _index = _binarySearchRightmost_2(_times, _time);
    /* Statements */
    _if_3(
      _ampersand_2(
        _lessThanSignEqualsSign_2(_index, _size_1(_times)),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_times, _index), _time);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_values, _index, _item);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addBeforeIndex_3(_values, _item, _index);
        return _addBeforeIndex_3(_times, _time, _index);
      }, []),
    );
    return _item;
  }, ["self", "time", "item"]),
  "{ :self :time :item | let values = values(self); let times = times(self); let index = binarySearchRightmost(times,time); if((&(<=(index, size(times)), { =(at(times, index), time) })), { atPut(values, index, item) }, { addBeforeIndex(values,item, index); addBeforeIndex(times,time, index) }); item }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeSeries_2(
      _collect_2(_values_1(_self), _aBlock_1),
      _times_1(_self),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | TimeSeries(collect(values(self),aBlock:/1), times(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "cubicSplineInterpolator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cubicSplineInterpolator_2(_times_1(_self), _values_1(_self));
  }, ["self"]),
  "{ :self | cubicSplineInterpolator(times(self),values(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "discretePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretePlot_1(_path_1(_self));
  }, ["self"]),
  "{ :self | discretePlot(path(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_values_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(values(self),aBlock:/1) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "firstTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_times_1(_self));
  }, ["self"]),
  "{ :self | first(times(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "firstValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_values_1(_self));
  }, ["self"]),
  "{ :self | first(values(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _times_1(_self);
  }, ["self"]),
  "{ :self | times(self) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "interpolation",
  ["self", "method"],
  sl.annotateFunction(function (_self, _method) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _method";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = _namedInterpolatorFunction_1(_method);
    let _x = _times_1(_self);
    let _y = _values_1(_self);
    /* Statements */
    return _f_2(_x, _y);
  }, ["self", "method"]),
  "{ :self :method | let f:/2 = namedInterpolatorFunction(method); let x = times(self); let y = values(self); f(x, y) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "isMultivariate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(_valueDimensions_1(_self), 1);
  }, ["self"]),
  "{ :self | >(valueDimensions(self), 1) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "isRegularlySampled",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isRegularlySpaced_1(_times_1(_self));
  }, ["self"]),
  "{ :self | isRegularlySpaced(times(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "keys",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _times_1(_self);
  }, ["self"]),
  "{ :self | times(self) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "keysDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_times_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(times(self),aBlock:/1) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withDo_3(_times_1(_self), _values_1(_self), _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | withDo(times(self),values(self), aBlock:/2) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "lastTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_times_1(_self));
  }, ["self"]),
  "{ :self | last(times(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "lastValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_values_1(_self));
  }, ["self"]),
  "{ :self | last(values(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "linearInterpolator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearInterpolator_2(_times_1(_self), _values_1(_self));
  }, ["self"]),
  "{ :self | linearInterpolator(times(self),values(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "linePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_path_1(_self));
  }, ["self"]),
  "{ :self | linePlot(path(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "merge",
  ["self", "aTimeSeries", "resolveConflict:/2"],
  sl.annotateFunction(function (_self, _aTimeSeries, _resolveConflict_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aTimeSeries, _resolveConflict_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lhs = _path_1(_self);
    let _rhs = _path_1(_aTimeSeries);
    let _i2 = 1;
    let _t2 = _at_2(_at_2(_rhs, 1), 1);
    let _k2 = _size_1(_rhs);
    let _nextRhs_0 = sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _at_2(_at_2(_rhs, _i2), 2);
      /* Statements */
      _i2 = _plusSign_2(_i2, 1);
      _ifTrue_2(
        _lessThanSignEqualsSign_2(_i2, _k2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _t2 = _at_2(_at_2(_rhs, _i2), 1);
        }, []),
      );
      return _x;
    }, []);
    let _answer = [];
    /* Statements */
    _do_2(
      _lhs,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL74 = _assertIsOfSize_2(_each, 2);
        let _t1 = _at_2(__SPL74, 1);
        let _v1 = _at_2(__SPL74, 2);
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSign_2(_t2, _t1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_i2, _k2);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, [_t2, _nextRhs_0()]);
          }, []),
        );
        return _if_3(
          _equalsSign_2(_t1, _t2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _r = _resolveConflict_2(_v1, _nextRhs_0());
            /* Statements */
            return _add_2(_answer, [_t1, _r]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, [_t1, _v1]);
          }, []),
        );
      }, ["each"]),
    );
    _toDo_3(
      _i2,
      _size_1(_rhs),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _at_2(_rhs, _i));
      }, ["i"]),
    );
    return _TimeSeries_1(_answer);
  }, ["self", "aTimeSeries", "resolveConflict:/2"]),
  "{ :self :aTimeSeries :resolveConflict:/2 | let lhs = path(self); let rhs = path(aTimeSeries); let i2 = 1; let t2 = at(at(rhs, 1), 1); let k2 = size(rhs); let nextRhs = { let x = at(at(rhs, i2), 2); i2 := +(i2, 1); ifTrue((<=(i2, k2)), { t2 := at(at(rhs, i2), 1) }); x }; let answer = []; do(lhs, { :each | let __SPL74 = assertIsOfSize(each, 2); let t1 = at(__SPL74, 1); let v1 = at(__SPL74, 2); whileTrue({ &(<(t2, t1), { <=(i2, k2) }) }, { add(answer,[t2, nextRhs()]) }); if((=(t1, t2)), { let r = resolveConflict(v1, nextRhs()); add(answer,[t1, r]) }, { add(answer,[t1, v1]) }) }); toDo(i2, size(rhs), { :i | add(answer,at(rhs, i)) }); TimeSeries(answer) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "merge",
  ["self", "aTimeSeries"],
  sl.annotateFunction(function (_self, _aTimeSeries) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeSeries";
      throw new Error(errorMessage);
    } /* Statements */
    return _merge_3(
      _self,
      _aTimeSeries,
      sl.annotateFunction(function (_lhs, _rhs) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _lhs, _rhs";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "merge: conflict");
      }, ["lhs", "rhs"]),
    );
  }, ["self", "aTimeSeries"]),
  "{ :self :aTimeSeries | merge(self, aTimeSeries, { :lhs :rhs | error(self,'merge: conflict') }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "minimumTimeIncrement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minimumDifference_1(_times_1(_self));
  }, ["self"]),
  "{ :self | minimumDifference(times(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "nearestNeighbourInterpolator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nearestNeighbourInterpolator_2(_times_1(_self), _values_1(_self));
  }, ["self"]),
  "{ :self | nearestNeighbourInterpolator(times(self),values(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "path",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _transposed_1([_times_1(_self), _values_1(_self)]);
  }, ["self"]),
  "{ :self | transposed([times(self), values(self)]) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "pathComponents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _valueDimensions_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_k, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "pathComponents: not multivariate");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _t = _times_1(_self);
        let _v = _transposed_1(_values_1(_self));
        /* Statements */
        return _collect_2(
          _upOrDownTo_2(1, _k),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _TimeSeries_2(_at_2(_v, _i), _t);
          }, ["i"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let k = valueDimensions(self); if((=(k, 1)), { error(self,'pathComponents: not multivariate') }, { let t = times(self); let v = transposed(values(self)); collect(upOrDownTo(1, k), { :i | TimeSeries(at(v, i), t) }) }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "pathLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_self);
  }, ["self"]),
  "{ :self | size(self) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "resample",
  ["self", "t"],
  sl.annotateFunction(function (_self, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _times_1(_self);
    let _y = _values_1(_self);
    /* Statements */
    return _TimeSeries_2(_collect_2(_t, _linearInterpolator_2(_x, _y)), _t);
  }, ["self", "t"]),
  "{ :self :t | let x = times(self); let y = values(self); TimeSeries(collect(t,linearInterpolator(x, y)), t) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "resample",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t1 = _firstTime_1(_self);
    let _t2 = _lastTime_1(_self);
    let _dt = _minimumTimeIncrement_1(_self);
    /* Statements */
    return _resample_2(
      _self,
      _asList_1(_thenTo_3(_t1, _plusSign_2(_t1, _dt), _t2)),
    );
  }, ["self"]),
  "{ :self | let t1 = firstTime(self); let t2 = lastTime(self); let dt = minimumTimeIncrement(self); resample(self,asList(thenTo(t1, +(t1, dt), t2))) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "rescale",
  ["self", "t1", "t2"],
  sl.annotateFunction(function (_self, _t1, _t2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _t1, _t2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = _times_1(_self);
    /* Statements */
    return _TimeSeries_2(
      _values_1(_self),
      _rescale_5(_t, _first_1(_t), _last_1(_t), _t1, _t2),
    );
  }, ["self", "t1", "t2"]),
  "{ :self :t1 :t2 | let t = times(self); TimeSeries(values(self), rescale(t,first(t), last(t), t1, t2)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "scatterPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _scatterPlot_1(_path_1(_self));
  }, ["self"]),
  "{ :self | scatterPlot(path(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "shift",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeSeries_2(_values_1(_self), _plusSign_2(_times_1(_self), _x));
  }, ["self", "x"]),
  "{ :self :x | TimeSeries(values(self), +(times(self), x)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_values_1(_self));
  }, ["self"]),
  "{ :self | size(values(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "timelinePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _timelinePlot_1(_times_1(_self));
  }, ["self"]),
  "{ :self | timelinePlot(times(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "valueDimensions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _anyOne_1(_values_1(_self));
    /* Statements */
    return _if_3(
      _isList_1(_v),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_v);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
  }, ["self"]),
  "{ :self | let v = anyOne(values(self)); if(isList(v), { size(v) }, { 1 }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "valuesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_values_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(values(self),aBlock:/1) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "window",
  ["self", "startTime", "endTime"],
  sl.annotateFunction(function (_self, _startTime, _endTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startTime, _endTime";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = _times_1(_self);
    let _i = _detectIndex_2(
      _t,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_each, _startTime);
      }, ["each"]),
    );
    let _j = _detectIndexStartingAt_3(
      _t,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_each, _endTime);
      }, ["each"]),
      _i,
    );
    /* Statements */
    return _TimeSeries_2(
      _copyFromTo_3(_t, _i, _j),
      _copyFromTo_3(_values_1(_self), _i, _j),
    );
  }, ["self", "startTime", "endTime"]),
  "{ :self :startTime :endTime | let t = times(self); let i = detectIndex(t, { :each | >=(each, startTime) }); let j = detectIndexStartingAt(t,{ :each | >=(each, endTime) }, i); TimeSeries(copyFromTo(t,i, j), copyFromTo(values(self),i, j)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TimeSeries",
  "TimeSeries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL75 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL75, 1);
    let _n = _at_2(__SPL75, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL76 = _assertIsOfSize_2(_transposed_1(_self), 2);
        let _t = _at_2(__SPL76, 1);
        let _v = _at_2(__SPL76, 2);
        /* Statements */
        return _TimeSeries_2(_v, _t);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "TimeSeries: not two-column matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self | let __SPL75 = assertIsOfSize(shape(self), 2); let m = at(__SPL75, 1); let n = at(__SPL75, 2); if((=(n, 2)), { let __SPL76 = assertIsOfSize(transposed(self), 2); let t = at(__SPL76, 1); let v = at(__SPL76, 2); TimeSeries(v, t) }, { error(self,'TimeSeries: not two-column matrix') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TimeSeries",
  "TimeSeries",
  ["values", "times"],
  sl.annotateFunction(function (_values, _times) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _values, _times";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newTimeSeries_0(), _values, _times);
  }, ["values", "times"]),
  "{ :values :times | initializeSlots(newTimeSeries(),values, times) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TimeSeries",
  "isRegularlySampled",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL77 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _m = _at_2(__SPL77, 1);
            let _n = _at_2(__SPL77, 2);
            /* Statements */
            return _if_3(
              _equalsSign_2(_n, 2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _lessThanSignEqualsSign_2(_m, 2),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return true;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _z = _hyphenMinus_2(
                      _at_2(_at_2(_self, 2), 1),
                      _at_2(_at_2(_self, 1), 1),
                    );
                    /* Statements */
                    return _allSatisfy_2(
                      _upOrDownTo_2(3, _m),
                      sl.annotateFunction(function (_i) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _i";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _equalsSign_2(
                          _hyphenMinus_2(
                            _at_2(_at_2(_self, _i), 1),
                            _at_2(_at_2(_self, _hyphenMinus_2(_i, 1)), 1),
                          ),
                          _z,
                        );
                      }, ["i"]),
                    );
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  "isRegularlySampled: not two column matrix",
                );
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              "isRegularlySampled: not vector or two-column matrix",
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { true }, { if(isMatrix(self), { let __SPL77 = assertIsOfSize(shape(self), 2); let m = at(__SPL77, 1); let n = at(__SPL77, 2); if((=(n, 2)), { if((<=(m, 2)), { true }, { let z = -(at(at(self, 2), 1), at(at(self, 1), 1)); allSatisfy(upOrDownTo(3, m), { :i | =(-(at(at(self, i), 1), at(at(self, -(i, 1)), 1)), z) }) }) }, { error(self,'isRegularlySampled: not two column matrix') }) }, { error(self,'isRegularlySampled: not vector or two-column matrix') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TimeSeries",
  "minimumTimeIncrement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL78 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _m = _at_2(__SPL78, 1);
            let _n = _at_2(__SPL78, 2);
            /* Statements */
            return _if_3(
              _equalsSign_2(_n, 2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _minimumDifferenceBy_2(_self, _first_1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  "minimumTimeIncrement: not two-column matrix",
                );
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              "minimumTimeIncrement: not vector or two-column matrix",
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { 1 }, { if(isMatrix(self), { let __SPL78 = assertIsOfSize(shape(self), 2); let m = at(__SPL78, 1); let n = at(__SPL78, 2); if((=(n, 2)), { minimumDifferenceBy(self,first:/1) }, { error(self,'minimumTimeIncrement: not two-column matrix') }) }, { error(self,'minimumTimeIncrement: not vector or two-column matrix') }) }) }",
);
