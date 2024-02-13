sl.addType(
  false,
  "Frame",
  "Frame",
  ["Object", "UserEventTarget"],
  [
    "smallKansas",
    "framePane",
    "titlePane",
    "closeButton",
    "menuButton",
    "titleText",
    "inMove",
    "x",
    "y",
    "x0",
    "y0",
    "subject",
    "eventListeners",
  ],
);

sl.copyTraitToType(
  "Object",
  "Frame",
);

sl.copyTraitToType(
  "UserEventTarget",
  "Frame",
);

sl.addMethod(
  "Frame",
  "Frame",
  "bringToFront",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _zIndex_2(
      _self,
      _plusSign_2(_max_1(_zIndices_1(_smallKansas_1(_self))), 1),
    );
  },
  "{ :self |\n\t\tself.zIndex := self.smallKansas.zIndices.max + 1\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "close",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _dispatchEvent_2(_self, _Event_1("close"));
    return _removeFrame_2(_smallKansas_1(_self), _self);
  },
  "{ :self |\n\t\tself.dispatchEvent(Event('close'));\n\t\tself.smallKansas.removeFrame(self)\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "colour",
  ["self", "aColour"],
  function (_self, _aColour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aColour";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _setProperty_4(
      _style_1(_framePane_1(_self)),
      "background-color",
      _hexString_1(_aColour),
      "",
    );
  },
  "{ :self :aColour |\n\t\tself.framePane.style.setProperty('background-color', aColour.hexString, '')\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
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
    _framePane_2(
      _self,
      _createElement_2(
        "div",
        Object.fromEntries([[
          "class",
          _unwords_1([
            "framePane",
            _typeOf_1(_subject_1(_self)),
            _name_1(_subject_1(_self)),
          ]),
        ]]),
      ),
    );
    _titlePane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "titlePane"]])),
    );
    _closeButton_2(
      _self,
      _createElement_2("span", Object.fromEntries([["class", "closeButton"]])),
    );
    _titleText_2(
      _self,
      _createElement_2("span", Object.fromEntries([["class", "titleText"]])),
    );
    _menuButton_2(
      _self,
      _createElement_2("span", Object.fromEntries([["class", "menuButton"]])),
    );
    _appendChildren_2(_titlePane_1(_self), [
      _closeButton_1(_self),
      _titleText_1(_self),
      _menuButton_1(_self),
    ]);
    _appendChildren_2(_framePane_1(_self), [
      _titlePane_1(_self),
      _outerElement_1(_subject_1(_self)),
    ]);
    _textContent_2(_closeButton_1(_self), "×");
    _textContent_2(_menuButton_1(_self), "☰");
    return _inMove_2(_self, false);
  },
  "{ :self |\n\t\tself.framePane := 'div'.createElement(\n\t\t\tclass: ['framePane', self.subject.typeOf, self.subject.name].unwords\n\t\t);\n\t\tself.titlePane := 'div'.createElement(\n\t\t\tclass: 'titlePane'\n\t\t);\n\t\tself.closeButton := 'span'.createElement(\n\t\t\tclass: 'closeButton'\n\t\t);\n\t\tself.titleText := 'span'.createElement(\n\t\t\tclass: 'titleText'\n\t\t);\n\t\tself.menuButton := 'span'.createElement(\n\t\t\tclass: 'menuButton'\n\t\t);\n\t\tself.titlePane.appendChildren([\n\t\t\tself.closeButton,\n\t\t\tself.titleText,\n\t\t\tself.menuButton\n\t\t]);\n\t\tself.framePane.appendChildren([\n\t\t\tself.titlePane,\n\t\t\tself.subject.outerElement\n\t\t]);\n\t\tself.closeButton.textContent := '×';\n\t\tself.menuButton.textContent := '☰';\n\t\tself.inMove := false\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "font",
  ["self", "fontName"],
  function (_self, _fontName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fontName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _setProperty_4(
      _style_1(_framePane_1(_self)),
      "--font-family",
      _fontName,
      "",
    );
  },
  "{ :self :fontName |\n\t\tself.framePane.style.setProperty('--font-family', fontName, '')\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "fontSize",
  ["self", "fontSize"],
  function (_self, _fontSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fontSize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _setProperty_4(
      _style_1(_framePane_1(_self)),
      "--font-size",
      _fontSize,
      "",
    );
  },
  "{ :self :fontSize |\n\t\tself.framePane.style.setProperty('--font-size', fontSize, '')\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "initialize",
  ["self", "smallKansas", "subject"],
  function (_self, _smallKansas, _subject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _subject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _smallKansas_2(_self, _smallKansas);
    _subject_2(_self, _subject);
    _createElements_1(_self);
    _setEventHandlers_1(_self);
    _title_2(_self, _title_1(_subject));
    _eventListeners_2(_self, _Record_0());
    return _self;
  },
  "{ :self :smallKansas :subject |\n\t\tself.smallKansas := smallKansas;\n\t\tself.subject := subject;\n\t\tself.createElements;\n\t\tself.setEventHandlers;\n\t\tself.title := subject.title;\n\t\tself.eventListeners := Record();\n\t\tself\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
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
    return _framePane_1(_self);
  },
  "{ :self |\n\t\tself.framePane\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "menuItems",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [
      _MenuItem_3("Help", null, function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _helpFor_3(
          _smallKansas_1(_self),
          _name_1(_subject_1(_self)),
          _event,
        );
      }),
      _MenuItem_3("Colour Chooser", null, function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _colourChooserOn_3(_smallKansas_1(_self), _self, _event);
      }),
      _MenuItem_3("Font Menu", null, function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _fontMenuOn_4(_smallKansas_1(_self), _self, true, _event);
      }),
      _MenuItem_3("Font Size Menu", null, function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _fontSizeMenuOn_4(_smallKansas_1(_self), _self, true, _event);
      }),
    ];
  },
  "{ :self |\n\t\t[\n\t\t\tMenuItem('Help', nil) { :event |\n\t\t\t\tself.smallKansas.helpFor(self.subject.name, event)\n\t\t\t},\n\t\t\tMenuItem('Colour Chooser', nil) { :event |\n\t\t\t\tself.smallKansas.colourChooserOn(self, event)\n\t\t\t},\n\t\t\tMenuItem('Font Menu', nil) { :event |\n\t\t\t\tself.smallKansas.fontMenuOn(self, true, event)\n\t\t\t},\n\t\t\tMenuItem('Font Size Menu', nil) { :event |\n\t\t\t\tself.smallKansas.fontSizeMenuOn(self, true, event)\n\t\t\t}\n\t\t]\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "moveTo",
  ["self", "x", "y"],
  function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _x_2(_self, _x);
    _y_2(_self, _y);
    _setProperty_4(
      _style_1(_framePane_1(_self)),
      "left",
      _plusSignPlusSign_2(_asString_1(_x), "px"),
      "",
    );
    return _setProperty_4(
      _style_1(_framePane_1(_self)),
      "top",
      _plusSignPlusSign_2(_asString_1(_y), "px"),
      "",
    );
  },
  "{ :self :x :y |\n\t\tself.x := x;\n\t\tself.y := y;\n\t\tself.framePane.style.setProperty('left', x.asString ++ 'px', '');\n\t\tself.framePane.style.setProperty('top', y.asString ++ 'px', '')\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "setEventHandlers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _pointerBegin_1 = function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _titleRect = _getBoundingClientRect_1(_target_1(_event));
      /* Statements */
      _stopPropagationAndPreventDefault_1(_event);
      _bringToFront_1(_self);
      _setPointerCapture_2(_target_1(_event), _pointerId_1(_event));
      _inMove_2(_self, true);
      _x0_2(_self, _hyphenMinus_2(_x_1(_event), _x_1(_titleRect)));
      return _y0_2(_self, _hyphenMinus_2(_y_1(_event), _y_1(_titleRect)));
    };
    let _pointerMove_1 = function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_inMove_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _moveTo_3(
          _self,
          _hyphenMinus_2(_x_1(_event), _x0_1(_self)),
          _hyphenMinus_2(_y_1(_event), _y0_1(_self)),
        );
      });
    };
    let _pointerEnd_1 = function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _releasePointerCapture_2(_target_1(_event), _pointerId_1(_event));
      return _inMove_2(_self, false);
    };
    /* Statements */
    _addEventListener_3(_closeButton_1(_self), "click", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _close_1(_self);
    });
    _addEventListener_3(_menuButton_1(_self), "click", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _menu_5(
        _smallKansas_1(_self),
        "Frame Menu",
        _plusSignPlusSign_2(
          _frameMenuItems_1(_subject_1(_self)),
          _menuItems_1(_self),
        ),
        true,
        _event,
      );
    });
    _addEventListener_3(_titlePane_1(_self), "contextmenu", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
    });
    _addEventListener_3(_titlePane_1(_self), "pointerdown", _pointerBegin_1);
    _addEventListener_4(
      _titlePane_1(_self),
      "pointermove",
      _pointerMove_1,
      Object.fromEntries([["capture", true], ["passive", true]]),
    );
    _addEventListener_3(_titlePane_1(_self), "pointercancel", _pointerEnd_1);
    _addEventListener_3(_titlePane_1(_self), "pointerup", _pointerEnd_1);
    _addEventListener_3(_titlePane_1(_self), "pointerout", _pointerEnd_1);
    return _addEventListener_3(
      _framePane_1(_self),
      "keydown",
      function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_ctrlKey_1(_event), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_key_1(_event), "Escape"),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _close_1(_self);
            },
          );
        });
      },
    );
  },
  "{ :self |\n\t\tlet pointerBegin = { :event |\n\t\t\tlet titleRect = event.target.getBoundingClientRect;\n\t\t\tevent.stopPropagationAndPreventDefault;\n\t\t\tself.bringToFront;\n\t\t\tevent.target.setPointerCapture(event.pointerId);\n\t\t\tself.inMove := true;\n\t\t\tself.x0 := event.x - titleRect.x;\n\t\t\tself.y0 := event.y - titleRect.y\n\t\t};\n\t\tlet pointerMove = { :event |\n\t\t\tself.inMove.ifTrue {\n\t\t\t\tself.moveTo(\n\t\t\t\t\tevent.x - self.x0,\n\t\t\t\t\tevent.y- self.y0\n\t\t\t\t)\n\t\t\t}\n\t\t};\n\t\tlet pointerEnd = { :event |\n\t\t\tevent.target.releasePointerCapture(event.pointerId);\n\t\t\tself.inMove := false\n\t\t};\n\t\tself.closeButton.addEventListener('click') { :event |\n\t\t\tself.close\n\t\t};\n\t\tself.menuButton.addEventListener('click') { :event |\n\t\t\tself.smallKansas.menu('Frame Menu', self.subject.frameMenuItems ++ self.menuItems, true, event)\n\t\t};\n\t\tself.titlePane.addEventListener('contextmenu') { :event |\n\t\t\t{- ... -}\n\t\t};\n\t\tself.titlePane.addEventListener('pointerdown', pointerBegin:/1);\n\t\tself.titlePane.addEventListener('pointermove', pointerMove:/1, (capture: true, passive: true));\n\t\tself.titlePane.addEventListener('pointercancel', pointerEnd:/1);\n\t\tself.titlePane.addEventListener('pointerup', pointerEnd:/1);\n\t\tself.titlePane.addEventListener('pointerout', pointerEnd:/1);\n\t\tself.framePane.addEventListener('keydown') { :event |\n\t\t\tevent.ctrlKey.ifTrue {\n\t\t\t\t(event.key = 'Escape').ifTrue {\n\t\t\t\t\tself.close\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _textContent_1(_titleText_1(_self));
  },
  "{ :self |\n\t\tself.titleText.textContent\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "title",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _textContent_2(_titleText_1(_self), _aString);
  },
  "{ :self :aString |\n\t\tself.titleText.textContent := aString\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "zIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _parseInteger_2(
      _getPropertyValue_2(_style_1(_framePane_1(_self)), "z-index"),
      10,
    );
  },
  "{ :self |\n\t\tself.framePane.style.getPropertyValue('z-index').parseInteger(10)\n\t}",
);

sl.addMethod(
  "Frame",
  "Frame",
  "zIndex",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _setProperty_4(
      _style_1(_framePane_1(_self)),
      "z-index",
      _asString_1(_anInteger),
      "",
    );
  },
  "{ :self :anInteger |\n\t\tself.framePane.style.setProperty('z-index', anInteger.asString, '')\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "Frame",
  "Frame",
  ["self", "subject"],
  function (_self, _subject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newFrame_0(), _self, _subject);
  },
  "{ :self :subject |\n\t\tnewFrame().initialize(self, subject)\n\t}",
);
