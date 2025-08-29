sl.addType(
  false,
  "Writing",
  "Writing",
  ["Object", "Geometry"],
  ["contents", "lowerLeft"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Writing",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Writing",
);

sl.addMethodToExistingType(
  "Writing",
  "Writing",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_lowerLeft_1(_self), [10, 10]),
      _plusSign_2(_lowerLeft_1(_self), [
        _asterisk_2(_size_1(_contents_1(_self)), 10),
        20,
      ]),
    ];
  }, ["self"]),
  "{ :self | [-(lowerLeft(self), [10, 10]), +(lowerLeft(self), [*(size(contents(self)), 10), 20])] }",
);

sl.addMethodToExistingType(
  "Writing",
  "Writing",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __SPL378 = _assertIsOfSize_2(_lowerLeft_1(_self), 2);
    let _x = _at_2(__SPL378, 1);
    let _y = _at_2(__SPL378, 2);
    /* Statements */
    return [
      _format_2('<g x="%" y="%" transform="translate(%, %) scale(1, -1)">', [
        _printStringToFixed_2(_x, _precision),
        _printStringToFixed_2(_y, _precision),
        _printStringToFixed_2(_x, _precision),
        _printStringToFixed_2(_y, _precision),
      ]),
      _format_2('<text fill="black" stroke="none">%</text>', [
        _contents_1(_self),
      ]),
      "</g>",
    ];
  }, ["self", "options"]),
  '{ :self :options | let precision = at(options, \'precision\'); let __SPL378 = assertIsOfSize(lowerLeft(self), 2); let x = at(__SPL378, 1); let y = at(__SPL378, 2); [format(\'<g x="%" y="%" transform="translate(%, %) scale(1, -1)">\',[printStringToFixed(x,precision), printStringToFixed(y,precision), printStringToFixed(x,precision), printStringToFixed(y,precision)]), format(\'<text fill="black" stroke="none">%</text>\',[contents(self)]), \'</g>\'] }',
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Writing",
  "Writing",
  ["self", "lowerLeft"],
  sl.annotateFunction(function (_self, _lowerLeft) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _lowerLeft";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newWriting_0(), _self, _lowerLeft);
  }, ["self", "lowerLeft"]),
  "{ :self :lowerLeft | initializeSlots(newWriting(),self, lowerLeft) }",
);
