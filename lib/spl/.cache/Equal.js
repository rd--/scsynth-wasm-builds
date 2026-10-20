sl.addTrait("Equal", "Equal");

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "hasEqualSlots",
  ["self", "anObject", "aBlock/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_typeName_1(_self), _typeName_1(_anObject)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEqualByAtNamedSlots_4(
          _self,
          _anObject,
          _slotNameList_1(_self),
          _aBlock_2,
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock/2"]),
  "{ :self :anObject :aBlock/2 |\n\t\tself.typeName = anObject.typeName & {\n\t\t\tself.isEqualByAtNamedSlots(\n\t\t\t\tanObject,\n\t\t\t\tself.slotNameList,\n\t\t\t\taBlock/2\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "hasEqualSlots",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_3(_self, _anObject, _isEqual_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject, isEqual/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "isEqual",
  ["y"],
  sl.annotateFunction(function (_y) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _isEqual_2(_x, _y);
    }, ["x"]);
  }, ["y"]),
  "{ :y |\n\t\t{ :x |\n\t\t\tisEqual(x, y)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "isEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEqualBy_3(_self, _anObject, _isEqual_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.isEqualBy(anObject, isEqual/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEqualBy_3(_self, _anObject, _isEqual_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.isEqualBy(anObject, isEqual/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "isEqualBy",
  ["self", "anObject", "aBlock/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_3(_self, _anObject, _aBlock_2);
  }, ["self", "anObject", "aBlock/2"]),
  "{ :self :anObject :aBlock/2 |\n\t\t/* self.typeResponsibility('@Equal>>isEqualBy') */\n\t\tself.hasEqualSlots(anObject, aBlock/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "isEqualByAtNamedSlots",
  ["self", "anObject", "slotNameList", "aBlock/2"],
  sl.annotateFunction(function (_self, _anObject, _slotNameList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _anObject, _slotNameList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    return _slotNameList.every(function (key) {
      return _aBlock_2(_self[key], _anObject[key]);
    });
  }, ["self", "anObject", "slotNameList", "aBlock/2"]),
  "{ :self :anObject :slotNameList :aBlock/2 |\n\t\t<primitive: return _slotNameList.every(function (key) {\n\t\t\treturn _aBlock_2(_self[key], _anObject[key]);\n\t\t});\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "isEqualOn",
  ["self", "operand", "f/1"],
  sl.annotateFunction(function (_self, _operand, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEqual_2(_f_1(_self), _f_1(_operand));
  }, ["self", "operand", "f/1"]),
  "{ :self :operand :f/1 |\n\t\tisEqual(f(self), f(operand))\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "isSimilar",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEqualBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.isEqualBy(anObject, ~)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEqualBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.isEqualBy(anObject, ~)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "isUnequal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isEqual_2(_self, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tisEqual(self, anObject).not\n\t}",
);

sl.addMethodToExistingTrait(
  "Equal",
  "Equal",
  "exclamationMarkEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isEqual_2(_self, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tisEqual(self, anObject).not\n\t}",
);
