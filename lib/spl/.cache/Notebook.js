/*  Requires: SmallKansas SmallProgram Window  */

sl.addType(
  false,
  "Notebook",
  "Notebook",
  ["Object", "View", "SmallKansan"],
  ["smallKansas", "notebookPane", "cells"],
);

sl.copyTraitToType(
  "Object",
  "Notebook",
);

sl.copyTraitToType(
  "View",
  "Notebook",
);

sl.copyTraitToType(
  "SmallKansan",
  "Notebook",
);

sl.addMethod(
  "Notebook",
  "Notebook",
  "addCell",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _cell = _createElement_2(
      "details",
      Object.fromEntries([["class", "notebookCell"], ["open", "true"]]),
    );
    let _summary = _createElement_2(
      "summary",
      Object.fromEntries([["class", "notebookSummary"]]),
    );
    let _cellNumber = _plusSign_2(_count_1(_self), 1);
    let _program = _SmallProgram_4(_smallKansas_1(_self), "", "", "");
    /* Statements */
    _textContent_2(_summary, _asString_1(_cellNumber));
    _addEventListener_3(_program, "evaluate", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _readOnly_2(_program, true);
      return _ifTrue_2(
        _equalsSign_2(_cellNumber, _count_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
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
  "{ :self |\n\t\tlet cell = 'details'.createElement(class: 'notebookCell', open: 'true');\n\t\tlet summary = 'summary'.createElement(class: 'notebookSummary');\n\t\tlet cellNumber = self.count + 1;\n\t\tlet program = self.smallKansas.SmallProgram('', '', '');\n\t\tsummary.textContent := cellNumber.asString;\n\t\tprogram.addEventListener('evaluate') { :event |\n\t\t\tprogram.readOnly := true;\n\t\t\t(cellNumber = self.count).ifTrue {\n\t\t\t\tself.addCell\n\t\t\t}\n\t\t};\n\t\tcell.appendChild(summary);\n\t\tcell.appendChild(program.outerElement);\n\t\tself.cells.addLast(cell);\n\t\tself.notebookPane.appendChild(cell);\n\t\tprogram.focus\n\t}",
);

sl.addMethod(
  "Notebook",
  "Notebook",
  "count",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_cells_1(_self));
  },
  "{ :self |\n\t\tself.cells.size\n\t}",
);

sl.addMethod(
  "Notebook",
  "Notebook",
  "initialize",
  ["self", "smallKansas"],
  function (_self, _smallKansas) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallKansas";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _smallKansas_2(_self, _smallKansas);
    _cells_2(_self, []);
    _notebookPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "notebookPane"]])),
    );
    _addCell_1(_self);
    return _self;
  },
  "{ :self :smallKansas |\n\t\tself.smallKansas := smallKansas;\n\t\tself.cells := [];\n\t\tself.notebookPane := 'div'.createElement(\n\t\t\tclass: 'notebookPane'\n\t\t);\n\t\tself.addCell;\n\t\tself\n\t}",
);

sl.addMethod(
  "Notebook",
  "Notebook",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_smallKansas, _Notebook_1(_smallKansas), _event);
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(\n\t\t\tsmallKansas.Notebook,\n\t\t\tevent\n\t\t)\n\t}",
);

sl.addMethod(
  "Notebook",
  "Notebook",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _notebookPane_1(_self);
  },
  "{ :self |\n\t\tself.notebookPane\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "Notebook",
  "Notebook",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newNotebook_0(), _self);
  },
  "{ :self |\n\t\tnewNotebook().initialize(self)\n\t}",
);
