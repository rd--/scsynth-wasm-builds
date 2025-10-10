sl.addType(
  false,
  "TimeSeries",
  "TimeSeries",
  ["Object", "Equatable", "Iterable", "Indexable", "Collection"],
  ["values", "times"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TimeSeries",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.associationsDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.keysAndValuesDo { :t :v |\n\t\t\taBlock(t -> v)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.times.akimaInterpolator(\n\t\t\tself.values\n\t\t)\n\t}",
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
  "{ :self :time :ifAbsent:/0 |\n\t\tself.values.at(\n\t\t\tself.times.indexOfIfAbsent(time, ifAbsent:/0)\n\t\t)\n\t}",
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
  "{ :self :time :item |\n\t\tlet values = self.values;\n\t\tlet times = self.times;\n\t\tlet index = times.binarySearchRightmost(time);\n\t\t(index <= times.size & { times[index] = time }).if {\n\t\t\tvalues[index] := item\n\t\t} {\n\t\t\tvalues.addBeforeIndex(item, index);\n\t\t\ttimes.addBeforeIndex(time, index)\n\t\t};\n\t\titem\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tTimeSeries(\n\t\t\tself.values.collect(aBlock:/1),\n\t\t\tself.times\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.times.cubicSplineInterpolator(\n\t\t\tself.values\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.path.discretePlot\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.values.do(aBlock:/1)\n\t}",
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
  "{ :self |\n\t\tself.times.first\n\t}",
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
  "{ :self |\n\t\tself.values.first\n\t}",
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
  "{ :self |\n\t\tself.times\n\t}",
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
  "{ :self :method |\n\t\tlet f:/2 = method.namedInterpolatorFunction;\n\t\tlet x = self.times;\n\t\tlet y = self.values;\n\t\tf(x, y)\n\t}",
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
  "{ :self |\n\t\tself.valueDimensions > 1\n\t}",
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
  "{ :self |\n\t\tself.times.isRegularlySpaced\n\t}",
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
  "{ :self |\n\t\tself.times\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.times.do(aBlock:/1)\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.times.withDo(self.values, aBlock:/2)\n\t}",
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
  "{ :self |\n\t\tself.times.last\n\t}",
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
  "{ :self |\n\t\tself.values.last\n\t}",
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
  "{ :self |\n\t\tself.times.linearInterpolator(\n\t\t\tself.values\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.path.linePlot\n\t}",
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
        let __SplVar1 = _assertIsOfSize_2(_each, 2);
        let _t1 = _at_2(__SplVar1, 1);
        let _v1 = _at_2(__SplVar1, 2);
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
  "{ :self :aTimeSeries :resolveConflict:/2 |\n\t\tlet lhs = self.path;\n\t\tlet rhs = aTimeSeries.path;\n\t\tlet i2 = 1;\n\t\tlet t2 = rhs[1][1];\n\t\tlet k2 = rhs.size;\n\t\tlet nextRhs = {\n\t\t\tlet x = rhs[i2][2];\n\t\t\ti2 := i2 + 1;\n\t\t\t(i2 <= k2).ifTrue {\n\t\t\t\tt2 := rhs[i2][1]\n\t\t\t};\n\t\t\tx\n\t\t};\n\t\tlet answer = [];\n\t\tlhs.do { :each |\n\t\t\tlet [t1, v1] = each;\n\t\t\t{\n\t\t\t\tt2 < t1 & {\n\t\t\t\t\ti2 <= k2\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tanswer.add([t2, nextRhs()])\n\t\t\t};\n\t\t\t(t1 = t2).if {\n\t\t\t\tlet r = resolveConflict(v1, nextRhs());\n\t\t\t\tanswer.add([t1, r])\n\t\t\t} {\n\t\t\t\tanswer.add([t1, v1])\n\t\t\t}\n\t\t};\n\t\ti2.toDo(rhs.size) { :i |\n\t\t\tanswer.add(rhs[i])\n\t\t};\n\t\tTimeSeries(answer)\n\t}",
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
  "{ :self :aTimeSeries |\n\t\tself.merge(aTimeSeries) { :lhs :rhs |\n\t\t\tself.error('merge: conflict')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.times.minimumDifference\n\t}",
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
  "{ :self |\n\t\tself.times.nearestNeighbourInterpolator(\n\t\t\tself.values\n\t\t)\n\t}",
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
    return _transpose_1([_times_1(_self), _values_1(_self)]);
  }, ["self"]),
  "{ :self |\n\t\t[self.times, self.values].transpose\n\t}",
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
        let _v = _transpose_1(_values_1(_self));
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
  "{ :self |\n\t\tlet k = self.valueDimensions;\n\t\t(k = 1).if {\n\t\t\tself.error('pathComponents: not multivariate')\n\t\t} {\n\t\t\tlet t = self.times;\n\t\t\tlet v = self.values.transpose;\n\t\t\t(1 .. k).collect { :i |\n\t\t\t\tTimeSeries(v[i], t)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.size\n\t}",
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
  "{ :self :t |\n\t\tlet x = self.times;\n\t\tlet y = self.values;\n\t\tTimeSeries(\n\t\t\tt.collect(linearInterpolator(x, y)),\n\t\t\tt\n\t\t)\n\t}",
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
  "{ :self |\n\t\tlet t1 = self.firstTime;\n\t\tlet t2 = self.lastTime;\n\t\tlet dt = self.minimumTimeIncrement;\n\t\tself.resample([t1, t1 + dt .. t2])\n\t}",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "rescale",
  ["self", "b"],
  sl.annotateFunction(function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = _times_1(_self);
    /* Statements */
    return _TimeSeries_2(
      _values_1(_self),
      _rescale_3(_t, [_first_1(_t), _last_1(_t)], _b),
    );
  }, ["self", "b"]),
  "{ :self :b |\n\t\tlet t = self.times;\n\t\tTimeSeries(\n\t\t\tself.values,\n\t\t\tt.rescale([t.first, t.last], b)\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.path.scatterPlot\n\t}",
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
  "{ :self :x |\n\t\tTimeSeries(\n\t\t\tself.values,\n\t\t\tself.times + x\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.values.size\n\t}",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
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
  "{ :self |\n\t\tself.times.timelinePlot\n\t}",
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
  "{ :self |\n\t\tlet v = self.values.anyOne;\n\t\tv.isList.if {\n\t\t\tv.size\n\t\t} {\n\t\t\t1\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.values.do(aBlock:/1)\n\t}",
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
  "{ :self :startTime :endTime |\n\t\tlet t = self.times;\n\t\tlet i = t.detectIndex { :each | each >= startTime };\n\t\tlet j = t.detectIndexStartingAt( { :each | each >= endTime }, i);\n\t\tTimeSeries(\n\t\t\tt.copyFromTo(i, j),\n\t\t\tself.values.copyFromTo(i, j)\n\t\t)\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar3 = _assertIsOfSize_2(_transpose_1(_self), 2);
        let _t = _at_2(__SplVar3, 1);
        let _v = _at_2(__SplVar3, 2);
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
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\t(n = 2).if {\n\t\t\tlet [t, v] = self.transpose;\n\t\t\tTimeSeries(v, t)\n\t\t} {\n\t\t\tself.error('TimeSeries: not two-column matrix')\n\t\t}\n\t}",
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
  "{ :values :times |\n\t\tnewTimeSeries().initializeSlots(values, times)\n\t}",
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
            let __SplVar4 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _m = _at_2(__SplVar4, 1);
            let _n = _at_2(__SplVar4, 2);
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tlet [m, n] = self.shape;\n\t\t\t\t(n = 2).if {\n\t\t\t\t\t(m <= 2).if {\n\t\t\t\t\t\ttrue\n\t\t\t\t\t} {\n\t\t\t\t\t\tlet z = self[2][1] - self[1][1];\n\t\t\t\t\t\t(3 .. m).allSatisfy { :i |\n\t\t\t\t\t\t\tself[i][1] - self[i - 1][1] = z\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tself.error('isRegularlySampled: not two column matrix')\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.error('isRegularlySampled: not vector or two-column matrix')\n\t\t\t}\n\t\t}\n\t}",
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
            let __SplVar5 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _m = _at_2(__SplVar5, 1);
            let _n = _at_2(__SplVar5, 2);
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\t1\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tlet [m, n] = self.shape;\n\t\t\t\t(n = 2).if {\n\t\t\t\t\tself.minimumDifferenceBy(first:/1)\n\t\t\t\t} {\n\t\t\t\t\tself.error('minimumTimeIncrement: not two-column matrix')\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.error('minimumTimeIncrement: not vector or two-column matrix')\n\t\t\t}\n\t\t}\n\t}",
);
