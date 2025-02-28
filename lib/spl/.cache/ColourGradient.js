sl.addType(
  false,
  "ColourGradient",
  "ColourGradient",
  ["Object"],
  ["colourList", "positionListOrNil"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ColourGradient",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "asBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearInterpolator_2(_positionList_1(_self), _colourList_1(_self));
  },
  "{ :self | linearInterpolator(positionList(self),colourList(self)) }",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "asSvg",
  ["self"],
  function (_self) {
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
      function (_c, _p) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _c, _p";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('		<stop offset="%" stop-color="%" />', [
          _printStringToFixed_2(_p, 3),
          _rgbString_1(_asColour_1(_c)),
        ]);
      },
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
    return _Svg_1(_unlines_1(_concatenation_1([_pre, _stops, _post])));
  },
  "{ :self | let w = 300; let h = 50; let pre = ['<svg', format('\twidth=\"%\" height=\"%\"',[w, h]), format('\tviewBox=\"0 0 % %\"',[w, h]), '\txmlns=\"http://www.w3.org/2000/svg\"', '\txmlns:xlink=\"http://www.w3.org/1999/xlink\"', '>', '<defs>', '\t<linearGradient id=\"gradient\">']; let stops = map({ :c :p | format('\t\t<stop offset=\"%\" stop-color=\"%\" />',[printStringToFixed(p,3), rgbString(asColour(c))]) },colourList(self), positionList(self)); let post = ['\t</linearGradient>', '</defs>', format('<rect width=\"%\" height=\"%\" fill=\"url(#gradient)\" />',[w, h]), '</svg>']; Svg(unlines(concatenation([pre, stops, post]))) }",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _draw_1(_asSvg_1(_self));
  },
  "{ :self | draw(asSvg(self)) }",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "isEquallySpaced",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_isNil_1(_positionListOrNil_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _positionList_1(_self);
      /* Statements */
      return _isArithmeticSeriesBy_3(
        _p,
        _hyphenMinus_2(_at_2(_p, 2), _at_2(_p, 1)),
        _tilde_2,
      );
    });
  },
  "{ :self | |(isNil(positionListOrNil(self)), { let p = positionList(self); isArithmeticSeriesBy(p,-(at(p, 2), at(p, 1)), ~) }) }",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "isValid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL148 = _assertIsOfSize_2(_shape_1(_colourList_1(_self)), 2);
    let _m = _at_2(__SPL148, 1);
    let _n = _at_2(__SPL148, 2);
    /* Statements */
    return _ampersand_2(_equalsSign_2(_n, 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifNil_3(_positionListOrNil_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, function (_p) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _p";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_size_1(_p), _m);
      });
    });
  },
  "{ :self | let __SPL148 = assertIsOfSize(shape(colourList(self)), 2); let m = at(__SPL148, 1); let n = at(__SPL148, 2); &((=(n, 3)), { ifNil(positionListOrNil(self), { true }, { :p | =(size(p), m) }) }) }",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "positionList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_2(_positionListOrNil_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _discretize_2(
        _hyphenMinusHyphenMinus_2(0, 1),
        _size_1(_colourList_1(_self)),
      );
    });
  },
  "{ :self | ifNil(positionListOrNil(self), { discretize((--(0, 1)),size(colourList(self))) }) }",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "resample",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _discretize_2(_hyphenMinusHyphenMinus_2(0, 1), _anInteger);
    /* Statements */
    return _ColourGradient_2(_collect_2(_p, _asBlock_1(_self)), null);
  },
  "{ :self :anInteger | let p = discretize((--(0, 1)),anInteger); ColourGradient(collect(p,asBlock(self)), nil) }",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isValid_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _size_1(_colourList_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "size: invalid");
    });
  },
  "{ :self | if(isValid(self), { size(colourList(self)) }, { error(self,'size: invalid') }) }",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "ColourGradient",
  "ColourGradient",
  "writeSvg",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeSvg_2(_asSvg_1(_self), _fileName);
  },
  "{ :self :fileName | writeSvg(asSvg(self),fileName) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGradient",
  "asColourGradient",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL149 = _assertIsOfSize_2(_self, 2);
    let _c = _at_2(__SPL149, 1);
    let _p = _at_2(__SPL149, 2);
    /* Statements */
    return _ColourGradient_2(_c, _p);
  },
  "{ :self | let __SPL149 = assertIsOfSize(self, 2); let c = at(__SPL149, 1); let p = at(__SPL149, 2); ColourGradient(c, p) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGradient",
  "asContinuousColourGradient",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ColourGradient_2(
      _self,
      _asList_1(_discretize_2(_hyphenMinusHyphenMinus_2(0, 1), _size_1(_self))),
    );
  },
  "{ :self | ColourGradient(self, asList(discretize((--(0, 1)),size(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGradient",
  "asDiscreteColourGradient",
  ["self"],
  function (_self) {
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
    _toDo_3(1, _size_1(_self), function (_i) {
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
    });
    return _ColourGradient_2(_c, _p);
  },
  "{ :self | let c = []; let p = []; let x = 0; let z = /(1, size(self)); toDo(1, size(self), { :i | add(c,at(self, i)); add(p,x); add(c,at(self, i)); add(p,min((+(x, z)),1)); x := +(x, z) }); ColourGradient(c, p) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGradient",
  "ColourGradient",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newColourGradient_0(), _self, _aList);
  },
  "{ :self :aList | initializeSlots(newColourGradient(),self, aList) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ColourGradient",
  "namedColourGradient",
  ["collectionName", "paletteName"],
  function (_collectionName, _paletteName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _collectionName, _paletteName";
      throw new Error(errorMessage);
    } /* Statements */
    return _asColourGradient_1(
      _at_2(_at_2(_colourGradients_1(_system), _collectionName), _paletteName),
    );
  },
  "{ :collectionName :paletteName | asColourGradient(at(at(colourGradients(system),collectionName),paletteName)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ColourGradient",
  "namedColourGradient",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includes_2(_self, "/"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL150 = _assertIsOfSize_2(_splitBy_2(_self, "/"), 2);
      let _collectionName = _at_2(__SPL150, 1);
      let _gradientName = _at_2(__SPL150, 2);
      /* Statements */
      return _namedColourGradient_2(_collectionName, _gradientName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = [];
      /* Statements */
      _do_2(_colourGradients_1(_system), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _keysAndValuesDo_2(_each, function (_key, _value) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _key, _value";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(_equalsSign_2(_key, _self), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _value);
          });
        });
      });
      return _caseOfOtherwise_3(_size_1(_answer), [
        _hyphenMinusGreaterThanSign_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(
            _self,
            "namedColourGradient: unknown colour gradient",
          );
        }),
        _hyphenMinusGreaterThanSign_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asColourGradient_1(_at_2(_answer, 1));
        }),
      ], function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "namedColourGradient: multiple matches");
      });
    });
  },
  "{ :self | if(includes(self,'/'), { let __SPL150 = assertIsOfSize(splitBy(self,'/'), 2); let collectionName = at(__SPL150, 1); let gradientName = at(__SPL150, 2); namedColourGradient(collectionName,gradientName) }, { let answer = []; do(colourGradients(system), { :each | keysAndValuesDo(each, { :key :value | ifTrue((=(key, self)), { add(answer,value) }) }) }); caseOfOtherwise(size(answer), [->({ 0 }, { error(self,'namedColourGradient: unknown colour gradient') }), ->({ 1 }, { asColourGradient(at(answer, 1)) })], { error(self,'namedColourGradient: multiple matches') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ColourGradient",
  "parula",
  ["self"],
  function (_self) {
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
  },
  "{ :self | colourList(resample(asColourGradient(at(colourGradients(system), 'Mathworks', 'Parula')),self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ColourGradient",
  "colourGradients",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ColourGradients");
  },
  "{ :self | requireLibraryItem(self,'ColourGradients') }",
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
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_i, function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(_isList_1(_j), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return [
                _collect_2(_j, function (_k) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _k";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _solidus_2(_asList_1(_parseHexString_1(_k)), 255);
                }),
                null,
              ];
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return [
                _collect_2(_at_2(_j, "c"), function (_k) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _k";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _solidus_2(_asList_1(_parseHexString_1(_k)), 255);
                }),
                _at_2(_j, "p"),
              ];
            });
          });
        });
      }],
    ]),
  ),
);
