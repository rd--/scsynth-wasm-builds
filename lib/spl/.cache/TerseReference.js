/* {- Requires: Url -} */

sl.addMethod(
  "String",
  "TerseReference",
  "parseTerseDocumentTestBlocks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _inBlock = false;
    let _block = [];
    /* Statements */
    _do_2(_lines_1(_self), function (_currentLine) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentLine";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(
        _ampersand_2(_beginsWith_2(_currentLine, ">>> "), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _not_1(_inBlock);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _inBlock = true;
        },
      );
      _ifTrue_2(
        _ampersand_2(
          _verticalLine_2(_isEmpty_1(_currentLine), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _beginsWith_2(_currentLine, "```");
          }),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _inBlock;
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
          _add_2(_answer, _copy_1(_block));
          _removeAll_1(_block);
          return _inBlock = false;
        },
      );
      return _ifTrue_2(_inBlock, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_block, _currentLine);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tlet inBlock = false;\n\t\tlet block = [];\n\t\tself.lines.do { :currentLine |\n\t\t\t(\n\t\t\t\tcurrentLine.beginsWith('>>> ') & {\n\t\t\t\t\tinBlock.not\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tinBlock := true\n\t\t\t};\n\t\t\t(\n\t\t\t\t(\n\t\t\t\t\tcurrentLine.isEmpty | {\n\t\t\t\t\t\tcurrentLine.beginsWith('```')\n\t\t\t\t\t}\n\t\t\t\t) & {\n\t\t\t\t\tinBlock\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tanswer.add(block.copy);\n\t\t\t\tblock.removeAll;\n\t\t\t\tinBlock := false\n\t\t\t};\n\t\t\tinBlock.ifTrue {\n\t\t\t\tblock.add(currentLine)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "String",
  "TerseReference",
  "terseReferenceEntry",
  ["self", "name", "options"],
  function (_self, _name, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _options";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _testCount = 0;
    let _passCount = 0;
    /* Statements */
    _ifTrue_2(_at_2(_options, "verbose"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _postLine_1(_name);
    });
    _do_2(_parseTerseDocumentTestBlocks_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _test = _formatTerseDocumentTestEntry_1(_each);
      /* Statements */
      _testCount = _plusSign_2(_testCount, 1);
      _ifTrue_2(_at_2(_options, "verbose"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _postLine_1(_plusSignPlusSign_2("	", _test));
      });
      return _if_3(_evaluate_2(_system, _test), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _passCount = _plusSign_2(_passCount, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _postLine_1(["Fail", _each]);
      });
    });
    return [_testCount, _passCount];
  },
  "{ :self :name :options |\n\t\tlet testCount = 0;\n\t\tlet passCount = 0;\n\t\toptions::verbose.ifTrue {\n\t\t\tname.postLine\n\t\t};\n\t\tself.parseTerseDocumentTestBlocks.do { :each |\n\t\t\tlet test = each.formatTerseDocumentTestEntry;\n\t\t\ttestCount := testCount + 1;\n\t\t\toptions::verbose.ifTrue {\n\t\t\t\t('\t' ++ test).postLine\n\t\t\t};\n\t\t\tsystem.evaluate(test).if {\n\t\t\t\tpassCount := passCount + 1\n\t\t\t} {\n\t\t\t\t['Fail', each].postLine\n\t\t\t}\n\t\t};\n\t\t[testCount, passCount]\n\t}",
);

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
        /* Statements */
        _sort_1(_fileNameList);
        return _then_2(
          _readTextFileList_1(_fileNameList),
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
              let __genSym1 = _assertIsOfSize_2(
                  _terseReferenceEntry_3(
                    _text,
                    _at_2(_fileNameList, _index),
                    _options,
                  ),
                  2,
                ),
                _testCount = _at_2(__genSym1, 1),
                _passCount = _at_2(__genSym1, 2);
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
                  _postLine_1(_at_2(_fileNameList, _index));
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
  "{ :directoryName :options |\n\t\tlet totalTestCount = 0;\n\t\tlet totalPassCount = 0;\n\t\tdirectoryName.readDirectoryFileNames.then { :fileNameList |\n\t\t\tfileNameList.sort;\n\t\t\tfileNameList.readTextFileList.then { :textList |\n\t\t\t\ttextList.withIndexDo { :text :index |\n\t\t\t\t\tlet [testCount, passCount] = text.terseReferenceEntry(fileNameList[index], options);\n\t\t\t\t\t(testCount > 0 & {\n\t\t\t\t\t\ttestCount ~= passCount\n\t\t\t\t\t}).ifTrue {\n\t\t\t\t\t\tfileNameList[index].postLine;\n\t\t\t\t\t\t['Failure', testCount, passCount].postLine\n\t\t\t\t\t};\n\t\t\t\t\ttotalTestCount := totalTestCount + testCount;\n\t\t\t\t\ttotalPassCount := totalPassCount + passCount\n\t\t\t\t};\n\t\t\t\t['Terse Reference Summary', totalTestCount, totalPassCount].postLine\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "TerseReference",
  "formatTerseDocumentTestEntry",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _lhs = _unwords_1(_collect_2(
      _select_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _beginsWith_2(_each, ">>> ");
      }),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _drop_2(_each, 4);
      },
    ));
    let _rhs = _unwords_1(_reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _beginsWith_2(_each, ">>> ");
    }));
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_plusSignPlusSign_2(_lhs, " ~ ("), _rhs),
      ")",
    );
  },
  "{ :self |\n\t\tlet lhs = self.select { :each |\n\t\t\teach.beginsWith('>>> ')\n\t\t}.collect { :each |\n\t\t\teach.drop(4)\n\t\t}.unwords;\n\t\tlet rhs = self.reject { :each |\n\t\t\teach.beginsWith('>>> ')\n\t\t}.unwords;\n\t\tlhs ++ ' ~ (' ++ rhs ++ ')'\n\t}",
);
