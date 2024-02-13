/* {- Requires: Ugen -} */

sl.addType(
  true,
  "ScSynth",
  "ScSynth",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ScSynth",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "addOscListener",
  ["self", "address", "onMessage"],
  function (_self, _address, _onMessage) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _address, _onMessage";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.addOscListener(_address, _onMessage);
    /* Statements */
    return _onMessage;
  },
  "{ :self :address :onMessage |\n\t\t<primitive: _self.addOscListener(_address, _onMessage);>\n\t\tonMessage\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "connect",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.connect();
  },
  "{ :self |\n\t\t<primitive: return _self.connect();>\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "isConnected",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.isConnected();
  },
  "{ :self |\n\t\t<primitive: return _self.isConnected();>\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "mainOutputs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _preference_3(_system, "ScSynth/Outputs/Main/NumberOfChannels", 2);
  },
  "{ :self |\n\t\tsystem.preference('ScSynth/Outputs/Main/NumberOfChannels', 2)\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "mainOrientation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _preference_3(_system, "ScSynth/Outputs/Main/FrontIsVertex", false),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 0;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 0.5;
      },
    );
  },
  "{ :self |\n\t\tsystem.preference('ScSynth/Outputs/Main/FrontIsVertex', false).if {\n\t\t\t0\n\t\t} {\n\t\t\t0.5\n\t\t}\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "options",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.options;
  },
  "{ :self |\n\t\t<primitive: return _self.options;>\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "oscListeners",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.oscListeners;
  },
  "{ :self |\n\t\t<primitive: return _self.oscListeners;>\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["options", "oscListeners", "readyState", "status", "useIoUgens"];
  },
  "{ :self |\n\t\t['options', 'oscListeners', 'readyState', 'status', 'useIoUgens']\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "readyState",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.readyState;
  },
  "{ :self |\n\t\t<primitive: return _self.readyState;>\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "removeOscListener",
  ["self", "address", "onMessage"],
  function (_self, _address, _onMessage) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _address, _onMessage";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.removeOscListener(_address, _onMessage);
    /* Statements */
    return _onMessage;
  },
  "{ :self :address :onMessage |\n\t\t<primitive: _self.removeOscListener(_address, _onMessage);>\n\t\tonMessage\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.reset();
  },
  "{ :self |\n\t\t<primitive: return _self.reset();>\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "sendOsc",
  ["self", "oscPacket"],
  function (_self, _oscPacket) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oscPacket";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.sendOsc(_asRecord_1(_oscPacket));
  },
  "{ :self :oscPacket |\n\t\t<primitive: return _self.sendOsc(_asRecord_1(_oscPacket));>\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "setControl",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sendOsc_2(_self, _OscMessage_2("/c_set", [_index, _value]));
  },
  "{ :self :index :value |\n\t\tself.sendOsc(OscMessage('/c_set', [index, value]))\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "status",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.status;
  },
  "{ :self |\n\t\t<primitive: return _self.status;>\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "useIoUgens",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.useIoUgens;
  },
  "{ :self |\n\t\t<primitive: return _self.useIoUgens;>\n\t}",
);

sl.addMethod(
  "ScSynth",
  "ScSynth",
  "useWebSocket",
  ["self", "address"],
  function (_self, _address) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _address";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.scSynthUseWebSocket(_self, _address);
  },
  "{ :self :address |\n\t\t<primitive: return sc.scSynthUseWebSocket(_self, _address);>\n\t}",
);

sl.addMethod(
  "System",
  "ScSynth",
  "scSynth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return globalScSynth;
  },
  "{ :self |\n\t\t<primitive: return globalScSynth;>\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "lessThanSignExclamationMark",
  ["self", "aUgen"],
  function (_self, _aUgen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aUgen";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _ampersand_2(_isUgen_1(_aUgen), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_numChannels_1(_scUgen_1(_aUgen)), 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _multipleRootGraph_2(_self, _aUgen);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _FirstArg_2(_self, _aUgen);
      },
    );
  },
  "{ :self :aUgen |\n\t\t(aUgen.isUgen & {\n\t\t\taUgen.scUgen.numChannels = 0\n\t\t}).if {\n\t\t\tself.multipleRootGraph(aUgen)\n\t\t} {\n\t\t\tFirstArg(self, aUgen)\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "lessThanSignExclamationMark",
  ["self", "aUgen"],
  function (_self, _aUgen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aUgen";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _ampersand_2(_isUgen_1(_aUgen), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_numChannels_1(_scUgen_1(_aUgen)), 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _multipleRootGraph_2(_self, _aUgen);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _FirstArg_2(_self, _aUgen);
      },
    );
  },
  "{ :self :aUgen |\n\t\t(aUgen.isUgen & {\n\t\t\taUgen.scUgen.numChannels = 0\n\t\t}).if {\n\t\t\tself.multipleRootGraph(aUgen)\n\t\t} {\n\t\t\tFirstArg(self, aUgen)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "basicPlayAt",
  ["self", "systemTimeInSeconds"],
  function (_self, _systemTimeInSeconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _systemTimeInSeconds";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    globalScSynth.playUgenAt(
      _self,
      _busOffset_1(_self),
      -1,
      1,
      [],
      _systemTimeInSeconds,
    );
  },
  "{ :self :systemTimeInSeconds |\n\t\t<primitive: globalScSynth.playUgenAt(_self, _busOffset_1(_self), -1, 1, [], _systemTimeInSeconds);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "basicPlayAt",
  ["self", "systemTimeInSeconds"],
  function (_self, _systemTimeInSeconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _systemTimeInSeconds";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    globalScSynth.playUgenAt(
      _self,
      _busOffset_1(_self),
      -1,
      1,
      [],
      _systemTimeInSeconds,
    );
  },
  "{ :self :systemTimeInSeconds |\n\t\t<primitive: globalScSynth.playUgenAt(_self, _busOffset_1(_self), -1, 1, [], _systemTimeInSeconds);>\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _scSynDefFileName = "/tmp/splDraw.scsyndef";
    /* Statements */
    return _then_2(
      _writeScSynDefFile_3(_self, "Anonymous", _scSynDefFileName),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _systemCommand_3(_system, "hsc3-dot", [
          "scsyndef-draw",
          _scSynDefFileName,
        ]);
      },
    );
  },
  "{ :self |\n\t\tlet scSynDefFileName = '/tmp/splDraw.scsyndef';\n\t\tself.writeScSynDefFile(\n\t\t\t'Anonymous',\n\t\t\tscSynDefFileName\n\t\t).then { :unused |\n\t\t\tsystem.systemCommand(\n\t\t\t\t'hsc3-dot',\n\t\t\t\t[\n\t\t\t\t\t'scsyndef-draw',\n\t\t\t\t\tscSynDefFileName\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _scSynDefFileName = "/tmp/splDraw.scsyndef";
    /* Statements */
    return _then_2(
      _writeScSynDefFile_3(_self, "Anonymous", _scSynDefFileName),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _systemCommand_3(_system, "hsc3-dot", [
          "scsyndef-draw",
          _scSynDefFileName,
        ]);
      },
    );
  },
  "{ :self |\n\t\tlet scSynDefFileName = '/tmp/splDraw.scsyndef';\n\t\tself.writeScSynDefFile(\n\t\t\t'Anonymous',\n\t\t\tscSynDefFileName\n\t\t).then { :unused |\n\t\t\tsystem.systemCommand(\n\t\t\t\t'hsc3-dot',\n\t\t\t\t[\n\t\t\t\t\t'scsyndef-draw',\n\t\t\t\t\tscSynDefFileName\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "isOutputSignal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.isOutputSignal(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.isOutputSignal(_self);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "isOutputSignal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.isOutputSignal(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.isOutputSignal(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "kr",
  ["aUgen"],
  function (_aUgen) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _aUgen";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.kr(_aUgen);
  },
  "{ :aUgen |\n\t\t<primitive: return sc.kr(_aUgen);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "kr",
  ["aUgen"],
  function (_aUgen) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _aUgen";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.kr(_aUgen);
  },
  "{ :aUgen |\n\t\t<primitive: return sc.kr(_aUgen);>\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "multipleRootGraph",
  ["self", "aUgen"],
  function (_self, _aUgen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aUgen";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.multipleRootGraph(_self, _aUgen);
  },
  "{ :self :aUgen |\n\t\t<primitive: return sc.multipleRootGraph(_self, _aUgen);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "multipleRootGraph",
  ["self", "aUgen"],
  function (_self, _aUgen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aUgen";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.multipleRootGraph(_self, _aUgen);
  },
  "{ :self :aUgen |\n\t\t<primitive: return sc.multipleRootGraph(_self, _aUgen);>\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "play",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _playAt_2(_self, null);
  },
  "{ :self |\n\t\tself.playAt(nil)\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "play",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _playAt_2(_self, null);
  },
  "{ :self |\n\t\tself.playAt(nil)\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "playAt",
  ["self", "systemTimeInSeconds"],
  function (_self, _systemTimeInSeconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _systemTimeInSeconds";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isOutputSignal_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _basicPlayAt_2(_self, _systemTimeInSeconds);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("playAt: not ouput signal?");
    });
  },
  "{ :self :systemTimeInSeconds |\n\t\tself.isOutputSignal.if {\n\t\t\tself.basicPlayAt(systemTimeInSeconds)\n\t\t} {\n\t\t\t'playAt: not ouput signal?'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "playAt",
  ["self", "systemTimeInSeconds"],
  function (_self, _systemTimeInSeconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _systemTimeInSeconds";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isOutputSignal_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _basicPlayAt_2(_self, _systemTimeInSeconds);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("playAt: not ouput signal?");
    });
  },
  "{ :self :systemTimeInSeconds |\n\t\tself.isOutputSignal.if {\n\t\t\tself.basicPlayAt(systemTimeInSeconds)\n\t\t} {\n\t\t\t'playAt: not ouput signal?'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "plot",
  ["self", "duration"],
  function (_self, _duration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _duration";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _graphDef = _encodeUgenAt_3("Anonymous", _busOffset_1(_self), _self);
    let _scSynDefFileName = "/tmp/splPlot.scsyndef";
    let _numberOfChannels = _if_3(_isCollection_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _size_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    });
    /* Statements */
    return _then_2(
      _writeFile_2(_scSynDefFileName, _graphDef),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _systemCommand_3(_system, "hsc3-plot", [
          "scsyndef",
          _scSynDefFileName,
          _asString_1(_numberOfChannels),
          _asString_1(_duration),
        ]);
      },
    );
  },
  "{ :self :duration |\n\t\tlet graphDef = 'Anonymous'.encodeUgenAt(self.busOffset, self);\n\t\tlet scSynDefFileName = '/tmp/splPlot.scsyndef';\n\t\tlet numberOfChannels = self.isCollection.if {\n\t\t\tself.size\n\t\t} {\n\t\t\t1\n\t\t};\n\t\tscSynDefFileName.writeFile(graphDef).then { :unused |\n\t\t\tsystem.systemCommand(\n\t\t\t\t'hsc3-plot',\n\t\t\t\t[\n\t\t\t\t\t'scsyndef',\n\t\t\t\t\tscSynDefFileName,\n\t\t\t\t\tnumberOfChannels.asString,\n\t\t\t\t\tduration.asString\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "plot",
  ["self", "duration"],
  function (_self, _duration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _duration";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _graphDef = _encodeUgenAt_3("Anonymous", _busOffset_1(_self), _self);
    let _scSynDefFileName = "/tmp/splPlot.scsyndef";
    let _numberOfChannels = _if_3(_isCollection_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _size_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    });
    /* Statements */
    return _then_2(
      _writeFile_2(_scSynDefFileName, _graphDef),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _systemCommand_3(_system, "hsc3-plot", [
          "scsyndef",
          _scSynDefFileName,
          _asString_1(_numberOfChannels),
          _asString_1(_duration),
        ]);
      },
    );
  },
  "{ :self :duration |\n\t\tlet graphDef = 'Anonymous'.encodeUgenAt(self.busOffset, self);\n\t\tlet scSynDefFileName = '/tmp/splPlot.scsyndef';\n\t\tlet numberOfChannels = self.isCollection.if {\n\t\t\tself.size\n\t\t} {\n\t\t\t1\n\t\t};\n\t\tscSynDefFileName.writeFile(graphDef).then { :unused |\n\t\t\tsystem.systemCommand(\n\t\t\t\t'hsc3-plot',\n\t\t\t\t[\n\t\t\t\t\t'scsyndef',\n\t\t\t\t\tscSynDefFileName,\n\t\t\t\t\tnumberOfChannels.asString,\n\t\t\t\t\tduration.asString\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "print",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.prettyPrintSyndefOf(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.prettyPrintSyndefOf(_self);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "print",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.prettyPrintSyndefOf(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.prettyPrintSyndefOf(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "writeScSynDefFile",
  ["self", "scSynDefName", "scSynDefFileName"],
  function (_self, _scSynDefName, _scSynDefFileName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _scSynDefName, _scSynDefFileName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _graphDef = _encodeUgenAt_3(_scSynDefName, _busOffset_1(_self), _self);
    /* Statements */
    return _writeFile_2(_scSynDefFileName, _graphDef);
  },
  "{ :self :scSynDefName :scSynDefFileName |\n\t\tlet graphDef = scSynDefName.encodeUgenAt(self.busOffset, self);\n\t\tscSynDefFileName.writeFile(graphDef)\n\t}",
);

sl.addMethod(
  "Ugen",
  "ScSynth",
  "writeScSynDefFile",
  ["self", "scSynDefName", "scSynDefFileName"],
  function (_self, _scSynDefName, _scSynDefFileName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _scSynDefName, _scSynDefFileName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _graphDef = _encodeUgenAt_3(_scSynDefName, _busOffset_1(_self), _self);
    /* Statements */
    return _writeFile_2(_scSynDefFileName, _graphDef);
  },
  "{ :self :scSynDefName :scSynDefFileName |\n\t\tlet graphDef = scSynDefName.encodeUgenAt(self.busOffset, self);\n\t\tscSynDefFileName.writeFile(graphDef)\n\t}",
);

sl.addMethod(
  "Record",
  "ScSynth",
  "localControls",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.localControls(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.localControls(_self);>\n\t}",
);

sl.addMethod(
  "Block",
  "ScSynth",
  "OverlapTextureList",
  ["self", "sustainTime", "transitionTime", "overlap"],
  function (_self, _sustainTime, _transitionTime, _overlap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _sustainTime, _transitionTime, _overlap";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OverlapTextureArray(
      _self,
      _sustainTime,
      _transitionTime,
      _overlap,
    );
  },
  "{ :self :sustainTime :transitionTime :overlap |\n\t\t<primitive: return sc.OverlapTextureArray(_self, _sustainTime, _transitionTime, _overlap);>\n\t}",
);

sl.addMethod(
  "Block",
  "ScSynth",
  "OverlapTexture",
  ["self", "sustainTime", "transitionTime", "overlap"],
  function (_self, _sustainTime, _transitionTime, _overlap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _sustainTime, _transitionTime, _overlap";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _OverlapTextureList_4(
      _self,
      _sustainTime,
      _transitionTime,
      _overlap,
    );
  },
  "{ :self :sustainTime :transitionTime :overlap |\n\t\tself.OverlapTextureList(sustainTime, transitionTime, overlap)\n\t}",
);

sl.addMethod(
  "Block",
  "ScSynth",
  "XFadeTexture",
  ["self", "sustainTime", "transitionTime"],
  function (_self, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _sustainTime, _transitionTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.XFadeTexture(_self, _sustainTime, _transitionTime);
  },
  "{ :self :sustainTime :transitionTime |\n\t\t<primitive: return sc.XFadeTexture(_self, _sustainTime, _transitionTime);>\n\t}",
);

sl.addMethod(
  "String",
  "ScSynth",
  "SfAcquire",
  ["self", "numberOfChannels", "channelIndices"],
  function (_self, _numberOfChannels, _channelIndices) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _numberOfChannels, _channelIndices";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SfAcquire(_self, _numberOfChannels, _channelIndices);
  },
  "{ :self :numberOfChannels :channelIndices |\n\t\t<primitive: return sc.SfAcquire(_self, _numberOfChannels, _channelIndices);>\n\t}",
);

sl.addMethod(
  "String",
  "ScSynth",
  "SfAcquire1",
  ["self", "numberOfChannels", "channelIndex"],
  function (_self, _numberOfChannels, _channelIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _numberOfChannels, _channelIndex";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _first_1(_SfAcquire_3(_self, _numberOfChannels, [_channelIndex]));
  },
  "{ :self :numberOfChannels :channelIndex |\n\t\tSfAcquire(self, numberOfChannels, [channelIndex]).first\n\t}",
);

sl.addMethod(
  "String",
  "ScSynth",
  "SfAcquireMono",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _first_1(_SfAcquire_3(_self, 1, [1]));
  },
  "{ :self |\n\t\tSfAcquire(self, 1, [1]).first\n\t}",
);

sl.addMethod(
  "String",
  "ScSynth",
  "SfAcquireStereo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _SfAcquire_3(_self, 2, [1, 2]);
  },
  "{ :self |\n\t\tSfAcquire(self, 2, [1, 2])\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "asLocalBuf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.asLocalBuf(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.asLocalBuf(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "asLocalBufferList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_tildeEqualsSign_2(_rank_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("asLocalBufferList: not a matrix");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _asLocalBuf_1);
    });
  },
  "{ :self |\n\t\t(self.rank ~= 2).if {\n\t\t\t'asLocalBufferList: not a matrix'.error\n\t\t} {\n\t\t\tself.collect(asLocalBuf:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "ScSynth",
  "LocalBuf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.asLocalBuf(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.asLocalBuf(_self);>\n\t}",
);

sl.addMethod(
  "Block",
  "ScSynth",
  "exclamationMarkCircumflexAccent",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Splay_1(_exclamationMark_2(_self, _anInteger));
  },
  "{ :self :anInteger |\n\t\tSplay(self ! anInteger)\n\t}",
);

sl.addMethod(
  "Block",
  "ScSynth",
  "exclamationMarkGreaterThanSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Mix_1(_exclamationMark_2(_self, _anInteger));
  },
  "{ :self :anInteger |\n\t\tMix(self ! anInteger)\n\t}",
);
