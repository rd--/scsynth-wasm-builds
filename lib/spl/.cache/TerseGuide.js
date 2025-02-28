/*  Requires: Url  */

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseGuide",
  "terseGuideSummary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _terseGuideSummary_2(_self, _Record_1([["verbose", false]]));
  },
  "{ :self | terseGuideSummary(self, Record([['verbose', false]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TerseGuide",
  "terseGuideSummary",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
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
        throw new Error(errorMessage);
      } /* Temporaries */
      let _entries = _reject_2(_lines_1(_area), function (_line) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _line";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(_isEmpty_1(_line), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
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
          throw new Error(errorMessage);
        } /* Temporaries */
        let _test = _at_2(_entries, _index);
        /* Statements */
        _ifTrue_2(_atIfAbsent_3(_options, "verbose", false), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _postLine_1(_test);
        });
        return _if_3(
          _equalsSign_2(_evaluate_2(_system, _test), true),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _passCount = _plusSign_2(_passCount, 1);
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
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
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSignPlusSign_2(
              _plusSignPlusSign_2(" (", _failCount),
              " Failures)",
            );
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
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
  "{ :self :options | let totalTestCount = 0; let totalPassCount = 0; let areas = paragraphs(self); postLine((++('Terse Guide Summary: Areas = ', size(areas)))); do(areas, { :area | let entries = reject(lines(area), { :line | |(isEmpty(line), { =(line, '```') }) }); let testCount = -(size(entries), 1); let failCount = 0; let passCount = 0; postLine(at(entries, 1)); collect(to(2,+(testCount, 1)), { :index | let test = at(entries, index); ifTrue(atIfAbsent(options,'verbose', false), { postLine(test) }); if((=(evaluate(system,test), true)), { passCount := +(passCount, 1) }, { failCount := +(failCount, 1); postLine((++('\tError: ', test))) }) }); totalTestCount := +(totalTestCount, testCount); totalPassCount := +(totalPassCount, passCount); postLine(stringJoin(['\t=> ', passCount, ' / ', testCount, if((>(failCount, 0)), { ++(++(' (', failCount), ' Failures)') }, { '' })])) }); postLine((++(++(++('Total => ', totalPassCount), ' / '), totalTestCount))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Url",
  "TerseGuide",
  "terseGuideSummary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(_fetchText_1(_asUrl_1(_self)), function (_text) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _text";
        throw new Error(errorMessage);
      } /* Statements */
      return _terseGuideSummary_1(_text);
    });
  },
  "{ :self | then(fetchText(asUrl(self)), { :text | terseGuideSummary(text) }) }",
);
