sl.extendTypeOrTraitWithMethod(
  "List",
  "FiniteAutomata",
  "iteratedFiniteAutomaton",
  ["ruleList", "initialState", "initialCondition", "iterationCount"],
  sl.annotateFunction(
    function (_ruleList, _initialState, _initialCondition, _iterationCount) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _ruleList, _initialState, _initialCondition, _iterationCount";
        throw new Error(errorMessage);
      } /* Statements */
      let _ruleDictionary = _Dictionary_1(_ruleList);
      let _answer = [_initialCondition];
      _timesRepeat_2(
        _iterationCount,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          let _state = _initialState;
          let _finalCondition = _collect_2(
            _initialCondition,
            sl.annotateFunction(function (_input) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _input";
                throw new Error(errorMessage);
              } /* Statements */
              let __SplVar1 = _assertIsOfSize_2(
                _at_2(_ruleDictionary, [_state, _input]),
                2,
              );
              let _nextState = _at_2(__SplVar1, 1);
              let _output = _at_2(__SplVar1, 2);
              _state = _nextState;
              return _output;
            }, ["input"]),
          );
          _add_2(_answer, _finalCondition);
          return _initialCondition = _finalCondition;
        }, []),
      );
      return _answer;
    },
    ["ruleList", "initialState", "initialCondition", "iterationCount"],
  ),
  "{ :ruleList :initialState :initialCondition :iterationCount |\n\t\tlet ruleDictionary = Dictionary(ruleList);\n\t\tlet answer = [initialCondition];\n\t\titerationCount.timesRepeat {\n\t\t\tlet state = initialState;\n\t\t\tlet finalCondition = initialCondition.collect { :input |\n\t\t\t\tlet [nextState, output] = ruleDictionary.at([state, input]);\n\t\t\t\tstate := nextState;\n\t\t\t\toutput\n\t\t\t};\n\t\t\tanswer.add(finalCondition);\n\t\t\tinitialCondition := finalCondition\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FiniteAutomata",
  "turingMachineFromNumber",
  ["n", "s", "k"],
  sl.annotateFunction(function (_n, _s, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _s, _k";
      throw new Error(errorMessage);
    } /* Statements */
    let _p = _partition_2(
      _integerDigits_3(
        _n,
        _asterisk_2(_asterisk_2(2, _s), _k),
        _asterisk_2(_s, _k),
      ),
      _k,
    );
    return _collect_2(
      _select_2(
        _deepIndices_1(_p),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_size_1(_i), 2);
        }, ["i"]),
      ),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        let _e = _atPath_2(_p, _i);
        let _a = _plusSign_2(_asterisk_2([1, -1], _i), [0, _k]);
        let _b = _plusSign_2(
          _asterisk_2(
            [1, 1, 2],
            _mod_2(_quotient_2(_e, [_asterisk_2(2, _k), 2, 1]), [_s, _k, 2]),
          ),
          [1, 0, -1],
        );
        return _hyphenMinusGreaterThanSign_2(_a, _b);
      }, ["i"]),
    );
  }, ["n", "s", "k"]),
  "{ :n :s :k |\n\t\tlet p = n.integerDigits(2 * s * k, s * k).partition(k);\n\t\tp.deepIndices.select { :i |\n\t\t\ti.size = 2\n\t\t}.collect { :i |\n\t\t\tlet e = p.atPath(i);\n\t\t\tlet a = [1, -1] * i + [0, k];\n\t\t\tlet b = [1, 1, 2] * e.quotient([2 * k, 2, 1]).mod([s, k, 2]) + [1, 0, -1];\n\t\t\ta -> b\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FiniteAutomata",
  "turingMachine",
  ["ruleList", "initialConfiguration", "stepCount"],
  sl.annotateFunction(function (_ruleList, _initialConfiguration, _stepCount) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _ruleList, _initialConfiguration, _stepCount";
      throw new Error(errorMessage);
    } /* Statements */
    let _initialState = _at_2(_initialConfiguration, 1);
    let __SplVar2 = _assertIsOfSize_2(_at_2(_initialConfiguration, 2), 2);
    let _initialCells = _at_2(__SplVar2, 1);
    let _cellBackground = _at_2(__SplVar2, 2);
    let _defaultCell_1 = sl.annotateFunction(function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _atWrap_2(_cellBackground, _plusSign_2(_i, 1));
    }, ["i"]);
    let _tape = _Map_1(
      _withIndexCollect_2(
        _initialCells,
        sl.annotateFunction(function (_c, _i) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _c, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinusGreaterThanSign_2(_hyphenMinus_2(_i, 1), _c);
        }, ["c", "i"]),
      ),
    );
    let _answer = [[[_initialState, 0], _copy_1(_tape)]];
    let _currentState = _initialState;
    let _tapeIndex = 0;
    let _minIndex = 0;
    let _maxIndex = 0;
    let _relativeIndex = 0;
    let _tapeToList_1 = sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(
        _rangeOrRelativeRange_3(_minIndex, _maxIndex, 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _atIfAbsent_3(
            _t,
            _i,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _defaultCell_1(_i);
            }, []),
          );
        }, ["i"]),
      );
    }, ["t"]);
    _ifFalse_2(
      _isAssociationList_1(_ruleList),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar3 = _assertIsOfSize_2(_ruleList, 3);
        let _n = _at_2(__SplVar3, 1);
        let _s = _at_2(__SplVar3, 2);
        let _k = _at_2(__SplVar3, 3);
        return _ruleList = _turingMachineFromNumber_3(_n, _s, _k);
      }, []),
    );
    _timesRepeat_2(
      _stepCount,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _cellValue = _atIfAbsent_3(
          _tape,
          _tapeIndex,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _defaultCell_1(_tapeIndex);
          }, []),
        );
        let __SplVar4 = _assertIsOfSize_2(
          _value_1(_detect_2(
            _ruleList,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_key_1(_each), [_currentState, _cellValue]);
            }, ["each"]),
          )),
          3,
        );
        let _nextState = _at_2(__SplVar4, 1);
        let _nextCellValue = _at_2(__SplVar4, 2);
        let _indexDifference = _at_2(__SplVar4, 3);
        _currentState = _nextState;
        _atPut_3(_tape, _tapeIndex, _nextCellValue);
        _tapeIndex = _plusSign_2(_tapeIndex, _indexDifference);
        _ifTrue_2(
          _lessThanSign_2(_tapeIndex, _minIndex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _minIndex = _tapeIndex;
          }, []),
        );
        _ifTrue_2(
          _greaterThanSign_2(_tapeIndex, _maxIndex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _maxIndex = _tapeIndex;
          }, []),
        );
        return _add_2(_answer, [[_currentState, _tapeIndex], _copy_1(_tape)]);
      }, []),
    );
    return _collect_2(
      _answer,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar5 = _assertIsOfSize_2(_at_2(_each, 1), 2);
        let _s = _at_2(__SplVar5, 1);
        let _dx = _at_2(__SplVar5, 2);
        return [
          [_s, _plusSign_2(_hyphenMinus_2(_dx, _minIndex), 1), _dx],
          _tapeToList_1(_at_2(_each, 2)),
        ];
      }, ["each"]),
    );
  }, ["ruleList", "initialConfiguration", "stepCount"]),
  "{ :ruleList :initialConfiguration :stepCount |\n\t\tlet initialState = initialConfiguration[1];\n\t\tlet [initialCells, cellBackground] = initialConfiguration[2];\n\t\tlet defaultCell = { :i |\n\t\t\tcellBackground.atWrap(i + 1)\n\t\t};\n\t\tlet tape = Map(\n\t\t\tinitialCells.withIndexCollect { :c :i |\n\t\t\t\t(i - 1) -> c\n\t\t\t}\n\t\t);\n\t\tlet answer = [\n\t\t\t[[initialState, 0], tape.copy]\n\t\t];\n\t\tlet currentState = initialState;\n\t\tlet tapeIndex = 0;\n\t\tlet minIndex = 0;\n\t\tlet maxIndex = 0;\n\t\tlet relativeIndex = 0;\n\t\tlet tapeToList = { :t |\n\t\t\tminIndex:maxIndex.collect { :i |\n\t\t\t\tt.atIfAbsent(i) { i.defaultCell }\n\t\t\t}\n\t\t};\n\t\truleList.isAssociationList.ifFalse {\n\t\t\tlet [n, s, k] = ruleList;\n\t\t\truleList := turingMachineFromNumber(n, s, k)\n\t\t};\n\t\tstepCount.timesRepeat {\n\t\t\tlet cellValue = tape.atIfAbsent(tapeIndex) { tapeIndex.defaultCell };\n\t\t\tlet [nextState, nextCellValue, indexDifference] = ruleList.detect { :each |\n\t\t\t\teach.key = [currentState, cellValue]\n\t\t\t}.value;\n\t\t\tcurrentState := nextState;\n\t\t\ttape[tapeIndex] := nextCellValue;\n\t\t\ttapeIndex := tapeIndex + indexDifference;\n\t\t\t(tapeIndex < minIndex).ifTrue {\n\t\t\t\tminIndex := tapeIndex\n\t\t\t};\n\t\t\t(tapeIndex > maxIndex).ifTrue {\n\t\t\t\tmaxIndex := tapeIndex\n\t\t\t};\n\t\t\tanswer.add([[currentState, tapeIndex], tape.copy])\n\t\t};\n\t\tanswer.collect { :each |\n\t\t\tlet [s, dx] = each[1];\n\t\t\t[[s, dx - minIndex + 1, dx], tapeToList(each[2])]\n\t\t}\n\t}",
);
