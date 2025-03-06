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

sl.copyTraitMethodsToType(
  "Object",
  "Frame",
);

sl.copyTraitMethodsToType(
  "UserEventTarget",
  "Frame",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "bringToFront",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _zIndex_2(
      _self,
      _plusSign_2(_max_1(_zIndices_1(_smallKansas_1(_self))), 1),
    );
  }, ["self"]),
  "{ :self | zIndex(self, +(max(zIndices(smallKansas(self))), 1)) }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "close",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _dispatchEvent_2(_self, _Event_1("close"));
    return _removeFrame_2(_smallKansas_1(_self), _self);
  }, ["self"]),
  "{ :self | dispatchEvent(self,Event('close')); removeFrame(smallKansas(self),self) }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "colour",
  ["self", "aColour"],
  sl.annotateFunction(function (_self, _aColour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aColour";
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(
      _style_1(_framePane_1(_self)),
      "background-color",
      _hexTriplet_1(_aColour),
      "",
    );
  }, ["self", "aColour"]),
  "{ :self :aColour | setProperty(style(framePane(self)),'background-color', hexTriplet(aColour), '') }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "createElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _framePane_2(
      _self,
      _createElement_2(
        "div",
        _Record_1([[
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
      _createElement_2("div", _Record_1([["class", "titlePane"]])),
    );
    _closeButton_2(
      _self,
      _createElement_2("span", _Record_1([["class", "closeButton"]])),
    );
    _titleText_2(
      _self,
      _createElement_2("span", _Record_1([["class", "titleText"]])),
    );
    _menuButton_2(
      _self,
      _createElement_2("span", _Record_1([["class", "menuButton"]])),
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
  }, ["self"]),
  "{ :self | framePane(self, createElement('div', Record([['class', unwords(['framePane', typeOf(subject(self)), name(subject(self))])]]))); titlePane(self, createElement('div', Record([['class', 'titlePane']]))); closeButton(self, createElement('span', Record([['class', 'closeButton']]))); titleText(self, createElement('span', Record([['class', 'titleText']]))); menuButton(self, createElement('span', Record([['class', 'menuButton']]))); appendChildren(titlePane(self),[closeButton(self), titleText(self), menuButton(self)]); appendChildren(framePane(self),[titlePane(self), outerElement(subject(self))]); textContent(closeButton(self), '×'); textContent(menuButton(self), '☰'); inMove(self, false) }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "font",
  ["self", "fontName"],
  sl.annotateFunction(function (_self, _fontName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fontName";
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(
      _style_1(_framePane_1(_self)),
      "--font-family",
      _fontName,
      "",
    );
  }, ["self", "fontName"]),
  "{ :self :fontName | setProperty(style(framePane(self)),'--font-family', fontName, '') }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "fontSize",
  ["self", "fontSize"],
  sl.annotateFunction(function (_self, _fontSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fontSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(
      _style_1(_framePane_1(_self)),
      "--font-size",
      _fontSize,
      "",
    );
  }, ["self", "fontSize"]),
  "{ :self :fontSize | setProperty(style(framePane(self)),'--font-size', fontSize, '') }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "initialize",
  ["self", "smallKansas", "subject"],
  sl.annotateFunction(function (_self, _smallKansas, _subject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _subject";
      throw new Error(errorMessage);
    } /* Statements */
    _smallKansas_2(_self, _smallKansas);
    _subject_2(_self, _subject);
    _createElements_1(_self);
    _setEventHandlers_1(_self);
    _title_2(_self, _title_1(_subject));
    _eventListeners_2(_self, _Record_0());
    return _self;
  }, ["self", "smallKansas", "subject"]),
  "{ :self :smallKansas :subject | smallKansas(self, smallKansas); subject(self, subject); createElements(self); setEventHandlers(self); title(self, title(subject)); eventListeners(self, Record()); self }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "onClose",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _addEventListener_3(_self, "close", _aBlock_1);
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | addEventListener(self,'close', aBlock:/1); self }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "outerElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _framePane_1(_self);
  }, ["self"]),
  "{ :self | framePane(self) }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "menuItems",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _MenuItem_3(
        "Help",
        null,
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _helpFor_3(
            _smallKansas_1(_self),
            _name_1(_subject_1(_self)),
            _event,
          );
        }, ["event"]),
      ),
      _MenuItem_3(
        "Colour Chooser",
        null,
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _colourChooserOn_3(_smallKansas_1(_self), _self, _event);
        }, ["event"]),
      ),
      _MenuItem_3(
        "Font Menu",
        null,
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _fontMenuOn_4(_smallKansas_1(_self), _self, true, _event);
        }, ["event"]),
      ),
      _MenuItem_3(
        "Font Size Menu",
        null,
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _fontSizeMenuOn_4(_smallKansas_1(_self), _self, true, _event);
        }, ["event"]),
      ),
    ];
  }, ["self"]),
  "{ :self | [MenuItem('Help', nil, { :event | helpFor(smallKansas(self),name(subject(self)), event) }), MenuItem('Colour Chooser', nil, { :event | colourChooserOn(smallKansas(self),self, event) }), MenuItem('Font Menu', nil, { :event | fontMenuOn(smallKansas(self),self, true, event) }), MenuItem('Font Size Menu', nil, { :event | fontSizeMenuOn(smallKansas(self),self, true, event) })] }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "moveTo",
  ["self", "x", "y"],
  sl.annotateFunction(function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
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
  }, ["self", "x", "y"]),
  "{ :self :x :y | x(self, x); y(self, y); setProperty(style(framePane(self)),'left', ++(asString(x), 'px'), ''); setProperty(style(framePane(self)),'top', ++(asString(y), 'px'), '') }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "setEventHandlers",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pointerBegin_1 = sl.annotateFunction(function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _titleRect = _getBoundingClientRect_1(_target_1(_event));
      /* Statements */
      _stopPropagationAndPreventDefault_1(_event);
      _bringToFront_1(_self);
      _setPointerCapture_2(_target_1(_event), _pointerId_1(_event));
      _inMove_2(_self, true);
      _x0_2(_self, _hyphenMinus_2(_x_1(_event), _x_1(_titleRect)));
      return _y0_2(_self, _hyphenMinus_2(_y_1(_event), _y_1(_titleRect)));
    }, ["event"]);
    let _pointerMove_1 = sl.annotateFunction(function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(
        _inMove_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _moveTo_3(
            _self,
            _hyphenMinus_2(_x_1(_event), _x0_1(_self)),
            _hyphenMinus_2(_y_1(_event), _y0_1(_self)),
          );
        }, []),
      );
    }, ["event"]);
    let _pointerEnd_1 = sl.annotateFunction(function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        throw new Error(errorMessage);
      } /* Statements */
      _releasePointerCapture_2(_target_1(_event), _pointerId_1(_event));
      return _inMove_2(_self, false);
    }, ["event"]);
    /* Statements */
    _addEventListener_3(
      _closeButton_1(_self),
      "click",
      sl.annotateFunction(function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        } /* Statements */
        return _close_1(_self);
      }, ["event"]),
    );
    _addEventListener_3(
      _menuButton_1(_self),
      "click",
      sl.annotateFunction(function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        } /* Statements */
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
      }, ["event"]),
    );
    _addEventListener_3(
      _titlePane_1(_self),
      "contextmenu",
      sl.annotateFunction(function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        }
      }, ["event"]),
    );
    _addEventListener_3(_titlePane_1(_self), "pointerdown", _pointerBegin_1);
    _addEventListener_4(
      _titlePane_1(_self),
      "pointermove",
      _pointerMove_1,
      _Record_1([["capture", true], ["passive", true]]),
    );
    _addEventListener_3(_titlePane_1(_self), "pointercancel", _pointerEnd_1);
    _addEventListener_3(_titlePane_1(_self), "pointerup", _pointerEnd_1);
    _addEventListener_3(_titlePane_1(_self), "pointerout", _pointerEnd_1);
    return _addEventListener_3(
      _framePane_1(_self),
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
            } /* Statements */
            return _ifTrue_2(
              _equalsSign_2(_key_1(_event), "Escape"),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _close_1(_self);
              }, []),
            );
          }, []),
        );
      }, ["event"]),
    );
  }, ["self"]),
  "{ :self | let pointerBegin = { :event | let titleRect = getBoundingClientRect(target(event)); stopPropagationAndPreventDefault(event); bringToFront(self); setPointerCapture(target(event),pointerId(event)); inMove(self, true); x0(self, -(x(event), x(titleRect))); y0(self, -(y(event), y(titleRect))) }; let pointerMove = { :event | ifTrue(inMove(self), { moveTo(self,-(x(event), x0(self)), -(y(event), y0(self))) }) }; let pointerEnd = { :event | releasePointerCapture(target(event),pointerId(event)); inMove(self, false) }; addEventListener(closeButton(self), 'click', { :event | close(self) }); addEventListener(menuButton(self), 'click', { :event | menu(smallKansas(self),'Frame Menu', ++(frameMenuItems(subject(self)), menuItems(self)), true, event) }); addEventListener(titlePane(self), 'contextmenu', { :event |  }); addEventListener(titlePane(self),'pointerdown', pointerBegin:/1); addEventListener(titlePane(self),'pointermove', pointerMove:/1, Record([['capture', true], ['passive', true]])); addEventListener(titlePane(self),'pointercancel', pointerEnd:/1); addEventListener(titlePane(self),'pointerup', pointerEnd:/1); addEventListener(titlePane(self),'pointerout', pointerEnd:/1); addEventListener(framePane(self), 'keydown', { :event | ifTrue(ctrlKey(event), { ifTrue((=(key(event), 'Escape')), { close(self) }) }) }) }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "title",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _textContent_1(_titleText_1(_self));
  }, ["self"]),
  "{ :self | textContent(titleText(self)) }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "title",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _textContent_2(_titleText_1(_self), _aString);
  }, ["self", "aString"]),
  "{ :self :aString | textContent(titleText(self), aString) }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "zIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseSmallInteger_2(
      _getPropertyValue_2(_style_1(_framePane_1(_self)), "z-index"),
      10,
    );
  }, ["self"]),
  "{ :self | parseSmallInteger(getPropertyValue(style(framePane(self)),'z-index'),10) }",
);

sl.addMethodToExistingType(
  "Frame",
  "Frame",
  "zIndex",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(
      _style_1(_framePane_1(_self)),
      "z-index",
      _asString_1(_anInteger),
      "",
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | setProperty(style(framePane(self)),'z-index', asString(anInteger), '') }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "Frame",
  "Frame",
  ["self", "subject"],
  sl.annotateFunction(function (_self, _subject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subject";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newFrame_0(), _self, _subject);
  }, ["self", "subject"]),
  "{ :self :subject | initialize(newFrame(),self, subject) }",
);
