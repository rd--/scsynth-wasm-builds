sl.addType(
  false,
  "ColourGradient",
  "ColourGradient",
  ["Object", "Storeable"],
  ["colourList", "positionListOrNil"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ColourGradient",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "ColourGradient",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "asBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearInterpolator_2(_positionList_1(_self), _colourList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.positionList.linearInterpolator(\n\t\t\tself.colourList\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _w = 300;
    let _h = 50;
    let _pre = [
      "<svg",
      _format_2('	width="%" height="%"', [_w, _h]),
      _format_2('	viewBox="0 0 % %"', [_w, _h]),
      '	xmlns="http://www.w3.org/2000/svg"',
      '	xmlns:xlink="http://www.w3.org/1999/xlink"',
      ">",
      "<defs>",
      '	<linearGradient id="gradient">',
    ];
    let _stops = _map_3(
      sl.annotateFunction(function (_c, _p) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _c, _p";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('		<stop offset="%" stop-color="%" />', [
          _printStringToFixed_2(_p, 3),
          _rgbString_1(_asColour_1(_c)),
        ]);
      }, ["c", "p"]),
      _colourList_1(_self),
      _positionList_1(_self),
    );
    let _post = [
      "	</linearGradient>",
      "</defs>",
      _format_2('<rect width="%" height="%" fill="url(#gradient)" />', [
        _w,
        _h,
      ]),
      "</svg>",
    ];
    /* Statements */
    return _Svg_1(_unlines_1(_catenate_1([_pre, _stops, _post])));
  }, ["self"]),
  "{ :self |\n\t\tlet w = 300;\n\t\tlet h = 50;\n\t\tlet pre = [\n\t\t\t'<svg',\n\t\t\t'\twidth=\"%\" height=\"%\"'.format([w, h]),\n\t\t\t'\tviewBox=\"0 0 % %\"'.format([w, h]),\n\t\t\t'\txmlns=\"http://www.w3.org/2000/svg\"',\n\t\t\t'\txmlns:xlink=\"http://www.w3.org/1999/xlink\"',\n\t\t\t'>',\n\t\t\t'<defs>',\n\t\t\t'\t<linearGradient id=\"gradient\">'\n\t\t];\n\t\tlet stops = { :c :p |\n\t\t\t'\t\t<stop offset=\"%\" stop-color=\"%\" />'.format(\n\t\t\t\t[\n\t\t\t\t\tp.printStringToFixed(3),\n\t\t\t\t\tc.asColour.rgbString\n\t\t\t\t]\n\t\t\t)\n\t\t}.map(self.colourList, self.positionList);\n\t\tlet post = [\n\t\t\t'\t</linearGradient>',\n\t\t\t'</defs>',\n\t\t\t'<rect width=\"%\" height=\"%\" fill=\"url(#gradient)\" />'.format([w, h]),\n\t\t\t'</svg>'\n\t\t];\n\t\t[pre, stops, post].catenate.unlines.Svg\n\t}",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "isEquallySpaced",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isNil_1(_positionListOrNil_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _positionList_1(_self);
        /* Statements */
        return _isArithmeticProgression_3(
          _p,
          _hyphenMinus_2(_at_2(_p, 2), _at_2(_p, 1)),
          _tilde_2,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.positionListOrNil.isNil | {\n\t\t\tlet p = self.positionList;\n\t\t\tp.isArithmeticProgression(p[2] - p[1], ~)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "isValid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_shape_1(_colourList_1(_self)), 2);
    let _m = _at_2(__SplVar1, 1);
    let _n = _at_2(__SplVar1, 2);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_n, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifNil_3(
          _positionListOrNil_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return true;
          }, []),
          sl.annotateFunction(function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_size_1(_p), _m);
          }, ["p"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self.colourList.shape;\n\t\t(n = 3) & {\n\t\t\tself.positionListOrNil.ifNil {\n\t\t\t\ttrue\n\t\t\t} { :p |\n\t\t\t\tp.size = m\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "positionList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_2(
      _positionListOrNil_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _discretize_2(
          _hyphenMinusHyphenMinus_2(0, 1),
          _size_1(_colourList_1(_self)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.positionListOrNil.ifNil {\n\t\t\t(0 -- 1).discretize(self.colourList.size)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "resample",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _discretize_2(_hyphenMinusHyphenMinus_2(0, 1), _anInteger);
    /* Statements */
    return _ColourGradient_2(_collect_2(_p, _asBlock_1(_self)), null);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet p = (0 -- 1).discretize(anInteger);\n\t\tColourGradient(\n\t\t\tp.collect(self.asBlock),\n\t\t\tnil\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isValid_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_colourList_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "size: invalid");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isValid.if {\n\t\t\tself.colourList.size\n\t\t} {\n\t\t\tself.error('size: invalid')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGradient",
  "asColourGradient",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_self, 2);
    let _c = _at_2(__SplVar2, 1);
    let _p = _at_2(__SplVar2, 2);
    /* Statements */
    return _ColourGradient_2(_c, _p);
  }, ["self"]),
  "{ :self |\n\t\tlet [c, p] = self;\n\t\tColourGradient(c, p)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGradient",
  "asContinuousColourGradient",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ColourGradient_2(
      _self,
      _asList_1(_discretize_2(_hyphenMinusHyphenMinus_2(0, 1), _size_1(_self))),
    );
  }, ["self"]),
  "{ :self |\n\t\tColourGradient(\n\t\t\tself,\n\t\t\t(0 -- 1).discretize(self.size).asList\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGradient",
  "asDiscreteColourGradient",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = [];
    let _p = [];
    let _x = 0;
    let _z = _solidus_2(1, _size_1(_self));
    /* Statements */
    _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_c, _at_2(_self, _i));
        _add_2(_p, _x);
        _add_2(_c, _at_2(_self, _i));
        _add_2(_p, _min_2(_plusSign_2(_x, _z), 1));
        return _x = _plusSign_2(_x, _z);
      }, ["i"]),
    );
    return _ColourGradient_2(_c, _p);
  }, ["self"]),
  "{ :self |\n\t\tlet c = [];\n\t\tlet p = [];\n\t\tlet x = 0;\n\t\tlet z = 1 / self.size;\n\t\t1.toDo(self.size) { :i |\n\t\t\tc.add(self[i]);\n\t\t\tp.add(x);\n\t\t\tc.add(self[i]);\n\t\t\tp.add((x + z).min(1));\n\t\t\tx := x + z\n\t\t};\n\t\tColourGradient(c, p)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGradient",
  "ColourGradient",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newColourGradient_0(), _self, _aList);
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tnewColourGradient().initializeSlots(self, aList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ColourGradient",
  "namedColourGradient",
  ["collectionName", "paletteName"],
  sl.annotateFunction(function (_collectionName, _paletteName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _collectionName, _paletteName";
      throw new Error(errorMessage);
    } /* Statements */
    return _asColourGradient_1(
      _at_2(_at_2(_colourGradients_1(_system), _collectionName), _paletteName),
    );
  }, ["collectionName", "paletteName"]),
  "{ :collectionName :paletteName |\n\t\tsystem\n\t\t.colourGradients\n\t\t.at(collectionName)\n\t\t.at(paletteName)\n\t\t.asColourGradient\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ColourGradient",
  "namedColourGradient",
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
        let __SplVar3 = _assertIsOfSize_2(_splitBy_2(_self, "/"), 2);
        let _collectionName = _at_2(__SplVar3, 1);
        let _gradientName = _at_2(__SplVar3, 2);
        /* Statements */
        return _namedColourGradient_2(_collectionName, _gradientName);
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
          _colourGradients_1(_system),
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
                  "namedColourGradient: unknown colour gradient",
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
                return _asColourGradient_1(_at_2(_answer, 1));
              }, []),
            ),
          ],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "namedColourGradient: multiple matches");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.includes('/').if {\n\t\t\tlet [collectionName, gradientName] = self.splitBy('/');\n\t\t\tcollectionName.namedColourGradient(gradientName)\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tsystem.colourGradients.do { :each |\n\t\t\t\teach.keysAndValuesDo { :key :value |\n\t\t\t\t\t(key = self).ifTrue {\n\t\t\t\t\t\tanswer.add(value)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer.size.caseOf([\n\t\t\t\t0 -> { self.error('namedColourGradient: unknown colour gradient') },\n\t\t\t\t1 -> { answer[1].asColourGradient }\n\t\t\t]) {\n\t\t\t\tself.error('namedColourGradient: multiple matches')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ColourGradient",
  "parula",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _colourList_1(
      _resample_2(
        _asColourGradient_1(
          _at_3(_colourGradients_1(_system), "Mathworks", "Parula"),
        ),
        _self,
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem\n\t\t.colourGradients['Mathworks', 'Parula']\n\t\t.asColourGradient\n\t\t.resample(self)\n\t\t.colourList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ColourGradient",
  "colourGradients",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ColourGradients");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'ColourGradients'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "ColourGradients"],
      ["category", "Graphics/Colour"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/colour/ColourGradients.json",
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
                  return _if_3(
                    _isList_1(_j),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return [
                        _collect_2(
                          _j,
                          sl.annotateFunction(function (_k) {
                            /* ArityCheck */
                            if (arguments.length !== 1) {
                              const errorMessage = "Arity: expected 1, _k";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _solidus_2(
                              _asList_1(_parseBase16_1(_k)),
                              255,
                            );
                          }, ["k"]),
                        ),
                        null,
                      ];
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return [
                        _collect_2(
                          _at_2(_j, "c"),
                          sl.annotateFunction(function (_k) {
                            /* ArityCheck */
                            if (arguments.length !== 1) {
                              const errorMessage = "Arity: expected 1, _k";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _solidus_2(
                              _asList_1(_parseBase16_1(_k)),
                              255,
                            );
                          }, ["k"]),
                        ),
                        _at_2(_j, "p"),
                      ];
                    }, []),
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
