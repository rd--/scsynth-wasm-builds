/*  Requires: ColumnBrowser SmallKansas  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "SystemBrowser",
  "SystemBrowser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _typeNames = _indicesSorted_1(_typeDictionary_1(_system));
    let _methodSet = null;
    let _selectedMethod = null;
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "System Browser",
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
            return _typeNames;
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
              _join_2(_typeTraits_2(_system, _at_2(_path, 1)), ", "),
            );
            _methodSet = _select_2(
              _values_1(_typeMethodDictionary_2(_system, _at_2(_path, 1))),
              function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _tildeEqualsSign_2(_name_1(_origin_1(_each)), "Object");
              },
            );
            return _sorted_1(
              _asList_1(_collect_2(_methodSet, _qualifiedName_1)),
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
            _selectedMethod = _detect_2(_methodSet, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_qualifiedName_1(_each), _at_2(_path, 2));
            });
            _setStatus_2(_browser, _provenance_1(_selectedMethod));
            return _definition_1(_selectedMethod);
          }),
        ]);
      },
    );
  },
  "{ :self | let typeNames = indicesSorted(typeDictionary(system)); let methodSet = nil; let selectedMethod = nil; ColumnBrowser(self, 'System Browser', 'text/plain', false, true, [1, 3], nil, { :accepted | definition(selectedMethod, accepted) }, { :browser :path | caseOf(size(path),[->({ 0 }, { setStatus(browser,''); typeNames }), ->({ 1 }, { setStatus(browser,join(typeTraits(system,at(path, 1)),', ')); methodSet := select(values(typeMethodDictionary(system,at(path, 1))), { :each | ~=(name(origin(each)), 'Object') }); sorted(asList(collect(methodSet,qualifiedName:/1))) }), ->({ 2 }, { selectedMethod := detect(methodSet, { :each | =(qualifiedName(each), at(path, 2)) }); setStatus(browser,provenance(selectedMethod)); definition(selectedMethod) })]) }) }",
);

sl.addType(
  false,
  "SystemBrowser",
  "SystemBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SystemBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "SystemBrowser",
);

sl.addMethodToExistingType(
  "SystemBrowser",
  "SystemBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_smallKansas, _SystemBrowser_1(_smallKansas), _event);
  },
  "{ :self :smallKansas :event | addFrame(smallKansas,SystemBrowser(smallKansas), event) }",
);
