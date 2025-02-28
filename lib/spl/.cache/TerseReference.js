/*  Requires: DocumentationTest FileSystem Url  */

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseReference",
  "terseProgramSummary",
  ["directoryName", "answerPredicate:/1"],
  function (_directoryName, _answerPredicate_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _directoryName, _answerPredicate_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _testCount = 0;
    let _passCount = 0;
    let _errorCount = 0;
    /* Statements */
    _do_2(_readDirectoryFileNames_1(_directoryName), function (_fileName) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _fileName";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _fileText = _readTextFile_1(_fileName);
      let _programTexts = _takeWhile_2(
        _paragraphs_1(_fileText),
        function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _not_1(_beginsWith_2(_each, "#"));
        },
      );
      /* Statements */
      _postLine_1([_fileName, _size_1(_programTexts)]);
      return _do_2(_programTexts, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _result = _evaluate_2(_system, _each);
        /* Statements */
        _testCount = _plusSign_2(_testCount, 1);
        return _if_3(_answerPredicate_1(_result), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _passCount = _plusSign_2(_passCount, 1);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _postLine_1(["FAIL", _each]);
        });
      });
    });
    return _postLine_1([_testCount, _passCount, _errorCount]);
  },
  "{ :directoryName :answerPredicate:/1 | let testCount = 0; let passCount = 0; let errorCount = 0; do(readDirectoryFileNames(directoryName), { :fileName | let fileText = readTextFile(fileName); let programTexts = takeWhile(paragraphs(fileText), { :each | not(beginsWith(each,'#')) }); postLine([fileName, size(programTexts)]); do(programTexts, { :each | let result = evaluate(system,each); testCount := +(testCount, 1); if(answerPredicate(result), { passCount := +(passCount, 1) }, { postLine(['FAIL', each]) }) }) }); postLine([testCount, passCount, errorCount]) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseReference",
  "terseReferenceSummaryDo",
  ["directoryName", "options", "testName", "aBlock:/2"],
  function (_directoryName, _options, _testName, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _directoryName, _options, _testName, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _totalTestCount = 0;
    let _totalPassCount = 0;
    let _totalErrorCount = 0;
    let _fileNameList = _readDirectoryFileNames_1(_directoryName);
    let _helpFileNameList = _select_2(_sort_1(_fileNameList), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_endsWith_2(_each, ".help.sl"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _matchesRegExp_2(
          _pathBasename_1(_each),
          _at_2(_options, "pattern"),
        );
      });
    });
    let _textList = _readTextFileList_1(_helpFileNameList);
    /* Statements */
    _withIndexDo_2(_textList, function (_text, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _text, _index";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _fileName = _at_2(_helpFileNameList, _index);
      let _helpFile = _HelpFile_2(_asFileUrl_1(_fileName), _text);
      let __SPL176 = _assertIsOfSize_2(
        _value_1(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(_at_2(_options, "verbose"), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _postLine_1(
              _asTuple_1([_originName_1(_helpFile), _name_1(_helpFile)]),
            );
          });
          return _aBlock_2(_helpFile, _options);
        }),
        3,
      );
      let _testCount = _at_2(__SPL176, 1);
      let _passCount = _at_2(__SPL176, 2);
      let _errorCount = _at_2(__SPL176, 3);
      /* Statements */
      _ifTrue_2(_at_2(_options, "verbose"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _postLine_1(
          _format_2("	Pass % of %", [_passCount, _testCount]),
        );
      });
      _totalTestCount = _plusSign_2(_totalTestCount, _testCount);
      _totalPassCount = _plusSign_2(_totalPassCount, _passCount);
      return _totalErrorCount = _plusSign_2(_totalErrorCount, _errorCount);
    });
    return _postLine_1(
      _format_2("Terse Reference Summary: %: Pass % of % (% Error)", [
        _testName,
        _totalPassCount,
        _totalTestCount,
        _totalErrorCount,
      ]),
    );
  },
  "{ :directoryName :options :testName :aBlock:/2 | let totalTestCount = 0; let totalPassCount = 0; let totalErrorCount = 0; let fileNameList = readDirectoryFileNames(directoryName); let helpFileNameList = select(sort(fileNameList), { :each | &(endsWith(each,'.help.sl'), { matchesRegExp(pathBasename(each),at(options, 'pattern')) }) }); let textList = readTextFileList(helpFileNameList); withIndexDo(textList, { :text :index | let fileName = at(helpFileNameList, index); let helpFile = HelpFile(asFileUrl(fileName), text); let __SPL176 = assertIsOfSize(value({ ifTrue(at(options, 'verbose'), { postLine(asTuple([originName(helpFile), name(helpFile)])) }); aBlock(helpFile, options) }), 3); let testCount = at(__SPL176, 1); let passCount = at(__SPL176, 2); let errorCount = at(__SPL176, 3); ifTrue(at(options, 'verbose'), { postLine(format('\tPass % of %',[passCount, testCount])) }); totalTestCount := +(totalTestCount, testCount); totalPassCount := +(totalPassCount, passCount); totalErrorCount := +(totalErrorCount, errorCount) }); postLine(format('Terse Reference Summary: %: Pass % of % (% Error)',[testName, totalPassCount, totalTestCount, totalErrorCount])) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseReference",
  "terseReferenceSummary",
  ["directoryName", "options"],
  function (_directoryName, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _directoryName, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _terseReferenceSummaryDo_4(
      _directoryName,
      _options,
      "Documentation Tests",
      _terseReferenceEntry_2,
    );
  },
  "{ :directoryName :options | terseReferenceSummaryDo(directoryName,options, 'Documentation Tests', terseReferenceEntry:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseReference",
  "terseSuperColliderGraphSummary",
  ["directoryName", "options"],
  function (_directoryName, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _directoryName, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _terseReferenceSummaryDo_4(
      _directoryName,
      _options,
      "SuperCollider Graph Tests",
      function (_helpFile, _options) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _helpFile, _options";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _testCount = 0;
        let _passCount = 0;
        let _scGraphCodeBlocks = _unspecifiedCodeBlocks_1(_helpFile);
        /* Statements */
        _ifFalse_2(_isEmpty_1(_scGraphCodeBlocks), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _verbose = _at_2(_options, "verbose");
          /* Statements */
          _ifTrue_2(_verbose, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _postLine_1(_name_1(_helpFile));
          });
          return _do_2(_scGraphCodeBlocks, function (_x) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _x";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _programText = _at_2(_x, "contents");
            let _result = _evaluate_2(_system, _programText);
            /* Statements */
            _testCount = _plusSign_2(_testCount, 1);
            return _if_3(_isOutputSignal_1(_result), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _passCount = _plusSign_2(_passCount, 1);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _postLine_1(
                _format_2("	FAIL: %s: %s", [_name_1(_helpFile), _programText]),
              );
            });
          });
        });
        return [_testCount, _passCount, 0];
      },
    );
  },
  "{ :directoryName :options | terseReferenceSummaryDo(directoryName, options, 'SuperCollider Graph Tests', { :helpFile :options | let testCount = 0; let passCount = 0; let scGraphCodeBlocks = unspecifiedCodeBlocks(helpFile); ifFalse(isEmpty(scGraphCodeBlocks), { let verbose = at(options, 'verbose'); ifTrue(verbose, { postLine(name(helpFile)) }); do(scGraphCodeBlocks, { :x | let programText = at(x, 'contents'); let result = evaluate(system,programText); testCount := +(testCount, 1); if(isOutputSignal(result), { passCount := +(passCount, 1) }, { postLine(format('\tFAIL: %s: %s',[name(helpFile), programText])) }) }) }); [testCount, passCount, 0] }) }",
);
