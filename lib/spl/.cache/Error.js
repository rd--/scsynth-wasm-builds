sl.addTrait("Exception", "Error");

sl.addMethodToExistingTrait(
  "Exception",
  "Error",
  "description",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(_cause_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSignPlusSign_2(
        _plusSignPlusSign_2(_name_1(_self), ": "),
        _messageText_1(_self),
      );
    }, function () {
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
    });
  },
  "{ :self | ifNil(cause(self), { ++(++(name(self), ': '), messageText(self)) }, { ++(++(++(++(name(self), ': '), messageText(self)), ': '), causeText(self)) }) }",
);

sl.addMethodToExistingTrait(
  "Exception",
  "Error",
  "isError",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Exception",
  "Error",
  "isException",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Exception",
  "Error",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "copy: cannot copy");
  },
  "{ :self | error(self,'copy: cannot copy') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Error",
  "isException",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTrait("PrimitiveError", "Error");

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "cause",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cause;
  },
  "{ :self | <primitive: return _self.cause;>\n }",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "causeText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isError_1(_cause_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _description_1(_cause_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _asString_1(_self);
    });
  },
  "{ :self | if(isError(cause(self)), { description(cause(self)) }, { asString(self) }) }",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "messageText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.message;
  },
  "{ :self | <primitive: return _self.message;>\n }",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["cause", "messageText", "name"];
  },
  "{ :self | ['cause', 'messageText', 'name'] }",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self | <primitive: return _self.name;>\n }",
);

sl.addMethodToExistingTrait(
  "PrimitiveError",
  "Error",
  "signal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    throw _self;
  },
  "{ :self | <primitive: throw(_self);>\n }",
);

sl.addType(
  true,
  "Error",
  "Error",
  ["Object", "Exception", "PrimitiveError"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2("*ERROR* ", _description_1(_self));
  },
  "{ :self | ++('*ERROR* ', description(self)) }",
);

sl.addMethodToExistingType(
  "Error",
  "Error",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2("Error('", _messageText_1(_self)),
      "')",
    );
  },
  "{ :self | ++(++('Error(\\'', messageText(self)), '\\')') }",
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
  function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2(_signature, ": should not implement"),
    );
  },
  "{ :self :signature | error(self,++(signature, ': should not implement')) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Error",
  "typeResponsibility",
  ["self", "signature"],
  function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2(_signature, ": type responsibility"),
    );
  },
  "{ :self :signature | error(self,++(signature, ': type responsibility')) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Error",
  "Error",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Error(_self);
  },
  "{ :self | <primitive: return Error(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Error",
  "error",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _signal_1(_Error_1(_self));
  },
  "{ :self | signal(Error(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Error",
  "Error",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Error_1("Unknown error");
  },
  "{ Error('Unknown error') }",
);
