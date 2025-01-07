/*  Requires: DocumentObjectModel EventTarget Graph  */

sl.extendTraitWithMethod(
  "Document",
  "NavigatorSvg",
  "createSvgElement",
  ["self", "tagName"],
  function (_self, _tagName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tagName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _createElementNS_3(_self, "http://www.w3.org/2000/svg", _tagName);
  },
  "{ :self :tagName |\n\t\tself.createElementNS('http://www.w3.org/2000/svg', tagName)\n\t}",
);

sl.extendTraitWithMethod(
  "Document",
  "NavigatorSvg",
  "createSvgElement",
  ["self", "tagName", "attributeDictionary"],
  function (_self, _tagName, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _tagName, _attributeDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _element = _createSvgElement_2(_self, _tagName);
    /* Statements */
    _setAttributesNS_3(_element, null, _attributeDictionary);
    return _element;
  },
  "{ :self :tagName :attributeDictionary |\n\t\tlet element = self.createSvgElement(tagName);\n\t\telement.setAttributesNS(nil, attributeDictionary);\n\t\telement\n\t}",
);

sl.addMethod(
  "String",
  "NavigatorSvg",
  "createSvgElement",
  ["self", "attributeDictionary"],
  function (_self, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _attributeDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _createSvgElement_3(
      _document_1(_window_1(_system)),
      _self,
      _attributeDictionary,
    );
  },
  "{ :self :attributeDictionary |\n\t\tsystem.window.document.createSvgElement(self, attributeDictionary)\n\t}",
);

sl.addMethod(
  "String",
  "NavigatorSvg",
  "parseSvg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _documentElement_1(
      _parseFromString_3(_DOMParser_0(), _self, "image/svg+xml"),
    );
  },
  "{ :self |\n\t\tDOMParser().parseFromString(self, 'image/svg+xml').documentElement\n\t}",
);

sl.addTrait("SVGElement", "NavigatorSvg");

sl.addTraitMethod(
  "SVGElement",
  "NavigatorSvg",
  "transform",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transform;
  },
  "{ :self |\n\t\t<primitive: return _self.transform;>\n\t}",
);

sl.addTraitMethod(
  "SVGElement",
  "NavigatorSvg",
  "transform",
  ["self", "transformList"],
  function (_self, _transformList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _transformList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transform = _transformList;
  },
  "{ :self :transformList |\n\t\t<primitive: return _self.transform = _transformList;>\n\t}",
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

sl.copyTraitToType(
  "Object",
  "SVGCircleElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGCircleElement",
);

sl.copyTraitToType(
  "Node",
  "SVGCircleElement",
);

sl.copyTraitToType(
  "Element",
  "SVGCircleElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGCircleElement",
);

sl.copyTraitToType(
  "SVGGraphicsElement",
  "SVGCircleElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "SVGGElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGGElement",
);

sl.copyTraitToType(
  "Node",
  "SVGGElement",
);

sl.copyTraitToType(
  "Element",
  "SVGGElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGGElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "SVGLineElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGLineElement",
);

sl.copyTraitToType(
  "Node",
  "SVGLineElement",
);

sl.copyTraitToType(
  "Element",
  "SVGLineElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGLineElement",
);

sl.copyTraitToType(
  "SVGGraphicsElement",
  "SVGLineElement",
);

sl.copyTraitToType(
  "SVGGeometryElement",
  "SVGLineElement",
);

sl.addMethod(
  "SVGLineElement",
  "NavigatorSvg",
  "p2",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _setAttribute_3(_self, "x2", _x_1(_aPoint));
    return _setAttribute_3(_self, "y2", _y_1(_aPoint));
  },
  "{ :self :aPoint |\n\t\tself.setAttribute('x2', aPoint.x);\n\t\tself.setAttribute('y2', aPoint.y)\n\t}",
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

sl.copyTraitToType(
  "Object",
  "SVGPathElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGPathElement",
);

sl.copyTraitToType(
  "Node",
  "SVGPathElement",
);

sl.copyTraitToType(
  "Element",
  "SVGPathElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGPathElement",
);

sl.copyTraitToType(
  "SVGGraphicsElement",
  "SVGPathElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "SVGPointList",
);

sl.addMethod(
  "SVGPointList",
  "NavigatorSvg",
  "clear",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clear();
  },
  "{ :self | <primitive: return _self.clear();> }",
);

sl.addMethod(
  "SVGPointList",
  "NavigatorSvg",
  "getItem",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getItem(_index);
  },
  "{ :self :index | <primitive: return _self.getItem(_index);> }",
);

sl.addMethod(
  "SVGPointList",
  "NavigatorSvg",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  },
  "{ :self | <primitive: return _self.length;> }",
);

sl.addMethod(
  "SVGPointList",
  "NavigatorSvg",
  "numberOfItems",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numberOfItems;
  },
  "{ :self | <primitive: return _self.numberOfItems;> }",
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

sl.copyTraitToType(
  "Object",
  "SVGPolygonElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGPolygonElement",
);

sl.copyTraitToType(
  "Node",
  "SVGPolygonElement",
);

sl.copyTraitToType(
  "Element",
  "SVGPolygonElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGPolygonElement",
);

sl.copyTraitToType(
  "SVGGraphicsElement",
  "SVGPolygonElement",
);

sl.copyTraitToType(
  "SVGGeometryElement",
  "SVGPolygonElement",
);

sl.addMethod(
  "SVGPolygonElement",
  "NavigatorSvg",
  "points",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.points;
  },
  "{ :self | <primitive: return _self.points;> }",
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

sl.copyTraitToType(
  "Object",
  "SVGPolylineElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGPolylineElement",
);

sl.copyTraitToType(
  "Node",
  "SVGPolylineElement",
);

sl.copyTraitToType(
  "Element",
  "SVGPolylineElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGPolylineElement",
);

sl.copyTraitToType(
  "SVGGraphicsElement",
  "SVGPolylineElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "SVGRectElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGRectElement",
);

sl.copyTraitToType(
  "Node",
  "SVGRectElement",
);

sl.copyTraitToType(
  "Element",
  "SVGRectElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGRectElement",
);

sl.copyTraitToType(
  "SVGGraphicsElement",
  "SVGRectElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "SVGSVGElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGSVGElement",
);

sl.copyTraitToType(
  "Node",
  "SVGSVGElement",
);

sl.copyTraitToType(
  "Element",
  "SVGSVGElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGSVGElement",
);

sl.copyTraitToType(
  "SVGGraphicsElement",
  "SVGSVGElement",
);

sl.addMethod(
  "SVGSVGElement",
  "NavigatorSvg",
  "createSVGMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createSVGMatrix();
  },
  "{ :self | <primitive: return _self.createSVGMatrix();> }",
);

sl.addMethod(
  "SVGSVGElement",
  "NavigatorSvg",
  "createSVGRect",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createSVGRect();
  },
  "{ :self | <primitive: return _self.createSVGRect();> }",
);

sl.addMethod(
  "SVGSVGElement",
  "NavigatorSvg",
  "createSVGTransform",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createSVGTransform();
  },
  "{ :self | <primitive: return _self.createSVGTransform();> }",
);

sl.addMethod(
  "SVGSVGElement",
  "NavigatorSvg",
  "createSVGTransformFromMatrix",
  ["self", "aMatrix"],
  function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatrix";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createSVGTransformFromMatrix(_aMatrix);
  },
  "{ :self :aMatrix | <primitive: return _self.createSVGTransformFromMatrix(_aMatrix);> }",
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

sl.copyTraitToType(
  "Object",
  "SVGTextElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGTextElement",
);

sl.copyTraitToType(
  "Node",
  "SVGTextElement",
);

sl.copyTraitToType(
  "Element",
  "SVGTextElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGTextElement",
);

sl.copyTraitToType(
  "SVGGraphicsElement",
  "SVGTextElement",
);

sl.copyTraitToType(
  "SVGTextContentElement",
  "SVGTextElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "SVGTextPathElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGTextPathElement",
);

sl.copyTraitToType(
  "Node",
  "SVGTextPathElement",
);

sl.copyTraitToType(
  "Element",
  "SVGTextPathElement",
);

sl.copyTraitToType(
  "SVGElement",
  "SVGTextPathElement",
);

sl.copyTraitToType(
  "SVGGraphicsElement",
  "SVGTextPathElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "SVGTitleElement",
);

sl.copyTraitToType(
  "EventTarget",
  "SVGTitleElement",
);

sl.copyTraitToType(
  "Node",
  "SVGTitleElement",
);

sl.copyTraitToType(
  "Element",
  "SVGTitleElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "SVGTransform",
);

sl.addMethod(
  "SVGTransform",
  "NavigatorSvg",
  "setMatrix",
  ["self", "aMatric"],
  function (_self, _aMatric) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatric";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.setMatrix(_aMatrix);
  },
  "{ :self :aMatric |\n\t\t<primitive: _self.setMatrix(_aMatrix);>\n\t}",
);

sl.addMethod(
  "SVGTransform",
  "NavigatorSvg",
  "setTranslate",
  ["self", "x", "y"],
  function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.setTranslate(_x, _y);
  },
  "{ :self :x :y |\n\t\t<primitive: _self.setTranslate(_x, _y);>\n\t}",
);

sl.addMethod(
  "SVGTransform",
  "NavigatorSvg",
  "setScale",
  ["self", "x", "y"],
  function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.setScale(_x, _y);
  },
  "{ :self :x :y |\n\t\t<primitive: _self.setScale(_x, _y);>\n\t}",
);

sl.addMethod(
  "SVGTransform",
  "NavigatorSvg",
  "setRotate",
  ["self", "angle", "x", "y"],
  function (_self, _angle, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _angle, _x, _y";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.setMatrix(_angle, _x, _y);
  },
  "{ :self :angle :x :y |\n\t\t<primitive: _self.setMatrix(_angle, _x, _y);>\n\t}",
);

sl.addType(
  true,
  "SVGTransformList",
  "NavigatorSvg",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "SVGTransformList",
);

sl.addMethod(
  "SVGTransformList",
  "NavigatorSvg",
  "appendItem",
  ["self", "aTransform"],
  function (_self, _aTransform) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTransform";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.appendItem(_aTransform);
  },
  "{ :self :aTransform | <primitive: return _self.appendItem(_aTransform);> }",
);

sl.addMethod(
  "SVGTransformList",
  "NavigatorSvg",
  "getItem",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getItem(_index);
  },
  "{ :self :index | <primitive: return _self.getItem(_index);> }",
);

sl.addMethod(
  "Graph",
  "NavigatorSvg",
  "asSvgElement",
  ["self", "scale", "projection:/1"],
  function (_self, _scale, _projection_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _projection_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lineWidth = 0.25;
    let _points = _collect_2(
      _asterisk_2(_vertexCoordinates_1(_self), _scale),
      _projection_1,
    );
    let _bbox = _computeBoundingBoxRectangle_1(_points);
    let _dots = _collect_2(_points, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym2 = _assertIsOfSize_2(_each, 2),
        _x = _at_2(__genSym2, 1),
        _y = _at_2(__genSym2, 2);
      /* Statements */
      return _createSvgElement_2(
        "circle",
        Object.fromEntries([["cx", _x], ["cy", _y], [
          "r",
          _asterisk_2(_lineWidth, 2),
        ], ["fill", "black"]]),
      );
    });
    let _lines = _collect_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym3 = _assertIsOfSize_2(_each, 2),
        _i = _at_2(__genSym3, 1),
        _j = _at_2(__genSym3, 2);
      let __genSym4 = _assertIsOfSize_2(_at_2(_points, _i), 2),
        _x1 = _at_2(__genSym4, 1),
        _y1 = _at_2(__genSym4, 2);
      let __genSym5 = _assertIsOfSize_2(_at_2(_points, _j), 2),
        _x2 = _at_2(__genSym5, 1),
        _y2 = _at_2(__genSym5, 2);
      /* Statements */
      return _createSvgElement_2(
        "line",
        Object.fromEntries([
          ["x1", _x1],
          ["y1", _y1],
          ["x2", _x2],
          ["y2", _y2],
          ["stroke", "black"],
          ["stroke-width", _lineWidth],
        ]),
      );
    });
    let _svg = _createSvgElement_2(
      "svg",
      Object.fromEntries([["width", _width_1(_bbox)], [
        "height",
        _height_1(_bbox),
      ], [
        "viewBox",
        _asSvgViewBox_2(
          _bbox,
          Object.fromEntries([["margin", 5], ["precision", 1]]),
        ),
      ], ["preserveAspectRatio", "xMidYMid meet"]]),
    );
    let _group = _createSvgElement_2(
      "g",
      Object.fromEntries([[
        "transform",
        _join_2([
          _format_2("translate(0, %)", [
            _plusSign_2(
              _height_1(_bbox),
              _asterisk_2(2, _at_2(_lowerLeft_1(_bbox), 2)),
            ),
          ]),
          "scale(1, -1)",
        ], " "),
      ]]),
    );
    /* Statements */
    _appendChildren_2(_group, _dots);
    _appendChildren_2(_group, _lines);
    _appendChild_2(_svg, _group);
    return _svg;
  },
  "{ :self :scale :projection:/1 |\n\t\tlet lineWidth = 0.25;\n\t\tlet points = (self.vertexCoordinates * scale).collect(projection:/1);\n\t\tlet bbox = points.computeBoundingBoxRectangle;\n\t\tlet dots = points.collect { :each |\n\t\t\tlet [x, y] = each;\n\t\t\t'circle'.createSvgElement(\n\t\t\t\tcx: x,\n\t\t\t\tcy: y,\n\t\t\t\tr: lineWidth * 2,\n\t\t\t\tfill: 'black'\n\t\t\t)\n\t\t};\n\t\tlet lines = self.edgeList.collect { :each |\n\t\t\tlet [i, j] = each;\n\t\t\tlet [x1, y1] = points[i];\n\t\t\tlet [x2, y2] = points[j];\n\t\t\t'line'.createSvgElement(\n\t\t\t\tx1: x1,\n\t\t\t\ty1: y1,\n\t\t\t\tx2: x2,\n\t\t\t\ty2: y2,\n\t\t\t\tstroke: 'black',\n\t\t\t\t'stroke-width': lineWidth\n\t\t\t)\n\t\t};\n\t\tlet svg = 'svg'.createSvgElement(\n\t\t\twidth: bbox.width,\n\t\t\theight: bbox.height,\n\t\t\tviewBox: bbox.asSvgViewBox(margin: 5, precision: 1),\n\t\t\tpreserveAspectRatio: 'xMidYMid meet' /* Default value */\n\t\t);\n\t\tlet group = 'g'.createSvgElement(\n\t\t\ttransform: [\n\t\t\t\t'translate(0, %)'.format([\n\t\t\t\t\tbbox.height + (2 * bbox.lowerLeft[2])\n\t\t\t\t]),\n\t\t\t\t'scale(1, -1)'\n\t\t\t].join(' ')\n\t\t);\n\t\tgroup.appendChildren(dots);\n\t\tgroup.appendChildren(lines);\n\t\tsvg.appendChild(group);\n\t\tsvg\n\t}",
);
