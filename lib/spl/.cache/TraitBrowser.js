/*  Requires: ColumnBrowser SmallKansas  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "TraitBrowser",
  "TraitBrowser",
  ["self"],
  function (_self) {
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
      function (_accepted) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _accepted";
          throw new Error(errorMessage);
        } /* Statements */
        return _definition_2(_selectedMethod, _accepted);
      },
      function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _setStatus_2(_browser, "");
            return _traitNames;
          }),
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _setStatus_2(
              _browser,
              _join_2(_traitTypes_2(_system, _at_2(_path, 1)), ", "),
            );
            return _indicesSorted_1(
              _methodDictionary_1(
                _at_2(_traitDictionary_1(_system), _at_2(_path, 1)),
              ),
            );
          }),
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, function () {
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
          }),
        ]);
      },
    );
  },
  "{ :self | let traitNames = indicesSorted(traitDictionary(system)); let selectedMethod = nil; ColumnBrowser(self, 'Trait Browser', 'text/plain', false, true, [1, 3], nil, { :accepted | definition(selectedMethod, accepted) }, { :browser :path | caseOf(size(path),[->({ 0 }, { setStatus(browser,''); traitNames }), ->({ 1 }, { setStatus(browser,join(traitTypes(system,at(path, 1)),', ')); indicesSorted(methodDictionary(at(traitDictionary(system), at(path, 1)))) }), ->({ 2 }, { selectedMethod := at(methodDictionary(at(traitDictionary(system), at(path, 1))), at(path, 2)); setStatus(browser,provenance(selectedMethod)); definition(selectedMethod) })]) }) }",
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
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_smallKansas, _TraitBrowser_1(_smallKansas), _event);
  },
  "{ :self :smallKansas :event | addFrame(smallKansas,TraitBrowser(smallKansas), event) }",
);
