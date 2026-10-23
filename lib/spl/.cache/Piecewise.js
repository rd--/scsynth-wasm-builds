sl.addType(
  false,
  "Piecewise",
  "Piecewise",
  ["@Object", "@Equal"],
  ["pieces", "defaultValue"],
);

sl.copyTraitMethodsToType(
  "@Object",
  "Piecewise",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "Piecewise",
);

sl.addMethodToExistingType(
  "Piecewise",
  "Piecewise",
  "unaryBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _withReturn_1(sl.annotateFunction(function (_return_1) {
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
            let _f_1 = _key_1(_each);
            return _ifTrue_2(
              _f_1(_x),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                let _g_1 = _value_1(_each);
                return _return_1(_g_1(_x));
              }, []),
            );
          }, ["each"]),
        );
        let _f_1 = _defaultValue_1(_self);
        return _f_1(_x);
      }, ["return/1"]));
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\t{ :x |\n\t\t\twithReturn { :return/1 |\n\t\t\t\tself.pieces.do { :each |\n\t\t\t\t\tlet f/1 = each.key;\n\t\t\t\t\tf(x).ifTrue {\n\t\t\t\t\t\tlet g/1 = each.value;\n\t\t\t\t\t\tg(x).return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tlet f/1 = self.defaultValue;\n\t\t\t\tf(x)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Piecewise",
  "Piecewise",
  ["pieces", "defaultValue/1"],
  sl.annotateFunction(function (_pieces, _defaultValue_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _pieces, _defaultValue_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPiecewise_0(), _pieces, _defaultValue_1);
  }, ["pieces", "defaultValue/1"]),
  "{ :pieces :defaultValue/1 |\n\t\tnewPiecewise().initializeSlots(pieces, defaultValue/1)\n\t}",
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
