/*  Requires: SmallKansas TextEditor  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "HelpTextViewer",
  "helpTextFor",
  ["self", "topic", "event"],
  sl.annotateFunction(function (_self, _topic, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _topic, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "HelpIndex"),
      sl.annotateFunction(function (_helpIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _helpIndex";
          throw new Error(errorMessage);
        } /* Statements */
        return _then_2(
          _fetchFor_2(_helpIndex, _topic),
          sl.annotateFunction(function (_aString) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _aString";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifNotNil_2(
              _aString,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _setEditorText_2(
                  _subject_1(_helpTextViewer_2(_self, _event)),
                  _aString,
                );
              }, []),
            );
          }, ["aString"]),
        );
      }, ["helpIndex"]),
    );
  }, ["self", "topic", "event"]),
  "{ :self :topic :event | then(requestLibraryItem(system,'HelpIndex'), { :helpIndex | then(fetchFor(helpIndex,topic), { :aString | ifNotNil(aString, { setEditorText(subject(helpTextViewer(self,event)),aString) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "HelpTextViewer",
  "helpTextViewer",
  ["self", "event"],
  sl.annotateFunction(function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfNone_3(
      _frameSet_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_title_1(_each), "Help Text Viewer");
      }, ["each"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _editor = _TextEditor_4(
          _self,
          "Help Text Viewer",
          "text/markdown",
          "",
        );
        /* Statements */
        return _addFrame_3(_self, _editor, _event);
      }, []),
    );
  }, ["self", "event"]),
  "{ :self :event | detectIfNone(frameSet(self), { :each | =(title(each), 'Help Text Viewer') }, { let editor = TextEditor(self,'Help Text Viewer', 'text/markdown', ''); addFrame(self,editor, event) }) }",
);
