/*  Requires: ColumnBrowser Method SmallKansas  */

sl.addType(
  false,
  "CategoryBrowser",
  "CategoryBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CategoryBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "CategoryBrowser",
);

sl.addMethodToExistingType(
  "CategoryBrowser",
  "CategoryBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_smallKansas, _CategoryBrowser_1(_smallKansas), _event);
  },
  "{ :self :smallKansas :event | addFrame(smallKansas,CategoryBrowser(smallKansas), event) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "CategoryBrowser",
  "CategoryBrowser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _typeNames = _indicesSorted_1(_typeDictionary_1(_system));
    let _typeCategoryDictionary = _domain_2(
      _categoryDictionary_1(_system),
      "type",
    );
    let _typeCategoryNames = _indicesSorted_1(_typeCategoryDictionary);
    let _methodCategoryDictionary = _domain_2(
      _categoryDictionary_1(_system),
      "method",
    );
    let _completeMethodSet = null;
    let _methodSet = null;
    let _selectedMethod = null;
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Category Browser",
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
            return _typeCategoryNames;
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
            return _sorted_1(
              _select_2(
                _at_2(_typeCategoryDictionary, _at_2(_path, 1)),
                function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _isTypeName_2(_system, _each);
                },
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
            _setStatus_2(
              _browser,
              _join_2(_typeTraits_2(_system, _at_2(_path, 2)), ", "),
            );
            _completeMethodSet = _select_2(
              _values_1(_typeMethodDictionary_2(_system, _at_2(_path, 2))),
              function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _tildeEqualsSign_2(_name_1(_origin_1(_each)), "Object");
              },
            );
            return _sort_1(
              _copyWithoutIdenticalElements_1(
                _collect_2(_completeMethodSet, function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _categoryOf_3(
                    _categoryDictionary_1(_system),
                    "method",
                    _name_1(_each),
                  );
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
            _setStatus_2(_browser, "");
            _methodSet = _select_2(_completeMethodSet, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(
                _categoryOf_3(
                  _categoryDictionary_1(_system),
                  "method",
                  _name_1(_each),
                ),
                _at_2(_path, 3),
              );
            });
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
            return 4;
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
              return _equalsSign_2(_qualifiedName_1(_each), _at_2(_path, 4));
            });
            _setStatus_2(_browser, _provenance_1(_selectedMethod));
            return _definition_1(_selectedMethod);
          }),
        ]);
      },
    );
  },
  "{ :self | let typeNames = indicesSorted(typeDictionary(system)); let typeCategoryDictionary = domain(categoryDictionary(system),'type'); let typeCategoryNames = indicesSorted(typeCategoryDictionary); let methodCategoryDictionary = domain(categoryDictionary(system),'method'); let completeMethodSet = nil; let methodSet = nil; let selectedMethod = nil; ColumnBrowser(self, 'Category Browser', 'text/plain', false, true, [1, 1, 1, 3], nil, { :accepted | definition(selectedMethod, accepted) }, { :browser :path | caseOf(size(path),[->({ 0 }, { setStatus(browser,''); typeCategoryNames }), ->({ 1 }, { setStatus(browser,''); sorted(select(at(typeCategoryDictionary, at(path, 1)), { :each | isTypeName(system,each) })) }), ->({ 2 }, { setStatus(browser,join(typeTraits(system,at(path, 2)),', ')); completeMethodSet := select(values(typeMethodDictionary(system,at(path, 2))), { :each | ~=(name(origin(each)), 'Object') }); sort(copyWithoutIdenticalElements(collect(completeMethodSet, { :each | categoryOf(categoryDictionary(system),'method', name(each)) }))) }), ->({ 3 }, { setStatus(browser,''); methodSet := select(completeMethodSet, { :each | =(categoryOf(categoryDictionary(system),'method', name(each)), at(path, 3)) }); sorted(asList(collect(methodSet,qualifiedName:/1))) }), ->({ 4 }, { selectedMethod := detect(methodSet, { :each | =(qualifiedName(each), at(path, 4)) }); setStatus(browser,provenance(selectedMethod)); definition(selectedMethod) })]) }) }",
);
