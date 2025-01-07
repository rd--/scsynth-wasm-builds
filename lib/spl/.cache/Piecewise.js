sl.addType(
  false,
  "Piecewise",
  "Piecewise",
  ["Object"],
  ["pieces", "defaultValue"],
);

sl.copyTraitToType(
  "Object",
  "Piecewise",
);

sl.addMethod(
  "Piecewise",
  "Piecewise",
  "value",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(_pieces_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_value_2(_at_2(_each, 2), _x), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(_value_2(_at_2(_each, 1), _x));
        });
      });
      return _value_2(_defaultValue_1(_self), _x);
    });
  },
  "{ :self :x |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.pieces.do { :each |\n\t\t\t\teach[2].value(x).ifTrue {\n\t\t\t\t\teach[1].value(x).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.defaultValue.value(x)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Piecewise",
  "Piecewise",
  ["pieces", "defaultValue"],
  function (_pieces, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _pieces, _defaultValue";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPiecewise_0(), _pieces, _defaultValue);
  },
  "{ :pieces :defaultValue |\n\t\tnewPiecewise().initializeSlots(pieces, defaultValue)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Piecewise",
  "Piecewise",
  ["pieces"],
  function (_pieces) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _pieces";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Piecewise_2(_pieces, _constant_1(0));
  },
  "{ :pieces |\n\t\tPiecewise(pieces, 0.constant)\n\t}",
);
