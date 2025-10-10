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
  "{ :self |\n\t\t[\n\t\t\tself.lowerLeft - [10 10],\n\t\t\tself.lowerLeft + [self.contents.size * 10, 20]\n\t\t]\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_lowerLeft_1(_self), 2);
    let _x = _at_2(__SplVar1, 1);
    let _y = _at_2(__SplVar1, 2);
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
  '{ :self :options |\n\t\tlet precision = options[\'precision\'];\n\t\tlet [x, y] = self.lowerLeft;\n\t\t[\n\t\t\t\'<g x="%" y="%" transform="translate(%, %) scale(1, -1)">\'.format([\n\t\t\t\tx.printStringToFixed(precision),\n\t\t\t\ty.printStringToFixed(precision),\n\t\t\t\tx.printStringToFixed(precision),\n\t\t\t\ty.printStringToFixed(precision)\n\t\t\t]),\n\t\t\t\'<text fill="black" stroke="none">%</text>\'.format([\n\t\t\t\tself.contents\n\t\t\t]),\n\t\t\t\'</g>\'\n\t\t]\n\t}',
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
  "{ :self :lowerLeft |\n\t\tnewWriting().initializeSlots(self, lowerLeft)\n\t}",
);
