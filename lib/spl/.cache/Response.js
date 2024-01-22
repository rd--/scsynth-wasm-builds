sl.addType(
  true,
  "Response",
  "Response",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Response",
);

sl.addMethod(
  "Response",
  "Response",
  "arrayBuffer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.arrayBuffer();
  },
  "{ :self |\n\t\t<primitive: return _self.arrayBuffer();>\n\t}",
);

sl.addMethod(
  "Response",
  "Response",
  "blob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.blob();
  },
  "{ :self |\n\t\t<primitive: return _self.blob();>\n\t}",
);

sl.addMethod(
  "Response",
  "Response",
  "byteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.arrayBuffer().then(function (b) {
      return new Uint8Array(b);
    });
  },
  "{ :self |\n\t\t<primitive:\n\t\treturn _self.arrayBuffer().then(function(b) {\n\t\t\treturn new Uint8Array(b);\n\t\t});\n\t\t>\n\t}",
);

sl.addMethod(
  "Response",
  "Response",
  "mimeType",
  ["self", "mimeType"],
  function (_self, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mimeType";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_mimeType, [
      _minusGreaterThan_2("application/json", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _json_1(_self);
      }),
      _minusGreaterThan_2("application/octet-stream", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _byteArray_1(_self);
      }),
      _minusGreaterThan_2("text/plain", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _text_1(_self);
      }),
    ], function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusPlus_2("mimeType: unknown mimeType: ", _mimeType),
      );
    });
  },
  "{ :self :mimeType |\n\t\tmimeType.caseOfOtherwise([\n\t\t\t'application/json' -> {\n\t\t\t\tself.json\n\t\t\t},\n\t\t\t'application/octet-stream' -> {\n\t\t\t\tself.byteArray\n\t\t\t},\n\t\t\t'text/plain' -> {\n\t\t\t\tself.text\n\t\t\t}\n\t\t]) { :unused |\n\t\t\tself.error('mimeType: unknown mimeType: ' ++ mimeType)\n\t\t}\n\t}",
);

sl.addMethod(
  "Response",
  "Response",
  "json",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.json();
  },
  "{ :self |\n\t\t<primitive: return _self.json();>\n\t}",
);

sl.addMethod(
  "Response",
  "Response",
  "ok",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.ok;
  },
  "{ :self |\n\t\t<primitive: return _self.ok;>\n\t}",
);

sl.addMethod(
  "Response",
  "Response",
  "pseudoSlotNameArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["ok"];
  },
  "{ :self |\n\t\t['ok']\n\t}",
);

sl.addMethod(
  "Response",
  "Response",
  "text",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.text();
  },
  "{ :self |\n\t\t<primitive: return _self.text();>\n\t}",
);
