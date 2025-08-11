/*  Requires: CrystalStructure  */

sl.extendTypeOrTraitWithMethod(
  "CrystalStructure",
  "CrystalStructureBrowser",
  "asSvgElement",
  ["self", "scale", "projection:/1"],
  sl.annotateFunction(function (_self, _scale, _projection_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _projection_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSvgElement_3(_asGraph_1(_self), _scale, _projection_1);
  }, ["self", "scale", "projection:/1"]),
  "{ :self :scale :projection:/1 | asSvgElement(asGraph(self),scale, projection:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "CrystalStructure",
  "CrystalStructureBrowser",
  "summary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _container = _createElement_1("div");
    let _description = _createElement_1("p");
    let _projectionsA = _createElement_1("p");
    let _projectionsB = _createElement_1("p");
    let _scaledDrawing_1 = sl.annotateFunction(function (_projection) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _projection";
        throw new Error(errorMessage);
      } /* Statements */
      return _asSvgElement_3(_self, 12, _asUnaryBlock_1(_projection));
    }, ["projection"]);
    /* Statements */
    _textContent_2(_description, _description_1(_self));
    _appendChildren_2(_projectionsA, [
      _scaledDrawing_1(sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL455 = _assertIsOfSize_2(_each, 3);
        let _x = _at_2(__SPL455, 1);
        let _y = _at_2(__SPL455, 2);
        let _z = _at_2(__SPL455, 3);
        /* Statements */
        return [_x, _y];
      }, ["each"])),
      _scaledDrawing_1(sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL456 = _assertIsOfSize_2(_each, 3);
        let _x = _at_2(__SPL456, 1);
        let _y = _at_2(__SPL456, 2);
        let _z = _at_2(__SPL456, 3);
        /* Statements */
        return [_y, _z];
      }, ["each"])),
      _scaledDrawing_1(sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL457 = _assertIsOfSize_2(_each, 3);
        let _x = _at_2(__SPL457, 1);
        let _y = _at_2(__SPL457, 2);
        let _z = _at_2(__SPL457, 3);
        /* Statements */
        return [_x, _z];
      }, ["each"])),
    ]);
    _appendChildren_2(_projectionsB, [
      _scaledDrawing_1(
        _namedAxonometricProjection_2(
          "CabinetOblique",
          _pi_1(_Fraction_2(1n, 6n)),
        ),
      ),
      _scaledDrawing_1(_namedAxonometricProjection_1("Isometric")),
    ]);
    _appendChildren_2(_container, [_description, _projectionsA, _projectionsB]);
    return _container;
  }, ["self"]),
  "{ :self | let container = createElement('div'); let description = createElement('p'); let projectionsA = createElement('p'); let projectionsB = createElement('p'); let scaledDrawing = { :projection | asSvgElement(self,12, asUnaryBlock(projection)) }; textContent(description, description(self)); appendChildren(projectionsA,[scaledDrawing({ :each | let __SPL455 = assertIsOfSize(each, 3); let x = at(__SPL455, 1); let y = at(__SPL455, 2); let z = at(__SPL455, 3); [x, y] }), scaledDrawing({ :each | let __SPL456 = assertIsOfSize(each, 3); let x = at(__SPL456, 1); let y = at(__SPL456, 2); let z = at(__SPL456, 3); [y, z] }), scaledDrawing({ :each | let __SPL457 = assertIsOfSize(each, 3); let x = at(__SPL457, 1); let y = at(__SPL457, 2); let z = at(__SPL457, 3); [x, z] })]); appendChildren(projectionsB,[scaledDrawing(namedAxonometricProjection('CabinetOblique',pi(Fraction(1L, 6L)))), scaledDrawing(namedAxonometricProjection('Isometric'))]); appendChildren(container,[description, projectionsA, projectionsB]); container }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "CrystalStructureBrowser",
  "CrystalStructureBrowser",
  ["self", "structures"],
  sl.annotateFunction(function (_self, _structures) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _structures";
      throw new Error(errorMessage);
    } /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Crystal Lattice Structure Browser",
      "text/html",
      false,
      false,
      [1],
      null,
      null,
      sl.annotateFunction(function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(
            0,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _keys_1(_structures);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            1,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _cls = _detect_2(
                _structures,
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_name_1(_each), _at_2(_path, 1));
                }, ["each"]),
              );
              /* Statements */
              return _outerHtml_1(_summary_1(_cls));
            }, []),
          ),
        ]);
      }, ["browser", "path"]),
    );
  }, ["self", "structures"]),
  "{ :self :structures | ColumnBrowser(self, 'Crystal Lattice Structure Browser', 'text/html', false, false, [1], nil, nil, { :browser :path | caseOf(size(path),[->(0, { keys(structures) }), ->(1, { let cls = detect(structures, { :each | =(name(each), at(path, 1)) }); outerHtml(summary(cls)) })]) }) }",
);

sl.addType(
  false,
  "CrystalStructureBrowser",
  "CrystalStructureBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CrystalStructureBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "CrystalStructureBrowser",
);

sl.addMethodToExistingType(
  "CrystalStructureBrowser",
  "CrystalStructureBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "LeitnerCrystalStructureCatalogue"),
      sl.annotateFunction(function (_leitnerCatalogue) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _leitnerCatalogue";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFrame_3(
          _smallKansas,
          _CrystalStructureBrowser_2(_smallKansas, _leitnerCatalogue),
          _event,
        );
      }, ["leitnerCatalogue"]),
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event | then(requestLibraryItem(system,'LeitnerCrystalStructureCatalogue'), { :leitnerCatalogue | addFrame(smallKansas,CrystalStructureBrowser(smallKansas,leitnerCatalogue), event) }) }",
);
