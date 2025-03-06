sl.extendTypeOrTraitWithMethod(
  "MIDIAccess",
  "MidiMonitorMenu",
  "midiPortListEntries",
  ["self", "onSelect:/2"],
  sl.annotateFunction(function (_self, _onSelect_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSelect_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _plusSignPlusSign_2(
        _ports_1(_inputs_1(_self)),
        _ports_1(_outputs_1(_self)),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _MenuItem_3(
          _plusSignPlusSign_2(
            _plusSignPlusSign_2(_type_1(_each), "/"),
            _name_1(_each),
          ),
          null,
          sl.annotateFunction(function (_event) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _event";
              throw new Error(errorMessage);
            } /* Statements */
            return _onSelect_2(_each, _event);
          }, ["event"]),
        );
      }, ["each"]),
    );
  }, ["self", "onSelect:/2"]),
  "{ :self :onSelect:/2 | collect((++(ports(inputs(self)), ports(outputs(self)))), { :each | MenuItem(++(++(type(each), '/'), name(each)), nil, { :event | onSelect(each, event) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "MidiMonitorMenu",
  "midiMonitorOn",
  ["self", "midiPort", "event"],
  sl.annotateFunction(function (_self, _midiPort, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _midiPort, _event";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _textEditor = _TextEditor_4(
      _self,
      _plusSignPlusSign_2("Midi Monitor On ", _name_1(_midiPort)),
      "text/plain",
      "",
    );
    let _messages = [];
    let _onMidiMessage_1 = sl.annotateFunction(function (_midiMessageEvent) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _midiMessageEvent";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _byteList = _data_1(_midiMessageEvent);
      /* Statements */
      _add_2(_messages, _midiMessageEvent);
      _ifTrue_2(
        _ampersand_2(
          _equalsSign_2(_size_1(_byteList), 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_byteList, 1), 176);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _setControl_3(
            _scSynth_1(_system),
            _plusSign_2(11000, _at_2(_byteList, 2)),
            _solidus_2(_at_2(_byteList, 3), 127),
          );
        }, []),
      );
      return _setEditorText_2(
        _textEditor,
        _unlines_1(
          _collect_2(
            _last_2(_messages, _min_2(25, _size_1(_messages))),
            sl.annotateFunction(function (_midi) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _midi";
                throw new Error(errorMessage);
              } /* Statements */
              return _asString_1(_data_1(_midi));
            }, ["midi"]),
          ),
        ),
      );
    }, ["midiMessageEvent"]);
    let _frame = _addFrame_3(_self, _textEditor, _event);
    /* Statements */
    _editable_2(_textEditor, false);
    _addEventListener_3(_midiPort, "midimessage", _onMidiMessage_1);
    _addEventListener_3(
      _frame,
      "close",
      sl.annotateFunction(function (_unusedEvent) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedEvent";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeEventListener_3(
          _midiPort,
          "midimessage",
          _onMidiMessage_1,
        );
      }, ["unusedEvent"]),
    );
    return _frame;
  }, ["self", "midiPort", "event"]),
  "{ :self :midiPort :event | let textEditor = TextEditor(self,++('Midi Monitor On ', name(midiPort)), 'text/plain', ''); let messages = []; let onMidiMessage = { :midiMessageEvent | let byteList = data(midiMessageEvent); add(messages,midiMessageEvent); ifTrue((&(=(size(byteList), 3), { =(at(byteList, 1), 176) })), { setControl(scSynth(system),+(11000, at(byteList, 2)), /(at(byteList, 3), 127)) }); setEditorText(textEditor,unlines(collect(last(messages,min(25,size(messages))), { :midi | asString(data(midi)) }))) }; let frame = addFrame(self,textEditor, event); editable(textEditor, false); addEventListener(midiPort,'midimessage', onMidiMessage:/1); addEventListener(frame, 'close', { :unusedEvent | removeEventListener(midiPort,'midimessage', onMidiMessage:/1) }); frame }",
);

sl.addType(
  false,
  "MidiMonitorMenu",
  "MidiMonitorMenu",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MidiMonitorMenu",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "MidiMonitorMenu",
);

sl.addMethodToExistingType(
  "MidiMonitorMenu",
  "MidiMonitorMenu",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _midiAccess_1(_smallKansas),
      sl.annotateFunction(function (_midiAccess) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _midiAccess";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _onSelect_2 = sl.annotateFunction(function (_midiPort, _event) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _midiPort, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _midiMonitorOn_3(_smallKansas, _midiPort, _event);
        }, ["midiPort", "event"]);
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
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _setEntries_2(
              _menu,
              _midiPortListEntries_2(_midiAccess, _onSelect_2),
            );
          }, []),
        );
      }, ["midiAccess"]),
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event | then(midiAccess(smallKansas), { :midiAccess | let onSelect = { :midiPort :event | midiMonitorOn(smallKansas,midiPort, event) }; let menu = Menu('Midi Monitor Menu', midiPortListEntries(midiAccess,onSelect:/2)); isTransient(menu, true); addFrameWithAnimator(smallKansas, menu, event, 1, { setEntries(menu,midiPortListEntries(midiAccess,onSelect:/2)) }) }) }",
);
