sl.addType(
  false,
  "TableViewer",
  "TableViewer",
  ["Object", "View"],
  ["title", "tablePane"],
);

sl.copyTraitToType(
  "Object",
  "TableViewer",
);

sl.copyTraitToType(
  "View",
  "TableViewer",
);

sl.addMethod(
  "TableViewer",
  "TableViewer",
  "createElements",
  ["self", "tableData"],
  function (_self, _tableData) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _tableData"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _tablePane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "tablePane"]])),
    );
    return _appendChild_2(_tablePane_1(_self), _asHtmlTable_1(_tableData));
  },
  "{ :self :tableData |\n\t\tself.tablePane := 'div'.createElement(\n\t\t\tclass: 'tablePane'\n\t\t);\n\t\tself.tablePane.appendChild(\n\t\t\ttableData.asHtmlTable\n\t\t)\n\t}",
);

sl.addMethod(
  "TableViewer",
  "TableViewer",
  "initialize",
  ["self", "title", "tableData"],
  function (_self, _title, _tableData) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _title, _tableData"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _title_2(_self, _title);
    _createElements_2(_self, _tableData);
    return _self;
  },
  "{ :self :title :tableData |\n\t\tself.title := title;\n\t\tself.createElements(tableData);\n\t\tself\n\t}",
);

sl.addMethod(
  "TableViewer",
  "TableViewer",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _tablePane_1(_self);
  },
  "{ :self |\n\t\tself.tablePane\n\t}",
);

sl.addMethod(
  "String",
  "TableViewer",
  "TableViewer",
  ["self", "tableData"],
  function (_self, _tableData) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _tableData"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newTableViewer_0(), _self, _tableData);
  },
  "{ :self :tableData |\n\t\tnewTableViewer().initialize(self, tableData)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "TableViewer",
  "TableViewer",
  ["self", "title", "tableData"],
  function (_self, _title, _tableData) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _title, _tableData"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(_self, _TableViewer_2(_title, _tableData), null);
  },
  "{ :self :title :tableData |\n\t\tself.addFrame(TableViewer(title, tableData), nil)\n\t}",
);
