/* {- Requires: SmallKansas -} */

sl.addType(
  false,
  "PngViewer",
  "PngViewer",
  ["Object", "View"],
  ["pngPane", "title", "pngData", "pngUrl"],
);

sl.copyTraitToType(
  "Object",
  "PngViewer",
);

sl.copyTraitToType(
  "View",
  "PngViewer",
);

sl.addMethod(
  "PngViewer",
  "PngViewer",
  "createElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _img = _createElement_1("img");
    /* Statements */
    _pngPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "pngPane"]])),
    );
    _src_2(_img, _pngUrl_1(_self));
    return _appendChild_2(_pngPane_1(_self), _img);
  },
  "{ :self |\n\t\tlet img = 'img'.createElement;\n\t\tself.pngPane := 'div'.createElement(\n\t\t\tclass: 'pngPane'\n\t\t);\n\t\timg.src := self.pngUrl;\n\t\tself.pngPane.appendChild(img)\n\t}",
);

sl.addMethod(
  "PngViewer",
  "PngViewer",
  "frame",
  ["self", "aFrame"],
  function (_self, _aFrame) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFrame";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addEventListener_3(_aFrame, "close", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _revokeObjectUrl_1(_pngUrl_1(_self));
    });
  },
  "{ :self :aFrame |\n\t\taFrame.addEventListener('close') { :event |\n\t\t\tself.pngUrl.revokeObjectUrl\n\t\t}\n\t}",
);

sl.addMethod(
  "PngViewer",
  "PngViewer",
  "initialize",
  ["self", "title", "pngData"],
  function (_self, _title, _pngData) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _pngData";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _title_2(_self, _title);
    _pngData_2(_self, _pngData);
    _pngUrl_2(_self, _createObjectUrl_1(_pngData));
    _createElements_1(_self);
    return _self;
  },
  "{ :self :title :pngData |\n\t\tself.title := title;\n\t\tself.pngData := pngData;\n\t\tself.pngUrl := pngData.createObjectUrl;\n\t\tself.createElements;\n\t\tself\n\t}",
);

sl.addMethod(
  "PngViewer",
  "PngViewer",
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
    return _pngPane_1(_self);
  },
  "{ :self |\n\t\tself.pngPane\n\t}",
);

sl.addMethod(
  "String",
  "PngViewer",
  "PngViewer",
  ["title", "pngData"],
  function (_title, _pngData) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _title, _pngData";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newPngViewer_0(), _title, _pngData);
  },
  "{ :title :pngData |\n\t\tnewPngViewer().initialize(title, pngData)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "PngViewer",
  "PngViewer",
  ["self", "title", "pngData"],
  function (_self, _title, _pngData) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _pngData";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(_self, _PngViewer_2(_title, _pngData), null);
  },
  "{ :self :title :pngData |\n\t\tself.addFrame(PngViewer(title, pngData), nil)\n\t}",
);
