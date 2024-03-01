/* {- Requires: ListChooser SmallKansas TextEditor -} */

sl.addType(
  false,
  "ColumnBrowser",
  "ColumnBrowser",
  ["Object", "View"],
  [
    "smallKansas",
    "browserPane",
    "columnsPane",
    "previewPane",
    "textEditor",
    "numberOfColumns",
    "columnLists",
    "statusPane",
    "statusText",
    "title",
  ],
);

sl.copyTraitToType(
  "Object",
  "ColumnBrowser",
);

sl.copyTraitToType(
  "View",
  "ColumnBrowser",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "addKeyBindings",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addKeyBindings_2(
      _textEditor_1(_self),
      _aBlock_1(_textEditor_1(_self)),
    );
  },
  "{ :self :aBlock:/1 |\n\t\tself.textEditor.addKeyBindings(self.textEditor.aBlock)\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "createElements",
  [
    "self",
    "mimeType",
    "withFilter",
    "withStatus",
    "columnProportions",
    "listSize",
  ],
  function (
    _self,
    _mimeType,
    _withFilter,
    _withStatus,
    _columnProportions,
    _listSize,
  ) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _mimeType, _withFilter, _withStatus, _columnProportions, _listSize";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _browserPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "browserPane"]])),
    );
    _columnsPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "columnsPane"]])),
    );
    _previewPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "previewPane"]])),
    );
    _textEditor_2(
      _self,
      _TextEditor_4(
        _smallKansas_1(_self),
        "ColumnBrowserTextEditor",
        _mimeType,
        "",
      ),
    );
    _columnLists_2(
      _self,
      _collect_2(
        _upOrDownTo_2(1, _numberOfColumns_1(_self)),
        function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ListChooser_3(
            _ampersand_2(_withFilter, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _equalsSign_2(_index, 1);
            }),
            null,
            _listSize,
          );
        },
      ),
    );
    _toDo_3(1, _size_1(_columnProportions), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _list = _listChooserPane_1(_at_2(_columnLists_1(_self), _index));
      /* Statements */
      return _setProperties_2(
        _style_1(_list),
        Object.fromEntries([[
          "flex",
          _plusSignPlusSign_2(
            _asString_1(_at_2(_columnProportions, _index)),
            " 1 16em",
          ),
        ]]),
      );
    });
    _appendChildren_2(
      _columnsPane_1(_self),
      _collect_2(_columnLists_1(_self), _listChooserPane_1),
    );
    _appendChild_2(
      _previewPane_1(_self),
      _outerElement_1(_textEditor_1(_self)),
    );
    _appendChildren_2(_browserPane_1(_self), [
      _columnsPane_1(_self),
      _previewPane_1(_self),
    ]);
    return _ifTrue_2(_withStatus, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _statusPane_2(
        _self,
        _createElement_2("div", Object.fromEntries([["class", "statusPane"]])),
      );
      _statusText_2(
        _self,
        _createElement_2("span", Object.fromEntries([["class", "statusText"]])),
      );
      _appendChild_2(_statusPane_1(_self), _statusText_1(_self));
      return _appendChild_2(_browserPane_1(_self), _statusPane_1(_self));
    });
  },
  "{ :self :mimeType :withFilter :withStatus :columnProportions :listSize |\n\t\tself.browserPane := 'div'.createElement(\n\t\t\tclass: 'browserPane'\n\t\t);\n\t\tself.columnsPane := 'div'.createElement(\n\t\t\tclass: 'columnsPane'\n\t\t);\n\t\tself.previewPane := 'div'.createElement(\n\t\t\tclass: 'previewPane'\n\t\t);\n\t\tself.textEditor := self.smallKansas.TextEditor(\n\t\t\t'ColumnBrowserTextEditor', mimeType, ''\n\t\t);\n\t\tself.columnLists := (1 .. self.numberOfColumns).collect { :index |\n\t\t\tListChooser(withFilter & { index = 1 }, nil, listSize)\n\t\t};\n\t\t1.toDo(columnProportions.size) { :index |\n\t\t\tlet list = self.columnLists[index].listChooserPane;\n\t\t\tlist.style.setProperties((\n\t\t\t\t'flex': columnProportions[index].asString ++ ' 1 16em'\n\t\t\t))\n\t\t};\n\t\tself.columnsPane.appendChildren(self.columnLists.collect(listChooserPane:/1));\n\t\tself.previewPane.appendChild(self.textEditor.outerElement);\n\t\tself.browserPane.appendChildren([\n\t\t\tself.columnsPane,\n\t\t\tself.previewPane\n\t\t]);\n\t\twithStatus.ifTrue {\n\t\t\tself.statusPane := 'div'.createElement(\n\t\t\t\tclass: 'statusPane'\n\t\t\t);\n\t\t\tself.statusText := 'span'.createElement(\n\t\t\t\tclass: 'statusText'\n\t\t\t);\n\t\t\tself.statusPane.appendChild(self.statusText);\n\t\t\tself.browserPane.appendChild(self.statusPane)\n\t\t}\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "initialize",
  [
    "self",
    "smallKansas",
    "title",
    "mimeType",
    "withFilter",
    "withStatus",
    "columnProportions",
    "clientKeyBindings",
    "onAccept:/1",
    "onChange:/2",
  ],
  function (
    _self,
    _smallKansas,
    _title,
    _mimeType,
    _withFilter,
    _withStatus,
    _columnProportions,
    _clientKeyBindings,
    _onAccept_1,
    _onChange_2,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _self, _smallKansas, _title, _mimeType, _withFilter, _withStatus, _columnProportions, _clientKeyBindings, _onAccept_1, _onChange_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _smallKansas_2(_self, _smallKansas);
    _title_2(_self, _title);
    _numberOfColumns_2(_self, _size_1(_columnProportions));
    _createElements_6(
      _self,
      _mimeType,
      _withFilter,
      _withStatus,
      _columnProportions,
      6,
    );
    _setColumnEntries_3(_self, 1, _onChange_2(_self, []));
    _setEventHandlers_2(_self, _onChange_2);
    _ifTrue_2(_isBlock_1(_clientKeyBindings), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addKeyBindings_2(_self, _clientKeyBindings);
    });
    _ifTrue_2(_isBlock_1(_onAccept_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addEventListener_3(
        _textEditor_1(_self),
        "accept",
        function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _onAccept_1(_detail_1(_event));
        },
      );
    });
    return _self;
  },
  "{ :self :smallKansas :title :mimeType :withFilter :withStatus :columnProportions :clientKeyBindings :onAccept:/1 :onChange:/2 |\n\t\tself.smallKansas := smallKansas;\n\t\tself.title := title;\n\t\tself.numberOfColumns := columnProportions.size;\n\t\tself.createElements(mimeType, withFilter, withStatus, columnProportions, 6);\n\t\tself.setColumnEntries(1, onChange(self, []));\n\t\tself.setEventHandlers(onChange:/2);\n\t\tclientKeyBindings.isBlock.ifTrue {\n\t\t\tself.addKeyBindings(clientKeyBindings)\n\t\t};\n\t\tonAccept:/1.isBlock.ifTrue {\n\t\t\tself.textEditor.addEventListener('accept') { :event |\n\t\t\t\tevent.detail.onAccept\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
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
    return _browserPane_1(_self);
  },
  "{ :self |\n\t\tself.browserPane\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "pathUpTo",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _size), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _value_1(_select_1(_at_2(_columnLists_1(_self), _each)));
    });
  },
  "{ :self :size |\n\t\t(1 .. size).collect { :each |\n\t\t\tself.columnLists[each].select.value\n\t\t}\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "columnEdited",
  ["self", "index", "onChange:/2"],
  function (_self, _index, _onChange_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _onChange_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _next = _onChange_2(_self, _pathUpTo_2(_self, _index));
    /* Statements */
    return _if_3(_equalsSign_2(_index, _numberOfColumns_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _then_2(_next, function (_view) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _view";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _setEditorText_2(_textEditor_1(_self), _asString_1(_view));
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _setEditorText_2(_textEditor_1(_self), "");
      _toDo_3(
        1,
        _hyphenMinus_2(_hyphenMinus_2(_numberOfColumns_1(_self), _index), 1),
        function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _removeAll_1(
            _select_1(
              _at_2(
                _columnLists_1(_self),
                _plusSign_2(_plusSign_2(_index, _each), 1),
              ),
            ),
          );
        },
      );
      return _setColumnEntries_3(_self, _plusSign_2(_index, 1), _next);
    });
  },
  "{ :self :index :onChange:/2 |\n\t\tlet next = onChange(self, self.pathUpTo(index));\n\t\t(index = self.numberOfColumns).if {\n\t\t\tnext.then { :view |\n\t\t\t\tself.textEditor.setEditorText(view.asString)\n\t\t\t}\n\t\t} {\n\t\t\tself.textEditor.setEditorText('');\n\t\t\t1.toDo(self.numberOfColumns - index - 1) { :each |\n\t\t\t\tself.columnLists[index + each + 1].select.removeAll\n\t\t\t};\n\t\t\tself.setColumnEntries(index + 1, next)\n\t\t}\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "setColumnEntries",
  ["self", "index", "entries"],
  function (_self, _index, _entries) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _entries";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _setEntries_2(_at_2(_columnLists_1(_self), _index), _entries);
  },
  "{ :self :index :entries |\n\t\tself.columnLists[index].setEntries(entries)\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "setColumnValue",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _select = _select_1(_at_2(_columnLists_1(_self), _index));
    /* Statements */
    _select_2(_select, _value);
    return _dispatchEvent_2(_select, _Event_1("change"));
  },
  "{ :self :index :value |\n\t\tlet select = self.columnLists[index].select;\n\t\tselect.select(value);\n\t\tselect.dispatchEvent(Event('change'))\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "setEventHandlers",
  ["self", "onChange:/2"],
  function (_self, _onChange_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onChange_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(1, _numberOfColumns_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addEventListener_3(
        _select_1(_at_2(_columnLists_1(_self), _index)),
        "change",
        function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _columnEdited_3(_self, _index, _onChange_2);
        },
      );
    });
  },
  "{ :self :onChange:/2 |\n\t\t1.toDo(self.numberOfColumns) { :index |\n\t\t\tself.columnLists[index].select.addEventListener('change') { :event |\n\t\t\t\tself.columnEdited(index, onChange:/2)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "setPath",
  ["self", "path"],
  function (_self, _path) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _path";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _indicesDo_2(_path, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _setColumnValue_3(_self, _index, _at_2(_path, _index));
    });
    return _self;
  },
  "{ :self :path |\n\t\tpath.indicesDo { :index |\n\t\t\tself.setColumnValue(index, path[index])\n\t\t};\n\t\tself\n\t}",
);

sl.addMethod(
  "ColumnBrowser",
  "ColumnBrowser",
  "setStatus",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifNotNil_2(_statusText_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _textContent_2(_statusText_1(_self), _aString);
    });
  },
  "{ :self :aString |\n\t\tself.statusText.ifNotNil {\n\t\t\tself.statusText.textContent := aString\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "ColumnBrowser",
  "ColumnBrowser",
  [
    "self",
    "title",
    "mimeType",
    "withFilter",
    "withStatus",
    "columnProportions",
    "clientKeyBindings",
    "onAccept:/1",
    "onChange:/2",
  ],
  function (
    _self,
    _title,
    _mimeType,
    _withFilter,
    _withStatus,
    _columnProportions,
    _clientKeyBindings,
    _onAccept_1,
    _onChange_2,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _self, _title, _mimeType, _withFilter, _withStatus, _columnProportions, _clientKeyBindings, _onAccept_1, _onChange_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_10(
      _newColumnBrowser_0(),
      _self,
      _title,
      _mimeType,
      _withFilter,
      _withStatus,
      _columnProportions,
      _clientKeyBindings,
      _onAccept_1,
      _onChange_2,
    );
  },
  "{ :self :title :mimeType :withFilter :withStatus :columnProportions :clientKeyBindings :onAccept:/1 :onChange:/2 |\n\t\tnewColumnBrowser().initialize(\n\t\t\tself,\n\t\t\ttitle,\n\t\t\tmimeType,\n\t\t\twithFilter,\n\t\t\twithStatus,\n\t\t\tcolumnProportions,\n\t\t\tclientKeyBindings,\n\t\t\tonAccept:/1,\n\t\t\tonChange:/2\n\t\t)\n\t}",
);
