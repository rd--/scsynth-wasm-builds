/*  Requires: ColumnBrowser Midi SmallKansas  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "MidiPortBrowser",
  "MidiPortBrowser",
  ["self", "midiAccess"],
  sl.annotateFunction(function (_self, _midiAccess) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _midiAccess";
      throw new Error(errorMessage);
    } /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Midi Port Browser",
      "text/plain",
      false,
      false,
      [1, 1, 3],
      null,
      null,
      sl.annotateFunction(function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(
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
              return ["input", "output"];
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return 1;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _copyWithoutIdenticalElements_1(
                _collect_2(
                  _ports_2(_midiAccess, _at_2(_path, 1)),
                  _manufacturer_1,
                ),
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
              return 2;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _collect_2(
                _select_2(
                  _ports_2(_midiAccess, _at_2(_path, 1)),
                  sl.annotateFunction(function (_port) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _port";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(
                      _manufacturer_1(_port),
                      _at_2(_path, 2),
                    );
                  }, ["port"]),
                ),
                _name_1,
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
              return 3;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _asString_1(
                _portByName_4(
                  _midiAccess,
                  _at_2(_path, 1),
                  _at_2(_path, 2),
                  _at_2(_path, 3),
                ),
              );
            }, []),
          ),
        ]);
      }, ["browser", "path"]),
    );
  }, ["self", "midiAccess"]),
  "{ :self :midiAccess | ColumnBrowser(self, 'Midi Port Browser', 'text/plain', false, false, [1, 1, 3], nil, nil, { :browser :path | caseOf(size(path),[->({ 0 }, { ['input', 'output'] }), ->({ 1 }, { copyWithoutIdenticalElements(collect(ports(midiAccess,at(path, 1)),manufacturer:/1)) }), ->({ 2 }, { collect(select(ports(midiAccess,at(path, 1)), { :port | =(manufacturer(port), at(path, 2)) }),name:/1) }), ->({ 3 }, { asString(portByName(midiAccess,at(path, 1), at(path, 2), at(path, 3))) })]) }) }",
);

sl.addType(
  false,
  "MidiPortBrowser",
  "MidiPortBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MidiPortBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "MidiPortBrowser",
);

sl.addMethodToExistingType(
  "MidiPortBrowser",
  "MidiPortBrowser",
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
        } /* Statements */
        return _addFrame_3(
          _smallKansas,
          _MidiPortBrowser_2(_smallKansas, _midiAccess),
          _event,
        );
      }, ["midiAccess"]),
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event | then(midiAccess(smallKansas), { :midiAccess | addFrame(smallKansas,MidiPortBrowser(smallKansas,midiAccess), event) }) }",
);
