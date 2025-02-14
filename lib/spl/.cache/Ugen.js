sl.addType(
  true,
  "Ugen",
  "Ugen",
  ["Object", "Number"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Ugen",
);

sl.copyTraitToType(
  "Number",
  "Ugen",
);

sl.addMethod(
  "Ugen",
  "Ugen",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.applyGenericAt(
      sl.nameWithoutArity(_aBlock_2.name),
      [_aNumber, _self],
      "Ugen",
    );
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\t<primitive:\n\t\treturn sl.applyGenericAt(\n\t\t\tsl.nameWithoutArity(_aBlock_2.name),\n\t\t\t[_aNumber, _self],\n\t\t\t'Ugen'\n\t\t);\n\t\t>\n\t}",
);

sl.addMethod(
  "Ugen",
  "Ugen",
  "adaptToCollectionAndApply",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_each, _self);
    });
  },
  "{ :self :aCollection :aBlock:/2 |\n\t\taCollection.collect { :each |\n\t\t\taBlock(each, self)\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "Ugen",
  "blend",
  ["y1", "y2", "mu"],
  function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_y1, _asterisk_2(_mu, _hyphenMinus_2(_y2, _y1)));
  },
  "{ :y1 :y2 :mu |\n\t\ty1 + (mu * (y2 - y1))\n\t}",
);

sl.addMethod(
  "Ugen",
  "Ugen",
  "port",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.port;
  },
  "{ :self |\n\t\t<primitive: return _self.port>\n\t}",
);

sl.addMethod(
  "Ugen",
  "Ugen",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      _printString_1(_scUgen_1(_self)),
      _printString_1(_port_1(_self)),
    ], ":");
  },
  "{ :self |\n\t\t[\n\t\t\tself.scUgen.printString,\n\t\t\tself.port.printString\n\t\t].join(':')\n\t}",
);

sl.addMethod(
  "Ugen",
  "Ugen",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return ["scUgen", "port"];
  },
  "{ :self |\n\t\t['scUgen', 'port']\n\t}",
);

sl.addMethod(
  "Ugen",
  "Ugen",
  "scUgen",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.scUgen;
  },
  "{ :self |\n\t\t<primitive: return _self.scUgen>\n\t}",
);

sl.addMethod(
  "String",
  "Ugen",
  "encodeUgenAt",
  ["self", "bus", "ugen"],
  function (_self, _bus, _ugen) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _bus, _ugen";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.encodeUgen(_self, sc.wrapOut(_bus, _ugen));
  },
  "{ :self :bus :ugen |\n\t\t<primitive: return sc.encodeUgen(_self, sc.wrapOut(_bus, _ugen));>\n\t}",
);

sl.addMethod(
  "String",
  "Ugen",
  "encodeUgen",
  ["self", "ugen"],
  function (_self, _ugen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ugen";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _encodeUgenAt_3(_self, _busOffset_1(_ugen), _ugen);
  },
  "{ :self :ugen |\n\t\tself.encodeUgenAt(\n\t\t\tugen.busOffset,\n\t\t\tugen\n\t\t)\n\t}",
);

sl.addMethod(
  "String",
  "Ugen",
  "kr",
  ["self", "defaultValue"],
  function (_self, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultValue";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _NamedControl_2(_self, _defaultValue);
  },
  "{ :self :defaultValue |\n\t\tself.NamedControl(defaultValue)\n\t}",
);

sl.addMethod(
  "String",
  "Ugen",
  "NamedControl",
  ["self", "defaultValue"],
  function (_self, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultValue";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.localControlInput(_self, -1, _defaultValue);
  },
  "{ :self :defaultValue |\n\t\t<primitive: return sc.localControlInput(_self, -1, _defaultValue);>\n\t}",
);

sl.addMethod(
  "List",
  "Ugen",
  "busOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_size_1(_self), [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _preference_3(_system, "ScSynth/Outputs/Stereo/BusOffset", 0);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _mainOutputs_1(_scSynth_1(_system));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _preference_3(_system, "ScSynth/Outputs/Main/BusOffset", 0);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    });
  },
  "{ :self |\n\t\t/* ['busOffset', self.size].postLine; */\n\t\tself.size.caseOfOtherwise([\n\t\t\t{ 2 } -> {\n\t\t\t\tsystem.preference('ScSynth/Outputs/Stereo/BusOffset', 0)\n\t\t\t},\n\t\t\t{ system.scSynth.mainOutputs } -> {\n\t\t\t\tsystem.preference('ScSynth/Outputs/Main/BusOffset', 0)\n\t\t\t}\n\t\t]) {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "Ugen",
  "busOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _preference_3(_system, "ScSynth/Outputs/Mono/BusOffset", 0);
  },
  "{ :self |\n\t\tsystem.preference('ScSynth/Outputs/Mono/BusOffset', 0)\n\t}",
);

sl.addMethod(
  "Ugen",
  "Ugen",
  "printUgenGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.printSyndefOfAt(self, self.busOffset);
  },
  "{ :self |\n\t\t<primitive: return sc.printSyndefOfAt(self, self.busOffset);>\n\t}",
);

sl.addMethod(
  "List",
  "Ugen",
  "printUgenGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.printSyndefOfAt(self, self.busOffset);
  },
  "{ :self |\n\t\t<primitive: return sc.printSyndefOfAt(self, self.busOffset);>\n\t}",
);
