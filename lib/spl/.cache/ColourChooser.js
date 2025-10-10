/*  Requires: RgbColour SmallKansas  */

sl.addType(
  false,
  "ColourChooser",
  "ColourChooser",
  ["Object", "View"],
  ["colourChooserPane", "colourInput"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ColourChooser",
);

sl.copyTraitMethodsToType(
  "View",
  "ColourChooser",
);

sl.addMethodToExistingType(
  "ColourChooser",
  "ColourChooser",
  "hexTriplet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _getAttribute_2(_colourInput_1(_self), "value");
  }, ["self"]),
  "{ :self |\n\t\tself.colourInput.getAttribute('value')\n\t}",
);

sl.addMethodToExistingType(
  "ColourChooser",
  "ColourChooser",
  "initialize",
  ["self", "initialColour", "onSelect:/1"],
  sl.annotateFunction(function (_self, _initialColour, _onSelect_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _initialColour, _onSelect_1";
      throw new Error(errorMessage);
    } /* Statements */
    _colourChooserPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "colourChooser"]])),
    );
    _colourInput_2(
      _self,
      _createElement_2(
        "input",
        _Record_1([["class", "colourInput"], ["type", "color"], [
          "value",
          _hexTriplet_1(_initialColour),
        ]]),
      ),
    );
    _appendChild_2(_colourChooserPane_1(_self), _colourInput_1(_self));
    _addEventListener_3(
      _colourInput_1(_self),
      "input",
      sl.annotateFunction(function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        } /* Statements */
        return _onSelect_1(_parseHexColour_1(_value_1(_target_1(_event))));
      }, ["event"]),
    );
    return _self;
  }, ["self", "initialColour", "onSelect:/1"]),
  "{ :self :initialColour :onSelect:/1 |\n\t\tself.colourChooserPane := 'div'.createElement(\n\t\t\tclass: 'colourChooser'\n\t\t);\n\t\tself.colourInput := 'input'.createElement(\n\t\t\tclass: 'colourInput',\n\t\t\ttype: 'color',\n\t\t\tvalue: initialColour.hexTriplet\n\t\t);\n\t\tself.colourChooserPane.appendChild(self.colourInput);\n\t\tself.colourInput.addEventListener('input') { :event |\n\t\t\tonSelect(event.target.value.parseHexColour)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "ColourChooser",
  "ColourChooser",
  "outerElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _colourChooserPane_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.colourChooserPane\n\t}",
);

sl.addMethodToExistingType(
  "ColourChooser",
  "ColourChooser",
  "title",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "Colour Chooser";
  }, ["self"]),
  "{ :self |\n\t\t'Colour Chooser'\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "RgbColour",
  "ColourChooser",
  "ColourChooser",
  ["self", "onSelect:/1"],
  sl.annotateFunction(function (_self, _onSelect_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSelect_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newColourChooser_0(), _self, _onSelect_1);
  }, ["self", "onSelect:/1"]),
  "{ :self :onSelect:/1 |\n\t\tnewColourChooser().initialize(self, onSelect:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ColourChooser",
  "ColourChooser",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ColourChooser_2(_RgbColour_2([0.5, 0.5, 0.5], 0.5), _self);
  }, ["self"]),
  "{ :self |\n\t\tRgbColour([0.5, 0.5, 0.5], 0.5).ColourChooser(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "ColourChooser",
  "colourChooserOn",
  ["self", "subject", "event"],
  sl.annotateFunction(function (_self, _subject, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subject, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(
      _self,
      _ColourChooser_1(sl.annotateFunction(function (_aColour) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aColour";
          throw new Error(errorMessage);
        } /* Statements */
        return _colour_2(_subject, _aColour);
      }, ["aColour"])),
      _event,
    );
  }, ["self", "subject", "event"]),
  "{ :self :subject :event |\n\t\tself.addFrame(\n\t\t\tColourChooser(\n\t\t\t\t{ :aColour |\n\t\t\t\t\tsubject.colour(aColour)\n\t\t\t\t}\n\t\t\t),\n\t\t\tevent\n\t\t)\n\t}",
);

sl.addType(
  false,
  "BackgroundColourChooser",
  "ColourChooser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "BackgroundColourChooser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "BackgroundColourChooser",
);

sl.addMethodToExistingType(
  "BackgroundColourChooser",
  "ColourChooser",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _colourChooserOn_3(_smallKansas, _smallKansas, _event);
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tsmallKansas.colourChooserOn(smallKansas, event)\n\t}",
);
