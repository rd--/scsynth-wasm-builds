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
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _currentWindowTitles_0 = function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _sort_1(
        _collect_2(_asList_1(_frameSet_1(_smallKansas)), function (_frame) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _frame";
            throw new Error(errorMessage);
          } /* Statements */
          return _MenuItem_3(_title_1(_frame), null, function (_unusedEvent) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _unusedEvent";
              throw new Error(errorMessage);
            } /* Statements */
            return _bringToFront_1(_frame);
          });
        }),
      );
    };
    let _menu = _Menu_2(_title_1(_self), _currentWindowTitles_0());
    /* Statements */
    return _addFrameWithAnimator_5(_smallKansas, _menu, _event, 1, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _setEntries_2(_menu, _currentWindowTitles_0());
    });
  },
  "{ :self :smallKansas :event | let currentWindowTitles = { sort(collect(asList(frameSet(smallKansas)), { :frame | MenuItem(title(frame), nil, { :unusedEvent | bringToFront(frame) }) })) }; let menu = Menu(title(self), currentWindowTitles()); addFrameWithAnimator(smallKansas, menu, event, 1, { setEntries(menu,currentWindowTitles()) }) }",
);

sl.addMethodToExistingType(
  "WindowMenu",
  "WindowMenu",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "Window Menu";
  },
  "{ :self | 'Window Menu' }",
);
