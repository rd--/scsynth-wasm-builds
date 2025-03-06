/*  Requires: Colour SmallKansas  */

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
  "{ :self | getAttribute(colourInput(self),'value') }",
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
  "{ :self :initialColour :onSelect:/1 | colourChooserPane(self, createElement('div', Record([['class', 'colourChooser']]))); colourInput(self, createElement('input', Record([['class', 'colourInput'], ['type', 'color'], ['value', hexTriplet(initialColour)]]))); appendChild(colourChooserPane(self),colourInput(self)); addEventListener(colourInput(self), 'input', { :event | onSelect(parseHexColour(value(target(event)))) }); self }",
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
  "{ :self | colourChooserPane(self) }",
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
  "{ :self | 'Colour Chooser' }",
);

sl.extendTypeOrTraitWithMethod(
  "Colour",
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
  "{ :self :onSelect:/1 | initialize(newColourChooser(),self, onSelect:/1) }",
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
    return _ColourChooser_2(_Colour_4(0.5, 0.5, 0.5, 0.5), _self);
  }, ["self"]),
  "{ :self | ColourChooser(Colour(0.5, 0.5, 0.5, 0.5),self) }",
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
  "{ :self :subject :event | addFrame(self,ColourChooser({ :aColour | colour(subject,aColour) }), event) }",
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
  "{ :self :smallKansas :event | colourChooserOn(smallKansas,smallKansas, event) }",
);
