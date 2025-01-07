sl.addMethod(
  "MIDIAccess",
  "MidiMonitorMenu",
  "midiPortListEntries",
  ["self", "onSelect:/2"],
  function (_self, _onSelect_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSelect_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _plusSignPlusSign_2(
        _ports_1(_inputs_1(_self)),
        _ports_1(_outputs_1(_self)),
      ),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _MenuItem_3(
          _plusSignPlusSign_2(
            _plusSignPlusSign_2(_type_1(_each), "/"),
            _name_1(_each),
          ),
          null,
          function (_event) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _event";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _onSelect_2(_each, _event);
          },
        );
      },
    );
  },
  "{ :self :onSelect:/2 |\n\t\t(self.inputs.ports ++ self.outputs.ports).collect { :each |\n\t\t\tMenuItem(each.type ++ '/' ++ each.name, nil) { :event |\n\t\t\t\tonSelect(each, event)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "MidiMonitorMenu",
  "midiMonitorOn",
  ["self", "midiPort", "event"],
  function (_self, _midiPort, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _midiPort, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _textEditor = _TextEditor_4(
      _self,
      _plusSignPlusSign_2("Midi Monitor On ", _name_1(_midiPort)),
      "text/plain",
      "",
    );
    let _messages = [];
    let _onMidiMessage_1 = function (_midiMessageEvent) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _midiMessageEvent";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _byteList = _data_1(_midiMessageEvent);
      /* Statements */
      _add_2(_messages, _midiMessageEvent);
      _ifTrue_2(
        _ampersand_2(_equalsSign_2(_size_1(_byteList), 3), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_byteList, 1), 176);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _setControl_3(
            _scSynth_1(_system),
            _plusSign_2(11000, _at_2(_byteList, 2)),
            _solidus_2(_at_2(_byteList, 3), 127),
          );
        },
      );
      return _setEditorText_2(
        _textEditor,
        _unlines_1(
          _collect_2(
            _last_2(_messages, _min_2(25, _size_1(_messages))),
            function (_midi) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _midi";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _asString_1(_data_1(_midi));
            },
          ),
        ),
      );
    };
    let _frame = _addFrame_3(_self, _textEditor, _event);
    /* Statements */
    _editable_2(_textEditor, false);
    _addEventListener_3(_midiPort, "midimessage", _onMidiMessage_1);
    _addEventListener_3(_frame, "close", function (_unusedEvent) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedEvent";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _removeEventListener_3(_midiPort, "midimessage", _onMidiMessage_1);
    });
    return _frame;
  },
  "{ :self :midiPort :event |\n\t\tlet textEditor = self.TextEditor(\n\t\t\t'Midi Monitor On ' ++ midiPort.name,\n\t\t\t'text/plain',\n\t\t\t''\n\t\t);\n\t\tlet messages = [];\n\t\tlet onMidiMessage = { :midiMessageEvent |\n\t\t\tlet byteList = midiMessageEvent.data;\n\t\t\tmessages.add(midiMessageEvent);\n\t\t\t/* Temporary: write Cc data to Sc known buses */\n\t\t\t(byteList.size = 3 & {\n\t\t\t\tbyteList[1] = 176\n\t\t\t}).ifTrue {\n\t\t\t\tsystem.scSynth.setControl(11000 + byteList[2], byteList[3] / 127)\n\t\t\t};\n\t\t\ttextEditor.setEditorText(messages.last(25.min(messages.size)).collect { :midi |\n\t\t\t\tmidi.data.asString\n\t\t\t}.unlines)\n\t\t};\n\t\tlet frame = self.addFrame(textEditor, event);\n\t\ttextEditor.editable := false;\n\t\tmidiPort.addEventListener('midimessage', onMidiMessage:/1);\n\t\tframe.addEventListener('close') { :unusedEvent |\n\t\t\tmidiPort.removeEventListener('midimessage', onMidiMessage:/1)\n\t\t};\n\t\tframe\n\t}",
);

sl.addType(
  false,
  "MidiMonitorMenu",
  "MidiMonitorMenu",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MidiMonitorMenu",
);

sl.copyTraitToType(
  "SmallKansan",
  "MidiMonitorMenu",
);

sl.addMethod(
  "MidiMonitorMenu",
  "MidiMonitorMenu",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(_midiAccess_1(_smallKansas), function (_midiAccess) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _midiAccess";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _onSelect_2 = function (_midiPort, _event) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _midiPort, _event";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _midiMonitorOn_3(_smallKansas, _midiPort, _event);
      };
      let _menu = _Menu_2(
        "Midi Monitor Menu",
        _midiPortListEntries_2(_midiAccess, _onSelect_2),
      );
      /* Statements */
      _isTransient_2(_menu, true);
      return _addFrameWithAnimator_5(
        _smallKansas,
        _menu,
        _event,
        1,
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _setEntries_2(
            _menu,
            _midiPortListEntries_2(_midiAccess, _onSelect_2),
          );
        },
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.midiAccess.then { :midiAccess |\n\t\t\tlet onSelect = { :midiPort :event |\n\t\t\t\tsmallKansas.midiMonitorOn(midiPort, event)\n\t\t\t};\n\t\t\tlet menu = Menu(\n\t\t\t\t'Midi Monitor Menu',\n\t\t\t\tmidiAccess.midiPortListEntries(onSelect:/2)\n\t\t\t);\n\t\t\tmenu.isTransient := true;\n\t\t\tsmallKansas.addFrameWithAnimator(menu, event, 1) {\n\t\t\t\tmenu.setEntries(midiAccess.midiPortListEntries(onSelect:/2))\n\t\t\t}\n\t\t}\n\t}",
);
