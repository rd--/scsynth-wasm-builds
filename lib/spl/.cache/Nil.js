sl.addType(
  true,
  "Nil",
  "Nil",
  ["Object", "Json"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Nil",
);

sl.copyTraitMethodsToType(
  "Json",
  "Nil",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "questionMark",
  ["unused", "aBlock:/0"],
  sl.annotateFunction(function (_unused, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_0();
  }, ["unused", "aBlock:/0"]),
  "{ :unused :aBlock:/0 | aBlock() }",
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
    return _value_1(_anObject);
  }, ["unused", "anObject"]),
  "{ :unused :anObject | value(anObject) }",
);

sl.addMethodToExistingType(
  "Nil",
  "Nil",
  "tildeQuestionMark",
  ["unused", "aBlock:/0"],
  sl.annotateFunction(function (_unused, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return null;
  }, ["unused", "aBlock:/0"]),
  "{ :unused :aBlock:/0 | nil }",
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
  "{ :self :anObject | isNil(anObject) }",
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
  "{ :self | printString(self) }",
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
  "{ :self | nil }",
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
  "{ :self :whenNil:/0 | whenNil() }",
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
  "{ :self :whenNil:/0 :whenNotNil:/1 | whenNil() }",
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
  "{ :self :whenNotNil:/1 | nil }",
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
  "{ :self :whenNotNil:/1 :whenNil:/0 | whenNil() }",
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
  "{ :unused | true }",
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
  "{ :self | true }",
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
  "{ :self | true }",
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
  "{ :self | false }",
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
  "{ :self | 'nil' }",
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
  "{ :self :whenNil:/0 | self }",
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
  "{ :self :whenNil:/0 :whenNotNil:/1 | cull(whenNotNil:/1,self) }",
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
  "{ :self :whenNotNil:/1 | cull(whenNotNil:/1,self) }",
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
  "{ :self :whenNotNil:/1 :whenNil:/0 | cull(whenNotNil:/1,self) }",
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
  "{ :self | false }",
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
  "{ :self | true }",
);
