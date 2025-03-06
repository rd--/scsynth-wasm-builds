/*  Requires: SmallKansas  */

sl.addType(
  false,
  "DigitalClock",
  "DigitalClock",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DigitalClock",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "DigitalClock",
);

sl.addMethodToExistingType(
  "DigitalClock",
  "DigitalClock",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _getTime_0 = sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _localeTimeString_2(_asDate_1(_now_1(_system)), "en-US");
    }, []);
    let _textEditor = _TextEditor_4(
      _smallKansas,
      "Digital Clock",
      "text/plain",
      _getTime_0(),
    );
    let _frame = _addFrameWithAnimator_5(
      _smallKansas,
      _textEditor,
      _event,
      1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _setEditorText_2(_textEditor, _getTime_0());
      }, []),
    );
    /* Statements */
    _editable_2(_textEditor, false);
    _setProperties_2(
      _style_1(_outerElement_1(_frame)),
      _Record_1([["height", "1em"], ["width", "18em"]]),
    );
    return _frame;
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event | let getTime = { localeTimeString(asDate(now(system)),'en-US') }; let textEditor = TextEditor(smallKansas,'Digital Clock', 'text/plain', getTime()); let frame = addFrameWithAnimator(smallKansas, textEditor, event, 1, { setEditorText(textEditor,getTime()) }); editable(textEditor, false); setProperties(style(outerElement(frame)),Record([['height', '1em'], ['width', '18em']])); frame }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "DigitalClock",
  "DigitalClock",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _newDigitalClock_0();
  }, []),
  "{ newDigitalClock() }",
);
