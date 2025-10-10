sl.addType(
  false,
  "Piecewise",
  "Piecewise",
  ["Object", "Equatable"],
  ["pieces", "defaultValue"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Piecewise",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Piecewise",
);

sl.addMethodToExistingType(
  "Piecewise",
  "Piecewise",
  "value",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _pieces_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _value_2(_key_1(_each), _x),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_value_2(_value_1(_each), _x));
            }, []),
          );
        }, ["each"]),
      );
      return _value_2(_defaultValue_1(_self), _x);
    }, ["return:/1"]));
  }, ["self", "x"]),
  "{ :self :x |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.pieces.do { :each |\n\t\t\t\teach.key.value(x).ifTrue {\n\t\t\t\t\teach.value.value(x).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.defaultValue.value(x)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Piecewise",
  "Piecewise",
  ["pieces", "defaultValue:/1"],
  sl.annotateFunction(function (_pieces, _defaultValue_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _pieces, _defaultValue_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPiecewise_0(), _pieces, _defaultValue_1);
  }, ["pieces", "defaultValue:/1"]),
  "{ :pieces :defaultValue:/1 |\n\t\tnewPiecewise().initializeSlots(pieces, defaultValue:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Piecewise",
  "Piecewise",
  ["pieces"],
  sl.annotateFunction(function (_pieces) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _pieces";
      throw new Error(errorMessage);
    } /* Statements */
    return _Piecewise_2(_pieces, _constant_1(0));
  }, ["pieces"]),
  "{ :pieces |\n\t\tPiecewise(pieces, 0.constant)\n\t}",
);
