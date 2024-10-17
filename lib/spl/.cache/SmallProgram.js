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

sl.copyTraitToType(
  "Object",
  "SmallProgram",
);

sl.copyTraitToType(
  "UserEventTarget",
  "SmallProgram",
);

sl.copyTraitToType(
  "View",
  "SmallProgram",
);

sl.copyTraitToType(
  "SmallKansan",
  "SmallProgram",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "addToAnswer",
  ["self", "programText", "result"],
  function (_self, _programText, _result) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _programText, _result";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answerText = _createElement_2(
      "pre",
      Object.fromEntries([["class", "answerText"], ["title", _programText]]),
    );
    /* Statements */
    _textContent_2(_answerText, _printString_1(_result));
    _appendChild_2(_answer_1(_self), _answerText);
    return _ifTrue_2(_isPromise_1(_result), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _then_2(_result, function (_nextResult) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _nextResult";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addToAnswer_3(_self, "...", _nextResult);
      });
    });
  },
  "{ :self :programText :result |\n\t\tlet answerText = 'pre'.createElement(\n\t\t\tclass: 'answerText',\n\t\t\ttitle: programText\n\t\t);\n\t\tanswerText.textContent := result.printString;\n\t\tself.answer.appendChild(answerText);\n\t\tresult.isPromise.ifTrue {\n\t\t\tresult.then { :nextResult |\n\t\t\t\tself.addToAnswer('...', nextResult)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "adjustRows",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _rows_2(
      _program_1(_self),
      _lineCount_1(_value_1(_program_1(_self))),
    );
  },
  "{ :self |\n\t\tself.program.rows := self.program.value.lineCount\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "clearAnswer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeAllChildren_1(_answer_1(_self));
  },
  "{ :self |\n\t\tself.answer.removeAllChildren\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "clearProgram",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _value_2(_program_1(_self), "");
  },
  "{ :self |\n\t\tself.program.value := ''\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "currentText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _value_1(_program_1(_self));
  },
  "{ :self |\n\t\tself.program.value\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "focus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _focus_1(_program_1(_self));
  },
  "{ :self |\n\t\tself.program.focus\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "initialize",
  ["self", "smallKansas", "description", "program", "expectedAnswer"],
  function (_self, _smallKansas, _description, _program, _expectedAnswer) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _smallKansas, _description, _program, _expectedAnswer";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _smallKansas_2(_self, _smallKansas);
    _outerElement_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "smallProgram"]])),
    );
    _description_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "description"]])),
    );
    _ifFalse_2(_isEmpty_1(_expectedAnswer), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _innerHtml_2(
        _description_1(_self),
        _markdownToHtml_1(_description),
      );
    });
    _program_2(
      _self,
      _createElement_2("textarea", Object.fromEntries([["class", "program"]])),
    );
    _ifFalse_2(_isEmpty_1(_program), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _setProgramText_2(_self, _program);
    });
    _expectedAnswer_2(
      _self,
      _createElement_2(
        "div",
        Object.fromEntries([["class", "expectedAnswer"]]),
      ),
    );
    _ifFalse_2(_isEmpty_1(_expectedAnswer), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _textContent_2(_expectedAnswer_1(_self), _expectedAnswer);
    });
    _answer_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "answer"]])),
    );
    _appendChild_2(_answer_1(_self), _expectedAnswer_1(_self));
    _historyCursor_2(_self, null);
    _addEventListener_3(_program_1(_self), "contextmenu", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _preventDefault_1(_event);
      return _programMenu_2(_self, _event);
    });
    _addEventListener_3(_program_1(_self), "keydown", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_shiftKey_1(_event), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_equalsSign_2(_key_1(_event), "Enter"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _result = _evaluate_3(
            _smallKansas_1(_self),
            _value_1(_program_1(_self)),
            null,
          );
          /* Statements */
          _preventDefault_1(_event);
          _addToAnswer_3(_self, _value_1(_program_1(_self)), _result);
          _onEvaluate_1(_self);
          return _historyCursor_2(_self, null);
        });
        _ifTrue_2(_equalsSign_2(_key_1(_event), "ArrowUp"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _preventDefault_1(_event);
          return _readHistory_2(_self, -1);
        });
        return _ifTrue_2(
          _equalsSign_2(_key_1(_event), "ArrowDown"),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _preventDefault_1(_event);
            return _readHistory_2(_self, 1);
          },
        );
      });
    });
    _addEventListener_3(_program_1(_self), "keyup", function (_unusedEvent) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedEvent";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adjustRows_1(_self);
    });
    _appendChild_2(_outerElement_1(_self), _description_1(_self));
    _appendChild_2(_outerElement_1(_self), _program_1(_self));
    _appendChild_2(_outerElement_1(_self), _answer_1(_self));
    _eventListeners_2(_self, _Record_0());
    _focus_1(_self);
    return _self;
  },
  "{ :self :smallKansas :description :program :expectedAnswer |\n\t\tself.smallKansas := smallKansas;\n\t\tself.outerElement := 'div'.createElement(class: 'smallProgram');\n\t\tself.description := 'div'.createElement(class: 'description');\n\t\texpectedAnswer.isEmpty.ifFalse {\n\t\t\tself.description.innerHtml := description.markdownToHtml\n\t\t};\n\t\tself.program := 'textarea'.createElement(class: 'program');\n\t\tprogram.isEmpty.ifFalse {\n\t\t\tself.setProgramText(program)\n\t\t};\n\t\tself.expectedAnswer := 'div'.createElement(class: 'expectedAnswer');\n\t\texpectedAnswer.isEmpty.ifFalse {\n\t\t\tself.expectedAnswer.textContent := expectedAnswer\n\t\t};\n\t\tself.answer := 'div'.createElement(class: 'answer');\n\t\tself.answer.appendChild(self.expectedAnswer);\n\t\tself.historyCursor := nil;\n\t\tself.program.addEventListener('contextmenu') { :event |\n\t\t\tevent.preventDefault;\n\t\t\tself.programMenu(event)\n\t\t};\n\t\tself.program.addEventListener('keydown') { :event |\n\t\t\tevent.shiftKey.ifTrue {\n\t\t\t\t(event.key = 'Enter').ifTrue {\n\t\t\t\t\tlet result = self.smallKansas.evaluate(self.program.value, nil);\n\t\t\t\t\tevent.preventDefault;\n\t\t\t\t\tself.addToAnswer(self.program.value, result);\n\t\t\t\t\tself.onEvaluate;\n\t\t\t\t\tself.historyCursor := nil\n\t\t\t\t};\n\t\t\t\t(event.key = 'ArrowUp').ifTrue {\n\t\t\t\t\tevent.preventDefault;\n\t\t\t\t\tself.readHistory(-1)\n\t\t\t\t};\n\t\t\t\t(event.key = 'ArrowDown').ifTrue {\n\t\t\t\t\tevent.preventDefault;\n\t\t\t\t\tself.readHistory(1)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.program.addEventListener('keyup') { :unusedEvent |\n\t\t\tself.adjustRows\n\t\t};\n\t\tself.outerElement.appendChild(self.description);\n\t\tself.outerElement.appendChild(self.program);\n\t\tself.outerElement.appendChild(self.answer);\n\t\tself.eventListeners := Record();\n\t\tself.focus;\n\t\tself\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "onEvaluate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _dispatchEvent_2(
      _self,
      _CustomEvent_2(
        "evaluate",
        Object.fromEntries([["detail", _currentText_1(_self)]]),
      ),
    );
  },
  "{ :self |\n\t\tself.dispatchEvent(\n\t\t\tCustomEvent(\n\t\t\t\t'evaluate',\n\t\t\t\t(\n\t\t\t\t\tdetail: self.currentText\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(
      _smallKansas,
      _SmallProgram_4(_smallKansas, "", "", ""),
      _event,
    );
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(\n\t\t\tsmallKansas.SmallProgram('', '', ''),\n\t\t\tevent\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "programMenu",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _menu_5(
      _smallKansas_1(_self),
      "Small Program Menu",
      _standardTextEditorMenuItems_2(_smallKansas_1(_self), _self),
      true,
      _event,
    );
  },
  "{ :self :event |\n\t\tself.smallKansas.menu(\n\t\t\t'Small Program Menu',\n\t\t\tself.smallKansas.standardTextEditorMenuItems(self),\n\t\t\ttrue,\n\t\t\tevent\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "readHistory",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _history = _history_1(_smallKansas_1(_self));
    /* Statements */
    _ifNil_2(_historyCursor_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _historyCursor_2(_self, _size_1(_history));
    });
    _historyCursor_2(_self, _plusSign_2(_historyCursor_1(_self), _anInteger));
    return _setProgramText_2(
      _self,
      _atWrap_2(_history, _historyCursor_1(_self)),
    );
  },
  "{ :self :anInteger |\n\t\tlet history = self.smallKansas.history;\n\t\tself.historyCursor.ifNil {\n\t\t\tself.historyCursor := history.size\n\t\t};\n\t\tself.historyCursor := self.historyCursor + anInteger;\n\t\tself.setProgramText(history.atWrap(self.historyCursor))\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "readOnly",
  ["self", "aBoolean"],
  function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _readOnly_2(_program_1(_self), _aBoolean);
  },
  "{ :self :aBoolean |\n\t\tself.program.readOnly := aBoolean\n\t}",
);

sl.addMethod(
  "SmallProgram",
  "SmallProgram",
  "setProgramText",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _end = _size_1(_aString);
    /* Statements */
    _value_2(_program_1(_self), _aString);
    _rows_2(_program_1(_self), _lineCount_1(_aString));
    _focus_1(_program_1(_self));
    return _setSelectionRange_3(_program_1(_self), _end, _end);
  },
  "{ :self :aString |\n\t\tlet end = aString.size;\n\t\tself.program.value := aString;\n\t\tself.program.rows := aString.lineCount;\n\t\tself.program.focus;\n\t\tself.program.setSelectionRange(end, end)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallProgram",
  "SmallProgram",
  ["self", "description", "program", "expectedAnswer"],
  function (_self, _description, _program, _expectedAnswer) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _description, _program, _expectedAnswer";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_5(
      _newSmallProgram_0(),
      _self,
      _description,
      _program,
      _expectedAnswer,
    );
  },
  "{ :self :description :program :expectedAnswer |\n\t\tnewSmallProgram().initialize(self, description, program, expectedAnswer)\n\t}",
);

sl.addMethod(
  "DocumentTest",
  "SmallProgram",
  "asSmallProgram",
  ["self", "smallKansas"],
  function (_self, _smallKansas) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallKansas";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _SmallProgram_4(
      _smallKansas,
      "",
      _unlines_1(_program_1(_self)),
      _unlines_1(_expectedAnswer_1(_self)),
    );
  },
  "{ :self :smallKansas |\n\t\tSmallProgram(smallKansas, '', self.program.unlines, self.expectedAnswer.unlines)\n\t}",
);
