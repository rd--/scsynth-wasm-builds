sl.addType(
  false,
  "TimeSeries",
  "TimeSeries",
  ["Object", "Iterable", "Indexable", "Collection"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "TimeSeries",
);

sl.copyTraitToType(
  "Iterable",
  "TimeSeries",
);

sl.copyTraitToType(
  "Indexable",
  "TimeSeries",
);

sl.copyTraitToType(
  "Collection",
  "TimeSeries",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "associations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinusGreaterThanSign_2(_at_2(_each, 1), _at_2(_each, 2));
    });
  },
  "{ :self |\n\t\tself.contents.collect { :each |\n\t\t\teach[1] -> each[2]\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "associationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(
        _hyphenMinusGreaterThanSign_2(_at_2(_each, 1), _at_2(_each, 2)),
      );
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.do { :each |\n\t\t\taBlock(each[1] -> each[2])\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "at",
  ["self", "time"],
  function (_self, _time) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _time";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_at_2(_each, 1), _time);
    }, function (_entry) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _entry";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_entry, 2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "at: invalid index");
    });
  },
  "{ :self :time |\n\t\tself.contents.detectIfFoundIfNone { :each |\n\t\t\teach[1] = time\n\t\t} { :entry |\n\t\t\tentry[2]\n\t\t} {\n\t\t\tself.error('at: invalid index')\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "atPut",
  ["self", "time", "item"],
  function (_self, _time, _item) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _time, _item";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _data = _contents_1(_self);
      /* Statements */
      _toDo_3(1, _size_1(_data), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _lessThanSign_2(_time, _at_2(_at_2(_data, _i), 1)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _insertAt_3(_data, _i, [_time, _item]);
            return _return_1(_item);
          },
        );
        return _ifTrue_2(
          _equalsSign_2(_time, _at_2(_at_2(_data, _i), 1)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_at_2(_data, _i), 2, _item);
            return _return_1(_item);
          },
        );
      });
      _addLast_2(_data, [_time, _item]);
      return _item;
    });
  },
  "{ :self :time :item |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet data = self.contents;\n\t\t\t1.toDo(data.size) { :i |\n\t\t\t\t(time < data[i][1]).ifTrue {\n\t\t\t\t\tdata.insertAt(i, [time, item]);\n\t\t\t\t\titem.return\n\t\t\t\t};\n\t\t\t\t(time = data[i][1]).ifTrue {\n\t\t\t\t\tdata[i][2] := item;\n\t\t\t\t\titem.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tdata.addLast([time, item]);\n\t\t\titem\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "discretePlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _discretePlot_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.discretePlot\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_at_2(_each, 2));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.do { :each |\n\t\t\taBlock(each[2])\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "endTime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_last_1(_contents_1(_self)), 1);
  },
  "{ :self |\n\t\tself.contents.last[1]\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_contents_1(_self), _first_1);
  },
  "{ :self |\n\t\tself.contents.collect(first:/1)\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "isRegularlySampled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _data = _contents_1(_self);
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_size_1(_data), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _z = _hyphenMinus_2(
        _at_2(_at_2(_data, 2), 1),
        _at_2(_at_2(_data, 1), 1),
      );
      /* Statements */
      return _allSatisfy_2(_upOrDownTo_2(3, _size_1(_data)), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _hyphenMinus_2(
            _at_2(_at_2(_data, _i), 1),
            _at_2(_at_2(_data, _hyphenMinus_2(_i, 1)), 1),
          ),
          _z,
        );
      });
    });
  },
  "{ :self |\n\t\tlet data = self.contents;\n\t\t(data.size <= 2).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tlet z = data[2][1] - data[1][1];\n\t\t\t(3 .. data.size).allSatisfy { :i |\n\t\t\t\tdata[i][1] - data[i - 1][1] = z\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "keys",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_self);
  },
  "{ :self |\n\t\tself.indices\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "keysDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_at_2(_each, 1));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.do { :each |\n\t\t\taBlock(each[1])\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_at_2(_each, 1), _at_2(_each, 2));
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.contents.do { :each |\n\t\t\taBlock(each[1], each[2])\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "linePlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.linePlot\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "merge",
  ["self", "aTimeSeries", "resolveConflict:/2"],
  function (_self, _aTimeSeries, _resolveConflict_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aTimeSeries, _resolveConflict_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lhs = _contents_1(_self);
    let _rhs = _contents_1(_aTimeSeries);
    let _i2 = 1;
    let _t2 = _at_2(_at_2(_rhs, 1), 1);
    let _k2 = _size_1(_rhs);
    let _nextRhs_0 = function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _at_2(_at_2(_rhs, _i2), 2);
      /* Statements */
      _i2 = _plusSign_2(_i2, 1);
      _ifTrue_2(_lessThanSignEqualsSign_2(_i2, _k2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _t2 = _at_2(_at_2(_rhs, _i2), 1);
      });
      return _x;
    };
    let _answer = [];
    /* Statements */
    _do_2(_lhs, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym20 = _assertIsOfSize_2(_each, 2),
        _t1 = _at_2(__genSym20, 1),
        _v1 = _at_2(__genSym20, 2);
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(_lessThanSign_2(_t2, _t1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_i2, _k2);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [_t2, _nextRhs_0()]);
      });
      return _if_3(_equalsSign_2(_t1, _t2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _resolveConflict_2(_v1, _nextRhs_0());
        /* Statements */
        return _add_2(_answer, [_t1, _r]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [_t1, _v1]);
      });
    });
    _toDo_3(_i2, _size_1(_rhs), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _at_2(_rhs, _i));
    });
    return _TimeSeries_1(_answer);
  },
  "{ :self :aTimeSeries :resolveConflict:/2 |\n\t\tlet lhs = self.contents;\n\t\tlet rhs = aTimeSeries.contents;\n\t\tlet i2 = 1;\n\t\tlet t2 = rhs[1][1];\n\t\tlet k2 = rhs.size;\n\t\tlet nextRhs = {\n\t\t\tlet x = rhs[i2][2];\n\t\t\ti2 := i2 + 1;\n\t\t\t(i2 <= k2).ifTrue {\n\t\t\t\tt2 := rhs[i2][1]\n\t\t\t};\n\t\t\tx\n\t\t};\n\t\tlet answer = [];\n\t\tlhs.do { :each |\n\t\t\tlet [t1, v1] = each;\n\t\t\t{\n\t\t\t\tt2 < t1 & {\n\t\t\t\t\ti2 <= k2\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tanswer.add([t2, nextRhs()])\n\t\t\t};\n\t\t\t(t1 = t2).if {\n\t\t\t\tlet r = resolveConflict(v1, nextRhs());\n\t\t\t\tanswer.add([t1, r])\n\t\t\t} {\n\t\t\t\tanswer.add([t1, v1])\n\t\t\t}\n\t\t};\n\t\ti2.toDo(rhs.size) { :i |\n\t\t\tanswer.add(rhs[i])\n\t\t};\n\t\tTimeSeries(answer)\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "merge",
  ["self", "aTimeSeries"],
  function (_self, _aTimeSeries) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeSeries";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _merge_3(_self, _aTimeSeries, function (_lhs, _rhs) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _lhs, _rhs";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "merge: conflict");
    });
  },
  "{ :self :aTimeSeries |\n\t\tself.merge(aTimeSeries) { :lhs :rhs |\n\t\t\tself.error('merge: conflict')\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "minimumTimeIncrement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _min_1(_differences_1(_keys_1(_self)));
  },
  "{ :self |\n\t\tself.keys.differences.min\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "startTime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_first_1(_contents_1(_self)), 1);
  },
  "{ :self |\n\t\tself.contents.first[1]\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "values",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_contents_1(_self), _second_1);
  },
  "{ :self |\n\t\tself.contents.collect(second:/1)\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "valuesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.do(aBlock:/1)\n\t}",
);

sl.addMethod(
  "TimeSeries",
  "TimeSeries",
  "window",
  ["self", "startTime", "endTime"],
  function (_self, _startTime, _endTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startTime, _endTime";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeSeries_1(_select_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _greaterThanSignEqualsSign_2(_at_2(_each, 1), _startTime),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_at_2(_each, 1), _endTime);
        },
      );
    }));
  },
  "{ :self :startTime :endTime |\n\t\tself.contents.select { :each |\n\t\t\teach[1] >= startTime & {\n\t\t\t\teach[1] <= endTime\n\t\t\t}\n\t\t}.TimeSeries\n\t}",
);

sl.addMethod(
  "List",
  "TimeSeries",
  "TimeSeries",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTimeSeries_0(), _self);
  },
  "{ :self |\n\t\tnewTimeSeries().initializeSlots(self)\n\t}",
);

sl.addMethod(
  "List",
  "TimeSeries",
  "asTimeSeries",
  ["values", "times"],
  function (_values, _times) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _values, _times";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeSeries_1(_transposed_1([_times, _values]));
  },
  "{ :values :times |\n\t\tTimeSeries([times, values].transposed)\n\t}",
);

sl.addMethod(
  "Range",
  "TimeSeries",
  "asTimeSeries",
  ["values", "times"],
  function (_values, _times) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _values, _times";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeSeries_1(_transposed_1([_times, _values]));
  },
  "{ :values :times |\n\t\tTimeSeries([times, values].transposed)\n\t}",
);
