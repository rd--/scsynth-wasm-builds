sl.addType(
  false,
  "TemporalData",
  "TemporalData",
  ["Object"],
  ["valueList", "timeList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TemporalData",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "asTimeSeries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _valueList_1(_self);
    let _t = _timeList_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_t), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _TimeSeries_2(_at_2(_v, 1), _at_2(_t, 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _allEqual_1(_t),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _TimeSeries_2(
              _transposed_1(_valueList_1(_self)),
              _anyOne_1(_timeList_1(_self)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "asTimeSeries: non-uniform timeList");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let v = valueList(self); let t = timeList(self); if((=(size(t), 1)), { TimeSeries(at(v, 1), at(t, 1)) }, { if(allEqual(t), { TimeSeries(transposed(valueList(self)), anyOne(timeList(self))) }, { error(self,'asTimeSeries: non-uniform timeList') }) }) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "dataPointCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(_valueList_1(_self), _size_1));
  }, ["self"]),
  "{ :self | sum(collect(valueList(self),size:/1)) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "discretePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretePlot_1(_pathList_1(_self));
  }, ["self"]),
  "{ :self | discretePlot(pathList(self)) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "isRegularlySampled",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_timeList_1(_self), _isRegularlySpaced_1);
  }, ["self"]),
  "{ :self | allSatisfy(timeList(self),isRegularlySpaced:/1) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "linePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_pathList_1(_self));
  }, ["self"]),
  "{ :self | linePlot(pathList(self)) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "minimumTimeIncrement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_timeList_1(_self), _minimumDifference_1);
  }, ["self"]),
  "{ :self | collect(timeList(self),minimumDifference:/1) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "pathCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_valueList_1(_self));
  }, ["self"]),
  "{ :self | size(valueList(self)) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "pathList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(
      _timeList_1(_self),
      _valueList_1(_self),
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _transposed_1([_i, _j]);
      }, ["i", "j"]),
    );
  }, ["self"]),
  "{ :self | withCollect(timeList(self), valueList(self), { :i :j | transposed([i, j]) }) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "resample",
  ["self", "t"],
  sl.annotateFunction(function (_self, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _pathCount_1(_self);
    let _x = _timeList_1(_self);
    let _y = _valueList_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_t), _k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _TemporalData_2(
          _collect_2(
            _upOrDownTo_2(1, _k),
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _collect_2(
                _at_2(_t, _i),
                _linearInterpolator_2(_at_2(_x, _i), _at_2(_y, _i)),
              );
            }, ["i"]),
          ),
          _t,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "resample: size mismatch");
      }, []),
    );
  }, ["self", "t"]),
  "{ :self :t | let k = pathCount(self); let x = timeList(self); let y = valueList(self); if((=(size(t), k)), { TemporalData(collect(upOrDownTo(1, k), { :i | collect(at(t, i),linearInterpolator(at(x, i), at(y, i))) }), t) }, { error(self,'resample: size mismatch') }) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "scatterPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _scatterPlot_1(_pathList_1(_self));
  }, ["self"]),
  "{ :self | scatterPlot(pathList(self)) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "stepPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stepPlot_1(_pathList_1(_self));
  }, ["self"]),
  "{ :self | stepPlot(pathList(self)) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "timelinePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _timelinePlot_1(_timeList_1(_self));
  }, ["self"]),
  "{ :self | timelinePlot(timeList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TemporalData",
  "TemporalData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = [];
    let _v = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL72 = _assertIsOfSize_2(_transposed_1(_each), 2);
        let _i = _at_2(__SPL72, 1);
        let _j = _at_2(__SPL72, 2);
        /* Statements */
        _add_2(_t, _i);
        return _add_2(_v, _j);
      }, ["each"]),
    );
    return _TemporalData_2(_v, _t);
  }, ["self"]),
  "{ :self | let t = []; let v = []; do(self, { :each | let __SPL72 = assertIsOfSize(transposed(each), 2); let i = at(__SPL72, 1); let j = at(__SPL72, 2); add(t,i); add(v,j) }); TemporalData(v, t) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TemporalData",
  "TemporalData",
  ["v", "t"],
  sl.annotateFunction(function (_v, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _v, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_v), _size_1(_t)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newTemporalData_0(), _v, _t);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_v, _t], "TemporalData: size mismatch");
      }, []),
    );
  }, ["v", "t"]),
  "{ :v :t | if((=(size(v), size(t))), { initializeSlots(newTemporalData(),v, t) }, { error([v, t],'TemporalData: size mismatch') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "TemporalData",
  "regularTemporalData",
  ["aBlock:/1", "timeSpecificationList"],
  sl.annotateFunction(function (_aBlock_1, _timeSpecificationList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _aBlock_1, _timeSpecificationList";
      throw new Error(errorMessage);
    } /* Statements */
    return _TemporalData_1(
      _collect_2(
        _timeSpecificationList,
        sl.annotateFunction(function (_timeSpecification) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _timeSpecification";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL73 = _assertIsOfSize_2(_timeSpecification, 3);
          let _tMin = _at_2(__SPL73, 1);
          let _tMax = _at_2(__SPL73, 2);
          let _tStep = _at_2(__SPL73, 3);
          let _timeList = _asList_1(
            _thenTo_3(_tMin, _plusSign_2(_tMin, _tStep), _tMax),
          );
          /* Statements */
          return _transposed_1([_timeList, _aBlock_1(_timeList)]);
        }, ["timeSpecification"]),
      ),
    );
  }, ["aBlock:/1", "timeSpecificationList"]),
  "{ :aBlock:/1 :timeSpecificationList | TemporalData(collect(timeSpecificationList, { :timeSpecification | let __SPL73 = assertIsOfSize(timeSpecification, 3); let tMin = at(__SPL73, 1); let tMax = at(__SPL73, 2); let tStep = at(__SPL73, 3); let timeList = asList(thenTo(tMin, +(tMin, tStep), tMax)); transposed([timeList, aBlock(timeList)]) })) }",
);
