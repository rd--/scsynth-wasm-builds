/*  Requires: BinaryLargeObject Event EventTarget  */

sl.addTrait("AbstractRange", "DocumentObjectModel");

sl.addTrait("AnimationTimeline", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "AnimationTimeline",
  "DocumentObjectModel",
  "currentTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.currentTime;
  }, ["self"]),
  "{ :self | <primitive: return _self.currentTime;> }",
);

sl.addTrait("CharacterData", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "CharacterData",
  "DocumentObjectModel",
  "data",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.data;
  }, ["self"]),
  "{ :self | <primitive: return _self.data;> }",
);

sl.addMethodToExistingTrait(
  "CharacterData",
  "DocumentObjectModel",
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
  "{ :self | <primitive: return _self.length;> }",
);

sl.addTrait("CssProperties", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "cssText",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssText = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.cssText = _aString;> }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "cssText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssText;
  }, ["self"]),
  "{ :self | <primitive: return _self.cssText;> }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "getPropertyPriority",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getPropertyPriority();
  }, ["self", "name"]),
  "{ :self :name | <primitive: return _self.getPropertyPriority();> }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "getPropertyValue",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getPropertyValue(_name);
  }, ["self", "name"]),
  "{ :self :name | <primitive: return _self.getPropertyValue(_name);> }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
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
  "{ :self | <primitive: return _self.length;> }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "removeProperty",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeProperty(_name);
  }, ["self", "name"]),
  "{ :self :name | <primitive: return _self.removeProperty(_name);> }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "setProperty",
  ["self", "name", "value", "priority"],
  sl.annotateFunction(function (_self, _name, _value, _priority) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _name, _value, _priority";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setProperty(_name, _value, _priority);
  }, ["self", "name", "value", "priority"]),
  "{ :self :name :value :priority | <primitive: return _self.setProperty(_name, _value, _priority);> }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "at",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _getPropertyValue_2(_self, _name);
  }, ["self", "name"]),
  "{ :self :name |\n\t\tself.getPropertyValue(name)\n\t}",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "atPut",
  ["self", "name", "value"],
  sl.annotateFunction(function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(_self, _name, _value, "");
  }, ["self", "name", "value"]),
  "{ :self :name :value |\n\t\tself.setProperty(name, value, '')\n\t}",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "setProperties",
  ["self", "aDictionary"],
  sl.annotateFunction(function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(
      _aDictionary,
      sl.annotateFunction(function (_value, _key) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _value, _key";
          throw new Error(errorMessage);
        } /* Statements */
        return _setProperty_4(_self, _key, _value, "");
      }, ["value", "key"]),
    );
  }, ["self", "aDictionary"]),
  "{ :self :aDictionary |\n\t\taDictionary.withIndexDo { :value :key |\n\t\t\tself.setProperty(key, value, '')\n\t\t}\n\t}",
);

sl.addTrait("CssRule", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "CssRule",
  "DocumentObjectModel",
  "cssText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssText;
  }, ["self"]),
  "{ :self | <primitive: return _self.cssText;> }",
);

sl.addTrait("Document", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "adoptedStyleSheets",
  ["self", "styleSheets"],
  sl.annotateFunction(function (_self, _styleSheets) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _styleSheets";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.adoptedStyleSheets = _styleSheets;
    /* Statements */
    return null;
  }, ["self", "styleSheets"]),
  "{ :self :styleSheets |\n\t\t<primitive: _self.adoptedStyleSheets = _styleSheets;>\n\t\tnil\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "body",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.body;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.body;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createElement",
  ["self", "tagName"],
  sl.annotateFunction(function (_self, _tagName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tagName";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createElement(_tagName);
  }, ["self", "tagName"]),
  "{ :self :tagName |\n\t\t<primitive: return _self.createElement(_tagName);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createElement",
  ["self", "tagName", "attributeDictionary"],
  sl.annotateFunction(function (_self, _tagName, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _tagName, _attributeDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _element = _createElement_2(_self, _tagName);
    /* Statements */
    _setAttributes_2(_element, _attributeDictionary);
    return _element;
  }, ["self", "tagName", "attributeDictionary"]),
  "{ :self :tagName :attributeDictionary |\n\t\tlet element = self.createElement(tagName);\n\t\telement.setAttributes(attributeDictionary);\n\t\telement\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createElementNS",
  ["self", "namespaceURI", "qualifiedName"],
  sl.annotateFunction(function (_self, _namespaceURI, _qualifiedName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _namespaceURI, _qualifiedName";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createElementNS(_namespaceURI, _qualifiedName);
  }, ["self", "namespaceURI", "qualifiedName"]),
  "{ :self :namespaceURI :qualifiedName |\n\t\t<primitive: return _self.createElementNS(_namespaceURI, _qualifiedName);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createRange();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.createRange();>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createTextNode",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createTextNode(_aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.createTextNode(_aString);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "defaultView",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.defaultView;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.defaultView;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "documentElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.documentElement;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.documentElement;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "getElementById",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getElementById(_aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.getElementById(_aString);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "getSelection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.getSelection();>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "importNode",
  ["self", "externalNode", "deep"],
  sl.annotateFunction(function (_self, _externalNode, _deep) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _externalNode, _deep";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.importNode(_externalNode, _deep);
  }, ["self", "externalNode", "deep"]),
  "{ :self :externalNode :deep |\n\t\t<primitive: return _self.importNode(_externalNode, _deep);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "parseHtml",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _template = _createElement_2(_self, "template");
    /* Statements */
    _innerHtml_2(_template, _aString);
    return _if_3(
      _equalsSign_2(_length_1(_childNodes_1(_content_1(_template))), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _firstChild_1(_content_1(_template));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseHtml: not singular node");
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tlet template = self.createElement('template');\n\t\ttemplate.innerHtml(aString);\n\t\t(template.content.childNodes.length = 1).if {\n\t\t\ttemplate.content.firstChild\n\t\t} {\n\t\t\tself.error('parseHtml: not singular node')\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "querySelector",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.querySelector(_aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.querySelector(_aString);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "querySelectorAll",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.querySelectorAll(_aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.querySelectorAll(_aString);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "styleSheetList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return [..._self.styleSheets];
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return [..._self.styleSheets];>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "styleSheets",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.styleSheets;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.styleSheets;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "timeline",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.timeline;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.timeline;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "visibilityState",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.visibilityState;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.visibilityState;>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "createElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _createElement_2(_document_1(_window_1(_system)), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.window.document.createElement(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "createElement",
  ["self", "attributeDictionary"],
  sl.annotateFunction(function (_self, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _attributeDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _createElement_3(
      _document_1(_window_1(_system)),
      _self,
      _attributeDictionary,
    );
  }, ["self", "attributeDictionary"]),
  "{ :self :attributeDictionary |\n\t\tsystem.window.document.createElement(self, attributeDictionary)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "getElementById",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _getElementById_2(_document_1(_window_1(_system)), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.window.document.getElementById(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "querySelector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _querySelector_2(_document_1(_window_1(_system)), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.window.document.querySelector(self)\n\t}",
);

sl.addTrait("DOMMatrixReadOnly", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  "is2D",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.is2D;
  }, ["self"]),
  "{ :self | <primitive: return _self.is2D;> }",
);

sl.addMethodToExistingTrait(
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  "isIdentity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isIdentity;
  }, ["self"]),
  "{ :self | <primitive: return _self.isIdentity;> }",
);

sl.addMethodToExistingTrait(
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  "transformPoint",
  ["self", "point"],
  sl.annotateFunction(function (_self, _point) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _point";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transformPoint(_point);
  }, ["self", "point"]),
  "{ :self :point | <primitive: return _self.transformPoint(_point);> }",
);

sl.addTrait("DOMPointReadOnly", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  }, ["self"]),
  "{ :self | <primitive: return _self.x;> }",
);

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  }, ["self"]),
  "{ :self | <primitive: return _self.y;> }",
);

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "z",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.z;
  }, ["self"]),
  "{ :self | <primitive: return _self.z;> }",
);

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "w",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.w;
  }, ["self"]),
  "{ :self | <primitive: return _self.w;> }",
);

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "matrixTransform",
  ["self", "matrix"],
  sl.annotateFunction(function (_self, _matrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _matrix";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.matrixTransform(_matrix);
  }, ["self", "matrix"]),
  "{ :self :matrix | <primitive: return _self.matrixTransform(_matrix);> }",
);

sl.addTrait("Element", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "append",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.append(..._aList);
  }, ["self", "aList"]),
  "{ :self :aList | <primitive: return _self.append(..._aList);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "attributes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.attributes;
  }, ["self"]),
  "{ :self | <primitive: return _self.attributes;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "childElementCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.childElementCount;
  }, ["self"]),
  "{ :self | <primitive: return _self.childElementCount;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "children",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.children;
  }, ["self"]),
  "{ :self | <primitive: return _self.children;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "classList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.classArray;
  }, ["self"]),
  "{ :self | <primitive: return _self.classArray;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "className",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.className = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.className = _aString;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "className",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.className;
  }, ["self"]),
  "{ :self | <primitive: return _self.className;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "getAttribute",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getAttribute(_name);
  }, ["self", "name"]),
  "{ :self :name | <primitive: return _self.getAttribute(_name);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "getBoundingClientRect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getBoundingClientRect();
  }, ["self"]),
  "{ :self | <primitive: return _self.getBoundingClientRect();> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "hasPointerCapture",
  ["self", "pointerId"],
  sl.annotateFunction(function (_self, _pointerId) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pointerId";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hasPointerCapture(pointerId);
  }, ["self", "pointerId"]),
  "{ :self :pointerId | <primitive: return _self.hasPointerCapture(pointerId);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "id",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.id;
  }, ["self"]),
  "{ :self | <primitive: return _self.id;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "innerHtml",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerHTML = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.innerHTML = _aString;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "innerHtml",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerHTML;
  }, ["self"]),
  "{ :self | <primitive: return _self.innerHTML;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "insertAdjacentElement",
  ["self", "position", "element"],
  sl.annotateFunction(function (_self, _position, _element) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _position, _element";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertAdjacentElement(_position, _element);
  }, ["self", "position", "element"]),
  "{ :self :position :element | <primitive: return _self.insertAdjacentElement(_position, _element);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "insertAdjacentHtml",
  ["self", "position", "text"],
  sl.annotateFunction(function (_self, _position, _text) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _position, _text";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertAdjacentHTML(_position, _text);
  }, ["self", "position", "text"]),
  "{ :self :position :text | <primitive: return _self.insertAdjacentHTML(_position, _text);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "insertAdjacentText",
  ["self", "where", "data"],
  sl.annotateFunction(function (_self, _where, _data) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _where, _data";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertAdjacentText(_where, _data);
  }, ["self", "where", "data"]),
  "{ :self :where :data | <primitive: return _self.insertAdjacentText(_where, _data);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "localName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.localName;
  }, ["self"]),
  "{ :self | <primitive: return _self.localName;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "matches",
  ["self", "selectors"],
  sl.annotateFunction(function (_self, _selectors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _selectors";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.matches(_selectors);
  }, ["self", "selectors"]),
  "{ :self :selectors | <primitive: return _self.matches(_selectors);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "nextElementSibling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nextElementSibling;
  }, ["self"]),
  "{ :self | <primitive: return _self.nextElementSibling;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "outerHtml",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.outerHTML = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.outerHTML = _aString;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "outerHtml",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.outerHTML;
  }, ["self"]),
  "{ :self | <primitive: return _self.outerHTML;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "previousElementSibling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.previousElementSibling;
  }, ["self"]),
  "{ :self | <primitive: return _self.previousElementSibling;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "releasePointerCapture",
  ["self", "pointerId"],
  sl.annotateFunction(function (_self, _pointerId) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pointerId";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.releasePointerCapture(_pointerId);
  }, ["self", "pointerId"]),
  "{ :self :pointerId | <primitive: return _self.releasePointerCapture(_pointerId);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "remove",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.remove();
  }, ["self"]),
  "{ :self | <primitive: return _self.remove();> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "removeAttribute",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeAttribute(_aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.removeAttribute(_aString);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setAttribute",
  ["self", "name", "value"],
  sl.annotateFunction(function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setAttribute(_name, _value);
  }, ["self", "name", "value"]),
  "{ :self :name :value | <primitive: return _self.setAttribute(_name, _value);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setAttributeNS",
  ["self", "namespace", "name", "value"],
  sl.annotateFunction(function (_self, _namespace, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _namespace, _name, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setAttributeNS(_namespace, _name, _value);
  }, ["self", "namespace", "name", "value"]),
  "{ :self :namespace :name :value | <primitive: return _self.setAttributeNS(_namespace, _name, _value);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setPointerCapture",
  ["self", "pointerId"],
  sl.annotateFunction(function (_self, _pointerId) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pointerId";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setPointerCapture(_pointerId);
  }, ["self", "pointerId"]),
  "{ :self :pointerId | <primitive: return _self.setPointerCapture(_pointerId);> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "tagName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tagName;
  }, ["self"]),
  "{ :self | <primitive: return _self.tagName;> }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "removeAllChildren",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _asList_1(_children_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _remove_1(_each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.children.asList.do { :each |\n\t\t\teach.remove\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setAttributes",
  ["self", "aDictionary"],
  sl.annotateFunction(function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(
      _aDictionary,
      sl.annotateFunction(function (_value, _key) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _value, _key";
          throw new Error(errorMessage);
        } /* Statements */
        return _setAttribute_3(_self, _key, _value);
      }, ["value", "key"]),
    );
  }, ["self", "aDictionary"]),
  "{ :self :aDictionary |\n\t\taDictionary.withIndexDo { :value :key |\n\t\t\tself.setAttribute(key, value)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setAttributesNS",
  ["self", "namespace", "aDictionary"],
  sl.annotateFunction(function (_self, _namespace, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _namespace, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(
      _aDictionary,
      sl.annotateFunction(function (_value, _key) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _value, _key";
          throw new Error(errorMessage);
        } /* Statements */
        return _setAttributeNS_4(_self, _namespace, _key, _value);
      }, ["value", "key"]),
    );
  }, ["self", "namespace", "aDictionary"]),
  "{ :self :namespace :aDictionary |\n\t\taDictionary.withIndexDo { :value :key |\n\t\t\tself.setAttributeNS(namespace, key, value)\n\t\t}\n\t}",
);

sl.addTrait("HtmlCollection", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);> }",
);

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
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
  "{ :self | <primitive: return _self.length;> }",
);

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
  "namedItem",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.namedItem(_aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.namedItem(_aString);> }",
);

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Array.from(_self);>\n\t}",
);

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
  "at",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _item_2(_self, _hyphenMinus_2(_anInteger, 1));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.item(anInteger - 1) /* One-indexed */\n\t}",
);

sl.addTrait("HtmlElement", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "accessKey",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.accessKey = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.accessKey = _aString;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "accessKey",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.accessKey;
  }, ["self"]),
  "{ :self | <primitive: return _self.accessKey;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "blur",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.blur();
  }, ["self"]),
  "{ :self | <primitive: return _self.blur();> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "click",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.click();
  }, ["self"]),
  "{ :self | <primitive: return _self.click();> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "contentEditable",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.contentEditable = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.contentEditable = _aString;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "contentEditable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.contentEditable;
  }, ["self"]),
  "{ :self | <primitive: return _self.contentEditable;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "focus",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focus(options);
  }, ["self", "options"]),
  "{ :self :options | <primitive: return _self.focus(options);> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "focus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focus();
  }, ["self"]),
  "{ :self | <primitive: return _self.focus();> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "innerText",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerText = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.innerText = _aString;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "innerText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerText;
  }, ["self"]),
  "{ :self | <primitive: return _self.innerText;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "isContentEditable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isContentEditable;
  }, ["self"]),
  "{ :self | <primitive: return _self.isContentEditable;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "style",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.style;
  }, ["self"]),
  "{ :self | <primitive: return _self.style;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "tabIndex",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tabIndex = _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.tabIndex = _anInteger;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "tabIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tabIndex;
  }, ["self"]),
  "{ :self | <primitive: return _self.tabIndex;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "title",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.title = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.title = _aString;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "title",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.title;
  }, ["self"]),
  "{ :self | <primitive: return _self.title;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "computedStyle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return globalThis.getComputedStyle(_self);
  }, ["self"]),
  "{ :self | <primitive: return globalThis.getComputedStyle(_self);> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "isHtmlElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "crossOrigin",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.crossorigin = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.crossorigin = _aString;> }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "crossOrigin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.crossorigin;
  }, ["self"]),
  "{ :self | <primitive: return _self.crossorigin;> }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "DocumentObjectModel",
  "isHtmlElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTrait("MouseEvent", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "buttons",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.buttons;
  }, ["self"]),
  "{ :self | <primitive: return _self.buttons;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "clientX",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clientX;
  }, ["self"]),
  "{ :self | <primitive: return _self.clientX;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "clientY",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clientY;
  }, ["self"]),
  "{ :self | <primitive: return _self.clientY;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "layerX",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.layerX;
  }, ["self"]),
  "{ :self | <primitive: return _self.layerX;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "layerY",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.layerY;
  }, ["self"]),
  "{ :self | <primitive: return _self.layerY;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "movementX",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.movementX;
  }, ["self"]),
  "{ :self | <primitive: return _self.movementX;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "movementY",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.movementY;
  }, ["self"]),
  "{ :self | <primitive: return _self.movementY;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "offsetX",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.offsetX;
  }, ["self"]),
  "{ :self | <primitive: return _self.offsetX;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "offsetY",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.offsetY;
  }, ["self"]),
  "{ :self | <primitive: return _self.offsetY;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "pageX",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pageX;
  }, ["self"]),
  "{ :self | <primitive: return _self.pageX;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "pageY",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pageY;
  }, ["self"]),
  "{ :self | <primitive: return _self.pageY;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "screenX",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.screenX;
  }, ["self"]),
  "{ :self | <primitive: return _self.screenX;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "screenY",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.screenY;
  }, ["self"]),
  "{ :self | <primitive: return _self.screenY;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  }, ["self"]),
  "{ :self | <primitive: return _self.x;> }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  }, ["self"]),
  "{ :self | <primitive: return _self.y;> }",
);

sl.addTrait("Node", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "appendChild",
  ["self", "aChild"],
  sl.annotateFunction(function (_self, _aChild) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aChild";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.appendChild(_aChild);
  }, ["self", "aChild"]),
  "{ :self :aChild | <primitive: return _self.appendChild(_aChild);> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "childNodes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.childNodes;
  }, ["self"]),
  "{ :self | <primitive: return _self.childNodes;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "cloneNode",
  ["self", "deep"],
  sl.annotateFunction(function (_self, _deep) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _deep";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cloneNode(_deep);
  }, ["self", "deep"]),
  "{ :self :deep | <primitive: return _self.cloneNode(_deep);> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "firstChild",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.firstChild;
  }, ["self"]),
  "{ :self | <primitive: return _self.firstChild;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "nextSibling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nextSibling;
  }, ["self"]),
  "{ :self | <primitive: return _self.nextSibling;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "nodeType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nodeType;
  }, ["self"]),
  "{ :self | <primitive: return _self.nodeType;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "nodeValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nodeValue;
  }, ["self"]),
  "{ :self | <primitive: return _self.nodeValue;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "normalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.normalize();
  }, ["self"]),
  "{ :self | <primitive: return _self.normalize();> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "parentElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parentElement;
  }, ["self"]),
  "{ :self | <primitive: return _self.parentElement;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "parentNode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parentNode;
  }, ["self"]),
  "{ :self | <primitive: return _self.parentNode;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "previousSibling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.previousSibling;
  }, ["self"]),
  "{ :self | <primitive: return _self.previousSibling;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "textContent",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.textContent = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.textContent = _aString;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "textContent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.textContent;
  }, ["self"]),
  "{ :self | <primitive: return _self.textContent;> }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "appendChildren",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _aList,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _appendChild_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\taList.do { :each |\n\t\t\tself.appendChild(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isAllWhiteSpace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isAllWhiteSpace_1(_textContent_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.textContent.isAllWhiteSpace\n\t}",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isAttribute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.nodeType = 2\n\t}",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isCData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 4);
  }, ["self"]),
  "{ :self |\n\t\tself.nodeType = 4\n\t}",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isComment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 8);
  }, ["self"]),
  "{ :self |\n\t\tself.nodeType = 8\n\t}",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isCommentOrWhiteSpace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isComment_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isText_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isAllWhiteSpace_1(_self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isComment | {\n\t\t\tself.isText & {\n\t\t\t\tself.isAllWhiteSpace\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.nodeType = 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 3);
  }, ["self"]),
  "{ :self |\n\t\tself.nodeType = 3\n\t}",
);

sl.addTrait("StyleSheet", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "StyleSheet",
  "DocumentObjectModel",
  "href",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.href;
  }, ["self"]),
  "{ :self | <primitive: return _self.href;> }",
);

sl.addMethodToExistingTrait(
  "StyleSheet",
  "DocumentObjectModel",
  "title",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.title;
  }, ["self"]),
  "{ :self | <primitive: return _self.title;> }",
);

sl.addMethodToExistingTrait(
  "StyleSheet",
  "DocumentObjectModel",
  "type",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  }, ["self"]),
  "{ :self | <primitive: return _self.type;> }",
);

sl.addTrait("Text", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "Text",
  "DocumentObjectModel",
  "assignedSlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.assignedSlot;
  }, ["self"]),
  "{ :self | <primitive: return _self.assignedSlot;> }",
);

sl.addMethodToExistingTrait(
  "Text",
  "DocumentObjectModel",
  "splitText",
  ["self", "offset"],
  sl.annotateFunction(function (_self, _offset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _offset";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splitText(_offset);
  }, ["self", "offset"]),
  "{ :self :offset | <primitive: return _self.splitText(_offset);> }",
);

sl.addMethodToExistingTrait(
  "Text",
  "DocumentObjectModel",
  "wholeText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.wholeText;
  }, ["self"]),
  "{ :self | <primitive: return _self.wholeText;> }",
);

sl.addTrait("UiEvent", "DocumentObjectModel");

sl.addType(
  true,
  "Attr",
  "DocumentObjectModel",
  ["Object", "Node"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Attr",
);

sl.copyTraitMethodsToType(
  "Node",
  "Attr",
);

sl.addMethodToExistingType(
  "Attr",
  "DocumentObjectModel",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  }, ["self"]),
  "{ :self | <primitive: return _self.name;> }",
);

sl.addMethodToExistingType(
  "Attr",
  "DocumentObjectModel",
  "ownerElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ownerElement;
  }, ["self"]),
  "{ :self | <primitive: return _self.ownerElement;> }",
);

sl.addMethodToExistingType(
  "Attr",
  "DocumentObjectModel",
  "value",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  }, ["self"]),
  "{ :self | <primitive: return _self.value;> }",
);

sl.addType(
  true,
  "CanvasGradient",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CanvasGradient",
);

sl.addType(
  true,
  "CanvasPattern",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CanvasPattern",
);

sl.addType(
  true,
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CanvasRenderingContext2D",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "arcTo",
  ["self", "x1", "y1", "x2", "y2", "radius"],
  sl.annotateFunction(function (_self, _x1, _y1, _x2, _y2, _radius) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _x1, _y1, _x2, _y2, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arcTo(_x1, _y1, _x2, _y2, _radius);
  }, ["self", "x1", "y1", "x2", "y2", "radius"]),
  "{ :self :x1 :y1 :x2 :y2 :radius |\n\t\t<primitive: return _self.arcTo(_x1, _y1, _x2, _y2, _radius);>\n\t}",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "ellipse",
  [
    "self",
    "x",
    "y",
    "radiusX",
    "radiusY",
    "rotation",
    "startAngle",
    "endAngle",
  ],
  sl.annotateFunction(
    function (
      _self,
      _x,
      _y,
      _radiusX,
      _radiusY,
      _rotation,
      _startAngle,
      _endAngle,
    ) {
      /* ArityCheck */
      if (arguments.length !== 8) {
        const errorMessage =
          "Arity: expected 8, _self, _x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle";
        throw new Error(errorMessage);
      } /* Primitive */
      return _self.ellipse(
        _x,
        _y,
        _radiusX,
        _radiusY,
        _rotation,
        _startAngle,
        _endAngle,
      );
    },
    [
      "self",
      "x",
      "y",
      "radiusX",
      "radiusY",
      "rotation",
      "startAngle",
      "endAngle",
    ],
  ),
  "{ :self :x :y :radiusX :radiusY :rotation :startAngle :endAngle |\n\t\t<primitive: return _self.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle);>\n\t}",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "fill",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.fill();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.fill();>\n\t}",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "fillStyle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.fillStyle;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.fillStyle;>\n\t}",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "fillStyle",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.fillStyle = _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return _self.fillStyle = _anObject;>\n\t}",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "moveTo",
  ["self", "x", "y"],
  sl.annotateFunction(function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.moveTo(_x, _y);
  }, ["self", "x", "y"]),
  "{ :self :x :y |\n\t\t<primitive: return _self.moveTo(_x, _y);>\n\t}",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "rotate",
  ["self", "angle"],
  sl.annotateFunction(function (_self, _angle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _angle";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rotate(_angle);
  }, ["self", "angle"]),
  "{ :self :angle |\n\t\t<primitive: return _self.rotate(_angle);>\n\t}",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "transform",
  ["self", "a", "b", "c", "d", "e", "f"],
  sl.annotateFunction(function (_self, _a, _b, _c, _d, _e, _f) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _self, _a, _b, _c, _d, _e, _f";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transform(_a, _b, _c, _d, _e, _f);
  }, ["self", "a", "b", "c", "d", "e", "f"]),
  "{ :self :a :b :c :d :e :f |\n\t\t<primitive: return _self.transform(_a, _b, _c, _d, _e, _f);>\n\t}",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "translate",
  ["self", "x", "y"],
  sl.annotateFunction(function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.translate(_x, _y);
  }, ["self", "x", "y"]),
  "{ :self :x :y |\n\t\t<primitive: return _self.translate(_x, _y);>\n\t}",
);

sl.addType(
  true,
  "ClipboardEvent",
  "DocumentObjectModel",
  ["Object", "Event"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ClipboardEvent",
);

sl.copyTraitMethodsToType(
  "Event",
  "ClipboardEvent",
);

sl.addMethodToExistingType(
  "ClipboardEvent",
  "DocumentObjectModel",
  "clipboardData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clipboardData;
  }, ["self"]),
  "{ :self | <primitive: return _self.clipboardData;> }",
);

sl.addType(
  true,
  "CSSFontFaceRule",
  "DocumentObjectModel",
  ["Object", "CssRule"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CSSFontFaceRule",
);

sl.copyTraitMethodsToType(
  "CssRule",
  "CSSFontFaceRule",
);

sl.addMethodToExistingType(
  "CSSFontFaceRule",
  "DocumentObjectModel",
  "style",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.style;
  }, ["self"]),
  "{ :self | <primitive: return _self.style;> }",
);

sl.addType(
  true,
  "CSSRuleList",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CSSRuleList",
);

sl.addMethodToExistingType(
  "CSSRuleList",
  "DocumentObjectModel",
  "item",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_index);
  }, ["self", "index"]),
  "{ :self :index | <primitive: return _self.item(_index);> }",
);

sl.addMethodToExistingType(
  "CSSRuleList",
  "DocumentObjectModel",
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
  "{ :self | <primitive: return _self.length;> }",
);

sl.addMethodToExistingType(
  "CSSRuleList",
  "DocumentObjectModel",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _item_2(_self, _hyphenMinus_2(_index, 1));
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.item(index - 1) /* One-indexed */\n\t}",
);

sl.addMethodToExistingType(
  "CSSRuleList",
  "DocumentObjectModel",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _length_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.length\n\t}",
);

sl.addType(
  true,
  "CSSStyleDeclaration",
  "DocumentObjectModel",
  ["Object", "CssProperties"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CSSStyleDeclaration",
);

sl.copyTraitMethodsToType(
  "CssProperties",
  "CSSStyleDeclaration",
);

sl.addType(
  true,
  "CSS2Properties",
  "DocumentObjectModel",
  ["Object", "CssProperties"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CSS2Properties",
);

sl.copyTraitMethodsToType(
  "CssProperties",
  "CSS2Properties",
);

sl.addType(
  true,
  "CSSStyleRule",
  "DocumentObjectModel",
  ["Object", "CssRule"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CSSStyleRule",
);

sl.copyTraitMethodsToType(
  "CssRule",
  "CSSStyleRule",
);

sl.addType(
  true,
  "CSSStyleSheet",
  "DocumentObjectModel",
  ["Object", "StyleSheet"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CSSStyleSheet",
);

sl.copyTraitMethodsToType(
  "StyleSheet",
  "CSSStyleSheet",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "cssRuleList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return [..._self.cssRules];
  }, ["self"]),
  "{ :self | <primitive: return [..._self.cssRules];> }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "cssRules",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssRules;
  }, ["self"]),
  "{ :self | <primitive: return _self.cssRules;> }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "deleteRule",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.deleteRule(_index);
  }, ["self", "index"]),
  "{ :self :index | <primitive: return _self.deleteRule(_index);> }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "insertRule",
  ["self", "rule", "index"],
  sl.annotateFunction(function (_self, _rule, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rule, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertRule(_rule, _index);
  }, ["self", "rule", "index"]),
  "{ :self :rule :index | <primitive: return _self.insertRule(_rule, _index);> }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "insertRule",
  ["self", "rule"],
  sl.annotateFunction(function (_self, _rule) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rule";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertRule(_rule);
  }, ["self", "rule"]),
  "{ :self :rule | <primitive: return _self.insertRule(_rule);> }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "replace",
  ["self", "text"],
  sl.annotateFunction(function (_self, _text) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _text";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replace(_text);
  }, ["self", "text"]),
  "{ :self :text | <primitive: return _self.replace(_text);> }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "replaceSync",
  ["self", "text"],
  sl.annotateFunction(function (_self, _text) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _text";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replaceSync(_text);
  }, ["self", "text"]),
  "{ :self :text | <primitive: return _self.replaceSync(_text);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "DocumentObjectModel",
  "CssStyleSheet",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return new CSSStyleSheet();
  }, []),
  "{\n\t\t<primitive: return new CSSStyleSheet();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "DocumentObjectModel",
  "CssStyleSheet",
  ["options"],
  sl.annotateFunction(function (_options) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new CSSStyleSheet(_options);
  }, ["options"]),
  "{ :options |\n\t\t<primitive: return new CSSStyleSheet(_options);>\n\t}",
);

sl.addType(
  true,
  "CustomEvent",
  "DocumentObjectModel",
  ["Object", "Event"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CustomEvent",
);

sl.copyTraitMethodsToType(
  "Event",
  "CustomEvent",
);

sl.addMethodToExistingType(
  "CustomEvent",
  "DocumentObjectModel",
  "detail",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.detail;
  }, ["self"]),
  "{ :self | <primitive: return _self.detail;> }",
);

sl.addType(
  true,
  "DataTransfer",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DataTransfer",
);

sl.addMethodToExistingType(
  "DataTransfer",
  "DocumentObjectModel",
  "getData",
  ["self", "format"],
  sl.annotateFunction(function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getData(_format);
  }, ["self", "format"]),
  "{ :self :format |  <primitive: return _self.getData(_format);> }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "CustomEvent",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new CustomEvent(_self, _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\t<primitive: return new CustomEvent(_self, _options);>\n\t}",
);

sl.addType(
  true,
  "DocumentFragment",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DocumentFragment",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "DocumentFragment",
);

sl.copyTraitMethodsToType(
  "Node",
  "DocumentFragment",
);

sl.addType(
  true,
  "DocumentTimeline",
  "DocumentObjectModel",
  ["Object", "AnimationTimeline"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DocumentTimeline",
);

sl.copyTraitMethodsToType(
  "AnimationTimeline",
  "DocumentTimeline",
);

sl.addType(
  true,
  "DOMMatrix",
  "DocumentObjectModel",
  ["Object", "DOMMatrixReadOnly"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DOMMatrix",
);

sl.copyTraitMethodsToType(
  "DOMMatrixReadOnly",
  "DOMMatrix",
);

sl.addType(
  true,
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  ["Object", "DOMMatrixReadOnly"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DOMMatrixReadOnly",
);

sl.copyTraitMethodsToType(
  "DOMMatrixReadOnly",
  "DOMMatrixReadOnly",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DocumentObjectModel",
  "DOMMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMMatrix(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new DOMMatrix(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DocumentObjectModel",
  "DOMMatrixReadOnly",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMMatrixReadOnly(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new DOMMatrixReadOnly(_self);>\n\t}",
);

sl.addType(
  true,
  "DOMParser",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DOMParser",
);

sl.addMethodToExistingType(
  "DOMParser",
  "DocumentObjectModel",
  "parseFromString",
  ["self", "aString", "mimeType"],
  sl.annotateFunction(function (_self, _aString, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _mimeType";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parseFromString(_aString, _mimeType);
  }, ["self", "aString", "mimeType"]),
  "{ :self :aString :mimeType |\n\t\t<primitive: return _self.parseFromString(_aString, _mimeType);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "DocumentObjectModel",
  "DOMParser",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMParser();
  }, []),
  "{\n\t\t<primitive: return new DOMParser();>\n\t}",
);

sl.addType(
  true,
  "DOMPoint",
  "DocumentObjectModel",
  ["Object", "DOMPointReadOnly"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DOMPoint",
);

sl.copyTraitMethodsToType(
  "DOMPointReadOnly",
  "DOMPoint",
);

sl.addType(
  true,
  "DOMPointReadOnly",
  "DocumentObjectModel",
  ["Object", "DOMPointReadOnly"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DOMPointReadOnly",
);

sl.copyTraitMethodsToType(
  "DOMPointReadOnly",
  "DOMPointReadOnly",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "DOMPoint",
  ["self", "y", "z", "w"],
  sl.annotateFunction(function (_self, _y, _z, _w) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _y, _z, _w";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMPoint(_self, _y, _z, _w);
  }, ["self", "y", "z", "w"]),
  "{ :self :y :z :w |\n\t\t<primitive: return new DOMPoint(_self, _y, _z, _w);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "DOMPointReadOnly",
  ["self", "y", "z", "w"],
  sl.annotateFunction(function (_self, _y, _z, _w) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _y, _z, _w";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMPointReadOnly(_self, _y, _z, _w);
  }, ["self", "y", "z", "w"]),
  "{ :self :y :z :w |\n\t\t<primitive: return new DOMPointReadOnly(_self, _y, _z, _w);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "DocumentObjectModel",
  "DOMPointReadOnly",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return DOMPointReadOnly.fromPoint(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return DOMPointReadOnly.fromPoint(_self);>\n\t}",
);

sl.addType(
  true,
  "DocumentRange",
  "DocumentObjectModel",
  ["Object", "AbstractRange"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DocumentRange",
);

sl.copyTraitMethodsToType(
  "AbstractRange",
  "DocumentRange",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "cloneRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cloneRange();
  }, ["self"]),
  "{ :self | <primitive: return _self.cloneRange();> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "commonAncestorContainer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.commonAncestorContainer;
  }, ["self"]),
  "{ :self | <primitive: return _self.commonAncestorContainer;> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "createContextualFragment",
  ["self", "tagString"],
  sl.annotateFunction(function (_self, _tagString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tagString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createContextualFragment(_tagString);
  }, ["self", "tagString"]),
  "{ :self :tagString | <primitive: return _self.createContextualFragment(_tagString);> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "deleteContents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.deleteContents();
  }, ["self"]),
  "{ :self | <primitive: return _self.deleteContents();> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "endContainer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.endContainer;
  }, ["self"]),
  "{ :self | <primitive: return _self.endContainer;> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "endOffset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.endOffset + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.endOffset + 1;> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "insertNode",
  ["self", "aNode"],
  sl.annotateFunction(function (_self, _aNode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNode";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertNode(_aNode);
  }, ["self", "aNode"]),
  "{ :self :aNode | <primitive: return _self.insertNode(_aNode);> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "selectNodeContents",
  ["self", "aNode"],
  sl.annotateFunction(function (_self, _aNode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNode";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectNodeContents(_aNode);
  }, ["self", "aNode"]),
  "{ :self :aNode | <primitive: return _self.selectNodeContents(_aNode);> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "setEnd",
  ["self", "endNode", "endOffset"],
  sl.annotateFunction(function (_self, _endNode, _endOffset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _endNode, _endOffset";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setEnd(_endNode, _endOffset - 1);
  }, ["self", "endNode", "endOffset"]),
  "{ :self :endNode :endOffset | <primitive: return _self.setEnd(_endNode, _endOffset - 1);> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "setStart",
  ["self", "startNode", "startOffset"],
  sl.annotateFunction(function (_self, _startNode, _startOffset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startNode, _startOffset";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setStart(_startNode, _startOffset - 1);
  }, ["self", "startNode", "startOffset"]),
  "{ :self :startNode :startOffset | <primitive: return _self.setStart(_startNode, _startOffset - 1);> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "startContainer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.startContainer;
  }, ["self"]),
  "{ :self | <primitive: return _self.startContainer;> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "startOffset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.startOffset + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.startOffset + 1;> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "toString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString();
  }, ["self"]),
  "{ :self | <primitive: return _self.toString();> }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "isInTextAreaElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isElement_1(_startContainer_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isHTMLTextAreaElement_1(
          _at_2(_childNodes_1(_startContainer_1(_self)), _startOffset_1(_self)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.startContainer.isElement & {\n\t\t\tself.startContainer.childNodes[self.startOffset].isHTMLTextAreaElement\n\t\t}\n\t}",
);

sl.addType(
  true,
  "DOMRect",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DOMRect",
);

sl.addMethodToExistingType(
  "DOMRect",
  "DocumentObjectModel",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  }, ["self"]),
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethodToExistingType(
  "DOMRect",
  "DocumentObjectModel",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  }, ["self"]),
  "{ :self | <primitive: return _self.width;> }",
);

sl.addMethodToExistingType(
  "DOMRect",
  "DocumentObjectModel",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  }, ["self"]),
  "{ :self | <primitive: return _self.x;> }",
);

sl.addMethodToExistingType(
  "DOMRect",
  "DocumentObjectModel",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  }, ["self"]),
  "{ :self | <primitive: return _self.y;> }",
);

sl.addMethodToExistingType(
  "DOMRect",
  "DocumentObjectModel",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["x", "y", "width", "height"];
  }, ["self"]),
  "{ :self |\n\t\t['x' 'y' 'width' 'height']\n\t}",
);

sl.addType(
  true,
  "DOMTokenList",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "DOMTokenList",
);

sl.addMethodToExistingType(
  "DOMTokenList",
  "DocumentObjectModel",
  "add",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.add(_aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.add(_aString);> }",
);

sl.addMethodToExistingType(
  "DOMTokenList",
  "DocumentObjectModel",
  "contains",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.contains(_aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.contains(_aString);> }",
);

sl.addMethodToExistingType(
  "DOMTokenList",
  "DocumentObjectModel",
  "remove",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.remove(_aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.remove(_aString);> }",
);

sl.addType(
  true,
  "HTMLBodyElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLBodyElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLBodyElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLBodyElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLBodyElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLBodyElement",
);

sl.addType(
  true,
  "HTMLButtonElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLButtonElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLButtonElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLButtonElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLButtonElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLButtonElement",
);

sl.addType(
  true,
  "HTMLCanvasElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLCanvasElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLCanvasElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLCanvasElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLCanvasElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLCanvasElement",
);

sl.addMethodToExistingType(
  "HTMLCanvasElement",
  "DocumentObjectModel",
  "getContext",
  ["self", "contextType", "contextAttributes"],
  sl.annotateFunction(function (_self, _contextType, _contextAttributes) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _contextType, _contextAttributes";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getContext(_contextType, _contextAttributes);
  }, ["self", "contextType", "contextAttributes"]),
  "{ :self :contextType :contextAttributes |\n\t\t<primitive: return _self.getContext(_contextType, _contextAttributes);>\n\t}",
);

sl.addMethodToExistingType(
  "HTMLCanvasElement",
  "DocumentObjectModel",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  }, ["self"]),
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethodToExistingType(
  "HTMLCanvasElement",
  "DocumentObjectModel",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  }, ["self"]),
  "{ :self | <primitive: return _self.width;> }",
);

sl.addType(
  true,
  "HTMLCollection",
  "DocumentObjectModel",
  ["Object", "HtmlCollection"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLCollection",
);

sl.copyTraitMethodsToType(
  "HtmlCollection",
  "HTMLCollection",
);

sl.addType(
  true,
  "HTMLDialogElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLDialogElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLDialogElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLDialogElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLDialogElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLDialogElement",
);

sl.addMethodToExistingType(
  "HTMLDialogElement",
  "DocumentObjectModel",
  "close",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.close();
  }, ["self"]),
  "{ :self | <primitive: return _self.close();> }",
);

sl.addMethodToExistingType(
  "HTMLDialogElement",
  "DocumentObjectModel",
  "show",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.show();
  }, ["self"]),
  "{ :self | <primitive: return _self.show();> }",
);

sl.addMethodToExistingType(
  "HTMLDialogElement",
  "DocumentObjectModel",
  "showModal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.showModal();
  }, ["self"]),
  "{ :self | <primitive: return _self.showModal();> }",
);

sl.addType(
  true,
  "HTMLDetailsElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLDetailsElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLDetailsElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLDetailsElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLDetailsElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLDetailsElement",
);

sl.addType(
  true,
  "HTMLDivElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLDivElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLDivElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLDivElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLDivElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLDivElement",
);

sl.addType(
  true,
  "HTMLDocument",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement", "Document"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLDocument",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLDocument",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLDocument",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLDocument",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLDocument",
);

sl.copyTraitMethodsToType(
  "Document",
  "HTMLDocument",
);

sl.addType(
  true,
  "HTMLElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLElement",
);

sl.addType(
  true,
  "HTMLHeadingElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLHeadingElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLHeadingElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLHeadingElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLHeadingElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLHeadingElement",
);

sl.addType(
  true,
  "HTMLHtmlElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLHtmlElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLHtmlElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLHtmlElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLHtmlElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLHtmlElement",
);

sl.addType(
  true,
  "HTMLImageElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLImageElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLImageElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLImageElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLImageElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLImageElement",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "alt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  }, ["self"]),
  "{ :self | <primitive: return _self.value;> }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "complete",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.complete;
  }, ["self"]),
  "{ :self | <primitive: return _self.complete;> }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  }, ["self"]),
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "src",
  ["self", "url"],
  sl.annotateFunction(function (_self, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _url";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.src = _url;
  }, ["self", "url"]),
  "{ :self :url | <primitive: return _self.src = _url;> }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "src",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.src;
  }, ["self"]),
  "{ :self | <primitive: return _self.src;> }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  }, ["self"]),
  "{ :self | <primitive: return _self.width;> }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  }, ["self"]),
  "{ :self | <primitive: return _self.x;> }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  }, ["self"]),
  "{ :self | <primitive: return _self.y;> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "Image",
  ["self", "height"],
  sl.annotateFunction(function (_self, _height) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _height";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Image(_self, _height);
  }, ["self", "height"]),
  "{ :self :height |\n\t\t<primitive: return new Image(_self, _height);>\n\t}",
);

sl.addType(
  true,
  "HTMLInputElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLInputElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLInputElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLInputElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLInputElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLInputElement",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "selectionEnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionEnd;
  }, ["self"]),
  "{ :self | <primitive: return _self.selectionEnd;> }",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "selectionStart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionStart;
  }, ["self"]),
  "{ :self | <primitive: return _self.selectionStart;> }",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "setSelectionRange",
  ["self", "selectionStart", "selectionEnd"],
  sl.annotateFunction(function (_self, _selectionStart, _selectionEnd) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectionStart, _selectionEnd";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setSelectionRange(selectionStart, selectionEnd);
  }, ["self", "selectionStart", "selectionEnd"]),
  "{ :self :selectionStart :selectionEnd |\n\t\t<primitive: return _self.setSelectionRange(selectionStart, selectionEnd);>\n\t}",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "type",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  }, ["self"]),
  "{ :self | <primitive: return _self.type;> }",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "value",
  ["self", "aValue"],
  sl.annotateFunction(function (_self, _aValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aValue";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value = _aValue;
  }, ["self", "aValue"]),
  "{ :self :aValue |\n\t\t<primitive: return _self.value = _aValue;>\n\t}",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  }, ["self"]),
  "{ :self | <primitive: return _self.value;> }",
);

sl.addType(
  true,
  "HTMLLIElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLLIElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLLIElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLLIElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLLIElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLLIElement",
);

sl.addType(
  true,
  "HTMLOptionsCollection",
  "DocumentObjectModel",
  ["Object", "HtmlCollection"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLOptionsCollection",
);

sl.copyTraitMethodsToType(
  "HtmlCollection",
  "HTMLOptionsCollection",
);

sl.addType(
  true,
  "HTMLOptionElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLOptionElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLOptionElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLOptionElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLOptionElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLOptionElement",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "index",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.index;
  }, ["self"]),
  "{ :self | <primitive: return _self.index;> }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "label",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.label;
  }, ["self"]),
  "{ :self | <primitive: return _self.label;> }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "selected",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selected;
  }, ["self"]),
  "{ :self | <primitive: return _self.selected;> }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "text",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.text = _aString;> }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "text",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text;
  }, ["self"]),
  "{ :self | <primitive: return _self.text;> }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "value",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.value = _aString;> }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  }, ["self"]),
  "{ :self | <primitive: return _self.value;> }",
);

sl.addType(
  true,
  "HTMLParagraphElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLParagraphElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLParagraphElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLParagraphElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLParagraphElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLParagraphElement",
);

sl.addType(
  true,
  "HTMLPreElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLPreElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLPreElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLPreElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLPreElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLPreElement",
);

sl.addType(
  true,
  "HTMLSelectElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLSelectElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLSelectElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLSelectElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLSelectElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLSelectElement",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "add",
  ["self", "item", "before"],
  sl.annotateFunction(function (_self, _item, _before) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _item, _before";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.add(_item, _before);
  }, ["self", "item", "before"]),
  "{ :self :item :before | <primitive: return _self.add(_item, _before);> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "labels",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.labels;
  }, ["self"]),
  "{ :self | <primitive: return _self.labels;> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "length",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length = _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.length = _anInteger;> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
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
  "{ :self | <primitive: return _self.length;> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "options",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.options;
  }, ["self"]),
  "{ :self | <primitive: return _self.options;> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "remove",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.remove(_anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.remove(_anInteger);> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "selectedIndex",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectedIndex = _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.selectedIndex = _anInteger;> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "selectedIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectedIndex;
  }, ["self"]),
  "{ :self | <primitive: return _self.selectedIndex;> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "size",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size = _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.size = _anInteger;> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  }, ["self"]),
  "{ :self | <primitive: return _self.size;> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "type",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  }, ["self"]),
  "{ :self | <primitive: return _self.type;> }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "deselect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _selectedIndex_2(_self, -1);
  }, ["self"]),
  "{ :self |\n\t\tself.selectedIndex := -1\n\t}",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "indexOf",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_aString),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return -1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _toDo_3(
            0,
            _hyphenMinus_2(_length_1(_self), 1),
            sl.annotateFunction(function (_index) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _index";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifTrue_2(
                _equalsSign_2(
                  _value_1(_item_2(_options_1(_self), _index)),
                  _aString,
                ),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(_index);
                }, []),
              );
            }, ["index"]),
          );
          return -1;
        }, ["return:/1"]));
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\taString.isEmpty.if {\n\t\t\t-1\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t0.toDo(self.length - 1) { :index |\n\t\t\t\t\t(self.options.item(index).value = aString).ifTrue {\n\t\t\t\t\t\tindex.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t-1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _length_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.length := 0\n\t}",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "select",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _selectedIndex_2(_self, _indexOf_2(_self, _aString));
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.selectedIndex := self.indexOf(aString)\n\t}",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_selectedIndex_1(_self), -1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_1(_item_2(_self, _selectedIndex_1(_self)));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.selectedIndex = -1).if {\n\t\t\t''\n\t\t} {\n\t\t\tself.item(self.selectedIndex).value\n\t\t}\n\t}",
);

sl.addType(
  true,
  "HTMLSpanElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLSpanElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLSpanElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLSpanElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLSpanElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLSpanElement",
);

sl.addType(
  true,
  "HTMLTableElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLTableElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLTableElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLTableElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLTableElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLTableElement",
);

sl.addMethodToExistingType(
  "HTMLTableElement",
  "DocumentObjectModel",
  "caption",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.caption;
  }, ["self"]),
  "{ :self | <primitive: return _self.caption;> }",
);

sl.addMethodToExistingType(
  "HTMLTableElement",
  "DocumentObjectModel",
  "rows",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rows;
  }, ["self"]),
  "{ :self | <primitive: return _self.rows;> }",
);

sl.addMethodToExistingType(
  "HTMLTableElement",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Association",
  "DocumentObjectModel",
  "asHtmlRow",
  ["self", "toString:/1"],
  sl.annotateFunction(function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtmlRow_2(_asList_1(_self), _toString_1);
  }, ["self", "toString:/1"]),
  "{ :self :toString:/1 |\n\t\tself.asList.asHtmlRow(toString:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self", "toString:/1"],
  sl.annotateFunction(function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtmlTable_2(_associations_1(_self), _toString_1);
  }, ["self", "toString:/1"]),
  "{ :self :toString:/1 |\n\t\tself.associations.asHtmlTable(toString:/1)\n\t}",
);

sl.addType(
  true,
  "HTMLTableCellElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLTableCellElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLTableCellElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLTableCellElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLTableCellElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLTableCellElement",
);

sl.addMethodToExistingType(
  "HTMLTableCellElement",
  "DocumentObjectModel",
  "cellIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cellIndex;
  }, ["self"]),
  "{ :self | <primitive: return _self.cellIndex;> }",
);

sl.addType(
  true,
  "HTMLTableColElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLTableColElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLTableColElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLTableColElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLTableColElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLTableColElement",
);

sl.addType(
  true,
  "HTMLTableRowElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLTableRowElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLTableRowElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLTableRowElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLTableRowElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLTableRowElement",
);

sl.addType(
  true,
  "HTMLTableSectionElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLTableSectionElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLTableSectionElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLTableSectionElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLTableSectionElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLTableSectionElement",
);

sl.addType(
  true,
  "HTMLTemplateElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLTemplateElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLTemplateElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLTemplateElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLTemplateElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLTemplateElement",
);

sl.addMethodToExistingType(
  "HTMLTemplateElement",
  "DocumentObjectModel",
  "content",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.content;
  }, ["self"]),
  "{ :self | <primitive: return _self.content;> }",
);

sl.addType(
  true,
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLTextAreaElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLTextAreaElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLTextAreaElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLTextAreaElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLTextAreaElement",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "cols",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cols = _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.cols = _anInteger;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "cols",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cols;
  }, ["self"]),
  "{ :self | <primitive: return _self.cols;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "readOnly",
  ["self", "aBoolean"],
  sl.annotateFunction(function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.readOnly = _aBoolean;
  }, ["self", "aBoolean"]),
  "{ :self :aBoolean | <primitive: return _self.readOnly = _aBoolean;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "readOnly",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.readOnly;
  }, ["self"]),
  "{ :self | <primitive: return _self.readOnly;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "rows",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rows = _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.rows = _anInteger;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "rows",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rows;
  }, ["self"]),
  "{ :self | <primitive: return _self.rows;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "selectionEnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionEnd;
  }, ["self"]),
  "{ :self | <primitive: return _self.selectionEnd;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "selectionStart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionStart;
  }, ["self"]),
  "{ :self | <primitive: return _self.selectionStart;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "setRangeText",
  ["self", "replacement", "startSelection", "endSelection", "selectMode"],
  sl.annotateFunction(
    function (
      _self,
      _replacement,
      _startSelection,
      _endSelection,
      _selectMode,
    ) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _replacement, _startSelection, _endSelection, _selectMode";
        throw new Error(errorMessage);
      } /* Primitive */
      return _self.setRangeText(
        _replacement,
        _startSelection,
        _endSelection,
        _selectMode,
      );
    },
    ["self", "replacement", "startSelection", "endSelection", "selectMode"],
  ),
  "{ :self :replacement :startSelection :endSelection :selectMode | <primitive: return _self.setRangeText(_replacement, _startSelection, _endSelection, _selectMode);> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "setSelectionRange",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setSelectionRange(_i, _j);
  }, ["self", "i", "j"]),
  "{ :self :i :j | <primitive: return _self.setSelectionRange(_i, _j);> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "type",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  }, ["self"]),
  "{ :self | <primitive: return _self.type;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "value",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value = _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.value = _aString;> }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  }, ["self"]),
  "{ :self | <primitive: return _self.value;> }",
);

sl.addType(
  true,
  "HTMLUListElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HTMLUListElement",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "HTMLUListElement",
);

sl.copyTraitMethodsToType(
  "Node",
  "HTMLUListElement",
);

sl.copyTraitMethodsToType(
  "Element",
  "HTMLUListElement",
);

sl.copyTraitMethodsToType(
  "HtmlElement",
  "HTMLUListElement",
);

sl.addType(
  true,
  "ImageBitmap",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ImageBitmap",
);

sl.addMethodToExistingType(
  "ImageBitmap",
  "DocumentObjectModel",
  "close",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.close();
  }, ["self"]),
  "{ :self | <primitive: return _self.close();> }",
);

sl.addMethodToExistingType(
  "ImageBitmap",
  "DocumentObjectModel",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  }, ["self"]),
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethodToExistingType(
  "ImageBitmap",
  "DocumentObjectModel",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  }, ["self"]),
  "{ :self | <primitive: return _self.width;> }",
);

sl.extendTypeOrTraitWithMethod(
  "BinaryLargeObject",
  "DocumentObjectModel",
  "ImageBitmap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return createImageBitmap(_self);
  }, ["self"]),
  "{ :self | <primitive: return createImageBitmap(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "ImageBitmap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return createImageBitmap(_self);
  }, ["self"]),
  "{ :self | <primitive: return createImageBitmap(_self);> }",
);

sl.addType(
  true,
  "ImageData",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ImageData",
);

sl.addMethodToExistingType(
  "ImageData",
  "DocumentObjectModel",
  "colorSpace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.colorSpace;
  }, ["self"]),
  "{ :self | <primitive: return _self.colorSpace;> }",
);

sl.addMethodToExistingType(
  "ImageData",
  "DocumentObjectModel",
  "data",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.data;
  }, ["self"]),
  "{ :self | <primitive: return _self.data;> }",
);

sl.addMethodToExistingType(
  "ImageData",
  "DocumentObjectModel",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  }, ["self"]),
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethodToExistingType(
  "ImageData",
  "DocumentObjectModel",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  }, ["self"]),
  "{ :self | <primitive: return _self.width;> }",
);

sl.addType(
  true,
  "KeyboardEvent",
  "DocumentObjectModel",
  ["Object", "UiEvent", "Event"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "KeyboardEvent",
);

sl.copyTraitMethodsToType(
  "UiEvent",
  "KeyboardEvent",
);

sl.copyTraitMethodsToType(
  "Event",
  "KeyboardEvent",
);

sl.addMethodToExistingType(
  "KeyboardEvent",
  "DocumentObjectModel",
  "ctrlKey",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ctrlKey;
  }, ["self"]),
  "{ :self | <primitive: return _self.ctrlKey;> }",
);

sl.addMethodToExistingType(
  "KeyboardEvent",
  "DocumentObjectModel",
  "key",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.key;
  }, ["self"]),
  "{ :self | <primitive: return _self.key;> }",
);

sl.addMethodToExistingType(
  "KeyboardEvent",
  "DocumentObjectModel",
  "shiftKey",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.shiftKey;
  }, ["self"]),
  "{ :self | <primitive: return _self.shiftKey;> }",
);

sl.addType(
  true,
  "MediaSource",
  "DocumentObjectModel",
  ["Object", "EventTarget"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MediaSource",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "MediaSource",
);

sl.addType(
  true,
  "MouseEvent",
  "DocumentObjectModel",
  ["Object", "UiEvent", "Event", "MouseEvent"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MouseEvent",
);

sl.copyTraitMethodsToType(
  "UiEvent",
  "MouseEvent",
);

sl.copyTraitMethodsToType(
  "Event",
  "MouseEvent",
);

sl.copyTraitMethodsToType(
  "MouseEvent",
  "MouseEvent",
);

sl.addType(
  true,
  "NamedNodeMap",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "NamedNodeMap",
);

sl.addMethodToExistingType(
  "NamedNodeMap",
  "DocumentObjectModel",
  "getNamedItem",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getNamedItem(aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.getNamedItem(aString);> }",
);

sl.addMethodToExistingType(
  "NamedNodeMap",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);> }",
);

sl.addMethodToExistingType(
  "NamedNodeMap",
  "DocumentObjectModel",
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
  "{ :self | <primitive: return _self.length;> }",
);

sl.addType(
  true,
  "NodeList",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "NodeList",
);

sl.addMethodToExistingType(
  "NodeList",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);> }",
);

sl.addMethodToExistingType(
  "NodeList",
  "DocumentObjectModel",
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
  "{ :self | <primitive: return _self.length;> }",
);

sl.addMethodToExistingType(
  "NodeList",
  "DocumentObjectModel",
  "at",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _item_2(_self, _hyphenMinus_2(_anInteger, 1));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.item(anInteger - 1) /* One-indexed */\n\t}",
);

sl.addType(
  true,
  "OffscreenCanvas",
  "DocumentObjectModel",
  ["Object", "EventTarget"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "OffscreenCanvas",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "OffscreenCanvas",
);

sl.addMethodToExistingType(
  "OffscreenCanvas",
  "DocumentObjectModel",
  "getContext",
  ["self", "contextType", "contextAttributes"],
  sl.annotateFunction(function (_self, _contextType, _contextAttributes) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _contextType, _contextAttributes";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getContext(_contextType, _contextAttributes);
  }, ["self", "contextType", "contextAttributes"]),
  "{ :self :contextType :contextAttributes |\n\t\t<primitive: return _self.getContext(_contextType, _contextAttributes);>\n\t}",
);

sl.addType(
  true,
  "OffscreenCanvasRenderingContext2D",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "OffscreenCanvasRenderingContext2D",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "OffscreenCanvas",
  ["self", "height"],
  sl.annotateFunction(function (_self, _height) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _height";
      throw new Error(errorMessage);
    } /* Primitive */
    return new OffscreenCanvas(_self, _height);
  }, ["self", "height"]),
  "{ :self :height |\n\t\t<primitive: return new OffscreenCanvas(_self, _height);>\n\t}",
);

sl.addType(
  true,
  "Path2D",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Path2D",
);

sl.addType(
  true,
  "PointerEvent",
  "DocumentObjectModel",
  ["Object", "UiEvent", "Event", "MouseEvent"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "PointerEvent",
);

sl.copyTraitMethodsToType(
  "UiEvent",
  "PointerEvent",
);

sl.copyTraitMethodsToType(
  "Event",
  "PointerEvent",
);

sl.copyTraitMethodsToType(
  "MouseEvent",
  "PointerEvent",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "altitudeAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.altitudeAngle;
  }, ["self"]),
  "{ :self | <primitive: return _self.altitudeAngle;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "azimuthAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.azimuthAngle;
  }, ["self"]),
  "{ :self | <primitive: return _self.azimuthAngle;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  }, ["self"]),
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "isPrimary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isPrimary;
  }, ["self"]),
  "{ :self | <primitive: return _self.isPrimary;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "pointerId",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pointerId;
  }, ["self"]),
  "{ :self | <primitive: return _self.pointerId;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "pointerType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pointerType;
  }, ["self"]),
  "{ :self | <primitive: return _self.pointerType;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "pressure",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pressure;
  }, ["self"]),
  "{ :self | <primitive: return _self.pressure;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "tangentialPressure",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tangentialPressure;
  }, ["self"]),
  "{ :self | <primitive: return _self.tangentialPressure;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "tiltX",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tiltX;
  }, ["self"]),
  "{ :self | <primitive: return _self.tiltX;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "tiltY",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tiltY;
  }, ["self"]),
  "{ :self | <primitive: return _self.tiltY;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "twist",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.twist;
  }, ["self"]),
  "{ :self | <primitive: return _self.twist;> }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  }, ["self"]),
  "{ :self | <primitive: return _self.width;> }",
);

sl.addType(
  true,
  "Selection",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Selection",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "anchorNode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.anchorNode;
  }, ["self"]),
  "{ :self | <primitive: return _self.anchorNode;> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "anchorOffset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.anchorOffset + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.anchorOffset + 1;> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "collapse",
  ["self", "node", "offset"],
  sl.annotateFunction(function (_self, _node, _offset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _node, _offset";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.collapse(_node, _offset);
  }, ["self", "node", "offset"]),
  "{ :self :node :offset | <primitive: return _self.collapse(_node, _offset);> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "collapseToEnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.collapseToEnd();
  }, ["self"]),
  "{ :self | <primitive: return _self.collapseToEnd();> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "collapseToStart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.collapseToStart();
  }, ["self"]),
  "{ :self | <primitive: return _self.collapseToStart();> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "containsNode",
  ["self", "node", "partialContainment"],
  sl.annotateFunction(function (_self, _node, _partialContainment) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _node, _partialContainment";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.containsNode(_node, _partialContainment);
  }, ["self", "node", "partialContainment"]),
  "{ :self :node :partialContainment | <primitive: return _self.containsNode(_node, _partialContainment);> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "direction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.direction;
  }, ["self"]),
  "{ :self | <primitive: return _self.direction;> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "focusNode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focusNode;
  }, ["self"]),
  "{ :self | <primitive: return _self.focusNode;> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "focusOffset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focusOffset + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.focusOffset + 1;> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "getRangeAt",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getRangeAt(_anInteger - 1);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: return _self.getRangeAt(_anInteger - 1);> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "rangeCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rangeCount;
  }, ["self"]),
  "{ :self | <primitive: return _self.rangeCount;> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "removeAllRanges",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeAllRanges();
  }, ["self"]),
  "{ :self | <primitive: return _self.removeAllRanges();> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "toString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString();
  }, ["self"]),
  "{ :self | <primitive: return _self.toString();> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "type",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  }, ["self"]),
  "{ :self | <primitive: return _self.type;> }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "isCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_type_1(_self), "Caret");
  }, ["self"]),
  "{ :self |\n\t\tself.type = 'Caret'\n\t}",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "isRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_type_1(_self), "Range");
  }, ["self"]),
  "{ :self |\n\t\tself.type = 'Range'\n\t}",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "range",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_rangeCount_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _getRangeAt_2(_self, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Selection>>range: more than one range");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.rangeCount = 1).if {\n\t\t\tself.getRangeAt(1)\n\t\t} {\n\t\t\tself.error('Selection>>range: more than one range')\n\t\t}\n\t}",
);

sl.addType(
  true,
  "Text",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "CharacterData"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Text",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "Text",
);

sl.copyTraitMethodsToType(
  "Node",
  "Text",
);

sl.copyTraitMethodsToType(
  "CharacterData",
  "Text",
);

sl.addMethodToExistingType(
  "Text",
  "DocumentObjectModel",
  "wholeText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.wholeText;
  }, ["self"]),
  "{ :self | <primitive: return _self.wholeText;> }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "document",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.document;
  }, ["self"]),
  "{ :self | <primitive: return _self.document;> }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "getComputedStyle",
  ["self", "element"],
  sl.annotateFunction(function (_self, _element) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _element";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getComputedStyle(_element);
  }, ["self", "element"]),
  "{ :self :element | <primitive: return _self.getComputedStyle(_element);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "getSelection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.getSelection();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "innerHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerHeight;
  }, ["self"]),
  "{ :self | <primitive: return _self.innerHeight;> }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "innerWidth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerWidth;
  }, ["self"]),
  "{ :self | <primitive: return _self.innerWidth;> }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "caretBoundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _getBoundingClientRect_1(_elementAtCaret_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.elementAtCaret.getBoundingClientRect\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "caretBoundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _getBoundingClientRect_1(_elementAtCaret_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.elementAtCaret.getBoundingClientRect\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "caretIsInTextAreaElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInTextAreaElement_1(_range_1(_selection_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.selection.range.isInTextAreaElement\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "caretIsInTextAreaElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInTextAreaElement_1(_range_1(_selection_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.selection.range.isInTextAreaElement\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "caretIsInTextNode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isText_1(_startContainer_1(_range_1(_selection_1(_self))));
  }, ["self"]),
  "{ :self |\n\t\tself.selection.range.startContainer.isText\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "caretIsInTextNode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isText_1(_startContainer_1(_range_1(_selection_1(_self))));
  }, ["self"]),
  "{ :self |\n\t\tself.selection.range.startContainer.isText\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "elementAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _startContainer_1(_range_1(_selection_1(_self)));
    /* Statements */
    return _if_3(
      _isText_1(_c),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _parentElement_1(_c);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isElement_1(_c),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "elementAtCaret: not text or element?");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.selection.range.startContainer;\n\t\tc.isText.if {\n\t\t\tc.parentElement\n\t\t} {\n\t\t\tc.isElement.if {\n\t\t\t\tc\n\t\t\t} {\n\t\t\t\tself.error('elementAtCaret: not text or element?')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "elementAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _startContainer_1(_range_1(_selection_1(_self)));
    /* Statements */
    return _if_3(
      _isText_1(_c),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _parentElement_1(_c);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isElement_1(_c),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "elementAtCaret: not text or element?");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.selection.range.startContainer;\n\t\tc.isText.if {\n\t\t\tc.parentElement\n\t\t} {\n\t\t\tc.isElement.if {\n\t\t\t\tc\n\t\t\t} {\n\t\t\t\tself.error('elementAtCaret: not text or element?')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "insertStringAtCaret",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _insertNode_2(
      _range_1(_selection_1(_self)),
      _createTextNode_2(_document_1(_self), _aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.selection.range.insertNode(\n\t\t\tself.document.createTextNode(\n\t\t\t\taString\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "insertStringAtCaret",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _insertNode_2(
      _range_1(_selection_1(_self)),
      _createTextNode_2(_document_1(_self), _aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.selection.range.insertNode(\n\t\t\tself.document.createTextNode(\n\t\t\t\taString\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "paragraphAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _range_1(_selection_1(_self));
    /* Statements */
    return _if_3(
      _isInTextAreaElement_1(_range),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _textArea = _at_2(
          _childNodes_1(_startContainer_1(_range)),
          _startOffset_1(_range),
        );
        /* Statements */
        return _paragraphAtIndex_2(
          _value_1(_textArea),
          _selectionStart_1(_textArea),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isText_1(_startContainer_1(_range)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _text = _nodeValue_1(_startContainer_1(_range));
            let _index = _startOffset_1(_range);
            /* Statements */
            _ifTrue_2(
              _equalsSign_2(_plusSign_2(_size_1(_text), 1), _index),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _index = _hyphenMinus_2(_index, 1);
              }, []),
            );
            return _if_3(
              _includesIndex_2(_text, _index),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _paragraphAtIndex_2(_text, _index);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(_self, "paragraphAtCaret: invalid index");
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _unimplementedCase_2(_self, "paragraphAtCaret");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet range = self.selection.range;\n\t\trange.isInTextAreaElement.if {\n\t\t\tlet textArea = range.startContainer.childNodes[range.startOffset];\n\t\t\ttextArea.value.paragraphAtIndex(textArea.selectionStart)\n\t\t} {\n\t\t\trange.startContainer.isText.if {\n\t\t\t\tlet text = range.startContainer.nodeValue;\n\t\t\t\tlet index = range.startOffset;\n\t\t\t\t(text.size + 1 = index).ifTrue {\n\t\t\t\t\tindex := index - 1\n\t\t\t\t};\n\t\t\t\ttext.includesIndex(index).if {\n\t\t\t\t\ttext.paragraphAtIndex(index)\n\t\t\t\t} {\n\t\t\t\t\tself.error('paragraphAtCaret: invalid index')\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.unimplementedCase('paragraphAtCaret')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "paragraphAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _range_1(_selection_1(_self));
    /* Statements */
    return _if_3(
      _isInTextAreaElement_1(_range),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _textArea = _at_2(
          _childNodes_1(_startContainer_1(_range)),
          _startOffset_1(_range),
        );
        /* Statements */
        return _paragraphAtIndex_2(
          _value_1(_textArea),
          _selectionStart_1(_textArea),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isText_1(_startContainer_1(_range)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _text = _nodeValue_1(_startContainer_1(_range));
            let _index = _startOffset_1(_range);
            /* Statements */
            _ifTrue_2(
              _equalsSign_2(_plusSign_2(_size_1(_text), 1), _index),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _index = _hyphenMinus_2(_index, 1);
              }, []),
            );
            return _if_3(
              _includesIndex_2(_text, _index),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _paragraphAtIndex_2(_text, _index);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(_self, "paragraphAtCaret: invalid index");
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _unimplementedCase_2(_self, "paragraphAtCaret");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet range = self.selection.range;\n\t\trange.isInTextAreaElement.if {\n\t\t\tlet textArea = range.startContainer.childNodes[range.startOffset];\n\t\t\ttextArea.value.paragraphAtIndex(textArea.selectionStart)\n\t\t} {\n\t\t\trange.startContainer.isText.if {\n\t\t\t\tlet text = range.startContainer.nodeValue;\n\t\t\t\tlet index = range.startOffset;\n\t\t\t\t(text.size + 1 = index).ifTrue {\n\t\t\t\t\tindex := index - 1\n\t\t\t\t};\n\t\t\t\ttext.includesIndex(index).if {\n\t\t\t\t\ttext.paragraphAtIndex(index)\n\t\t\t\t} {\n\t\t\t\t\tself.error('paragraphAtCaret: invalid index')\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.unimplementedCase('paragraphAtCaret')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selectedText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection().toString();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.getSelection().toString();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "selectedText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection().toString();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.getSelection().toString();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selectedTextOrParagraphAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(
      _isEmpty_1(_text),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _paragraphAtCaret_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _text;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet text = self.selectedText;\n\t\ttext.isEmpty.if {\n\t\t\tself.paragraphAtCaret\n\t\t} {\n\t\t\ttext\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "selectedTextOrParagraphAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(
      _isEmpty_1(_text),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _paragraphAtCaret_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _text;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet text = self.selectedText;\n\t\ttext.isEmpty.if {\n\t\t\tself.paragraphAtCaret\n\t\t} {\n\t\t\ttext\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selectedTextOrWordAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(
      _isEmpty_1(_text),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _wordAtCaret_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _text;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet text = self.selectedText;\n\t\ttext.isEmpty.if {\n\t\t\tself.wordAtCaret\n\t\t} {\n\t\t\ttext\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "selectedTextOrWordAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(
      _isEmpty_1(_text),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _wordAtCaret_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _text;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet text = self.selectedText;\n\t\ttext.isEmpty.if {\n\t\t\tself.wordAtCaret\n\t\t} {\n\t\t\ttext\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.getSelection();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "selection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.getSelection();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "wordAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _selection = _selection_1(_self);
    let _text = _textContent_1(_focusNode_1(_selection));
    let _index = _focusOffset_1(_selection);
    /* Statements */
    return _wordAtIndex_2(_text, _index);
  }, ["self"]),
  "{ :self |\n\t\tlet selection = self.selection;\n\t\tlet text = selection.focusNode.textContent;\n\t\tlet index = selection.focusOffset;\n\t\ttext.wordAtIndex(index)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "wordAtCaret",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _selection = _selection_1(_self);
    let _text = _textContent_1(_focusNode_1(_selection));
    let _index = _focusOffset_1(_selection);
    /* Statements */
    return _wordAtIndex_2(_text, _index);
  }, ["self"]),
  "{ :self |\n\t\tlet selection = self.selection;\n\t\tlet text = selection.focusNode.textContent;\n\t\tlet index = selection.focusOffset;\n\t\ttext.wordAtIndex(index)\n\t}",
);

sl.addType(
  true,
  "WebGLRenderingContext",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "WebGLRenderingContext",
);

sl.addType(
  true,
  "XMLDocument",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Document"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "XMLDocument",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "XMLDocument",
);

sl.copyTraitMethodsToType(
  "Node",
  "XMLDocument",
);

sl.copyTraitMethodsToType(
  "Document",
  "XMLDocument",
);
