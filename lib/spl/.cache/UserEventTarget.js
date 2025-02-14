sl.addTrait("UserEventTarget", "UserEventTarget");

sl.addTraitMethod(
  "UserEventTarget",
  "UserEventTarget",
  "addEventListener",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(
      _eventListeners_1(_self),
      _aString,
      function (_aSet) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aSet";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_aSet, _aBlock_1);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _eventListeners_1(_self),
          _aString,
          _asIdentitySet_1([_aBlock_1]),
        );
      },
    );
  },
  "{ :self :aString :aBlock:/1 |\n\t\tself.eventListeners.atIfPresentIfAbsent(aString) { :aSet |\n\t\t\taSet.add(aBlock:/1)\n\t\t} {\n\t\t\tself.eventListeners[aString] := [aBlock:/1].asIdentitySet\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "UserEventTarget",
  "UserEventTarget",
  "dispatchEvent",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresent_3(
      _eventListeners_1(_self),
      _type_1(_event),
      function (_aSet) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aSet";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(_aSet, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _value_2(_each, _event);
        });
      },
    );
  },
  "{ :self :event |\n\t\tself.eventListeners.atIfPresent(event.type) { :aSet |\n\t\t\taSet.do { :each |\n\t\t\t\teach.value(event)\n\t\t\t}\n\t\t}\n\t}",
);
