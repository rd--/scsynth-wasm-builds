sl.addType(
  false,
  "Piecewise",
  "Piecewise",
  ["Object"],
  ["pieces", "defaultValue"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Piecewise",
);

sl.addMethodToExistingType(
  "Piecewise",
  "Piecewise",
  "value",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(_pieces_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_value_2(_key_1(_each), _x), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(_value_2(_value_1(_each), _x));
        });
      });
      return _value_2(_defaultValue_1(_self), _x);
    });
  },
  "{ :self :x | valueWithReturn({ :return:/1 | do(pieces(self), { :each | ifTrue(value(key(each),x), { return(value(value(each),x)) }) }); value(defaultValue(self),x) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Piecewise",
  "Piecewise",
  ["pieces", "defaultValue:/1"],
  function (_pieces, _defaultValue_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _pieces, _defaultValue_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPiecewise_0(), _pieces, _defaultValue_1);
  },
  "{ :pieces :defaultValue:/1 | initializeSlots(newPiecewise(),pieces, defaultValue:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Piecewise",
  "Piecewise",
  ["pieces"],
  function (_pieces) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _pieces";
      throw new Error(errorMessage);
    } /* Statements */
    return _Piecewise_2(_pieces, _constant_1(0));
  },
  "{ :pieces | Piecewise(pieces, constant(0)) }",
);
