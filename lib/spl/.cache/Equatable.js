sl.addTrait("Equatable", "Equatable");

sl.addMethodToExistingTrait(
  "Equatable",
  "Equatable",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _equalsSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.equalBy(anObject, =)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equatable",
  "Equatable",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.equalBy(anObject, ~)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equatable",
  "Equatable",
  "exclamationMarkEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_equalsSign_2(_self, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t(self = anObject).not\n\t}",
);

sl.addMethodToExistingTrait(
  "Equatable",
  "Equatable",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_3(_self, _anObject, _aBlock_2);
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\t/* self.typeResponsibility('@Equatable>>equalBy') */\n\t\tself.hasEqualSlots(anObject, aBlock:/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equatable",
  "Equatable",
  "equalByAtNamedSlots",
  ["self", "anObject", "slotNameList", "aBlock:/2"],
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
  }, ["self", "anObject", "slotNameList", "aBlock:/2"]),
  "{ :self :anObject :slotNameList :aBlock:/2 |\n\t\t<primitive: return _slotNameList.every(function (key) {\n\t\t\treturn _aBlock_2(_self[key], _anObject[key]);\n\t\t});\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "Equatable",
  "Equatable",
  "hasEqualSlots",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_typeOf_1(_self), _typeOf_1(_anObject)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalByAtNamedSlots_4(
          _self,
          _anObject,
          _slotNameList_1(_self),
          _aBlock_2,
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tself.typeOf = anObject.typeOf & {\n\t\t\tself.equalByAtNamedSlots(\n\t\t\t\tanObject,\n\t\t\t\tself.slotNameList,\n\t\t\t\taBlock:/2\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Equatable",
  "Equatable",
  "hasEqualSlots",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_3(_self, _anObject, _equalsSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject, =)\n\t}",
);

sl.addMethodToExistingTrait(
  "Equatable",
  "Equatable",
  "primitiveEquals",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self === _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return _self === _anObject;>\n\t}",
);
