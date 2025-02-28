sl.addType(
  false,
  "TimeSeries",
  "TimeSeries",
  ["Object", "Iterable", "Indexable", "Collection"],
  ["contents"],
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinusGreaterThanSign_2(_at_2(_each, 1), _at_2(_each, 2));
    });
  },
  "{ :self | collect(contents(self), { :each | ->(at(each, 1), at(each, 2)) }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "associationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(
        _hyphenMinusGreaterThanSign_2(_at_2(_each, 1), _at_2(_each, 2)),
      );
    });
  },
  "{ :self :aBlock:/1 | do(contents(self), { :each | aBlock(->(at(each, 1), at(each, 2))) }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "at",
  ["self", "time"],
  function (_self, _time) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _time";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_at_2(_each, 1), _time);
    }, function (_entry) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _entry";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_entry, 2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "at: invalid index");
    });
  },
  "{ :self :time | detectIfFoundIfNone(contents(self), { :each | =(at(each, 1), time) }, { :entry | at(entry, 2) }, { error(self,'at: invalid index') }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "atPut",
  ["self", "time", "item"],
  function (_self, _time, _item) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _time, _item";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _data = _contents_1(_self);
      /* Statements */
      _toDo_3(1, _size_1(_data), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _lessThanSign_2(_time, _at_2(_at_2(_data, _i), 1)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
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
  "{ :self :time :item | valueWithReturn({ :return:/1 | let data = contents(self); toDo(1, size(data), { :i | ifTrue((<(time, at(at(data, i), 1))), { insertAt(data,i, [time, item]); return(item) }); ifTrue((=(time, at(at(data, i), 1))), { atPut(at(data, i), 2, item); return(item) }) }); addLast(data,[time, item]); item }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "discretePlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretePlot_1(_contents_1(_self));
  },
  "{ :self | discretePlot(contents(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_at_2(_each, 2));
    });
  },
  "{ :self :aBlock:/1 | do(contents(self), { :each | aBlock(at(each, 2)) }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "endTime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_last_1(_contents_1(_self)), 1);
  },
  "{ :self | at(last(contents(self)), 1) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_contents_1(_self), _first_1);
  },
  "{ :self | collect(contents(self),first:/1) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "isRegularlySampled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _data = _contents_1(_self);
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_size_1(_data), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
  "{ :self | let data = contents(self); if((<=(size(data), 2)), { true }, { let z = -(at(at(data, 2), 1), at(at(data, 1), 1)); allSatisfy(upOrDownTo(3, size(data)), { :i | =(-(at(at(data, i), 1), at(at(data, -(i, 1)), 1)), z) }) }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "keys",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_self);
  },
  "{ :self | indices(self) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "keysDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_at_2(_each, 1));
    });
  },
  "{ :self :aBlock:/1 | do(contents(self), { :each | aBlock(at(each, 1)) }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_at_2(_each, 1), _at_2(_each, 2));
    });
  },
  "{ :self :aBlock:/2 | do(contents(self), { :each | aBlock(at(each, 1), at(each, 2)) }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "linePlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_contents_1(_self));
  },
  "{ :self | linePlot(contents(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "merge",
  ["self", "aTimeSeries", "resolveConflict:/2"],
  function (_self, _aTimeSeries, _resolveConflict_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aTimeSeries, _resolveConflict_2";
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
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _at_2(_at_2(_rhs, _i2), 2);
      /* Statements */
      _i2 = _plusSign_2(_i2, 1);
      _ifTrue_2(_lessThanSignEqualsSign_2(_i2, _k2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL44 = _assertIsOfSize_2(_each, 2);
      let _t1 = _at_2(__SPL44, 1);
      let _v1 = _at_2(__SPL44, 2);
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(_lessThanSign_2(_t2, _t1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_i2, _k2);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [_t2, _nextRhs_0()]);
      });
      return _if_3(_equalsSign_2(_t1, _t2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _resolveConflict_2(_v1, _nextRhs_0());
        /* Statements */
        return _add_2(_answer, [_t1, _r]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [_t1, _v1]);
      });
    });
    _toDo_3(_i2, _size_1(_rhs), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _at_2(_rhs, _i));
    });
    return _TimeSeries_1(_answer);
  },
  "{ :self :aTimeSeries :resolveConflict:/2 | let lhs = contents(self); let rhs = contents(aTimeSeries); let i2 = 1; let t2 = at(at(rhs, 1), 1); let k2 = size(rhs); let nextRhs = { let x = at(at(rhs, i2), 2); i2 := +(i2, 1); ifTrue((<=(i2, k2)), { t2 := at(at(rhs, i2), 1) }); x }; let answer = []; do(lhs, { :each | let __SPL44 = assertIsOfSize(each, 2); let t1 = at(__SPL44, 1); let v1 = at(__SPL44, 2); whileTrue({ &(<(t2, t1), { <=(i2, k2) }) }, { add(answer,[t2, nextRhs()]) }); if((=(t1, t2)), { let r = resolveConflict(v1, nextRhs()); add(answer,[t1, r]) }, { add(answer,[t1, v1]) }) }); toDo(i2, size(rhs), { :i | add(answer,at(rhs, i)) }); TimeSeries(answer) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "merge",
  ["self", "aTimeSeries"],
  function (_self, _aTimeSeries) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeSeries";
      throw new Error(errorMessage);
    } /* Statements */
    return _merge_3(_self, _aTimeSeries, function (_lhs, _rhs) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _lhs, _rhs";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "merge: conflict");
    });
  },
  "{ :self :aTimeSeries | merge(self, aTimeSeries, { :lhs :rhs | error(self,'merge: conflict') }) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "minimumTimeIncrement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _min_1(_differences_1(_keys_1(_self)));
  },
  "{ :self | min(differences(keys(self))) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self | size(contents(self)) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "startTime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_first_1(_contents_1(_self)), 1);
  },
  "{ :self | at(first(contents(self)), 1) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "values",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_contents_1(_self), _second_1);
  },
  "{ :self | collect(contents(self),second:/1) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "valuesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 | do(self,aBlock:/1) }",
);

sl.addMethodToExistingType(
  "TimeSeries",
  "TimeSeries",
  "window",
  ["self", "startTime", "endTime"],
  function (_self, _startTime, _endTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startTime, _endTime";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeSeries_1(_select_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _greaterThanSignEqualsSign_2(_at_2(_each, 1), _startTime),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_at_2(_each, 1), _endTime);
        },
      );
    }));
  },
  "{ :self :startTime :endTime | TimeSeries(select(contents(self), { :each | &(>=(at(each, 1), startTime), { <=(at(each, 1), endTime) }) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TimeSeries",
  "TimeSeries",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTimeSeries_0(), _self);
  },
  "{ :self | initializeSlots(newTimeSeries(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TimeSeries",
  "asTimeSeries",
  ["values", "times"],
  function (_values, _times) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _values, _times";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeSeries_1(_transposed_1([_times, _values]));
  },
  "{ :values :times | TimeSeries(transposed([times, values])) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "TimeSeries",
  "asTimeSeries",
  ["values", "times"],
  function (_values, _times) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _values, _times";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeSeries_1(_transposed_1([_times, _values]));
  },
  "{ :values :times | TimeSeries(transposed([times, values])) }",
);
