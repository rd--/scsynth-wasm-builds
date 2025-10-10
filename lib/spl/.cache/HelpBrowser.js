/*  Requires: ColumnBrowser SmallKansas TextEditor  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "HelpBrowser",
  "HelpBrowser",
  ["self", "helpIndex"],
  sl.annotateFunction(function (_self, _helpIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _helpIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Help Browser",
      "text/markdown",
      false,
      false,
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
              return _kind_1(_helpIndex);
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
              return _names_2(_helpIndex, _at_2(_path, 1));
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
              return _fetch_2(_helpIndex, _path);
            }, []),
          ),
        ]);
      }, ["browser", "path"]),
    );
  }, ["self", "helpIndex"]),
  "{ :self :helpIndex |\n\t\tself.ColumnBrowser(\n\t\t\t'Help Browser',\n\t\t\t'text/markdown',\n\t\t\tfalse,\n\t\t\tfalse,\n\t\t\t[1, 3],\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t{ :browser :path |\n\t\t\t\tpath.size.caseOf([\n\t\t\t\t\t0 -> {\n\t\t\t\t\t\thelpIndex.kind\n\t\t\t\t\t},\n\t\t\t\t\t1 -> {\n\t\t\t\t\t\thelpIndex.names(path[1])\n\t\t\t\t\t},\n\t\t\t\t\t2 -> {\n\t\t\t\t\t\thelpIndex.fetch(path)\n\t\t\t\t\t}\n\t\t\t\t])\n\t\t\t}\n\t\t)\n\t}",
);

sl.addType(
  false,
  "HelpBrowser",
  "HelpBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "HelpBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "HelpBrowser",
);

sl.addMethodToExistingType(
  "HelpBrowser",
  "HelpBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "HelpIndex"),
      sl.annotateFunction(function (_helpIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _helpIndex";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFrame_3(
          _smallKansas,
          _HelpBrowser_2(_smallKansas, _helpIndex),
          _event,
        );
      }, ["helpIndex"]),
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tsystem.requestLibraryItem(\n\t\t\t'HelpIndex'\n\t\t).then { :helpIndex |\n\t\t\tsmallKansas.addFrame(\n\t\t\t\tsmallKansas.HelpBrowser(helpIndex),\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);

sl.addType(
  false,
  "AboutSmallKansas",
  "HelpBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "AboutSmallKansas",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "AboutSmallKansas",
);

sl.addMethodToExistingType(
  "AboutSmallKansas",
  "HelpBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _helpFor_3(_smallKansas, "Small Kansas", _event);
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tsmallKansas.helpFor('Small Kansas', event)\n\t}",
);
