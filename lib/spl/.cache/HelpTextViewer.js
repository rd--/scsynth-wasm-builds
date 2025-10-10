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
  "{ :self :topic :event |\n\t\tsystem.requestLibraryItem(\n\t\t\t'HelpIndex'\n\t\t).then { :helpIndex |\n\t\t\thelpIndex.fetchFor(topic).then { :aString |\n\t\t\t\taString.ifNotNil {\n\t\t\t\t\tself.helpTextViewer(event).subject.setEditorText(aString)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :event |\n\t\tself.frameSet.detectIfNone { :each |\n\t\t\teach.title = 'Help Text Viewer'\n\t\t} {\n\t\t\tlet editor = self.TextEditor('Help Text Viewer', 'text/markdown', '');\n\t\t\tself.addFrame(editor, event)\n\t\t}\n\t}",
);
