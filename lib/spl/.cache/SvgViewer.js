sl.addType(
  false,
  "SvgViewer",
  "SvgViewer",
  ["Object", "View"],
  ["svgPane", "title", "svg"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SvgViewer",
);

sl.copyTraitMethodsToType(
  "View",
  "SvgViewer",
);

sl.addMethodToExistingType(
  "SvgViewer",
  "SvgViewer",
  "createElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _svgPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "svgPane"]])),
    );
    return _appendChild_2(_svgPane_1(_self), _svg_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.svgPane := 'div'.createElement(\n\t\t\tclass: 'svgPane'\n\t\t);\n\t\tself.svgPane.appendChild(self.svg)\n\t}",
);

sl.addMethodToExistingType(
  "SvgViewer",
  "SvgViewer",
  "initialize",
  ["self", "title", "svg"],
  sl.annotateFunction(function (_self, _title, _svg) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _svg";
      throw new Error(errorMessage);
    } /* Statements */
    _title_2(_self, _title);
    _svg_2(_self, _svg);
    _createElements_1(_self);
    return _self;
  }, ["self", "title", "svg"]),
  "{ :self :title :svg |\n\t\tself.title := title;\n\t\tself.svg := svg;\n\t\tself.createElements;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "SvgViewer",
  "SvgViewer",
  "outerElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _svgPane_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.svgPane\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SvgViewer",
  "SvgViewer",
  ["self", "svg"],
  sl.annotateFunction(function (_self, _svg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _svg";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newSvgViewer_0(), _self, _svg);
  }, ["self", "svg"]),
  "{ :self :svg |\n\t\tnewSvgViewer().initialize(self, svg)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "SvgViewer",
  "SvgViewer",
  ["self", "title", "svg", "where"],
  sl.annotateFunction(function (_self, _title, _svg, _where) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _title, _svg, _where";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(
      _self,
      _SvgViewer_2(_title, _svg),
      _questionMark_2(_where, _where_1(_self)),
    );
  }, ["self", "title", "svg", "where"]),
  "{ :self :title :svg :where |\n\t\tself.addFrame(SvgViewer(title, svg), where ? self.where)\n\t}",
);
