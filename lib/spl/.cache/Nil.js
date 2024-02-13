sl.addType(
  true,
  "Nil",
  "Nil",
  ["Object", "Json"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Nil",
);

sl.copyTraitToType(
  "Json",
  "Nil",
);

sl.addMethod(
  "Nil",
  "Nil",
  "questionMark",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _aBlock_0();
  },
  "{ :self :aBlock:/0 |\n\t\taBlock()\n\t}",
);

sl.addMethod(
  "Nil",
  "Nil",
  "questionMarkQuestionMark",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _value_1(_anObject);
  },
  "{ :self :anObject |\n\t\tanObject.value\n\t}",
);

sl.addMethod(
  "Nil",
  "Nil",
  "tildeQuestionMark",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return null;
  },
  "{ :self :aBlock:/0 |\n\t\tnil\n\t}",
);

sl.addMethod(
  "Nil",
  "Nil",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _isNil_1(_anObject);
  },
  "{ :self :anObject |\n\t\tanObject.isNil\n\t}",
);

sl.addMethod(
  "Nil",
  "Nil",
  "ifNil",
  ["self", "whenNil:/0"],
  function (_self, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNil_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _whenNil_0();
  },
  "{ :self :whenNil:/0 |\n\t\twhenNil()\n\t}",
);

sl.addMethod(
  "Nil",
  "Nil",
  "ifNil",
  ["self", "whenNil:/0", "whenNotNil"],
  function (_self, _whenNil_0, _whenNotNil) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _whenNil_0, _whenNotNil";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _whenNil_0();
  },
  "{ :self :whenNil:/0 :whenNotNil |\n\t\twhenNil()\n\t}",
);

sl.addMethod(
  "Nil",
  "Nil",
  "ifNotNil",
  ["self", "whenNotNil"],
  function (_self, _whenNotNil) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNotNil";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return null;
  },
  "{ :self :whenNotNil |\n\t\tnil\n\t}",
);

sl.addMethod(
  "Nil",
  "Nil",
  "ifNotNil",
  ["self", "whenNotNil", "whenNil:/0"],
  function (_self, _whenNotNil, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _whenNotNil, _whenNil_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _whenNil_0();
  },
  "{ :self :whenNotNil :whenNil:/0 |\n\t\twhenNil()\n\t}",
);

sl.addMethod(
  "Nil",
  "Nil",
  "isImmediate",
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

sl.addMethod(
  "Nil",
  "Nil",
  "isNil",
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

sl.addMethod(
  "Nil",
  "Nil",
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
    return "nil";
  },
  "{ :self |\n\t\t'nil'\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Nil",
  "ifNil",
  ["self", "whenNil:/0"],
  function (_self, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNil_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self :whenNil:/0 |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Nil",
  "ifNil",
  ["self", "whenNil:/0", "whenNotNil"],
  function (_self, _whenNil_0, _whenNotNil) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _whenNil_0, _whenNotNil";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cull_2(_whenNotNil, _self);
  },
  "{ :self :whenNil:/0 :whenNotNil |\n\t\twhenNotNil.cull(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Nil",
  "ifNotNil",
  ["self", "whenNotNil"],
  function (_self, _whenNotNil) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNotNil";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cull_2(_whenNotNil, _self);
  },
  "{ :self :whenNotNil |\n\t\twhenNotNil.cull(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Nil",
  "ifNotNil",
  ["self", "whenNotNil", "whenNil:/0"],
  function (_self, _whenNotNil, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _whenNotNil, _whenNil_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cull_2(_whenNotNil, _self);
  },
  "{ :self :whenNotNil :whenNil:/0 |\n\t\twhenNotNil.cull(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Nil",
  "isNil",
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

sl.extendTraitWithMethod(
  "Object",
  "Nil",
  "notNil",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _not_1(_isNil_1(_self));
  },
  "{ :self |\n\t\tself.isNil.not\n\t}",
);
