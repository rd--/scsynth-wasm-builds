/* {- Requires: Colour SmallKansas -} */

sl.addType(
  false,
  "ColourChooser",
  "ColourChooser",
  ["Object", "View"],
  ["colourChooserPane", "colourInput"],
);

sl.copyTraitToType(
  "Object",
  "ColourChooser",
);

sl.copyTraitToType(
  "View",
  "ColourChooser",
);

sl.addMethod(
  "ColourChooser",
  "ColourChooser",
  "hexString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _getAttribute_2(_colourInput_1(_self), "value");
  },
  "{ :self |\n\t\tself.colourInput.getAttribute('value')\n\t}",
);

sl.addMethod(
  "ColourChooser",
  "ColourChooser",
  "initialize",
  ["self", "initialColour", "onSelect:/1"],
  function (_self, _initialColour, _onSelect_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _initialColour, _onSelect_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _colourChooserPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "colourChooser"]])),
    );
    _colourInput_2(
      _self,
      _createElement_2(
        "input",
        Object.fromEntries([["class", "colourInput"], ["type", "color"], [
          "value",
          _hexString_1(_initialColour),
        ]]),
      ),
    );
    _appendChild_2(_colourChooserPane_1(_self), _colourInput_1(_self));
    _addEventListener_3(_colourInput_1(_self), "input", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _onSelect_1(_parseHexColour_1(_value_1(_target_1(_event))));
    });
    return _self;
  },
  "{ :self :initialColour :onSelect:/1 |\n\t\tself.colourChooserPane := 'div'.createElement(\n\t\t\tclass: 'colourChooser'\n\t\t);\n\t\tself.colourInput := 'input'.createElement(\n\t\t\tclass: 'colourInput',\n\t\t\ttype: 'color',\n\t\t\tvalue: initialColour.hexString\n\t\t);\n\t\tself.colourChooserPane.appendChild(self.colourInput);\n\t\tself.colourInput.addEventListener('input') { :event |\n\t\t\tonSelect(event.target.value.parseHexColour)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethod(
  "ColourChooser",
  "ColourChooser",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _colourChooserPane_1(_self);
  },
  "{ :self |\n\t\tself.colourChooserPane\n\t}",
);

sl.addMethod(
  "ColourChooser",
  "ColourChooser",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return "Colour Chooser";
  },
  "{ :self |\n\t\t'Colour Chooser'\n\t}",
);

sl.addMethod(
  "Colour",
  "ColourChooser",
  "ColourChooser",
  ["self", "onSelect:/1"],
  function (_self, _onSelect_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSelect_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newColourChooser_0(), _self, _onSelect_1);
  },
  "{ :self :onSelect:/1 |\n\t\tnewColourChooser().initialize(self, onSelect:/1)\n\t}",
);

sl.addMethod(
  "Block",
  "ColourChooser",
  "ColourChooser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ColourChooser_2(_Colour_4(0.5, 0.5, 0.5, 0.5), _self);
  },
  "{ :self |\n\t\tColour(0.5, 0.5, 0.5, 0.5).ColourChooser(self)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "ColourChooser",
  "colourChooserOn",
  ["self", "subject", "event"],
  function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(
      _self,
      _ColourChooser_1(function (_aColour) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aColour";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _colour_2(_subject, _aColour);
      }),
      _event,
    );
  },
  "{ :self :subject :event |\n\t\tself.addFrame(ColourChooser({ :aColour |\n\t\t\tsubject.colour(aColour)\n\t\t}), event)\n\t}",
);

sl.addType(
  false,
  "BackgroundColourChooser",
  "ColourChooser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "BackgroundColourChooser",
);

sl.copyTraitToType(
  "SmallKansan",
  "BackgroundColourChooser",
);

sl.addMethod(
  "BackgroundColourChooser",
  "ColourChooser",
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
    return _colourChooserOn_3(_smallKansas, _smallKansas, _event);
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.colourChooserOn(smallKansas, event)\n\t}",
);
