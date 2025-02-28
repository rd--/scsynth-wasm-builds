/*  Requires: ColumnBrowser SmallKansas TextEditor  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "HelpBrowser",
  "HelpBrowser",
  ["self", "helpIndex"],
  function (_self, _helpIndex) {
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
            return _kind_1(_helpIndex);
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
            return _names_2(_helpIndex, _at_2(_path, 1));
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
            return _fetch_2(_helpIndex, _path);
          }),
        ]);
      },
    );
  },
  "{ :self :helpIndex | ColumnBrowser(self,'Help Browser', 'text/markdown', false, false, [1, 3], nil, nil, { :browser :path | caseOf(size(path),[->({ 0 }, { kind(helpIndex) }), ->({ 1 }, { names(helpIndex,at(path, 1)) }), ->({ 2 }, { fetch(helpIndex,path) })]) }) }",
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
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "HelpIndex"),
      function (_helpIndex) {
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
      },
    );
  },
  "{ :self :smallKansas :event | then(requestLibraryItem(system,'HelpIndex'), { :helpIndex | addFrame(smallKansas,HelpBrowser(smallKansas,helpIndex), event) }) }",
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
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _helpFor_3(_smallKansas, "Small Kansas", _event);
  },
  "{ :self :smallKansas :event | helpFor(smallKansas,'Small Kansas', event) }",
);
