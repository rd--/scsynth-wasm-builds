sl.addType(
  false,
  "TemporalData",
  "TemporalData",
  ["Object", "Equatable"],
  ["valueList", "timeList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TemporalData",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
              _transpose_1(_valueList_1(_self)),
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
  "{ :self |\n\t\tlet v = self.valueList;\n\t\tlet t = self.timeList;\n\t\t(t.size = 1).if {\n\t\t\tTimeSeries(v[1], t[1])\n\t\t} {\n\t\t\tt.allEqual.if {\n\t\t\t\tTimeSeries(\n\t\t\t\t\tself.valueList.transpose,\n\t\t\t\t\tself.timeList.anyOne\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\tself.error('asTimeSeries: non-uniform timeList')\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.valueList.collect(size:/1).sum\n\t}",
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
  "{ :self |\n\t\tself.pathList.discretePlot\n\t}",
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
  "{ :self |\n\t\tself.timeList.allSatisfy(isRegularlySpaced:/1)\n\t}",
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
  "{ :self |\n\t\tself.pathList.linePlot\n\t}",
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
  "{ :self |\n\t\tself.timeList.collect(minimumDifference:/1)\n\t}",
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
  "{ :self |\n\t\tself.valueList.size\n\t}",
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
        return _transpose_1([_i, _j]);
      }, ["i", "j"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.timeList.withCollect(self.valueList) { :i :j |\n\t\t\t[i, j].transpose\n\t\t}\n\t}",
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
  "{ :self :t |\n\t\tlet k = self.pathCount;\n\t\tlet x = self.timeList;\n\t\tlet y = self.valueList;\n\t\t(t.size = k).if {\n\t\t\tTemporalData(\n\t\t\t\t(1 .. k).collect { :i |\n\t\t\t\t\tt[i].collect(\n\t\t\t\t\t\tlinearInterpolator(x[i], y[i])\n\t\t\t\t\t)\n\t\t\t\t},\n\t\t\t\tt\n\t\t\t)\n\t\t} {\n\t\t\tself.error('resample: size mismatch')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.pathList.scatterPlot\n\t}",
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
  "{ :self |\n\t\tself.pathList.stepPlot\n\t}",
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
  "{ :self |\n\t\tself.timeList.timelinePlot\n\t}",
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
        let __SplVar1 = _assertIsOfSize_2(_transpose_1(_each), 2);
        let _i = _at_2(__SplVar1, 1);
        let _j = _at_2(__SplVar1, 2);
        /* Statements */
        _add_2(_t, _i);
        return _add_2(_v, _j);
      }, ["each"]),
    );
    return _TemporalData_2(_v, _t);
  }, ["self"]),
  "{ :self |\n\t\tlet t = [];\n\t\tlet v = [];\n\t\tself.do { :each |\n\t\t\tlet [i, j] = each.transpose;\n\t\t\tt.add(i);\n\t\t\tv.add(j)\n\t\t};\n\t\tTemporalData(v, t)\n\t}",
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
  "{ :v :t |\n\t\t(v.size = t.size).if {\n\t\t\tnewTemporalData().initializeSlots(v, t)\n\t\t} {\n\t\t\t[v, t].error('TemporalData: size mismatch')\n\t\t}\n\t}",
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
          let __SplVar2 = _assertIsOfSize_2(_timeSpecification, 3);
          let _tMin = _at_2(__SplVar2, 1);
          let _tMax = _at_2(__SplVar2, 2);
          let _tStep = _at_2(__SplVar2, 3);
          let _timeList = _asList_1(
            _thenTo_3(_tMin, _plusSign_2(_tMin, _tStep), _tMax),
          );
          /* Statements */
          return _transpose_1([_timeList, _aBlock_1(_timeList)]);
        }, ["timeSpecification"]),
      ),
    );
  }, ["aBlock:/1", "timeSpecificationList"]),
  "{ :aBlock:/1 :timeSpecificationList |\n\t\tTemporalData(\n\t\t\ttimeSpecificationList.collect { :timeSpecification |\n\t\t\t\tlet [tMin, tMax, tStep] = timeSpecification;\n\t\t\t\tlet timeList = [tMin, tMin + tStep .. tMax];\n\t\t\t\t[\n\t\t\t\t\ttimeList,\n\t\t\t\t\taBlock(timeList)\n\t\t\t\t].transpose\n\t\t\t}\n\t\t)\n\t}",
);
