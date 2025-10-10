/*  Requires: DocumentObjectModel Duration Set  */

sl.addTrait("SmallKansan", "SmallKansas");

sl.addMethodToExistingTrait(
  "SmallKansan",
  "SmallKansas",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@SmallKansan>>openIn");
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tself.typeResponsibility('@SmallKansan>>openIn')\n\t}",
);

sl.addType(
  false,
  "SmallKansas",
  "SmallKansas",
  ["Object", "Cache"],
  ["container", "frameSet", "cache", "history", "where"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SmallKansas",
);

sl.copyTraitMethodsToType(
  "Cache",
  "SmallKansas",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "addFrameWithAnimator",
  ["self", "subject", "event", "delay", "aBlock:/0"],
  sl.annotateFunction(function (_self, _subject, _event, _delay, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _subject, _event, _delay, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _timerId = _valueEvery_2(_aBlock_0, _asSeconds_1(_delay));
    let _frame = _addFrame_3(_self, _subject, _event);
    /* Statements */
    _addEventListener_3(
      _frame,
      "close",
      sl.annotateFunction(function (_unusedEvent) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedEvent";
          throw new Error(errorMessage);
        } /* Statements */
        return _cancel_1(_timerId);
      }, ["unusedEvent"]),
    );
    return _frame;
  }, ["self", "subject", "event", "delay", "aBlock:/0"]),
  "{ :self :subject :event :delay :aBlock:/0 |\n\t\tlet timerId = aBlock:/0.valueEvery(delay.asSeconds);\n\t\tlet frame = self.addFrame(subject, event);\n\t\tframe.addEventListener('close') { :unusedEvent |\n\t\t\ttimerId.cancel\n\t\t};\n\t\tframe\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "addFrame",
  ["self", "subject", "event"],
  sl.annotateFunction(function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _frame = _Frame_2(_self, _subject);
    /* Statements */
    _frame_2(_subject, _frame);
    _zIndex_2(_frame, _plusSign_2(_max_1(_zIndices_1(_self)), 1));
    _ifNotNil_2(
      _event,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _moveTo_3(_frame, _x_1(_event), _y_1(_event));
      }, []),
    );
    _uncheckedInclude_2(_frameSet_1(_self), _frame);
    _appendChild_2(_container_1(_self), _outerElement_1(_frame));
    return _frame;
  }, ["self", "subject", "event"]),
  "{ :self :subject :event |\n\t\tlet frame = Frame(self, subject);\n\t\tsubject.frame := frame;\n\t\tframe.zIndex := self.zIndices.max + 1;\n\t\tevent.ifNotNil {\n\t\t\tframe.moveTo(event.x, event.y)\n\t\t};\n\t\tself.frameSet.uncheckedInclude(frame);\n\t\tself.container.appendChild(frame.outerElement);\n\t\tframe\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "browserOn",
  ["self", "name", "event"],
  sl.annotateFunction(function (_self, _name, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isTypeName_2(_system, _name),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFrame_3(
          _self,
          _setPath_2(_TypeBrowser_1(_self), [_name]),
          _event,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isTraitName_2(_system, _name),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addFrame_3(
              _self,
              _setPath_2(_TraitBrowser_1(_self), [_name]),
              _event,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _warning_2(
              _self,
              _plusSignPlusSign_2("browserOn: not type or trait: ", _name),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "name", "event"]),
  "{ :self :name :event |\n\t\tsystem.isTypeName(name).if {\n\t\t\tself.addFrame(self.TypeBrowser.setPath([name]), event)\n\t\t} {\n\t\t\tsystem.isTraitName(name).if {\n\t\t\t\tself.addFrame(self.TraitBrowser.setPath([name]), event)\n\t\t\t} {\n\t\t\t\tself.warning('browserOn: not type or trait: ' ++ name)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "colour",
  ["self", "aColour"],
  sl.annotateFunction(function (_self, _aColour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aColour";
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(
      _style_1(_container_1(_self)),
      "background-color",
      _hexTriplet_1(_aColour),
      "",
    );
  }, ["self", "aColour"]),
  "{ :self :aColour |\n\t\tself.container.style.setProperty('background-color', aColour.hexTriplet, '')\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "dialog",
  ["self", "subject", "event"],
  sl.annotateFunction(function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dialog = _createElement_1("dialog");
    /* Statements */
    _appendChild_2(_dialog, _outerElement_1(_subject));
    _setProperty_4(
      _style_1(_dialog),
      "left",
      _plusSignPlusSign_2(_asString_1(_x_1(_event)), "px"),
      "",
    );
    _setProperty_4(
      _style_1(_dialog),
      "top",
      _plusSignPlusSign_2(_asString_1(_y_1(_event)), "px"),
      "",
    );
    _appendChild_2(_container_1(_self), _dialog);
    _dialog_2(_subject, _dialog);
    _showModal_1(_dialog);
    return _dialog;
  }, ["self", "subject", "event"]),
  "{ :self :subject :event |\n\t\tlet dialog = 'dialog'.createElement;\n\t\tdialog.appendChild(subject.outerElement);\n\t\tdialog.style.setProperty('left', event.x.asString ++ 'px', '');\n\t\tdialog.style.setProperty('top', event.y.asString ++ 'px', '');\n\t\tself.container.appendChild(dialog);\n\t\tsubject.dialog(dialog);\n\t\tdialog.showModal;\n\t\tdialog\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "evaluate",
  ["self", "aString", "event"],
  sl.annotateFunction(function (_self, _aString, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _event";
      throw new Error(errorMessage);
    } /* Statements */
    _add_2(_history_1(_self), _aString);
    return _evaluateNotifying_3(
      _system,
      _aString,
      sl.annotateFunction(function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          throw new Error(errorMessage);
        } /* Statements */
        _inspectorOn_3(_self, _err, _event);
        return _err;
      }, ["err"]),
    );
  }, ["self", "aString", "event"]),
  "{ :self :aString :event |\n\t\tself.history.add(aString);\n\t\tsystem.evaluateNotifying(aString) { :err |\n\t\t\tself.inspectorOn(err, event);\n\t\t\terr\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "font",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _getPropertyValue_2(_style_1(_container_1(_self)), "--font-family");
  }, ["self"]),
  "{ :self |\n\t\tself.container.style.getPropertyValue('--font-family')\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "font",
  ["self", "fontName"],
  sl.annotateFunction(function (_self, _fontName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fontName";
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(
      _style_1(_container_1(_self)),
      "--font-family",
      _fontName,
      "",
    );
  }, ["self", "fontName"]),
  "{ :self :fontName |\n\t\tself.container.style.setProperty('--font-family', fontName, '')\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "fontMenuEntriesOn",
  ["self", "subject"],
  sl.annotateFunction(function (_self, _subject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      [
        _hyphenMinusGreaterThanSign_2("APL 333", "APL333"),
        _hyphenMinusGreaterThanSign_2("APL 385", "APL385 Unicode"),
        _hyphenMinusGreaterThanSign_2("Computer Modern", "Computer Modern"),
        _hyphenMinusGreaterThanSign_2("Euler", "Neo Euler"),
        _hyphenMinusGreaterThanSign_2("Los Altos", "Los Altos"),
        _hyphenMinusGreaterThanSign_2("Monaco", "Monaco"),
        _hyphenMinusGreaterThanSign_2("Parc Place", "Parc Place"),
        _hyphenMinusGreaterThanSign_2("Virtue", "Virtue"),
      ],
      sl.annotateFunction(function (_fontName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _fontName";
          throw new Error(errorMessage);
        } /* Statements */
        return _MenuItem_3(
          _key_1(_fontName),
          null,
          sl.annotateFunction(function (_unusedEvent) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _unusedEvent";
              throw new Error(errorMessage);
            } /* Statements */
            return _font_2(_subject, _value_1(_fontName));
          }, ["unusedEvent"]),
        );
      }, ["fontName"]),
    );
  }, ["self", "subject"]),
  "{ :self :subject |\n\t\t[\n\t\t\t'APL 333' -> 'APL333',\n\t\t\t'APL 385' -> 'APL385 Unicode',\n\t\t\t'Computer Modern' -> 'Computer Modern',\n\t\t\t'Euler' -> 'Neo Euler',\n\t\t\t'Los Altos' -> 'Los Altos',\n\t\t\t'Monaco' -> 'Monaco',\n\t\t\t'Parc Place' -> 'Parc Place',\n\t\t\t'Virtue' -> 'Virtue'\n\t\t].collect { :fontName |\n\t\t\tMenuItem(fontName.key, nil) { :unusedEvent |\n\t\t\t\tsubject.font := fontName.value\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "fontMenuOn",
  ["self", "subject", "isTransient", "event"],
  sl.annotateFunction(function (_self, _subject, _isTransient, _event) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _subject, _isTransient, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _menu_5(
      _self,
      "Font Menu",
      _fontMenuEntriesOn_2(_self, _subject),
      _isTransient,
      _event,
    );
  }, ["self", "subject", "isTransient", "event"]),
  "{ :self :subject :isTransient :event |\n\t\tself.menu('Font Menu', self.fontMenuEntriesOn(subject), isTransient, event)\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "fontSize",
  ["self", "fontSize"],
  sl.annotateFunction(function (_self, _fontSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fontSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(
      _style_1(_container_1(_self)),
      "--font-size",
      _asString_1(_fontSize),
      "",
    );
  }, ["self", "fontSize"]),
  "{ :self :fontSize |\n\t\tself.container.style.setProperty('--font-size', fontSize.asString, '')\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "fontSizeMenuEntriesOn",
  ["self", "subject"],
  sl.annotateFunction(function (_self, _subject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      ["8pt", "10pt", "12pt", "16pt", "20pt", "24pt", "32pt"],
      sl.annotateFunction(function (_fontSize) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _fontSize";
          throw new Error(errorMessage);
        } /* Statements */
        return _MenuItem_3(
          _fontSize,
          null,
          sl.annotateFunction(function (_unusedEvent) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _unusedEvent";
              throw new Error(errorMessage);
            } /* Statements */
            return _fontSize_2(_subject, _fontSize);
          }, ["unusedEvent"]),
        );
      }, ["fontSize"]),
    );
  }, ["self", "subject"]),
  "{ :self :subject |\n\t\t['8pt', '10pt', '12pt', '16pt', '20pt', '24pt', '32pt'].collect { :fontSize |\n\t\t\tMenuItem(fontSize, nil) { :unusedEvent |\n\t\t\t\tsubject.fontSize := fontSize\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "fontSizeMenuOn",
  ["self", "subject", "isTransient", "event"],
  sl.annotateFunction(function (_self, _subject, _isTransient, _event) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _subject, _isTransient, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _menu_5(
      _self,
      "Font Size Menu",
      _fontSizeMenuEntriesOn_2(_self, _subject),
      _isTransient,
      _event,
    );
  }, ["self", "subject", "isTransient", "event"]),
  "{ :self :subject :isTransient :event |\n\t\tself.menu('Font Size Menu', self.fontSizeMenuEntriesOn(subject), isTransient, event)\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "implementorsOf",
  ["self", "subject", "event"],
  sl.annotateFunction(function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _bracketedSubject = _plusSignPlusSign_2(
      _plusSignPlusSign_2(">>", _subject),
      ":/",
    );
    let _methodSignatures = _sort_1(
      _copyWithoutIdenticalElements_1(
        _select_2(
          _collect_2(_allMethods_1(_system), _signature_1),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _includesSubstring_2(_each, _bracketedSubject);
          }, ["each"]),
        ),
      ),
    );
    /* Statements */
    return _addFrame_3(
      _self,
      _MethodSignatureBrowser_3(_self, _methodSignatures, false),
      _event,
    );
  }, ["self", "subject", "event"]),
  "{ :self :subject :event |\n\t\tlet bracketedSubject = '>>' ++ subject ++ ':/';\n\t\tlet methodSignatures = system.allMethods.collect(signature:/1).select { :each |\n\t\t\teach.includesSubstring(bracketedSubject)\n\t\t}.copyWithoutIdenticalElements.sort;\n\t\tself.addFrame(self.MethodSignatureBrowser(methodSignatures, false), event)\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "initialize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _container_2(_self, _getElementById_1("smallKansas"));
    _frameSet_2(_self, _IdentitySet_0());
    _cache_2(_self, _Record_0());
    _history_2(_self, []);
    _addEventListener_3(
      _container_1(_self),
      "contextmenu",
      sl.annotateFunction(function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSignEqualsSign_2(_target_1(_event), _container_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _preventDefault_1(_event);
            return _WorldMenu_3(_self, true, _event);
          }, []),
        );
      }, ["event"]),
    );
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself.container := 'smallKansas'.getElementById;\n\t\tself.frameSet := IdentitySet();\n\t\tself.cache := Record();\n\t\tself.history := [];\n\t\tself.container.addEventListener('contextmenu') { :event |\n\t\t\t(event.target == self.container).ifTrue {\n\t\t\t\tevent.preventDefault;\n\t\t\t\tself.WorldMenu(true, event)\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "referencesTo",
  ["self", "subject", "event"],
  sl.annotateFunction(function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(
      _self,
      _MethodSignatureBrowser_3(
        _self,
        _collect_2(_methodSourceCodeSearch_2(_system, _subject), _signature_1),
        false,
      ),
      _event,
    );
  }, ["self", "subject", "event"]),
  "{ :self :subject :event |\n\t\tself.addFrame(\n\t\t\tself.MethodSignatureBrowser(\n\t\t\t\tsystem.methodSourceCodeSearch(subject).collect(signature:/1),\n\t\t\t\tfalse\n\t\t\t),\n\t\t\tevent\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "removeFrame",
  ["self", "frame"],
  sl.annotateFunction(function (_self, _frame) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _frame";
      throw new Error(errorMessage);
    } /* Statements */
    _remove_1(_outerElement_1(_frame));
    return _remove_2(_frameSet_1(_self), _frame);
  }, ["self", "frame"]),
  "{ :self :frame |\n\t\tframe.outerElement.remove;\n\t\tself.frameSet.remove(frame)\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "midiAccess",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _whenCached_3(
      _self,
      "midiAccess",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _requestMidiAccess_1(_navigator_1(_window_1(_system)));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.whenCached('midiAccess') {\n\t\t\tsystem.window.navigator.requestMidiAccess\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "withMidiAccess",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _midiAccess_1(_self),
      sl.annotateFunction(function (_midiAccess) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _midiAccess";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_midiAccess);
      }, ["midiAccess"]),
      sl.annotateFunction(function (_message) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _message";
          throw new Error(errorMessage);
        } /* Statements */
        return _warning_2(
          _self,
          _plusSign_2("withMidiAccess: no midiAccess: ", _message),
        );
      }, ["message"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.midiAccess.thenElse { :midiAccess |\n\t\t\taBlock(midiAccess)\n\t\t} { :message |\n\t\t\tself.warning('withMidiAccess: no midiAccess: ' + message)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallKansas",
  "SmallKansas",
  "zIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_frameSet_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [0];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_frameSet_1(_self), _zIndex_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.frameSet.isEmpty.if {\n\t\t\t[0]\n\t\t} {\n\t\t\tself.frameSet.collect(zIndex:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "SmallKansas",
  "SmallKansas",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_1(_newSmallKansas_0());
  }, []),
  "{\n\t\tnewSmallKansas().initialize\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SmallKansas",
  "smallKansans",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _traitTypes_2(_self, "SmallKansan"),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _typeLookup_2(_system, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.traitTypes('SmallKansan').collect { :each |\n\t\t\tsystem.typeLookup(each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SmallKansas",
  "smallKansas",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "smallKansas",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _SmallKansas_0();
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('smallKansas') {\n\t\t\tSmallKansas()\n\t\t}\n\t}",
);
