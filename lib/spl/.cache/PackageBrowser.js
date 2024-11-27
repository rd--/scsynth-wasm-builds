/*  Requires: ColumnBrowser SmallKansas Trait  */

sl.addMethod(
  "SmallKansas",
  "PackageBrowser",
  "PackageBrowser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
          const errorMessage =
            "Arity: expected 1, _accepted"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _definition_2(_selectedMethod, _accepted);
      },
      function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage =
            "Arity: expected 2, _browser, _path"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(0, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(_browser, "");
            return _packageCategories;
          }),
          _hyphenMinusGreaterThanSign_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(_browser, "");
            return _sort_1(_selectThenCollect_3(_packages, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage =
                  "Arity: expected 1, _each"; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _equalsSign_2(_category_1(_each), _at_2(_path, 1));
            }, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage =
                  "Arity: expected 1, _each"; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _name_1(_each);
            }));
          }),
          _hyphenMinusGreaterThanSign_2(2, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Temporaries */
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
                    const errorMessage =
                      "Arity: expected 1, _each"; /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _qualifiedName_1(_origin_1(_each));
                }),
              ),
            );
          }),
          _hyphenMinusGreaterThanSign_2(3, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            _if_3(_isTypeName_2(_system, _at_2(_path, 3)), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _setStatus_2(
                _browser,
                _join_2(_typeTraits_2(_system, _at_2(_path, 3)), ", "),
              );
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _setStatus_2(_browser, "");
            });
            return _sort_1(_selectThenCollect_3(_methods, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage =
                  "Arity: expected 1, _each"; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _equalsSign_2(
                _qualifiedName_1(_origin_1(_each)),
                _at_2(_path, 3),
              );
            }, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage =
                  "Arity: expected 1, _each"; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _qualifiedName_1(_each);
            }));
          }),
          _hyphenMinusGreaterThanSign_2(4, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            _selectedMethod = _detect_2(_methods, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage =
                  "Arity: expected 1, _each"; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _ampersand_2(
                _equalsSign_2(
                  _qualifiedName_1(_origin_1(_each)),
                  _at_2(_path, 3),
                ),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage =
                      "Arity: expected 0, "; /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  }
                  /* Statements */
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
  "{ :self |\n\t\tlet packages = system.packageDictionary.values.select(isLoaded:/1);\n\t\tlet packageCategories = packages.collect(category:/1).copyWithoutIdenticalElements.sort;\n\t\tlet methods = nil;\n\t\tlet selectedMethod = nil;\n\t\tself.ColumnBrowser('Package Browser', 'text/plain', false, true, [1, 1, 1, 3], nil) { :accepted |\n\t\t\tselectedMethod.definition := accepted\n\t\t} { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tbrowser.setStatus('');\n\t\t\t\t\tpackageCategories\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tbrowser.setStatus('');\n\t\t\t\t\tpackages.selectThenCollect { :each |\n\t\t\t\t\t\teach.category = path[1]\n\t\t\t\t\t} { :each |\n\t\t\t\t\t\teach.name\n\t\t\t\t\t}.sort\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tlet traits = system.packageTraits(path[2]);\n\t\t\t\t\tlet types = system.packageTypes(path[2]);\n\t\t\t\t\tlet implements = (traits ++ types).collect(qualifiedName:/1);\n\t\t\t\t\tbrowser.setStatus(implements.join(', '));\n\t\t\t\t\tmethods := system.packageMethods(path[2]);\n\t\t\t\t\tmethods.collect { :each |\n\t\t\t\t\t\teach.origin.qualifiedName\n\t\t\t\t\t}.copyWithoutIdenticalElements.sort\n\t\t\t\t},\n\t\t\t\t3 -> {\n\t\t\t\t\tsystem.isTypeName(path[3]).if {\n\t\t\t\t\t\tbrowser.setStatus(system.typeTraits(path[3]).join(', '))\n\t\t\t\t\t} {\n\t\t\t\t\t\tbrowser.setStatus('')\n\t\t\t\t\t};\n\t\t\t\t\tmethods.selectThenCollect { :each |\n\t\t\t\t\t\teach.origin.qualifiedName = path[3]\n\t\t\t\t\t} { :each |\n\t\t\t\t\t\teach.qualifiedName\n\t\t\t\t\t}.sort\n\t\t\t\t},\n\t\t\t\t4 -> {\n\t\t\t\t\tselectedMethod := methods.detect { :each |\n\t\t\t\t\t\teach.origin.qualifiedName = path[3] & {\n\t\t\t\t\t\t\teach.qualifiedName = path[4]\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\tbrowser.setStatus(selectedMethod.provenance);\n\t\t\t\t\tselectedMethod.definition\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "PackageBrowser",
  "PackageBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "PackageBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "PackageBrowser",
);

sl.addMethod(
  "PackageBrowser",
  "PackageBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _smallKansas, _event"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(_smallKansas, _PackageBrowser_1(_smallKansas), _event);
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(smallKansas.PackageBrowser, event)\n\t}",
);
