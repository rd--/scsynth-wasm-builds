sl.addType(
  true,
  "Nil",
  "Nil",
  ["Object", "Storeable", "Equatable", "Json"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Nil",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Nil",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Nil",
);

sl.copyTraitMethodsToType(
  "Json",
  "Nil",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "equal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNil_1(_anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isNil\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNil_1(_anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isNil\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "evaluatingIfNil",
  ["unused", "anObject"],
  sl.annotateFunction(function (_unused, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _anObject;
  }, ["unused", "anObject"]),
  "{ :unused :anObject |\n\t\tanObject\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "questionMarkQuestionMark",
  ["unused", "anObject"],
  sl.annotateFunction(function (_unused, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _anObject;
  }, ["unused", "anObject"]),
  "{ :unused :anObject |\n\t\tanObject\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "ifNil",
  ["self", "whenNil:/0"],
  sl.annotateFunction(function (_self, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNil_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _whenNil_0();
  }, ["self", "whenNil:/0"]),
  "{ :self :whenNil:/0 |\n\t\twhenNil()\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "questionMark",
  ["self", "whenNil:/0"],
  sl.annotateFunction(function (_self, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNil_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _whenNil_0();
  }, ["self", "whenNil:/0"]),
  "{ :self :whenNil:/0 |\n\t\twhenNil()\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "ifNotNil",
  ["self", "whenNotNil:/1"],
  sl.annotateFunction(function (_self, _whenNotNil_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNotNil_1";
      throw new Error(errorMessage);
    } /* Statements */
    return null;
  }, ["self", "whenNotNil:/1"]),
  "{ :self :whenNotNil:/1 |\n\t\tnil\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "exclamationMarkQuestionMark",
  ["self", "whenNotNil:/1"],
  sl.annotateFunction(function (_self, _whenNotNil_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNotNil_1";
      throw new Error(errorMessage);
    } /* Statements */
    return null;
  }, ["self", "whenNotNil:/1"]),
  "{ :self :whenNotNil:/1 |\n\t\tnil\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "similar",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself = anObject\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself = anObject\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.printString\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return null;
  }, ["self"]),
  "{ :self |\n\t\tnil\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "ifNil",
  ["self", "whenNil:/0", "whenNotNil:/1"],
  sl.annotateFunction(function (_self, _whenNil_0, _whenNotNil_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenNil_0, _whenNotNil_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _whenNil_0();
  }, ["self", "whenNil:/0", "whenNotNil:/1"]),
  "{ :self :whenNil:/0 :whenNotNil:/1 |\n\t\twhenNil()\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "ifNotNil",
  ["self", "whenNotNil:/1", "whenNil:/0"],
  sl.annotateFunction(function (_self, _whenNotNil_1, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenNotNil_1, _whenNil_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _whenNil_0();
  }, ["self", "whenNotNil:/1", "whenNil:/0"]),
  "{ :self :whenNotNil:/1 :whenNil:/0 |\n\t\twhenNil()\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "isImmediate",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "isLiteral",
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

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "isNil",
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

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "isNotNil",
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

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "replaceNil",
  ["unused", "anObject"],
  sl.annotateFunction(function (_unused, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _anObject;
  }, ["unused", "anObject"]),
  "{ :unused :anObject |\n\t\tanObject\n\t}",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "nil";
  }, ["self"]),
  "{ :self |\n\t\t'nil'\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "evaluatingIfNil",
  ["self", "unused"],
  sl.annotateFunction(function (_self, _unused) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self", "unused"]),
  "{ :self :unused |\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "questionMarkQuestionMark",
  ["self", "unused"],
  sl.annotateFunction(function (_self, _unused) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self", "unused"]),
  "{ :self :unused |\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "ifNil",
  ["self", "whenNil:/0"],
  sl.annotateFunction(function (_self, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNil_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self", "whenNil:/0"]),
  "{ :self :whenNil:/0 |\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "questionMark",
  ["self", "whenNil:/0"],
  sl.annotateFunction(function (_self, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNil_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self", "whenNil:/0"]),
  "{ :self :whenNil:/0 |\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "ifNotNil",
  ["self", "whenNotNil:/1"],
  sl.annotateFunction(function (_self, _whenNotNil_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNotNil_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _cull_2(_whenNotNil_1, _self);
  }, ["self", "whenNotNil:/1"]),
  "{ :self :whenNotNil:/1 |\n\t\twhenNotNil:/1.cull(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "exclamationMarkQuestionMark",
  ["self", "whenNotNil:/1"],
  sl.annotateFunction(function (_self, _whenNotNil_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenNotNil_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _cull_2(_whenNotNil_1, _self);
  }, ["self", "whenNotNil:/1"]),
  "{ :self :whenNotNil:/1 |\n\t\twhenNotNil:/1.cull(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "ifNil",
  ["self", "whenNil:/0", "whenNotNil:/1"],
  sl.annotateFunction(function (_self, _whenNil_0, _whenNotNil_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenNil_0, _whenNotNil_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _cull_2(_whenNotNil_1, _self);
  }, ["self", "whenNil:/0", "whenNotNil:/1"]),
  "{ :self :whenNil:/0 :whenNotNil:/1 |\n\t\twhenNotNil:/1.cull(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "ifNotNil",
  ["self", "whenNotNil:/1", "whenNil:/0"],
  sl.annotateFunction(function (_self, _whenNotNil_1, _whenNil_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenNotNil_1, _whenNil_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _cull_2(_whenNotNil_1, _self);
  }, ["self", "whenNotNil:/1", "whenNil:/0"]),
  "{ :self :whenNotNil:/1 :whenNil:/0 |\n\t\twhenNotNil:/1.cull(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "isNil",
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

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Nil",
  "isNotNil",
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
  "Nil",
  "replaceNil",
  ["self", "unused"],
  sl.annotateFunction(function (_self, _unused) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self", "unused"]),
  "{ :self :unused |\n\t\tself\n\t}",
);
