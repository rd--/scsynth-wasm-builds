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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arrayBuffer();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.arrayBuffer();>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "asMimeType",
  ["self", "mimeType", "onError"],
  sl.annotateFunction(function (_self, _mimeType, _onError) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mimeType, _onError";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _mimeType,
      [
        _hyphenMinusGreaterThanSign_2(
          "application/json",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _json_1(_self);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "application/octet-stream",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _byteArray_1(_self);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "text/plain",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _text_1(_self);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
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
      }, []),
    );
  }, ["self", "mimeType", "onError"]),
  "{ :self :mimeType :onError |\n\t\tmimeType.caseOf([\n\t\t\t'application/json' -> {\n\t\t\t\tself.json\n\t\t\t},\n\t\t\t'application/octet-stream' -> {\n\t\t\t\tself.byteArray\n\t\t\t},\n\t\t\t'text/plain' -> {\n\t\t\t\tself.text\n\t\t\t}\n\t\t]) {\n\t\t\tonError.cull(\n\t\t\t\tError('Response>>asMimeType: unknown mimeType: ' ++ mimeType)\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "asMimeType",
  ["self", "mimeType"],
  sl.annotateFunction(function (_self, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mimeType";
      throw new Error(errorMessage);
    } /* Statements */
    return _asMimeType_3(
      _self,
      _mimeType,
      sl.annotateFunction(function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, _err);
      }, ["err"]),
    );
  }, ["self", "mimeType"]),
  "{ :self :mimeType |\n\t\tself.asMimeType(mimeType) { :err |\n\t\t\tself.error(err)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "binaryLargeObject",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.blob();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.blob();>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
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

sl.addMethodToExistingType(
  "Response",
  "Response",
  "bodyUsed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.bodyUsed;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.bodyUsed;>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "byteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arrayBuffer().then(function (b) {
      return new Uint8Array(b);
    });
  }, ["self"]),
  "{ :self |\n\t\t<primitive:\n\t\treturn _self.arrayBuffer().then(function(b) {\n\t\t\treturn new Uint8Array(b);\n\t\t});\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "clone",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clone();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.clone();>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "headers",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.headers;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.headers;>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "json",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.json();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.json();>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "ok",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ok;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.ok;>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["ok"];
  }, ["self"]),
  "{ :self |\n\t\t['ok']\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "status",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.status;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.status;>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "statusText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.statusText;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.statusText;>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
  "text",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.text();>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
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
  "{ :self |\n\t\t<primitive: return _self.type;>\n\t}",
);

sl.addMethodToExistingType(
  "Response",
  "Response",
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
  "ArrayBuffer",
  "Response",
  "Response",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\t<primitive: return new Response(_self, _options);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "BinaryLargeObject",
  "Response",
  "Response",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\t<primitive: return new Response(_self, _options);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "Response",
  "Response",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\t<primitive: return new Response(_self, _options);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float32Array",
  "Response",
  "Response",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\t<primitive: return new Response(_self, _options);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "Response",
  "Response",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\t<primitive: return new Response(_self, _options);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Response",
  "Response",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Response(_self, _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\t<primitive: return new Response(_self, _options);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ArrayBuffer",
  "Response",
  "Response",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_0(),
      ]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tResponse(\n\t\t\tself,\n\t\t\t(\n\t\t\t\tstatus: 200,\n\t\t\t\tstatusText: '',\n\t\t\t\theaders: (:)\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "BinaryLargeObject",
  "Response",
  "Response",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_0(),
      ]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tResponse(\n\t\t\tself,\n\t\t\t(\n\t\t\t\tstatus: 200,\n\t\t\t\tstatusText: '',\n\t\t\t\theaders: (:)\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "Response",
  "Response",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_0(),
      ]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tResponse(\n\t\t\tself,\n\t\t\t(\n\t\t\t\tstatus: 200,\n\t\t\t\tstatusText: '',\n\t\t\t\theaders: (:)\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float32Array",
  "Response",
  "Response",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_0(),
      ]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tResponse(\n\t\t\tself,\n\t\t\t(\n\t\t\t\tstatus: 200,\n\t\t\t\tstatusText: '',\n\t\t\t\theaders: (:)\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "Response",
  "Response",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_0(),
      ]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tResponse(\n\t\t\tself,\n\t\t\t(\n\t\t\t\tstatus: 200,\n\t\t\t\tstatusText: '',\n\t\t\t\theaders: (:)\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Response",
  "Response",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Response_2(
      _self,
      _Record_1([["status", 200], ["statusText", ""], [
        "headers",
        _Record_0(),
      ]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tResponse(\n\t\t\tself,\n\t\t\t(\n\t\t\t\tstatus: 200,\n\t\t\t\tstatusText: '',\n\t\t\t\theaders: (:)\n\t\t\t)\n\t\t)\n\t}",
);
