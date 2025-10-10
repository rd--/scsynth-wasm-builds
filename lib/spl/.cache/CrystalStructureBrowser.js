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
  "{ :self :scale :projection:/1 |\n\t\tself.asGraph.asSvgElement(scale, projection:/1)\n\t}",
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
        let __SplVar1 = _assertIsOfSize_2(_each, 3);
        let _x = _at_2(__SplVar1, 1);
        let _y = _at_2(__SplVar1, 2);
        let _z = _at_2(__SplVar1, 3);
        /* Statements */
        return [_x, _y];
      }, ["each"])),
      _scaledDrawing_1(sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_each, 3);
        let _x = _at_2(__SplVar2, 1);
        let _y = _at_2(__SplVar2, 2);
        let _z = _at_2(__SplVar2, 3);
        /* Statements */
        return [_y, _z];
      }, ["each"])),
      _scaledDrawing_1(sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar3 = _assertIsOfSize_2(_each, 3);
        let _x = _at_2(__SplVar3, 1);
        let _y = _at_2(__SplVar3, 2);
        let _z = _at_2(__SplVar3, 3);
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
  "{ :self |\n\t\tlet container = 'div'.createElement;\n\t\tlet description = 'p'.createElement;\n\t\tlet projectionsA = 'p'.createElement;\n\t\tlet projectionsB = 'p'.createElement;\n\t\tlet scaledDrawing = { :projection |\n\t\t\tself.asSvgElement(12, projection.asUnaryBlock)\n\t\t};\n\t\tdescription.textContent := self.description;\n\t\tprojectionsA.appendChildren([\n\t\t\tscaledDrawing { :each | let [x, y, z] = each; [x y] },\n\t\t\tscaledDrawing { :each | let [x, y, z] = each; [y z] },\n\t\t\tscaledDrawing { :each | let [x, y, z] = each; [x z] }\n\t\t]);\n\t\tprojectionsB.appendChildren([\n\t\t\tscaledDrawing('CabinetOblique'.namedAxonometricProjection(1/6.pi)),\n\t\t\tscaledDrawing('Isometric'.namedAxonometricProjection)\n\t\t]);\n\t\tcontainer.appendChildren([\n\t\t\tdescription,\n\t\t\tprojectionsA,\n\t\t\tprojectionsB\n\t\t]);\n\t\tcontainer\n\t}",
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
  "{ :self :structures |\n\t\tself.ColumnBrowser(\n\t\t\t'Crystal Lattice Structure Browser',\n\t\t\t'text/html',\n\t\t\tfalse,\n\t\t\tfalse,\n\t\t\t[1],\n\t\t\tnil,\n\t\t\tnil\n\t\t) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tstructures.keys\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tlet cls = structures.detect { :each |\n\t\t\t\t\t\teach.name = path[1]\n\t\t\t\t\t};\n\t\t\t\t\tcls.summary.outerHtml\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
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
  "{ :self :smallKansas :event |\n\t\tsystem.requestLibraryItem(\n\t\t\t'LeitnerCrystalStructureCatalogue'\n\t\t).then { :leitnerCatalogue |\n\t\t\tsmallKansas.addFrame(\n\t\t\t\tsmallKansas.CrystalStructureBrowser(leitnerCatalogue),\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
