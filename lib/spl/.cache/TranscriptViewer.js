sl.addType(
  false,
  "TranscriptViewer",
  "TranscriptViewer",
  ["Object", "View", "SmallKansan"],
  ["textEditor", "entryCount"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TranscriptViewer",
);

sl.copyTraitMethodsToType(
  "View",
  "TranscriptViewer",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "TranscriptViewer",
);

sl.addMethodToExistingType(
  "TranscriptViewer",
  "TranscriptViewer",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _equalsSign_2(_textEditor_1(_self), null);
    _entryCount_2(_self, 0);
    return _self;
  },
  "{ :self | =(textEditor(self), nil); entryCount(self, 0); self }",
);

sl.addMethodToExistingType(
  "TranscriptViewer",
  "TranscriptViewer",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    _textEditor_2(_self, _TextEditor_4(_smallKansas, "", "text/plain", ""));
    return _addFrameWithAnimator_5(_smallKansas, _self, _event, 1, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _update_1(_self);
    });
  },
  "{ :self :smallKansas :event | textEditor(self, TextEditor(smallKansas,'', 'text/plain', '')); addFrameWithAnimator(smallKansas, self, event, 1, { update(self) }) }",
);

sl.addMethodToExistingType(
  "TranscriptViewer",
  "TranscriptViewer",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _outerElement_1(_textEditor_1(_self));
  },
  "{ :self | outerElement(textEditor(self)) }",
);

sl.addMethodToExistingType(
  "TranscriptViewer",
  "TranscriptViewer",
  "update",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _tildeEqualsSign_2(
        _entryCount_1(_self),
        _size_1(_entries_1(_transcript_1(_system))),
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _entryCount_2(_self, _size_1(_entries_1(_transcript_1(_system))));
        return _setEditorText_2(
          _textEditor_1(_self),
          _String_1(_transcript_1(_system)),
        );
      },
    );
  },
  "{ :self | ifTrue((~=(entryCount(self), size(entries(transcript(system))))), { entryCount(self, size(entries(transcript(system)))); setEditorText(textEditor(self),String(transcript(system))) }) }",
);
