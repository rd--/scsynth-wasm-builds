sl.addType(
  true,
  "Response",
  "Response",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Response",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "arrayBuffer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arrayBuffer();
  },
  "{ :self | <primitive: return _self.arrayBuffer();>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "asMimeType",
  ["self", "mimeType", "onError"],
  function (_self, _mimeType, _onError) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mimeType, _onError";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_mimeType, [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "application/json";
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _json_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "application/octet-stream";
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _byteArray_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "text/plain";
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _text_1(_self);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _cull_2(
        _onError,
        _Error_1(
          _plusSignPlusSign_2(
            "Response>>asMimeType: unknown mimeType: ",
            _mimeType,
          ),
        ),
      );
    });
  },
  "{ :self :mimeType :onError | caseOfOtherwise(mimeType, [->({ 'application/json' }, { json(self) }), ->({ 'application/octet-stream' }, { byteArray(self) }), ->({ 'text/plain' }, { text(self) })], { cull(onError,Error(++('Response>>asMimeType: unknown mimeType: ', mimeType))) }) }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "asMimeType",
  ["self", "mimeType"],
  function (_self, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mimeType";
      throw new Error(errorMessage);
    } /* Statements */
    return _asMimeType_3(_self, _mimeType, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, _err);
    });
  },
  "{ :self :mimeType | asMimeType(self, mimeType, { :err | error(self,err) }) }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "blob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.blob();
  },
  "{ :self | <primitive: return _self.blob();>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
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

sl.addMethodToExistingType(
  "Response",
  "Response",
  "bodyUsed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.bodyUsed;
  },
  "{ :self | <primitive: return _self.bodyUsed;>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "byteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arrayBuffer().then(function (b) {
      return new Uint8Array(b);
    });
  },
  "{ :self | <primitive: return _self.arrayBuffer().then(function(b) {\n\t\t\treturn new Uint8Array(b);\n\t\t});>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "clone",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clone();
  },
  "{ :self | <primitive: return _self.clone();>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "headers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.headers;
  },
  "{ :self | <primitive: return _self.headers;>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "json",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.json();
  },
  "{ :self | <primitive: return _self.json();>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "ok",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ok;
  },
  "{ :self | <primitive: return _self.ok;>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["ok"];
  },
  "{ :self | ['ok'] }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "status",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.status;
  },
  "{ :self | <primitive: return _self.status;>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "statusText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.statusText;
  },
  "{ :self | <primitive: return _self.statusText;>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "text",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text();
  },
  "{ :self | <primitive: return _self.text();>\n }",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
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
  "Response",
  "Response",
  "url",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.url;
  },
  "{ :self | <primitive: return _self.url;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "ArrayBuffer",
  "Response",
  "Response",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  },
  "{ :self :options | <primitive: return new Response(_self, _options);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Blob",
  "Response",
  "Response",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  },
  "{ :self :options | <primitive: return new Response(_self, _options);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "Response",
  "Response",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  },
  "{ :self :options | <primitive: return new Response(_self, _options);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Float32Array",
  "Response",
  "Response",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  },
  "{ :self :options | <primitive: return new Response(_self, _options);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "Response",
  "Response",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  },
  "{ :self :options | <primitive: return new Response(_self, _options);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Response",
  "Response",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  },
  "{ :self :options | <primitive: return new Response(_self, _options);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "ArrayBuffer",
  "Response",
  "Response",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_1([]),
      ]]),
    );
  },
  "{ :self | Response(self, Record([['status', 200], ['statusText', ''], ['headers', Record([])]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "Blob",
  "Response",
  "Response",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_1([]),
      ]]),
    );
  },
  "{ :self | Response(self, Record([['status', 200], ['statusText', ''], ['headers', Record([])]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "Response",
  "Response",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_1([]),
      ]]),
    );
  },
  "{ :self | Response(self, Record([['status', 200], ['statusText', ''], ['headers', Record([])]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "Float32Array",
  "Response",
  "Response",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_1([]),
      ]]),
    );
  },
  "{ :self | Response(self, Record([['status', 200], ['statusText', ''], ['headers', Record([])]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "Response",
  "Response",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_1([]),
      ]]),
    );
  },
  "{ :self | Response(self, Record([['status', 200], ['statusText', ''], ['headers', Record([])]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Response",
  "Response",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_1([]),
      ]]),
    );
  },
  "{ :self | Response(self, Record([['status', 200], ['statusText', ''], ['headers', Record([])]])) }",
);
