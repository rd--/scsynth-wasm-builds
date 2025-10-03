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
  "{ :self :smallKansas :event | typeResponsibility(self,'@SmallKansan>>openIn') }",
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
  "{ :self :subject :event :delay :aBlock:/0 | let timerId = valueEvery(aBlock:/0,asSeconds(delay)); let frame = addFrame(self,subject, event); addEventListener(frame, 'close', { :unusedEvent | cancel(timerId) }); frame }",
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
  "{ :self :subject :event | let frame = Frame(self, subject); frame(subject, frame); zIndex(frame, +(max(zIndices(self)), 1)); ifNotNil(event, { moveTo(frame,x(event), y(event)) }); uncheckedInclude(frameSet(self),frame); appendChild(container(self),outerElement(frame)); frame }",
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
  "{ :self :name :event | if(isTypeName(system,name), { addFrame(self,setPath(TypeBrowser(self),[name]), event) }, { if(isTraitName(system,name), { addFrame(self,setPath(TraitBrowser(self),[name]), event) }, { warning(self,++('browserOn: not type or trait: ', name)) }) }) }",
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
  "{ :self :aColour | setProperty(style(container(self)),'background-color', hexTriplet(aColour), '') }",
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
  "{ :self :subject :event | let dialog = createElement('dialog'); appendChild(dialog,outerElement(subject)); setProperty(style(dialog),'left', ++(asString(x(event)), 'px'), ''); setProperty(style(dialog),'top', ++(asString(y(event)), 'px'), ''); appendChild(container(self),dialog); dialog(subject,dialog); showModal(dialog); dialog }",
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
  "{ :self :aString :event | add(history(self),aString); evaluateNotifying(system, aString, { :err | inspectorOn(self,err, event); err }) }",
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
  "{ :self | getPropertyValue(style(container(self)),'--font-family') }",
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
  "{ :self :fontName | setProperty(style(container(self)),'--font-family', fontName, '') }",
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
  "{ :self :subject | collect([->('APL 333', 'APL333'), ->('APL 385', 'APL385 Unicode'), ->('Computer Modern', 'Computer Modern'), ->('Euler', 'Neo Euler'), ->('Los Altos', 'Los Altos'), ->('Monaco', 'Monaco'), ->('Parc Place', 'Parc Place'), ->('Virtue', 'Virtue')], { :fontName | MenuItem(key(fontName), nil, { :unusedEvent | font(subject, value(fontName)) }) }) }",
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
  "{ :self :subject :isTransient :event | menu(self,'Font Menu', fontMenuEntriesOn(self,subject), isTransient, event) }",
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
  "{ :self :fontSize | setProperty(style(container(self)),'--font-size', asString(fontSize), '') }",
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
  "{ :self :subject | collect(['8pt', '10pt', '12pt', '16pt', '20pt', '24pt', '32pt'], { :fontSize | MenuItem(fontSize, nil, { :unusedEvent | fontSize(subject, fontSize) }) }) }",
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
  "{ :self :subject :isTransient :event | menu(self,'Font Size Menu', fontSizeMenuEntriesOn(self,subject), isTransient, event) }",
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
  "{ :self :subject :event | let bracketedSubject = ++(++('>>', subject), ':/'); let methodSignatures = sort(copyWithoutIdenticalElements(select(collect(allMethods(system),signature:/1), { :each | includesSubstring(each,bracketedSubject) }))); addFrame(self,MethodSignatureBrowser(self,methodSignatures, false), event) }",
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
  "{ :self | container(self, getElementById('smallKansas')); frameSet(self, IdentitySet()); cache(self, Record()); history(self, []); addEventListener(container(self), 'contextmenu', { :event | ifTrue((==(target(event), container(self))), { preventDefault(event); WorldMenu(self,true, event) }) }); self }",
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
  "{ :self :subject :event | addFrame(self,MethodSignatureBrowser(self,collect(methodSourceCodeSearch(system,subject),signature:/1), false), event) }",
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
  "{ :self :frame | remove(outerElement(frame)); remove(frameSet(self),frame) }",
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
  "{ :self | whenCached(self, 'midiAccess', { requestMidiAccess(navigator(window(system))) }) }",
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
  "{ :self :aBlock:/1 | thenElse(midiAccess(self), { :midiAccess | aBlock(midiAccess) }, { :message | warning(self,+('withMidiAccess: no midiAccess: ', message)) }) }",
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
  "{ :self | if(isEmpty(frameSet(self)), { [0] }, { collect(frameSet(self),zIndex:/1) }) }",
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
  "{ initialize(newSmallKansas()) }",
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
  "{ :self | collect(traitTypes(self,'SmallKansan'), { :each | typeLookup(system,each) }) }",
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
  "{ :self | cached(self, 'smallKansas', { SmallKansas() }) }",
);
