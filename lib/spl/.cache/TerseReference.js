/*  Requires: DocumentationTest FileSystem Url  */

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseReference",
  "terseProgramSummary",
  ["directoryName", "answerPredicate:/1"],
  sl.annotateFunction(function (_directoryName, _answerPredicate_1) {
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
    _do_2(
      _readDirectoryFileNames_1(_directoryName),
      sl.annotateFunction(function (_fileName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _fileName";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _fileText = _readTextFile_1(_fileName);
        let _programTexts = _takeWhile_2(
          _paragraphs_1(_fileText),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _not_1(_beginsWith_2(_each, "#"));
          }, ["each"]),
        );
        /* Statements */
        _postLine_1([_fileName, _size_1(_programTexts)]);
        return _do_2(
          _programTexts,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _result = _evaluate_2(_system, _each);
            /* Statements */
            _testCount = _plusSign_2(_testCount, 1);
            return _if_3(
              _answerPredicate_1(_result),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _passCount = _plusSign_2(_passCount, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _postLine_1(["FAIL", _each]);
              }, []),
            );
          }, ["each"]),
        );
      }, ["fileName"]),
    );
    return _postLine_1([_testCount, _passCount, _errorCount]);
  }, ["directoryName", "answerPredicate:/1"]),
  "{ :directoryName :answerPredicate:/1 |\n\t\tlet testCount = 0;\n\t\tlet passCount = 0;\n\t\tlet errorCount = 0;\n\t\tdirectoryName\n\t\t.readDirectoryFileNames\n\t\t.do { :fileName |\n\t\t\tlet fileText = fileName.readTextFile;\n\t\t\tlet programTexts = fileText.paragraphs.takeWhile { :each |\n\t\t\t\teach.beginsWith('#').not\n\t\t\t};\n\t\t\t[fileName, programTexts.size].postLine;\n\t\t\tprogramTexts.do { :each |\n\t\t\t\tlet result = system.evaluate(each);\n\t\t\t\ttestCount := testCount + 1;\n\t\t\t\tresult.answerPredicate.if {\n\t\t\t\t\tpassCount := passCount + 1\n\t\t\t\t} {\n\t\t\t\t\t['FAIL', each].postLine\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[testCount, passCount, errorCount].postLine\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseReference",
  "terseReferenceSummaryDo",
  ["directoryName", "options", "testName", "aBlock:/2"],
  sl.annotateFunction(
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
      let _helpFileNameList = _select_2(
        _sortBy_2(_fileNameList, _lessThanSignVerticalLine_2),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _endsWith_2(_each, ".help.sl"),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _matchesRegularExpression_2(
                _pathBasename_1(_each),
                _at_2(_options, "pattern"),
              );
            }, []),
          );
        }, ["each"]),
      );
      let _textList = _readTextFileList_1(_helpFileNameList);
      /* Statements */
      _withIndexDo_2(
        _textList,
        sl.annotateFunction(function (_text, _index) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _text, _index";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _fileName = _at_2(_helpFileNameList, _index);
          let _helpFile = _HelpFile_2(_asFileUrl_1(_fileName), _text);
          let __SplVar1 = _assertIsOfSize_2(
            _value_1(sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _ifTrue_2(
                _at_2(_options, "verbose"),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _postLine_1(
                    _Tuple_1([_originName_1(_helpFile), _name_1(_helpFile)]),
                  );
                }, []),
              );
              return _aBlock_2(_helpFile, _options);
            }, [])),
            3,
          );
          let _testCount = _at_2(__SplVar1, 1);
          let _passCount = _at_2(__SplVar1, 2);
          let _errorCount = _at_2(__SplVar1, 3);
          /* Statements */
          _ifTrue_2(
            _at_2(_options, "verbose"),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _postLine_1(
                _format_2("	Pass % of %", [_passCount, _testCount]),
              );
            }, []),
          );
          _totalTestCount = _plusSign_2(_totalTestCount, _testCount);
          _totalPassCount = _plusSign_2(_totalPassCount, _passCount);
          return _totalErrorCount = _plusSign_2(_totalErrorCount, _errorCount);
        }, ["text", "index"]),
      );
      return _postLine_1(
        _format_2("Terse Reference Summary: %: Pass % of % (% Error)", [
          _testName,
          _totalPassCount,
          _totalTestCount,
          _totalErrorCount,
        ]),
      );
    },
    ["directoryName", "options", "testName", "aBlock:/2"],
  ),
  "{ :directoryName :options :testName :aBlock:/2 |\n\t\tlet totalTestCount = 0;\n\t\tlet totalPassCount = 0;\n\t\tlet totalErrorCount = 0;\n\t\tlet fileNameList = directoryName.readDirectoryFileNames;\n\t\tlet helpFileNameList = fileNameList.sortBy(<|).select { :each |\n\t\t\teach.endsWith('.help.sl') & {\n\t\t\t\teach.pathBasename.matchesRegularExpression(options['pattern'])\n\t\t\t}\n\t\t};\n\t\tlet textList = helpFileNameList.readTextFileList;\n\t\ttextList.withIndexDo { :text :index |\n\t\t\tlet fileName = helpFileNameList[index];\n\t\t\tlet helpFile = HelpFile(fileName.asFileUrl, text);\n\t\t\tlet [testCount, passCount, errorCount] = {\n\t\t\t\toptions['verbose'].ifTrue {\n\t\t\t\t\t(helpFile.originName, helpFile.name).postLine\n\t\t\t\t};\n\t\t\t\taBlock(helpFile, options)\n\t\t\t}.value;\n\t\t\toptions['verbose'].ifTrue {\n\t\t\t\t'\tPass % of %'.format([passCount, testCount]).postLine\n\t\t\t};\n\t\t\ttotalTestCount := totalTestCount + testCount;\n\t\t\ttotalPassCount := totalPassCount + passCount;\n\t\t\ttotalErrorCount := totalErrorCount + errorCount\n\t\t};\n\t\t'Terse Reference Summary: %: Pass % of % (% Error)'.format(\n\t\t\t[\n\t\t\t\ttestName,\n\t\t\t\ttotalPassCount,\n\t\t\t\ttotalTestCount,\n\t\t\t\ttotalErrorCount\n\t\t\t]\n\t\t).postLine\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseReference",
  "terseReferenceSummary",
  ["directoryName", "options"],
  sl.annotateFunction(function (_directoryName, _options) {
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
  }, ["directoryName", "options"]),
  "{ :directoryName :options |\n\t\tdirectoryName.terseReferenceSummaryDo(options, 'Documentation Tests', terseReferenceEntry:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseReference",
  "terseSuperColliderGraphSummary",
  ["directoryName", "options"],
  sl.annotateFunction(function (_directoryName, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _directoryName, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _terseReferenceSummaryDo_4(
      _directoryName,
      _options,
      "SuperCollider Graph Tests",
      sl.annotateFunction(function (_helpFile, _options) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _helpFile, _options";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _testCount = 0;
        let _passCount = 0;
        let _scGraphCodeBlocks = _unspecifiedCodeBlocks_1(_helpFile);
        /* Statements */
        _ifFalse_2(
          _isEmpty_1(_scGraphCodeBlocks),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _verbose = _at_2(_options, "verbose");
            /* Statements */
            _ifTrue_2(
              _verbose,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _postLine_1(_name_1(_helpFile));
              }, []),
            );
            return _do_2(
              _scGraphCodeBlocks,
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _programText = _at_2(_x, "contents");
                let _result = _evaluate_2(_system, _programText);
                /* Statements */
                _testCount = _plusSign_2(_testCount, 1);
                return _if_3(
                  _isOutputSignal_1(_result),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _passCount = _plusSign_2(_passCount, 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _postLine_1(
                      _format_2("	FAIL: %s: %s", [
                        _name_1(_helpFile),
                        _programText,
                      ]),
                    );
                  }, []),
                );
              }, ["x"]),
            );
          }, []),
        );
        return [_testCount, _passCount, 0];
      }, ["helpFile", "options"]),
    );
  }, ["directoryName", "options"]),
  "{ :directoryName :options |\n\t\tdirectoryName.terseReferenceSummaryDo(options, 'SuperCollider Graph Tests') { :helpFile :options |\n\t\t\tlet testCount = 0;\n\t\t\tlet passCount = 0;\n\t\t\tlet scGraphCodeBlocks = helpFile.unspecifiedCodeBlocks;\n\t\t\tscGraphCodeBlocks.isEmpty.ifFalse {\n\t\t\t\tlet verbose = options['verbose'];\n\t\t\t\tverbose.ifTrue {\n\t\t\t\t\thelpFile.name.postLine\n\t\t\t\t};\n\t\t\t\tscGraphCodeBlocks.do { :x |\n\t\t\t\t\tlet programText = x['contents'];\n\t\t\t\t\tlet result = system.evaluate(programText);\n\t\t\t\t\ttestCount := testCount + 1;\n\t\t\t\t\tresult.isOutputSignal.if {\n\t\t\t\t\t\tpassCount := passCount + 1\n\t\t\t\t\t} {\n\t\t\t\t\t\t'\tFAIL: %s: %s'.format([helpFile.name, programText]).postLine\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\t[testCount, passCount, 0]\n\t\t}\n\t}",
);
