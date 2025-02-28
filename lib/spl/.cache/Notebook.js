/*  Requires: SmallKansas SmallProgram Window  */

sl.addType(
  false,
  "Notebook",
  "Notebook",
  ["Object", "View", "SmallKansan"],
  ["smallKansas", "notebookPane", "cells"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Notebook",
);

sl.copyTraitMethodsToType(
  "View",
  "Notebook",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "Notebook",
);

sl.addMethodToExistingType(
  "Notebook",
  "Notebook",
  "addCell",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _cell = _createElement_2(
      "details",
      _Record_1([["class", "notebookCell"], ["open", "true"]]),
    );
    let _summary = _createElement_2(
      "summary",
      _Record_1([["class", "notebookSummary"]]),
    );
    let _cellNumber = _plusSign_2(_count_1(_self), 1);
    let _program = _SmallProgram_4(_smallKansas_1(_self), "", "", "");
    /* Statements */
    _textContent_2(_summary, _asString_1(_cellNumber));
    _addEventListener_3(_program, "evaluate", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        throw new Error(errorMessage);
      } /* Statements */
      _readOnly_2(_program, true);
      return _ifTrue_2(
        _equalsSign_2(_cellNumber, _count_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _addCell_1(_self);
        },
      );
    });
    _appendChild_2(_cell, _summary);
    _appendChild_2(_cell, _outerElement_1(_program));
    _addLast_2(_cells_1(_self), _cell);
    _appendChild_2(_notebookPane_1(_self), _cell);
    return _focus_1(_program);
  },
  "{ :self | let cell = createElement('details', Record([['class', 'notebookCell'], ['open', 'true']])); let summary = createElement('summary', Record([['class', 'notebookSummary']])); let cellNumber = +(count(self), 1); let program = SmallProgram(smallKansas(self),'', '', ''); textContent(summary, asString(cellNumber)); addEventListener(program, 'evaluate', { :event | readOnly(program, true); ifTrue((=(cellNumber, count(self))), { addCell(self) }) }); appendChild(cell,summary); appendChild(cell,outerElement(program)); addLast(cells(self),cell); appendChild(notebookPane(self),cell); focus(program) }",
);

sl.addMethodToExistingType(
  "Notebook",
  "Notebook",
  "count",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_cells_1(_self));
  },
  "{ :self | size(cells(self)) }",
);

sl.addMethodToExistingType(
  "Notebook",
  "Notebook",
  "initialize",
  ["self", "smallKansas"],
  function (_self, _smallKansas) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallKansas";
      throw new Error(errorMessage);
    } /* Statements */
    _smallKansas_2(_self, _smallKansas);
    _cells_2(_self, []);
    _notebookPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "notebookPane"]])),
    );
    _addCell_1(_self);
    return _self;
  },
  "{ :self :smallKansas | smallKansas(self, smallKansas); cells(self, []); notebookPane(self, createElement('div', Record([['class', 'notebookPane']]))); addCell(self); self }",
);

sl.addMethodToExistingType(
  "Notebook",
  "Notebook",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_smallKansas, _Notebook_1(_smallKansas), _event);
  },
  "{ :self :smallKansas :event | addFrame(smallKansas,Notebook(smallKansas), event) }",
);

sl.addMethodToExistingType(
  "Notebook",
  "Notebook",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _notebookPane_1(_self);
  },
  "{ :self | notebookPane(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "Notebook",
  "Notebook",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newNotebook_0(), _self);
  },
  "{ :self | initialize(newNotebook(),self) }",
);
