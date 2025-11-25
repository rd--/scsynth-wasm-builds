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
    let _answer = _List_2(_numOutputs, _Dc_1(0));
    /* Statements */
    _do_2(
      _sparseMatrix,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_each, 3);
        let _inputIndex = _at_2(__SplVar1, 1);
        let _outputIndex = _at_2(__SplVar1, 2);
        let _gain = _at_2(__SplVar1, 3);
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
  "{ :numOutputs :inputList :sparseMatrix |\n\t\tlet answer = List(numOutputs, Dc(0));\n\t\tsparseMatrix.do { :each |\n\t\t\tlet [inputIndex, outputIndex, gain] = each;\n\t\t\t/* ['SparseMatrixMixer', each].postLine; */\n\t\t\tanswer[outputIndex] := answer[outputIndex] + inputList[inputIndex] * gain\n\t\t};\n\t\tanswer\n\t}",
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
        } /* Temporaries */
        let _ones_1 = sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _List_2(_k, 1);
        }, ["k"]);
        /* Statements */
        return _Record_1([
          ["2×2→1×4", _transpose_1([_iota_1(4), _iota_1(4), _ones_1(4)])],
          [
            "4×2→1×4",
            _transpose_1([_iota_1(8), [1, 2, 2, 3, 3, 4, 4, 1], _ones_1(8)]),
          ],
          ["4×2→1×8", _transpose_1([_iota_1(8), _iota_1(8), _ones_1(8)])],
          [
            "8×2→1×8",
            _transpose_1([_iota_1(16), [
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
            ], _ones_1(16)]),
          ],
          [
            "8×2→2×4",
            _transpose_1([
              _iota_1(16),
              _x_1(_plusSign_2)([0, 4], [1, 2, 2, 3, 3, 4, 4, 1]),
              _ones_1(16),
            ]),
          ],
          [
            "16×2→2×8",
            _transpose_1([
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
              _ones_1(32),
            ]),
          ],
          [
            "16×2→4×4",
            _transpose_1([
              _iota_1(32),
              _x_1(_plusSign_2)([0, 4, 8, 12], [1, 2, 2, 3, 3, 4, 4, 1]),
              _ones_1(32),
            ]),
          ],
          ["2×2→1×8", _transpose_1([_iota_1(4), [8, 2, 4, 6], _ones_1(4)])],
          [
            "3×2→1×8",
            _transpose_1([_iota_1(6), [8, 2, 7, 3, 6, 4], _ones_1(6)]),
          ],
          [
            "3×6→1×2+1×8+2×4",
            _transpose_1([_iota_1(18), _iota_1(18), _ones_1(18)]),
          ],
          ["4×2→1×8", _transpose_1([_iota_1(8), _iota_1(8), _ones_1(8)])],
          [
            "5×2→1×2+1×8",
            _transpose_1([_iota_1(10), _iota_1(10), _ones_1(10)]),
          ],
          [
            "6×2→1×8+2×4",
            _transpose_1([_iota_1(12), _iota_1(12), _ones_1(12)]),
          ],
          [
            "7×2→1×8+2×4",
            _transpose_1([_iota_1(14), _iota_1(14), _ones_1(14)]),
          ],
          ["8×1→1×8", _transpose_1([_iota_1(8), _iota_1(8), _ones_1(8)])],
          [
            "9×2→1×2+1×8+2×4",
            _transpose_1([_iota_1(18), _iota_1(18), _ones_1(18)]),
          ],
          [
            "10×2→1×2+1×8+2×4",
            _transpose_1([
              _iota_1(20),
              _catenate_1([
                [1, 2],
                _x_1(_plusSign_2)([2, 10], _iota_1(8)),
                _plusSign_2(2, [1, 5]),
              ]),
              _ones_1(20),
            ]),
          ],
          [
            "11×2→1×2+1×8+2×4",
            _transpose_1([
              _iota_1(22),
              _catenate_1([
                [1, 2],
                _x_1(_plusSign_2)([2, 10], _iota_1(8)),
                _plusSign_2(2, [1, 5, 3, 7]),
              ]),
              _ones_1(22),
            ]),
          ],
          [
            "12×2→1×2+1×8+2×4",
            _transpose_1([
              _iota_1(24),
              _catenate_1([
                [1, 2],
                _x_1(_plusSign_2)([2, 10], _iota_1(8)),
                _plusSign_2(2, [1, 5, 3, 7, 4, 8]),
              ]),
              _ones_1(24),
            ]),
          ],
          [
            "13×2→1×2+1×8+2×4",
            _transpose_1([
              _iota_1(26),
              _catenate_1([
                [1, 2],
                _x_1(_plusSign_2)([2, 10], _iota_1(8)),
                _plusSign_2(2, [1, 5, 3, 7, 4, 8, 2, 6]),
              ]),
              _ones_1(26),
            ]),
          ],
          [
            "1×8+2×4→1×8+2×4",
            _transpose_1([_iota_1(16), _iota_1(16), _ones_1(16)]),
          ],
          [
            "16×2→1×8+2×4",
            _transpose_1([
              _iota_1(32),
              _catenate_1([
                [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 1],
                _x_1(_plusSign_2)([8, 12], [1, 2, 2, 4, 4, 3, 3, 1]),
              ]),
              _ones_1(32),
            ]),
          ],
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cache.atIfAbsentPut('mixRuleSparseMatrixTable') {\n\t\t\tlet ones = { :k | List(k, 1) };\n\t\t\t(\n\t\t\t\t'2×2→1×4': [\n\t\t\t\t\t4.iota,\n\t\t\t\t\t4.iota,\n\t\t\t\t\t4.ones\n\t\t\t\t].transpose,\n\t\t\t\t'4×2→1×4': [\n\t\t\t\t\t8.iota,\n\t\t\t\t\t[1 2 2 3 3 4 4 1],\n\t\t\t\t\t8.ones\n\t\t\t\t].transpose,\n\t\t\t\t'4×2→1×8': [\n\t\t\t\t\t8.iota,\n\t\t\t\t\t8.iota,\n\t\t\t\t\t8.ones\n\t\t\t\t].transpose,\n\t\t\t\t'8×2→1×8': [\n\t\t\t\t\t16.iota,\n\t\t\t\t\t[1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 1],\n\t\t\t\t\t16.ones\n\t\t\t\t].transpose,\n\t\t\t\t'8×2→2×4': [\n\t\t\t\t\t16.iota,\n\t\t\t\t\t[0 4] +.x [1 2 2 3 3 4 4 1],\n\t\t\t\t\t16.ones\n\t\t\t\t].transpose,\n\t\t\t\t'16×2→2×8': [\n\t\t\t\t\t32.iota,\n\t\t\t\t\t[0 8] +.x [1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 1],\n\t\t\t\t\t32.ones\n\t\t\t\t].transpose,\n\t\t\t\t'16×2→4×4': [\n\t\t\t\t\t32.iota,\n\t\t\t\t\t[0 4 8 12] +.x [1 2 2 3 3 4 4 1],\n\t\t\t\t\t32.ones\n\t\t\t\t].transpose,\n\t\t\t\t'2×2→1×8': [\n\t\t\t\t\t4.iota,\n\t\t\t\t\t[8 2 4 6],\n\t\t\t\t\t4.ones\n\t\t\t\t].transpose,\n\t\t\t\t'3×2→1×8': [\n\t\t\t\t\t6.iota,\n\t\t\t\t\t[8 2 7 3 6 4],\n\t\t\t\t\t6.ones\n\t\t\t\t].transpose,\n\t\t\t\t'3×6→1×2+1×8+2×4': [\n\t\t\t\t\t18.iota,\n\t\t\t\t\t18.iota,\n\t\t\t\t\t18.ones\n\t\t\t\t].transpose,\n\t\t\t\t'4×2→1×8': [\n\t\t\t\t\t8.iota,\n\t\t\t\t\t8.iota,\n\t\t\t\t\t8.ones\n\t\t\t\t].transpose,\n\t\t\t\t'5×2→1×2+1×8': [\n\t\t\t\t\t10.iota,\n\t\t\t\t\t10.iota,\n\t\t\t\t\t10.ones\n\t\t\t\t].transpose,\n\t\t\t\t'6×2→1×8+2×4': [\n\t\t\t\t\t12.iota,\n\t\t\t\t\t12.iota,\n\t\t\t\t\t12.ones\n\t\t\t\t].transpose,\n\t\t\t\t'7×2→1×8+2×4': [\n\t\t\t\t\t14.iota,\n\t\t\t\t\t14.iota,\n\t\t\t\t\t14.ones\n\t\t\t\t].transpose,\n\t\t\t\t'8×1→1×8': [\n\t\t\t\t\t8.iota,\n\t\t\t\t\t8.iota,\n\t\t\t\t\t8.ones\n\t\t\t\t].transpose,\n\t\t\t\t'9×2→1×2+1×8+2×4': [\n\t\t\t\t\t18.iota,\n\t\t\t\t\t18.iota,\n\t\t\t\t\t18.ones\n\t\t\t\t].transpose,\n\t\t\t\t'10×2→1×2+1×8+2×4': [\n\t\t\t\t\t20.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2],\n\t\t\t\t\t\t[2 10] +.x 8.iota,\n\t\t\t\t\t\t2 + [1 5]\n\t\t\t\t\t].catenate,\n\t\t\t\t\t20.ones\n\t\t\t\t].transpose,\n\t\t\t\t'11×2→1×2+1×8+2×4': [\n\t\t\t\t\t22.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2],\n\t\t\t\t\t\t[2 10] +.x 8.iota,\n\t\t\t\t\t\t2 + [1 5 3 7]\n\t\t\t\t\t].catenate,\n\t\t\t\t\t22.ones\n\t\t\t\t].transpose,\n\t\t\t\t'12×2→1×2+1×8+2×4': [\n\t\t\t\t\t24.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2],\n\t\t\t\t\t\t[2 10] +.x 8.iota,\n\t\t\t\t\t\t2 + [1 5 3 7 4 8]\n\t\t\t\t\t].catenate,\n\t\t\t\t\t24.ones\n\t\t\t\t].transpose,\n\t\t\t\t'13×2→1×2+1×8+2×4': [\n\t\t\t\t\t26.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2],\n\t\t\t\t\t\t[2 10] +.x 8.iota,\n\t\t\t\t\t\t2 + [1 5 3 7 4 8 2 6]\n\t\t\t\t\t].catenate,\n\t\t\t\t\t26.ones\n\t\t\t\t].transpose,\n\t\t\t\t'1×8+2×4→1×8+2×4': [\n\t\t\t\t\t16.iota,\n\t\t\t\t\t16.iota,\n\t\t\t\t\t16.ones\n\t\t\t\t].transpose,\n\t\t\t\t'16×2→1×8+2×4': [\n\t\t\t\t\t32.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 1],\n\t\t\t\t\t\t[8 12] +.x [1 2 2 4 4 3 3 1]\n\t\t\t\t\t].catenate,\n\t\t\t\t\t32.ones\n\t\t\t\t].transpose\n\t\t\t)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet ruleTable = system.preference('ScSynth/Outputs/Mixer/RuleTable', [['1×2', [1, 2]]]);\n\t\tlet runList = self.collect(size:/1).asRunArray;\n\t\tlet derivedPrefix = runList.runsAndValuesCollect { :run :value |\n\t\t\t[run.asString, value.asString].stringIntercalate('×')\n\t\t}.stringIntercalate('+') ++ '→';\n\t\t/* ['Mix', ruleTable, derivedPrefix].postLine; */\n\t\tself.mixByAvailableNamedRule(derivedPrefix, ruleTable)\n\t}",
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
          let __SplVar2 = _assertIsOfSize_2(_each, 2);
          let _name = _at_2(__SplVar2, 1);
          let _busesByIndex = _at_2(__SplVar2, 2);
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
  "{ :self :prefix :ruleTable |\n\t\tlet sparseMatrixTable = system.mixRuleSparseMatrixTable;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\truleTable.do { :each |\n\t\t\t\tlet [name, busesByIndex] = each;\n\t\t\t\t/* ['mixByAvailableNamedRule', each, prefix].postLine; */\n\t\t\t\tsparseMatrixTable.atIfPresent(prefix ++ name) { :entries |\n\t\t\t\t\tlet inputs = self.catenate;\n\t\t\t\t\tlet reindexedEntries = entries.collect { :entry |\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\tentry.first,\n\t\t\t\t\t\t\tbusesByIndex[entry.second],\n\t\t\t\t\t\t\tentry.third\n\t\t\t\t\t\t]\n\t\t\t\t\t};\n\t\t\t\t\tlet channelCount = reindexedEntries.collect(second:/1).max;\n\t\t\t\t\t/* ['mixByAvailableNamedRule', channelCount, self.shape, reindexedEntries].postLine; */\n\t\t\t\t\tSparseMatrixMixer(\n\t\t\t\t\t\tchannelCount,\n\t\t\t\t\t\tself.catenate,\n\t\t\t\t\t\treindexedEntries ++ self.lowFrequencySendsSparseMatrix\n\t\t\t\t\t).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.sum\n\t\t}\n\t}",
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
    return _toCollect_3(
      1,
      _sum_1(_shape_1(_self)),
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
  "{ :self |\n\t\tlet lowFrequencySends = system.preference('ScSynth/Outputs/Mixer/LowFrequency/Sends', []);\n\t\tlet lowFrequencyGain = system.preference('ScSynth/Outputs/Mixer/LowFrequency/Gain', 1);\n\t\t1.toCollect(self.shape.sum) { :input |\n\t\t\t[\n\t\t\t\tinput,\n\t\t\t\tlowFrequencySends.atWrap(input),\n\t\t\t\tlowFrequencyGain\n\t\t\t]\n\t\t}\n\t}",
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
  "{ :inList :spread |\n\t\tlet numberOfChannels = system.scSynth.mainOutputs;\n\t\tlet orientation = system.scSynth.mainOrientation;\n\t\t(\n\t\t\tinList.size = numberOfChannels & {\n\t\t\t\tspread.isSmallFloat & {\n\t\t\t\t\tspread = 1\n\t\t\t\t}\n\t\t\t}\n\t\t).if {\n\t\t\tinList\n\t\t} {\n\t\t\t(numberOfChannels = 2).if {\n\t\t\t\tSplay2(inList, spread, 1, 0, true)\n\t\t\t} {\n\t\t\t\tSplayAz(numberOfChannels, inList, spread, 1, 2, 0, orientation, true)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :inList |\n\t\tSplay(inList, 1)\n\t}",
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
  "{ :self |\n\t\t(self.size >= 4).if {\n\t\t\tlet prefix = Sum4(self[1], self[2], self[3], self[4]);\n\t\t\t(self.size = 4).if {\n\t\t\t\tprefix\n\t\t\t} {\n\t\t\t\tprefix + Sum(self.copyFromTo(5, self.size))\n\t\t\t}\n\t\t} {\n\t\t\tself.sum\n\t\t}\n\t}",
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
  "{ :input :position |\n\t\tlet numberOfChannels = system.scSynth.mainOutputs;\n\t\tlet orientation = system.scSynth.mainOrientation;\n\t\t(numberOfChannels = 2).if {\n\t\t\tEqPan2(input, position)\n\t\t} {\n\t\t\tPanAz(numberOfChannels, input, position, 1, 2, orientation)\n\t\t}\n\t}",
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
  "{ :input :position |\n\t\tlet numberOfChannels = system.scSynth.mainOutputs;\n\t\tlet orientation = system.scSynth.mainOrientation;\n\t\t(numberOfChannels = 2).if {\n\t\t\tEqPan2(input, position)\n\t\t} {\n\t\t\tPanAz(numberOfChannels, input, position, 1, 2, orientation)\n\t\t}\n\t}",
);
