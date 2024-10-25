sl.extendTraitWithMethod(
  "Integer",
  "Mix",
  "SparseMatrixMixer",
  ["numOutputs", "inputList", "sparseMatrix"],
  function (_numOutputs, _inputList, _sparseMatrix) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _numOutputs, _inputList, _sparseMatrix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _numberSign_2(_Dc_1(0), _numOutputs);
    /* Statements */
    _do_2(_sparseMatrix, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym126 = _assertIsOfSize_2(_each, 3),
        _inputIndex = _at_2(__genSym126, 1),
        _outputIndex = _at_2(__genSym126, 2),
        _gain = _at_2(__genSym126, 3);
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
    });
    return _answer;
  },
  "{ :numOutputs :inputList :sparseMatrix |\n\t\tlet answer = Dc(0) # numOutputs;\n\t\tsparseMatrix.do { :each |\n\t\t\tlet [inputIndex, outputIndex, gain] = each;\n\t\t\t/* ['SparseMatrixMixer', each].postLine; */\n\t\t\tanswer[outputIndex] := answer[outputIndex] + inputList[inputIndex] * gain\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Mix",
  "mixRuleSparseMatrixTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atIfAbsentPut_3(
      _cache_1(_self),
      "mixRuleSparseMatrixTable",
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return Object.fromEntries([[
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
            _concatenation_1([
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
            _concatenation_1([
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
            _concatenation_1([
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
            _concatenation_1([
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
            _concatenation_1([
              [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 1],
              _x_1(_plusSign_2)([8, 12], [1, 2, 2, 4, 4, 3, 3, 1]),
            ]),
            _numberSign_2(1, 32),
          ]),
        ]]);
      },
    );
  },
  "{ :self |\n\t\tself.cache.atIfAbsentPut('mixRuleSparseMatrixTable') {\n\t\t\t(\n\t\t\t\t'2×2→1×4': [\n\t\t\t\t\t4.iota,\n\t\t\t\t\t4.iota,\n\t\t\t\t\t1 # 4\n\t\t\t\t].transposed,\n\t\t\t\t'4×2→1×4': [\n\t\t\t\t\t8.iota,\n\t\t\t\t\t[1 2 2 3 3 4 4 1],\n\t\t\t\t\t1 # 8\n\t\t\t\t].transposed,\n\t\t\t\t'4×2→1×8': [\n\t\t\t\t\t8.iota,\n\t\t\t\t\t8.iota,\n\t\t\t\t\t1 # 8\n\t\t\t\t].transposed,\n\t\t\t\t'8×2→1×8': [\n\t\t\t\t\t16.iota,\n\t\t\t\t\t[1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 1],\n\t\t\t\t\t1 # 16\n\t\t\t\t].transposed,\n\t\t\t\t'8×2→2×4': [\n\t\t\t\t\t16.iota,\n\t\t\t\t\t[0 4] +.x [1 2 2 3 3 4 4 1],\n\t\t\t\t\t1 # 16\n\t\t\t\t].transposed,\n\t\t\t\t'16×2→2×8': [\n\t\t\t\t\t32.iota,\n\t\t\t\t\t[0 8] +.x [1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 1],\n\t\t\t\t\t1 # 32\n\t\t\t\t].transposed,\n\t\t\t\t'16×2→4×4': [\n\t\t\t\t\t32.iota,\n\t\t\t\t\t[0 4 8 12] +.x [1 2 2 3 3 4 4 1],\n\t\t\t\t\t1 # 32\n\t\t\t\t].transposed,\n\t\t\t\t'2×2→1×8': [\n\t\t\t\t\t4.iota,\n\t\t\t\t\t[8 2 4 6],\n\t\t\t\t\t1 # 4\n\t\t\t\t].transposed,\n\t\t\t\t'3×2→1×8': [\n\t\t\t\t\t6.iota,\n\t\t\t\t\t[8 2 7 3 6 4],\n\t\t\t\t\t1 # 6\n\t\t\t\t].transposed,\n\t\t\t\t'3×6→1×2+1×8+2×4': [\n\t\t\t\t\t18.iota,\n\t\t\t\t\t18.iota,\n\t\t\t\t\t1 # 18\n\t\t\t\t].transposed,\n\t\t\t\t'4×2→1×8': [\n\t\t\t\t\t8.iota,\n\t\t\t\t\t8.iota,\n\t\t\t\t\t1 # 8\n\t\t\t\t].transposed,\n\t\t\t\t'5×2→1×2+1×8': [\n\t\t\t\t\t10.iota,\n\t\t\t\t\t10.iota,\n\t\t\t\t\t1 # 10\n\t\t\t\t].transposed,\n\t\t\t\t'6×2→1×8+2×4': [\n\t\t\t\t\t12.iota,\n\t\t\t\t\t12.iota,\n\t\t\t\t\t1 # 12\n\t\t\t\t].transposed,\n\t\t\t\t'7×2→1×8+2×4': [\n\t\t\t\t\t14.iota,\n\t\t\t\t\t14.iota,\n\t\t\t\t\t1 # 14\n\t\t\t\t].transposed,\n\t\t\t\t'8×1→1×8': [\n\t\t\t\t\t8.iota,\n\t\t\t\t\t8.iota,\n\t\t\t\t\t1 # 8\n\t\t\t\t].transposed,\n\t\t\t\t'9×2→1×2+1×8+2×4': [\n\t\t\t\t\t18.iota,\n\t\t\t\t\t18.iota,\n\t\t\t\t\t1 # 18\n\t\t\t\t].transposed,\n\t\t\t\t'10×2→1×2+1×8+2×4': [\n\t\t\t\t\t20.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2],\n\t\t\t\t\t\t[2 10] +.x 8.iota,\n\t\t\t\t\t\t2 + [1 5]\n\t\t\t\t\t].concatenation,\n\t\t\t\t\t1 # 20\n\t\t\t\t].transposed,\n\t\t\t\t'11×2→1×2+1×8+2×4': [\n\t\t\t\t\t22.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2],\n\t\t\t\t\t\t[2 10] +.x 8.iota,\n\t\t\t\t\t\t2 + [1 5 3 7]\n\t\t\t\t\t].concatenation,\n\t\t\t\t\t1 # 22\n\t\t\t\t].transposed,\n\t\t\t\t'12×2→1×2+1×8+2×4': [\n\t\t\t\t\t24.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2],\n\t\t\t\t\t\t[2 10] +.x 8.iota,\n\t\t\t\t\t\t2 + [1 5 3 7 4 8]\n\t\t\t\t\t].concatenation,\n\t\t\t\t\t1 # 24\n\t\t\t\t].transposed,\n\t\t\t\t'13×2→1×2+1×8+2×4': [\n\t\t\t\t\t26.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2],\n\t\t\t\t\t\t[2 10] +.x 8.iota,\n\t\t\t\t\t\t2 + [1 5 3 7 4 8 2 6]\n\t\t\t\t\t].concatenation,\n\t\t\t\t\t1 # 26\n\t\t\t\t].transposed,\n\t\t\t\t'1×8+2×4→1×8+2×4': [\n\t\t\t\t\t16.iota,\n\t\t\t\t\t16.iota,\n\t\t\t\t\t1 # 16\n\t\t\t\t].transposed,\n\t\t\t\t'16×2→1×8+2×4': [\n\t\t\t\t\t32.iota,\n\t\t\t\t\t[\n\t\t\t\t\t\t[1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 1],\n\t\t\t\t\t\t[8 12] +.x [1 2 2 4 4 3 3 1]\n\t\t\t\t\t].concatenation,\n\t\t\t\t\t1 # 32\n\t\t\t\t].transposed\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Mix",
  "Mix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _ruleTable = _preference_3(_system, "ScSynth/Outputs/Mixer/RuleTable", [
      ["1×2", [1, 2]],
    ]);
    let _runList = _asRunArray_1(_collect_2(_self, _size_1));
    let _derivedPrefix = _plusSignPlusSign_2(
      _join_2(
        _runsAndValuesCollect_2(_runList, function (_run, _value) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _run, _value";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _join_2([_asString_1(_run), _asString_1(_value)], "×");
        }),
        "+",
      ),
      "→",
    );
    /* Statements */
    return _mixByAvailableNamedRule_3(_self, _derivedPrefix, _ruleTable);
  },
  "{ :self |\n\t\tlet ruleTable = system.preference('ScSynth/Outputs/Mixer/RuleTable', [['1×2', [1, 2]]]);\n\t\tlet runList = self.collect(size:/1).asRunArray;\n\t\tlet derivedPrefix = runList.runsAndValuesCollect { :run :value |\n\t\t\t[run.asString, value.asString].join('×')\n\t\t}.join('+') ++ '→';\n\t\t/* ['Mix', ruleTable, derivedPrefix].postLine; */\n\t\tself.mixByAvailableNamedRule(derivedPrefix, ruleTable)\n\t}",
);

sl.addMethod(
  "List",
  "Mix",
  "mixByAvailableNamedRule",
  ["self", "prefix", "ruleTable"],
  function (_self, _prefix, _ruleTable) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _prefix, _ruleTable";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _sparseMatrixTable = _mixRuleSparseMatrixTable_1(_system);
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_ruleTable, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let __genSym127 = _assertIsOfSize_2(_each, 2),
          _name = _at_2(__genSym127, 1),
          _busesByIndex = _at_2(__genSym127, 2);
        /* Statements */
        return _atIfPresent_3(
          _sparseMatrixTable,
          _plusSignPlusSign_2(_prefix, _name),
          function (_entries) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _entries";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _inputs = _concatenation_1(_self);
            let _reindexedEntries = _collect_2(_entries, function (_entry) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _entry";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return [
                _first_1(_entry),
                _at_2(_busesByIndex, _second_1(_entry)),
                _third_1(_entry),
              ];
            });
            let _channelCount = _max_1(
              _collect_2(_reindexedEntries, _second_1),
            );
            /* Statements */
            return _return_1(
              _SparseMatrixMixer_3(
                _channelCount,
                _concatenation_1(_self),
                _plusSignPlusSign_2(
                  _reindexedEntries,
                  _lowFrequencySendsSparseMatrix_1(_self),
                ),
              ),
            );
          },
        );
      });
      return _sum_1(_self);
    });
  },
  "{ :self :prefix :ruleTable |\n\t\tlet sparseMatrixTable = system.mixRuleSparseMatrixTable;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\truleTable.do { :each |\n\t\t\t\tlet [name, busesByIndex] = each;\n\t\t\t\t/* ['mixByAvailableNamedRule', each, prefix].postLine; */\n\t\t\t\tsparseMatrixTable.atIfPresent(prefix ++ name) { :entries |\n\t\t\t\t\tlet inputs = self.concatenation;\n\t\t\t\t\tlet reindexedEntries = entries.collect { :entry |\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\tentry.first,\n\t\t\t\t\t\t\tbusesByIndex[entry.second],\n\t\t\t\t\t\t\tentry.third\n\t\t\t\t\t\t]\n\t\t\t\t\t};\n\t\t\t\t\tlet channelCount = reindexedEntries.collect(second:/1).max;\n\t\t\t\t\t/* ['mixByAvailableNamedRule', channelCount, self.shape, reindexedEntries].postLine; */\n\t\t\t\t\tSparseMatrixMixer(\n\t\t\t\t\t\tchannelCount,\n\t\t\t\t\t\tself.concatenation,\n\t\t\t\t\t\treindexedEntries ++ self.lowFrequencySendsSparseMatrix\n\t\t\t\t\t).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.sum\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Mix",
  "lowFrequencySendsSparseMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
      function (_input) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _input";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [
          _input,
          _atWrap_2(_lowFrequencySends, _input),
          _lowFrequencyGain,
        ];
      },
    );
  },
  "{ :self |\n\t\tlet lowFrequencySends = system.preference('ScSynth/Outputs/Mixer/LowFrequency/Sends', []);\n\t\tlet lowFrequencyGain = system.preference('ScSynth/Outputs/Mixer/LowFrequency/Gain', 1);\n\t\t(1 .. self.shape.sum).collect { :input |\n\t\t\t[\n\t\t\t\tinput,\n\t\t\t\tlowFrequencySends.atWrap(input),\n\t\t\t\tlowFrequencyGain\n\t\t\t]\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Mix",
  "Splay",
  ["inList", "spread"],
  function (_inList, _spread) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _spread";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _numberOfChannels = _mainOutputs_1(_scSynth_1(_system));
    let _orientation = _mainOrientation_1(_scSynth_1(_system));
    /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_size_1(_inList), _numberOfChannels),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(_isSmallFloat_1(_spread), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(_spread, 1);
          });
        },
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _inList;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_numberOfChannels, 2), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _Splay2_5(_inList, _spread, 1, 0, true);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
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
        });
      },
    );
  },
  "{ :inList :spread |\n\t\tlet numberOfChannels = system.scSynth.mainOutputs;\n\t\tlet orientation = system.scSynth.mainOrientation;\n\t\t(\n\t\t\tinList.size = numberOfChannels & {\n\t\t\t\tspread.isSmallFloat & {\n\t\t\t\t\tspread = 1\n\t\t\t\t}\n\t\t\t}\n\t\t).if {\n\t\t\tinList\n\t\t} {\n\t\t\t(numberOfChannels = 2).if {\n\t\t\t\tSplay2(inList, spread, 1, 0, true)\n\t\t\t} {\n\t\t\t\tSplayAz(numberOfChannels, inList, spread, 1, 2, 0, orientation, true)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Mix",
  "Splay",
  ["inList"],
  function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Splay_2(_inList, 1);
  },
  "{ :inList |\n\t\tSplay(inList, 1)\n\t}",
);

sl.addMethod(
  "List",
  "Mix",
  "Sum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_size_1(_self), 4), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _prefix = _Sum4_4(
        _at_2(_self, 1),
        _at_2(_self, 2),
        _at_2(_self, 3),
        _at_2(_self, 4),
      );
      /* Statements */
      return _if_3(_equalsSign_2(_size_1(_self), 4), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _prefix;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(
          _prefix,
          _Sum_1(_copyFromTo_3(_self, 5, _size_1(_self))),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _sum_1(_self);
    });
  },
  "{ :self |\n\t\t(self.size >= 4).if {\n\t\t\tlet prefix = Sum4(self[1], self[2], self[3], self[4]);\n\t\t\t(self.size = 4).if {\n\t\t\t\tprefix\n\t\t\t} {\n\t\t\t\tprefix + Sum(self.copyFromTo(5, self.size))\n\t\t\t}\n\t\t} {\n\t\t\tself.sum\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "Mix",
  "EqPan",
  ["input", "position"],
  function (_input, _position) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _position";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _numberOfChannels = _mainOutputs_1(_scSynth_1(_system));
    let _orientation = _mainOrientation_1(_scSynth_1(_system));
    /* Statements */
    return _if_3(_equalsSign_2(_numberOfChannels, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _EqPan2_2(_input, _position);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _PanAz_6(_numberOfChannels, _input, _position, 1, 2, _orientation);
    });
  },
  "{ :input :position |\n\t\tlet numberOfChannels = system.scSynth.mainOutputs;\n\t\tlet orientation = system.scSynth.mainOrientation;\n\t\t(numberOfChannels = 2).if {\n\t\t\tEqPan2(input, position)\n\t\t} {\n\t\t\tPanAz(numberOfChannels, input, position, 1, 2, orientation)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Mix",
  "EqPan",
  ["input", "position"],
  function (_input, _position) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _position";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _numberOfChannels = _mainOutputs_1(_scSynth_1(_system));
    let _orientation = _mainOrientation_1(_scSynth_1(_system));
    /* Statements */
    return _if_3(_equalsSign_2(_numberOfChannels, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _EqPan2_2(_input, _position);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _PanAz_6(_numberOfChannels, _input, _position, 1, 2, _orientation);
    });
  },
  "{ :input :position |\n\t\tlet numberOfChannels = system.scSynth.mainOutputs;\n\t\tlet orientation = system.scSynth.mainOrientation;\n\t\t(numberOfChannels = 2).if {\n\t\t\tEqPan2(input, position)\n\t\t} {\n\t\t\tPanAz(numberOfChannels, input, position, 1, 2, orientation)\n\t\t}\n\t}",
);
