/* {- Requires: SmallKansas Window -} */

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
    "clientKeyBindings",
    "eventListeners",
  ],
);

sl.copyTraitToType(
  "Object",
  "TextEditor",
);

sl.copyTraitToType(
  "UserEventTarget",
  "TextEditor",
);

sl.copyTraitToType(
  "View",
  "TextEditor",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "addKeyBindings",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _addAll_2(_clientKeyBindings_1(_self), _aCollection);
  },
  "{ :self :aCollection |\n\t\tself.clientKeyBindings.addAll(aCollection)\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "createElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _editorPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "editorPane"]])),
    );
    _editorText_2(
      _self,
      _if_3(_equalsSign_2(_mimeType_1(_self), "text/plain"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _createElement_1("pre");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _createElement_1("div");
      }),
    );
    _setAttributes_2(
      _editorText_1(_self),
      Object.fromEntries([
        ["class", "editorText"],
        ["contentEditable", "true"],
        ["spellcheck", "false"],
      ]),
    );
    return _appendChild_2(_editorPane_1(_self), _editorText_1(_self));
  },
  "{ :self |\n\t\tself.editorPane := 'div'.createElement(\n\t\t\tclass: 'editorPane'\n\t\t);\n\t\tself.editorText := (self.mimeType = 'text/plain').if {\n\t\t\t'pre'.createElement\n\t\t} {\n\t\t\t'div'.createElement\n\t\t};\n\t\tself.editorText.setAttributes((\n\t\t\tclass: 'editorText',\n\t\t\tcontentEditable: 'true',\n\t\t\tspellcheck: 'false'\n\t\t));\n\t\tself.editorPane.appendChild(self.editorText)\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "currentSelection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _text = _getSelectedText_1(_window_1(_system));
    /* Statements */
    _ifTrue_2(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _text = _textContent_1(_editorText_1(_self));
    });
    return _text;
  },
  "{ :self |\n\t\tlet text = system.window.getSelectedText;\n\t\ttext.isEmpty.ifTrue {\n\t\t\ttext := self.editorText.textContent\n\t\t};\n\t\ttext\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "currentText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _textContent_1(_editorText_1(_self));
  },
  "{ :self |\n\t\tself.editorText.textContent\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "currentWord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _text = _getSelectedText_1(_window_1(_system));
    /* Statements */
    return _if_3(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _wordAtCaret_1(_window_1(_system));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _text;
    });
  },
  "{ :self |\n\t\tlet text = system.window.getSelectedText;\n\t\ttext.isEmpty.if {\n\t\t\tsystem.window.wordAtCaret\n\t\t} {\n\t\t\ttext\n\t\t}\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "editable",
  ["self", "aBoolean"],
  function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _setAttribute_3(
      _editorText_1(_self),
      "contentEditable",
      _printString_1(_aBoolean),
    );
  },
  "{ :self :aBoolean |\n\t\tself.editorText.setAttribute('contentEditable', aBoolean.printString)\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "initialize",
  ["self", "smallKansas", "title", "mimeType", "contents"],
  function (_self, _smallKansas, _title, _mimeType, _contents) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _smallKansas, _title, _mimeType, _contents";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _smallKansas_2(_self, _smallKansas);
    _title_2(_self, _title);
    _mimeType_2(_self, _mimeType);
    _clientKeyBindings_2(_self, []);
    _createElements_1(_self);
    _setEventHandlers_1(_self);
    _setEditorText_2(_self, _contents);
    _eventListeners_2(_self, _Record_0());
    return _self;
  },
  "{ :self :smallKansas :title :mimeType :contents |\n\t\tself.smallKansas := smallKansas;\n\t\tself.title := title;\n\t\tself.mimeType := mimeType;\n\t\tself.clientKeyBindings := [];\n\t\tself.createElements;\n\t\tself.setEventHandlers;\n\t\tself.setEditorText(contents);\n\t\tself.eventListeners := Record();\n\t\tself\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "insertText",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _insertAtCursor_1(_aString);
  },
  "{ :self :aString |\n\t\taString.insertAtCursor\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "keyBindings",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _standardTextEditorBindings_2(_smallKansas_1(_self), _self),
      _clientKeyBindings_1(_self),
    );
  },
  "{ :self |\n\t\tself.smallKansas.standardTextEditorBindings(self) ++ self.clientKeyBindings\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _editorPane_1(_self);
  },
  "{ :self |\n\t\tself.editorPane\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "setEventHandlers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _addEventListener_3(_editorText_1(_self), "contextmenu", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _preventDefault_1(_event);
      return _textEditorMenu_2(_self, _event);
    });
    return _addEventListener_3(
      _editorText_1(_self),
      "keydown",
      function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _bindingsList = _collect_2(
          _keyBindings_1(_self),
          function (_menuItem) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _menuItem";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _hyphenMinusGreaterThanSign_2(
              _accessKey_1(_menuItem),
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                _preventDefault_1(_event);
                return _onSelect_1(_menuItem)(null);
              },
            );
          },
        );
        /* Statements */
        return _ifTrue_2(_ctrlKey_1(_event), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _caseOfOtherwise_3(
            _key_1(_event),
            _bindingsList,
            function (_key) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _key";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return null;
            },
          );
        });
      },
    );
  },
  "{ :self |\n\t\tself.editorText.addEventListener('contextmenu') { :event |\n\t\t\tevent.preventDefault;\n\t\t\tself.textEditorMenu(event)\n\t\t};\n\t\tself.editorText.addEventListener('keydown') { :event |\n\t\t\tlet bindingsList = self.keyBindings.collect { :menuItem |\n\t\t\t\tmenuItem.accessKey -> {\n\t\t\t\t\tevent.preventDefault;\n\t\t\t\t\tmenuItem.onSelect . (nil)\n\t\t\t\t}\n\t\t\t};\n\t\t\tevent.ctrlKey.ifTrue {\n\t\t\t\tevent.key.caseOfOtherwise(\n\t\t\t\t\tbindingsList,\n\t\t\t\t\t{ :key | nil }\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "setEditorText",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_mimeType_1(_self), [
      _hyphenMinusGreaterThanSign_2("text/html", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _innerHTML_2(_editorText_1(_self), _aString);
      }),
      _hyphenMinusGreaterThanSign_2("text/markdown", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _innerHTML_2(_editorText_1(_self), _markdownToHtml_1(_aString));
      }),
      _hyphenMinusGreaterThanSign_2("text/plain", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _textContent_2(_editorText_1(_self), _aString);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _warning_2(
        _self,
        _plusSignPlusSign_2(
          "setEditorText: unkown mimeType: ",
          _mimeType_1(_self),
        ),
      );
    });
  },
  "{ :self :aString |\n\t\tself.mimeType.caseOfOtherwise([\n\t\t\t'text/html' -> {\n\t\t\t\tself.editorText.innerHTML := aString\n\t\t\t},\n\t\t\t'text/markdown' -> {\n\t\t\t\tself.editorText.innerHTML := aString.markdownToHtml\n\t\t\t},\n\t\t\t'text/plain' -> {\n\t\t\t\tself.editorText.textContent := aString\n\t\t\t}\n\t\t]) {\n\t\t\tself.warning('setEditorText: unkown mimeType: ' ++ self.mimeType)\n\t\t}\n\t}",
);

sl.addMethod(
  "TextEditor",
  "TextEditor",
  "textEditorMenu",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _menu_5(
      _smallKansas_1(_self),
      "Text Editor Menu",
      _keyBindings_1(_self),
      true,
      _event,
    );
  },
  "{ :self :event |\n\t\tself.smallKansas.menu(\n\t\t\t'Text Editor Menu',\n\t\t\tself.keyBindings,\n\t\t\ttrue,\n\t\t\tevent\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "TextEditor",
  "standardTextEditorBindings",
  ["self", "subject"],
  function (_self, _subject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [
      _MenuItem_3("Accept It", "s", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _dispatchEvent_2(
          _subject,
          _CustomEvent_2(
            "accept",
            Object.fromEntries([["detail", _currentText_1(_subject)]]),
          ),
        );
      }),
      _MenuItem_3("Browse It", "b", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _browserOn_3(_self, [_currentWord_1(_subject)], _event);
      }),
      _MenuItem_3("Do It", "d", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _evaluate_3(_self, _currentSelection_1(_subject), _event);
      }),
      _MenuItem_3("Help For It", "h", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _helpFor_3(
          _self,
          _asMethodName_1(_currentWord_1(_subject)),
          _event,
        );
      }),
      _MenuItem_3("Implementors Of It", "m", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _implementorsOf_3(
          _self,
          _asMethodName_1(_currentWord_1(_subject)),
          _event,
        );
      }),
      _MenuItem_3("Inspect It", "i", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _inspectorOn_3(
          _self,
          _evaluate_3(_self, _currentWord_1(_subject), _event),
          _event,
        );
      }),
      _MenuItem_3("Play It", "Enter", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _text = _plusSignPlusSign_2(
          _plusSignPlusSign_2("{ ", _currentSelection_1(_subject)),
          " }.value.play",
        );
        /* Statements */
        _postLine_1(_text);
        return _evaluate_3(_self, _text, _event);
      }),
      _MenuItem_3("Print It", "p", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _insertText_2(
          _subject,
          _plusSignPlusSign_2(
            " ",
            _asString_1(
              _evaluate_3(_self, _currentSelection_1(_subject), _event),
            ),
          ),
        );
      }),
      _MenuItem_3("References To It", null, function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _referencesTo_3(
          _self,
          _asMethodName_1(_currentWord_1(_subject)),
          _event,
        );
      }),
      _MenuItem_3("Require It", null, function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _then_2(
          _require_1(_package_2(_system, _currentWord_1(_subject))),
          function (_unused) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _unused";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _insertText_2(_subject, "*Package loaded*");
          },
        );
      }),
      _MenuItem_3("Reset Synthesiser", ".", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _removeAll_1(_clock_1(_system));
        return _reset_1(_scSynth_1(_system));
      }),
    ];
  },
  "{ :self :subject |\n\t\t[\n\t\t\tMenuItem('Accept It', 's') { :event |\n\t\t\t\tsubject.dispatchEvent(\n\t\t\t\t\tCustomEvent(\n\t\t\t\t\t\t'accept',\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\tdetail: subject.currentText\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t},\n\t\t\tMenuItem('Browse It', 'b') { :event |\n\t\t\t\tself.browserOn([subject.currentWord], event)\n\t\t\t},\n\t\t\tMenuItem('Do It', 'd') { :event |\n\t\t\t\tself.evaluate(subject.currentSelection, event)\n\t\t\t},\n\t\t\tMenuItem('Help For It', 'h') { :event |\n\t\t\t\tself.helpFor(subject.currentWord.asMethodName, event)\n\t\t\t},\n\t\t\tMenuItem('Implementors Of It', 'm') { :event |\n\t\t\t\tself.implementorsOf(subject.currentWord.asMethodName, event)\n\t\t\t},\n\t\t\tMenuItem('Inspect It', 'i') { :event |\n\t\t\t\tself.inspectorOn(self.evaluate(subject.currentWord, event), event)\n\t\t\t},\n\t\t\tMenuItem('Play It', 'Enter') { :event |\n\t\t\t\tlet text = '{ ' ++ subject.currentSelection ++ ' }.value.play';\n\t\t\t\ttext.postLine;\n\t\t\t\tself.evaluate(text, event)\n\t\t\t},\n\t\t\tMenuItem('Print It', 'p') { :event |\n\t\t\t\tsubject.insertText(' ' ++ self.evaluate(subject.currentSelection, event).asString)\n\t\t\t},\n\t\t\tMenuItem('References To It', nil) { :event |\n\t\t\t\tself.referencesTo(subject.currentWord.asMethodName, event)\n\t\t\t},\n\t\t\tMenuItem('Require It', nil) { :event |\n\t\t\t\tsystem.package(subject.currentWord).require.then { :unused |\n\t\t\t\t\tsubject.insertText('*Package loaded*')\n\t\t\t\t}\n\t\t\t},\n\t\t\tMenuItem('Reset Synthesiser', '.') { :event |\n\t\t\t\tsystem.clock.removeAll;\n\t\t\t\tsystem.scSynth.reset\n\t\t\t}\n\t\t]\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "TextEditor",
  "TextEditor",
  ["self", "title", "mimeType", "contents"],
  function (_self, _title, _mimeType, _contents) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _title, _mimeType, _contents";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initialize_5(
      _newTextEditor_0(),
      _self,
      _title,
      _mimeType,
      _contents,
    );
  },
  "{ :self :title :mimeType :contents |\n\t\tnewTextEditor().initialize(self, title, mimeType, contents)\n\t}",
);
