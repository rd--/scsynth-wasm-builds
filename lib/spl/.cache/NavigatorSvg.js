/*  Requires: DocumentObjectModel EventTarget Graph  */

sl.extendTypeOrTraitWithMethod(
  "@Document",
  "NavigatorSvg",
  "createSvgElement",
  ["self", "tagName"],
  sl.annotateFunction(function (_self, _tagName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tagName";
      throw new Error(errorMessage);
    } /* Statements */
    return _createElementNS_3(_self, "http://www.w3.org/2000/svg", _tagName);
  }, ["self", "tagName"]),
  "{ :self :tagName | createElementNS(self,'http://www.w3.org/2000/svg', tagName) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Document",
  "NavigatorSvg",
  "createSvgElement",
  ["self", "tagName", "attributeDictionary"],
  sl.annotateFunction(function (_self, _tagName, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _tagName, _attributeDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _element = _createSvgElement_2(_self, _tagName);
    /* Statements */
    _setAttributesNS_3(_element, null, _attributeDictionary);
    return _element;
  }, ["self", "tagName", "attributeDictionary"]),
  "{ :self :tagName :attributeDictionary | let element = createSvgElement(self,tagName); setAttributesNS(element,nil, attributeDictionary); element }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "NavigatorSvg",
  "createSvgElement",
  ["self", "attributeDictionary"],
  sl.annotateFunction(function (_self, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _attributeDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _createSvgElement_3(
      _document_1(_window_1(_system)),
      _self,
      _attributeDictionary,
    );
  }, ["self", "attributeDictionary"]),
  "{ :self :attributeDictionary | createSvgElement(document(window(system)),self, attributeDictionary) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "NavigatorSvg",
  "parseSvg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _documentElement_1(
      _parseFromString_3(_DOMParser_0(), _self, "image/svg+xml"),
    );
  }, ["self"]),
  "{ :self | documentElement(parseFromString(DOMParser(),self, 'image/svg+xml')) }",
);

sl.addTrait("SVGElement", "NavigatorSvg");

sl.addMethodToExistingTrait(
  "SVGElement",
  "NavigatorSvg",
  "transform",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transform;
  }, ["self"]),
  "{ :self | <primitive: return _self.transform;>\n }",
);

sl.addMethodToExistingTrait(
  "SVGElement",
  "NavigatorSvg",
  "transform",
  ["self", "transformList"],
  sl.annotateFunction(function (_self, _transformList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _transformList";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transform = _transformList;
  }, ["self", "transformList"]),
  "{ :self :transformList | <primitive: return _self.transform = _transformList;>\n }",
);

sl.addTrait("SVGGeometryElement", "NavigatorSvg");

sl.addTrait("SVGGraphicsElement", "NavigatorSvg");

sl.addTrait("SVGTextContentElement", "NavigatorSvg");

sl.addTrait("SVGTextPositioningElement", "NavigatorSvg");

sl.addType(
  true,
  "SVGCircleElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
    "SVGGeometryElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGCircleElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGCircleElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGCircleElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGCircleElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGCircleElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGCircleElement",
);

sl.copyTraitMethodsToType(
  "SVGGeometryElement",
  "SVGCircleElement",
);

sl.addType(
  true,
  "SVGGElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGGElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGGElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGGElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGGElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGGElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGGElement",
);

sl.addType(
  true,
  "SVGLineElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
    "SVGGeometryElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGLineElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGLineElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGLineElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGLineElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGLineElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGLineElement",
);

sl.copyTraitMethodsToType(
  "SVGGeometryElement",
  "SVGLineElement",
);

sl.addMethodToExistingType(
  "SVGLineElement",
  "NavigatorSvg",
  "p2",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    _setAttribute_3(_self, "x2", _x_1(_aPoint));
    return _setAttribute_3(_self, "y2", _y_1(_aPoint));
  }, ["self", "aPoint"]),
  "{ :self :aPoint | setAttribute(self,'x2', x(aPoint)); setAttribute(self,'y2', y(aPoint)) }",
);

sl.addType(
  true,
  "SVGPathElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
    "SVGGeometryElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGPathElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGPathElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGPathElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGPathElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGPathElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGPathElement",
);

sl.copyTraitMethodsToType(
  "SVGGeometryElement",
  "SVGPathElement",
);

sl.addType(
  true,
  "SVGPointList",
  "NavigatorSvg",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGPointList",
);

sl.addMethodToExistingType(
  "SVGPointList",
  "NavigatorSvg",
  "clear",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clear();
  }, ["self"]),
  "{ :self | <primitive: return _self.clear();>\n }",
);

sl.addMethodToExistingType(
  "SVGPointList",
  "NavigatorSvg",
  "getItem",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getItem(_index);
  }, ["self", "index"]),
  "{ :self :index | <primitive: return _self.getItem(_index);>\n }",
);

sl.addMethodToExistingType(
  "SVGPointList",
  "NavigatorSvg",
  "length",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  }, ["self"]),
  "{ :self | <primitive: return _self.length;>\n }",
);

sl.addMethodToExistingType(
  "SVGPointList",
  "NavigatorSvg",
  "numberOfItems",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numberOfItems;
  }, ["self"]),
  "{ :self | <primitive: return _self.numberOfItems;>\n }",
);

sl.addType(
  true,
  "SVGPolygonElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
    "SVGGeometryElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGPolygonElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGPolygonElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGPolygonElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGPolygonElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGPolygonElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGPolygonElement",
);

sl.copyTraitMethodsToType(
  "SVGGeometryElement",
  "SVGPolygonElement",
);

sl.addMethodToExistingType(
  "SVGPolygonElement",
  "NavigatorSvg",
  "points",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.points;
  }, ["self"]),
  "{ :self | <primitive: return _self.points;>\n }",
);

sl.addType(
  true,
  "SVGPolylineElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
    "SVGGeometryElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGPolylineElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGPolylineElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGPolylineElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGPolylineElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGPolylineElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGPolylineElement",
);

sl.copyTraitMethodsToType(
  "SVGGeometryElement",
  "SVGPolylineElement",
);

sl.addType(
  true,
  "SVGRectElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
    "SVGGeometryElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGRectElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGRectElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGRectElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGRectElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGRectElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGRectElement",
);

sl.copyTraitMethodsToType(
  "SVGGeometryElement",
  "SVGRectElement",
);

sl.addType(
  true,
  "SVGSVGElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGSVGElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGSVGElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGSVGElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGSVGElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGSVGElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGSVGElement",
);

sl.addMethodToExistingType(
  "SVGSVGElement",
  "NavigatorSvg",
  "createSVGMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createSVGMatrix();
  }, ["self"]),
  "{ :self | <primitive: return _self.createSVGMatrix();>\n }",
);

sl.addMethodToExistingType(
  "SVGSVGElement",
  "NavigatorSvg",
  "createSVGRect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createSVGRect();
  }, ["self"]),
  "{ :self | <primitive: return _self.createSVGRect();>\n }",
);

sl.addMethodToExistingType(
  "SVGSVGElement",
  "NavigatorSvg",
  "createSVGTransform",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createSVGTransform();
  }, ["self"]),
  "{ :self | <primitive: return _self.createSVGTransform();>\n }",
);

sl.addMethodToExistingType(
  "SVGSVGElement",
  "NavigatorSvg",
  "createSVGTransformFromMatrix",
  ["self", "aMatrix"],
  sl.annotateFunction(function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatrix";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createSVGTransformFromMatrix(_aMatrix);
  }, ["self", "aMatrix"]),
  "{ :self :aMatrix | <primitive: return _self.createSVGTransformFromMatrix(_aMatrix);>\n }",
);

sl.addType(
  true,
  "SVGTextElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
    "SVGTextContentElement",
    "SVGTextPositioningElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGTextElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGTextElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGTextElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGTextElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGTextElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGTextElement",
);

sl.copyTraitMethodsToType(
  "SVGTextContentElement",
  "SVGTextElement",
);

sl.copyTraitMethodsToType(
  "SVGTextPositioningElement",
  "SVGTextElement",
);

sl.addType(
  true,
  "SVGTextPathElement",
  "NavigatorSvg",
  [
    "Object",
    "EventTarget",
    "Node",
    "Element",
    "SVGElement",
    "SVGGraphicsElement",
    "SVGTextContentElement",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGTextPathElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGTextPathElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGTextPathElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGTextPathElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGTextPathElement",
);

sl.copyTraitMethodsToType(
  "SVGGraphicsElement",
  "SVGTextPathElement",
);

sl.copyTraitMethodsToType(
  "SVGTextContentElement",
  "SVGTextPathElement",
);

sl.addType(
  true,
  "SVGTitleElement",
  "NavigatorSvg",
  ["Object", "EventTarget", "Node", "Element", "SVGElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGTitleElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "SVGTitleElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "SVGTitleElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "SVGTitleElement",
);

sl.copyTraitMethodsToType(
  "SVGElement",
  "SVGTitleElement",
);

sl.addType(
  true,
  "SVGTransform",
  "NavigatorSvg",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGTransform",
);

sl.addMethodToExistingType(
  "SVGTransform",
  "NavigatorSvg",
  "setMatrix",
  ["self", "aMatric"],
  sl.annotateFunction(function (_self, _aMatric) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatric";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.setMatrix(_aMatrix);
  }, ["self", "aMatric"]),
  "{ :self :aMatric | <primitive: _self.setMatrix(_aMatrix);>\n }",
);

sl.addMethodToExistingType(
  "SVGTransform",
  "NavigatorSvg",
  "setTranslate",
  ["self", "x", "y"],
  sl.annotateFunction(function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.setTranslate(_x, _y);
  }, ["self", "x", "y"]),
  "{ :self :x :y | <primitive: _self.setTranslate(_x, _y);>\n }",
);

sl.addMethodToExistingType(
  "SVGTransform",
  "NavigatorSvg",
  "setScale",
  ["self", "x", "y"],
  sl.annotateFunction(function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.setScale(_x, _y);
  }, ["self", "x", "y"]),
  "{ :self :x :y | <primitive: _self.setScale(_x, _y);>\n }",
);

sl.addMethodToExistingType(
  "SVGTransform",
  "NavigatorSvg",
  "setRotate",
  ["self", "angle", "x", "y"],
  sl.annotateFunction(function (_self, _angle, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _angle, _x, _y";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.setMatrix(_angle, _x, _y);
  }, ["self", "angle", "x", "y"]),
  "{ :self :angle :x :y | <primitive: _self.setMatrix(_angle, _x, _y);>\n }",
);

sl.addType(
  true,
  "SVGTransformList",
  "NavigatorSvg",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SVGTransformList",
);

sl.addMethodToExistingType(
  "SVGTransformList",
  "NavigatorSvg",
  "appendItem",
  ["self", "aTransform"],
  sl.annotateFunction(function (_self, _aTransform) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTransform";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.appendItem(_aTransform);
  }, ["self", "aTransform"]),
  "{ :self :aTransform | <primitive: return _self.appendItem(_aTransform);>\n }",
);

sl.addMethodToExistingType(
  "SVGTransformList",
  "NavigatorSvg",
  "getItem",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getItem(_index);
  }, ["self", "index"]),
  "{ :self :index | <primitive: return _self.getItem(_index);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Graph",
  "NavigatorSvg",
  "asSvgElement",
  ["self", "scale", "projection:/1"],
  sl.annotateFunction(function (_self, _scale, _projection_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _projection_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lineWidth = 0.25;
    let _points = _collect_2(
      _asterisk_2(_vertexCoordinates_1(_self), _scale),
      _projection_1,
    );
    let _bbox = _computeBoundingBoxRectangle_1(_points);
    let _dots = _collect_2(
      _points,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL300 = _assertIsOfSize_2(_each, 2);
        let _x = _at_2(__SPL300, 1);
        let _y = _at_2(__SPL300, 2);
        /* Statements */
        return _createSvgElement_2(
          "circle",
          _Record_1([
            ["cx", _x],
            ["cy", _y],
            ["r", _asterisk_2(_lineWidth, 2)],
            ["fill", "black"],
          ]),
        );
      }, ["each"]),
    );
    let _lines = _collect_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL301 = _assertIsOfSize_2(_each, 2);
        let _i = _at_2(__SPL301, 1);
        let _j = _at_2(__SPL301, 2);
        let __SPL302 = _assertIsOfSize_2(_at_2(_points, _i), 2);
        let _x1 = _at_2(__SPL302, 1);
        let _y1 = _at_2(__SPL302, 2);
        let __SPL303 = _assertIsOfSize_2(_at_2(_points, _j), 2);
        let _x2 = _at_2(__SPL303, 1);
        let _y2 = _at_2(__SPL303, 2);
        /* Statements */
        return _createSvgElement_2(
          "line",
          _Record_1([["x1", _x1], ["y1", _y1], ["x2", _x2], ["y2", _y2], [
            "stroke",
            "black",
          ], ["stroke-width", _lineWidth]]),
        );
      }, ["each"]),
    );
    let _svg = _createSvgElement_2(
      "svg",
      _Record_1([["width", _width_1(_bbox)], ["height", _height_1(_bbox)], [
        "viewBox",
        _asSvgViewBox_2(_bbox, _Record_1([["margin", 5], ["precision", 1]])),
      ], ["preserveAspectRatio", "xMidYMid meet"]]),
    );
    let _group = _createSvgElement_2(
      "g",
      _Record_1([[
        "transform",
        _unwords_1([
          _format_2("translate(0, %)", [
            _plusSign_2(
              _height_1(_bbox),
              _asterisk_2(2, _at_2(_lowerLeft_1(_bbox), 2)),
            ),
          ]),
          "scale(1, -1)",
        ]),
      ]]),
    );
    /* Statements */
    _appendChildren_2(_group, _dots);
    _appendChildren_2(_group, _lines);
    _appendChild_2(_svg, _group);
    return _svg;
  }, ["self", "scale", "projection:/1"]),
  "{ :self :scale :projection:/1 | let lineWidth = 0.25; let points = collect((*(vertexCoordinates(self), scale)),projection:/1); let bbox = computeBoundingBoxRectangle(points); let dots = collect(points, { :each | let __SPL300 = assertIsOfSize(each, 2); let x = at(__SPL300, 1); let y = at(__SPL300, 2); createSvgElement('circle', Record([['cx', x], ['cy', y], ['r', *(lineWidth, 2)], ['fill', 'black']])) }); let lines = collect(edgeList(self), { :each | let __SPL301 = assertIsOfSize(each, 2); let i = at(__SPL301, 1); let j = at(__SPL301, 2); let __SPL302 = assertIsOfSize(at(points, i), 2); let x1 = at(__SPL302, 1); let y1 = at(__SPL302, 2); let __SPL303 = assertIsOfSize(at(points, j), 2); let x2 = at(__SPL303, 1); let y2 = at(__SPL303, 2); createSvgElement('line', Record([['x1', x1], ['y1', y1], ['x2', x2], ['y2', y2], ['stroke', 'black'], ['stroke-width', lineWidth]])) }); let svg = createSvgElement('svg', Record([['width', width(bbox)], ['height', height(bbox)], ['viewBox', asSvgViewBox(bbox, Record([['margin', 5], ['precision', 1]]))], ['preserveAspectRatio', 'xMidYMid meet']])); let group = createSvgElement('g', Record([['transform', unwords([format('translate(0, %)',[+(height(bbox), (*(2, at(lowerLeft(bbox), 2))))]), 'scale(1, -1)'])]])); appendChildren(group,dots); appendChildren(group,lines); appendChild(svg,group); svg }",
);
