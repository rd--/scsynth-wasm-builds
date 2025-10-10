sl.addType(
  false,
  "SuperColliderSynthesiserStatusMonitor",
  "SuperColliderSynthesiserStatusMonitor",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SuperColliderSynthesiserStatusMonitor",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "SuperColliderSynthesiserStatusMonitor",
);

sl.addMethodToExistingType(
  "SuperColliderSynthesiserStatusMonitor",
  "SuperColliderSynthesiserStatusMonitor",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Temporaries */
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
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _setEditorText_2(
          _textEditor,
          _if_3(
            _isConnected_1(_scSynth_1(_system)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _asHtml_1(
                _Table_1(
                  _collect_2(
                    _associations_1(_status_1(_scSynth_1(_system))),
                    _asList_1,
                  ),
                ),
              );
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "---";
            }, []),
          ),
        );
      }, []),
    );
    /* Statements */
    _editable_2(_textEditor, false);
    _setProperties_2(
      _style_1(_outerElement_1(_frame)),
      _Record_1([["height", "14em"], ["width", "18em"]]),
    );
    return _frame;
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tlet textEditor = smallKansas.TextEditor(self.title, 'text/html', '---');\n\t\tlet frame = smallKansas.addFrameWithAnimator(textEditor, event, 1) {\n\t\t\ttextEditor.setEditorText(\n\t\t\t\tsystem.scSynth.isConnected.if {\n\t\t\t\t\tTable(system.scSynth.status.associations.collect(asList:/1)).asHtml\n\t\t\t\t} {\n\t\t\t\t\t'---'\n\t\t\t\t}\n\t\t\t)\n\t\t};\n\t\ttextEditor.editable := false;\n\t\tframe.outerElement.style.setProperties((height: '14em', width: '18em'));\n\t\tframe\n\t}",
);

sl.addMethodToExistingType(
  "SuperColliderSynthesiserStatusMonitor",
  "SuperColliderSynthesiserStatusMonitor",
  "title",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "SuperCollider Synthesiser Status Monitor";
  }, ["self"]),
  "{ :self |\n\t\t'SuperCollider Synthesiser Status Monitor'\n\t}",
);
