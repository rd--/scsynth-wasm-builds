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
  function (_self) {
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
  },
  "{ :self | svgPane(self, createElement('div', Record([['class', 'svgPane']]))); appendChild(svgPane(self),svg(self)) }",
);

sl.addMethodToExistingType(
  "SvgViewer",
  "SvgViewer",
  "initialize",
  ["self", "title", "svg"],
  function (_self, _title, _svg) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _svg";
      throw new Error(errorMessage);
    } /* Statements */
    _title_2(_self, _title);
    _svg_2(_self, _svg);
    _createElements_1(_self);
    return _self;
  },
  "{ :self :title :svg | title(self, title); svg(self, svg); createElements(self); self }",
);

sl.addMethodToExistingType(
  "SvgViewer",
  "SvgViewer",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _svgPane_1(_self);
  },
  "{ :self | svgPane(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SvgViewer",
  "SvgViewer",
  ["self", "svg"],
  function (_self, _svg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _svg";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newSvgViewer_0(), _self, _svg);
  },
  "{ :self :svg | initialize(newSvgViewer(),self, svg) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "SvgViewer",
  "SvgViewer",
  ["self", "title", "svg", "where"],
  function (_self, _title, _svg, _where) {
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
  },
  "{ :self :title :svg :where | addFrame(self,SvgViewer(title, svg), ?(where, where(self))) }",
);
