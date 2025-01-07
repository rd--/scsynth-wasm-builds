/*  Requires: CrystalLatticeStructure  */

sl.addMethod(
  "CrystalLatticeStructure",
  "CrystalLatticeStructureBrowser",
  "asSvgElement",
  ["self", "scale", "projection:/1"],
  function (_self, _scale, _projection_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _projection_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asSvgElement_3(_asGraph_1(_self), _scale, _projection_1);
  },
  "{ :self :scale :projection:/1 |\n\t\tself.asGraph.asSvgElement(scale, projection:/1)\n\t}",
);

sl.addMethod(
  "CrystalLatticeStructure",
  "CrystalLatticeStructureBrowser",
  "summary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _container = _createElement_1("div");
    let _description = _createElement_1("p");
    let _projectionsA = _createElement_1("p");
    let _projectionsB = _createElement_1("p");
    let _scaledDrawing_1 = function (_projection_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _projection_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _asSvgElement_3(_self, 12, _projection_1);
    };
    /* Statements */
    _textContent_2(_description, _description_1(_self));
    _appendChildren_2(_projectionsA, [
      _scaledDrawing_1(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym1 = _assertIsOfSize_2(_each, 3),
          _x = _at_2(__genSym1, 1),
          _y = _at_2(__genSym1, 2),
          _z = _at_2(__genSym1, 3);
        /* Statements */
        return [_x, _y];
      }),
      _scaledDrawing_1(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym2 = _assertIsOfSize_2(_each, 3),
          _x = _at_2(__genSym2, 1),
          _y = _at_2(__genSym2, 2),
          _z = _at_2(__genSym2, 3);
        /* Statements */
        return [_y, _z];
      }),
      _scaledDrawing_1(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym3 = _assertIsOfSize_2(_each, 3),
          _x = _at_2(__genSym3, 1),
          _y = _at_2(__genSym3, 2),
          _z = _at_2(__genSym3, 3);
        /* Statements */
        return [_x, _z];
      }),
    ]);
    _appendChildren_2(_projectionsB, [
      _scaledDrawing_1(_asBlock_1(_AxonometricProjection_1("Chinese"))),
      _scaledDrawing_1(_asBlock_1(_AxonometricProjection_1("Isometric"))),
    ]);
    _appendChildren_2(_container, [_description, _projectionsA, _projectionsB]);
    return _container;
  },
  "{ :self |\n\t\tlet container = 'div'.createElement;\n\t\tlet description = 'p'.createElement;\n\t\tlet projectionsA = 'p'.createElement;\n\t\tlet projectionsB = 'p'.createElement;\n\t\tlet scaledDrawing = { :projection:/1 |\n\t\t\tself.asSvgElement(12, projection:/1)\n\t\t};\n\t\tdescription.textContent := self.description;\n\t\tprojectionsA.appendChildren([\n\t\t\tscaledDrawing { :each | let [x, y, z] = each; [x y] },\n\t\t\tscaledDrawing { :each | let [x, y, z] = each; [y z] },\n\t\t\tscaledDrawing { :each | let [x, y, z] = each; [x z] }\n\t\t]);\n\t\tprojectionsB.appendChildren([\n\t\t\tscaledDrawing(AxonometricProjection('Chinese').asBlock),\n\t\t\tscaledDrawing(AxonometricProjection('Isometric').asBlock)\n\t\t]);\n\t\tcontainer.appendChildren([\n\t\t\tdescription,\n\t\t\tprojectionsA,\n\t\t\tprojectionsB\n\t\t]);\n\t\tcontainer\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "CrystalLatticeStructureBrowser",
  "CrystalLatticeStructureBrowser",
  ["self", "structures"],
  function (_self, _structures) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _structures";
      /* console.error(errorMessage); */
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
      function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(0, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _keys_1(_structures);
          }),
          _hyphenMinusGreaterThanSign_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Temporaries */
            let _cls = _detect_2(_structures, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_name_1(_each), _at_2(_path, 1));
            });
            /* Statements */
            return _outerHtml_1(_summary_1(_cls));
          }),
        ]);
      },
    );
  },
  "{ :self :structures |\n\t\tself.ColumnBrowser(\n\t\t\t'Crystal Lattice Structure Browser',\n\t\t\t'text/html',\n\t\t\tfalse,\n\t\t\tfalse,\n\t\t\t[1],\n\t\t\tnil,\n\t\t\tnil\n\t\t) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tstructures.keys\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tlet cls = structures.detect { :each |\n\t\t\t\t\t\teach.name = path[1]\n\t\t\t\t\t};\n\t\t\t\t\tcls.summary.outerHtml\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "CrystalLatticeStructureBrowser",
  "CrystalLatticeStructureBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "CrystalLatticeStructureBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "CrystalLatticeStructureBrowser",
);

sl.addMethod(
  "CrystalLatticeStructureBrowser",
  "CrystalLatticeStructureBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(
        _system,
        "Chemistry/CrystalLatticeStructure/LeitnerCatalogue",
      ),
      function (_leitnerCatalogue) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _leitnerCatalogue";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _addFrame_3(
          _smallKansas,
          _CrystalLatticeStructureBrowser_2(_smallKansas, _leitnerCatalogue),
          _event,
        );
      },
    );
  },
  "{ :self :smallKansas :event |\n\t\tsystem.requestLibraryItem(\n\t\t\t'Chemistry/CrystalLatticeStructure/LeitnerCatalogue'\n\t\t).then { :leitnerCatalogue |\n\t\t\tsmallKansas.addFrame(\n\t\t\t\tsmallKansas.CrystalLatticeStructureBrowser(leitnerCatalogue),\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
