/*  Requires: Menu SmallKansas  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "WorldMenu",
  "WorldMenu",
  ["self", "isTransient", "event"],
  sl.annotateFunction(function (_self, _isTransient, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _isTransient, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _menu_5(
      _self,
      "World Menu",
      _worldMenuEntries_1(_self),
      _isTransient,
      _event,
    );
  }, ["self", "isTransient", "event"]),
  "{ :self :isTransient :event | menu(self,'World Menu', worldMenuEntries(self), isTransient, event) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "WorldMenu",
  "worldMenuEntries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _static = [
      _MenuItem_3(
        "Font Menu",
        null,
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _fontMenuOn_4(_self, _self, false, _event);
        }, ["event"]),
      ),
      _MenuItem_3(
        "Font Size Menu",
        null,
        sl.annotateFunction(function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            throw new Error(errorMessage);
          } /* Statements */
          return _fontSizeMenuOn_4(_self, _self, false, _event);
        }, ["event"]),
      ),
    ];
    let _dynamic = _collect_2(
      _smallKansans_1(_system),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _MenuItem_3(
          _pascalCaseToWords_1(_name_1(_each)),
          null,
          sl.annotateFunction(function (_event) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _event";
              throw new Error(errorMessage);
            } /* Statements */
            return _openIn_3(_instanceOf_1(_each), _self, _event);
          }, ["event"]),
        );
      }, ["each"]),
    );
    /* Statements */
    return _sort_1(_plusSignPlusSign_2(_static, _dynamic));
  }, ["self"]),
  "{ :self | let static = [MenuItem('Font Menu', nil, { :event | fontMenuOn(self,self, false, event) }), MenuItem('Font Size Menu', nil, { :event | fontSizeMenuOn(self,self, false, event) })]; let dynamic = collect(smallKansans(system), { :each | MenuItem(pascalCaseToWords(name(each)), nil, { :event | openIn(instanceOf(each),self, event) }) }); sort((++(static, dynamic))) }",
);
