/* {- Requires: SmallKansas TextEditor -} */

sl.addMethod(
  "SmallKansas",
  "HelpViewer",
  "helpFor",
  ["self", "topic", "event"],
  function (_self, _topic, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _topic, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(_helpIndex_1(_self), function (_helpIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _helpIndex";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _then_2(_fetchFor_2(_helpIndex, _topic), function (_aString) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aString";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifNotNil_2(_aString, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _setEditorText_2(
            _subject_1(_helpViewer_2(_self, _event)),
            _aString,
          );
        });
      });
    });
  },
  "{ :self :topic :event |\n\t\tself.helpIndex.then { :helpIndex |\n\t\t\thelpIndex.fetchFor(topic).then { :aString |\n\t\t\t\taString.ifNotNil {\n\t\t\t\t\tself.helpViewer(event).subject.setEditorText(aString)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "HelpViewer",
  "helpViewer",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _detectIfNone_3(_frameSet_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_title_1(_each), "Help Viewer");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _editor = _TextEditor_4(_self, "Help Viewer", "text/markdown", "");
      /* Statements */
      return _addFrame_3(_self, _editor, _event);
    });
  },
  "{ :self :event |\n\t\tself.frameSet.detectIfNone { :each |\n\t\t\teach.title = 'Help Viewer'\n\t\t} {\n\t\t\tlet editor = self.TextEditor('Help Viewer', 'text/markdown', '');\n\t\t\tself.addFrame(editor, event)\n\t\t}\n\t}",
);
