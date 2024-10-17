sl.addMethod(
  "SmallKansas",
  "PackageIndexBrowser",
  "PackageIndexBrowser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
      function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(0, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(_browser, "");
            return _packageCategories;
          }),
          _hyphenMinusGreaterThanSign_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(_browser, "");
            return _sort_1(_selectThenCollect_3(_packages, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _equalsSign_2(_category_1(_each), _at_2(_path, 1));
            }, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _name_1(_each);
            }));
          }),
          _hyphenMinusGreaterThanSign_2(2, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Temporaries */
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
          }),
        ]);
      },
    );
  },
  "{ :self |\n\t\tlet packages = system.packageDictionary.values;\n\t\tlet packageCategories = packages.collect(category:/1).copyWithoutIdenticalElements.sort;\n\t\tself.ColumnBrowser('Package Index Browser', 'text/plain', false, true, [1, 3], nil, nil) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tbrowser.setStatus('');\n\t\t\t\t\tpackageCategories\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tbrowser.setStatus('');\n\t\t\t\t\tpackages.selectThenCollect { :each |\n\t\t\t\t\t\teach.category = path[1]\n\t\t\t\t\t} { :each |\n\t\t\t\t\t\teach.name\n\t\t\t\t\t}.sort\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tlet package = system.packageDictionary[path[2]];\n\t\t\t\t\tbrowser.setStatus('Loaded: ' ++ package.isLoaded.asString);\n\t\t\t\t\tpackage.text\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "PackageIndexBrowser",
  "PackageIndexBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "PackageIndexBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "PackageIndexBrowser",
);

sl.addMethod(
  "PackageIndexBrowser",
  "PackageIndexBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(
      _smallKansas,
      _PackageIndexBrowser_1(_smallKansas),
      _event,
    );
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(smallKansas.PackageIndexBrowser, event)\n\t}",
);
