sl.addType(
  false,
  "ScSynthStatusMonitor",
  "ScSynthStatusMonitor",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ScSynthStatusMonitor",
);

sl.copyTraitToType(
  "SmallKansan",
  "ScSynthStatusMonitor",
);

sl.addMethod(
  "ScSynthStatusMonitor",
  "ScSynthStatusMonitor",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _textEditor = _TextEditor_4(
      _smallKansas,
      _title_1(_self),
      "text/html",
      "---",
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
          throw Error(errorMessage);
        }
        /* Statements */
        return _setEditorText_2(
          _textEditor,
          _if_3(_isConnected_1(_scSynth_1(_system)), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _outerHTML_1(
              _asHtmlTable_2(_status_1(_scSynth_1(_system)), _asString_1),
            );
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return "---";
          }),
        );
      },
    );
    /* Statements */
    _editable_2(_textEditor, false);
    _setProperties_2(
      _style_1(_outerElement_1(_frame)),
      Object.fromEntries([["height", "14em"], ["width", "18em"]]),
    );
    return _frame;
  },
  "{ :self :smallKansas :event |\n\t\tlet textEditor = smallKansas.TextEditor(self.title, 'text/html', '---');\n\t\tlet frame = smallKansas.addFrameWithAnimator(textEditor, event, 1) {\n\t\t\ttextEditor.setEditorText(\n\t\t\t\tsystem.scSynth.isConnected.if {\n\t\t\t\t\tsystem.scSynth.status.asHtmlTable(asString:/1).outerHTML\n\t\t\t\t} {\n\t\t\t\t\t'---'\n\t\t\t\t}\n\t\t\t)\n\t\t};\n\t\ttextEditor.editable := false;\n\t\tframe.outerElement.style.setProperties((height: '14em', width: '18em'));\n\t\tframe\n\t}",
);

sl.addMethod(
  "ScSynthStatusMonitor",
  "ScSynthStatusMonitor",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return "ScSynth Status Monitor";
  },
  "{ :self |\n\t\t'ScSynth Status Monitor'\n\t}",
);
