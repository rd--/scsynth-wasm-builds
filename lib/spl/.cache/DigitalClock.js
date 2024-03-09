/* {- Requires: SmallKansas -} */

sl.addType(
  false,
  "DigitalClock",
  "DigitalClock",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "DigitalClock",
);

sl.copyTraitToType(
  "SmallKansan",
  "DigitalClock",
);

sl.addMethod(
  "DigitalClock",
  "DigitalClock",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _getTime_0 = function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _localeTimeString_2(_asDate_1(_now_1(_system)), "en-US");
    };
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
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _setEditorText_2(_textEditor, _getTime_0());
      },
    );
    /* Statements */
    _editable_2(_textEditor, false);
    _setProperties_2(
      _style_1(_outerElement_1(_frame)),
      Object.fromEntries([["height", "1em"], ["width", "18em"]]),
    );
    return _frame;
  },
  "{ :self :smallKansas :event |\n\t\tlet getTime = {\n\t\t\tsystem.now.asDate.localeTimeString('en-US')\n\t\t};\n\t\tlet textEditor = smallKansas.TextEditor(\n\t\t\t'Digital Clock',\n\t\t\t'text/plain',\n\t\t\tgetTime()\n\t\t);\n\t\tlet frame = smallKansas.addFrameWithAnimator(textEditor, event, 1) {\n\t\t\ttextEditor.setEditorText(getTime())\n\t\t};\n\t\ttextEditor.editable := false;\n\t\tframe.outerElement.style.setProperties((height: '1em', width: '18em'));\n\t\tframe\n\t}",
);

sl.addMethod(
  "Void",
  "DigitalClock",
  "DigitalClock",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _newDigitalClock_0();
  },
  "{\n\t\tnewDigitalClock()\n\t}",
);
