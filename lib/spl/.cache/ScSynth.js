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
  "{ :self :address :onMessage | <primitive: _self.addOscListener(_address, _onMessage);>\nonMessage }",
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
  "{ :self | <primitive: return _self.connect();>\n }",
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
  "{ :self | <primitive: return _self.isConnected();>\n }",
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
  "{ :self | preference(system,'ScSynth/Outputs/Main/NumberOfChannels', 2) }",
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
  "{ :self | if(preference(system,'ScSynth/Outputs/Main/FrontIsVertex', false), { 0 }, { 0.5 }) }",
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
  "{ :self | <primitive: return _self.options;>\n }",
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
  "{ :self | <primitive: return _self.oscListeners;>\n }",
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
  "{ :self | ['options', 'oscListeners', 'readyState', 'status', 'useIoUgens'] }",
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
  "{ :self | <primitive: return _self.readyState;>\n }",
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
  "{ :self :address :onMessage | <primitive: _self.removeOscListener(_address, _onMessage);>\nonMessage }",
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
  "{ :self | <primitive: return _self.reset();>\n }",
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
  "{ :self :oscPacket | <primitive: return _self.sendOsc(_asRecord_1(_oscPacket));>\n }",
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
  "{ :self :index :value | sendOsc(self,OscMessage('/c_set', [index, value])) }",
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
  "{ :self | <primitive: return _self.status;>\n }",
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
  "{ :self | <primitive: return _self.useIoUgens;>\n }",
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
  "{ :self :address | <primitive: return sc.scSynthUseWebSocket(_self, _address);>\n }",
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
  "{ :self | <primitive: return globalScSynth;>\n }",
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
  "{ :self :aUgen | if((&(isUgen(aUgen), { =(numberOfChannels(scUgen(aUgen)), 0) })), { multipleRootGraph(self,aUgen) }, { FirstArg(self, aUgen) }) }",
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
  "{ :self :aUgen | if((&(isUgen(aUgen), { =(numberOfChannels(scUgen(aUgen)), 0) })), { multipleRootGraph(self,aUgen) }, { FirstArg(self, aUgen) }) }",
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
  "{ :self :systemTimeInSeconds | <primitive: globalScSynth.playUgenAt(\n\t\t\t_self,\n\t\t\t_busOffset_1(_self),\n\t\t\t-1,\n\t\t\t1,\n\t\t\t[],\n\t\t\t_systemTimeInSeconds\n\t\t);>\n }",
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
  "{ :self :systemTimeInSeconds | <primitive: globalScSynth.playUgenAt(\n\t\t\t_self,\n\t\t\t_busOffset_1(_self),\n\t\t\t-1,\n\t\t\t1,\n\t\t\t[],\n\t\t\t_systemTimeInSeconds\n\t\t);>\n }",
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
  "{ :self | let scSynDefFileName = '/tmp/splDraw.scsyndef'; writeScSynDefFile(self,'Anonymous', scSynDefFileName); systemCommand(system,'hsc3-dot', ['scsyndef-draw', scSynDefFileName]) }",
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
  "{ :self | let scSynDefFileName = '/tmp/splDraw.scsyndef'; writeScSynDefFile(self,'Anonymous', scSynDefFileName); systemCommand(system,'hsc3-dot', ['scsyndef-draw', scSynDefFileName]) }",
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
  "{ :self | <primitive: return sc.isOutputSignal(_self);>\n }",
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
  "{ :self | <primitive: return sc.isOutputSignal(_self);>\n }",
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
  "{ :aUgen | <primitive: return sc.kr(_aUgen);>\n }",
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
  "{ :aUgen | <primitive: return sc.kr(_aUgen);>\n }",
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
  "{ :self :aUgen | <primitive: return sc.multipleRootGraph(_self, _aUgen);>\n }",
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
  "{ :self :aUgen | <primitive: return sc.multipleRootGraph(_self, _aUgen);>\n }",
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
  "{ :self | playAt(self,sessionTime(system)) }",
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
  "{ :self | playAt(self,sessionTime(system)) }",
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
  "{ :self :systemTimeInSeconds | if(isOutputSignal(self), { let latency = 0.2; basicPlayAt(self,+(systemTimeInSeconds, latency)) }, { error('playAt: not ouput signal?') }) }",
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
  "{ :self :systemTimeInSeconds | if(isOutputSignal(self), { let latency = 0.2; basicPlayAt(self,+(systemTimeInSeconds, latency)) }, { error('playAt: not ouput signal?') }) }",
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
  "{ :self | <primitive: return sc.prettyPrintSyndefOf(_self);>\n }",
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
  "{ :self | <primitive: return sc.prettyPrintSyndefOf(_self);>\n }",
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
  "{ :self :fileName :duration | let scSynDefFileName = '/tmp/renderSoundFile.scsyndef'; let numberOfChannels = if(isCollection(self), { size(self) }, { 1 }); writeScSynDefFile(self,'Anonymous', scSynDefFileName); systemCommand(system,'hsc3-plot', ['scsyndef', scSynDefFileName, asString(numberOfChannels), asString(duration)]) }",
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
  "{ :self :fileName :duration | let scSynDefFileName = '/tmp/renderSoundFile.scsyndef'; let numberOfChannels = if(isCollection(self), { size(self) }, { 1 }); writeScSynDefFile(self,'Anonymous', scSynDefFileName); systemCommand(system,'hsc3-plot', ['scsyndef', scSynDefFileName, asString(numberOfChannels), asString(duration)]) }",
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
  "{ :self :duration | let scSynDefFileName = '/tmp/splPlot.scsyndef'; let numberOfChannels = if(isCollection(self), { size(self) }, { 1 }); writeScSynDefFile(self,'Anonymous', scSynDefFileName); systemCommand(system,'hsc3-plot', ['scsyndef', scSynDefFileName, asString(numberOfChannels), asString(duration)]) }",
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
  "{ :self :duration | let scSynDefFileName = '/tmp/splPlot.scsyndef'; let numberOfChannels = if(isCollection(self), { size(self) }, { 1 }); writeScSynDefFile(self,'Anonymous', scSynDefFileName); systemCommand(system,'hsc3-plot', ['scsyndef', scSynDefFileName, asString(numberOfChannels), asString(duration)]) }",
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
  "{ :self :scSynDefName :scSynDefFileName | let graphDef = encodeUgenAt(scSynDefName,busOffset(self), self); writeBinaryFile(scSynDefFileName,graphDef) }",
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
  "{ :self :scSynDefName :scSynDefFileName | let graphDef = encodeUgenAt(scSynDefName,busOffset(self), self); writeBinaryFile(scSynDefFileName,graphDef) }",
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
  "{ :self | <primitive: return _asRecord_1(sc.localControls(_self));>\n }",
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
  "{ :self :sustainTime :transitionTime :overlap | <primitive: return sc.OverlapTextureArray(_self, _sustainTime, _transitionTime, _overlap);>\n }",
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
  "{ :self :sustainTime :transitionTime :overlap | OverlapTextureList(self,sustainTime, transitionTime, overlap) }",
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
  "{ :self :sustainTime :transitionTime | <primitive: return sc.XFadeTexture(_self, _sustainTime, _transitionTime);>\n }",
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
  "{ :self :numberOfChannels :channelIndices | <primitive: return sc.SfAcquire(_self, _numberOfChannels, _channelIndices);>\n }",
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
  "{ :self :numberOfChannels :channelIndex | first(SfAcquire(self, numberOfChannels, [channelIndex])) }",
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
  "{ :self | first(SfAcquire(self, 1, [1])) }",
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
  "{ :self | SfAcquire(self, 2, [1, 2]) }",
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
  "{ :self | <primitive: return sc.asLocalBuf(_self);>\n }",
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
  "{ :self | if((!=(depth(self), 3)), { error('asLocalBufferList: not a matrix') }, { collect(self,asLocalBuf:/1) }) }",
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
  "{ :self | <primitive: return sc.asLocalBuf(_self);>\n }",
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
  "{ :self :anInteger | Splay(!(self, anInteger)) }",
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
  "{ :self :anInteger | Mix(!(self, anInteger)) }",
);
