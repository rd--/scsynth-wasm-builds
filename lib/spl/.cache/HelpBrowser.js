/* {- Requires: ColumnBrowser LibraryItem SmallKansas TextEditor -} */

sl.addMethod(
  "SmallKansas",
  "HelpBrowser",
  "HelpBrowser",
  ["self", "helpIndex"],
  function (_self, _helpIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _helpIndex";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Help Browser",
      "text/markdown",
      false,
      false,
      [1, 1, 3],
      null,
      null,
      function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _caseOf_2(_size_1(_path), [
          _minusGreaterThan_2(0, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _areas_1(_helpIndex);
          }),
          _minusGreaterThan_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _kind_2(_helpIndex, _at_2(_path, 1));
          }),
          _minusGreaterThan_2(2, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _names_3(_helpIndex, _at_2(_path, 1), _at_2(_path, 2));
          }),
          _minusGreaterThan_2(3, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _fetch_2(_helpIndex, _path);
          }),
        ]);
      },
    );
  },
  "{ :self :helpIndex |\n\t\tself.ColumnBrowser(\n\t\t\t'Help Browser',\n\t\t\t'text/markdown',\n\t\t\tfalse,\n\t\t\tfalse,\n\t\t\t[1, 1, 3],\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t{ :browser :path |\n\t\t\t\tpath.size.caseOf([\n\t\t\t\t\t0 -> {\n\t\t\t\t\t\thelpIndex.areas\n\t\t\t\t\t},\n\t\t\t\t\t1 -> {\n\t\t\t\t\t\thelpIndex.kind(path[1])\n\t\t\t\t\t},\n\t\t\t\t\t2 -> {\n\t\t\t\t\t\thelpIndex.names(path[1], path[2])\n\t\t\t\t\t},\n\t\t\t\t\t3 -> {\n\t\t\t\t\t\thelpIndex.fetch(path)\n\t\t\t\t\t}\n\t\t\t\t])\n\t\t\t}\n\t\t)\n\t}",
);

sl.addType(
  false,
  "HelpBrowser",
  "HelpBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HelpBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "HelpBrowser",
);

sl.addMethod(
  "HelpBrowser",
  "HelpBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_helpIndex_1(_smallKansas), function (_helpIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _helpIndex";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _HelpBrowser_2(_smallKansas, _helpIndex),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.helpIndex.then { :helpIndex |\n\t\t\tsmallKansas.addFrame(smallKansas.HelpBrowser(helpIndex), event)\n\t\t}\n\t}",
);

sl.addType(
  false,
  "AboutSmallKansas",
  "HelpBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "AboutSmallKansas",
);

sl.copyTraitToType(
  "SmallKansan",
  "AboutSmallKansas",
);

sl.addMethod(
  "AboutSmallKansas",
  "HelpBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _helpFor_3(_smallKansas, "Small Kansas", _event);
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.helpFor('Small Kansas', event)\n\t}",
);
