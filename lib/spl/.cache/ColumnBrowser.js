/*  Requires: ListChooser SmallKansas TextEditor  */

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

sl.copyTraitMethodsToType(
  "Object",
  "ColumnBrowser",
);

sl.copyTraitMethodsToType(
  "View",
  "ColumnBrowser",
);

sl.addMethodToExistingType(
  "ColumnBrowser",
  "ColumnBrowser",
  "addKeyBindings",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _addKeyBindings_2(
      _textEditor_1(_self),
      _aBlock_1(_textEditor_1(_self)),
    );
  },
  "{ :self :aBlock:/1 | addKeyBindings(textEditor(self),aBlock(textEditor(self))) }",
);

sl.addMethodToExistingType(
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
      throw new Error(errorMessage);
    } /* Statements */
    _browserPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "browserPane"]])),
    );
    _columnsPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "columnsPane"]])),
    );
    _previewPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "previewPane"]])),
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
            throw new Error(errorMessage);
          } /* Statements */
          return _ListChooser_3(
            _ampersand_2(_withFilter, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
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
        throw new Error(errorMessage);
      } /* Temporaries */
      let _list = _listChooserPane_1(_at_2(_columnLists_1(_self), _index));
      /* Statements */
      return _setProperties_2(
        _style_1(_list),
        _Record_1([[
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
        throw new Error(errorMessage);
      } /* Statements */
      _statusPane_2(
        _self,
        _createElement_2("div", _Record_1([["class", "statusPane"]])),
      );
      _statusText_2(
        _self,
        _createElement_2("span", _Record_1([["class", "statusText"]])),
      );
      _appendChild_2(_statusPane_1(_self), _statusText_1(_self));
      return _appendChild_2(_browserPane_1(_self), _statusPane_1(_self));
    });
  },
  "{ :self :mimeType :withFilter :withStatus :columnProportions :listSize | browserPane(self, createElement('div', Record([['class', 'browserPane']]))); columnsPane(self, createElement('div', Record([['class', 'columnsPane']]))); previewPane(self, createElement('div', Record([['class', 'previewPane']]))); textEditor(self, TextEditor(smallKansas(self),'ColumnBrowserTextEditor', mimeType, '')); columnLists(self, collect(upOrDownTo(1, numberOfColumns(self)), { :index | ListChooser(&(withFilter, { =(index, 1) }), nil, listSize) })); toDo(1, size(columnProportions), { :index | let list = listChooserPane(at(columnLists(self), index)); setProperties(style(list),Record([['flex', ++(asString(at(columnProportions, index)), ' 1 16em')]])) }); appendChildren(columnsPane(self),collect(columnLists(self),listChooserPane:/1)); appendChild(previewPane(self),outerElement(textEditor(self))); appendChildren(browserPane(self),[columnsPane(self), previewPane(self)]); ifTrue(withStatus, { statusPane(self, createElement('div', Record([['class', 'statusPane']]))); statusText(self, createElement('span', Record([['class', 'statusText']]))); appendChild(statusPane(self),statusText(self)); appendChild(browserPane(self),statusPane(self)) }) }",
);

sl.addMethodToExistingType(
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
      throw new Error(errorMessage);
    } /* Statements */
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
        throw new Error(errorMessage);
      } /* Statements */
      return _addKeyBindings_2(_self, _clientKeyBindings);
    });
    _ifTrue_2(_isBlock_1(_onAccept_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _addEventListener_3(
        _textEditor_1(_self),
        "accept",
        function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _onAccept_1(_detail_1(_event));
        },
      );
    });
    return _self;
  },
  "{ :self :smallKansas :title :mimeType :withFilter :withStatus :columnProportions :clientKeyBindings :onAccept:/1 :onChange:/2 | smallKansas(self, smallKansas); title(self, title); numberOfColumns(self, size(columnProportions)); createElements(self,mimeType, withFilter, withStatus, columnProportions, 6); setColumnEntries(self,1, onChange(self,[])); setEventHandlers(self,onChange:/2); ifTrue(isBlock(clientKeyBindings), { addKeyBindings(self,clientKeyBindings) }); ifTrue(isBlock(onAccept:/1), { addEventListener(textEditor(self), 'accept', { :event | onAccept(detail(event)) }) }); self }",
);

sl.addMethodToExistingType(
  "ColumnBrowser",
  "ColumnBrowser",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _browserPane_1(_self);
  },
  "{ :self | browserPane(self) }",
);

sl.addMethodToExistingType(
  "ColumnBrowser",
  "ColumnBrowser",
  "pathUpTo",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_to_2(1, _size), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_select_1(_at_2(_columnLists_1(_self), _each)));
    });
  },
  "{ :self :size | collect(to(1, size), { :each | value(select(at(columnLists(self), each))) }) }",
);

sl.addMethodToExistingType(
  "ColumnBrowser",
  "ColumnBrowser",
  "columnEdited",
  ["self", "index", "onChange:/2"],
  function (_self, _index, _onChange_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _onChange_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _onChange_2(_self, _pathUpTo_2(_self, _index));
    /* Statements */
    return _if_3(_equalsSign_2(_index, _numberOfColumns_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _then_2(_next, function (_view) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _view";
          throw new Error(errorMessage);
        } /* Statements */
        return _setEditorText_2(_textEditor_1(_self), _asString_1(_view));
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _setEditorText_2(_textEditor_1(_self), "");
      _toDo_3(
        1,
        _hyphenMinus_2(_hyphenMinus_2(_numberOfColumns_1(_self), _index), 1),
        function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
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
  "{ :self :index :onChange:/2 | let next = onChange(self,pathUpTo(self,index)); if((=(index, numberOfColumns(self))), { then(next, { :view | setEditorText(textEditor(self),asString(view)) }) }, { setEditorText(textEditor(self),''); toDo(1, -(-(numberOfColumns(self), index), 1), { :each | removeAll(select(at(columnLists(self), +(+(index, each), 1)))) }); setColumnEntries(self,+(index, 1), next) }) }",
);

sl.addMethodToExistingType(
  "ColumnBrowser",
  "ColumnBrowser",
  "setColumnEntries",
  ["self", "index", "entries"],
  function (_self, _index, _entries) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _entries";
      throw new Error(errorMessage);
    } /* Statements */
    return _setEntries_2(_at_2(_columnLists_1(_self), _index), _entries);
  },
  "{ :self :index :entries | setEntries(at(columnLists(self), index),entries) }",
);

sl.addMethodToExistingType(
  "ColumnBrowser",
  "ColumnBrowser",
  "setColumnValue",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _select = _select_1(_at_2(_columnLists_1(_self), _index));
    /* Statements */
    _select_2(_select, _value);
    return _dispatchEvent_2(_select, _Event_1("change"));
  },
  "{ :self :index :value | let select = select(at(columnLists(self), index)); select(select,value); dispatchEvent(select,Event('change')) }",
);

sl.addMethodToExistingType(
  "ColumnBrowser",
  "ColumnBrowser",
  "setEventHandlers",
  ["self", "onChange:/2"],
  function (_self, _onChange_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onChange_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(1, _numberOfColumns_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _addEventListener_3(
        _select_1(_at_2(_columnLists_1(_self), _index)),
        "change",
        function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _columnEdited_3(_self, _index, _onChange_2);
        },
      );
    });
  },
  "{ :self :onChange:/2 | toDo(1, numberOfColumns(self), { :index | addEventListener(select(at(columnLists(self), index)), 'change', { :event | columnEdited(self,index, onChange:/2) }) }) }",
);

sl.addMethodToExistingType(
  "ColumnBrowser",
  "ColumnBrowser",
  "setPath",
  ["self", "path"],
  function (_self, _path) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _path";
      throw new Error(errorMessage);
    } /* Statements */
    _indicesDo_2(_path, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _setColumnValue_3(_self, _index, _at_2(_path, _index));
    });
    return _self;
  },
  "{ :self :path | indicesDo(path, { :index | setColumnValue(self,index, at(path, index)) }); self }",
);

sl.addMethodToExistingType(
  "ColumnBrowser",
  "ColumnBrowser",
  "setStatus",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNotNil_2(_statusText_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _textContent_2(_statusText_1(_self), _aString);
    });
  },
  "{ :self :aString | ifNotNil(statusText(self), { textContent(statusText(self), aString) }) }",
);

sl.extendTypeOrTraitWithMethod(
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
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :self :title :mimeType :withFilter :withStatus :columnProportions :clientKeyBindings :onAccept:/1 :onChange:/2 | initialize(newColumnBrowser(),self, title, mimeType, withFilter, withStatus, columnProportions, clientKeyBindings, onAccept:/1, onChange:/2) }",
);
