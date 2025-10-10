/*  Requires: SmallKansas Window  */

sl.addType(
  false,
  "TextEditor",
  "TextEditor",
  ["Object", "UserEventTarget", "View"],
  [
    "smallKansas",
    "editorPane",
    "editorText",
    "mimeType",
    "title",
    "clientMenuItems",
    "eventListeners",
  ],
);

sl.copyTraitMethodsToType(
  "Object",
  "TextEditor",
);

sl.copyTraitMethodsToType(
  "UserEventTarget",
  "TextEditor",
);

sl.copyTraitMethodsToType(
  "View",
  "TextEditor",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "addMenuItems",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _addAll_2(_clientMenuItems_1(_self), _aCollection);
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.clientMenuItems.addAll(aCollection)\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "createElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _editorPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "editorPane"]])),
    );
    _editorText_2(
      _self,
      _if_3(
        _equalsSign_2(_mimeType_1(_self), "text/plain"),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _createElement_1("pre");
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _createElement_1("div");
        }, []),
      ),
    );
    _setAttributes_2(
      _editorText_1(_self),
      _Record_1([["class", "editorText"], ["contentEditable", "true"], [
        "spellcheck",
        "false",
      ]]),
    );
    return _appendChild_2(_editorPane_1(_self), _editorText_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.editorPane := 'div'.createElement(\n\t\t\tclass: 'editorPane'\n\t\t);\n\t\tself.editorText := (self.mimeType = 'text/plain').if {\n\t\t\t'pre'.createElement\n\t\t} {\n\t\t\t'div'.createElement\n\t\t};\n\t\tself.editorText.setAttributes((\n\t\t\tclass: 'editorText',\n\t\t\tcontentEditable: 'true',\n\t\t\tspellcheck: 'false'\n\t\t));\n\t\tself.editorPane.appendChild(self.editorText)\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "currentText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _textContent_1(_editorText_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.editorText.textContent\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "editable",
  ["self", "aBoolean"],
  sl.annotateFunction(function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      throw new Error(errorMessage);
    } /* Statements */
    return _setAttribute_3(
      _editorText_1(_self),
      "contentEditable",
      _printString_1(_aBoolean),
    );
  }, ["self", "aBoolean"]),
  "{ :self :aBoolean |\n\t\tself.editorText.setAttribute('contentEditable', aBoolean.printString)\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "initialize",
  ["self", "smallKansas", "title", "mimeType", "contents"],
  sl.annotateFunction(
    function (_self, _smallKansas, _title, _mimeType, _contents) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _smallKansas, _title, _mimeType, _contents";
        throw new Error(errorMessage);
      } /* Statements */
      _smallKansas_2(_self, _smallKansas);
      _title_2(_self, _title);
      _mimeType_2(_self, _mimeType);
      _clientMenuItems_2(_self, []);
      _createElements_1(_self);
      _setEventHandlers_1(_self);
      _setEditorText_2(_self, _contents);
      _eventListeners_2(_self, _Record_0());
      return _self;
    },
    ["self", "smallKansas", "title", "mimeType", "contents"],
  ),
  "{ :self :smallKansas :title :mimeType :contents |\n\t\tself.smallKansas := smallKansas;\n\t\tself.title := title;\n\t\tself.mimeType := mimeType;\n\t\tself.clientMenuItems := [];\n\t\tself.createElements;\n\t\tself.setEventHandlers;\n\t\tself.setEditorText(contents);\n\t\tself.eventListeners := Record();\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "insertText",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _insertStringAtCaret_2(_window_1(_system), _aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tsystem.window.insertStringAtCaret(aString)\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "menuItems",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _standardTextEditorMenuItems_2(_smallKansas_1(_self), _self),
      _clientMenuItems_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.smallKansas.standardTextEditorMenuItems(self) ++ self.clientMenuItems\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "outerElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _editorPane_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.editorPane\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "setEventHandlers",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _addEventListener_3(
      _editorText_1(_self),
      "contextmenu",
      sl.annotateFunction(function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        } /* Statements */
        _preventDefault_1(_event);
        return _textEditorMenu_2(_self, _event);
      }, ["event"]),
    );
    return _addEventListener_3(
      _editorText_1(_self),
      "keydown",
      sl.annotateFunction(function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _ctrlKey_1(_event),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _where = _caretBoundingBox_1(_window_1(_system));
            let _bindings = _collect_2(
              _menuItems_1(_self),
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _keyBinding_3(_each, _event, _where);
              }, ["each"]),
            );
            /* Statements */
            _where_2(_smallKansas_1(_self), _where);
            return _caseOf_3(
              _key_1(_event),
              _bindings,
              sl.annotateFunction(function (_key) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _key";
                  throw new Error(errorMessage);
                } /* Statements */
                return null;
              }, ["key"]),
            );
          }, []),
        );
      }, ["event"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.editorText.addEventListener('contextmenu') { :event |\n\t\t\tevent.preventDefault;\n\t\t\tself.textEditorMenu(event)\n\t\t};\n\t\tself.editorText.addEventListener('keydown') { :event |\n\t\t\tevent.ctrlKey.ifTrue {\n\t\t\t\tlet where = system.window.caretBoundingBox;\n\t\t\t\tlet bindings = self.menuItems.collect { :each |\n\t\t\t\t\teach.keyBinding(event, where)\n\t\t\t\t};\n\t\t\t\tself.smallKansas.where := where;\n\t\t\t\tevent.key.caseOf(\n\t\t\t\t\tbindings,\n\t\t\t\t\t{ :key | nil }\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "setEditorText",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _mimeType_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          "text/html",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _innerHtml_2(_editorText_1(_self), _aString);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "text/markdown",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _innerHtml_2(
              _editorText_1(_self),
              _markdownToHtml_1(_aString),
            );
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "text/plain",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _textContent_2(_editorText_1(_self), _aString);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _warning_2(
          _self,
          _plusSignPlusSign_2(
            "setEditorText: unkown mimeType: ",
            _mimeType_1(_self),
          ),
        );
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.mimeType.caseOf([\n\t\t\t'text/html' -> {\n\t\t\t\tself.editorText.innerHtml := aString\n\t\t\t},\n\t\t\t'text/markdown' -> {\n\t\t\t\tself.editorText.innerHtml := aString.markdownToHtml\n\t\t\t},\n\t\t\t'text/plain' -> {\n\t\t\t\tself.editorText.textContent := aString\n\t\t\t}\n\t\t]) {\n\t\t\tself.warning('setEditorText: unkown mimeType: ' ++ self.mimeType)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "TextEditor",
  "TextEditor",
  "textEditorMenu",
  ["self", "event"],
  sl.annotateFunction(function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _menu_5(
      _smallKansas_1(_self),
      "Text Editor Menu",
      _menuItems_1(_self),
      true,
      _event,
    );
  }, ["self", "event"]),
  "{ :self :event |\n\t\tself.smallKansas.menu(\n\t\t\t'Text Editor Menu',\n\t\t\tself.menuItems,\n\t\t\ttrue,\n\t\t\tevent\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "TextEditor",
  "standardTextEditorMenuItems",
  ["self", "subject"],
  sl.annotateFunction(function (_self, _subject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subject";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _MenuItem_3(
        "Accept It",
        "s",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _dispatchEvent_2(
            _subject,
            _CustomEvent_2(
              "accept",
              _Record_1([["detail", _currentText_1(_subject)]]),
            ),
          );
        }, ["event"]),
      ),
      _MenuItem_3(
        "Browse It",
        "b",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _browserOn_3(
            _self,
            _selectedTextOrWordAtCaret_1(_window_1(_system)),
            _event,
          );
        }, ["event"]),
      ),
      _MenuItem_3(
        "Do It",
        "d",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _text = _selectedTextOrParagraphAtCaret_1(_window_1(_system));
          /* Statements */
          return _evaluate_3(_self, _text, _event);
        }, ["event"]),
      ),
      _MenuItem_3(
        "Help For It",
        "h",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _helpFor_3(
            _self,
            _asMethodName_1(_selectedTextOrWordAtCaret_1(_window_1(_system))),
            _event,
          );
        }, ["event"]),
      ),
      _MenuItem_3(
        "Implementors Of It",
        "m",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _implementorsOf_3(
            _self,
            _asMethodName_1(_selectedTextOrWordAtCaret_1(_window_1(_system))),
            _event,
          );
        }, ["event"]),
      ),
      _MenuItem_3(
        "Inspect It",
        "i",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _inspectorOn_3(
            _self,
            _evaluate_3(
              _self,
              _selectedTextOrWordAtCaret_1(_window_1(_system)),
              _event,
            ),
            _event,
          );
        }, ["event"]),
      ),
      _MenuItem_3(
        "Play It",
        "Enter",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _text = _selectedTextOrParagraphAtCaret_1(_window_1(_system));
          let _decoratedText = _unwords_1(["{", _text, "}.value.play"]);
          /* Statements */
          return _evaluate_3(_self, _decoratedText, _event);
        }, ["event"]),
      ),
      _MenuItem_3(
        "Print It",
        "p",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _text = _selectedTextOrParagraphAtCaret_1(_window_1(_system));
          let _answer = _asString_1(_evaluate_3(_self, _text, _event));
          /* Statements */
          return _insertText_2(_subject, _plusSignPlusSign_2(" ", _answer));
        }, ["event"]),
      ),
      _MenuItem_3(
        "References To It",
        null,
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _referencesTo_3(
            _self,
            _asMethodName_1(_selectedTextOrWordAtCaret_1(_window_1(_system))),
            _event,
          );
        }, ["event"]),
      ),
      _MenuItem_3(
        "Require It",
        null,
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _then_2(
            _require_1(
              _package_2(
                _system,
                _selectedTextOrWordAtCaret_1(_window_1(_system)),
              ),
            ),
            sl.annotateFunction(function (_unused) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _unused";
                throw new Error(errorMessage);
              } /* Statements */
              return _insertText_2(_subject, "*Package loaded*");
            }, ["unused"]),
          );
        }, ["event"]),
      ),
      _MenuItem_3(
        "Reset Synthesiser",
        ".",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          _removeAll_1(_clock_1(_system));
          return _reset_1(_scSynth_1(_system));
        }, ["event"]),
      ),
    ];
  }, ["self", "subject"]),
  "{ :self :subject |\n\t\t[\n\t\t\tMenuItem('Accept It', 's') { :event |\n\t\t\t\tsubject.dispatchEvent(\n\t\t\t\t\tCustomEvent(\n\t\t\t\t\t\t'accept',\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\tdetail: subject.currentText\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t},\n\t\t\tMenuItem('Browse It', 'b') { :event |\n\t\t\t\tself.browserOn(\n\t\t\t\t\tsystem.window.selectedTextOrWordAtCaret,\n\t\t\t\t\tevent\n\t\t\t\t)\n\t\t\t},\n\t\t\tMenuItem('Do It', 'd') { :event |\n\t\t\t\tlet text = system.window.selectedTextOrParagraphAtCaret;\n\t\t\t\tself.evaluate(text, event)\n\t\t\t},\n\t\t\tMenuItem('Help For It', 'h') { :event |\n\t\t\t\tself.helpFor(\n\t\t\t\t\tsystem.window.selectedTextOrWordAtCaret.asMethodName,\n\t\t\t\t\tevent\n\t\t\t\t)\n\t\t\t},\n\t\t\tMenuItem('Implementors Of It', 'm') { :event |\n\t\t\t\tself.implementorsOf(\n\t\t\t\t\tsystem.window.selectedTextOrWordAtCaret.asMethodName,\n\t\t\t\t\tevent\n\t\t\t\t)\n\t\t\t},\n\t\t\tMenuItem('Inspect It', 'i') { :event |\n\t\t\t\tself.inspectorOn(\n\t\t\t\t\tself.evaluate(\n\t\t\t\t\t\tsystem.window.selectedTextOrWordAtCaret,\n\t\t\t\t\t\tevent\n\t\t\t\t\t),\n\t\t\t\t\tevent\n\t\t\t\t)\n\t\t\t},\n\t\t\tMenuItem('Play It', 'Enter') { :event |\n\t\t\t\tlet text = system.window.selectedTextOrParagraphAtCaret;\n\t\t\t\tlet decoratedText = ['{', text, '}.value.play'].unwords;\n\t\t\t\tself.evaluate(decoratedText, event)\n\t\t\t},\n\t\t\tMenuItem('Print It', 'p') { :event |\n\t\t\t\tlet text = system.window.selectedTextOrParagraphAtCaret;\n\t\t\t\tlet answer = self.evaluate(text, event).asString;\n\t\t\t\tsubject.insertText(' ' ++ answer)\n\t\t\t},\n\t\t\tMenuItem('References To It', nil) { :event |\n\t\t\t\tself.referencesTo(\n\t\t\t\t\tsystem.window.selectedTextOrWordAtCaret.asMethodName,\n\t\t\t\t\tevent\n\t\t\t\t)\n\t\t\t},\n\t\t\tMenuItem('Require It', nil) { :event |\n\t\t\t\tsystem.package(\n\t\t\t\t\tsystem.window.selectedTextOrWordAtCaret\n\t\t\t\t).require.then { :unused |\n\t\t\t\t\tsubject.insertText('*Package loaded*')\n\t\t\t\t}\n\t\t\t},\n\t\t\tMenuItem('Reset Synthesiser', '.') { :event |\n\t\t\t\tsystem.clock.removeAll;\n\t\t\t\tsystem.scSynth.reset\n\t\t\t}\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "TextEditor",
  "TextEditor",
  ["self", "title", "mimeType", "contents"],
  sl.annotateFunction(function (_self, _title, _mimeType, _contents) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _title, _mimeType, _contents";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_5(
      _newTextEditor_0(),
      _self,
      _title,
      _mimeType,
      _contents,
    );
  }, ["self", "title", "mimeType", "contents"]),
  "{ :self :title :mimeType :contents |\n\t\tnewTextEditor().initialize(self, title, mimeType, contents)\n\t}",
);
