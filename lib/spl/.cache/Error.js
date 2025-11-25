sl.addTrait("Exception", "Error");

sl.addMethodToExistingTrait(
  "Exception",
  "Error",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shouldNotImplement_2(_self, "copy");
  }, ["self"]),
  "{ :self |\n\t\tself.shouldNotImplement('copy')\n\t}",
);

sl.addMethodToExistingTrait(
  "Exception",
  "Error",
  "description",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _cause_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _plusSignPlusSign_2(_name_1(_self), ": "),
          _messageText_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _plusSignPlusSign_2(
            _plusSignPlusSign_2(
              _plusSignPlusSign_2(_name_1(_self), ": "),
              _messageText_1(_self),
            ),
            ": ",
          ),
          _causeText_1(_self),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cause.ifNil {\n\t\t\tself.name ++ ': ' ++ self.messageText\n\t\t} {\n\t\t\tself.name ++ ': ' ++ self.messageText ++ ': ' ++ self.causeText\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Exception",
  "Error",
  "isError",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "Exception",
  "Error",
  "isException",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Error",
  "isException",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTrait("PrimitiveError", "Error");

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "cause",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cause;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.cause;>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "causeText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isError_1(_cause_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _description_1(_cause_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asString_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cause.isError.if {\n\t\t\tself.cause.description\n\t\t} {\n\t\t\tself.asString\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "messageText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.message;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.message;>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["cause", "messageText", "name"];
  }, ["self"]),
  "{ :self |\n\t\t['cause', 'messageText', 'name']\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "signal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    throw _self;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: throw(_self);>\n\t}",
);

sl.addType(
  true,
  "Error",
  "Error",
  ["Object", "Storeable", "Equatable", "Exception", "PrimitiveError"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Error",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Error",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Error",
);

sl.copyTraitMethodsToType(
  "Exception",
  "Error",
);

sl.copyTraitMethodsToType(
  "PrimitiveError",
  "Error",
);

sl.addMethodToExistingType(
  "Error",
  "Error",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2("*ERROR* ", _description_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t'*ERROR* ' ++ self.description\n\t}",
);

sl.addMethodToExistingType(
  "Error",
  "Error",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2("Error('", _messageText_1(_self)),
      "')",
    );
  }, ["self"]),
  "{ :self |\n\t\t'Error(\\'' ++ self.messageText ++ '\\')'\n\t}",
);

sl.addType(
  true,
  "ReferenceError",
  "Error",
  ["Object", "Exception", "PrimitiveError"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ReferenceError",
);

sl.copyTraitMethodsToType(
  "Exception",
  "ReferenceError",
);

sl.copyTraitMethodsToType(
  "PrimitiveError",
  "ReferenceError",
);

sl.addType(
  true,
  "TypeError",
  "Error",
  ["Object", "Exception", "PrimitiveError"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "TypeError",
);

sl.copyTraitMethodsToType(
  "Exception",
  "TypeError",
);

sl.copyTraitMethodsToType(
  "PrimitiveError",
  "TypeError",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Error",
  "shouldNotImplement",
  ["self", "signature"],
  sl.annotateFunction(function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2(_signature, ": should not implement"),
    );
  }, ["self", "signature"]),
  "{ :self :signature |\n\t\tself.error(signature ++ ': should not implement')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Error",
  "typeResponsibility",
  ["self", "signature"],
  sl.annotateFunction(function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2(_signature, ": type responsibility"),
    );
  }, ["self", "signature"]),
  "{ :self :signature |\n\t\tself.error(signature ++ ': type responsibility')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Error",
  "unimplementedCase",
  ["self", "signature"],
  sl.annotateFunction(function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2(_signature, ": unimplemented case"),
    );
  }, ["self", "signature"]),
  "{ :self :signature |\n\t\tself.error(signature ++ ': unimplemented case')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Error",
  "Error",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Error(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Error(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Error",
  "error",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _signal_1(_Error_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tError(self).signal\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Error",
  "Error",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Error_1("Unknown error");
  }, []),
  "{\n\t\tError('Unknown error')\n\t}",
);
