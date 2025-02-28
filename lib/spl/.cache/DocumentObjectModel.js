/*  Requires: Blob Event EventTarget  */

sl.addTrait("AbstractRange", "DocumentObjectModel");

sl.addTrait("AnimationTimeline", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "AnimationTimeline",
  "DocumentObjectModel",
  "currentTime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.currentTime;
  },
  "{ :self | <primitive: return _self.currentTime;>\n }",
);

sl.addTrait("CharacterData", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "CharacterData",
  "DocumentObjectModel",
  "data",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.data;
  },
  "{ :self | <primitive: return _self.data;>\n }",
);

sl.addMethodToExistingTrait(
  "CharacterData",
  "DocumentObjectModel",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  },
  "{ :self | <primitive: return _self.length;>\n }",
);

sl.addTrait("CssProperties", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "cssText",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssText = _aString;
  },
  "{ :self :aString | <primitive: return _self.cssText = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "cssText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssText;
  },
  "{ :self | <primitive: return _self.cssText;>\n }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "getPropertyPriority",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getPropertyPriority();
  },
  "{ :self :name | <primitive: return _self.getPropertyPriority();>\n }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "getPropertyValue",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getPropertyValue(_name);
  },
  "{ :self :name | <primitive: return _self.getPropertyValue(_name);>\n }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  },
  "{ :self | <primitive: return _self.length;>\n }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "removeProperty",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeProperty(_name);
  },
  "{ :self :name | <primitive: return _self.removeProperty(_name);>\n }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "setProperty",
  ["self", "name", "value", "priority"],
  function (_self, _name, _value, _priority) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _name, _value, _priority";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setProperty(_name, _value, _priority);
  },
  "{ :self :name :value :priority | <primitive: return _self.setProperty(_name, _value, _priority);>\n }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "at",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _getPropertyValue_2(_self, _name);
  },
  "{ :self :name | getPropertyValue(self,name) }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "atPut",
  ["self", "name", "value"],
  function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(_self, _name, _value, "");
  },
  "{ :self :name :value | setProperty(self,name, value, '') }",
);

sl.addMethodToExistingTrait(
  "CssProperties",
  "DocumentObjectModel",
  "setProperties",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(_aDictionary, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        throw new Error(errorMessage);
      } /* Statements */
      return _setProperty_4(_self, _key, _value, "");
    });
  },
  "{ :self :aDictionary | withIndexDo(aDictionary, { :value :key | setProperty(self,key, value, '') }) }",
);

sl.addTrait("CssRule", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "CssRule",
  "DocumentObjectModel",
  "cssText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssText;
  },
  "{ :self | <primitive: return _self.cssText;>\n }",
);

sl.addTrait("Document", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "adoptedStyleSheets",
  ["self", "styleSheets"],
  function (_self, _styleSheets) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _styleSheets";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.adoptedStyleSheets = _styleSheets;
    /* Statements */
    return null;
  },
  "{ :self :styleSheets | <primitive: _self.adoptedStyleSheets = _styleSheets;>\nnil }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "body",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.body;
  },
  "{ :self | <primitive: return _self.body;>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createElement",
  ["self", "tagName"],
  function (_self, _tagName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tagName";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createElement(_tagName);
  },
  "{ :self :tagName | <primitive: return _self.createElement(_tagName);>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createElement",
  ["self", "tagName", "attributeDictionary"],
  function (_self, _tagName, _attributeDictionary) {
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
  },
  "{ :self :tagName :attributeDictionary | let element = createElement(self,tagName); setAttributes(element,attributeDictionary); element }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createElementNS",
  ["self", "namespaceURI", "qualifiedName"],
  function (_self, _namespaceURI, _qualifiedName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _namespaceURI, _qualifiedName";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createElementNS(_namespaceURI, _qualifiedName);
  },
  "{ :self :namespaceURI :qualifiedName | <primitive: return _self.createElementNS(_namespaceURI, _qualifiedName);>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createRange",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createRange();
  },
  "{ :self | <primitive: return _self.createRange();>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "createTextNode",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createTextNode(_aString);
  },
  "{ :self :aString | <primitive: return _self.createTextNode(_aString);>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "defaultView",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.defaultView;
  },
  "{ :self | <primitive: return _self.defaultView;>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "documentElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.documentElement;
  },
  "{ :self | <primitive: return _self.documentElement;>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "getElementById",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getElementById(_aString);
  },
  "{ :self :aString | <primitive: return _self.getElementById(_aString);>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "getSelection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  },
  "{ :self | <primitive: return _self.getSelection();>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "importNode",
  ["self", "externalNode", "deep"],
  function (_self, _externalNode, _deep) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _externalNode, _deep";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.importNode(_externalNode, _deep);
  },
  "{ :self :externalNode :deep | <primitive: return _self.importNode(_externalNode, _deep);>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "parseHtml",
  ["self", "aString"],
  function (_self, _aString) {
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
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _firstChild_1(_content_1(_template));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseHtml: not singular node");
      },
    );
  },
  "{ :self :aString | let template = createElement(self,'template'); innerHtml(template,aString); if((=(length(childNodes(content(template))), 1)), { firstChild(content(template)) }, { error(self,'parseHtml: not singular node') }) }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "querySelector",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.querySelector(_aString);
  },
  "{ :self :aString | <primitive: return _self.querySelector(_aString);>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "querySelectorAll",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.querySelectorAll(_aString);
  },
  "{ :self :aString | <primitive: return _self.querySelectorAll(_aString);>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "styleSheetList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return [..._self.styleSheets];
  },
  "{ :self | <primitive: return [..._self.styleSheets];>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "styleSheets",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.styleSheets;
  },
  "{ :self | <primitive: return _self.styleSheets;>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "timeline",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.timeline;
  },
  "{ :self | <primitive: return _self.timeline;>\n }",
);

sl.addMethodToExistingTrait(
  "Document",
  "DocumentObjectModel",
  "visibilityState",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.visibilityState;
  },
  "{ :self | <primitive: return _self.visibilityState;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "createElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _createElement_2(_document_1(_window_1(_system)), _self);
  },
  "{ :self | createElement(document(window(system)),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "createElement",
  ["self", "attributeDictionary"],
  function (_self, _attributeDictionary) {
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
  },
  "{ :self :attributeDictionary | createElement(document(window(system)),self, attributeDictionary) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "getElementById",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _getElementById_2(_document_1(_window_1(_system)), _self);
  },
  "{ :self | getElementById(document(window(system)),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "querySelector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _querySelector_2(_document_1(_window_1(_system)), _self);
  },
  "{ :self | querySelector(document(window(system)),self) }",
);

sl.addTrait("DOMMatrixReadOnly", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  "is2D",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.is2D;
  },
  "{ :self | <primitive: return _self.is2D;>\n }",
);

sl.addMethodToExistingTrait(
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  "isIdentity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isIdentity;
  },
  "{ :self | <primitive: return _self.isIdentity;>\n }",
);

sl.addMethodToExistingTrait(
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  "transformPoint",
  ["self", "point"],
  function (_self, _point) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _point";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transformPoint(_point);
  },
  "{ :self :point | <primitive: return _self.transformPoint(_point);>\n }",
);

sl.addTrait("DOMPointReadOnly", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  },
  "{ :self | <primitive: return _self.x;>\n }",
);

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  },
  "{ :self | <primitive: return _self.y;>\n }",
);

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "z",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.z;
  },
  "{ :self | <primitive: return _self.z;>\n }",
);

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "w",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.w;
  },
  "{ :self | <primitive: return _self.w;>\n }",
);

sl.addMethodToExistingTrait(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "matrixTransform",
  ["self", "matrix"],
  function (_self, _matrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _matrix";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.matrixTransform(_matrix);
  },
  "{ :self :matrix | <primitive: return _self.matrixTransform(_matrix);>\n }",
);

sl.addTrait("Element", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "append",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.append(..._aList);
  },
  "{ :self :aList | <primitive: return _self.append(..._aList);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "attributes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.attributes;
  },
  "{ :self | <primitive: return _self.attributes;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "childElementCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.childElementCount;
  },
  "{ :self | <primitive: return _self.childElementCount;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "children",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.children;
  },
  "{ :self | <primitive: return _self.children;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "classList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.classArray;
  },
  "{ :self | <primitive: return _self.classArray;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "className",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.className = _aString;
  },
  "{ :self :aString | <primitive: return _self.className = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "className",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.className;
  },
  "{ :self | <primitive: return _self.className;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "getAttribute",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getAttribute(_name);
  },
  "{ :self :name | <primitive: return _self.getAttribute(_name);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "getBoundingClientRect",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getBoundingClientRect();
  },
  "{ :self | <primitive: return _self.getBoundingClientRect();>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "hasPointerCapture",
  ["self", "pointerId"],
  function (_self, _pointerId) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pointerId";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hasPointerCapture(pointerId);
  },
  "{ :self :pointerId | <primitive: return _self.hasPointerCapture(pointerId);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "id",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.id;
  },
  "{ :self | <primitive: return _self.id;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "innerHtml",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerHTML = _aString;
  },
  "{ :self :aString | <primitive: return _self.innerHTML = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "innerHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerHTML;
  },
  "{ :self | <primitive: return _self.innerHTML;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "insertAdjacentElement",
  ["self", "position", "element"],
  function (_self, _position, _element) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _position, _element";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertAdjacentElement(_position, _element);
  },
  "{ :self :position :element | <primitive: return _self.insertAdjacentElement(_position, _element);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "insertAdjacentHtml",
  ["self", "position", "text"],
  function (_self, _position, _text) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _position, _text";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertAdjacentHTML(_position, _text);
  },
  "{ :self :position :text | <primitive: return _self.insertAdjacentHTML(_position, _text);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "insertAdjacentText",
  ["self", "where", "data"],
  function (_self, _where, _data) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _where, _data";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertAdjacentText(_where, _data);
  },
  "{ :self :where :data | <primitive: return _self.insertAdjacentText(_where, _data);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "localName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.localName;
  },
  "{ :self | <primitive: return _self.localName;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "matches",
  ["self", "selectors"],
  function (_self, _selectors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _selectors";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.matches(_selectors);
  },
  "{ :self :selectors | <primitive: return _self.matches(_selectors);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "nextElementSibling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nextElementSibling;
  },
  "{ :self | <primitive: return _self.nextElementSibling;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "outerHtml",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.outerHTML = _aString;
  },
  "{ :self :aString | <primitive: return _self.outerHTML = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "outerHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.outerHTML;
  },
  "{ :self | <primitive: return _self.outerHTML;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "previousElementSibling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.previousElementSibling;
  },
  "{ :self | <primitive: return _self.previousElementSibling;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "releasePointerCapture",
  ["self", "pointerId"],
  function (_self, _pointerId) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pointerId";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.releasePointerCapture(_pointerId);
  },
  "{ :self :pointerId | <primitive: return _self.releasePointerCapture(_pointerId);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "remove",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.remove();
  },
  "{ :self | <primitive: return _self.remove();>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "removeAttribute",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeAttribute(_aString);
  },
  "{ :self :aString | <primitive: return _self.removeAttribute(_aString);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setAttribute",
  ["self", "name", "value"],
  function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setAttribute(_name, _value);
  },
  "{ :self :name :value | <primitive: return _self.setAttribute(_name, _value);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setAttributeNS",
  ["self", "namespace", "name", "value"],
  function (_self, _namespace, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _namespace, _name, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setAttributeNS(_namespace, _name, _value);
  },
  "{ :self :namespace :name :value | <primitive: return _self.setAttributeNS(_namespace, _name, _value);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setPointerCapture",
  ["self", "pointerId"],
  function (_self, _pointerId) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pointerId";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setPointerCapture(_pointerId);
  },
  "{ :self :pointerId | <primitive: return _self.setPointerCapture(_pointerId);>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "tagName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tagName;
  },
  "{ :self | <primitive: return _self.tagName;>\n }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "removeAllChildren",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_asList_1(_children_1(_self)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _remove_1(_each);
    });
  },
  "{ :self | do(asList(children(self)), { :each | remove(each) }) }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setAttributes",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(_aDictionary, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        throw new Error(errorMessage);
      } /* Statements */
      return _setAttribute_3(_self, _key, _value);
    });
  },
  "{ :self :aDictionary | withIndexDo(aDictionary, { :value :key | setAttribute(self,key, value) }) }",
);

sl.addMethodToExistingTrait(
  "Element",
  "DocumentObjectModel",
  "setAttributesNS",
  ["self", "namespace", "aDictionary"],
  function (_self, _namespace, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _namespace, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(_aDictionary, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        throw new Error(errorMessage);
      } /* Statements */
      return _setAttributeNS_4(_self, _namespace, _key, _value);
    });
  },
  "{ :self :namespace :aDictionary | withIndexDo(aDictionary, { :value :key | setAttributeNS(self,namespace, key, value) }) }",
);

sl.addTrait("HtmlCollection", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  },
  "{ :self | <primitive: return _self.length;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
  "namedItem",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.namedItem(_aString);
  },
  "{ :self :aString | <primitive: return _self.namedItem(_aString);>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self);
  },
  "{ :self | <primitive: return Array.from(_self);>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlCollection",
  "DocumentObjectModel",
  "at",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _item_2(_self, _hyphenMinus_2(_anInteger, 1));
  },
  "{ :self :anInteger | item(self,-(anInteger, 1)) }",
);

sl.addTrait("HtmlElement", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "accessKey",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.accessKey = _aString;
  },
  "{ :self :aString | <primitive: return _self.accessKey = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "accessKey",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.accessKey;
  },
  "{ :self | <primitive: return _self.accessKey;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "blur",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.blur();
  },
  "{ :self | <primitive: return _self.blur();>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "click",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.click();
  },
  "{ :self | <primitive: return _self.click();>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "contentEditable",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.contentEditable = _aString;
  },
  "{ :self :aString | <primitive: return _self.contentEditable = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "contentEditable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.contentEditable;
  },
  "{ :self | <primitive: return _self.contentEditable;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "focus",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focus(options);
  },
  "{ :self :options | <primitive: return _self.focus(options);>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "focus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focus();
  },
  "{ :self | <primitive: return _self.focus();>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "innerText",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerText = _aString;
  },
  "{ :self :aString | <primitive: return _self.innerText = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "innerText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerText;
  },
  "{ :self | <primitive: return _self.innerText;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "isContentEditable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isContentEditable;
  },
  "{ :self | <primitive: return _self.isContentEditable;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "style",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.style;
  },
  "{ :self | <primitive: return _self.style;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "tabIndex",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tabIndex = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.tabIndex = _anInteger;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "tabIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tabIndex;
  },
  "{ :self | <primitive: return _self.tabIndex;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "title",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.title = _aString;
  },
  "{ :self :aString | <primitive: return _self.title = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.title;
  },
  "{ :self | <primitive: return _self.title;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "computedStyle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return globalThis.getComputedStyle(_self);
  },
  "{ :self | <primitive: return globalThis.getComputedStyle(_self);>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "isHtmlElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "crossOrigin",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.crossorigin = _aString;
  },
  "{ :self :aString | <primitive: return _self.crossorigin = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "HtmlElement",
  "DocumentObjectModel",
  "crossOrigin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.crossorigin;
  },
  "{ :self | <primitive: return _self.crossorigin;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "DocumentObjectModel",
  "isHtmlElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTrait("MouseEvent", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "buttons",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.buttons;
  },
  "{ :self | <primitive: return _self.buttons;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "clientX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clientX;
  },
  "{ :self | <primitive: return _self.clientX;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "clientY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clientY;
  },
  "{ :self | <primitive: return _self.clientY;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "layerX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.layerX;
  },
  "{ :self | <primitive: return _self.layerX;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "layerY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.layerY;
  },
  "{ :self | <primitive: return _self.layerY;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "movementX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.movementX;
  },
  "{ :self | <primitive: return _self.movementX;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "movementY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.movementY;
  },
  "{ :self | <primitive: return _self.movementY;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "offsetX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.offsetX;
  },
  "{ :self | <primitive: return _self.offsetX;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "offsetY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.offsetY;
  },
  "{ :self | <primitive: return _self.offsetY;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "pageX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pageX;
  },
  "{ :self | <primitive: return _self.pageX;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "pageY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pageY;
  },
  "{ :self | <primitive: return _self.pageY;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "screenX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.screenX;
  },
  "{ :self | <primitive: return _self.screenX;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "screenY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.screenY;
  },
  "{ :self | <primitive: return _self.screenY;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  },
  "{ :self | <primitive: return _self.x;>\n }",
);

sl.addMethodToExistingTrait(
  "MouseEvent",
  "DocumentObjectModel",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  },
  "{ :self | <primitive: return _self.y;>\n }",
);

sl.addTrait("Node", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "appendChild",
  ["self", "aChild"],
  function (_self, _aChild) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aChild";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.appendChild(_aChild);
  },
  "{ :self :aChild | <primitive: return _self.appendChild(_aChild);>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "childNodes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.childNodes;
  },
  "{ :self | <primitive: return _self.childNodes;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "cloneNode",
  ["self", "deep"],
  function (_self, _deep) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _deep";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cloneNode(_deep);
  },
  "{ :self :deep | <primitive: return _self.cloneNode(_deep);>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "firstChild",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.firstChild;
  },
  "{ :self | <primitive: return _self.firstChild;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "nextSibling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nextSibling;
  },
  "{ :self | <primitive: return _self.nextSibling;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "nodeType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nodeType;
  },
  "{ :self | <primitive: return _self.nodeType;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "nodeValue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nodeValue;
  },
  "{ :self | <primitive: return _self.nodeValue;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "normalize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.normalize();
  },
  "{ :self | <primitive: return _self.normalize();>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "parentElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parentElement;
  },
  "{ :self | <primitive: return _self.parentElement;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "parentNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parentNode;
  },
  "{ :self | <primitive: return _self.parentNode;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "previousSibling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.previousSibling;
  },
  "{ :self | <primitive: return _self.previousSibling;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "textContent",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.textContent = _aString;
  },
  "{ :self :aString | <primitive: return _self.textContent = _aString;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "textContent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.textContent;
  },
  "{ :self | <primitive: return _self.textContent;>\n }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "appendChildren",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_aList, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _appendChild_2(_self, _each);
    });
  },
  "{ :self :aList | do(aList, { :each | appendChild(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isAllWhiteSpace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isAllWhiteSpace_1(_textContent_1(_self));
  },
  "{ :self | isAllWhiteSpace(textContent(self)) }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isAttribute",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 2);
  },
  "{ :self | =(nodeType(self), 2) }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isCData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 4);
  },
  "{ :self | =(nodeType(self), 4) }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isComment",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 8);
  },
  "{ :self | =(nodeType(self), 8) }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isCommentOrWhiteSpace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_isComment_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_isText_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isAllWhiteSpace_1(_self);
      });
    });
  },
  "{ :self | |(isComment(self), { &(isText(self), { isAllWhiteSpace(self) }) }) }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 1);
  },
  "{ :self | =(nodeType(self), 1) }",
);

sl.addMethodToExistingTrait(
  "Node",
  "DocumentObjectModel",
  "isText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 3);
  },
  "{ :self | =(nodeType(self), 3) }",
);

sl.addTrait("StyleSheet", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "StyleSheet",
  "DocumentObjectModel",
  "href",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.href;
  },
  "{ :self | <primitive: return _self.href;>\n }",
);

sl.addMethodToExistingTrait(
  "StyleSheet",
  "DocumentObjectModel",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.title;
  },
  "{ :self | <primitive: return _self.title;>\n }",
);

sl.addMethodToExistingTrait(
  "StyleSheet",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;>\n }",
);

sl.addTrait("Text", "DocumentObjectModel");

sl.addMethodToExistingTrait(
  "Text",
  "DocumentObjectModel",
  "assignedSlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.assignedSlot;
  },
  "{ :self | <primitive: return _self.assignedSlot;>\n }",
);

sl.addMethodToExistingTrait(
  "Text",
  "DocumentObjectModel",
  "splitText",
  ["self", "offset"],
  function (_self, _offset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _offset";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splitText(_offset);
  },
  "{ :self :offset | <primitive: return _self.splitText(_offset);>\n }",
);

sl.addMethodToExistingTrait(
  "Text",
  "DocumentObjectModel",
  "wholeText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.wholeText;
  },
  "{ :self | <primitive: return _self.wholeText;>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self | <primitive: return _self.name;>\n }",
);

sl.addMethodToExistingType(
  "Attr",
  "DocumentObjectModel",
  "ownerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ownerElement;
  },
  "{ :self | <primitive: return _self.ownerElement;>\n }",
);

sl.addMethodToExistingType(
  "Attr",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self | <primitive: return _self.value;>\n }",
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
  function (_self, _x1, _y1, _x2, _y2, _radius) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _x1, _y1, _x2, _y2, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arcTo(_x1, _y1, _x2, _y2, _radius);
  },
  "{ :self :x1 :y1 :x2 :y2 :radius | <primitive: return _self.arcTo(_x1, _y1, _x2, _y2, _radius);>\n }",
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
  "{ :self :x :y :radiusX :radiusY :rotation :startAngle :endAngle | <primitive: return _self.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle);>\n }",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "fill",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.fill();
  },
  "{ :self | <primitive: return _self.fill();>\n }",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "fillStyle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.fillStyle;
  },
  "{ :self | <primitive: return _self.fillStyle;>\n }",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "fillStyle",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.fillStyle = _anObject;
  },
  "{ :self :anObject | <primitive: return _self.fillStyle = _anObject;>\n }",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "moveTo",
  ["self", "x", "y"],
  function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.moveTo(_x, _y);
  },
  "{ :self :x :y | <primitive: return _self.moveTo(_x, _y);>\n }",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "rotate",
  ["self", "angle"],
  function (_self, _angle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _angle";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rotate(_angle);
  },
  "{ :self :angle | <primitive: return _self.rotate(_angle);>\n }",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "transform",
  ["self", "a", "b", "c", "d", "e", "f"],
  function (_self, _a, _b, _c, _d, _e, _f) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _self, _a, _b, _c, _d, _e, _f";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transform(_a, _b, _c, _d, _e, _f);
  },
  "{ :self :a :b :c :d :e :f | <primitive: return _self.transform(_a, _b, _c, _d, _e, _f);>\n }",
);

sl.addMethodToExistingType(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "translate",
  ["self", "x", "y"],
  function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.translate(_x, _y);
  },
  "{ :self :x :y | <primitive: return _self.translate(_x, _y);>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clipboardData;
  },
  "{ :self | <primitive: return _self.clipboardData;>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.style;
  },
  "{ :self | <primitive: return _self.style;>\n }",
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
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_index);
  },
  "{ :self :index | <primitive: return _self.item(_index);>\n }",
);

sl.addMethodToExistingType(
  "CSSRuleList",
  "DocumentObjectModel",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  },
  "{ :self | <primitive: return _self.length;>\n }",
);

sl.addMethodToExistingType(
  "CSSRuleList",
  "DocumentObjectModel",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _item_2(_self, _hyphenMinus_2(_index, 1));
  },
  "{ :self :index | item(self,-(index, 1)) }",
);

sl.addMethodToExistingType(
  "CSSRuleList",
  "DocumentObjectModel",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _length_1(_self);
  },
  "{ :self | length(self) }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return [..._self.cssRules];
  },
  "{ :self | <primitive: return [..._self.cssRules];>\n }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "cssRules",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssRules;
  },
  "{ :self | <primitive: return _self.cssRules;>\n }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "deleteRule",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.deleteRule(_index);
  },
  "{ :self :index | <primitive: return _self.deleteRule(_index);>\n }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "insertRule",
  ["self", "rule", "index"],
  function (_self, _rule, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rule, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertRule(_rule, _index);
  },
  "{ :self :rule :index | <primitive: return _self.insertRule(_rule, _index);>\n }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "insertRule",
  ["self", "rule"],
  function (_self, _rule) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rule";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertRule(_rule);
  },
  "{ :self :rule | <primitive: return _self.insertRule(_rule);>\n }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "replace",
  ["self", "text"],
  function (_self, _text) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _text";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replace(_text);
  },
  "{ :self :text | <primitive: return _self.replace(_text);>\n }",
);

sl.addMethodToExistingType(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "replaceSync",
  ["self", "text"],
  function (_self, _text) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _text";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replaceSync(_text);
  },
  "{ :self :text | <primitive: return _self.replaceSync(_text);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "DocumentObjectModel",
  "CssStyleSheet",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return new CSSStyleSheet();
  },
  "{ <primitive: return new CSSStyleSheet();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "DocumentObjectModel",
  "CssStyleSheet",
  ["options"],
  function (_options) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new CSSStyleSheet(_options);
  },
  "{ :options | <primitive: return new CSSStyleSheet(_options);>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.detail;
  },
  "{ :self | <primitive: return _self.detail;>\n }",
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
  function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getData(_format);
  },
  "{ :self :format | <primitive: return _self.getData(_format);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentObjectModel",
  "CustomEvent",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new CustomEvent(_self, _options);
  },
  "{ :self :options | <primitive: return new CustomEvent(_self, _options);>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMMatrix(_self);
  },
  "{ :self | <primitive: return new DOMMatrix(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DocumentObjectModel",
  "DOMMatrixReadOnly",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMMatrixReadOnly(_self);
  },
  "{ :self | <primitive: return new DOMMatrixReadOnly(_self);>\n }",
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
  function (_self, _aString, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _mimeType";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parseFromString(_aString, _mimeType);
  },
  "{ :self :aString :mimeType | <primitive: return _self.parseFromString(_aString, _mimeType);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "DocumentObjectModel",
  "DOMParser",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMParser();
  },
  "{ <primitive: return new DOMParser();>\n }",
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
  function (_self, _y, _z, _w) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _y, _z, _w";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMPoint(_self, _y, _z, _w);
  },
  "{ :self :y :z :w | <primitive: return new DOMPoint(_self, _y, _z, _w);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "DOMPointReadOnly",
  ["self", "y", "z", "w"],
  function (_self, _y, _z, _w) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _y, _z, _w";
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMPointReadOnly(_self, _y, _z, _w);
  },
  "{ :self :y :z :w | <primitive: return new DOMPointReadOnly(_self, _y, _z, _w);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "DocumentObjectModel",
  "DOMPointReadOnly",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return DOMPointReadOnly.fromPoint(_self);
  },
  "{ :self | <primitive: return DOMPointReadOnly.fromPoint(_self);>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cloneRange();
  },
  "{ :self | <primitive: return _self.cloneRange();>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "commonAncestorContainer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.commonAncestorContainer;
  },
  "{ :self | <primitive: return _self.commonAncestorContainer;>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "createContextualFragment",
  ["self", "tagString"],
  function (_self, _tagString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tagString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createContextualFragment(_tagString);
  },
  "{ :self :tagString | <primitive: return _self.createContextualFragment(_tagString);>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "deleteContents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.deleteContents();
  },
  "{ :self | <primitive: return _self.deleteContents();>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "endContainer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.endContainer;
  },
  "{ :self | <primitive: return _self.endContainer;>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "endOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.endOffset + 1;
  },
  "{ :self | <primitive: return _self.endOffset + 1;>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "insertNode",
  ["self", "aNode"],
  function (_self, _aNode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNode";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertNode(_aNode);
  },
  "{ :self :aNode | <primitive: return _self.insertNode(_aNode);>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "selectNodeContents",
  ["self", "aNode"],
  function (_self, _aNode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNode";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectNodeContents(_aNode);
  },
  "{ :self :aNode | <primitive: return _self.selectNodeContents(_aNode);>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "setEnd",
  ["self", "endNode", "endOffset"],
  function (_self, _endNode, _endOffset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _endNode, _endOffset";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setEnd(_endNode, _endOffset - 1);
  },
  "{ :self :endNode :endOffset | <primitive: return _self.setEnd(_endNode, _endOffset - 1);>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "setStart",
  ["self", "startNode", "startOffset"],
  function (_self, _startNode, _startOffset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startNode, _startOffset";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setStart(_startNode, _startOffset - 1);
  },
  "{ :self :startNode :startOffset | <primitive: return _self.setStart(_startNode, _startOffset - 1);>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "startContainer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.startContainer;
  },
  "{ :self | <primitive: return _self.startContainer;>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "startOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.startOffset + 1;
  },
  "{ :self | <primitive: return _self.startOffset + 1;>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "toString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString();
  },
  "{ :self | <primitive: return _self.toString();>\n }",
);

sl.addMethodToExistingType(
  "DocumentRange",
  "DocumentObjectModel",
  "isInTextAreaElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isElement_1(_startContainer_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isHTMLTextAreaElement_1(
        _at_2(_childNodes_1(_startContainer_1(_self)), _startOffset_1(_self)),
      );
    });
  },
  "{ :self | &(isElement(startContainer(self)), { isHTMLTextAreaElement(at(childNodes(startContainer(self)), startOffset(self))) }) }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;>\n }",
);

sl.addMethodToExistingType(
  "DOMRect",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;>\n }",
);

sl.addMethodToExistingType(
  "DOMRect",
  "DocumentObjectModel",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  },
  "{ :self | <primitive: return _self.x;>\n }",
);

sl.addMethodToExistingType(
  "DOMRect",
  "DocumentObjectModel",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  },
  "{ :self | <primitive: return _self.y;>\n }",
);

sl.addMethodToExistingType(
  "DOMRect",
  "DocumentObjectModel",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["x", "y", "width", "height"];
  },
  "{ :self | ['x', 'y', 'width', 'height'] }",
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
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.add(_aString);
  },
  "{ :self :aString | <primitive: return _self.add(_aString);>\n }",
);

sl.addMethodToExistingType(
  "DOMTokenList",
  "DocumentObjectModel",
  "contains",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.contains(_aString);
  },
  "{ :self :aString | <primitive: return _self.contains(_aString);>\n }",
);

sl.addMethodToExistingType(
  "DOMTokenList",
  "DocumentObjectModel",
  "remove",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.remove(_aString);
  },
  "{ :self :aString | <primitive: return _self.remove(_aString);>\n }",
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
  function (_self, _contextType, _contextAttributes) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _contextType, _contextAttributes";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getContext(_contextType, _contextAttributes);
  },
  "{ :self :contextType :contextAttributes | <primitive: return _self.getContext(_contextType, _contextAttributes);>\n }",
);

sl.addMethodToExistingType(
  "HTMLCanvasElement",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;>\n }",
);

sl.addMethodToExistingType(
  "HTMLCanvasElement",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.close();
  },
  "{ :self | <primitive: return _self.close();>\n }",
);

sl.addMethodToExistingType(
  "HTMLDialogElement",
  "DocumentObjectModel",
  "show",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.show();
  },
  "{ :self | <primitive: return _self.show();>\n }",
);

sl.addMethodToExistingType(
  "HTMLDialogElement",
  "DocumentObjectModel",
  "showModal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.showModal();
  },
  "{ :self | <primitive: return _self.showModal();>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self | <primitive: return _self.value;>\n }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "complete",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.complete;
  },
  "{ :self | <primitive: return _self.complete;>\n }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;>\n }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "src",
  ["self", "url"],
  function (_self, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _url";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.src = _url;
  },
  "{ :self :url | <primitive: return _self.src = _url;>\n }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "src",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.src;
  },
  "{ :self | <primitive: return _self.src;>\n }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;>\n }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  },
  "{ :self | <primitive: return _self.x;>\n }",
);

sl.addMethodToExistingType(
  "HTMLImageElement",
  "DocumentObjectModel",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  },
  "{ :self | <primitive: return _self.y;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "Image",
  ["self", "height"],
  function (_self, _height) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _height";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Image(_self, _height);
  },
  "{ :self :height | <primitive: return new Image(_self, _height);>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionEnd;
  },
  "{ :self | <primitive: return _self.selectionEnd;>\n }",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "selectionStart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionStart;
  },
  "{ :self | <primitive: return _self.selectionStart;>\n }",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "setSelectionRange",
  ["self", "selectionStart", "selectionEnd"],
  function (_self, _selectionStart, _selectionEnd) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectionStart, _selectionEnd";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setSelectionRange(selectionStart, selectionEnd);
  },
  "{ :self :selectionStart :selectionEnd | <primitive: return _self.setSelectionRange(selectionStart, selectionEnd);>\n }",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;>\n }",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "value",
  ["self", "aValue"],
  function (_self, _aValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aValue";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value = _aValue;
  },
  "{ :self :aValue | <primitive: return _self.value = _aValue;>\n }",
);

sl.addMethodToExistingType(
  "HTMLInputElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self | <primitive: return _self.value;>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.index;
  },
  "{ :self | <primitive: return _self.index;>\n }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "label",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.label;
  },
  "{ :self | <primitive: return _self.label;>\n }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "selected",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selected;
  },
  "{ :self | <primitive: return _self.selected;>\n }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "text",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text = _aString;
  },
  "{ :self :aString | <primitive: return _self.text = _aString;>\n }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "text",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text;
  },
  "{ :self | <primitive: return _self.text;>\n }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "value",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value = _aString;
  },
  "{ :self :aString | <primitive: return _self.value = _aString;>\n }",
);

sl.addMethodToExistingType(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self | <primitive: return _self.value;>\n }",
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
  function (_self, _item, _before) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _item, _before";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.add(_item, _before);
  },
  "{ :self :item :before | <primitive: return _self.add(_item, _before);>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "labels",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.labels;
  },
  "{ :self | <primitive: return _self.labels;>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "length",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.length = _anInteger;>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  },
  "{ :self | <primitive: return _self.length;>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "options",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.options;
  },
  "{ :self | <primitive: return _self.options;>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "remove",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.remove(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.remove(_anInteger);>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "selectedIndex",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectedIndex = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.selectedIndex = _anInteger;>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "selectedIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectedIndex;
  },
  "{ :self | <primitive: return _self.selectedIndex;>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "size",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.size = _anInteger;>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  },
  "{ :self | <primitive: return _self.size;>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;>\n }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "deselect",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _selectedIndex_2(_self, -1);
  },
  "{ :self | selectedIndex(self, -1) }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "indexOf",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_aString), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return -1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(0, _hyphenMinus_2(_length_1(_self), 1), function (_index) {
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
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_index);
            },
          );
        });
        return -1;
      });
    });
  },
  "{ :self :aString | if(isEmpty(aString), { -1 }, { valueWithReturn({ :return:/1 | toDo(0, -(length(self), 1), { :index | ifTrue((=(value(item(options(self),index)), aString)), { return(index) }) }); -1 }) }) }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _length_2(_self, 0);
  },
  "{ :self | length(self, 0) }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "select",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _selectedIndex_2(_self, _indexOf_2(_self, _aString));
  },
  "{ :self :aString | selectedIndex(self, indexOf(self,aString)) }",
);

sl.addMethodToExistingType(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_selectedIndex_1(_self), -1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return "";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_item_2(_self, _selectedIndex_1(_self)));
    });
  },
  "{ :self | if((=(selectedIndex(self), -1)), { '' }, { value(item(self,selectedIndex(self))) }) }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.caption;
  },
  "{ :self | <primitive: return _self.caption;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTableElement",
  "DocumentObjectModel",
  "rows",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rows;
  },
  "{ :self | <primitive: return _self.rows;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTableElement",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DocumentObjectModel",
  "asHtmlRow",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tr = _createElement_1("tr");
    /* Statements */
    _do_2(_self, function (_cell) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _cell";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _td = _createElement_1("td");
      /* Statements */
      _textContent_2(_td, _toString_1(_cell));
      return _appendChild_2(_tr, _td);
    });
    return _tr;
  },
  "{ :self :toString:/1 | let tr = createElement('tr'); do(self, { :cell | let td = createElement('td'); textContent(td,toString(cell)); appendChild(tr,td) }); tr }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = _createElement_1("table");
    /* Statements */
    _do_2(_self, function (_row) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _row";
        throw new Error(errorMessage);
      } /* Statements */
      return _appendChild_2(_table, _asHtmlRow_2(_row, _toString_1));
    });
    return _table;
  },
  "{ :self :toString:/1 | let table = createElement('table'); do(self, { :row | appendChild(table,asHtmlRow(row,toString:/1)) }); table }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtmlTable_2(_self, _asString_1);
  },
  "{ :self | asHtmlTable(self,asString:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Association",
  "DocumentObjectModel",
  "asHtmlRow",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtmlRow_2(_asList_1(_self), _toString_1);
  },
  "{ :self :toString:/1 | asHtmlRow(asList(self),toString:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Dictionary",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtmlTable_2(_associations_1(_self), _toString_1);
  },
  "{ :self :toString:/1 | asHtmlTable(associations(self),toString:/1) }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cellIndex;
  },
  "{ :self | <primitive: return _self.cellIndex;>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.content;
  },
  "{ :self | <primitive: return _self.content;>\n }",
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
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cols = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.cols = _anInteger;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "cols",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cols;
  },
  "{ :self | <primitive: return _self.cols;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "readOnly",
  ["self", "aBoolean"],
  function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.readOnly = _aBoolean;
  },
  "{ :self :aBoolean | <primitive: return _self.readOnly = _aBoolean;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "readOnly",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.readOnly;
  },
  "{ :self | <primitive: return _self.readOnly;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "rows",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rows = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.rows = _anInteger;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "rows",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rows;
  },
  "{ :self | <primitive: return _self.rows;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "selectionEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionEnd;
  },
  "{ :self | <primitive: return _self.selectionEnd;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "selectionStart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionStart;
  },
  "{ :self | <primitive: return _self.selectionStart;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "setRangeText",
  ["self", "replacement", "startSelection", "endSelection", "selectMode"],
  function (_self, _replacement, _startSelection, _endSelection, _selectMode) {
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
  "{ :self :replacement :startSelection :endSelection :selectMode | <primitive: return _self.setRangeText(_replacement, _startSelection, _endSelection, _selectMode);>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "setSelectionRange",
  ["self", "i", "j"],
  function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setSelectionRange(_i, _j);
  },
  "{ :self :i :j | <primitive: return _self.setSelectionRange(_i, _j);>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "value",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value = _aString;
  },
  "{ :self :aString | <primitive: return _self.value = _aString;>\n }",
);

sl.addMethodToExistingType(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self | <primitive: return _self.value;>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.close();
  },
  "{ :self | <primitive: return _self.close();>\n }",
);

sl.addMethodToExistingType(
  "ImageBitmap",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;>\n }",
);

sl.addMethodToExistingType(
  "ImageBitmap",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Blob",
  "DocumentObjectModel",
  "ImageBitmap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return createImageBitmap(_self);
  },
  "{ :self | <primitive: return createImageBitmap(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "ImageBitmap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return createImageBitmap(_self);
  },
  "{ :self | <primitive: return createImageBitmap(_self);>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.colorSpace;
  },
  "{ :self | <primitive: return _self.colorSpace;>\n }",
);

sl.addMethodToExistingType(
  "ImageData",
  "DocumentObjectModel",
  "data",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.data;
  },
  "{ :self | <primitive: return _self.data;>\n }",
);

sl.addMethodToExistingType(
  "ImageData",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;>\n }",
);

sl.addMethodToExistingType(
  "ImageData",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ctrlKey;
  },
  "{ :self | <primitive: return _self.ctrlKey;>\n }",
);

sl.addMethodToExistingType(
  "KeyboardEvent",
  "DocumentObjectModel",
  "key",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.key;
  },
  "{ :self | <primitive: return _self.key;>\n }",
);

sl.addMethodToExistingType(
  "KeyboardEvent",
  "DocumentObjectModel",
  "shiftKey",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.shiftKey;
  },
  "{ :self | <primitive: return _self.shiftKey;>\n }",
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
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getNamedItem(aString);
  },
  "{ :self :aString | <primitive: return _self.getNamedItem(aString);>\n }",
);

sl.addMethodToExistingType(
  "NamedNodeMap",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);>\n }",
);

sl.addMethodToExistingType(
  "NamedNodeMap",
  "DocumentObjectModel",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  },
  "{ :self | <primitive: return _self.length;>\n }",
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
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);>\n }",
);

sl.addMethodToExistingType(
  "NodeList",
  "DocumentObjectModel",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  },
  "{ :self | <primitive: return _self.length;>\n }",
);

sl.addMethodToExistingType(
  "NodeList",
  "DocumentObjectModel",
  "at",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _item_2(_self, _hyphenMinus_2(_anInteger, 1));
  },
  "{ :self :anInteger | item(self,-(anInteger, 1)) }",
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
  function (_self, _contextType, _contextAttributes) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _contextType, _contextAttributes";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getContext(_contextType, _contextAttributes);
  },
  "{ :self :contextType :contextAttributes | <primitive: return _self.getContext(_contextType, _contextAttributes);>\n }",
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
  function (_self, _height) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _height";
      throw new Error(errorMessage);
    } /* Primitive */
    return new OffscreenCanvas(_self, _height);
  },
  "{ :self :height | <primitive: return new OffscreenCanvas(_self, _height);>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.altitudeAngle;
  },
  "{ :self | <primitive: return _self.altitudeAngle;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "azimuthAngle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.azimuthAngle;
  },
  "{ :self | <primitive: return _self.azimuthAngle;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "isPrimary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isPrimary;
  },
  "{ :self | <primitive: return _self.isPrimary;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "pointerId",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pointerId;
  },
  "{ :self | <primitive: return _self.pointerId;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "pointerType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pointerType;
  },
  "{ :self | <primitive: return _self.pointerType;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "pressure",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pressure;
  },
  "{ :self | <primitive: return _self.pressure;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "tangentialPressure",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tangentialPressure;
  },
  "{ :self | <primitive: return _self.tangentialPressure;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "tiltX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tiltX;
  },
  "{ :self | <primitive: return _self.tiltX;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "tiltY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tiltY;
  },
  "{ :self | <primitive: return _self.tiltY;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "twist",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.twist;
  },
  "{ :self | <primitive: return _self.twist;>\n }",
);

sl.addMethodToExistingType(
  "PointerEvent",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.anchorNode;
  },
  "{ :self | <primitive: return _self.anchorNode;>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "anchorOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.anchorOffset + 1;
  },
  "{ :self | <primitive: return _self.anchorOffset + 1;>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "collapse",
  ["self", "node", "offset"],
  function (_self, _node, _offset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _node, _offset";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.collapse(_node, _offset);
  },
  "{ :self :node :offset | <primitive: return _self.collapse(_node, _offset);>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "collapseToEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.collapseToEnd();
  },
  "{ :self | <primitive: return _self.collapseToEnd();>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "collapseToStart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.collapseToStart();
  },
  "{ :self | <primitive: return _self.collapseToStart();>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "containsNode",
  ["self", "node", "partialContainment"],
  function (_self, _node, _partialContainment) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _node, _partialContainment";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.containsNode(_node, _partialContainment);
  },
  "{ :self :node :partialContainment | <primitive: return _self.containsNode(_node, _partialContainment);>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "direction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.direction;
  },
  "{ :self | <primitive: return _self.direction;>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "focusNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focusNode;
  },
  "{ :self | <primitive: return _self.focusNode;>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "focusOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focusOffset + 1;
  },
  "{ :self | <primitive: return _self.focusOffset + 1;>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "getRangeAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getRangeAt(_anInteger - 1);
  },
  "{ :self :anInteger | <primitive: return _self.getRangeAt(_anInteger - 1);>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "rangeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rangeCount;
  },
  "{ :self | <primitive: return _self.rangeCount;>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "removeAllRanges",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeAllRanges();
  },
  "{ :self | <primitive: return _self.removeAllRanges();>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "toString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString();
  },
  "{ :self | <primitive: return _self.toString();>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;>\n }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "isCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_type_1(_self), "Caret");
  },
  "{ :self | =(type(self), 'Caret') }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "isRange",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_type_1(_self), "Range");
  },
  "{ :self | =(type(self), 'Range') }",
);

sl.addMethodToExistingType(
  "Selection",
  "DocumentObjectModel",
  "range",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_rangeCount_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _getRangeAt_2(_self, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Selection>>range: more than one range");
    });
  },
  "{ :self | if((=(rangeCount(self), 1)), { getRangeAt(self,1) }, { error(self,'Selection>>range: more than one range') }) }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.wholeText;
  },
  "{ :self | <primitive: return _self.wholeText;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "document",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.document;
  },
  "{ :self | <primitive: return _self.document;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "getComputedStyle",
  ["self", "element"],
  function (_self, _element) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _element";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getComputedStyle(_element);
  },
  "{ :self :element | <primitive: return _self.getComputedStyle(_element);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "getSelection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  },
  "{ :self | <primitive: return _self.getSelection();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "innerHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerHeight;
  },
  "{ :self | <primitive: return _self.innerHeight;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "innerWidth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerWidth;
  },
  "{ :self | <primitive: return _self.innerWidth;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "caretBoundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _getBoundingClientRect_1(_elementAtCaret_1(_self));
  },
  "{ :self | getBoundingClientRect(elementAtCaret(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "caretBoundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _getBoundingClientRect_1(_elementAtCaret_1(_self));
  },
  "{ :self | getBoundingClientRect(elementAtCaret(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "caretIsInTextAreaElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInTextAreaElement_1(_range_1(_selection_1(_self)));
  },
  "{ :self | isInTextAreaElement(range(selection(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "caretIsInTextAreaElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInTextAreaElement_1(_range_1(_selection_1(_self)));
  },
  "{ :self | isInTextAreaElement(range(selection(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "caretIsInTextNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isText_1(_startContainer_1(_range_1(_selection_1(_self))));
  },
  "{ :self | isText(startContainer(range(selection(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "caretIsInTextNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isText_1(_startContainer_1(_range_1(_selection_1(_self))));
  },
  "{ :self | isText(startContainer(range(selection(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "elementAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _startContainer_1(_range_1(_selection_1(_self)));
    /* Statements */
    return _if_3(_isText_1(_c), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _parentElement_1(_c);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isElement_1(_c), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _c;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "elementAtCaret: not text or element?");
      });
    });
  },
  "{ :self | let c = startContainer(range(selection(self))); if(isText(c), { parentElement(c) }, { if(isElement(c), { c }, { error(self,'elementAtCaret: not text or element?') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "elementAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _startContainer_1(_range_1(_selection_1(_self)));
    /* Statements */
    return _if_3(_isText_1(_c), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _parentElement_1(_c);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isElement_1(_c), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _c;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "elementAtCaret: not text or element?");
      });
    });
  },
  "{ :self | let c = startContainer(range(selection(self))); if(isText(c), { parentElement(c) }, { if(isElement(c), { c }, { error(self,'elementAtCaret: not text or element?') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "insertStringAtCaret",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _insertNode_2(
      _range_1(_selection_1(_self)),
      _createTextNode_2(_document_1(_self), _aString),
    );
  },
  "{ :self :aString | insertNode(range(selection(self)),createTextNode(document(self),aString)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "insertStringAtCaret",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _insertNode_2(
      _range_1(_selection_1(_self)),
      _createTextNode_2(_document_1(_self), _aString),
    );
  },
  "{ :self :aString | insertNode(range(selection(self)),createTextNode(document(self),aString)) }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "paragraphAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _range_1(_selection_1(_self));
    /* Statements */
    return _if_3(_isInTextAreaElement_1(_range), function () {
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
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isText_1(_startContainer_1(_range)), function () {
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
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _index = _hyphenMinus_2(_index, 1);
          },
        );
        return _if_3(_includesIndex_2(_text, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _paragraphAtIndex_2(_text, _index);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "paragraphAtCaret: invalid index");
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "paragraphAtCaret: unimplemented start container type",
        );
      });
    });
  },
  "{ :self | let range = range(selection(self)); if(isInTextAreaElement(range), { let textArea = at(childNodes(startContainer(range)), startOffset(range)); paragraphAtIndex(value(textArea),selectionStart(textArea)) }, { if(isText(startContainer(range)), { let text = nodeValue(startContainer(range)); let index = startOffset(range); ifTrue((=(+(size(text), 1), index)), { index := -(index, 1) }); if(includesIndex(text,index), { paragraphAtIndex(text,index) }, { error(self,'paragraphAtCaret: invalid index') }) }, { error(self,'paragraphAtCaret: unimplemented start container type') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "paragraphAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _range_1(_selection_1(_self));
    /* Statements */
    return _if_3(_isInTextAreaElement_1(_range), function () {
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
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isText_1(_startContainer_1(_range)), function () {
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
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _index = _hyphenMinus_2(_index, 1);
          },
        );
        return _if_3(_includesIndex_2(_text, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _paragraphAtIndex_2(_text, _index);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "paragraphAtCaret: invalid index");
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "paragraphAtCaret: unimplemented start container type",
        );
      });
    });
  },
  "{ :self | let range = range(selection(self)); if(isInTextAreaElement(range), { let textArea = at(childNodes(startContainer(range)), startOffset(range)); paragraphAtIndex(value(textArea),selectionStart(textArea)) }, { if(isText(startContainer(range)), { let text = nodeValue(startContainer(range)); let index = startOffset(range); ifTrue((=(+(size(text), 1), index)), { index := -(index, 1) }); if(includesIndex(text,index), { paragraphAtIndex(text,index) }, { error(self,'paragraphAtCaret: invalid index') }) }, { error(self,'paragraphAtCaret: unimplemented start container type') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selectedText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection().toString();
  },
  "{ :self | <primitive: return _self.getSelection().toString();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "selectedText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection().toString();
  },
  "{ :self | <primitive: return _self.getSelection().toString();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selectedTextOrParagraphAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _paragraphAtCaret_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _text;
    });
  },
  "{ :self | let text = selectedText(self); if(isEmpty(text), { paragraphAtCaret(self) }, { text }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "selectedTextOrParagraphAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _paragraphAtCaret_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _text;
    });
  },
  "{ :self | let text = selectedText(self); if(isEmpty(text), { paragraphAtCaret(self) }, { text }) }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selectedTextOrWordAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _wordAtCaret_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _text;
    });
  },
  "{ :self | let text = selectedText(self); if(isEmpty(text), { wordAtCaret(self) }, { text }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "selectedTextOrWordAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _wordAtCaret_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _text;
    });
  },
  "{ :self | let text = selectedText(self); if(isEmpty(text), { wordAtCaret(self) }, { text }) }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  },
  "{ :self | <primitive: return _self.getSelection();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "selection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  },
  "{ :self | <primitive: return _self.getSelection();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "wordAtCaret",
  ["self"],
  function (_self) {
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
  },
  "{ :self | let selection = selection(self); let text = textContent(focusNode(selection)); let index = focusOffset(selection); wordAtIndex(text,index) }",
);

sl.extendTypeOrTraitWithMethod(
  "Window",
  "DocumentObjectModel",
  "wordAtCaret",
  ["self"],
  function (_self) {
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
  },
  "{ :self | let selection = selection(self); let text = textContent(focusNode(selection)); let index = focusOffset(selection); wordAtIndex(text,index) }",
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
