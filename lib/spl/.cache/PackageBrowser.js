/*  Requires: ColumnBrowser SmallKansas Trait  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "PackageBrowser",
  "PackageBrowser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _packages = _select_2(
      _values_1(_packageDictionary_1(_system)),
      _isLoaded_1,
    );
    let _packageCategories = _sort_1(
      _copyWithoutIdenticalElements_1(_collect_2(_packages, _category_1)),
    );
    let _methods = null;
    let _selectedMethod = null;
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Package Browser",
      "text/plain",
      false,
      true,
      [1, 1, 1, 3],
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
            return _packageCategories;
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
            _setStatus_2(_browser, "");
            return _sort_1(_selectThenCollect_3(_packages, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_category_1(_each), _at_2(_path, 1));
            }, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _name_1(_each);
            }));
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
            } /* Temporaries */
            let _traits = _packageTraits_2(_system, _at_2(_path, 2));
            let _types = _packageTypes_2(_system, _at_2(_path, 2));
            let _implements = _collect_2(
              _plusSignPlusSign_2(_traits, _types),
              _qualifiedName_1,
            );
            /* Statements */
            _setStatus_2(_browser, _join_2(_implements, ", "));
            _methods = _packageMethods_2(_system, _at_2(_path, 2));
            return _sort_1(
              _copyWithoutIdenticalElements_1(
                _collect_2(_methods, function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _qualifiedName_1(_origin_1(_each));
                }),
              ),
            );
          }),
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 3;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _if_3(_isTypeName_2(_system, _at_2(_path, 3)), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _setStatus_2(
                _browser,
                _join_2(_typeTraits_2(_system, _at_2(_path, 3)), ", "),
              );
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _setStatus_2(_browser, "");
            });
            return _sort_1(_selectThenCollect_3(_methods, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(
                _qualifiedName_1(_origin_1(_each)),
                _at_2(_path, 3),
              );
            }, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _qualifiedName_1(_each);
            }));
          }),
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 4;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _selectedMethod = _detect_2(_methods, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _ampersand_2(
                _equalsSign_2(
                  _qualifiedName_1(_origin_1(_each)),
                  _at_2(_path, 3),
                ),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(
                    _qualifiedName_1(_each),
                    _at_2(_path, 4),
                  );
                },
              );
            });
            _setStatus_2(_browser, _provenance_1(_selectedMethod));
            return _definition_1(_selectedMethod);
          }),
        ]);
      },
    );
  },
  "{ :self | let packages = select(values(packageDictionary(system)),isLoaded:/1); let packageCategories = sort(copyWithoutIdenticalElements(collect(packages,category:/1))); let methods = nil; let selectedMethod = nil; ColumnBrowser(self, 'Package Browser', 'text/plain', false, true, [1, 1, 1, 3], nil, { :accepted | definition(selectedMethod, accepted) }, { :browser :path | caseOf(size(path),[->({ 0 }, { setStatus(browser,''); packageCategories }), ->({ 1 }, { setStatus(browser,''); sort(selectThenCollect(packages, { :each | =(category(each), at(path, 1)) }, { :each | name(each) })) }), ->({ 2 }, { let traits = packageTraits(system,at(path, 2)); let types = packageTypes(system,at(path, 2)); let implements = collect((++(traits, types)),qualifiedName:/1); setStatus(browser,join(implements,', ')); methods := packageMethods(system,at(path, 2)); sort(copyWithoutIdenticalElements(collect(methods, { :each | qualifiedName(origin(each)) }))) }), ->({ 3 }, { if(isTypeName(system,at(path, 3)), { setStatus(browser,join(typeTraits(system,at(path, 3)),', ')) }, { setStatus(browser,'') }); sort(selectThenCollect(methods, { :each | =(qualifiedName(origin(each)), at(path, 3)) }, { :each | qualifiedName(each) })) }), ->({ 4 }, { selectedMethod := detect(methods, { :each | &(=(qualifiedName(origin(each)), at(path, 3)), { =(qualifiedName(each), at(path, 4)) }) }); setStatus(browser,provenance(selectedMethod)); definition(selectedMethod) })]) }) }",
);

sl.addType(
  false,
  "PackageBrowser",
  "PackageBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "PackageBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "PackageBrowser",
);

sl.addMethodToExistingType(
  "PackageBrowser",
  "PackageBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_smallKansas, _PackageBrowser_1(_smallKansas), _event);
  },
  "{ :self :smallKansas :event | addFrame(smallKansas,PackageBrowser(smallKansas), event) }",
);
