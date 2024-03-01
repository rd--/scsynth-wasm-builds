/* {- Requires: EventTarget Url -} */

sl.addType(
  true,
  "WebSocket",
  "WebSocket",
  ["Object", "EventTarget"],
  [],
);

sl.copyTraitToType(
  "Object",
  "WebSocket",
);

sl.copyTraitToType(
  "EventTarget",
  "WebSocket",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "basicOnOpen",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.onopen = _aBlock_1;
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\t_self.onopen = _aBlock_1;\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "binaryType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.binaryType;
  },
  "{ :self |\n\t\t<primitive: return _self.binaryType;>\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "binaryType",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.binaryType = _value;
    return _self;
  },
  "{ :self :value |\n\t\t<primitive:\n\t\t_self.binaryType = _value;\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "bufferedAmount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.bufferedAmount;
  },
  "{ :self |\n\t\t<primitive: return _self.bufferedAmount;> {- Read only -}\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "close",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.close();
  },
  "{ :self |\n\t\t<primitive: return _self.close();>\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "close",
  ["self", "code", "reason"],
  function (_self, _code, _reason) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _code, _reason";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.close(_code, _reason);
  },
  "{ :self :code :reason |\n\t\t<primitive: return _self.close(_code, _reason);>\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "extensions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.extensions;
  },
  "{ :self |\n\t\t<primitive: return _self.extensions;> {- Read only -}\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "onClose",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.onclose = _aBlock_1;
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\t_self.onclose = _aBlock_1;\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "onMessage",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.onmessage = _aBlock_1;
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\t_self.onmessage = _aBlock_1;\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "onOpen",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _basicOnOpen_2(_self, function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _cull_2(_aBlock, _event);
    });
  },
  "{ :self :aBlock |\n\t\tself.basicOnOpen { :event |\n\t\t\taBlock.cull(event)\n\t\t}\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "protocol",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.protocol;
  },
  "{ :self |\n\t\t<primitive: return _self.protocol;> {- Read only -}\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "readyState",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.readyState;
  },
  "{ :self |\n\t\t<primitive: return _self.readyState;> {- Read only -}\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "send",
  ["self", "data"],
  function (_self, _data) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _data";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.send(_data);
  },
  "{ :self :data |\n\t\t<primitive: return _self.send(_data);>\n\t}",
);

sl.addMethod(
  "WebSocket",
  "WebSocket",
  "url",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.url;
  },
  "{ :self |\n\t\t<primitive: return _self.url;> {- Read only -}\n\t}",
);

sl.addMethod(
  "String",
  "WebSocket",
  "WebSocket",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new WebSocket(_self);
  },
  "{ :self |\n\t\t<primitive: return new WebSocket(_self);>\n\t}",
);

sl.addMethod(
  "URL",
  "WebSocket",
  "WebSocket",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new WebSocket(_self);
  },
  "{ :self |\n\t\t<primitive: return new WebSocket(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "WebSocket",
  "WebSocket",
  ["self", "protocols"],
  function (_self, _protocols) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _protocols";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new WebSocket(_self, _protocols);
  },
  "{ :self :protocols |\n\t\t<primitive: return new WebSocket(_self, _protocols);>\n\t}",
);

sl.addMethod(
  "URL",
  "WebSocket",
  "WebSocket",
  ["self", "protocols"],
  function (_self, _protocols) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _protocols";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new WebSocket(_self, _protocols);
  },
  "{ :self :protocols |\n\t\t<primitive: return new WebSocket(_self, _protocols);>\n\t}",
);
