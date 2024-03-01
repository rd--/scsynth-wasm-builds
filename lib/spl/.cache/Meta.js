sl.addMethod(
  "String",
  "Meta",
  "Meta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return {
      "_type": _self + "^",
      "_isMeta": true,
      "subject": _self,
    };
  },
  "{ :self |\n\t\t<primitive:\n\t\treturn {\n\t\t\t'_type': _self + '^',\n\t\t\t'_isMeta': true,\n\t\t\t'subject': _self\n\t\t}\n\t\t>\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Meta",
  "meta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Meta_1(_typeOf_1(_self));
  },
  "{ :self |\n\t\tself.typeOf.Meta\n\t}",
);
