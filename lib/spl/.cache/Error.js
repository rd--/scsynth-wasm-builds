sl.addTrait("Exception", "Error");

sl.addTraitMethod(
  "Exception",
  "Error",
  "description",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifNil_3(_cause_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusSignPlusSign_2(
        _plusSignPlusSign_2(_name_1(_self), ": "),
        _messageText_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
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
  "{ :self |\n\t\tself.cause.ifNil {\n\t\t\tself.name ++ ': ' ++ self.messageText\n\t\t} {\n\t\t\tself.name ++ ': ' ++ self.messageText ++ ': ' ++ self.causeText\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Exception",
  "Error",
  "isError",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Exception",
  "Error",
  "isException",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Exception",
  "Error",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "copy: cannot copy");
  },
  "{ :self |\n\t\tself.error('copy: cannot copy')\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Error",
  "isException",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTrait("PrimitiveError", "Error");

sl.addTraitMethod(
  "PrimitiveError",
  "Error",
  "cause",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.cause;
  },
  "{ :self |\n\t\t<primitive: return _self.cause;>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveError",
  "Error",
  "causeText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isError_1(_cause_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _description_1(_cause_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _asString_1(_self);
    });
  },
  "{ :self |\n\t\tself.cause.isError.if {\n\t\t\tself.cause.description\n\t\t} {\n\t\t\tself.asString\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PrimitiveError",
  "Error",
  "messageText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.message;
  },
  "{ :self |\n\t\t<primitive: return _self.message;>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveError",
  "Error",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["cause", "messageText", "name"];
  },
  "{ :self |\n\t\t['cause', 'messageText', 'name']\n\t}",
);

sl.addTraitMethod(
  "PrimitiveError",
  "Error",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveError",
  "Error",
  "signal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    throw _self;
  },
  "{ :self |\n\t\t<primitive: throw(_self);>\n\t}",
);

sl.addType(
  true,
  "Error",
  "Error",
  ["Object", "Exception", "PrimitiveError"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Error",
);

sl.copyTraitToType(
  "Exception",
  "Error",
);

sl.copyTraitToType(
  "PrimitiveError",
  "Error",
);

sl.addMethod(
  "Error",
  "Error",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2("Error('", _messageText_1(_self)),
      "')",
    );
  },
  "{ :self |\n\t\t'Error(\\'' ++ self.messageText ++ '\\')'\n\t}",
);

sl.addType(
  true,
  "ReferenceError",
  "Error",
  ["Object", "Exception", "PrimitiveError"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ReferenceError",
);

sl.copyTraitToType(
  "Exception",
  "ReferenceError",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "TypeError",
);

sl.copyTraitToType(
  "Exception",
  "TypeError",
);

sl.copyTraitToType(
  "PrimitiveError",
  "TypeError",
);

sl.extendTraitWithMethod(
  "Object",
  "Error",
  "shouldNotImplement",
  ["self", "signature"],
  function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2(_signature, ": should not implement"),
    );
  },
  "{ :self :signature |\n\t\tself.error(signature ++ ': should not implement')\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Error",
  "typeResponsibility",
  ["self", "signature"],
  function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2(_signature, ": type responsibility"),
    );
  },
  "{ :self :signature |\n\t\tself.error(signature ++ ': type responsibility')\n\t}",
);

sl.addMethod(
  "String",
  "Error",
  "Error",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Error(_self);
  },
  "{ :self |\n\t\t<primitive: return Error(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "Error",
  "error",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _signal_1(_Error_1(_self));
  },
  "{ :self |\n\t\tError(self).signal\n\t}",
);

sl.addMethod(
  "Void",
  "Error",
  "Error",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Error_1("Unknown error");
  },
  "{\n\t\tError('Unknown error')\n\t}",
);
