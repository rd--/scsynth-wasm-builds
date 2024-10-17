sl.addMethod(
  "SmallKansas",
  "WorldMenu",
  "WorldMenu",
  ["self", "isTransient", "event"],
  function (_self, _isTransient, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _isTransient, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _menu_5(
      _self,
      "World Menu",
      _worldMenuEntries_1(_self),
      _isTransient,
      _event,
    );
  },
  "{ :self :isTransient :event |\n\t\tself.menu('World Menu', self.worldMenuEntries, isTransient, event)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "WorldMenu",
  "worldMenuEntries",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _static = [
      _MenuItem_3("Font Menu", null, function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _fontMenuOn_4(_self, _self, false, _event);
      }),
      _MenuItem_3("Font Size Menu", null, function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _fontSizeMenuOn_4(_self, _self, false, _event);
      }),
    ];
    let _dynamic = _collect_2(_smallKansans_1(_system), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _MenuItem_3(
        _pascalCaseToWords_1(_name_1(_each)),
        null,
        function (_event) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _event";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _openIn_3(_instanceOf_1(_each), _self, _event);
        },
      );
    });
    /* Statements */
    return _sort_1(_plusSignPlusSign_2(_static, _dynamic));
  },
  "{ :self |\n\t\tlet static = [\n\t\t\tMenuItem('Font Menu', nil) { :event |\n\t\t\t\tself.fontMenuOn(self, false, event)\n\t\t\t},\n\t\t\tMenuItem('Font Size Menu', nil) { :event |\n\t\t\t\tself.fontSizeMenuOn(self, false, event)\n\t\t\t}\n\t\t];\n\t\tlet dynamic = system.smallKansans.collect { :each |\n\t\t\tMenuItem(each.name.pascalCaseToWords, nil) { :event |\n\t\t\t\teach.instanceOf.openIn(self, event)\n\t\t\t}\n\t\t};\n\t\t(static ++ dynamic).sort\n\t}",
);
