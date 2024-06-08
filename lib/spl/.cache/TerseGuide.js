/* {- Requires: Url -} */

sl.addMethod(
  "String",
  "TerseGuide",
  "terseGuideSummary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _terseGuideSummary_2(
      _self,
      Object.fromEntries([["verbose", false]]),
    );
  },
  "{ :self |\n\t\tself.terseGuideSummary(verbose: false)\n\t}",
);

sl.addMethod(
  "String",
  "TerseGuide",
  "terseGuideSummary",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _totalTestCount = 0;
    let _totalPassCount = 0;
    let _areas = _paragraphs_1(_self);
    /* Statements */
    _postLine_1(
      _plusSignPlusSign_2("Terse Guide Summary: Areas = ", _size_1(_areas)),
    );
    _do_2(_areas, function (_area) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _area";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _entries = _reject_2(_lines_1(_area), function (_line) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _line";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _verticalLine_2(_isEmpty_1(_line), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_line, "```");
        });
      });
      let _testCount = _hyphenMinus_2(_size_1(_entries), 1);
      let _failCount = 0;
      let _passCount = 0;
      /* Statements */
      _postLine_1(_at_2(_entries, 1));
      _collect_2(_to_2(2, _plusSign_2(_testCount, 1)), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _test = _at_2(_entries, _index);
        /* Statements */
        _ifTrue_2(_atIfAbsent_3(_options, "verbose", false), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _postLine_1(_test);
        });
        return _if_3(
          _equalsSign_2(_evaluate_2(_system, _test), true),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _passCount = _plusSign_2(_passCount, 1);
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _failCount = _plusSign_2(_failCount, 1);
            return _postLine_1(_plusSignPlusSign_2("	Error: ", _test));
          },
        );
      });
      _totalTestCount = _plusSign_2(_totalTestCount, _testCount);
      _totalPassCount = _plusSign_2(_totalPassCount, _passCount);
      return _postLine_1(
        _stringJoin_1([
          "	=> ",
          _passCount,
          " / ",
          _testCount,
          _if_3(_greaterThanSign_2(_failCount, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _plusSignPlusSign_2(
              _plusSignPlusSign_2(" (", _failCount),
              " Failures)",
            );
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return "";
          }),
        ]),
      );
    });
    return _postLine_1(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(
          _plusSignPlusSign_2("Total => ", _totalPassCount),
          " / ",
        ),
        _totalTestCount,
      ),
    );
  },
  "{ :self :options |\n\t\tlet totalTestCount = 0;\n\t\tlet totalPassCount = 0;\n\t\tlet areas = self.paragraphs;\n\t\t('Terse Guide Summary: Areas = ' ++ areas.size).postLine;\n\t\tareas.do { :area |\n\t\t\tlet entries = area.lines.reject { :line |\n\t\t\t\tline.isEmpty | {\n\t\t\t\t\tline = '```'\n\t\t\t\t}\n\t\t\t};\n\t\t\tlet testCount = entries.size - 1;\n\t\t\tlet failCount = 0;\n\t\t\tlet passCount = 0;\n\t\t\tentries[1].postLine;\n\t\t\t2.to(testCount + 1).collect { :index |\n\t\t\t\tlet test = entries[index];\n\t\t\t\toptions.atIfAbsent('verbose', false).ifTrue {\n\t\t\t\t\ttest.postLine\n\t\t\t\t};\n\t\t\t\t(system.evaluate(test) = true).if {\n\t\t\t\t\tpassCount := passCount + 1\n\t\t\t\t} {\n\t\t\t\t\tfailCount := failCount + 1;\n\t\t\t\t\t('\tError: ' ++ test).postLine\n\t\t\t\t}\n\t\t\t};\n\t\t\ttotalTestCount := totalTestCount + testCount;\n\t\t\ttotalPassCount := totalPassCount + passCount;\n\t\t\t[\n\t\t\t\t'\t=> ',\n\t\t\t\tpassCount, ' / ', testCount,\n\t\t\t\t(failCount > 0).if {\n\t\t\t\t\t' (' ++ failCount ++ ' Failures)'\n\t\t\t\t} {\n\t\t\t\t\t''\n\t\t\t\t}\n\t\t\t].stringJoin.postLine\n\t\t};\n\t\t('Total => ' ++ totalPassCount ++ ' / ' ++ totalTestCount).postLine\n\t}",
);

sl.extendTraitWithMethod(
  "Url",
  "TerseGuide",
  "terseGuideSummary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(_fetchText_1(_asUrl_1(_self)), function (_text) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _text";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _terseGuideSummary_1(_text);
    });
  },
  "{ :self |\n\t\tself.asUrl.fetchText.then { :text |\n\t\t\ttext.terseGuideSummary\n\t\t}\n\t}",
);
