sl.addType(
  true,
  "Ugen",
  "Ugen",
  ["Object", "Number"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Ugen",
);

sl.copyTraitMethodsToType(
  "Number",
  "Ugen",
);

sl.addMethodToExistingType(
  "Ugen",
  "Ugen",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.applyGenericAt(
      sl.nameWithoutArity(_aBlock_2.name),
      [_aNumber, _self],
      "Ugen",
    );
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 | <primitive: return sl.applyGenericAt(\n\t\t\tsl.nameWithoutArity(_aBlock_2.name),\n\t\t\t[_aNumber, _self],\n\t\t\t'Ugen'\n\t\t);>\n }",
);

sl.addMethodToExistingType(
  "Ugen",
  "Ugen",
  "blend",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_y1, _asterisk_2(_mu, _hyphenMinus_2(_y2, _y1)));
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu | +(y1, (*(mu, (-(y2, y1))))) }",
);

sl.addMethodToExistingType(
  "Ugen",
  "Ugen",
  "port",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.port;
  }, ["self"]),
  "{ :self | <primitive: return _self.port>\n }",
);

sl.addMethodToExistingType(
  "Ugen",
  "Ugen",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2([
      _printString_1(_scUgen_1(_self)),
      _printString_1(_port_1(_self)),
    ], ":");
  }, ["self"]),
  "{ :self | stringIntercalate([printString(scUgen(self)), printString(port(self))],':') }",
);

sl.addMethodToExistingType(
  "Ugen",
  "Ugen",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["scUgen", "port"];
  }, ["self"]),
  "{ :self | ['scUgen', 'port'] }",
);

sl.addMethodToExistingType(
  "Ugen",
  "Ugen",
  "scUgen",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.scUgen;
  }, ["self"]),
  "{ :self | <primitive: return _self.scUgen>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Ugen",
  "encodeUgenAt",
  ["self", "bus", "ugen"],
  sl.annotateFunction(function (_self, _bus, _ugen) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _bus, _ugen";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.encodeUgen(_self, sc.wrapOut(_bus, _ugen));
  }, ["self", "bus", "ugen"]),
  "{ :self :bus :ugen | <primitive: return sc.encodeUgen(_self, sc.wrapOut(_bus, _ugen));>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Ugen",
  "encodeUgen",
  ["self", "ugen"],
  sl.annotateFunction(function (_self, _ugen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ugen";
      throw new Error(errorMessage);
    } /* Statements */
    return _encodeUgenAt_3(_self, _busOffset_1(_ugen), _ugen);
  }, ["self", "ugen"]),
  "{ :self :ugen | encodeUgenAt(self,busOffset(ugen), ugen) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Ugen",
  "kr",
  ["self", "defaultValue"],
  sl.annotateFunction(function (_self, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultValue";
      throw new Error(errorMessage);
    } /* Statements */
    return _NamedControl_2(_self, _defaultValue);
  }, ["self", "defaultValue"]),
  "{ :self :defaultValue | NamedControl(self,defaultValue) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Ugen",
  "NamedControl",
  ["self", "defaultValue"],
  sl.annotateFunction(function (_self, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultValue";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.localControlInput(_self, -1, _defaultValue);
  }, ["self", "defaultValue"]),
  "{ :self :defaultValue | <primitive: return sc.localControlInput(_self, -1, _defaultValue);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ugen",
  "busOffset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(
      _size_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _preference_3(
              _system,
              "ScSynth/Outputs/Stereo/BusOffset",
              0,
            );
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _mainOutputs_1(_scSynth_1(_system));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _preference_3(_system, "ScSynth/Outputs/Main/BusOffset", 0);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self"]),
  "{ :self | caseOfOtherwise(size(self), [->({ 2 }, { preference(system,'ScSynth/Outputs/Stereo/BusOffset', 0) }), ->({ mainOutputs(scSynth(system)) }, { preference(system,'ScSynth/Outputs/Main/BusOffset', 0) })], { 0 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "Ugen",
  "busOffset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _preference_3(_system, "ScSynth/Outputs/Mono/BusOffset", 0);
  }, ["self"]),
  "{ :self | preference(system,'ScSynth/Outputs/Mono/BusOffset', 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "Ugen",
  "printUgenGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.printSyndefOfAt(self, self.busOffset);
  }, ["self"]),
  "{ :self | <primitive: return sc.printSyndefOfAt(self, self.busOffset);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ugen",
  "printUgenGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.printSyndefOfAt(self, self.busOffset);
  }, ["self"]),
  "{ :self | <primitive: return sc.printSyndefOfAt(self, self.busOffset);>\n }",
);
