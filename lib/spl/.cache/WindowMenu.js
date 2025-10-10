/*  Requires: SmallKansas  */

sl.addType(
  false,
  "WindowMenu",
  "WindowMenu",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "WindowMenu",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "WindowMenu",
);

sl.addMethodToExistingType(
  "WindowMenu",
  "WindowMenu",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _currentWindowTitles_0 = sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _sort_1(
        _collect_2(
          _asList_1(_frameSet_1(_smallKansas)),
          sl.annotateFunction(function (_frame) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _frame";
              throw new Error(errorMessage);
            } /* Statements */
            return _MenuItem_3(
              _title_1(_frame),
              null,
              sl.annotateFunction(function (_unusedEvent) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _unusedEvent";
                  throw new Error(errorMessage);
                } /* Statements */
                return _bringToFront_1(_frame);
              }, ["unusedEvent"]),
            );
          }, ["frame"]),
        ),
      );
    }, []);
    let _menu = _Menu_2(_title_1(_self), _currentWindowTitles_0());
    /* Statements */
    return _addFrameWithAnimator_5(
      _smallKansas,
      _menu,
      _event,
      1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _setEntries_2(_menu, _currentWindowTitles_0());
      }, []),
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tlet currentWindowTitles = {\n\t\t\tsmallKansas.frameSet.asList.collect { :frame |\n\t\t\t\tMenuItem(frame.title, nil) { :unusedEvent |\n\t\t\t\t\tframe.bringToFront\n\t\t\t\t}\n\t\t\t}.sort\n\t\t};\n\t\tlet menu = Menu(self.title, currentWindowTitles());\n\t\tsmallKansas.addFrameWithAnimator(menu, event, 1) {\n\t\t\tmenu.setEntries(currentWindowTitles())\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "WindowMenu",
  "WindowMenu",
  "title",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "Window Menu";
  }, ["self"]),
  "{ :self |\n\t\t'Window Menu'\n\t}",
);
