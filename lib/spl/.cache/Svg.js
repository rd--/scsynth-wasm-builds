/*  Requires: Dom EventTarget Rectangle  */

sl.extendTraitWithMethod(
  "Document",
  "Svg",
  "createSvgElement",
  ["self", "tagName"],
  function (_self, _tagName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tagName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _createElementNS_3(_self, "http://www.w3.org/2000/svg", _tagName);
  },
  "{ :self :tagName |\n\t\tself.createElementNS('http://www.w3.org/2000/svg', tagName)\n\t}",
);

sl.extendTraitWithMethod(
  "Document",
  "Svg",
  "createSvgElement",
  ["self", "tagName", "attributeDictionary"],
  function (_self, _tagName, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _tagName, _attributeDictionary";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _element = _createSvgElement_2(_self, _tagName);
    /* Statements */
    _setAttributesNS_3(_element, null, _attributeDictionary);
    return _element;
  },
  "{ :self :tagName :attributeDictionary |\n\t\tlet element = self.createSvgElement(tagName);\n\t\telement.setAttributesNS(nil, attributeDictionary);\n\t\telement\n\t}",
);

sl.addMethod(
  "String",
  "Svg",
  "createSvgElement",
  ["self", "attributeDictionary"],
  function (_self, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _attributeDictionary";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
  "Svg",
  "parseSvg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _documentElement_1(
      _parseFromString_3(_DOMParser_0(), _self, "image/svg+xml"),
    );
  },
  "{ :self |\n\t\tDOMParser().parseFromString(self, 'image/svg+xml').documentElement\n\t}",
);

sl.addTrait("SVGElement", "Svg");

sl.addTraitMethod(
  "SVGElement",
  "Svg",
  "transform",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.transform;
  },
  "{ :self |\n\t\t<primitive: return _self.transform;>\n\t}",
);

sl.addTraitMethod(
  "SVGElement",
  "Svg",
  "transform",
  ["self", "transformList"],
  function (_self, _transformList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _transformList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.transform = _transformList;
  },
  "{ :self :transformList |\n\t\t<primitive: return _self.transform = _transformList;>\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Svg",
  "viewBoxString",
  ["self", "margin"],
  function (_self, _margin) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _margin";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _unwords_1(
      _collect_2([
        _hyphenMinus_2(_x_1(_lowerLeft_1(_self)), _margin),
        _hyphenMinus_2(_y_1(_lowerLeft_1(_self)), _margin),
        _plusSign_2(_width_1(_self), _asterisk_2(_margin, 2)),
        _plusSign_2(_height_1(_self), _asterisk_2(_margin, 2)),
      ], _asString_1),
    );
  },
  "{ :self :margin |\n\t\t[\n\t\t\tself.lowerLeft.x - margin,\n\t\t\tself.lowerLeft.y - margin,\n\t\t\tself.width + (margin * 2),\n\t\t\tself.height + (margin * 2)\n\t\t].collect(asString:/1).unwords\n\t}",
);

sl.addTrait("SVGGeometryElement", "Svg");

sl.addTrait("SVGGraphicsElement", "Svg");

sl.addTrait("SVGTextContentElement", "Svg");

sl.addTrait("SVGTextPositioningElement", "Svg");

sl.addType(
  true,
  "SVGCircleElement",
  "Svg",
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
  "Svg",
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
  "Svg",
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
  "Svg",
  "p2",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _setAttribute_3(_self, "x2", _x_1(_aPoint));
    return _setAttribute_3(_self, "y2", _y_1(_aPoint));
  },
  "{ :self :aPoint |\n\t\tself.setAttribute('x2', aPoint.x);\n\t\tself.setAttribute('y2', aPoint.y)\n\t}",
);

sl.addType(
  true,
  "SVGPathElement",
  "Svg",
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
  "Svg",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "SVGPointList",
);

sl.addMethod(
  "SVGPointList",
  "Svg",
  "clear",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.clear();
  },
  "{ :self | <primitive: return _self.clear();> }",
);

sl.addMethod(
  "SVGPointList",
  "Svg",
  "getItem",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.getItem(_index);
  },
  "{ :self :index | <primitive: return _self.getItem(_index);> }",
);

sl.addMethod(
  "SVGPointList",
  "Svg",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.length;
  },
  "{ :self | <primitive: return _self.length;> }",
);

sl.addMethod(
  "SVGPointList",
  "Svg",
  "numberOfItems",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.numberOfItems;
  },
  "{ :self | <primitive: return _self.numberOfItems;> }",
);

sl.addType(
  true,
  "SVGPolygonElement",
  "Svg",
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
  "Svg",
  "points",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.points;
  },
  "{ :self | <primitive: return _self.points;> }",
);

sl.addType(
  true,
  "SVGPolylineElement",
  "Svg",
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
  "Svg",
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
  "Svg",
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
  "Svg",
  "createSVGMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.createSVGMatrix();
  },
  "{ :self | <primitive: return _self.createSVGMatrix();> }",
);

sl.addMethod(
  "SVGSVGElement",
  "Svg",
  "createSVGRect",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.createSVGRect();
  },
  "{ :self | <primitive: return _self.createSVGRect();> }",
);

sl.addMethod(
  "SVGSVGElement",
  "Svg",
  "createSVGTransform",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.createSVGTransform();
  },
  "{ :self | <primitive: return _self.createSVGTransform();> }",
);

sl.addMethod(
  "SVGSVGElement",
  "Svg",
  "createSVGTransformFromMatrix",
  ["self", "aMatrix"],
  function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatrix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.createSVGTransformFromMatrix(_aMatrix);
  },
  "{ :self :aMatrix | <primitive: return _self.createSVGTransformFromMatrix(_aMatrix);> }",
);

sl.addType(
  true,
  "SVGTextElement",
  "Svg",
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
  "Svg",
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
  "Svg",
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
  "Svg",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "SVGTransform",
);

sl.addMethod(
  "SVGTransform",
  "Svg",
  "setMatrix",
  ["self", "aMatric"],
  function (_self, _aMatric) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatric";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.setMatrix(_aMatrix);
  },
  "{ :self :aMatric |\n\t\t<primitive: _self.setMatrix(_aMatrix);>\n\t}",
);

sl.addMethod(
  "SVGTransform",
  "Svg",
  "setTranslate",
  ["self", "x", "y"],
  function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.setTranslate(_x, _y);
  },
  "{ :self :x :y |\n\t\t<primitive: _self.setTranslate(_x, _y);>\n\t}",
);

sl.addMethod(
  "SVGTransform",
  "Svg",
  "setScale",
  ["self", "x", "y"],
  function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.setScale(_x, _y);
  },
  "{ :self :x :y |\n\t\t<primitive: _self.setScale(_x, _y);>\n\t}",
);

sl.addMethod(
  "SVGTransform",
  "Svg",
  "setRotate",
  ["self", "angle", "x", "y"],
  function (_self, _angle, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _angle, _x, _y";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.setMatrix(_angle, _x, _y);
  },
  "{ :self :angle :x :y |\n\t\t<primitive: _self.setMatrix(_angle, _x, _y);>\n\t}",
);

sl.addType(
  true,
  "SVGTransformList",
  "Svg",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "SVGTransformList",
);

sl.addMethod(
  "SVGTransformList",
  "Svg",
  "appendItem",
  ["self", "aTransform"],
  function (_self, _aTransform) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTransform";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.appendItem(_aTransform);
  },
  "{ :self :aTransform | <primitive: return _self.appendItem(_aTransform);> }",
);

sl.addMethod(
  "SVGTransformList",
  "Svg",
  "getItem",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.getItem(_index);
  },
  "{ :self :index | <primitive: return _self.getItem(_index);> }",
);
