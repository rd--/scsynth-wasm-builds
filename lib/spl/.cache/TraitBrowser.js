/*  Requires: ColumnBrowser SmallKansas  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "TraitBrowser",
  "TraitBrowser",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _traitNames = _indicesSorted_1(_traitDictionary_1(_system));
    let _selectedMethod = null;
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Trait Browser",
      "text/plain",
      false,
      true,
      [1, 3],
      null,
      sl.annotateFunction(function (_accepted) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _accepted";
          throw new Error(errorMessage);
        } /* Statements */
        return _definition_2(_selectedMethod, _accepted);
      }, ["accepted"]),
      sl.annotateFunction(function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(
            0,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _setStatus_2(_browser, "");
              return _traitNames;
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
              _setStatus_2(
                _browser,
                _commaSeparated_1(_traitTypes_2(_system, _at_2(_path, 1))),
              );
              return _indicesSorted_1(
                _methodDictionary_1(
                  _at_2(_traitDictionary_1(_system), _at_2(_path, 1)),
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
              _selectedMethod = _at_2(
                _methodDictionary_1(
                  _at_2(_traitDictionary_1(_system), _at_2(_path, 1)),
                ),
                _at_2(_path, 2),
              );
              _setStatus_2(_browser, _provenance_1(_selectedMethod));
              return _definition_1(_selectedMethod);
            }, []),
          ),
        ]);
      }, ["browser", "path"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet traitNames = system.traitDictionary.indicesSorted;\n\t\tlet selectedMethod = nil;\n\t\tself.ColumnBrowser('Trait Browser', 'text/plain', false, true, [1, 3], nil) { :accepted |\n\t\t\tselectedMethod.definition := accepted\n\t\t} { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tbrowser.setStatus('');\n\t\t\t\t\ttraitNames\n\t\t\t\t},\n\t\t\t\t{ 1 } -> {\n\t\t\t\t\tbrowser.setStatus(system.traitTypes(path[1]).commaSeparated);\n\t\t\t\t\tsystem.traitDictionary[path[1]].methodDictionary.indicesSorted\n\t\t\t\t},\n\t\t\t\t{ 2 } -> {\n\t\t\t\t\tselectedMethod := system.traitDictionary[path[1]].methodDictionary[path[2]];\n\t\t\t\t\tbrowser.setStatus(selectedMethod.provenance);\n\t\t\t\t\tselectedMethod.definition\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "TraitBrowser",
  "TraitBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "TraitBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "TraitBrowser",
);

sl.addMethodToExistingType(
  "TraitBrowser",
  "TraitBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_smallKansas, _TraitBrowser_1(_smallKansas), _event);
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(smallKansas.TraitBrowser, event)\n\t}",
);
