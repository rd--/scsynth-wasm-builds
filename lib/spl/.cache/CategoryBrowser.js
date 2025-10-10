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
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_smallKansas, _CategoryBrowser_1(_smallKansas), _event);
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(smallKansas.CategoryBrowser, event)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "CategoryBrowser",
  "CategoryBrowser",
  ["self"],
  sl.annotateFunction(function (_self) {
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
              return _typeCategoryNames;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            1,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _setStatus_2(_browser, "");
              return _sorted_1(
                _select_2(
                  _at_2(_typeCategoryDictionary, _at_2(_path, 1)),
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _isTypeName_2(_system, _each);
                  }, ["each"]),
                ),
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            2,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _setStatus_2(
                _browser,
                _commaSeparated_1(_typeTraits_2(_system, _at_2(_path, 2))),
              );
              _completeMethodSet = _select_2(
                _values_1(_typeMethodDictionary_2(_system, _at_2(_path, 2))),
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _exclamationMarkEqualsSign_2(
                    _name_1(_origin_1(_each)),
                    "Object",
                  );
                }, ["each"]),
              );
              return _sort_1(
                _copyWithoutIdenticalElements_1(
                  _collect_2(
                    _completeMethodSet,
                    sl.annotateFunction(function (_each) {
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
                    }, ["each"]),
                  ),
                ),
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            3,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _setStatus_2(_browser, "");
              _methodSet = _select_2(
                _completeMethodSet,
                sl.annotateFunction(function (_each) {
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
                }, ["each"]),
              );
              return _sorted_1(
                _asList_1(_collect_2(_methodSet, _qualifiedName_1)),
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            4,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _selectedMethod = _detect_2(
                _methodSet,
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(
                    _qualifiedName_1(_each),
                    _at_2(_path, 4),
                  );
                }, ["each"]),
              );
              _setStatus_2(_browser, _provenance_1(_selectedMethod));
              return _definition_1(_selectedMethod);
            }, []),
          ),
        ]);
      }, ["browser", "path"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet typeNames = system.typeDictionary.indicesSorted;\n\t\tlet typeCategoryDictionary = system.categoryDictionary.domain('type');\n\t\tlet typeCategoryNames = typeCategoryDictionary.indicesSorted;\n\t\tlet methodCategoryDictionary = system.categoryDictionary.domain('method');\n\t\tlet completeMethodSet = nil;\n\t\tlet methodSet = nil;\n\t\tlet selectedMethod = nil;\n\t\tself.ColumnBrowser('Category Browser', 'text/plain', false, true, [1, 1, 1, 3], nil) { :accepted |\n\t\t\tselectedMethod.definition := accepted\n\t\t} { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tbrowser.setStatus('');\n\t\t\t\t\ttypeCategoryNames\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tbrowser.setStatus('');\n\t\t\t\t\ttypeCategoryDictionary[path[1]].select { :each |\n\t\t\t\t\t\tsystem.isTypeName(each)\n\t\t\t\t\t}.sorted\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tbrowser.setStatus(system.typeTraits(path[2]).commaSeparated);\n\t\t\t\t\tcompleteMethodSet := system.typeMethodDictionary(path[2]).values.select { :each |\n\t\t\t\t\t\teach.origin.name != 'Object'\n\t\t\t\t\t};\n\t\t\t\t\tcompleteMethodSet.collect { :each |\n\t\t\t\t\t\tsystem.categoryDictionary.categoryOf('method', each.name)\n\t\t\t\t\t}.copyWithoutIdenticalElements.sort\n\t\t\t\t},\n\t\t\t\t3 -> {\n\t\t\t\t\tbrowser.setStatus('');\n\t\t\t\t\tmethodSet := completeMethodSet.select { :each |\n\t\t\t\t\t\tsystem.categoryDictionary.categoryOf('method', each.name) = path[3]\n\t\t\t\t\t};\n\t\t\t\t\tmethodSet.collect(qualifiedName:/1).asList.sorted\n\t\t\t\t},\n\t\t\t\t4 -> {\n\t\t\t\t\tselectedMethod := methodSet.detect { :each |\n\t\t\t\t\t\teach.qualifiedName = path[4]\n\t\t\t\t\t};\n\t\t\t\t\tbrowser.setStatus(selectedMethod.provenance);\n\t\t\t\t\tselectedMethod.definition\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);
