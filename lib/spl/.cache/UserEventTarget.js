sl.addTrait("UserEventTarget", "UserEventTarget");

sl.addMethodToExistingTrait(
  "UserEventTarget",
  "UserEventTarget",
  "addEventListener",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(
      _eventListeners_1(_self),
      _aString,
      function (_aSet) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aSet";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_aSet, _aBlock_1);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
  "{ :self :aString :aBlock:/1 | atIfPresentIfAbsent(eventListeners(self), aString, { :aSet | add(aSet,aBlock:/1) }, { atPut(eventListeners(self), aString, asIdentitySet([aBlock:/1])) }) }",
);

sl.addMethodToExistingTrait(
  "UserEventTarget",
  "UserEventTarget",
  "dispatchEvent",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresent_3(
      _eventListeners_1(_self),
      _type_1(_event),
      function (_aSet) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aSet";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(_aSet, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _value_2(_each, _event);
        });
      },
    );
  },
  "{ :self :event | atIfPresent(eventListeners(self), type(event), { :aSet | do(aSet, { :each | value(each,event) }) }) }",
);
