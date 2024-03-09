/* {- Requires: Object -} */

sl.addTrait("Blob", "Blob");

sl.addTraitMethod(
  "Blob",
  "Blob",
  "arrayBuffer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.arrayBuffer();
  },
  "{ :self |\n\t\t<primitive: return _self.arrayBuffer();>\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  },
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "slice",
  ["self", "start", "end", "contentType"],
  function (_self, _start, _end, _contentType) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _end, _contentType";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.slice(_start, _end, _contentType);
  },
  "{ :self :start :end :contentType |\n\t\t<primitive: return _self.slice(_start, _end, _contentType);>\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.size;
  },
  "{ :self |\n\t\t<primitive: return _self.size;> {- Read only -}\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "text",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.text();
  },
  "{ :self |\n\t\t<primitive: return _self.text();>\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.type;
  },
  "{ :self |\n\t\t<primitive: return _self.type;> {- Read only -}\n\t}",
);

sl.addType(
  true,
  "Blob",
  "Blob",
  ["Object", "Blob"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Blob",
);

sl.copyTraitToType(
  "Blob",
  "Blob",
);

sl.addMethod(
  "List",
  "Blob",
  "asBlob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Blob(_self);
  },
  "{ :self |\n\t\t<primitive: return new Blob(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "Blob",
  "asBlob",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Blob(_self, _options);
  },
  "{ :self :options |\n\t\t<primitive: return new Blob(_self, _options);>\n\t}",
);

sl.addMethod(
  "ByteArray",
  "Blob",
  "asBlob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asBlob_1([_self]);
  },
  "{ :self |\n\t\t[self].asBlob\n\t}",
);

sl.addMethod(
  "Float64Array",
  "Blob",
  "asBlob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asBlob_1([_self]);
  },
  "{ :self |\n\t\t[self].asBlob\n\t}",
);
