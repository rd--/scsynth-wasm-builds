/* {- Requires: Dom Duration Set -} */

sl.addTrait("SmallKansan", "SmallKansas");

sl.addTraitMethod(
  "SmallKansan",
  "SmallKansas",
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
    return _typeResponsibility_2(_self, "@SmallKansan>>openIn");
  },
  "{ :self :smallKansas :event |\n\t\tself.typeResponsibility('@SmallKansan>>openIn')\n\t}",
);

sl.addType(
  false,
  "SmallKansas",
  "SmallKansas",
  ["Object", "Cache"],
  ["container", "frameSet", "cache", "history"],
);

sl.copyTraitToType(
  "Object",
  "SmallKansas",
);

sl.copyTraitToType(
  "Cache",
  "SmallKansas",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "addFrameWithAnimator",
  ["self", "subject", "event", "delay", "aBlock:/0"],
  function (_self, _subject, _event, _delay, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _subject, _event, _delay, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _timerId = _valueEveryMilliseconds_2(
      _aBlock_0,
      _asterisk_2(_asSeconds_1(_delay), 1000),
    );
    let _frame = _addFrame_3(_self, _subject, _event);
    /* Statements */
    _addEventListener_3(_frame, "close", function (_unusedEvent) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedEvent";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _cancel_1(_timerId);
    });
    return _frame;
  },
  "{ :self :subject :event :delay :aBlock:/0 |\n\t\tlet timerId = aBlock:/0.valueEveryMilliseconds(delay.asSeconds * 1000);\n\t\tlet frame = self.addFrame(subject, event);\n\t\tframe.addEventListener('close') { :unusedEvent |\n\t\t\ttimerId.cancel\n\t\t};\n\t\tframe\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "addFrame",
  ["self", "subject", "event"],
  function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _frame = _Frame_2(_self, _subject);
    /* Statements */
    _frame_2(_subject, _frame);
    _zIndex_2(_frame, _plusSign_2(_max_1(_zIndices_1(_self)), 1));
    _ifNotNil_2(_event, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _moveTo_3(_frame, _x_1(_event), _y_1(_event));
    });
    _basicInclude_2(_frameSet_1(_self), _frame);
    _appendChild_2(_container_1(_self), _outerElement_1(_frame));
    return _frame;
  },
  "{ :self :subject :event |\n\t\tlet frame = Frame(self, subject);\n\t\tsubject.frame := frame;\n\t\tframe.zIndex := self.zIndices.max + 1;\n\t\tevent.ifNotNil {\n\t\t\tframe.moveTo(event.x, event.y)\n\t\t};\n\t\tself.frameSet.basicInclude(frame);\n\t\tself.container.appendChild(frame.outerElement);\n\t\tframe\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "browserOn",
  ["self", "path", "event"],
  function (_self, _path, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _path, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTypeName_2(_system, _at_2(_path, 1)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addFrame_3(
        _self,
        _setPath_2(_TypeBrowser_1(_self), _path),
        _event,
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isTraitName_2(_system, _at_2(_path, 1)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addFrame_3(
          _self,
          _setPath_2(_TraitBrowser_1(_self), _path),
          _event,
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _warning_2(
          _self,
          _plusSignPlusSign_2(
            "browserOn: not type or trait: ",
            _at_2(_path, 1),
          ),
        );
      });
    });
  },
  "{ :self :path :event |\n\t\tsystem.isTypeName(path[1]).if {\n\t\t\tself.addFrame(self.TypeBrowser.setPath(path), event)\n\t\t} {\n\t\t\tsystem.isTraitName(path[1]).if {\n\t\t\t\tself.addFrame(self.TraitBrowser.setPath(path), event)\n\t\t\t} {\n\t\t\t\tself.warning('browserOn: not type or trait: ' ++ path[1])\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "colour",
  ["self", "aColour"],
  function (_self, _aColour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aColour";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _setProperty_4(
      _style_1(_container_1(_self)),
      "background-color",
      _hexString_1(_aColour),
      "",
    );
  },
  "{ :self :aColour |\n\t\tself.container.style.setProperty('background-color', aColour.hexString, '')\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "dialog",
  ["self", "subject", "event"],
  function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
  },
  "{ :self :subject :event |\n\t\tlet dialog = 'dialog'.createElement;\n\t\tdialog.appendChild(subject.outerElement);\n\t\tdialog.style.setProperty('left', event.x.asString ++ 'px', '');\n\t\tdialog.style.setProperty('top', event.y.asString ++ 'px', '');\n\t\tself.container.appendChild(dialog);\n\t\tsubject.dialog(dialog);\n\t\tdialog.showModal;\n\t\tdialog\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "evaluate",
  ["self", "aString", "event"],
  function (_self, _aString, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _add_2(_history_1(_self), _aString);
    return _evaluateNotifying_3(_system, _aString, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _inspectorOn_3(_self, _err, _event);
      return _err;
    });
  },
  "{ :self :aString :event |\n\t\tself.history.add(aString);\n\t\tsystem.evaluateNotifying(aString) { :err |\n\t\t\tself.inspectorOn(err, event);\n\t\t\terr\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "font",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _getPropertyValue_2(_style_1(_container_1(_self)), "--font-family");
  },
  "{ :self |\n\t\tself.container.style.getPropertyValue('--font-family')\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "font",
  ["self", "fontName"],
  function (_self, _fontName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fontName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _setProperty_4(
      _style_1(_container_1(_self)),
      "--font-family",
      _fontName,
      "",
    );
  },
  "{ :self :fontName |\n\t\tself.container.style.setProperty('--font-family', fontName, '')\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "fontMenuEntriesOn",
  ["self", "subject"],
  function (_self, _subject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2([
      "APL333",
      "Computer Modern",
      "Los Altos",
      "Monaco",
      "Neo Euler",
      "Parc Place",
    ], function (_fontName) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _fontName";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _MenuItem_3(_fontName, null, function (_unusedEvent) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedEvent";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _font_2(_subject, _fontName);
      });
    });
  },
  "{ :self :subject |\n\t\t['APL333', 'Computer Modern', 'Los Altos', 'Monaco', 'Neo Euler', 'Parc Place'].collect { :fontName |\n\t\t\tMenuItem(fontName, nil) { :unusedEvent |\n\t\t\t\tsubject.font := fontName\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "fontMenuOn",
  ["self", "subject", "isTransient", "event"],
  function (_self, _subject, _isTransient, _event) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _subject, _isTransient, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _menu_5(
      _self,
      "Font Menu",
      _fontMenuEntriesOn_2(_self, _subject),
      _isTransient,
      _event,
    );
  },
  "{ :self :subject :isTransient :event |\n\t\tself.menu('Font Menu', self.fontMenuEntriesOn(subject), isTransient, event)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "fontSize",
  ["self", "fontSize"],
  function (_self, _fontSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fontSize";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _setProperty_4(
      _style_1(_container_1(_self)),
      "--font-size",
      _asString_1(_fontSize),
      "",
    );
  },
  "{ :self :fontSize |\n\t\tself.container.style.setProperty('--font-size', fontSize.asString, '')\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "fontSizeMenuEntriesOn",
  ["self", "subject"],
  function (_self, _subject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      ["8pt", "10pt", "12pt", "16pt", "24pt", "32pt"],
      function (_fontSize) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _fontSize";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _MenuItem_3(_fontSize, null, function (_unusedEvent) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _unusedEvent";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _fontSize_2(_subject, _fontSize);
        });
      },
    );
  },
  "{ :self :subject |\n\t\t['8pt', '10pt', '12pt', '16pt', '24pt', '32pt'].collect { :fontSize |\n\t\t\tMenuItem(fontSize, nil) { :unusedEvent |\n\t\t\t\tsubject.fontSize := fontSize\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "fontSizeMenuOn",
  ["self", "subject", "isTransient", "event"],
  function (_self, _subject, _isTransient, _event) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _subject, _isTransient, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _menu_5(
      _self,
      "Font Size Menu",
      _fontSizeMenuEntriesOn_2(_self, _subject),
      _isTransient,
      _event,
    );
  },
  "{ :self :subject :isTransient :event |\n\t\tself.menu('Font Size Menu', self.fontSizeMenuEntriesOn(subject), isTransient, event)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "implementorsOf",
  ["self", "subject", "event"],
  function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _bracketedSubject = _plusSignPlusSign_2(
      _plusSignPlusSign_2(">>", _subject),
      ":/",
    );
    let _methodSignatures = _sort_1(
      _copyWithoutIdenticalElements_1(
        _select_2(
          _collect_2(_allMethods_1(_system), _signature_1),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _includesSubstring_2(_each, _bracketedSubject);
          },
        ),
      ),
    );
    /* Statements */
    return _addFrame_3(
      _self,
      _MethodSignatureBrowser_3(_self, _methodSignatures, false),
      _event,
    );
  },
  "{ :self :subject :event |\n\t\tlet bracketedSubject = '>>' ++ subject ++ ':/';\n\t\tlet methodSignatures = system.allMethods.collect(signature:/1).select { :each |\n\t\t\teach.includesSubstring(bracketedSubject)\n\t\t}.copyWithoutIdenticalElements.sort;\n\t\tself.addFrame(self.MethodSignatureBrowser(methodSignatures, false), event)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _container_2(_self, _getElementById_1("smallKansas"));
    _frameSet_2(_self, _Set_0());
    _cache_2(_self, _Record_0());
    _history_2(_self, []);
    _addEventListener_3(_container_1(_self), "contextmenu", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _equalsSignEqualsSign_2(_target_1(_event), _container_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _preventDefault_1(_event);
          return _WorldMenu_3(_self, true, _event);
        },
      );
    });
    return _self;
  },
  "{ :self |\n\t\tself.container := 'smallKansas'.getElementById;\n\t\tself.frameSet := Set();\n\t\tself.cache := Record();\n\t\tself.history := [];\n\t\tself.container.addEventListener('contextmenu') { :event |\n\t\t\t(event.target == self.container).ifTrue {\n\t\t\t\tevent.preventDefault;\n\t\t\t\tself.WorldMenu(true, event)\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "referencesTo",
  ["self", "subject", "event"],
  function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(
      _self,
      _MethodSignatureBrowser_3(
        _self,
        _collect_2(_methodSourceCodeSearch_2(_system, _subject), _signature_1),
        false,
      ),
      _event,
    );
  },
  "{ :self :subject :event |\n\t\tself.addFrame(\n\t\t\tself.MethodSignatureBrowser(\n\t\t\t\tsystem.methodSourceCodeSearch(subject).collect(signature:/1),\n\t\t\t\tfalse\n\t\t\t),\n\t\t\tevent\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "removeFrame",
  ["self", "frame"],
  function (_self, _frame) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _frame";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _remove_1(_outerElement_1(_frame));
    return _remove_2(_frameSet_1(_self), _frame);
  },
  "{ :self :frame |\n\t\tframe.outerElement.remove;\n\t\tself.frameSet.remove(frame)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "midiAccess",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _whenCached_3(_self, "midiAccess", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _requestMidiAccess_1(_navigator_1(_window_1(_system)));
    });
  },
  "{ :self |\n\t\tself.whenCached('midiAccess') {\n\t\t\tsystem.window.navigator.requestMidiAccess\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "withMidiAccess",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _thenElse_3(_midiAccess_1(_self), function (_midiAccess) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _midiAccess";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_midiAccess);
    }, function (_message) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _message";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _warning_2(
        _self,
        _plusSign_2("withMidiAccess: no midiAccess: ", _message),
      );
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.midiAccess.thenElse { :midiAccess |\n\t\t\taBlock(midiAccess)\n\t\t} { :message |\n\t\t\tself.warning('withMidiAccess: no midiAccess: ' + message)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SmallKansas",
  "zIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_frameSet_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return [0];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_frameSet_1(_self), _zIndex_1);
    });
  },
  "{ :self |\n\t\tself.frameSet.isEmpty.if {\n\t\t\t[0]\n\t\t} {\n\t\t\tself.frameSet.collect(zIndex:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Void",
  "SmallKansas",
  "SmallKansas",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_1(_newSmallKansas_0());
  },
  "{\n\t\tnewSmallKansas().initialize\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "SmallKansas",
  "smallKansas",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "smallKansas", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _SmallKansas_0();
    });
  },
  "{ :self |\n\t\tself.cached('smallKansas') {\n\t\t\tSmallKansas()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "SmallKansas",
  "smallKansans",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_traitTypes_2(_self, "SmallKansan"), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _typeLookup_2(_system, _each);
    });
  },
  "{ :self |\n\t\tself.traitTypes('SmallKansan').collect { :each |\n\t\t\tsystem.typeLookup(each)\n\t\t}\n\t}",
);
