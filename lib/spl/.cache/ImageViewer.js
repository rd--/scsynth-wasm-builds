/*  Requires: SmallKansas  */

sl.addType(
  false,
  "ImageViewer",
  "ImageViewer",
  ["Object", "View"],
  ["title", "url", "outerElement"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ImageViewer",
);

sl.copyTraitMethodsToType(
  "View",
  "ImageViewer",
);

sl.addMethodToExistingType(
  "ImageViewer",
  "ImageViewer",
  "createElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _img = _createElement_1("img");
    /* Statements */
    _src_2(_img, _url_1(_self));
    _outerElement_2(
      _self,
      _createElement_2("div", _Record_1([["class", "imageViewerPane"]])),
    );
    return _appendChild_2(_outerElement_1(_self), _img);
  },
  "{ :self | let img = createElement('img'); src(img, url(self)); outerElement(self, createElement('div', Record([['class', 'imageViewerPane']]))); appendChild(outerElement(self),img) }",
);

sl.addMethodToExistingType(
  "ImageViewer",
  "ImageViewer",
  "initialize",
  ["self", "title", "url"],
  function (_self, _title, _url) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _url";
      throw new Error(errorMessage);
    } /* Statements */
    _title_2(_self, _title);
    _url_2(_self, _url);
    _createElements_1(_self);
    return _self;
  },
  "{ :self :title :url | title(self, title); url(self, url); createElements(self); self }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ImageViewer",
  "ImageViewer",
  ["title", "url"],
  function (_title, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _title, _url";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newImageViewer_0(), _title, _url);
  },
  "{ :title :url | initialize(newImageViewer(),title, url) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "ImageViewer",
  "ImageViewer",
  ["self", "title", "url"],
  function (_self, _title, _url) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _url";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_self, _ImageViewer_2(_title, _url), _where_1(_self));
  },
  "{ :self :title :url | addFrame(self,ImageViewer(title, url), where(self)) }",
);
