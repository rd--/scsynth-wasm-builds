sl.addType(
  false,
  "TableViewer",
  "TableViewer",
  ["Object", "View"],
  ["title", "tablePane"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TableViewer",
);

sl.copyTraitMethodsToType(
  "View",
  "TableViewer",
);

sl.addMethodToExistingType(
  "TableViewer",
  "TableViewer",
  "createElements",
  ["self", "tableData"],
  sl.annotateFunction(function (_self, _tableData) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tableData";
      throw new Error(errorMessage);
    } /* Statements */
    _tablePane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "tablePane"]])),
    );
    return _appendChild_2(
      _tablePane_1(_self),
      _parseHtml_2(_document_1(_window_1(_system)), _asHtml_1(_tableData)),
    );
  }, ["self", "tableData"]),
  "{ :self :tableData | tablePane(self, createElement('div', Record([['class', 'tablePane']]))); appendChild(tablePane(self),parseHtml(document(window(system)),asHtml(tableData))) }",
);

sl.addMethodToExistingType(
  "TableViewer",
  "TableViewer",
  "initialize",
  ["self", "title", "tableData"],
  sl.annotateFunction(function (_self, _title, _tableData) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _tableData";
      throw new Error(errorMessage);
    } /* Statements */
    _title_2(_self, _title);
    _createElements_2(_self, _Table_1(_tableData));
    return _self;
  }, ["self", "title", "tableData"]),
  "{ :self :title :tableData | title(self, title); createElements(self,Table(tableData)); self }",
);

sl.addMethodToExistingType(
  "TableViewer",
  "TableViewer",
  "outerElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tablePane_1(_self);
  }, ["self"]),
  "{ :self | tablePane(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TableViewer",
  "TableViewer",
  ["self", "tableData"],
  sl.annotateFunction(function (_self, _tableData) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tableData";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newTableViewer_0(), _self, _tableData);
  }, ["self", "tableData"]),
  "{ :self :tableData | initialize(newTableViewer(),self, tableData) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "TableViewer",
  "TableViewer",
  ["self", "title", "tableData"],
  sl.annotateFunction(function (_self, _title, _tableData) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _tableData";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_self, _TableViewer_2(_title, _tableData), null);
  }, ["self", "title", "tableData"]),
  "{ :self :title :tableData | addFrame(self,TableViewer(title, tableData), nil) }",
);
