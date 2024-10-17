sl.addType(
  false,
  "ImageViewer",
  "ImageViewer",
  ["Object", "View"],
  ["title", "url", "outerElement"],
);

sl.copyTraitToType(
  "Object",
  "ImageViewer",
);

sl.copyTraitToType(
  "View",
  "ImageViewer",
);

sl.addMethod(
  "ImageViewer",
  "ImageViewer",
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
    _src_2(_img, _url_1(_self));
    _outerElement_2(
      _self,
      _createElement_2(
        "div",
        Object.fromEntries([["class", "imageViewerPane"]]),
      ),
    );
    return _appendChild_2(_outerElement_1(_self), _img);
  },
  "{ :self |\n\t\tlet img = 'img'.createElement;\n\t\timg.src := self.url;\n\t\tself.outerElement := 'div'.createElement(\n\t\t\tclass: 'imageViewerPane'\n\t\t);\n\t\tself.outerElement.appendChild(img)\n\t}",
);

sl.addMethod(
  "ImageViewer",
  "ImageViewer",
  "initialize",
  ["self", "title", "url"],
  function (_self, _title, _url) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _url";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _title_2(_self, _title);
    _url_2(_self, _url);
    _createElements_1(_self);
    return _self;
  },
  "{ :self :title :url |\n\t\tself.title := title;\n\t\tself.url := url;\n\t\tself.createElements;\n\t\tself\n\t}",
);

sl.addMethod(
  "String",
  "ImageViewer",
  "ImageViewer",
  ["title", "url"],
  function (_title, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _title, _url";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newImageViewer_0(), _title, _url);
  },
  "{ :title :url |\n\t\tnewImageViewer().initialize(title, url)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "ImageViewer",
  "ImageViewer",
  ["self", "title", "url"],
  function (_self, _title, _url) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _url";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(_self, _ImageViewer_2(_title, _url), null);
  },
  "{ :self :title :url |\n\t\tself.addFrame(ImageViewer(title, url), nil)\n\t}",
);
