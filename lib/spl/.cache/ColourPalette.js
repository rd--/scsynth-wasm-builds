sl.addType(
  false,
  "ColourPalette",
  "ColourPalette",
  ["Object", "Storeable"],
  ["colourList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ColourPalette",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "ColourPalette",
);

sl.addMethodToExistingType(
  "ColourPalette",
  "ColourPalette",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_colourList_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.colourList.at(index)\n\t}",
);

sl.addMethodToExistingType(
  "ColourPalette",
  "ColourPalette",
  "commercialAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_colourList_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.colourList.at(index)\n\t}",
);

sl.addMethodToExistingType(
  "ColourPalette",
  "ColourPalette",
  "asContinuousColourGradient",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asContinuousColourGradient_1(_colourList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.colourList.asContinuousColourGradient\n\t}",
);

sl.addMethodToExistingType(
  "ColourPalette",
  "ColourPalette",
  "asDiscreteColourGradient",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDiscreteColourGradient_1(_colourList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.colourList.asDiscreteColourGradient\n\t}",
);

sl.addMethodToExistingType(
  "ColourPalette",
  "ColourPalette",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _drawing_1(_asDiscreteColourGradient_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asDiscreteColourGradient.drawing\n\t}",
);

sl.addMethodToExistingType(
  "ColourPalette",
  "ColourPalette",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_colourList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.colourList.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ColourPalette",
  "namedColourPalette",
  ["collectionName", "paletteName"],
  sl.annotateFunction(function (_collectionName, _paletteName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _collectionName, _paletteName";
      throw new Error(errorMessage);
    } /* Statements */
    return _ColourPalette_1(
      _at_2(_at_2(_colourPalettes_1(_system), _collectionName), _paletteName),
    );
  }, ["collectionName", "paletteName"]),
  "{ :collectionName :paletteName |\n\t\tColourPalette(\n\t\t\tsystem\n\t\t\t.colourPalettes\n\t\t\t.at(collectionName)\n\t\t\t.at(paletteName)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ColourPalette",
  "namedColourPalette",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2(_self, "/"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_splitBy_2(_self, "/"), 2);
        let _collectionName = _at_2(__SplVar1, 1);
        let _paletteName = _at_2(__SplVar1, 2);
        /* Statements */
        return _namedColourPalette_2(_collectionName, _paletteName);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        /* Statements */
        _do_2(
          _colourPalettes_1(_system),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _keysAndValuesDo_2(
              _each,
              sl.annotateFunction(function (_key, _value) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _key, _value";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifTrue_2(
                  _equalsSign_2(_key, _self),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _add_2(_answer, _value);
                  }, []),
                );
              }, ["key", "value"]),
            );
          }, ["each"]),
        );
        return _caseOf_3(
          _size_1(_answer),
          [
            _hyphenMinusGreaterThanSign_2(
              0,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  "namedColourPalette: unknown colour palette",
                );
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              1,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ColourPalette_1(_at_2(_answer, 1));
              }, []),
            ),
          ],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "namedColourPalette: multiple matches");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.includes('/').if {\n\t\t\tlet [collectionName, paletteName] = self.splitBy('/');\n\t\t\tcollectionName.namedColourPalette(paletteName)\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tsystem.colourPalettes.do { :each |\n\t\t\t\teach.keysAndValuesDo { :key :value |\n\t\t\t\t\t(key = self).ifTrue {\n\t\t\t\t\t\tanswer.add(value)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer.size.caseOf([\n\t\t\t\t0 -> { self.error('namedColourPalette: unknown colour palette') },\n\t\t\t\t1 -> { ColourPalette(answer[1]) }\n\t\t\t]) {\n\t\t\t\tself.error('namedColourPalette: multiple matches')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourPalette",
  "ColourPalette",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newColourPalette_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewColourPalette().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ColourPalette",
  "colourPalettes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ColourPalettes");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'ColourPalettes'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "ColourPalettes"],
      ["category", "Graphics/Colour"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/colour/ColourPalettes.json",
      ],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _libraryItem,
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _collect_2(
                _i,
                sl.annotateFunction(function (_j) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _j";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _collect_2(
                    _j,
                    sl.annotateFunction(function (_k) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _k";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _solidus_2(_asList_1(_parseBase16_1(_k)), 255);
                    }, ["k"]),
                  );
                }, ["j"]),
              );
            }, ["i"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
