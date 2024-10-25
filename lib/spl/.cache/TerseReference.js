/*  Requires: DocumentTest, Url  */

sl.addMethod(
  "String",
  "TerseReference",
  "terseReferenceSummary",
  ["directoryName"],
  function (_directoryName) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _directoryName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _terseReferenceSummary_2(
      _directoryName,
      Object.fromEntries([["verbose", false]]),
    );
  },
  "{ :directoryName |\n\t\tdirectoryName.terseReferenceSummary(verbose: false)\n\t}",
);

sl.addMethod(
  "String",
  "TerseReference",
  "terseReferenceSummary",
  ["directoryName", "options"],
  function (_directoryName, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _directoryName, _options";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _totalTestCount = 0;
    let _totalPassCount = 0;
    /* Statements */
    return _then_2(
      _readDirectoryFileNames_1(_directoryName),
      function (_fileNameList) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _fileNameList";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _helpFileNameList = _select_2(
          _sort_1(_fileNameList),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _endsWith_2(_each, ".help.sl");
          },
        );
        /* Statements */
        return _then_2(
          _readTextFileList_1(_helpFileNameList),
          function (_textList) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _textList";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _withIndexDo_2(_textList, function (_text, _index) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _text, _index";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Temporaries */
              let _fileName = _at_2(_helpFileNameList, _index);
              let _helpFile = _HelpFile_2(_asFileUrl_1(_fileName), _text);
              let __genSym67 = _assertIsOfSize_2(
                  _terseReferenceEntry_2(_helpFile, _options),
                  2,
                ),
                _testCount = _at_2(__genSym67, 1),
                _passCount = _at_2(__genSym67, 2);
              /* Statements */
              _ifTrue_2(
                _ampersand_2(_greaterThanSign_2(_testCount, 0), function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _tildeEqualsSign_2(_testCount, _passCount);
                }),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  _postLine_1(_fileName);
                  return _postLine_1(["Failure", _testCount, _passCount]);
                },
              );
              _totalTestCount = _plusSign_2(_totalTestCount, _testCount);
              return _totalPassCount = _plusSign_2(_totalPassCount, _passCount);
            });
            return _postLine_1([
              "Terse Reference Summary",
              _totalTestCount,
              _totalPassCount,
            ]);
          },
        );
      },
    );
  },
  "{ :directoryName :options |\n\t\tlet totalTestCount = 0;\n\t\tlet totalPassCount = 0;\n\t\tdirectoryName.readDirectoryFileNames.then { :fileNameList |\n\t\t\tlet helpFileNameList = fileNameList.sort.select { :each |\n\t\t\t\teach.endsWith('.help.sl')\n\t\t\t};\n\t\t\thelpFileNameList.readTextFileList.then { :textList |\n\t\t\t\ttextList.withIndexDo { :text :index |\n\t\t\t\t\tlet fileName = helpFileNameList[index];\n\t\t\t\t\tlet helpFile = HelpFile(fileName.asFileUrl, text);\n\t\t\t\t\tlet [testCount, passCount] = helpFile.terseReferenceEntry(options);\n\t\t\t\t\t(\n\t\t\t\t\t\ttestCount > 0 & {\n\t\t\t\t\t\t\ttestCount ~= passCount\n\t\t\t\t\t\t}\n\t\t\t\t\t).ifTrue {\n\t\t\t\t\t\tfileName.postLine;\n\t\t\t\t\t\t['Failure', testCount, passCount].postLine\n\t\t\t\t\t};\n\t\t\t\t\ttotalTestCount := totalTestCount + testCount;\n\t\t\t\t\ttotalPassCount := totalPassCount + passCount\n\t\t\t\t};\n\t\t\t\t['Terse Reference Summary', totalTestCount, totalPassCount].postLine\n\t\t\t}\n\t\t}\n\t}",
);
