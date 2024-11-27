sl.addType(
  false,
  "SvgViewer",
  "SvgViewer",
  ["Object", "View"],
  ["svgPane", "title", "svg"],
);

sl.copyTraitToType(
  "Object",
  "SvgViewer",
);

sl.copyTraitToType(
  "View",
  "SvgViewer",
);

sl.addMethod(
  "SvgViewer",
  "SvgViewer",
  "createElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _svgPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "svgPane"]])),
    );
    return _appendChild_2(_svgPane_1(_self), _svg_1(_self));
  },
  "{ :self |\n\t\tself.svgPane := 'div'.createElement(\n\t\t\tclass: 'svgPane'\n\t\t);\n\t\tself.svgPane.appendChild(self.svg)\n\t}",
);

sl.addMethod(
  "SvgViewer",
  "SvgViewer",
  "initialize",
  ["self", "title", "svg"],
  function (_self, _title, _svg) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _title, _svg"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _title_2(_self, _title);
    _svg_2(_self, _svg);
    _createElements_1(_self);
    return _self;
  },
  "{ :self :title :svg |\n\t\tself.title := title;\n\t\tself.svg := svg;\n\t\tself.createElements;\n\t\tself\n\t}",
);

sl.addMethod(
  "SvgViewer",
  "SvgViewer",
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
    return _svgPane_1(_self);
  },
  "{ :self |\n\t\tself.svgPane\n\t}",
);

sl.addMethod(
  "String",
  "SvgViewer",
  "SvgViewer",
  ["self", "svg"],
  function (_self, _svg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _svg"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newSvgViewer_0(), _self, _svg);
  },
  "{ :self :svg |\n\t\tnewSvgViewer().initialize(self, svg)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SvgViewer",
  "SvgViewer",
  ["self", "title", "svg"],
  function (_self, _title, _svg) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _title, _svg"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(_self, _SvgViewer_2(_title, _svg), null);
  },
  "{ :self :title :svg |\n\t\tself.addFrame(SvgViewer(title, svg), nil)\n\t}",
);
