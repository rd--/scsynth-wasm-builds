/*  Requires: DocumentationTest SmallKansas Window  */

sl.addType(
  false,
  "SmallProgram",
  "SmallProgram",
  ["Object", "UserEventTarget", "View", "SmallKansan"],
  [
    "smallKansas",
    "outerElement",
    "description",
    "program",
    "expectedAnswer",
    "answer",
    "historyCursor",
    "eventListeners",
  ],
);

sl.copyTraitMethodsToType(
  "Object",
  "SmallProgram",
);

sl.copyTraitMethodsToType(
  "UserEventTarget",
  "SmallProgram",
);

sl.copyTraitMethodsToType(
  "View",
  "SmallProgram",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "SmallProgram",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "addToAnswer",
  ["self", "programText", "result"],
  sl.annotateFunction(function (_self, _programText, _result) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _programText, _result";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answerText = _createElement_2(
      "pre",
      _Record_1([["class", "answerText"], ["title", _programText]]),
    );
    /* Statements */
    _textContent_2(_answerText, _printString_1(_result));
    _appendChild_2(_answer_1(_self), _answerText);
    return _ifTrue_2(
      _isPromise_1(_result),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _then_2(
          _result,
          sl.annotateFunction(function (_nextResult) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _nextResult";
              throw new Error(errorMessage);
            } /* Statements */
            return _addToAnswer_3(_self, "...", _nextResult);
          }, ["nextResult"]),
        );
      }, []),
    );
  }, ["self", "programText", "result"]),
  "{ :self :programText :result |\n\t\tlet answerText = 'pre'.createElement(\n\t\t\tclass: 'answerText',\n\t\t\ttitle: programText\n\t\t);\n\t\tanswerText.textContent := result.printString;\n\t\tself.answer.appendChild(answerText);\n\t\tresult.isPromise.ifTrue {\n\t\t\tresult.then { :nextResult |\n\t\t\t\tself.addToAnswer('...', nextResult)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "adjustRows",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rows_2(
      _program_1(_self),
      _lineCount_1(_value_1(_program_1(_self))),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.program.rows := self.program.value.lineCount\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "clearAnswer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAllChildren_1(_answer_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.answer.removeAllChildren\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "clearProgram",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_program_1(_self), "");
  }, ["self"]),
  "{ :self |\n\t\tself.program.value := ''\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "currentText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_program_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.program.value\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "focus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _focus_1(_program_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.program.focus\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "initialize",
  ["self", "smallKansas", "description", "program", "expectedAnswer"],
  sl.annotateFunction(
    function (_self, _smallKansas, _description, _program, _expectedAnswer) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _smallKansas, _description, _program, _expectedAnswer";
        throw new Error(errorMessage);
      } /* Statements */
      _smallKansas_2(_self, _smallKansas);
      _outerElement_2(
        _self,
        _createElement_2("div", _Record_1([["class", "smallProgram"]])),
      );
      _description_2(
        _self,
        _createElement_2("div", _Record_1([["class", "description"]])),
      );
      _ifFalse_2(
        _isEmpty_1(_expectedAnswer),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _innerHtml_2(
            _description_1(_self),
            _markdownToHtml_1(_description),
          );
        }, []),
      );
      _program_2(
        _self,
        _createElement_2(
          "textarea",
          _Record_1([["class", "program"], ["spellcheck", "false"]]),
        ),
      );
      _ifFalse_2(
        _isEmpty_1(_program),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _setProgramText_2(_self, _program);
        }, []),
      );
      _expectedAnswer_2(
        _self,
        _createElement_2("div", _Record_1([["class", "expectedAnswer"]])),
      );
      _ifFalse_2(
        _isEmpty_1(_expectedAnswer),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _textContent_2(_expectedAnswer_1(_self), _expectedAnswer);
        }, []),
      );
      _answer_2(
        _self,
        _createElement_2("div", _Record_1([["class", "answer"]])),
      );
      _appendChild_2(_answer_1(_self), _expectedAnswer_1(_self));
      _historyCursor_2(_self, null);
      _addEventListener_3(
        _program_1(_self),
        "contextmenu",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          _preventDefault_1(_event);
          return _programMenu_2(_self, _event);
        }, ["event"]),
      );
      _addEventListener_3(
        _program_1(_self),
        "keydown",
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(
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
          return _ifTrue_2(
            _shiftKey_1(_event),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _where = _caretBoundingBox_1(_window_1(_system));
              /* Statements */
              return _caseOf_3(
                _key_1(_event),
                [
                  _hyphenMinusGreaterThanSign_2(
                    "Enter",
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let _result = _evaluate_3(
                        _smallKansas_1(_self),
                        _value_1(_program_1(_self)),
                        _where,
                      );
                      /* Statements */
                      _preventDefault_1(_event);
                      _addToAnswer_3(
                        _self,
                        _value_1(_program_1(_self)),
                        _result,
                      );
                      _onEvaluate_1(_self);
                      return _historyCursor_2(_self, null);
                    }, []),
                  ),
                  _hyphenMinusGreaterThanSign_2(
                    "ArrowUp",
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _preventDefault_1(_event);
                      return _readHistory_2(_self, -1);
                    }, []),
                  ),
                  _hyphenMinusGreaterThanSign_2(
                    "ArrowDown",
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _preventDefault_1(_event);
                      return _readHistory_2(_self, 1);
                    }, []),
                  ),
                ],
                sl.annotateFunction(function (_unused) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _unused";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return null;
                }, ["unused"]),
              );
            }, []),
          );
        }, ["event"]),
      );
      _addEventListener_3(
        _program_1(_self),
        "keyup",
        sl.annotateFunction(function (_unusedEvent) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _unusedEvent";
            throw new Error(errorMessage);
          } /* Statements */
          return _adjustRows_1(_self);
        }, ["unusedEvent"]),
      );
      _appendChild_2(_outerElement_1(_self), _description_1(_self));
      _appendChild_2(_outerElement_1(_self), _program_1(_self));
      _appendChild_2(_outerElement_1(_self), _answer_1(_self));
      _eventListeners_2(_self, _Record_0());
      _focus_1(_self);
      return _self;
    },
    ["self", "smallKansas", "description", "program", "expectedAnswer"],
  ),
  "{ :self :smallKansas :description :program :expectedAnswer |\n\t\tself.smallKansas := smallKansas;\n\t\tself.outerElement := 'div'.createElement(class: 'smallProgram');\n\t\tself.description := 'div'.createElement(class: 'description');\n\t\texpectedAnswer.isEmpty.ifFalse {\n\t\t\tself.description.innerHtml := description.markdownToHtml\n\t\t};\n\t\tself.program := 'textarea'.createElement(\n\t\t\tclass: 'program',\n\t\t\tspellcheck: 'false'\n\t\t);\n\t\tprogram.isEmpty.ifFalse {\n\t\t\tself.setProgramText(program)\n\t\t};\n\t\tself.expectedAnswer := 'div'.createElement(class: 'expectedAnswer');\n\t\texpectedAnswer.isEmpty.ifFalse {\n\t\t\tself.expectedAnswer.textContent := expectedAnswer\n\t\t};\n\t\tself.answer := 'div'.createElement(class: 'answer');\n\t\tself.answer.appendChild(self.expectedAnswer);\n\t\tself.historyCursor := nil;\n\t\tself.program.addEventListener('contextmenu') { :event |\n\t\t\tevent.preventDefault;\n\t\t\tself.programMenu(event)\n\t\t};\n\t\tself.program.addEventListener('keydown') { :event |\n\t\t\tevent.ctrlKey.ifTrue {\n\t\t\t\tlet where = system.window.caretBoundingBox;\n\t\t\t\tlet bindings = self.menuItems.collect { :each |\n\t\t\t\t\teach.keyBinding(event, where)\n\t\t\t\t};\n\t\t\t\tself.smallKansas.where := where;\n\t\t\t\tevent.key.caseOf(\n\t\t\t\t\tbindings,\n\t\t\t\t\t{ :key | nil }\n\t\t\t\t)\n\t\t\t};\n\t\t\tevent.shiftKey.ifTrue {\n\t\t\t\tlet where = system.window.caretBoundingBox;\n\t\t\t\tevent.key.caseOf([\n\t\t\t\t\t'Enter' -> {\n\t\t\t\t\t\tlet result = self.smallKansas.evaluate(self.program.value, where);\n\t\t\t\t\t\tevent.preventDefault;\n\t\t\t\t\t\tself.addToAnswer(self.program.value, result);\n\t\t\t\t\t\tself.onEvaluate;\n\t\t\t\t\t\tself.historyCursor := nil\n\t\t\t\t\t},\n\t\t\t\t\t'ArrowUp' -> {\n\t\t\t\t\t\tevent.preventDefault;\n\t\t\t\t\t\tself.readHistory(-1)\n\t\t\t\t\t},\n\t\t\t\t\t'ArrowDown' -> {\n\t\t\t\t\t\tevent.preventDefault;\n\t\t\t\t\t\tself.readHistory(1)\n\t\t\t\t\t}\n\t\t\t\t]) { :unused |\n\t\t\t\t\tnil\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.program.addEventListener('keyup') { :unusedEvent |\n\t\t\tself.adjustRows\n\t\t};\n\t\tself.outerElement.appendChild(self.description);\n\t\tself.outerElement.appendChild(self.program);\n\t\tself.outerElement.appendChild(self.answer);\n\t\tself.eventListeners := Record();\n\t\tself.focus;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "menuItems",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _standardTextEditorMenuItems_2(_smallKansas_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\tself.smallKansas.standardTextEditorMenuItems(self)\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "onEvaluate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dispatchEvent_2(
      _self,
      _CustomEvent_2(
        "evaluate",
        _Record_1([["detail", _currentText_1(_self)]]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.dispatchEvent(\n\t\t\tCustomEvent(\n\t\t\t\t'evaluate',\n\t\t\t\t(\n\t\t\t\t\tdetail: self.currentText\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(
      _smallKansas,
      _SmallProgram_4(_smallKansas, "", "", ""),
      _event,
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(\n\t\t\tsmallKansas.SmallProgram('', '', ''),\n\t\t\tevent\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "programMenu",
  ["self", "event"],
  sl.annotateFunction(function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _menu_5(
      _smallKansas_1(_self),
      "Small Program Menu",
      _menuItems_1(_self),
      true,
      _event,
    );
  }, ["self", "event"]),
  "{ :self :event |\n\t\tself.smallKansas.menu(\n\t\t\t'Small Program Menu',\n\t\t\tself.menuItems,\n\t\t\ttrue,\n\t\t\tevent\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "readHistory",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _history = _history_1(_smallKansas_1(_self));
    /* Statements */
    _ifNil_2(
      _historyCursor_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _historyCursor_2(_self, _size_1(_history));
      }, []),
    );
    _historyCursor_2(_self, _plusSign_2(_historyCursor_1(_self), _anInteger));
    return _setProgramText_2(
      _self,
      _atWrap_2(_history, _historyCursor_1(_self)),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet history = self.smallKansas.history;\n\t\tself.historyCursor.ifNil {\n\t\t\tself.historyCursor := history.size\n\t\t};\n\t\tself.historyCursor := self.historyCursor + anInteger;\n\t\tself.setProgramText(history.atWrap(self.historyCursor))\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "readOnly",
  ["self", "aBoolean"],
  sl.annotateFunction(function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      throw new Error(errorMessage);
    } /* Statements */
    return _readOnly_2(_program_1(_self), _aBoolean);
  }, ["self", "aBoolean"]),
  "{ :self :aBoolean |\n\t\tself.program.readOnly := aBoolean\n\t}",
);

sl.addMethodToExistingType(
  "SmallProgram",
  "SmallProgram",
  "setProgramText",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _end = _size_1(_aString);
    /* Statements */
    _value_2(_program_1(_self), _aString);
    _rows_2(_program_1(_self), _lineCount_1(_aString));
    _focus_1(_program_1(_self));
    return _setSelectionRange_3(_program_1(_self), _end, _end);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tlet end = aString.size;\n\t\tself.program.value := aString;\n\t\tself.program.rows := aString.lineCount;\n\t\tself.program.focus;\n\t\tself.program.setSelectionRange(end, end)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "SmallProgram",
  "SmallProgram",
  ["self", "description", "program", "expectedAnswer"],
  sl.annotateFunction(
    function (_self, _description, _program, _expectedAnswer) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _description, _program, _expectedAnswer";
        throw new Error(errorMessage);
      } /* Statements */
      return _initialize_5(
        _newSmallProgram_0(),
        _self,
        _description,
        _program,
        _expectedAnswer,
      );
    },
    ["self", "description", "program", "expectedAnswer"],
  ),
  "{ :self :description :program :expectedAnswer |\n\t\tnewSmallProgram().initialize(self, description, program, expectedAnswer)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "DocumentationTest",
  "SmallProgram",
  "asSmallProgram",
  ["self", "smallKansas"],
  sl.annotateFunction(function (_self, _smallKansas) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallKansas";
      throw new Error(errorMessage);
    } /* Statements */
    return _SmallProgram_4(
      _smallKansas,
      "",
      _unlines_1(_program_1(_self)),
      _unlines_1(_expectedAnswer_1(_self)),
    );
  }, ["self", "smallKansas"]),
  "{ :self :smallKansas |\n\t\tSmallProgram(smallKansas, '', self.program.unlines, self.expectedAnswer.unlines)\n\t}",
);
