sl.addType(
  false,
  "TranscriptViewer",
  "TranscriptViewer",
  ["Object", "View", "SmallKansan"],
  ["textEditor", "entryCount"],
);

sl.copyTraitToType(
  "Object",
  "TranscriptViewer",
);

sl.copyTraitToType(
  "View",
  "TranscriptViewer",
);

sl.copyTraitToType(
  "SmallKansan",
  "TranscriptViewer",
);

sl.addMethod(
  "TranscriptViewer",
  "TranscriptViewer",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _equalsSign_2(_textEditor_1(_self), null);
    _entryCount_2(_self, 0);
    return _self;
  },
  "{ :self |\n\t\tself.textEditor = nil;\n\t\tself.entryCount := 0;\n\t\tself\n\t}",
);

sl.addMethod(
  "TranscriptViewer",
  "TranscriptViewer",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _smallKansas, _event"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _textEditor_2(_self, _TextEditor_4(_smallKansas, "", "text/plain", ""));
    return _addFrameWithAnimator_5(_smallKansas, _self, _event, 1, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _update_1(_self);
    });
  },
  "{ :self :smallKansas :event |\n\t\tself.textEditor := smallKansas.TextEditor('', 'text/plain', '');\n\t\tsmallKansas.addFrameWithAnimator(self, event, 1) {\n\t\t\tself.update\n\t\t}\n\t}",
);

sl.addMethod(
  "TranscriptViewer",
  "TranscriptViewer",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _outerElement_1(_textEditor_1(_self));
  },
  "{ :self |\n\t\tself.textEditor.outerElement\n\t}",
);

sl.addMethod(
  "TranscriptViewer",
  "TranscriptViewer",
  "update",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifTrue_2(
      _tildeEqualsSign_2(
        _entryCount_1(_self),
        _size_1(_entries_1(_transcript_1(_system))),
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _entryCount_2(_self, _size_1(_entries_1(_transcript_1(_system))));
        return _setEditorText_2(
          _textEditor_1(_self),
          _String_1(_transcript_1(_system)),
        );
      },
    );
  },
  "{ :self |\n\t\t(self.entryCount ~= system.transcript.entries.size).ifTrue {\n\t\t\tself.entryCount := system.transcript.entries.size;\n\t\t\tself.textEditor.setEditorText(system.transcript.String)\n\t\t}\n\t}",
);
