sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Mix",
  "SparseMatrixMixer",
  ["numOutputs", "inputList", "sparseMatrix"],
  sl.annotateFunction(function (_numOutputs, _inputList, _sparseMatrix) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _numOutputs, _inputList, _sparseMatrix";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _numberSign_2(_Dc_1(0), _numOutputs);
    /* Statements */
    _do_2(
      _sparseMatrix,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL459 = _assertIsOfSize_2(_each, 3);
        let _inputIndex = _at_2(__SPL459, 1);
        let _outputIndex = _at_2(__SPL459, 2);
        let _gain = _at_2(__SPL459, 3);
        /* Statements */
        return _atPut_3(
          _answer,
          _outputIndex,
          _asterisk_2(
            _plusSign_2(
              _at_2(_answer, _outputIndex),
              _at_2(_inputList, _inputIndex),
            ),
            _gain,
          ),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["numOutputs", "inputList", "sparseMatrix"]),
  "{ :numOutputs :inputList :sparseMatrix | let answer = #(Dc(0), numOutputs); do(sparseMatrix, { :each | let __SPL459 = assertIsOfSize(each, 3); let inputIndex = at(__SPL459, 1); let outputIndex = at(__SPL459, 2); let gain = at(__SPL459, 3); atPut(answer, outputIndex, *(+(at(answer, outputIndex), at(inputList, inputIndex)), gain)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Mix",
  "mixRuleSparseMatrixTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(
      _cache_1(_self),
      "mixRuleSparseMatrixTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_1([[
          "2×2→1×4",
          _transposed_1([_iota_1(4), _iota_1(4), _numberSign_2(1, 4)]),
        ], [
          "4×2→1×4",
          _transposed_1([
            _iota_1(8),
            [1, 2, 2, 3, 3, 4, 4, 1],
            _numberSign_2(1, 8),
          ]),
        ], [
          "4×2→1×8",
          _transposed_1([_iota_1(8), _iota_1(8), _numberSign_2(1, 8)]),
        ], [
          "8×2→1×8",
          _transposed_1([_iota_1(16), [
            1,
            2,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            8,
            8,
            1,
          ], _numberSign_2(1, 16)]),
        ], [
          "8×2→2×4",
          _transposed_1([
            _iota_1(16),
            _x_1(_plusSign_2)([0, 4], [1, 2, 2, 3, 3, 4, 4, 1]),
            _numberSign_2(1, 16),
          ]),
        ], [
          "16×2→2×8",
          _transposed_1([
            _iota_1(32),
            _x_1(_plusSign_2)([0, 8], [
              1,
              2,
              2,
              3,
              3,
              4,
              4,
              5,
              5,
              6,
              6,
              7,
              7,
              8,
              8,
              1,
            ]),
            _numberSign_2(1, 32),
          ]),
        ], [
          "16×2→4×4",
          _transposed_1([
            _iota_1(32),
            _x_1(_plusSign_2)([0, 4, 8, 12], [1, 2, 2, 3, 3, 4, 4, 1]),
            _numberSign_2(1, 32),
          ]),
        ], [
          "2×2→1×8",
          _transposed_1([_iota_1(4), [8, 2, 4, 6], _numberSign_2(1, 4)]),
        ], [
          "3×2→1×8",
          _transposed_1([_iota_1(6), [8, 2, 7, 3, 6, 4], _numberSign_2(1, 6)]),
        ], [
          "3×6→1×2+1×8+2×4",
          _transposed_1([_iota_1(18), _iota_1(18), _numberSign_2(1, 18)]),
        ], [
          "4×2→1×8",
          _transposed_1([_iota_1(8), _iota_1(8), _numberSign_2(1, 8)]),
        ], [
          "5×2→1×2+1×8",
          _transposed_1([_iota_1(10), _iota_1(10), _numberSign_2(1, 10)]),
        ], [
          "6×2→1×8+2×4",
          _transposed_1([_iota_1(12), _iota_1(12), _numberSign_2(1, 12)]),
        ], [
          "7×2→1×8+2×4",
          _transposed_1([_iota_1(14), _iota_1(14), _numberSign_2(1, 14)]),
        ], [
          "8×1→1×8",
          _transposed_1([_iota_1(8), _iota_1(8), _numberSign_2(1, 8)]),
        ], [
          "9×2→1×2+1×8+2×4",
          _transposed_1([_iota_1(18), _iota_1(18), _numberSign_2(1, 18)]),
        ], [
          "10×2→1×2+1×8+2×4",
          _transposed_1([
            _iota_1(20),
            _catenate_1([
              [1, 2],
              _x_1(_plusSign_2)([2, 10], _iota_1(8)),
              _plusSign_2(2, [1, 5]),
            ]),
            _numberSign_2(1, 20),
          ]),
        ], [
          "11×2→1×2+1×8+2×4",
          _transposed_1([
            _iota_1(22),
            _catenate_1([
              [1, 2],
              _x_1(_plusSign_2)([2, 10], _iota_1(8)),
              _plusSign_2(2, [1, 5, 3, 7]),
            ]),
            _numberSign_2(1, 22),
          ]),
        ], [
          "12×2→1×2+1×8+2×4",
          _transposed_1([
            _iota_1(24),
            _catenate_1([
              [1, 2],
              _x_1(_plusSign_2)([2, 10], _iota_1(8)),
              _plusSign_2(2, [1, 5, 3, 7, 4, 8]),
            ]),
            _numberSign_2(1, 24),
          ]),
        ], [
          "13×2→1×2+1×8+2×4",
          _transposed_1([
            _iota_1(26),
            _catenate_1([
              [1, 2],
              _x_1(_plusSign_2)([2, 10], _iota_1(8)),
              _plusSign_2(2, [1, 5, 3, 7, 4, 8, 2, 6]),
            ]),
            _numberSign_2(1, 26),
          ]),
        ], [
          "1×8+2×4→1×8+2×4",
          _transposed_1([_iota_1(16), _iota_1(16), _numberSign_2(1, 16)]),
        ], [
          "16×2→1×8+2×4",
          _transposed_1([
            _iota_1(32),
            _catenate_1([
              [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 1],
              _x_1(_plusSign_2)([8, 12], [1, 2, 2, 4, 4, 3, 3, 1]),
            ]),
            _numberSign_2(1, 32),
          ]),
        ]]);
      }, []),
    );
  }, ["self"]),
  "{ :self | atIfAbsentPut(cache(self), 'mixRuleSparseMatrixTable', { Record([['2×2→1×4', transposed([iota(4), iota(4), #(1, 4)])], ['4×2→1×4', transposed([iota(8), [1, 2, 2, 3, 3, 4, 4, 1], #(1, 8)])], ['4×2→1×8', transposed([iota(8), iota(8), #(1, 8)])], ['8×2→1×8', transposed([iota(16), [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 1], #(1, 16)])], ['8×2→2×4', transposed([iota(16), (x(+) . ([0, 4], [1, 2, 2, 3, 3, 4, 4, 1])), #(1, 16)])], ['16×2→2×8', transposed([iota(32), (x(+) . ([0, 8], [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 1])), #(1, 32)])], ['16×2→4×4', transposed([iota(32), (x(+) . ([0, 4, 8, 12], [1, 2, 2, 3, 3, 4, 4, 1])), #(1, 32)])], ['2×2→1×8', transposed([iota(4), [8, 2, 4, 6], #(1, 4)])], ['3×2→1×8', transposed([iota(6), [8, 2, 7, 3, 6, 4], #(1, 6)])], ['3×6→1×2+1×8+2×4', transposed([iota(18), iota(18), #(1, 18)])], ['4×2→1×8', transposed([iota(8), iota(8), #(1, 8)])], ['5×2→1×2+1×8', transposed([iota(10), iota(10), #(1, 10)])], ['6×2→1×8+2×4', transposed([iota(12), iota(12), #(1, 12)])], ['7×2→1×8+2×4', transposed([iota(14), iota(14), #(1, 14)])], ['8×1→1×8', transposed([iota(8), iota(8), #(1, 8)])], ['9×2→1×2+1×8+2×4', transposed([iota(18), iota(18), #(1, 18)])], ['10×2→1×2+1×8+2×4', transposed([iota(20), catenate([[1, 2], (x(+) . ([2, 10], iota(8))), +(2, [1, 5])]), #(1, 20)])], ['11×2→1×2+1×8+2×4', transposed([iota(22), catenate([[1, 2], (x(+) . ([2, 10], iota(8))), +(2, [1, 5, 3, 7])]), #(1, 22)])], ['12×2→1×2+1×8+2×4', transposed([iota(24), catenate([[1, 2], (x(+) . ([2, 10], iota(8))), +(2, [1, 5, 3, 7, 4, 8])]), #(1, 24)])], ['13×2→1×2+1×8+2×4', transposed([iota(26), catenate([[1, 2], (x(+) . ([2, 10], iota(8))), +(2, [1, 5, 3, 7, 4, 8, 2, 6])]), #(1, 26)])], ['1×8+2×4→1×8+2×4', transposed([iota(16), iota(16), #(1, 16)])], ['16×2→1×8+2×4', transposed([iota(32), catenate([[1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 1], (x(+) . ([8, 12], [1, 2, 2, 4, 4, 3, 3, 1]))]), #(1, 32)])]]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Mix",
  "Mix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ruleTable = _preference_3(_system, "ScSynth/Outputs/Mixer/RuleTable", [
      ["1×2", [1, 2]],
    ]);
    let _runList = _asRunArray_1(_collect_2(_self, _size_1));
    let _derivedPrefix = _plusSignPlusSign_2(
      _stringIntercalate_2(
        _runsAndValuesCollect_2(
          _runList,
          sl.annotateFunction(function (_run, _value) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _run, _value";
              throw new Error(errorMessage);
            } /* Statements */
            return _stringIntercalate_2([
              _asString_1(_run),
              _asString_1(_value),
            ], "×");
          }, ["run", "value"]),
        ),
        "+",
      ),
      "→",
    );
    /* Statements */
    return _mixByAvailableNamedRule_3(_self, _derivedPrefix, _ruleTable);
  }, ["self"]),
  "{ :self | let ruleTable = preference(system,'ScSynth/Outputs/Mixer/RuleTable', [['1×2', [1, 2]]]); let runList = asRunArray(collect(self,size:/1)); let derivedPrefix = ++(stringIntercalate(runsAndValuesCollect(runList, { :run :value | stringIntercalate([asString(run), asString(value)],'×') }),'+'), '→'); mixByAvailableNamedRule(self,derivedPrefix, ruleTable) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Mix",
  "mixByAvailableNamedRule",
  ["self", "prefix", "ruleTable"],
  sl.annotateFunction(function (_self, _prefix, _ruleTable) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _prefix, _ruleTable";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sparseMatrixTable = _mixRuleSparseMatrixTable_1(_system);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _ruleTable,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL460 = _assertIsOfSize_2(_each, 2);
          let _name = _at_2(__SPL460, 1);
          let _busesByIndex = _at_2(__SPL460, 2);
          /* Statements */
          return _atIfPresent_3(
            _sparseMatrixTable,
            _plusSignPlusSign_2(_prefix, _name),
            sl.annotateFunction(function (_entries) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _entries";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _inputs = _catenate_1(_self);
              let _reindexedEntries = _collect_2(
                _entries,
                sl.annotateFunction(function (_entry) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _entry";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return [
                    _first_1(_entry),
                    _at_2(_busesByIndex, _second_1(_entry)),
                    _third_1(_entry),
                  ];
                }, ["entry"]),
              );
              let _channelCount = _max_1(
                _collect_2(_reindexedEntries, _second_1),
              );
              /* Statements */
              return _return_1(
                _SparseMatrixMixer_3(
                  _channelCount,
                  _catenate_1(_self),
                  _plusSignPlusSign_2(
                    _reindexedEntries,
                    _lowFrequencySendsSparseMatrix_1(_self),
                  ),
                ),
              );
            }, ["entries"]),
          );
        }, ["each"]),
      );
      return _sum_1(_self);
    }, ["return:/1"]));
  }, ["self", "prefix", "ruleTable"]),
  "{ :self :prefix :ruleTable | let sparseMatrixTable = mixRuleSparseMatrixTable(system); valueWithReturn({ :return:/1 | do(ruleTable, { :each | let __SPL460 = assertIsOfSize(each, 2); let name = at(__SPL460, 1); let busesByIndex = at(__SPL460, 2); atIfPresent(sparseMatrixTable, ++(prefix, name), { :entries | let inputs = catenate(self); let reindexedEntries = collect(entries, { :entry | [first(entry), at(busesByIndex, second(entry)), third(entry)] }); let channelCount = max(collect(reindexedEntries,second:/1)); return(SparseMatrixMixer(channelCount, catenate(self), ++(reindexedEntries, lowFrequencySendsSparseMatrix(self)))) }) }); sum(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Mix",
  "lowFrequencySendsSparseMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lowFrequencySends = _preference_3(
      _system,
      "ScSynth/Outputs/Mixer/LowFrequency/Sends",
      [],
    );
    let _lowFrequencyGain = _preference_3(
      _system,
      "ScSynth/Outputs/Mixer/LowFrequency/Gain",
      1,
    );
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _sum_1(_shape_1(_self))),
      sl.annotateFunction(function (_input) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _input";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _input,
          _atWrap_2(_lowFrequencySends, _input),
          _lowFrequencyGain,
        ];
      }, ["input"]),
    );
  }, ["self"]),
  "{ :self | let lowFrequencySends = preference(system,'ScSynth/Outputs/Mixer/LowFrequency/Sends', []); let lowFrequencyGain = preference(system,'ScSynth/Outputs/Mixer/LowFrequency/Gain', 1); collect(upOrDownTo(1, sum(shape(self))), { :input | [input, atWrap(lowFrequencySends,input), lowFrequencyGain] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Mix",
  "Splay",
  ["inList", "spread"],
  sl.annotateFunction(function (_inList, _spread) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _spread";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _numberOfChannels = _mainOutputs_1(_scSynth_1(_system));
    let _orientation = _mainOrientation_1(_scSynth_1(_system));
    /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_size_1(_inList), _numberOfChannels),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _isSmallFloat_1(_spread),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_spread, 1);
            }, []),
          );
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _inList;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_numberOfChannels, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Splay2_5(_inList, _spread, 1, 0, true);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _SplayAz_8(
              _numberOfChannels,
              _inList,
              _spread,
              1,
              2,
              0,
              _orientation,
              true,
            );
          }, []),
        );
      }, []),
    );
  }, ["inList", "spread"]),
  "{ :inList :spread | let numberOfChannels = mainOutputs(scSynth(system)); let orientation = mainOrientation(scSynth(system)); if((&(=(size(inList), numberOfChannels), { &(isSmallFloat(spread), { =(spread, 1) }) })), { inList }, { if((=(numberOfChannels, 2)), { Splay2(inList, spread, 1, 0, true) }, { SplayAz(numberOfChannels, inList, spread, 1, 2, 0, orientation, true) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Mix",
  "Splay",
  ["inList"],
  sl.annotateFunction(function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _Splay_2(_inList, 1);
  }, ["inList"]),
  "{ :inList | Splay(inList, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Mix",
  "Sum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_size_1(_self), 4),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _prefix = _Sum4_4(
          _at_2(_self, 1),
          _at_2(_self, 2),
          _at_2(_self, 3),
          _at_2(_self, 4),
        );
        /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_self), 4),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _prefix;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _prefix,
              _Sum_1(_copyFromTo_3(_self, 5, _size_1(_self))),
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
        return _sum_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>=(size(self), 4)), { let prefix = Sum4(at(self, 1), at(self, 2), at(self, 3), at(self, 4)); if((=(size(self), 4)), { prefix }, { +(prefix, Sum(copyFromTo(self,5, size(self)))) }) }, { sum(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "Mix",
  "EqPan",
  ["input", "position"],
  sl.annotateFunction(function (_input, _position) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _position";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _numberOfChannels = _mainOutputs_1(_scSynth_1(_system));
    let _orientation = _mainOrientation_1(_scSynth_1(_system));
    /* Statements */
    return _if_3(
      _equalsSign_2(_numberOfChannels, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _EqPan2_2(_input, _position);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _PanAz_6(
          _numberOfChannels,
          _input,
          _position,
          1,
          2,
          _orientation,
        );
      }, []),
    );
  }, ["input", "position"]),
  "{ :input :position | let numberOfChannels = mainOutputs(scSynth(system)); let orientation = mainOrientation(scSynth(system)); if((=(numberOfChannels, 2)), { EqPan2(input, position) }, { PanAz(numberOfChannels, input, position, 1, 2, orientation) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Mix",
  "EqPan",
  ["input", "position"],
  sl.annotateFunction(function (_input, _position) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _position";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _numberOfChannels = _mainOutputs_1(_scSynth_1(_system));
    let _orientation = _mainOrientation_1(_scSynth_1(_system));
    /* Statements */
    return _if_3(
      _equalsSign_2(_numberOfChannels, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _EqPan2_2(_input, _position);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _PanAz_6(
          _numberOfChannels,
          _input,
          _position,
          1,
          2,
          _orientation,
        );
      }, []),
    );
  }, ["input", "position"]),
  "{ :input :position | let numberOfChannels = mainOutputs(scSynth(system)); let orientation = mainOrientation(scSynth(system)); if((=(numberOfChannels, 2)), { EqPan2(input, position) }, { PanAz(numberOfChannels, input, position, 1, 2, orientation) }) }",
);
