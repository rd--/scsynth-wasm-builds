sl.addType(
  false,
  "MenuItem",
  "Menu",
  ["Object", "Comparable"],
  ["name", "accessKey", "onSelect"],
);

sl.copyTraitMethodsToType(
  "Object",
  "MenuItem",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "MenuItem",
);

sl.addMethodToExistingType(
  "MenuItem",
  "Menu",
  "accessKeyDislayText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _accessKey_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _plusSignPlusSign_2(" (", _accessKey_1(_self)),
          ")",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | ifNil(accessKey(self), { '' }, { ++(++(' (', accessKey(self)), ')') }) }",
);

sl.addMethodToExistingType(
  "MenuItem",
  "Menu",
  "compare",
  ["self", "aMenuItem"],
  sl.annotateFunction(function (_self, _aMenuItem) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMenuItem";
      throw new Error(errorMessage);
    } /* Statements */
    return _compare_2(_name_1(_self), _name_1(_aMenuItem));
  }, ["self", "aMenuItem"]),
  "{ :self :aMenuItem | compare(name(self),name(aMenuItem)) }",
);

sl.addMethodToExistingType(
  "MenuItem",
  "Menu",
  "displayText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_name_1(_self), _accessKeyDislayText_1(_self));
  }, ["self"]),
  "{ :self | ++(name(self), accessKeyDislayText(self)) }",
);

sl.addMethodToExistingType(
  "MenuItem",
  "Menu",
  "keyBinding",
  ["self", "event", "where"],
  sl.annotateFunction(function (_self, _event, _where) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _event, _where";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinusGreaterThanSign_2(
      _accessKey_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _preventDefault_1(_event);
        return _onSelect_1(_self)(_where);
      }, []),
    );
  }, ["self", "event", "where"]),
  "{ :self :event :where | ->(accessKey(self), { preventDefault(event); onSelect(self) . (where) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Menu",
  "MenuItem",
  ["self", "accessKey", "onSelect"],
  sl.annotateFunction(function (_self, _accessKey, _onSelect) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _accessKey, _onSelect";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newMenuItem_0(), _self, _accessKey, _onSelect);
  }, ["self", "accessKey", "onSelect"]),
  "{ :self :accessKey :onSelect | initializeSlots(newMenuItem(),self, accessKey, onSelect) }",
);

sl.addType(
  false,
  "Menu",
  "Menu",
  ["Object", "View"],
  ["frame", "menuPane", "listPane", "menuList", "title", "isTransient"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Menu",
);

sl.copyTraitMethodsToType(
  "View",
  "Menu",
);

sl.addMethodToExistingType(
  "Menu",
  "Menu",
  "createElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _menuPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "menuPane"]])),
    );
    _listPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "listPane"]])),
    );
    _menuList_2(_self, _createElement_1("select"));
    _appendChild_2(_listPane_1(_self), _menuList_1(_self));
    return _appendChild_2(_menuPane_1(_self), _listPane_1(_self));
  }, ["self"]),
  "{ :self | menuPane(self, createElement('div', Record([['class', 'menuPane']]))); listPane(self, createElement('div', Record([['class', 'listPane']]))); menuList(self, createElement('select')); appendChild(listPane(self),menuList(self)); appendChild(menuPane(self),listPane(self)) }",
);

sl.addMethodToExistingType(
  "Menu",
  "Menu",
  "frameMenuItems",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_if_3(
      _isTransient_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _MenuItem_3(
          "Mark Not Transient",
          null,
          sl.annotateFunction(function (_unusedEvent) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _unusedEvent";
              throw new Error(errorMessage);
            } /* Statements */
            return _isTransient_2(_self, false);
          }, ["unusedEvent"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _MenuItem_3(
          "Mark Transient",
          null,
          sl.annotateFunction(function (_unusedEvent) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _unusedEvent";
              throw new Error(errorMessage);
            } /* Statements */
            return _isTransient_2(_self, true);
          }, ["unusedEvent"]),
        );
      }, []),
    )];
  }, ["self"]),
  "{ :self | [if(isTransient(self), { MenuItem('Mark Not Transient', nil, { :unusedEvent | isTransient(self, false) }) }, { MenuItem('Mark Transient', nil, { :unusedEvent | isTransient(self, true) }) })] }",
);

sl.addMethodToExistingType(
  "Menu",
  "Menu",
  "initialize",
  ["self", "title", "entries"],
  sl.annotateFunction(function (_self, _title, _entries) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _entries";
      throw new Error(errorMessage);
    } /* Statements */
    _title_2(_self, _title);
    _isTransient_2(_self, false);
    _createElements_1(_self);
    _setEntries_2(_self, _entries);
    return _self;
  }, ["self", "title", "entries"]),
  "{ :self :title :entries | title(self, title); isTransient(self, false); createElements(self); setEntries(self,entries); self }",
);

sl.addMethodToExistingType(
  "Menu",
  "Menu",
  "outerElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _menuPane_1(_self);
  }, ["self"]),
  "{ :self | menuPane(self) }",
);

sl.addMethodToExistingType(
  "Menu",
  "Menu",
  "setEntries",
  ["self", "entries"],
  sl.annotateFunction(function (_self, _entries) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entries";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAllChildren_1(_menuList_1(_self));
    _size_2(_menuList_1(_self), _size_1(_entries));
    return _collect_2(
      _entries,
      sl.annotateFunction(function (_menuItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _menuItem";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _listItem = _TextOption_1(_displayText_1(_menuItem));
        let _pointerBegin_1 = sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          _stopPropagationAndPreventDefault_1(_event);
          _onSelect_1(_menuItem)(_event);
          return _ifTrue_2(
            _isTransient_1(_self),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifNotNil_2(
                _frame_1(_self),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _close_1(_frame_1(_self));
                }, []),
              );
            }, []),
          );
        }, ["event"]);
        /* Statements */
        _appendChild_2(_menuList_1(_self), _listItem);
        return _addEventListener_3(_listItem, "pointerdown", _pointerBegin_1);
      }, ["menuItem"]),
    );
  }, ["self", "entries"]),
  "{ :self :entries | removeAllChildren(menuList(self)); size(menuList(self), size(entries)); collect(entries, { :menuItem | let listItem = TextOption(displayText(menuItem)); let pointerBegin = { :event | stopPropagationAndPreventDefault(event); onSelect(menuItem) . (event); ifTrue(isTransient(self), { ifNotNil(frame(self), { close(frame(self)) }) }) }; appendChild(menuList(self),listItem); addEventListener(listItem,'pointerdown', pointerBegin:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Menu",
  "Menu",
  ["self", "entries"],
  sl.annotateFunction(function (_self, _entries) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entries";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newMenu_0(), _self, _entries);
  }, ["self", "entries"]),
  "{ :self :entries | initialize(newMenu(),self, entries) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "Menu",
  "menu",
  ["self", "title", "entries", "isTransient", "event"],
  sl.annotateFunction(function (_self, _title, _entries, _isTransient, _event) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _title, _entries, _isTransient, _event";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _menu = _Menu_2(_title, _entries);
    let _frame = _addFrame_3(_self, _menu, _event);
    /* Statements */
    _where_2(_self, _event);
    _isTransient_2(_menu, _isTransient);
    return _frame;
  }, ["self", "title", "entries", "isTransient", "event"]),
  "{ :self :title :entries :isTransient :event | let menu = Menu(title, entries); let frame = addFrame(self,menu, event); where(self, event); isTransient(menu, isTransient); frame }",
);
