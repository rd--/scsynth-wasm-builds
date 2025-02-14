/*  Requires: Blob Event EventTarget  */

sl.addTrait("AbstractRange", "DocumentObjectModel");

sl.addTrait("AnimationTimeline", "DocumentObjectModel");

sl.addTraitMethod(
  "AnimationTimeline",
  "DocumentObjectModel",
  "currentTime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.currentTime;
  },
  "{ :self | <primitive: return _self.currentTime;> }",
);

sl.addTrait("CharacterData", "DocumentObjectModel");

sl.addTraitMethod(
  "CharacterData",
  "DocumentObjectModel",
  "data",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.data;
  },
  "{ :self | <primitive: return _self.data;> }",
);

sl.addTraitMethod(
  "CharacterData",
  "DocumentObjectModel",
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

sl.addTrait("CssProperties", "DocumentObjectModel");

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
  "cssText",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssText = _aString;
  },
  "{ :self :aString | <primitive: return _self.cssText = _aString;> }",
);

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
  "cssText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssText;
  },
  "{ :self | <primitive: return _self.cssText;> }",
);

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
  "getPropertyPriority",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getPropertyPriority();
  },
  "{ :self :name | <primitive: return _self.getPropertyPriority();> }",
);

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
  "getPropertyValue",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getPropertyValue(_name);
  },
  "{ :self :name | <primitive: return _self.getPropertyValue(_name);> }",
);

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
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

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
  "removeProperty",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeProperty(_name);
  },
  "{ :self :name | <primitive: return _self.removeProperty(_name);> }",
);

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
  "setProperty",
  ["self", "name", "value", "priority"],
  function (_self, _name, _value, _priority) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _name, _value, _priority";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setProperty(_name, _value, _priority);
  },
  "{ :self :name :value :priority | <primitive: return _self.setProperty(_name, _value, _priority);> }",
);

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
  "at",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _getPropertyValue_2(_self, _name);
  },
  "{ :self :name |\n\t\tself.getPropertyValue(name)\n\t}",
);

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
  "atPut",
  ["self", "name", "value"],
  function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _setProperty_4(_self, _name, _value, "");
  },
  "{ :self :name :value |\n\t\tself.setProperty(name, value, '')\n\t}",
);

sl.addTraitMethod(
  "CssProperties",
  "DocumentObjectModel",
  "setProperties",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(_aDictionary, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _setProperty_4(_self, _key, _value, "");
    });
  },
  "{ :self :aDictionary |\n\t\taDictionary.withIndexDo { :value :key |\n\t\t\tself.setProperty(key, value, '')\n\t\t}\n\t}",
);

sl.addTrait("CssRule", "DocumentObjectModel");

sl.addTraitMethod(
  "CssRule",
  "DocumentObjectModel",
  "cssText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssText;
  },
  "{ :self | <primitive: return _self.cssText;> }",
);

sl.addTrait("Document", "DocumentObjectModel");

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "adoptedStyleSheets",
  ["self", "styleSheets"],
  function (_self, _styleSheets) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _styleSheets";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.adoptedStyleSheets = _styleSheets;
    /* Statements */
    return null;
  },
  "{ :self :styleSheets |\n\t\t<primitive: _self.adoptedStyleSheets = _styleSheets;>\n\t\tnil\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "body",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.body;
  },
  "{ :self |\n\t\t<primitive: return _self.body;>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "createElement",
  ["self", "tagName"],
  function (_self, _tagName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tagName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createElement(_tagName);
  },
  "{ :self :tagName |\n\t\t<primitive: return _self.createElement(_tagName);>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "createElement",
  ["self", "tagName", "attributeDictionary"],
  function (_self, _tagName, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _tagName, _attributeDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _element = _createElement_2(_self, _tagName);
    /* Statements */
    _setAttributes_2(_element, _attributeDictionary);
    return _element;
  },
  "{ :self :tagName :attributeDictionary |\n\t\tlet element = self.createElement(tagName);\n\t\telement.setAttributes(attributeDictionary);\n\t\telement\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "createElementNS",
  ["self", "namespaceURI", "qualifiedName"],
  function (_self, _namespaceURI, _qualifiedName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _namespaceURI, _qualifiedName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createElementNS(_namespaceURI, _qualifiedName);
  },
  "{ :self :namespaceURI :qualifiedName |\n\t\t<primitive: return _self.createElementNS(_namespaceURI, _qualifiedName);>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "createRange",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createRange();
  },
  "{ :self |\n\t\t<primitive: return _self.createRange();>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "createTextNode",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createTextNode(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.createTextNode(_aString);>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "defaultView",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.defaultView;
  },
  "{ :self |\n\t\t<primitive: return _self.defaultView;>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "documentElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.documentElement;
  },
  "{ :self |\n\t\t<primitive: return _self.documentElement;>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "getElementById",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getElementById(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.getElementById(_aString);>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "getSelection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  },
  "{ :self |\n\t\t<primitive: return _self.getSelection();>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "importNode",
  ["self", "externalNode", "deep"],
  function (_self, _externalNode, _deep) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _externalNode, _deep";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.importNode(_externalNode, _deep);
  },
  "{ :self :externalNode :deep |\n\t\t<primitive: return _self.importNode(_externalNode, _deep);>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "parseHtml",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
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
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _firstChild_1(_content_1(_template));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseHtml: not singular node");
      },
    );
  },
  "{ :self :aString |\n\t\tlet template = self.createElement('template');\n\t\ttemplate.innerHtml(aString);\n\t\t(template.content.childNodes.length = 1).if {\n\t\t\ttemplate.content.firstChild\n\t\t} {\n\t\t\tself.error('parseHtml: not singular node')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "querySelector",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.querySelector(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.querySelector(_aString);>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "querySelectorAll",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.querySelectorAll(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.querySelectorAll(_aString);>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "styleSheetList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return [..._self.styleSheets];
  },
  "{ :self |\n\t\t<primitive: return [..._self.styleSheets];>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "styleSheets",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.styleSheets;
  },
  "{ :self |\n\t\t<primitive: return _self.styleSheets;>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "timeline",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.timeline;
  },
  "{ :self |\n\t\t<primitive: return _self.timeline;>\n\t}",
);

sl.addTraitMethod(
  "Document",
  "DocumentObjectModel",
  "visibilityState",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.visibilityState;
  },
  "{ :self |\n\t\t<primitive: return _self.visibilityState;>\n\t}",
);

sl.addMethod(
  "String",
  "DocumentObjectModel",
  "createElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _createElement_2(_document_1(_window_1(_system)), _self);
  },
  "{ :self |\n\t\tsystem.window.document.createElement(self)\n\t}",
);

sl.addMethod(
  "String",
  "DocumentObjectModel",
  "createElement",
  ["self", "attributeDictionary"],
  function (_self, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _attributeDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _createElement_3(
      _document_1(_window_1(_system)),
      _self,
      _attributeDictionary,
    );
  },
  "{ :self :attributeDictionary |\n\t\tsystem.window.document.createElement(self, attributeDictionary)\n\t}",
);

sl.addMethod(
  "String",
  "DocumentObjectModel",
  "getElementById",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _getElementById_2(_document_1(_window_1(_system)), _self);
  },
  "{ :self |\n\t\tsystem.window.document.getElementById(self)\n\t}",
);

sl.addMethod(
  "String",
  "DocumentObjectModel",
  "querySelector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _querySelector_2(_document_1(_window_1(_system)), _self);
  },
  "{ :self |\n\t\tsystem.window.document.querySelector(self)\n\t}",
);

sl.addTrait("DOMMatrixReadOnly", "DocumentObjectModel");

sl.addTraitMethod(
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  "is2D",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.is2D;
  },
  "{ :self | <primitive: return _self.is2D;> }",
);

sl.addTraitMethod(
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  "isIdentity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isIdentity;
  },
  "{ :self | <primitive: return _self.isIdentity;> }",
);

sl.addTraitMethod(
  "DOMMatrixReadOnly",
  "DocumentObjectModel",
  "transformPoint",
  ["self", "point"],
  function (_self, _point) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _point";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transformPoint(_point);
  },
  "{ :self :point | <primitive: return _self.transformPoint(_point);> }",
);

sl.addTrait("DOMPointReadOnly", "DocumentObjectModel");

sl.addTraitMethod(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  },
  "{ :self | <primitive: return _self.x;> }",
);

sl.addTraitMethod(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  },
  "{ :self | <primitive: return _self.y;> }",
);

sl.addTraitMethod(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "z",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.z;
  },
  "{ :self | <primitive: return _self.z;> }",
);

sl.addTraitMethod(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "w",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.w;
  },
  "{ :self | <primitive: return _self.w;> }",
);

sl.addTraitMethod(
  "DOMPointReadOnly",
  "DocumentObjectModel",
  "matrixTransform",
  ["self", "matrix"],
  function (_self, _matrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _matrix";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.matrixTransform(_matrix);
  },
  "{ :self :matrix | <primitive: return _self.matrixTransform(_matrix);> }",
);

sl.addTrait("Element", "DocumentObjectModel");

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "append",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.append(..._aList);
  },
  "{ :self :aList | <primitive: return _self.append(..._aList);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "attributes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.attributes;
  },
  "{ :self | <primitive: return _self.attributes;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "childElementCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.childElementCount;
  },
  "{ :self | <primitive: return _self.childElementCount;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "children",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.children;
  },
  "{ :self | <primitive: return _self.children;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "classList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.classArray;
  },
  "{ :self | <primitive: return _self.classArray;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "className",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.className = _aString;
  },
  "{ :self :aString | <primitive: return _self.className = _aString;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "className",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.className;
  },
  "{ :self | <primitive: return _self.className;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "getAttribute",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getAttribute(_name);
  },
  "{ :self :name | <primitive: return _self.getAttribute(_name);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "getBoundingClientRect",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getBoundingClientRect();
  },
  "{ :self | <primitive: return _self.getBoundingClientRect();> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "hasPointerCapture",
  ["self", "pointerId"],
  function (_self, _pointerId) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pointerId";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hasPointerCapture(pointerId);
  },
  "{ :self :pointerId | <primitive: return _self.hasPointerCapture(pointerId);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "id",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.id;
  },
  "{ :self | <primitive: return _self.id;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "innerHtml",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerHTML = _aString;
  },
  "{ :self :aString | <primitive: return _self.innerHTML = _aString;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "innerHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerHTML;
  },
  "{ :self | <primitive: return _self.innerHTML;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "insertAdjacentElement",
  ["self", "position", "element"],
  function (_self, _position, _element) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _position, _element";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertAdjacentElement(_position, _element);
  },
  "{ :self :position :element | <primitive: return _self.insertAdjacentElement(_position, _element);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "insertAdjacentHtml",
  ["self", "position", "text"],
  function (_self, _position, _text) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _position, _text";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertAdjacentHTML(_position, _text);
  },
  "{ :self :position :text | <primitive: return _self.insertAdjacentHTML(_position, _text);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "insertAdjacentText",
  ["self", "where", "data"],
  function (_self, _where, _data) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _where, _data";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertAdjacentText(_where, _data);
  },
  "{ :self :where :data | <primitive: return _self.insertAdjacentText(_where, _data);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "localName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.localName;
  },
  "{ :self | <primitive: return _self.localName;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "matches",
  ["self", "selectors"],
  function (_self, _selectors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _selectors";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.matches(_selectors);
  },
  "{ :self :selectors | <primitive: return _self.matches(_selectors);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "nextElementSibling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nextElementSibling;
  },
  "{ :self | <primitive: return _self.nextElementSibling;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "outerHtml",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.outerHTML = _aString;
  },
  "{ :self :aString | <primitive: return _self.outerHTML = _aString;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "outerHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.outerHTML;
  },
  "{ :self | <primitive: return _self.outerHTML;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "previousElementSibling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.previousElementSibling;
  },
  "{ :self | <primitive: return _self.previousElementSibling;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "releasePointerCapture",
  ["self", "pointerId"],
  function (_self, _pointerId) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pointerId";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.releasePointerCapture(_pointerId);
  },
  "{ :self :pointerId | <primitive: return _self.releasePointerCapture(_pointerId);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "remove",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.remove();
  },
  "{ :self | <primitive: return _self.remove();> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "removeAttribute",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeAttribute(_aString);
  },
  "{ :self :aString | <primitive: return _self.removeAttribute(_aString);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "setAttribute",
  ["self", "name", "value"],
  function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setAttribute(_name, _value);
  },
  "{ :self :name :value | <primitive: return _self.setAttribute(_name, _value);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "setAttributeNS",
  ["self", "namespace", "name", "value"],
  function (_self, _namespace, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _namespace, _name, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setAttributeNS(_namespace, _name, _value);
  },
  "{ :self :namespace :name :value | <primitive: return _self.setAttributeNS(_namespace, _name, _value);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "setPointerCapture",
  ["self", "pointerId"],
  function (_self, _pointerId) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pointerId";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setPointerCapture(_pointerId);
  },
  "{ :self :pointerId | <primitive: return _self.setPointerCapture(_pointerId);> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "tagName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tagName;
  },
  "{ :self | <primitive: return _self.tagName;> }",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "removeAllChildren",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_asList_1(_children_1(_self)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _remove_1(_each);
    });
  },
  "{ :self |\n\t\tself.children.asList.do { :each |\n\t\t\teach.remove\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "setAttributes",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(_aDictionary, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _setAttribute_3(_self, _key, _value);
    });
  },
  "{ :self :aDictionary |\n\t\taDictionary.withIndexDo { :value :key |\n\t\t\tself.setAttribute(key, value)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Element",
  "DocumentObjectModel",
  "setAttributesNS",
  ["self", "namespace", "aDictionary"],
  function (_self, _namespace, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _namespace, _aDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(_aDictionary, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _setAttributeNS_4(_self, _namespace, _key, _value);
    });
  },
  "{ :self :namespace :aDictionary |\n\t\taDictionary.withIndexDo { :value :key |\n\t\t\tself.setAttributeNS(namespace, key, value)\n\t\t}\n\t}",
);

sl.addTrait("HtmlCollection", "DocumentObjectModel");

sl.addTraitMethod(
  "HtmlCollection",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);> }",
);

sl.addTraitMethod(
  "HtmlCollection",
  "DocumentObjectModel",
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

sl.addTraitMethod(
  "HtmlCollection",
  "DocumentObjectModel",
  "namedItem",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.namedItem(_aString);
  },
  "{ :self :aString | <primitive: return _self.namedItem(_aString);> }",
);

sl.addTraitMethod(
  "HtmlCollection",
  "DocumentObjectModel",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self);
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self);>\n\t}",
);

sl.addTraitMethod(
  "HtmlCollection",
  "DocumentObjectModel",
  "at",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _item_2(_self, _hyphenMinus_2(_anInteger, 1));
  },
  "{ :self :anInteger |\n\t\tself.item(anInteger - 1) /* One-indexed */\n\t}",
);

sl.addTrait("HtmlElement", "DocumentObjectModel");

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "accessKey",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.accessKey = _aString;
  },
  "{ :self :aString | <primitive: return _self.accessKey = _aString;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "accessKey",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.accessKey;
  },
  "{ :self | <primitive: return _self.accessKey;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "blur",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.blur();
  },
  "{ :self | <primitive: return _self.blur();> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "click",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.click();
  },
  "{ :self | <primitive: return _self.click();> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "contentEditable",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.contentEditable = _aString;
  },
  "{ :self :aString | <primitive: return _self.contentEditable = _aString;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "contentEditable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.contentEditable;
  },
  "{ :self | <primitive: return _self.contentEditable;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "focus",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focus(options);
  },
  "{ :self :options | <primitive: return _self.focus(options);> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "focus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focus();
  },
  "{ :self | <primitive: return _self.focus();> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "innerText",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerText = _aString;
  },
  "{ :self :aString | <primitive: return _self.innerText = _aString;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "innerText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerText;
  },
  "{ :self | <primitive: return _self.innerText;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "isContentEditable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isContentEditable;
  },
  "{ :self | <primitive: return _self.isContentEditable;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "style",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.style;
  },
  "{ :self | <primitive: return _self.style;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "tabIndex",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tabIndex = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.tabIndex = _anInteger;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "tabIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tabIndex;
  },
  "{ :self | <primitive: return _self.tabIndex;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "title",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.title = _aString;
  },
  "{ :self :aString | <primitive: return _self.title = _aString;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.title;
  },
  "{ :self | <primitive: return _self.title;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "computedStyle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return globalThis.getComputedStyle(_self);
  },
  "{ :self | <primitive: return globalThis.getComputedStyle(_self);> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "isHtmlElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "crossOrigin",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.crossorigin = _aString;
  },
  "{ :self :aString | <primitive: return _self.crossorigin = _aString;> }",
);

sl.addTraitMethod(
  "HtmlElement",
  "DocumentObjectModel",
  "crossOrigin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.crossorigin;
  },
  "{ :self | <primitive: return _self.crossorigin;> }",
);

sl.extendTraitWithMethod(
  "Object",
  "DocumentObjectModel",
  "isHtmlElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTrait("MouseEvent", "DocumentObjectModel");

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "buttons",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.buttons;
  },
  "{ :self | <primitive: return _self.buttons;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "clientX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clientX;
  },
  "{ :self | <primitive: return _self.clientX;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "clientY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clientY;
  },
  "{ :self | <primitive: return _self.clientY;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "layerX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.layerX;
  },
  "{ :self | <primitive: return _self.layerX;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "layerY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.layerY;
  },
  "{ :self | <primitive: return _self.layerY;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "movementX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.movementX;
  },
  "{ :self | <primitive: return _self.movementX;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "movementY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.movementY;
  },
  "{ :self | <primitive: return _self.movementY;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "offsetX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.offsetX;
  },
  "{ :self | <primitive: return _self.offsetX;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "offsetY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.offsetY;
  },
  "{ :self | <primitive: return _self.offsetY;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "pageX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pageX;
  },
  "{ :self | <primitive: return _self.pageX;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "pageY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pageY;
  },
  "{ :self | <primitive: return _self.pageY;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "screenX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.screenX;
  },
  "{ :self | <primitive: return _self.screenX;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "screenY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.screenY;
  },
  "{ :self | <primitive: return _self.screenY;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  },
  "{ :self | <primitive: return _self.x;> }",
);

sl.addTraitMethod(
  "MouseEvent",
  "DocumentObjectModel",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  },
  "{ :self | <primitive: return _self.y;> }",
);

sl.addTrait("Node", "DocumentObjectModel");

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "appendChild",
  ["self", "aChild"],
  function (_self, _aChild) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aChild";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.appendChild(_aChild);
  },
  "{ :self :aChild | <primitive: return _self.appendChild(_aChild);> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "childNodes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.childNodes;
  },
  "{ :self | <primitive: return _self.childNodes;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "cloneNode",
  ["self", "deep"],
  function (_self, _deep) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _deep";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cloneNode(_deep);
  },
  "{ :self :deep | <primitive: return _self.cloneNode(_deep);> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "firstChild",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.firstChild;
  },
  "{ :self | <primitive: return _self.firstChild;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "nextSibling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nextSibling;
  },
  "{ :self | <primitive: return _self.nextSibling;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "nodeType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nodeType;
  },
  "{ :self | <primitive: return _self.nodeType;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "nodeValue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.nodeValue;
  },
  "{ :self | <primitive: return _self.nodeValue;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "normalize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.normalize();
  },
  "{ :self | <primitive: return _self.normalize();> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "parentElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parentElement;
  },
  "{ :self | <primitive: return _self.parentElement;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "parentNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parentNode;
  },
  "{ :self | <primitive: return _self.parentNode;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "previousSibling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.previousSibling;
  },
  "{ :self | <primitive: return _self.previousSibling;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "textContent",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.textContent = _aString;
  },
  "{ :self :aString | <primitive: return _self.textContent = _aString;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "textContent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.textContent;
  },
  "{ :self | <primitive: return _self.textContent;> }",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "appendChildren",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_aList, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _appendChild_2(_self, _each);
    });
  },
  "{ :self :aList |\n\t\taList.do { :each |\n\t\t\tself.appendChild(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "isAllWhiteSpace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isAllWhiteSpace_1(_textContent_1(_self));
  },
  "{ :self |\n\t\tself.textContent.isAllWhiteSpace\n\t}",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "isAttribute",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 2);
  },
  "{ :self |\n\t\tself.nodeType = 2\n\t}",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "isCData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 4);
  },
  "{ :self |\n\t\tself.nodeType = 4\n\t}",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "isComment",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 8);
  },
  "{ :self |\n\t\tself.nodeType = 8\n\t}",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "isCommentOrWhiteSpace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_isComment_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_isText_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _isAllWhiteSpace_1(_self);
      });
    });
  },
  "{ :self |\n\t\tself.isComment | {\n\t\t\tself.isText & {\n\t\t\t\tself.isAllWhiteSpace\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "isElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 1);
  },
  "{ :self |\n\t\tself.nodeType = 1\n\t}",
);

sl.addTraitMethod(
  "Node",
  "DocumentObjectModel",
  "isText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_nodeType_1(_self), 3);
  },
  "{ :self |\n\t\tself.nodeType = 3\n\t}",
);

sl.addTrait("StyleSheet", "DocumentObjectModel");

sl.addTraitMethod(
  "StyleSheet",
  "DocumentObjectModel",
  "href",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.href;
  },
  "{ :self | <primitive: return _self.href;> }",
);

sl.addTraitMethod(
  "StyleSheet",
  "DocumentObjectModel",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.title;
  },
  "{ :self | <primitive: return _self.title;> }",
);

sl.addTraitMethod(
  "StyleSheet",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;> }",
);

sl.addTrait("Text", "DocumentObjectModel");

sl.addTraitMethod(
  "Text",
  "DocumentObjectModel",
  "assignedSlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.assignedSlot;
  },
  "{ :self | <primitive: return _self.assignedSlot;> }",
);

sl.addTraitMethod(
  "Text",
  "DocumentObjectModel",
  "splitText",
  ["self", "offset"],
  function (_self, _offset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _offset";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splitText(_offset);
  },
  "{ :self :offset | <primitive: return _self.splitText(_offset);> }",
);

sl.addTraitMethod(
  "Text",
  "DocumentObjectModel",
  "wholeText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.wholeText;
  },
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

sl.copyTraitToType(
  "Object",
  "Attr",
);

sl.copyTraitToType(
  "Node",
  "Attr",
);

sl.addMethod(
  "Attr",
  "DocumentObjectModel",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self | <primitive: return _self.name;> }",
);

sl.addMethod(
  "Attr",
  "DocumentObjectModel",
  "ownerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ownerElement;
  },
  "{ :self | <primitive: return _self.ownerElement;> }",
);

sl.addMethod(
  "Attr",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self | <primitive: return _self.value;> }",
);

sl.addType(
  true,
  "CanvasGradient",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
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

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "CanvasRenderingContext2D",
);

sl.addMethod(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "arcTo",
  ["self", "x1", "y1", "x2", "y2", "radius"],
  function (_self, _x1, _y1, _x2, _y2, _radius) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _x1, _y1, _x2, _y2, _radius";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arcTo(_x1, _y1, _x2, _y2, _radius);
  },
  "{ :self :x1 :y1 :x2 :y2 :radius |\n\t\t<primitive: return _self.arcTo(_x1, _y1, _x2, _y2, _radius);>\n\t}",
);

sl.addMethod(
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
      /* console.error(errorMessage); */
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
  "{ :self :x :y :radiusX :radiusY :rotation :startAngle :endAngle |\n\t\t<primitive: return _self.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle);>\n\t}",
);

sl.addMethod(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "fill",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.fill();
  },
  "{ :self |\n\t\t<primitive: return _self.fill();>\n\t}",
);

sl.addMethod(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "fillStyle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.fillStyle;
  },
  "{ :self |\n\t\t<primitive: return _self.fillStyle;>\n\t}",
);

sl.addMethod(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "fillStyle",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.fillStyle = _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive: return _self.fillStyle = _anObject;>\n\t}",
);

sl.addMethod(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "moveTo",
  ["self", "x", "y"],
  function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.moveTo(_x, _y);
  },
  "{ :self :x :y |\n\t\t<primitive: return _self.moveTo(_x, _y);>\n\t}",
);

sl.addMethod(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "rotate",
  ["self", "angle"],
  function (_self, _angle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _angle";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rotate(_angle);
  },
  "{ :self :angle |\n\t\t<primitive: return _self.rotate(_angle);>\n\t}",
);

sl.addMethod(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "transform",
  ["self", "a", "b", "c", "d", "e", "f"],
  function (_self, _a, _b, _c, _d, _e, _f) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _self, _a, _b, _c, _d, _e, _f";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.transform(_a, _b, _c, _d, _e, _f);
  },
  "{ :self :a :b :c :d :e :f |\n\t\t<primitive: return _self.transform(_a, _b, _c, _d, _e, _f);>\n\t}",
);

sl.addMethod(
  "CanvasRenderingContext2D",
  "DocumentObjectModel",
  "translate",
  ["self", "x", "y"],
  function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.translate(_x, _y);
  },
  "{ :self :x :y |\n\t\t<primitive: return _self.translate(_x, _y);>\n\t}",
);

sl.addType(
  true,
  "ClipboardEvent",
  "DocumentObjectModel",
  ["Object", "Event"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ClipboardEvent",
);

sl.copyTraitToType(
  "Event",
  "ClipboardEvent",
);

sl.addMethod(
  "ClipboardEvent",
  "DocumentObjectModel",
  "clipboardData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clipboardData;
  },
  "{ :self | <primitive: return _self.clipboardData;> }",
);

sl.addType(
  true,
  "CSSFontFaceRule",
  "DocumentObjectModel",
  ["Object", "CssRule"],
  [],
);

sl.copyTraitToType(
  "Object",
  "CSSFontFaceRule",
);

sl.copyTraitToType(
  "CssRule",
  "CSSFontFaceRule",
);

sl.addMethod(
  "CSSFontFaceRule",
  "DocumentObjectModel",
  "style",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.style;
  },
  "{ :self | <primitive: return _self.style;> }",
);

sl.addType(
  true,
  "CSSRuleList",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "CSSRuleList",
);

sl.addMethod(
  "CSSRuleList",
  "DocumentObjectModel",
  "item",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_index);
  },
  "{ :self :index | <primitive: return _self.item(_index);> }",
);

sl.addMethod(
  "CSSRuleList",
  "DocumentObjectModel",
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
  "CSSRuleList",
  "DocumentObjectModel",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _item_2(_self, _hyphenMinus_2(_index, 1));
  },
  "{ :self :index |\n\t\tself.item(index - 1) /* One-indexed */\n\t}",
);

sl.addMethod(
  "CSSRuleList",
  "DocumentObjectModel",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _length_1(_self);
  },
  "{ :self |\n\t\tself.length\n\t}",
);

sl.addType(
  true,
  "CSSStyleDeclaration",
  "DocumentObjectModel",
  ["Object", "CssProperties"],
  [],
);

sl.copyTraitToType(
  "Object",
  "CSSStyleDeclaration",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "CSS2Properties",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "CSSStyleRule",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "CSSStyleSheet",
);

sl.copyTraitToType(
  "StyleSheet",
  "CSSStyleSheet",
);

sl.addMethod(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "cssRuleList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return [..._self.cssRules];
  },
  "{ :self | <primitive: return [..._self.cssRules];> }",
);

sl.addMethod(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "cssRules",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cssRules;
  },
  "{ :self | <primitive: return _self.cssRules;> }",
);

sl.addMethod(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "deleteRule",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.deleteRule(_index);
  },
  "{ :self :index | <primitive: return _self.deleteRule(_index);> }",
);

sl.addMethod(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "insertRule",
  ["self", "rule", "index"],
  function (_self, _rule, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rule, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertRule(_rule, _index);
  },
  "{ :self :rule :index | <primitive: return _self.insertRule(_rule, _index);> }",
);

sl.addMethod(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "insertRule",
  ["self", "rule"],
  function (_self, _rule) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rule";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertRule(_rule);
  },
  "{ :self :rule | <primitive: return _self.insertRule(_rule);> }",
);

sl.addMethod(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "replace",
  ["self", "text"],
  function (_self, _text) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _text";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replace(_text);
  },
  "{ :self :text | <primitive: return _self.replace(_text);> }",
);

sl.addMethod(
  "CSSStyleSheet",
  "DocumentObjectModel",
  "replaceSync",
  ["self", "text"],
  function (_self, _text) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _text";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replaceSync(_text);
  },
  "{ :self :text | <primitive: return _self.replaceSync(_text);> }",
);

sl.addMethod(
  "Void",
  "DocumentObjectModel",
  "CssStyleSheet",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new CSSStyleSheet();
  },
  "{\n\t\t<primitive: return new CSSStyleSheet();>\n\t}",
);

sl.addMethod(
  "Record",
  "DocumentObjectModel",
  "CssStyleSheet",
  ["options"],
  function (_options) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new CSSStyleSheet(_options);
  },
  "{ :options |\n\t\t<primitive: return new CSSStyleSheet(_options);>\n\t}",
);

sl.addType(
  true,
  "CustomEvent",
  "DocumentObjectModel",
  ["Object", "Event"],
  [],
);

sl.copyTraitToType(
  "Object",
  "CustomEvent",
);

sl.copyTraitToType(
  "Event",
  "CustomEvent",
);

sl.addMethod(
  "CustomEvent",
  "DocumentObjectModel",
  "detail",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.detail;
  },
  "{ :self | <primitive: return _self.detail;> }",
);

sl.addType(
  true,
  "DataTransfer",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "DataTransfer",
);

sl.addMethod(
  "DataTransfer",
  "DocumentObjectModel",
  "getData",
  ["self", "format"],
  function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getData(_format);
  },
  "{ :self :format |  <primitive: return _self.getData(_format);> }",
);

sl.addMethod(
  "String",
  "DocumentObjectModel",
  "CustomEvent",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new CustomEvent(_self, _options);
  },
  "{ :self :options |\n\t\t<primitive: return new CustomEvent(_self, _options);>\n\t}",
);

sl.addType(
  true,
  "DocumentFragment",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node"],
  [],
);

sl.copyTraitToType(
  "Object",
  "DocumentFragment",
);

sl.copyTraitToType(
  "EventTarget",
  "DocumentFragment",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "DocumentTimeline",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "DOMMatrix",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "DOMMatrixReadOnly",
);

sl.copyTraitToType(
  "DOMMatrixReadOnly",
  "DOMMatrixReadOnly",
);

sl.addMethod(
  "List",
  "DocumentObjectModel",
  "DOMMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMMatrix(_self);
  },
  "{ :self |\n\t\t<primitive: return new DOMMatrix(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "DocumentObjectModel",
  "DOMMatrixReadOnly",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMMatrixReadOnly(_self);
  },
  "{ :self |\n\t\t<primitive: return new DOMMatrixReadOnly(_self);>\n\t}",
);

sl.addType(
  true,
  "DOMParser",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "DOMParser",
);

sl.addMethod(
  "DOMParser",
  "DocumentObjectModel",
  "parseFromString",
  ["self", "aString", "mimeType"],
  function (_self, _aString, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _mimeType";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parseFromString(_aString, _mimeType);
  },
  "{ :self :aString :mimeType |\n\t\t<primitive: return _self.parseFromString(_aString, _mimeType);>\n\t}",
);

sl.addMethod(
  "Void",
  "DocumentObjectModel",
  "DOMParser",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMParser();
  },
  "{\n\t\t<primitive: return new DOMParser();>\n\t}",
);

sl.addType(
  true,
  "DOMPoint",
  "DocumentObjectModel",
  ["Object", "DOMPointReadOnly"],
  [],
);

sl.copyTraitToType(
  "Object",
  "DOMPoint",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "DOMPointReadOnly",
);

sl.copyTraitToType(
  "DOMPointReadOnly",
  "DOMPointReadOnly",
);

sl.addMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "DOMPoint",
  ["self", "y", "z", "w"],
  function (_self, _y, _z, _w) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _y, _z, _w";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMPoint(_self, _y, _z, _w);
  },
  "{ :self :y :z :w |\n\t\t<primitive: return new DOMPoint(_self, _y, _z, _w);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "DOMPointReadOnly",
  ["self", "y", "z", "w"],
  function (_self, _y, _z, _w) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _y, _z, _w";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new DOMPointReadOnly(_self, _y, _z, _w);
  },
  "{ :self :y :z :w |\n\t\t<primitive: return new DOMPointReadOnly(_self, _y, _z, _w);>\n\t}",
);

sl.addMethod(
  "Record",
  "DocumentObjectModel",
  "DOMPointReadOnly",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return DOMPointReadOnly.fromPoint(_self);
  },
  "{ :self |\n\t\t<primitive: return DOMPointReadOnly.fromPoint(_self);>\n\t}",
);

sl.addType(
  true,
  "DocumentRange",
  "DocumentObjectModel",
  ["Object", "AbstractRange"],
  [],
);

sl.copyTraitToType(
  "Object",
  "DocumentRange",
);

sl.copyTraitToType(
  "AbstractRange",
  "DocumentRange",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "cloneRange",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cloneRange();
  },
  "{ :self | <primitive: return _self.cloneRange();> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "commonAncestorContainer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.commonAncestorContainer;
  },
  "{ :self | <primitive: return _self.commonAncestorContainer;> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "createContextualFragment",
  ["self", "tagString"],
  function (_self, _tagString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tagString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.createContextualFragment(_tagString);
  },
  "{ :self :tagString | <primitive: return _self.createContextualFragment(_tagString);> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "deleteContents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.deleteContents();
  },
  "{ :self | <primitive: return _self.deleteContents();> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "endContainer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.endContainer;
  },
  "{ :self | <primitive: return _self.endContainer;> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "endOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.endOffset + 1;
  },
  "{ :self | <primitive: return _self.endOffset + 1;> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "insertNode",
  ["self", "aNode"],
  function (_self, _aNode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNode";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.insertNode(_aNode);
  },
  "{ :self :aNode | <primitive: return _self.insertNode(_aNode);> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "selectNodeContents",
  ["self", "aNode"],
  function (_self, _aNode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNode";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectNodeContents(_aNode);
  },
  "{ :self :aNode | <primitive: return _self.selectNodeContents(_aNode);> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "setEnd",
  ["self", "endNode", "endOffset"],
  function (_self, _endNode, _endOffset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _endNode, _endOffset";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setEnd(_endNode, _endOffset - 1);
  },
  "{ :self :endNode :endOffset | <primitive: return _self.setEnd(_endNode, _endOffset - 1);> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "setStart",
  ["self", "startNode", "startOffset"],
  function (_self, _startNode, _startOffset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startNode, _startOffset";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setStart(_startNode, _startOffset - 1);
  },
  "{ :self :startNode :startOffset | <primitive: return _self.setStart(_startNode, _startOffset - 1);> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "startContainer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.startContainer;
  },
  "{ :self | <primitive: return _self.startContainer;> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "startOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.startOffset + 1;
  },
  "{ :self | <primitive: return _self.startOffset + 1;> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "toString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString();
  },
  "{ :self | <primitive: return _self.toString();> }",
);

sl.addMethod(
  "DocumentRange",
  "DocumentObjectModel",
  "isInTextAreaElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isElement_1(_startContainer_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isHTMLTextAreaElement_1(
        _at_2(_childNodes_1(_startContainer_1(_self)), _startOffset_1(_self)),
      );
    });
  },
  "{ :self |\n\t\tself.startContainer.isElement & {\n\t\t\tself.startContainer.childNodes[self.startOffset].isHTMLTextAreaElement\n\t\t}\n\t}",
);

sl.addType(
  true,
  "DOMRect",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "DOMRect",
);

sl.addMethod(
  "DOMRect",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethod(
  "DOMRect",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;> }",
);

sl.addMethod(
  "DOMRect",
  "DocumentObjectModel",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  },
  "{ :self | <primitive: return _self.x;> }",
);

sl.addMethod(
  "DOMRect",
  "DocumentObjectModel",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  },
  "{ :self | <primitive: return _self.y;> }",
);

sl.addMethod(
  "DOMRect",
  "DocumentObjectModel",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return ["x", "y", "width", "height"];
  },
  "{ :self |\n\t\t['x' 'y' 'width' 'height']\n\t}",
);

sl.addType(
  true,
  "DOMTokenList",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "DOMTokenList",
);

sl.addMethod(
  "DOMTokenList",
  "DocumentObjectModel",
  "add",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.add(_aString);
  },
  "{ :self :aString | <primitive: return _self.add(_aString);> }",
);

sl.addMethod(
  "DOMTokenList",
  "DocumentObjectModel",
  "contains",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.contains(_aString);
  },
  "{ :self :aString | <primitive: return _self.contains(_aString);> }",
);

sl.addMethod(
  "DOMTokenList",
  "DocumentObjectModel",
  "remove",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.remove(_aString);
  },
  "{ :self :aString | <primitive: return _self.remove(_aString);> }",
);

sl.addType(
  true,
  "HTMLBodyElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLBodyElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLBodyElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLBodyElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLBodyElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLButtonElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLButtonElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLButtonElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLButtonElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLCanvasElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLCanvasElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLCanvasElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLCanvasElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLCanvasElement",
);

sl.addMethod(
  "HTMLCanvasElement",
  "DocumentObjectModel",
  "getContext",
  ["self", "contextType", "contextAttributes"],
  function (_self, _contextType, _contextAttributes) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _contextType, _contextAttributes";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getContext(_contextType, _contextAttributes);
  },
  "{ :self :contextType :contextAttributes |\n\t\t<primitive: return _self.getContext(_contextType, _contextAttributes);>\n\t}",
);

sl.addMethod(
  "HTMLCanvasElement",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self |\n\t\t<primitive: return _self.height;>\n\t}",
);

sl.addMethod(
  "HTMLCanvasElement",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self |\n\t\t<primitive: return _self.width;>\n\t}",
);

sl.addType(
  true,
  "HTMLCollection",
  "DocumentObjectModel",
  ["Object", "HtmlCollection"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLCollection",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLDialogElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLDialogElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLDialogElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLDialogElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLDialogElement",
);

sl.addMethod(
  "HTMLDialogElement",
  "DocumentObjectModel",
  "close",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.close();
  },
  "{ :self | <primitive: return _self.close();> }",
);

sl.addMethod(
  "HTMLDialogElement",
  "DocumentObjectModel",
  "show",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.show();
  },
  "{ :self | <primitive: return _self.show();> }",
);

sl.addMethod(
  "HTMLDialogElement",
  "DocumentObjectModel",
  "showModal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.showModal();
  },
  "{ :self | <primitive: return _self.showModal();> }",
);

sl.addType(
  true,
  "HTMLDetailsElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLDetailsElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLDetailsElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLDetailsElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLDetailsElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLDivElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLDivElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLDivElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLDivElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLDocument",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLDocument",
);

sl.copyTraitToType(
  "Node",
  "HTMLDocument",
);

sl.copyTraitToType(
  "Element",
  "HTMLDocument",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLDocument",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLHeadingElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLHeadingElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLHeadingElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLHeadingElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLHtmlElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLHtmlElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLHtmlElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLHtmlElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLImageElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLImageElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLImageElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLImageElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLImageElement",
);

sl.addMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "alt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self | <primitive: return _self.value;> }",
);

sl.addMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "complete",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.complete;
  },
  "{ :self | <primitive: return _self.complete;> }",
);

sl.addMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "src",
  ["self", "url"],
  function (_self, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _url";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.src = _url;
  },
  "{ :self :url | <primitive: return _self.src = _url;> }",
);

sl.addMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "src",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.src;
  },
  "{ :self | <primitive: return _self.src;> }",
);

sl.addMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;> }",
);

sl.addMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.x;
  },
  "{ :self | <primitive: return _self.x;> }",
);

sl.addMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.y;
  },
  "{ :self | <primitive: return _self.y;> }",
);

sl.addMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "Image",
  ["self", "height"],
  function (_self, _height) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _height";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new Image(_self, _height);
  },
  "{ :self :height |\n\t\t<primitive: return new Image(_self, _height);>\n\t}",
);

sl.addType(
  true,
  "HTMLInputElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLInputElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLInputElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLInputElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLInputElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLInputElement",
);

sl.addMethod(
  "HTMLInputElement",
  "DocumentObjectModel",
  "selectionEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionEnd;
  },
  "{ :self |\n\t\t<primitive: return _self.selectionEnd;>\n\t}",
);

sl.addMethod(
  "HTMLInputElement",
  "DocumentObjectModel",
  "selectionStart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionStart;
  },
  "{ :self |\n\t\t<primitive: return _self.selectionStart;>\n\t}",
);

sl.addMethod(
  "HTMLInputElement",
  "DocumentObjectModel",
  "setSelectionRange",
  ["self", "selectionStart", "selectionEnd"],
  function (_self, _selectionStart, _selectionEnd) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectionStart, _selectionEnd";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setSelectionRange(selectionStart, selectionEnd);
  },
  "{ :self :selectionStart :selectionEnd |\n\t\t<primitive: return _self.setSelectionRange(selectionStart, selectionEnd);>\n\t}",
);

sl.addMethod(
  "HTMLInputElement",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self |\n\t\t<primitive: return _self.type;>\n\t}",
);

sl.addMethod(
  "HTMLInputElement",
  "DocumentObjectModel",
  "value",
  ["self", "aValue"],
  function (_self, _aValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aValue";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value = _aValue;
  },
  "{ :self :aValue |\n\t\t<primitive: return _self.value = _aValue;>\n\t}",
);

sl.addMethod(
  "HTMLInputElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self |\n\t\t<primitive: return _self.value;>\n\t}",
);

sl.addType(
  true,
  "HTMLLIElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLLIElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLLIElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLLIElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLLIElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLOptionsCollection",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLOptionElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLOptionElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLOptionElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLOptionElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLOptionElement",
);

sl.addMethod(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "index",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.index;
  },
  "{ :self | <primitive: return _self.index;> }",
);

sl.addMethod(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "label",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.label;
  },
  "{ :self | <primitive: return _self.label;> }",
);

sl.addMethod(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "selected",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selected;
  },
  "{ :self | <primitive: return _self.selected;> }",
);

sl.addMethod(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "text",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text = _aString;
  },
  "{ :self :aString | <primitive: return _self.text = _aString;> }",
);

sl.addMethod(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "text",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text;
  },
  "{ :self | <primitive: return _self.text;> }",
);

sl.addMethod(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "value",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value = _aString;
  },
  "{ :self :aString | <primitive: return _self.value = _aString;> }",
);

sl.addMethod(
  "HTMLOptionElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self | <primitive: return _self.value;> }",
);

sl.addType(
  true,
  "HTMLParagraphElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLParagraphElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLParagraphElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLParagraphElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLParagraphElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLPreElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLPreElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLPreElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLPreElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLSelectElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLSelectElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLSelectElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLSelectElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLSelectElement",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "add",
  ["self", "item", "before"],
  function (_self, _item, _before) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _item, _before";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.add(_item, _before);
  },
  "{ :self :item :before | <primitive: return _self.add(_item, _before);> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "labels",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.labels;
  },
  "{ :self | <primitive: return _self.labels;> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "length",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.length = _anInteger;> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
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
  "HTMLSelectElement",
  "DocumentObjectModel",
  "options",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.options;
  },
  "{ :self | <primitive: return _self.options;> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "remove",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.remove(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.remove(_anInteger);> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "selectedIndex",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectedIndex = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.selectedIndex = _anInteger;> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "selectedIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectedIndex;
  },
  "{ :self | <primitive: return _self.selectedIndex;> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "size",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.size = _anInteger;> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  },
  "{ :self | <primitive: return _self.size;> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;> }",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "deselect",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _selectedIndex_2(_self, -1);
  },
  "{ :self |\n\t\tself.selectedIndex := -1\n\t}",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "indexOf",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_aString), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return -1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(0, _hyphenMinus_2(_length_1(_self), 1), function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            /* console.error(errorMessage); */
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
                /* console.error(errorMessage); */
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
  "{ :self :aString |\n\t\taString.isEmpty.if {\n\t\t\t-1\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t0.toDo(self.length - 1) { :index |\n\t\t\t\t\t(self.options.item(index).value = aString).ifTrue {\n\t\t\t\t\t\tindex.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t-1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _length_2(_self, 0);
  },
  "{ :self |\n\t\tself.length := 0\n\t}",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "select",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _selectedIndex_2(_self, _indexOf_2(_self, _aString));
  },
  "{ :self :aString |\n\t\tself.selectedIndex := self.indexOf(aString)\n\t}",
);

sl.addMethod(
  "HTMLSelectElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_selectedIndex_1(_self), -1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return "";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_item_2(_self, _selectedIndex_1(_self)));
    });
  },
  "{ :self |\n\t\t(self.selectedIndex = -1).if {\n\t\t\t''\n\t\t} {\n\t\t\tself.item(self.selectedIndex).value\n\t\t}\n\t}",
);

sl.addType(
  true,
  "HTMLSpanElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLSpanElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLSpanElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLSpanElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLSpanElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLTableElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLTableElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLTableElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLTableElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLTableElement",
);

sl.addMethod(
  "HTMLTableElement",
  "DocumentObjectModel",
  "caption",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.caption;
  },
  "{ :self | <primitive: return _self.caption;> }",
);

sl.addMethod(
  "HTMLTableElement",
  "DocumentObjectModel",
  "rows",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rows;
  },
  "{ :self | <primitive: return _self.rows;> }",
);

sl.addMethod(
  "HTMLTableElement",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "DocumentObjectModel",
  "asHtmlRow",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tr = _createElement_1("tr");
    /* Statements */
    _do_2(_self, function (_cell) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _cell";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _td = _createElement_1("td");
      /* Statements */
      _textContent_2(_td, _toString_1(_cell));
      return _appendChild_2(_tr, _td);
    });
    return _tr;
  },
  "{ :self :toString:/1 |\n\t\tlet tr = 'tr'.createElement;\n\t\tself.do { :cell |\n\t\t\tlet td = 'td'.createElement;\n\t\t\ttd.textContent(cell.toString);\n\t\t\ttr.appendChild(td)\n\t\t};\n\t\ttr\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = _createElement_1("table");
    /* Statements */
    _do_2(_self, function (_row) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _row";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _appendChild_2(_table, _asHtmlRow_2(_row, _toString_1));
    });
    return _table;
  },
  "{ :self :toString:/1 |\n\t\tlet table = 'table'.createElement;\n\t\tself.do { :row |\n\t\t\ttable.appendChild(\n\t\t\t\trow.asHtmlRow(toString:/1)\n\t\t\t)\n\t\t};\n\t\ttable\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtmlTable_2(_self, _asString_1);
  },
  "{ :self |\n\t\tself.asHtmlTable(asString:/1)\n\t}",
);

sl.addMethod(
  "Association",
  "DocumentObjectModel",
  "asHtmlRow",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtmlRow_2(_asList_1(_self), _toString_1);
  },
  "{ :self :toString:/1 |\n\t\tself.asList.asHtmlRow(toString:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "DocumentObjectModel",
  "asHtmlTable",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtmlTable_2(_associations_1(_self), _toString_1);
  },
  "{ :self :toString:/1 |\n\t\tself.associations.asHtmlTable(toString:/1)\n\t}",
);

sl.addType(
  true,
  "HTMLTableCellElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLTableCellElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLTableCellElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLTableCellElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLTableCellElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLTableCellElement",
);

sl.addMethod(
  "HTMLTableCellElement",
  "DocumentObjectModel",
  "cellIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cellIndex;
  },
  "{ :self | <primitive: return _self.cellIndex;> }",
);

sl.addType(
  true,
  "HTMLTableColElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLTableColElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLTableColElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLTableColElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLTableColElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLTableRowElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLTableRowElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLTableRowElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLTableRowElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLTableSectionElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLTableSectionElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLTableSectionElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLTableSectionElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "HTMLTemplateElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLTemplateElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLTemplateElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLTemplateElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLTemplateElement",
);

sl.addMethod(
  "HTMLTemplateElement",
  "DocumentObjectModel",
  "content",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.content;
  },
  "{ :self | <primitive: return _self.content;> }",
);

sl.addType(
  true,
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLTextAreaElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLTextAreaElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLTextAreaElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLTextAreaElement",
);

sl.copyTraitToType(
  "HtmlElement",
  "HTMLTextAreaElement",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "cols",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cols = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.cols = _anInteger;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "cols",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cols;
  },
  "{ :self | <primitive: return _self.cols;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "readOnly",
  ["self", "aBoolean"],
  function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.readOnly = _aBoolean;
  },
  "{ :self :aBoolean | <primitive: return _self.readOnly = _aBoolean;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "readOnly",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.readOnly;
  },
  "{ :self | <primitive: return _self.readOnly;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "rows",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rows = _anInteger;
  },
  "{ :self :anInteger | <primitive: return _self.rows = _anInteger;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "rows",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rows;
  },
  "{ :self | <primitive: return _self.rows;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "selectionEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionEnd;
  },
  "{ :self | <primitive: return _self.selectionEnd;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "selectionStart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.selectionStart;
  },
  "{ :self | <primitive: return _self.selectionStart;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "setRangeText",
  ["self", "replacement", "startSelection", "endSelection", "selectMode"],
  function (_self, _replacement, _startSelection, _endSelection, _selectMode) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _replacement, _startSelection, _endSelection, _selectMode";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setRangeText(
      _replacement,
      _startSelection,
      _endSelection,
      _selectMode,
    );
  },
  "{ :self :replacement :startSelection :endSelection :selectMode | <primitive: return _self.setRangeText(_replacement, _startSelection, _endSelection, _selectMode);> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "setSelectionRange",
  ["self", "i", "j"],
  function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.setSelectionRange(_i, _j);
  },
  "{ :self :i :j | <primitive: return _self.setSelectionRange(_i, _j);> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "value",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value = _aString;
  },
  "{ :self :aString | <primitive: return _self.value = _aString;> }",
);

sl.addMethod(
  "HTMLTextAreaElement",
  "DocumentObjectModel",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.value;
  },
  "{ :self | <primitive: return _self.value;> }",
);

sl.addType(
  true,
  "HTMLUListElement",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "Element", "HtmlElement"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HTMLUListElement",
);

sl.copyTraitToType(
  "EventTarget",
  "HTMLUListElement",
);

sl.copyTraitToType(
  "Node",
  "HTMLUListElement",
);

sl.copyTraitToType(
  "Element",
  "HTMLUListElement",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "ImageBitmap",
);

sl.addMethod(
  "ImageBitmap",
  "DocumentObjectModel",
  "close",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.close();
  },
  "{ :self | <primitive: return _self.close();> }",
);

sl.addMethod(
  "ImageBitmap",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethod(
  "ImageBitmap",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;> }",
);

sl.addMethod(
  "Blob",
  "DocumentObjectModel",
  "ImageBitmap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return createImageBitmap(_self);
  },
  "{ :self | <primitive: return createImageBitmap(_self);> }",
);

sl.addMethod(
  "HTMLImageElement",
  "DocumentObjectModel",
  "ImageBitmap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return createImageBitmap(_self);
  },
  "{ :self | <primitive: return createImageBitmap(_self);> }",
);

sl.addType(
  true,
  "ImageData",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ImageData",
);

sl.addMethod(
  "ImageData",
  "DocumentObjectModel",
  "colorSpace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.colorSpace;
  },
  "{ :self | <primitive: return _self.colorSpace;> }",
);

sl.addMethod(
  "ImageData",
  "DocumentObjectModel",
  "data",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.data;
  },
  "{ :self | <primitive: return _self.data;> }",
);

sl.addMethod(
  "ImageData",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethod(
  "ImageData",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;> }",
);

sl.addType(
  true,
  "KeyboardEvent",
  "DocumentObjectModel",
  ["Object", "UiEvent", "Event"],
  [],
);

sl.copyTraitToType(
  "Object",
  "KeyboardEvent",
);

sl.copyTraitToType(
  "UiEvent",
  "KeyboardEvent",
);

sl.copyTraitToType(
  "Event",
  "KeyboardEvent",
);

sl.addMethod(
  "KeyboardEvent",
  "DocumentObjectModel",
  "ctrlKey",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ctrlKey;
  },
  "{ :self | <primitive: return _self.ctrlKey;> }",
);

sl.addMethod(
  "KeyboardEvent",
  "DocumentObjectModel",
  "key",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.key;
  },
  "{ :self | <primitive: return _self.key;> }",
);

sl.addMethod(
  "KeyboardEvent",
  "DocumentObjectModel",
  "shiftKey",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.shiftKey;
  },
  "{ :self | <primitive: return _self.shiftKey;> }",
);

sl.addType(
  true,
  "MediaSource",
  "DocumentObjectModel",
  ["Object", "EventTarget"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MediaSource",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "MouseEvent",
);

sl.copyTraitToType(
  "UiEvent",
  "MouseEvent",
);

sl.copyTraitToType(
  "Event",
  "MouseEvent",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "NamedNodeMap",
);

sl.addMethod(
  "NamedNodeMap",
  "DocumentObjectModel",
  "getNamedItem",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getNamedItem(aString);
  },
  "{ :self :aString | <primitive: return _self.getNamedItem(aString);> }",
);

sl.addMethod(
  "NamedNodeMap",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);> }",
);

sl.addMethod(
  "NamedNodeMap",
  "DocumentObjectModel",
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

sl.addType(
  true,
  "NodeList",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "NodeList",
);

sl.addMethod(
  "NodeList",
  "DocumentObjectModel",
  "item",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.item(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self.item(_anInteger);> }",
);

sl.addMethod(
  "NodeList",
  "DocumentObjectModel",
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
  "NodeList",
  "DocumentObjectModel",
  "at",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _item_2(_self, _hyphenMinus_2(_anInteger, 1));
  },
  "{ :self :anInteger |\n\t\tself.item(anInteger - 1) /* One-indexed */\n\t}",
);

sl.addType(
  true,
  "OffscreenCanvas",
  "DocumentObjectModel",
  ["Object", "EventTarget"],
  [],
);

sl.copyTraitToType(
  "Object",
  "OffscreenCanvas",
);

sl.copyTraitToType(
  "EventTarget",
  "OffscreenCanvas",
);

sl.addMethod(
  "OffscreenCanvas",
  "DocumentObjectModel",
  "getContext",
  ["self", "contextType", "contextAttributes"],
  function (_self, _contextType, _contextAttributes) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _contextType, _contextAttributes";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getContext(_contextType, _contextAttributes);
  },
  "{ :self :contextType :contextAttributes |\n\t\t<primitive: return _self.getContext(_contextType, _contextAttributes);>\n\t}",
);

sl.addType(
  true,
  "OffscreenCanvasRenderingContext2D",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "OffscreenCanvasRenderingContext2D",
);

sl.addMethod(
  "SmallFloat",
  "DocumentObjectModel",
  "OffscreenCanvas",
  ["self", "height"],
  function (_self, _height) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _height";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new OffscreenCanvas(_self, _height);
  },
  "{ :self :height |\n\t\t<primitive: return new OffscreenCanvas(_self, _height);>\n\t}",
);

sl.addType(
  true,
  "Path2D",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "PointerEvent",
);

sl.copyTraitToType(
  "UiEvent",
  "PointerEvent",
);

sl.copyTraitToType(
  "Event",
  "PointerEvent",
);

sl.copyTraitToType(
  "MouseEvent",
  "PointerEvent",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "altitudeAngle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.altitudeAngle;
  },
  "{ :self | <primitive: return _self.altitudeAngle;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "azimuthAngle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.azimuthAngle;
  },
  "{ :self | <primitive: return _self.azimuthAngle;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.height;
  },
  "{ :self | <primitive: return _self.height;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "isPrimary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isPrimary;
  },
  "{ :self | <primitive: return _self.isPrimary;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "pointerId",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pointerId;
  },
  "{ :self | <primitive: return _self.pointerId;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "pointerType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pointerType;
  },
  "{ :self | <primitive: return _self.pointerType;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "pressure",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pressure;
  },
  "{ :self | <primitive: return _self.pressure;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "tangentialPressure",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tangentialPressure;
  },
  "{ :self | <primitive: return _self.tangentialPressure;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "tiltX",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tiltX;
  },
  "{ :self | <primitive: return _self.tiltX;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "tiltY",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.tiltY;
  },
  "{ :self | <primitive: return _self.tiltY;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "twist",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.twist;
  },
  "{ :self | <primitive: return _self.twist;> }",
);

sl.addMethod(
  "PointerEvent",
  "DocumentObjectModel",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.width;
  },
  "{ :self | <primitive: return _self.width;> }",
);

sl.addType(
  true,
  "Selection",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Selection",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "anchorNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.anchorNode;
  },
  "{ :self | <primitive: return _self.anchorNode;> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "anchorOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.anchorOffset + 1;
  },
  "{ :self | <primitive: return _self.anchorOffset + 1;> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "collapse",
  ["self", "node", "offset"],
  function (_self, _node, _offset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _node, _offset";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.collapse(_node, _offset);
  },
  "{ :self :node :offset | <primitive: return _self.collapse(_node, _offset);> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "collapseToEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.collapseToEnd();
  },
  "{ :self | <primitive: return _self.collapseToEnd();> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "collapseToStart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.collapseToStart();
  },
  "{ :self | <primitive: return _self.collapseToStart();> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "containsNode",
  ["self", "node", "partialContainment"],
  function (_self, _node, _partialContainment) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _node, _partialContainment";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.containsNode(_node, _partialContainment);
  },
  "{ :self :node :partialContainment | <primitive: return _self.containsNode(_node, _partialContainment);> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "direction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.direction;
  },
  "{ :self | <primitive: return _self.direction;> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "focusNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focusNode;
  },
  "{ :self | <primitive: return _self.focusNode;> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "focusOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.focusOffset + 1;
  },
  "{ :self | <primitive: return _self.focusOffset + 1;> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "getRangeAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getRangeAt(_anInteger - 1);
  },
  "{ :self :anInteger | <primitive: return _self.getRangeAt(_anInteger - 1);> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "rangeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rangeCount;
  },
  "{ :self | <primitive: return _self.rangeCount;> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "removeAllRanges",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeAllRanges();
  },
  "{ :self | <primitive: return _self.removeAllRanges();> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "toString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString();
  },
  "{ :self | <primitive: return _self.toString();> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;> }",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "isCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_type_1(_self), "Caret");
  },
  "{ :self |\n\t\tself.type = 'Caret'\n\t}",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "isRange",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_type_1(_self), "Range");
  },
  "{ :self |\n\t\tself.type = 'Range'\n\t}",
);

sl.addMethod(
  "Selection",
  "DocumentObjectModel",
  "range",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_rangeCount_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _getRangeAt_2(_self, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Selection>>range: more than one range");
    });
  },
  "{ :self |\n\t\t(self.rangeCount = 1).if {\n\t\t\tself.getRangeAt(1)\n\t\t} {\n\t\t\tself.error('Selection>>range: more than one range')\n\t\t}\n\t}",
);

sl.addType(
  true,
  "Text",
  "DocumentObjectModel",
  ["Object", "EventTarget", "Node", "CharacterData"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Text",
);

sl.copyTraitToType(
  "EventTarget",
  "Text",
);

sl.copyTraitToType(
  "Node",
  "Text",
);

sl.copyTraitToType(
  "CharacterData",
  "Text",
);

sl.addMethod(
  "Text",
  "DocumentObjectModel",
  "wholeText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.wholeText;
  },
  "{ :self | <primitive: return _self.wholeText;> }",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "document",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.document;
  },
  "{ :self | <primitive: return _self.document;> }",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "getComputedStyle",
  ["self", "element"],
  function (_self, _element) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _element";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getComputedStyle(_element);
  },
  "{ :self :element | <primitive: return _self.getComputedStyle(_element);> }",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "getSelection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  },
  "{ :self | <primitive: return _self.getSelection();> }",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "innerHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerHeight;
  },
  "{ :self | <primitive: return _self.innerHeight;> }",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "innerWidth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.innerWidth;
  },
  "{ :self | <primitive: return _self.innerWidth;> }",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "caretBoundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _getBoundingClientRect_1(_elementAtCaret_1(_self));
  },
  "{ :self |\n\t\tself.elementAtCaret.getBoundingClientRect\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "caretBoundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _getBoundingClientRect_1(_elementAtCaret_1(_self));
  },
  "{ :self |\n\t\tself.elementAtCaret.getBoundingClientRect\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "caretIsInTextAreaElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isInTextAreaElement_1(_range_1(_selection_1(_self)));
  },
  "{ :self |\n\t\tself.selection.range.isInTextAreaElement\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "caretIsInTextAreaElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isInTextAreaElement_1(_range_1(_selection_1(_self)));
  },
  "{ :self |\n\t\tself.selection.range.isInTextAreaElement\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "caretIsInTextNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isText_1(_startContainer_1(_range_1(_selection_1(_self))));
  },
  "{ :self |\n\t\tself.selection.range.startContainer.isText\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "caretIsInTextNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isText_1(_startContainer_1(_range_1(_selection_1(_self))));
  },
  "{ :self |\n\t\tself.selection.range.startContainer.isText\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "elementAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _startContainer_1(_range_1(_selection_1(_self)));
    /* Statements */
    return _if_3(_isText_1(_c), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _parentElement_1(_c);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isElement_1(_c), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _c;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "elementAtCaret: not text or element?");
      });
    });
  },
  "{ :self |\n\t\tlet c = self.selection.range.startContainer;\n\t\tc.isText.if {\n\t\t\tc.parentElement\n\t\t} {\n\t\t\tc.isElement.if {\n\t\t\t\tc\n\t\t\t} {\n\t\t\t\tself.error('elementAtCaret: not text or element?')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "elementAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _startContainer_1(_range_1(_selection_1(_self)));
    /* Statements */
    return _if_3(_isText_1(_c), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _parentElement_1(_c);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isElement_1(_c), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _c;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "elementAtCaret: not text or element?");
      });
    });
  },
  "{ :self |\n\t\tlet c = self.selection.range.startContainer;\n\t\tc.isText.if {\n\t\t\tc.parentElement\n\t\t} {\n\t\t\tc.isElement.if {\n\t\t\t\tc\n\t\t\t} {\n\t\t\t\tself.error('elementAtCaret: not text or element?')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "insertStringAtCaret",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _insertNode_2(
      _range_1(_selection_1(_self)),
      _createTextNode_2(_document_1(_self), _aString),
    );
  },
  "{ :self :aString |\n\t\tself.selection.range.insertNode(\n\t\t\tself.document.createTextNode(\n\t\t\t\taString\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "insertStringAtCaret",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _insertNode_2(
      _range_1(_selection_1(_self)),
      _createTextNode_2(_document_1(_self), _aString),
    );
  },
  "{ :self :aString |\n\t\tself.selection.range.insertNode(\n\t\t\tself.document.createTextNode(\n\t\t\t\taString\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "paragraphAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _range_1(_selection_1(_self));
    /* Statements */
    return _if_3(_isInTextAreaElement_1(_range), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isText_1(_startContainer_1(_range)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
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
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _index = _hyphenMinus_2(_index, 1);
          },
        );
        return _if_3(_includesIndex_2(_text, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _paragraphAtIndex_2(_text, _index);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "paragraphAtCaret: invalid index");
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "paragraphAtCaret: unimplemented start container type",
        );
      });
    });
  },
  "{ :self |\n\t\tlet range = self.selection.range;\n\t\trange.isInTextAreaElement.if {\n\t\t\tlet textArea = range.startContainer.childNodes[range.startOffset];\n\t\t\ttextArea.value.paragraphAtIndex(textArea.selectionStart)\n\t\t} {\n\t\t\trange.startContainer.isText.if {\n\t\t\t\tlet text = range.startContainer.nodeValue;\n\t\t\t\tlet index = range.startOffset;\n\t\t\t\t(text.size + 1 = index).ifTrue {\n\t\t\t\t\tindex := index - 1\n\t\t\t\t};\n\t\t\t\ttext.includesIndex(index).if {\n\t\t\t\t\ttext.paragraphAtIndex(index)\n\t\t\t\t} {\n\t\t\t\t\tself.error('paragraphAtCaret: invalid index')\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.error('paragraphAtCaret: unimplemented start container type')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "paragraphAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _range_1(_selection_1(_self));
    /* Statements */
    return _if_3(_isInTextAreaElement_1(_range), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isText_1(_startContainer_1(_range)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
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
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _index = _hyphenMinus_2(_index, 1);
          },
        );
        return _if_3(_includesIndex_2(_text, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _paragraphAtIndex_2(_text, _index);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "paragraphAtCaret: invalid index");
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "paragraphAtCaret: unimplemented start container type",
        );
      });
    });
  },
  "{ :self |\n\t\tlet range = self.selection.range;\n\t\trange.isInTextAreaElement.if {\n\t\t\tlet textArea = range.startContainer.childNodes[range.startOffset];\n\t\t\ttextArea.value.paragraphAtIndex(textArea.selectionStart)\n\t\t} {\n\t\t\trange.startContainer.isText.if {\n\t\t\t\tlet text = range.startContainer.nodeValue;\n\t\t\t\tlet index = range.startOffset;\n\t\t\t\t(text.size + 1 = index).ifTrue {\n\t\t\t\t\tindex := index - 1\n\t\t\t\t};\n\t\t\t\ttext.includesIndex(index).if {\n\t\t\t\t\ttext.paragraphAtIndex(index)\n\t\t\t\t} {\n\t\t\t\t\tself.error('paragraphAtCaret: invalid index')\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.error('paragraphAtCaret: unimplemented start container type')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selectedText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection().toString();
  },
  "{ :self |\n\t\t<primitive: return _self.getSelection().toString();>\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "selectedText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection().toString();
  },
  "{ :self |\n\t\t<primitive: return _self.getSelection().toString();>\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selectedTextOrParagraphAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _paragraphAtCaret_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _text;
    });
  },
  "{ :self |\n\t\tlet text = self.selectedText;\n\t\ttext.isEmpty.if {\n\t\t\tself.paragraphAtCaret\n\t\t} {\n\t\t\ttext\n\t\t}\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "selectedTextOrParagraphAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _paragraphAtCaret_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _text;
    });
  },
  "{ :self |\n\t\tlet text = self.selectedText;\n\t\ttext.isEmpty.if {\n\t\t\tself.paragraphAtCaret\n\t\t} {\n\t\t\ttext\n\t\t}\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selectedTextOrWordAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _wordAtCaret_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _text;
    });
  },
  "{ :self |\n\t\tlet text = self.selectedText;\n\t\ttext.isEmpty.if {\n\t\t\tself.wordAtCaret\n\t\t} {\n\t\t\ttext\n\t\t}\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "selectedTextOrWordAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _text = _selectedText_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_text), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _wordAtCaret_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _text;
    });
  },
  "{ :self |\n\t\tlet text = self.selectedText;\n\t\ttext.isEmpty.if {\n\t\t\tself.wordAtCaret\n\t\t} {\n\t\t\ttext\n\t\t}\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "selection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  },
  "{ :self |\n\t\t<primitive: return _self.getSelection();>\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "selection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getSelection();
  },
  "{ :self |\n\t\t<primitive: return _self.getSelection();>\n\t}",
);

sl.addMethod(
  "HTMLDocument",
  "DocumentObjectModel",
  "wordAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _selection = _selection_1(_self);
    let _text = _textContent_1(_focusNode_1(_selection));
    let _index = _focusOffset_1(_selection);
    /* Statements */
    return _wordAtIndex_2(_text, _index);
  },
  "{ :self |\n\t\tlet selection = self.selection;\n\t\tlet text = selection.focusNode.textContent;\n\t\tlet index = selection.focusOffset;\n\t\ttext.wordAtIndex(index)\n\t}",
);

sl.addMethod(
  "Window",
  "DocumentObjectModel",
  "wordAtCaret",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _selection = _selection_1(_self);
    let _text = _textContent_1(_focusNode_1(_selection));
    let _index = _focusOffset_1(_selection);
    /* Statements */
    return _wordAtIndex_2(_text, _index);
  },
  "{ :self |\n\t\tlet selection = self.selection;\n\t\tlet text = selection.focusNode.textContent;\n\t\tlet index = selection.focusOffset;\n\t\ttext.wordAtIndex(index)\n\t}",
);

sl.addType(
  true,
  "WebGLRenderingContext",
  "DocumentObjectModel",
  ["Object"],
  [],
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "XMLDocument",
);

sl.copyTraitToType(
  "EventTarget",
  "XMLDocument",
);

sl.copyTraitToType(
  "Node",
  "XMLDocument",
);

sl.copyTraitToType(
  "Document",
  "XMLDocument",
);
