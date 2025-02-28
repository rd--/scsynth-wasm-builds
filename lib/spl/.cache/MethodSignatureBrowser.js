sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "MethodSignatureBrowser",
  "MethodSignatureBrowser",
  ["self", "methods", "withFilter"],
  function (_self, _methods, _withFilter) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _methods, _withFilter";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _selectedMethod = null;
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Method Signature Browser",
      "text/plain",
      _withFilter,
      true,
      [1],
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
            return _methods;
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
            _selectedMethod = _methodLookupAtSignature_2(
              _system,
              _at_2(_path, 1),
            );
            _setStatus_2(_browser, _provenance_1(_selectedMethod));
            return _definition_1(_selectedMethod);
          }),
        ]);
      },
    );
  },
  "{ :self :methods :withFilter | let selectedMethod = nil; ColumnBrowser(self, 'Method Signature Browser', 'text/plain', withFilter, true, [1], nil, { :accepted | definition(selectedMethod, accepted) }, { :browser :path | caseOf(size(path),[->({ 0 }, { methods }), ->({ 1 }, { selectedMethod := methodLookupAtSignature(system,at(path, 1)); setStatus(browser,provenance(selectedMethod)); definition(selectedMethod) })]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "MethodSignatureBrowser",
  "MethodSignatureBrowser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _MethodSignatureBrowser_3(
      _self,
      _sort_1(
        _copyWithoutIdenticalElements_1(
          _collect_2(_allMethods_1(_system), _signature_1),
        ),
      ),
      true,
    );
  },
  "{ :self | MethodSignatureBrowser(self,sort(copyWithoutIdenticalElements(collect(allMethods(system),signature:/1))), true) }",
);

sl.addType(
  false,
  "MethodSignatureBrowser",
  "MethodSignatureBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MethodSignatureBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "MethodSignatureBrowser",
);

sl.addMethodToExistingType(
  "MethodSignatureBrowser",
  "MethodSignatureBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(
      _smallKansas,
      _MethodSignatureBrowser_1(_smallKansas),
      _event,
    );
  },
  "{ :self :smallKansas :event | addFrame(smallKansas,MethodSignatureBrowser(smallKansas), event) }",
);
