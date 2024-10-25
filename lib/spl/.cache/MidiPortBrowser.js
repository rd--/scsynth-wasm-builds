/*  Requires: ColumnBrowser Midi SmallKansas  */

sl.addMethod(
  "SmallKansas",
  "MidiPortBrowser",
  "MidiPortBrowser",
  ["self", "midiAccess"],
  function (_self, _midiAccess) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _midiAccess";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Midi Port Browser",
      "text/plain",
      false,
      false,
      [1, 1, 3],
      null,
      null,
      function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(0, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return ["input", "output"];
          }),
          _hyphenMinusGreaterThanSign_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _copyWithoutIdenticalElements_1(
              _collect_2(
                _ports_2(_midiAccess, _at_2(_path, 1)),
                _manufacturer_1,
              ),
            );
          }),
          _hyphenMinusGreaterThanSign_2(2, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _collect_2(
              _select_2(
                _ports_2(_midiAccess, _at_2(_path, 1)),
                function (_port) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _port";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _equalsSign_2(_manufacturer_1(_port), _at_2(_path, 2));
                },
              ),
              _name_1,
            );
          }),
          _hyphenMinusGreaterThanSign_2(3, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _asString_1(
              _portByName_4(
                _midiAccess,
                _at_2(_path, 1),
                _at_2(_path, 2),
                _at_2(_path, 3),
              ),
            );
          }),
        ]);
      },
    );
  },
  "{ :self :midiAccess |\n\t\tself.ColumnBrowser('Midi Port Browser', 'text/plain', false, false, [1, 1, 3], nil, nil) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\t['input', 'output']\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tmidiAccess.ports(path[1]).collect(manufacturer:/1).copyWithoutIdenticalElements\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tmidiAccess.ports(path[1]).select { :port |\n\t\t\t\t\t\tport.manufacturer = path[2]\n\t\t\t\t\t}.collect(name:/1)\n\t\t\t\t},\n\t\t\t\t3 -> {\n\t\t\t\t\tmidiAccess.portByName(path[1], path[2], path[3]).asString\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "MidiPortBrowser",
  "MidiPortBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MidiPortBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "MidiPortBrowser",
);

sl.addMethod(
  "MidiPortBrowser",
  "MidiPortBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(_midiAccess_1(_smallKansas), function (_midiAccess) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _midiAccess";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _MidiPortBrowser_2(_smallKansas, _midiAccess),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.midiAccess.then { :midiAccess |\n\t\t\tsmallKansas.addFrame(smallKansas.MidiPortBrowser(midiAccess), event)\n\t\t}\n\t}",
);
