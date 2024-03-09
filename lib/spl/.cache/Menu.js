sl.addType(
  false,
  "MenuItem",
  "Menu",
  ["Object"],
  ["name", "accessKey", "onSelect"],
);

sl.copyTraitToType(
  "Object",
  "MenuItem",
);

sl.addMethod(
  "MenuItem",
  "Menu",
  "lessThanSignEqualsSign",
  ["self", "aMenuItem"],
  function (_self, _aMenuItem) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMenuItem";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSignEqualsSign_2(_name_1(_self), _name_1(_aMenuItem));
  },
  "{ :self :aMenuItem |\n\t\tself.name <= aMenuItem.name\n\t}",
);

sl.addMethod(
  "MenuItem",
  "Menu",
  "accessKeyDislayText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifNil_3(_accessKey_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return "";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSignPlusSign_2(
        _plusSignPlusSign_2(" (", _accessKey_1(_self)),
        ")",
      );
    });
  },
  "{ :self |\n\t\tself.accessKey.ifNil {\n\t\t\t''\n\t\t} {\n\t\t\t' (' ++ self.accessKey ++ ')'\n\t\t}\n\t}",
);

sl.addMethod(
  "MenuItem",
  "Menu",
  "displayText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_name_1(_self), _accessKeyDislayText_1(_self));
  },
  "{ :self |\n\t\tself.name ++ self.accessKeyDislayText\n\t}",
);

sl.addMethod(
  "MenuItem",
  "Menu",
  "keyBinding",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinusGreaterThanSign_2(_accessKey_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _preventDefault_1(_event);
      return _onSelect_1(_self)(null);
    });
  },
  "{ :self :event |\n\t\tself.accessKey -> {\n\t\t\tevent.preventDefault;\n\t\t\tself.onSelect . (nil)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Menu",
  "MenuItem",
  ["self", "accessKey", "onSelect"],
  function (_self, _accessKey, _onSelect) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _accessKey, _onSelect";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newMenuItem_0(), _self, _accessKey, _onSelect);
  },
  "{ :self :accessKey :onSelect |\n\t\tnewMenuItem().initializeSlots(self, accessKey, onSelect)\n\t}",
);

sl.addType(
  false,
  "Menu",
  "Menu",
  ["Object", "View"],
  ["frame", "menuPane", "listPane", "menuList", "title", "isTransient"],
);

sl.copyTraitToType(
  "Object",
  "Menu",
);

sl.copyTraitToType(
  "View",
  "Menu",
);

sl.addMethod(
  "Menu",
  "Menu",
  "createElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _menuPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "menuPane"]])),
    );
    _listPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "listPane"]])),
    );
    _menuList_2(_self, _createElement_1("select"));
    _appendChild_2(_listPane_1(_self), _menuList_1(_self));
    return _appendChild_2(_menuPane_1(_self), _listPane_1(_self));
  },
  "{ :self |\n\t\tself.menuPane := 'div'.createElement(\n\t\t\tclass: 'menuPane'\n\t\t);\n\t\tself.listPane := 'div'.createElement(\n\t\t\tclass: 'listPane'\n\t\t);\n\t\tself.menuList := 'select'.createElement;\n\t\tself.listPane.appendChild(self.menuList);\n\t\tself.menuPane.appendChild(self.listPane)\n\t}",
);

sl.addMethod(
  "Menu",
  "Menu",
  "frameMenuItems",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_if_3(_isTransient_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _MenuItem_3("Mark Not Transient", null, function (_unusedEvent) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedEvent";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _isTransient_2(_self, false);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _MenuItem_3("Mark Transient", null, function (_unusedEvent) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedEvent";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _isTransient_2(_self, true);
      });
    })];
  },
  "{ :self |\n\t\t[\n\t\t\tself.isTransient.if {\n\t\t\t\tMenuItem('Mark Not Transient', nil) { :unusedEvent |\n\t\t\t\t\tself.isTransient := false\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tMenuItem('Mark Transient', nil) { :unusedEvent |\n\t\t\t\t\tself.isTransient := true\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}",
);

sl.addMethod(
  "Menu",
  "Menu",
  "initialize",
  ["self", "title", "entries"],
  function (_self, _title, _entries) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _entries";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _title_2(_self, _title);
    _isTransient_2(_self, false);
    _createElements_1(_self);
    _setEntries_2(_self, _entries);
    return _self;
  },
  "{ :self :title :entries |\n\t\tself.title := title;\n\t\tself.isTransient := false;\n\t\tself.createElements;\n\t\tself.setEntries(entries);\n\t\tself\n\t}",
);

sl.addMethod(
  "Menu",
  "Menu",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _menuPane_1(_self);
  },
  "{ :self |\n\t\tself.menuPane\n\t}",
);

sl.addMethod(
  "Menu",
  "Menu",
  "setEntries",
  ["self", "entries"],
  function (_self, _entries) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entries";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _removeAllChildren_1(_menuList_1(_self));
    _size_2(_menuList_1(_self), _size_1(_entries));
    return _collect_2(_entries, function (_menuItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _menuItem";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _listItem = _TextOption_1(_displayText_1(_menuItem));
      let _pointerBegin_1 = function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _stopPropagationAndPreventDefault_1(_event);
        _onSelect_1(_menuItem)(_event);
        return _ifTrue_2(_isTransient_1(_self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ifNotNil_2(_frame_1(_self), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _close_1(_frame_1(_self));
          });
        });
      };
      /* Statements */
      _appendChild_2(_menuList_1(_self), _listItem);
      return _addEventListener_3(_listItem, "pointerdown", _pointerBegin_1);
    });
  },
  "{ :self :entries |\n\t\tself.menuList.removeAllChildren;\n\t\tself.menuList.size := entries.size;\n\t\tentries.collect { :menuItem |\n\t\t\tlet listItem = TextOption(menuItem.displayText);\n\t\t\tlet pointerBegin = { :event |\n\t\t\t\tevent.stopPropagationAndPreventDefault;\n\t\t\t\tmenuItem.onSelect . (event);\n\t\t\t\tself.isTransient.ifTrue {\n\t\t\t\t\tself.frame.ifNotNil {\n\t\t\t\t\t\tself.frame.close\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.menuList.appendChild(listItem);\n\t\t\tlistItem.addEventListener('pointerdown', pointerBegin:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Menu",
  "Menu",
  ["self", "entries"],
  function (_self, _entries) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entries";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newMenu_0(), _self, _entries);
  },
  "{ :self :entries |\n\t\tnewMenu().initialize(self, entries)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "Menu",
  "menu",
  ["self", "title", "entries", "isTransient", "event"],
  function (_self, _title, _entries, _isTransient, _event) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _title, _entries, _isTransient, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _menu = _Menu_2(_title, _entries);
    let _frame = _addFrame_3(_self, _menu, _event);
    /* Statements */
    _isTransient_2(_menu, _isTransient);
    return _frame;
  },
  "{ :self :title :entries :isTransient :event |\n\t\tlet menu = Menu(title, entries);\n\t\tlet frame = self.addFrame(menu, event);\n\t\tmenu.isTransient := isTransient;\n\t\tframe\n\t}",
);
