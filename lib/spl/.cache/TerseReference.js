/*  Requires: DocumentationTest FileSystem Url  */

sl.addMethod(
  "String",
  "TerseReference",
  "terseReferenceSummary",
  ["directoryName"],
  function (_directoryName) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _directoryName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _totalTestCount = 0;
    let _totalPassCount = 0;
    let _fileNameList = _readDirectoryFileNames_1(_directoryName);
    let _helpFileNameList = _select_2(_sort_1(_fileNameList), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_endsWith_2(_each, ".help.sl"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
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
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _fileName = _at_2(_helpFileNameList, _index);
      let _helpFile = _HelpFile_2(_asFileUrl_1(_fileName), _text);
      /* Statements */
      return _ifTrue_2(
        _greaterThanSign_2(_size_1(_documentationTests_1(_helpFile)), 0),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let __genSym108 = _assertIsOfSize_2(
              _terseReferenceEntry_2(_helpFile, _options),
              2,
            ),
            _testCount = _at_2(__genSym108, 1),
            _passCount = _at_2(__genSym108, 2);
          /* Statements */
          _totalTestCount = _plusSign_2(_totalTestCount, _testCount);
          return _totalPassCount = _plusSign_2(_totalPassCount, _passCount);
        },
      );
    });
    return _postLine_1(
      _format_2("Terse Reference Summary: Pass % of %", [
        _totalPassCount,
        _totalTestCount,
      ]),
    );
  },
  "{ :directoryName :options |\n\t\tlet totalTestCount = 0;\n\t\tlet totalPassCount = 0;\n\t\tlet fileNameList = directoryName.readDirectoryFileNames;\n\t\tlet helpFileNameList = fileNameList.sort.select { :each |\n\t\t\teach.endsWith('.help.sl') & {\n\t\t\t\teach.pathBasename.matchesRegExp(options::pattern)\n\t\t\t}\n\t\t};\n\t\tlet textList = helpFileNameList.readTextFileList;\n\t\ttextList.withIndexDo { :text :index |\n\t\t\tlet fileName = helpFileNameList[index];\n\t\t\tlet helpFile = HelpFile(fileName.asFileUrl, text);\n\t\t\t(helpFile.documentationTests.size > 0).ifTrue {\n\t\t\t\tlet [testCount, passCount] = helpFile.terseReferenceEntry(options);\n\t\t\t\ttotalTestCount := totalTestCount + testCount;\n\t\t\t\ttotalPassCount := totalPassCount + passCount\n\t\t\t}\n\t\t};\n\t\t'Terse Reference Summary: Pass % of %'.format([totalPassCount, totalTestCount]).postLine\n\t}",
);
