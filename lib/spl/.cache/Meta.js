sl.extendTypeOrTraitWithMethod(
  "String",
  "Meta",
  "Meta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return {
      "_type": _self + "^",
      "_isMeta": true,
      "subject": _self,
    };
  }, ["self"]),
  "{ :self |\n\t\t<primitive:\n\t\treturn {\n\t\t\t'_type': _self + '^',\n\t\t\t'_isMeta': true,\n\t\t\t'subject': _self\n\t\t}\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Meta",
  "meta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Meta_1(_typeOf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.typeOf.Meta\n\t}",
);
