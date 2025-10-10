/*  Requires: EventTarget Url  */

sl.addType(
  true,
  "WebSocket",
  "WebSocket",
  ["Object", "EventTarget"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "WebSocket",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "WebSocket",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "basicOnOpen",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.onopen = _aBlock_1;
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\t_self.onopen = _aBlock_1;\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "binaryType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.binaryType;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.binaryType;>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "binaryType",
  ["self", "value"],
  sl.annotateFunction(function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.binaryType = _value;
    return _self;
  }, ["self", "value"]),
  "{ :self :value |\n\t\t<primitive:\n\t\t_self.binaryType = _value;\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "bufferedAmount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.bufferedAmount;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.bufferedAmount;>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
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
  "{ :self |\n\t\t<primitive: return _self.close();>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "close",
  ["self", "code", "reason"],
  sl.annotateFunction(function (_self, _code, _reason) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _code, _reason";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.close(_code, _reason);
  }, ["self", "code", "reason"]),
  "{ :self :code :reason |\n\t\t<primitive: return _self.close(_code, _reason);>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "extensions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.extensions;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.extensions;>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "onClose",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.onclose = _aBlock_1;
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\t_self.onclose = _aBlock_1;\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "onMessage",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.onmessage = _aBlock_1;
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\t_self.onmessage = _aBlock_1;\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "onOpen",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicOnOpen_2(
      _self,
      sl.annotateFunction(function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        } /* Statements */
        return _cull_2(_aBlock, _event);
      }, ["event"]),
    );
  }, ["self", "aBlock"]),
  "{ :self :aBlock |\n\t\tself.basicOnOpen { :event |\n\t\t\taBlock.cull(event)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "protocol",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.protocol;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.protocol;>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "readyState",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.readyState;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.readyState;>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "send",
  ["self", "data"],
  sl.annotateFunction(function (_self, _data) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _data";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.send(_data);
  }, ["self", "data"]),
  "{ :self :data |\n\t\t<primitive: return _self.send(_data);>\n\t}",
);

sl.addMethodToExistingType(
  "WebSocket",
  "WebSocket",
  "url",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.url;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.url;>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "WebSocket",
  "WebSocket",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new WebSocket(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new WebSocket(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "WebSocket",
  "WebSocket",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new WebSocket(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new WebSocket(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "WebSocket",
  "WebSocket",
  ["self", "protocols"],
  sl.annotateFunction(function (_self, _protocols) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _protocols";
      throw new Error(errorMessage);
    } /* Primitive */
    return new WebSocket(_self, _protocols);
  }, ["self", "protocols"]),
  "{ :self :protocols |\n\t\t<primitive: return new WebSocket(_self, _protocols);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "WebSocket",
  "WebSocket",
  ["self", "protocols"],
  sl.annotateFunction(function (_self, _protocols) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _protocols";
      throw new Error(errorMessage);
    } /* Primitive */
    return new WebSocket(_self, _protocols);
  }, ["self", "protocols"]),
  "{ :self :protocols |\n\t\t<primitive: return new WebSocket(_self, _protocols);>\n\t}",
);
