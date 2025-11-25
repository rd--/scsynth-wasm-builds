sl.addTrait("Storeable", "Storeable");

sl.addMethodToExistingTrait(
  "Storeable",
  "Storeable",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeString_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeString\n\t}",
);

sl.addMethodToExistingTrait(
  "Storeable",
  "Storeable",
  "storeStringNamedSlots",
  ["self", "slotNameList", "aBlock:/1"],
  sl.annotateFunction(function (_self, _slotNameList, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _slotNameList, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _slotValueList = _collect_2(
      _slotNameList,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedSlotRead_2(_self, _each);
      }, ["each"]),
    );
    /* Statements */
    return _format_2("%(%)", [
      _typeOf_1(_self),
      _commaSeparated_1(_collect_2(_slotValueList, _aBlock_1)),
    ]);
  }, ["self", "slotNameList", "aBlock:/1"]),
  "{ :self :slotNameList :aBlock:/1 |\n\t\tlet slotValueList = slotNameList.collect { :each |\n\t\t\tself.uncheckedSlotRead(each)\n\t\t};\n\t\t'%(%)'.format(\n\t\t\t[\n\t\t\t\tself.typeOf,\n\t\t\t\tslotValueList.collect(aBlock:/1).commaSeparated\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "Storeable",
  "Storeable",
  "storeStringNamedSlots",
  ["self", "slotNameList"],
  sl.annotateFunction(function (_self, _slotNameList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _slotNameList";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringNamedSlots_3(_self, _slotNameList, _storeString_1);
  }, ["self", "slotNameList"]),
  "{ :self :slotNameList |\n\t\tself.storeStringNamedSlots(slotNameList, storeString:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Storeable",
  "Storeable",
  "storeStringAsInitializeSlots",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringNamedSlots_3(_self, _slotNameList_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.storeStringNamedSlots(self.slotNameList, aBlock:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Storeable",
  "Storeable",
  "storeStringAsInitializeSlots",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_2(_self, _storeString_1);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots(storeString:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Storeable",
  "Storeable",
  "storeStringAsInitializeSlotsOmitting",
  ["self", "slotNameList"],
  sl.annotateFunction(function (_self, _slotNameList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _slotNameList";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringNamedSlots_2(
      _self,
      _withoutAll_2(_slotNameList_1(_self), _slotNameList),
    );
  }, ["self", "slotNameList"]),
  "{ :self :slotNameList |\n\t\tself.storeStringNamedSlots(\n\t\t\tself.slotNameList.withoutAll(slotNameList)\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "Storeable",
  "Storeable",
  "storeString",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_2(_self, _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.storeStringAsInitializeSlots(aBlock:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Storeable",
  "Storeable",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Storeable",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "Not Storeable");
  }, ["self"]),
  "{ :self |\n\t\tself.error('Not Storeable')\n\t}",
);
