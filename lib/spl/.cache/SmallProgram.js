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
  "{ :self :programText :result | let answerText = createElement('pre', Record([['class', 'answerText'], ['title', programText]])); textContent(answerText, printString(result)); appendChild(answer(self),answerText); ifTrue(isPromise(result), { then(result, { :nextResult | addToAnswer(self,'...', nextResult) }) }) }",
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
  "{ :self | rows(program(self), lineCount(value(program(self)))) }",
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
  "{ :self | removeAllChildren(answer(self)) }",
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
  "{ :self | value(program(self), '') }",
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
  "{ :self | value(program(self)) }",
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
  "{ :self | focus(program(self)) }",
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
  "{ :self :smallKansas :description :program :expectedAnswer | smallKansas(self, smallKansas); outerElement(self, createElement('div', Record([['class', 'smallProgram']]))); description(self, createElement('div', Record([['class', 'description']]))); ifFalse(isEmpty(expectedAnswer), { innerHtml(description(self), markdownToHtml(description)) }); program(self, createElement('textarea', Record([['class', 'program'], ['spellcheck', 'false']]))); ifFalse(isEmpty(program), { setProgramText(self,program) }); expectedAnswer(self, createElement('div', Record([['class', 'expectedAnswer']]))); ifFalse(isEmpty(expectedAnswer), { textContent(expectedAnswer(self), expectedAnswer) }); answer(self, createElement('div', Record([['class', 'answer']]))); appendChild(answer(self),expectedAnswer(self)); historyCursor(self, nil); addEventListener(program(self), 'contextmenu', { :event | preventDefault(event); programMenu(self,event) }); addEventListener(program(self), 'keydown', { :event | ifTrue(ctrlKey(event), { let where = caretBoundingBox(window(system)); let bindings = collect(menuItems(self), { :each | keyBinding(each,event, where) }); where(smallKansas(self), where); caseOf(key(event),bindings, { :key | nil }) }); ifTrue(shiftKey(event), { let where = caretBoundingBox(window(system)); caseOf(key(event), [->('Enter', { let result = evaluate(smallKansas(self),value(program(self)), where); preventDefault(event); addToAnswer(self,value(program(self)), result); onEvaluate(self); historyCursor(self, nil) }), ->('ArrowUp', { preventDefault(event); readHistory(self,-1) }), ->('ArrowDown', { preventDefault(event); readHistory(self,1) })], { :unused | nil }) }) }); addEventListener(program(self), 'keyup', { :unusedEvent | adjustRows(self) }); appendChild(outerElement(self),description(self)); appendChild(outerElement(self),program(self)); appendChild(outerElement(self),answer(self)); eventListeners(self, Record()); focus(self); self }",
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
  "{ :self | standardTextEditorMenuItems(smallKansas(self),self) }",
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
  "{ :self | dispatchEvent(self,CustomEvent('evaluate', Record([['detail', currentText(self)]]))) }",
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
  "{ :self :smallKansas :event | addFrame(smallKansas,SmallProgram(smallKansas,'', '', ''), event) }",
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
  "{ :self :event | menu(smallKansas(self),'Small Program Menu', menuItems(self), true, event) }",
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
  "{ :self :anInteger | let history = history(smallKansas(self)); ifNil(historyCursor(self), { historyCursor(self, size(history)) }); historyCursor(self, +(historyCursor(self), anInteger)); setProgramText(self,atWrap(history,historyCursor(self))) }",
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
  "{ :self :aBoolean | readOnly(program(self), aBoolean) }",
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
  "{ :self :aString | let end = size(aString); value(program(self), aString); rows(program(self), lineCount(aString)); focus(program(self)); setSelectionRange(program(self),end, end) }",
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
  "{ :self :description :program :expectedAnswer | initialize(newSmallProgram(),self, description, program, expectedAnswer) }",
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
  "{ :self :smallKansas | SmallProgram(smallKansas, '', unlines(program(self)), unlines(expectedAnswer(self))) }",
);
