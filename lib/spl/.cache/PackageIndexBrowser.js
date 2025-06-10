/*  Requires: ColumnBrowser SmallKansas Trait  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "PackageIndexBrowser",
  "PackageIndexBrowser",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _packages = _values_1(_packageDictionary_1(_system));
    let _packageCategories = _sort_1(
      _copyWithoutIdenticalElements_1(_collect_2(_packages, _category_1)),
    );
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Package Index Browser",
      "text/plain",
      false,
      true,
      [1, 3],
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
            0,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _setStatus_2(_browser, "");
              return _packageCategories;
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
              return _sort_1(
                _selectThenCollect_3(
                  _packages,
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_category_1(_each), _at_2(_path, 1));
                  }, ["each"]),
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _name_1(_each);
                  }, ["each"]),
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
              } /* Temporaries */
              let _package = _at_2(
                _packageDictionary_1(_system),
                _at_2(_path, 2),
              );
              /* Statements */
              _setStatus_2(
                _browser,
                _plusSignPlusSign_2(
                  "Loaded: ",
                  _asString_1(_isLoaded_1(_package)),
                ),
              );
              return _text_1(_package);
            }, []),
          ),
        ]);
      }, ["browser", "path"]),
    );
  }, ["self"]),
  "{ :self | let packages = values(packageDictionary(system)); let packageCategories = sort(copyWithoutIdenticalElements(collect(packages,category:/1))); ColumnBrowser(self, 'Package Index Browser', 'text/plain', false, true, [1, 3], nil, nil, { :browser :path | caseOf(size(path),[->(0, { setStatus(browser,''); packageCategories }), ->(1, { setStatus(browser,''); sort(selectThenCollect(packages, { :each | =(category(each), at(path, 1)) }, { :each | name(each) })) }), ->({ 2 }, { let package = at(packageDictionary(system), at(path, 2)); setStatus(browser,++('Loaded: ', asString(isLoaded(package)))); text(package) })]) }) }",
);

sl.addType(
  false,
  "PackageIndexBrowser",
  "PackageIndexBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "PackageIndexBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "PackageIndexBrowser",
);

sl.addMethodToExistingType(
  "PackageIndexBrowser",
  "PackageIndexBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(
      _smallKansas,
      _PackageIndexBrowser_1(_smallKansas),
      _event,
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event | addFrame(smallKansas,PackageIndexBrowser(smallKansas), event) }",
);
