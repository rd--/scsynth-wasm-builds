/*  Requires: Ugen  */

sl.addType(
  true,
  "ScSynth",
  "ScSynth",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ScSynth",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "addOscListener",
  ["self", "address", "onMessage"],
  sl.annotateFunction(function (_self, _address, _onMessage) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _address, _onMessage";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.addOscListener(_address, _onMessage);
    /* Statements */
    return _onMessage;
  }, ["self", "address", "onMessage"]),
  "{ :self :address :onMessage |\n\t\t<primitive: _self.addOscListener(_address, _onMessage);>\n\t\tonMessage\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "connect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.connect();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.connect();>\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "isConnected",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isConnected();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.isConnected();>\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "mainOutputs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _preference_3(_system, "ScSynth/Outputs/Main/NumberOfChannels", 2);
  }, ["self"]),
  "{ :self |\n\t\tsystem.preference('ScSynth/Outputs/Main/NumberOfChannels', 2)\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "mainOrientation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _preference_3(_system, "ScSynth/Outputs/Main/FrontIsVertex", false),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0.5;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.preference('ScSynth/Outputs/Main/FrontIsVertex', false).if {\n\t\t\t0\n\t\t} {\n\t\t\t0.5\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "options",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.options;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.options;>\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "oscListeners",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.oscListeners;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.oscListeners;>\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["options", "oscListeners", "readyState", "status", "useIoUgens"];
  }, ["self"]),
  "{ :self |\n\t\t['options', 'oscListeners', 'readyState', 'status', 'useIoUgens']\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "readyState",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.readyState;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.readyState;>\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "removeOscListener",
  ["self", "address", "onMessage"],
  sl.annotateFunction(function (_self, _address, _onMessage) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _address, _onMessage";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.removeOscListener(_address, _onMessage);
    /* Statements */
    return _onMessage;
  }, ["self", "address", "onMessage"]),
  "{ :self :address :onMessage |\n\t\t<primitive: _self.removeOscListener(_address, _onMessage);>\n\t\tonMessage\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.reset();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.reset();>\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "sendOsc",
  ["self", "oscPacket"],
  sl.annotateFunction(function (_self, _oscPacket) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oscPacket";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sendOsc(_asRecord_1(_oscPacket));
  }, ["self", "oscPacket"]),
  "{ :self :oscPacket |\n\t\t<primitive: return _self.sendOsc(_asRecord_1(_oscPacket));>\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "setControl",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _sendOsc_2(_self, _OscMessage_2("/c_set", [_index, _value]));
  }, ["self", "index", "value"]),
  "{ :self :index :value |\n\t\tself.sendOsc(OscMessage('/c_set', [index, value]))\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "status",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.status;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.status;>\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "useIoUgens",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.useIoUgens;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.useIoUgens;>\n\t}",
);

sl.addMethodToExistingType(
  "ScSynth",
  "ScSynth",
  "useWebSocket",
  ["self", "address"],
  sl.annotateFunction(function (_self, _address) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _address";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.scSynthUseWebSocket(_self, _address);
  }, ["self", "address"]),
  "{ :self :address |\n\t\t<primitive: return sc.scSynthUseWebSocket(_self, _address);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScSynth",
  "scSynth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return globalScSynth;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return globalScSynth;>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "lessThanSignExclamationMark",
  ["self", "aUgen"],
  sl.annotateFunction(function (_self, _aUgen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aUgen";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isUgen_1(_aUgen),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_numberOfChannels_1(_scUgen_1(_aUgen)), 0);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _multipleRootGraph_2(_self, _aUgen);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _FirstArg_2(_self, _aUgen);
      }, []),
    );
  }, ["self", "aUgen"]),
  "{ :self :aUgen |\n\t\t(aUgen.isUgen & {\n\t\t\taUgen.scUgen.numberOfChannels = 0\n\t\t}).if {\n\t\t\tself.multipleRootGraph(aUgen)\n\t\t} {\n\t\t\tFirstArg(self, aUgen)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "lessThanSignExclamationMark",
  ["self", "aUgen"],
  sl.annotateFunction(function (_self, _aUgen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aUgen";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isUgen_1(_aUgen),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_numberOfChannels_1(_scUgen_1(_aUgen)), 0);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _multipleRootGraph_2(_self, _aUgen);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _FirstArg_2(_self, _aUgen);
      }, []),
    );
  }, ["self", "aUgen"]),
  "{ :self :aUgen |\n\t\t(aUgen.isUgen & {\n\t\t\taUgen.scUgen.numberOfChannels = 0\n\t\t}).if {\n\t\t\tself.multipleRootGraph(aUgen)\n\t\t} {\n\t\t\tFirstArg(self, aUgen)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "basicPlayAt",
  ["self", "systemTimeInSeconds"],
  sl.annotateFunction(function (_self, _systemTimeInSeconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _systemTimeInSeconds";
      throw new Error(errorMessage);
    } /* Primitive */
    globalScSynth.playUgenAt(
      _self,
      _busOffset_1(_self),
      -1,
      1,
      [],
      _systemTimeInSeconds,
    );
  }, ["self", "systemTimeInSeconds"]),
  "{ :self :systemTimeInSeconds |\n\t\t<primitive:\n\t\tglobalScSynth.playUgenAt(\n\t\t\t_self,\n\t\t\t_busOffset_1(_self),\n\t\t\t-1,\n\t\t\t1,\n\t\t\t[],\n\t\t\t_systemTimeInSeconds\n\t\t);\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "basicPlayAt",
  ["self", "systemTimeInSeconds"],
  sl.annotateFunction(function (_self, _systemTimeInSeconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _systemTimeInSeconds";
      throw new Error(errorMessage);
    } /* Primitive */
    globalScSynth.playUgenAt(
      _self,
      _busOffset_1(_self),
      -1,
      1,
      [],
      _systemTimeInSeconds,
    );
  }, ["self", "systemTimeInSeconds"]),
  "{ :self :systemTimeInSeconds |\n\t\t<primitive:\n\t\tglobalScSynth.playUgenAt(\n\t\t\t_self,\n\t\t\t_busOffset_1(_self),\n\t\t\t-1,\n\t\t\t1,\n\t\t\t[],\n\t\t\t_systemTimeInSeconds\n\t\t);\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "draw",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scSynDefFileName = "/tmp/splDraw.scsyndef";
    /* Statements */
    _writeScSynDefFile_3(_self, "Anonymous", _scSynDefFileName);
    return _systemCommand_3(_system, "hsc3-dot", [
      "scsyndef-draw",
      _scSynDefFileName,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet scSynDefFileName = '/tmp/splDraw.scsyndef';\n\t\tself.writeScSynDefFile(\n\t\t\t'Anonymous',\n\t\t\tscSynDefFileName\n\t\t);\n\t\tsystem.systemCommand(\n\t\t\t'hsc3-dot',\n\t\t\t[\n\t\t\t\t'scsyndef-draw',\n\t\t\t\tscSynDefFileName\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "draw",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scSynDefFileName = "/tmp/splDraw.scsyndef";
    /* Statements */
    _writeScSynDefFile_3(_self, "Anonymous", _scSynDefFileName);
    return _systemCommand_3(_system, "hsc3-dot", [
      "scsyndef-draw",
      _scSynDefFileName,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet scSynDefFileName = '/tmp/splDraw.scsyndef';\n\t\tself.writeScSynDefFile(\n\t\t\t'Anonymous',\n\t\t\tscSynDefFileName\n\t\t);\n\t\tsystem.systemCommand(\n\t\t\t'hsc3-dot',\n\t\t\t[\n\t\t\t\t'scsyndef-draw',\n\t\t\t\tscSynDefFileName\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "isOutputSignal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.isOutputSignal(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.isOutputSignal(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "isOutputSignal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.isOutputSignal(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.isOutputSignal(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "kr",
  ["aUgen"],
  sl.annotateFunction(function (_aUgen) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _aUgen";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.kr(_aUgen);
  }, ["aUgen"]),
  "{ :aUgen |\n\t\t<primitive: return sc.kr(_aUgen);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "kr",
  ["aUgen"],
  sl.annotateFunction(function (_aUgen) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _aUgen";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.kr(_aUgen);
  }, ["aUgen"]),
  "{ :aUgen |\n\t\t<primitive: return sc.kr(_aUgen);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "multipleRootGraph",
  ["self", "aUgen"],
  sl.annotateFunction(function (_self, _aUgen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aUgen";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.multipleRootGraph(_self, _aUgen);
  }, ["self", "aUgen"]),
  "{ :self :aUgen |\n\t\t<primitive: return sc.multipleRootGraph(_self, _aUgen);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "multipleRootGraph",
  ["self", "aUgen"],
  sl.annotateFunction(function (_self, _aUgen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aUgen";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.multipleRootGraph(_self, _aUgen);
  }, ["self", "aUgen"]),
  "{ :self :aUgen |\n\t\t<primitive: return sc.multipleRootGraph(_self, _aUgen);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "play",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _playAt_2(_self, _sessionTime_1(_system));
  }, ["self"]),
  "{ :self |\n\t\tself.playAt(system.sessionTime)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "play",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _playAt_2(_self, _sessionTime_1(_system));
  }, ["self"]),
  "{ :self |\n\t\tself.playAt(system.sessionTime)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "playAt",
  ["self", "systemTimeInSeconds"],
  sl.annotateFunction(function (_self, _systemTimeInSeconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _systemTimeInSeconds";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOutputSignal_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _latency = 0.2;
        /* Statements */
        return _basicPlayAt_2(
          _self,
          _plusSign_2(_systemTimeInSeconds, _latency),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("playAt: not ouput signal?");
      }, []),
    );
  }, ["self", "systemTimeInSeconds"]),
  "{ :self :systemTimeInSeconds |\n\t\tself.isOutputSignal.if {\n\t\t\tlet latency = 0.2; /* Preferences */\n\t\t\tself.basicPlayAt(systemTimeInSeconds + latency)\n\t\t} {\n\t\t\t'playAt: not ouput signal?'.error\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "playAt",
  ["self", "systemTimeInSeconds"],
  sl.annotateFunction(function (_self, _systemTimeInSeconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _systemTimeInSeconds";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOutputSignal_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _latency = 0.2;
        /* Statements */
        return _basicPlayAt_2(
          _self,
          _plusSign_2(_systemTimeInSeconds, _latency),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("playAt: not ouput signal?");
      }, []),
    );
  }, ["self", "systemTimeInSeconds"]),
  "{ :self :systemTimeInSeconds |\n\t\tself.isOutputSignal.if {\n\t\t\tlet latency = 0.2; /* Preferences */\n\t\t\tself.basicPlayAt(systemTimeInSeconds + latency)\n\t\t} {\n\t\t\t'playAt: not ouput signal?'.error\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "print",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.prettyPrintSyndefOf(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.prettyPrintSyndefOf(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "print",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.prettyPrintSyndefOf(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.prettyPrintSyndefOf(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "renderSoundFile",
  ["self", "fileName", "duration"],
  sl.annotateFunction(function (_self, _fileName, _duration) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fileName, _duration";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scSynDefFileName = "/tmp/renderSoundFile.scsyndef";
    let _numberOfChannels = _if_3(
      _isCollection_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
    /* Statements */
    _writeScSynDefFile_3(_self, "Anonymous", _scSynDefFileName);
    return _systemCommand_3(_system, "hsc3-plot", [
      "scsyndef",
      _scSynDefFileName,
      _asString_1(_numberOfChannels),
      _asString_1(_duration),
    ]);
  }, ["self", "fileName", "duration"]),
  "{ :self :fileName :duration |\n\t\tlet scSynDefFileName = '/tmp/renderSoundFile.scsyndef';\n\t\tlet numberOfChannels = self.isCollection.if {\n\t\t\tself.size\n\t\t} {\n\t\t\t1\n\t\t};\n\t\tself.writeScSynDefFile(\n\t\t\t'Anonymous',\n\t\t\tscSynDefFileName\n\t\t);\n\t\tsystem.systemCommand(\n\t\t\t'hsc3-plot',\n\t\t\t[\n\t\t\t\t'scsyndef',\n\t\t\t\tscSynDefFileName,\n\t\t\t\tnumberOfChannels.asString,\n\t\t\t\tduration.asString\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "renderSoundFile",
  ["self", "fileName", "duration"],
  sl.annotateFunction(function (_self, _fileName, _duration) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fileName, _duration";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scSynDefFileName = "/tmp/renderSoundFile.scsyndef";
    let _numberOfChannels = _if_3(
      _isCollection_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
    /* Statements */
    _writeScSynDefFile_3(_self, "Anonymous", _scSynDefFileName);
    return _systemCommand_3(_system, "hsc3-plot", [
      "scsyndef",
      _scSynDefFileName,
      _asString_1(_numberOfChannels),
      _asString_1(_duration),
    ]);
  }, ["self", "fileName", "duration"]),
  "{ :self :fileName :duration |\n\t\tlet scSynDefFileName = '/tmp/renderSoundFile.scsyndef';\n\t\tlet numberOfChannels = self.isCollection.if {\n\t\t\tself.size\n\t\t} {\n\t\t\t1\n\t\t};\n\t\tself.writeScSynDefFile(\n\t\t\t'Anonymous',\n\t\t\tscSynDefFileName\n\t\t);\n\t\tsystem.systemCommand(\n\t\t\t'hsc3-plot',\n\t\t\t[\n\t\t\t\t'scsyndef',\n\t\t\t\tscSynDefFileName,\n\t\t\t\tnumberOfChannels.asString,\n\t\t\t\tduration.asString\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "soundPlot",
  ["self", "duration"],
  sl.annotateFunction(function (_self, _duration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _duration";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scSynDefFileName = "/tmp/splPlot.scsyndef";
    let _numberOfChannels = _if_3(
      _isCollection_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
    /* Statements */
    _writeScSynDefFile_3(_self, "Anonymous", _scSynDefFileName);
    return _systemCommand_3(_system, "hsc3-plot", [
      "scsyndef",
      _scSynDefFileName,
      _asString_1(_numberOfChannels),
      _asString_1(_duration),
    ]);
  }, ["self", "duration"]),
  "{ :self :duration |\n\t\tlet scSynDefFileName = '/tmp/splPlot.scsyndef';\n\t\tlet numberOfChannels = self.isCollection.if {\n\t\t\tself.size\n\t\t} {\n\t\t\t1\n\t\t};\n\t\tself.writeScSynDefFile(\n\t\t\t'Anonymous',\n\t\t\tscSynDefFileName\n\t\t);\n\t\tsystem.systemCommand(\n\t\t\t'hsc3-plot',\n\t\t\t[\n\t\t\t\t'scsyndef',\n\t\t\t\tscSynDefFileName,\n\t\t\t\tnumberOfChannels.asString,\n\t\t\t\tduration.asString\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "soundPlot",
  ["self", "duration"],
  sl.annotateFunction(function (_self, _duration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _duration";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scSynDefFileName = "/tmp/splPlot.scsyndef";
    let _numberOfChannels = _if_3(
      _isCollection_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
    /* Statements */
    _writeScSynDefFile_3(_self, "Anonymous", _scSynDefFileName);
    return _systemCommand_3(_system, "hsc3-plot", [
      "scsyndef",
      _scSynDefFileName,
      _asString_1(_numberOfChannels),
      _asString_1(_duration),
    ]);
  }, ["self", "duration"]),
  "{ :self :duration |\n\t\tlet scSynDefFileName = '/tmp/splPlot.scsyndef';\n\t\tlet numberOfChannels = self.isCollection.if {\n\t\t\tself.size\n\t\t} {\n\t\t\t1\n\t\t};\n\t\tself.writeScSynDefFile(\n\t\t\t'Anonymous',\n\t\t\tscSynDefFileName\n\t\t);\n\t\tsystem.systemCommand(\n\t\t\t'hsc3-plot',\n\t\t\t[\n\t\t\t\t'scsyndef',\n\t\t\t\tscSynDefFileName,\n\t\t\t\tnumberOfChannels.asString,\n\t\t\t\tduration.asString\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "writeScSynDefFile",
  ["self", "scSynDefName", "scSynDefFileName"],
  sl.annotateFunction(function (_self, _scSynDefName, _scSynDefFileName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _scSynDefName, _scSynDefFileName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _graphDef = _encodeUgenAt_3(_scSynDefName, _busOffset_1(_self), _self);
    /* Statements */
    return _writeBinaryFile_2(_scSynDefFileName, _graphDef);
  }, ["self", "scSynDefName", "scSynDefFileName"]),
  "{ :self :scSynDefName :scSynDefFileName |\n\t\tlet graphDef = scSynDefName.encodeUgenAt(self.busOffset, self);\n\t\tscSynDefFileName.writeBinaryFile(graphDef)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "ScSynth",
  "writeScSynDefFile",
  ["self", "scSynDefName", "scSynDefFileName"],
  sl.annotateFunction(function (_self, _scSynDefName, _scSynDefFileName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _scSynDefName, _scSynDefFileName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _graphDef = _encodeUgenAt_3(_scSynDefName, _busOffset_1(_self), _self);
    /* Statements */
    return _writeBinaryFile_2(_scSynDefFileName, _graphDef);
  }, ["self", "scSynDefName", "scSynDefFileName"]),
  "{ :self :scSynDefName :scSynDefFileName |\n\t\tlet graphDef = scSynDefName.encodeUgenAt(self.busOffset, self);\n\t\tscSynDefFileName.writeBinaryFile(graphDef)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynth",
  "localControls",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _asRecord_1(sc.localControls(_self));
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _asRecord_1(sc.localControls(_self));>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScSynth",
  "OverlapTextureList",
  ["self", "sustainTime", "transitionTime", "overlap"],
  sl.annotateFunction(
    function (_self, _sustainTime, _transitionTime, _overlap) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _sustainTime, _transitionTime, _overlap";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.OverlapTextureArray(
        _self,
        _sustainTime,
        _transitionTime,
        _overlap,
      );
    },
    ["self", "sustainTime", "transitionTime", "overlap"],
  ),
  "{ :self :sustainTime :transitionTime :overlap |\n\t\t<primitive: return sc.OverlapTextureArray(_self, _sustainTime, _transitionTime, _overlap);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScSynth",
  "OverlapTexture",
  ["self", "sustainTime", "transitionTime", "overlap"],
  sl.annotateFunction(
    function (_self, _sustainTime, _transitionTime, _overlap) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _sustainTime, _transitionTime, _overlap";
        throw new Error(errorMessage);
      } /* Statements */
      return _OverlapTextureList_4(
        _self,
        _sustainTime,
        _transitionTime,
        _overlap,
      );
    },
    ["self", "sustainTime", "transitionTime", "overlap"],
  ),
  "{ :self :sustainTime :transitionTime :overlap |\n\t\tself.OverlapTextureList(sustainTime, transitionTime, overlap)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScSynth",
  "XFadeTexture",
  ["self", "sustainTime", "transitionTime"],
  sl.annotateFunction(function (_self, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _sustainTime, _transitionTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XFadeTexture(_self, _sustainTime, _transitionTime);
  }, ["self", "sustainTime", "transitionTime"]),
  "{ :self :sustainTime :transitionTime |\n\t\t<primitive: return sc.XFadeTexture(_self, _sustainTime, _transitionTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScSynth",
  "SfAcquire",
  ["self", "numberOfChannels", "channelIndices"],
  sl.annotateFunction(function (_self, _numberOfChannels, _channelIndices) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _numberOfChannels, _channelIndices";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfAcquire(_self, _numberOfChannels, _channelIndices);
  }, ["self", "numberOfChannels", "channelIndices"]),
  "{ :self :numberOfChannels :channelIndices |\n\t\t<primitive: return sc.SfAcquire(_self, _numberOfChannels, _channelIndices);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScSynth",
  "SfAcquire1",
  ["self", "numberOfChannels", "channelIndex"],
  sl.annotateFunction(function (_self, _numberOfChannels, _channelIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _numberOfChannels, _channelIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_SfAcquire_3(_self, _numberOfChannels, [_channelIndex]));
  }, ["self", "numberOfChannels", "channelIndex"]),
  "{ :self :numberOfChannels :channelIndex |\n\t\tSfAcquire(self, numberOfChannels, [channelIndex]).first\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScSynth",
  "SfAcquireMono",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_SfAcquire_3(_self, 1, [1]));
  }, ["self"]),
  "{ :self |\n\t\tSfAcquire(self, 1, [1]).first\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScSynth",
  "SfAcquireStereo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SfAcquire_3(_self, 2, [1, 2]);
  }, ["self"]),
  "{ :self |\n\t\tSfAcquire(self, 2, [1, 2])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "asLocalBuf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.asLocalBuf(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.asLocalBuf(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "asLocalBufferList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _exclamationMarkEqualsSign_2(_depth_1(_self), 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("asLocalBufferList: not a matrix");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _asLocalBuf_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.depth != 3).if {\n\t\t\t'asLocalBufferList: not a matrix'.error\n\t\t} {\n\t\t\tself.collect(asLocalBuf:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScSynth",
  "LocalBuf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.asLocalBuf(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.asLocalBuf(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScSynth",
  "exclamationMarkCircumflexAccent",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _Splay_1(_exclamationMark_2(_self, _anInteger));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tSplay(self ! anInteger)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScSynth",
  "exclamationMarkGreaterThanSign",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _Mix_1(_exclamationMark_2(_self, _anInteger));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tMix(self ! anInteger)\n\t}",
);
