sl.addType(
  false,
  "CrystalLatticeStructure",
  "CrystalLatticeStructureBrowser",
  ["Object"],
  ["name", "description", "atoms", "bonds"],
);

sl.copyTraitToType(
  "Object",
  "CrystalLatticeStructure",
);

sl.addMethod(
  "CrystalLatticeStructure",
  "CrystalLatticeStructureBrowser",
  "drawing",
  ["self", "scale", "projection:/1"],
  function (_self, _scale, _projection_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _projection_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _drawing_3(_graph_1(_self), _scale, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _projection_1(_second_1(_each));
    });
  },
  "{ :self :scale :projection:/1 |\n\t\tself.graph.drawing(scale) { :each |\n\t\t\teach.second.projection\n\t\t}\n\t}",
);

sl.addMethod(
  "CrystalLatticeStructure",
  "CrystalLatticeStructureBrowser",
  "graph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Graph_4(
      _size_1(_atoms_1(_self)),
      _bonds_1(_self),
      _atoms_1(_self),
      null,
    );
  },
  "{ :self |\n\t\tGraph(self.atoms.size, self.bonds, self.atoms, nil)\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _container = _createElement_1("div");
    let _description = _createElement_1("p");
    let _projectionsA = _createElement_1("p");
    let _projectionsB = _createElement_1("p");
    let _scaledDrawing_1 = function (_projection_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _projection_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _drawing_3(_self, 0.25, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _times_2(_projection_1(_each), 50);
      });
    };
    /* Statements */
    _textContent_2(_description, _description_1(_self));
    _appendChildren_2(_projectionsA, [
      _scaledDrawing_1(_xy_1),
      _scaledDrawing_1(_yz_1),
      _scaledDrawing_1(_xz_1),
    ]);
    _appendChildren_2(_projectionsB, [
      _scaledDrawing_1(_block_1(_chinese_1(_Projection3_0()))),
      _scaledDrawing_1(_block_1(_isometric_1(_Projection3_0()))),
    ]);
    _appendChildren_2(_container, [_description, _projectionsA, _projectionsB]);
    return _container;
  },
  "{ :self |\n\t\tlet container = 'div'.createElement;\n\t\tlet description = 'p'.createElement;\n\t\tlet projectionsA = 'p'.createElement;\n\t\tlet projectionsB = 'p'.createElement;\n\t\tlet scaledDrawing = { :projection:/1 |\n\t\t\tself.drawing(0.25) { :each |\n\t\t\t\teach.projection * 50\n\t\t\t}\n\t\t};\n\t\tdescription.textContent := self.description;\n\t\tprojectionsA.appendChildren([\n\t\t\tscaledDrawing(xy:/1),\n\t\t\tscaledDrawing(yz:/1),\n\t\t\tscaledDrawing(xz:/1)\n\t\t]);\n\t\tprojectionsB.appendChildren([\n\t\t\tscaledDrawing(Projection3().chinese.block),\n\t\t\tscaledDrawing(Projection3().isometric.block)\n\t\t]);\n\t\tcontainer.appendChildren([\n\t\t\tdescription,\n\t\t\tprojectionsA,\n\t\t\tprojectionsB\n\t\t]);\n\t\tcontainer\n\t}",
);

sl.addMethod(
  "Record",
  "CrystalLatticeStructureBrowser",
  "CrystalLatticeStructure",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(
      _newCrystalLatticeStructure_0(),
      _at_2(_self, "name"),
      _at_2(_self, "description"),
      _withCollect_3(
        _at_2(_self, "vertexLabels"),
        _at_2(_self, "vertexCoordinates"),
        function (_label, _coordinate) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _label, _coordinate";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return [_label, _asCartesianCoordinate_1(_coordinate)];
        },
      ),
      _collect_2(_at_2(_self, "edges"), function (_edge) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _edge";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_edge, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _plus_2(_each, 1);
        });
      }),
    );
  },
  "{ :self |\n\t\tnewCrystalLatticeStructure().initializeSlots(\n\t\t\tself::name,\n\t\t\tself::description,\n\t\t\tself::vertexLabels.withCollect(self::vertexCoordinates) { :label :coordinate |\n\t\t\t\t[label, coordinate.asCartesianCoordinate]\n\t\t\t},\n\t\t\tself::edges.collect { :edge |\n\t\t\t\tedge.collect { :each |\n\t\t\t\t\teach + 1\n\t\t\t\t}\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "CrystalLatticeStructureBrowser",
  "clsLeitner",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _useLibraryItem_2(
      _self,
      _LibraryItem_4(
        "clsLeitner",
        "https://rohandrape.net/sw/hsc3-data/data/chemistry/json/cls.json",
        "application/json",
        function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _collect_2(_libraryItem, _CrystalLatticeStructure_1);
        },
      ),
    );
  },
  "{ :self |\n\t\tself.useLibraryItem(\n\t\t\tLibraryItem(\n\t\t\t\t'clsLeitner',\n\t\t\t\t'https://rohandrape.net/sw/hsc3-data/data/chemistry/json/cls.json',\n\t\t\t\t'application/json',\n\t\t\t\t{ :libraryItem |\n\t\t\t\t\tlibraryItem.collect(CrystalLatticeStructure:/1)\n\t\t\t\t}\n\t\t\t)\n\t\t)\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
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
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _caseOf_2(_size_1(_path), [
          _minusGreaterThan_2(0, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _collect_2(_structures, _name_1);
          }),
          _minusGreaterThan_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Temporaries */
            let _cls = _detect_2(_structures, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _equals_2(_name_1(_each), _at_2(_path, 1));
            });
            /* Statements */
            return _outerHTML_1(_summary_1(_cls));
          }),
        ]);
      },
    );
  },
  "{ :self :structures |\n\t\tself.ColumnBrowser('Crystal Lattice Structure Browser', 'text/html', false, false, [1], nil, nil) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tstructures.collect(name:/1)\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tlet cls = structures.detect { :each |\n\t\t\t\t\t\teach.name = path[1]\n\t\t\t\t\t};\n\t\t\t\t\tcls.summary.outerHTML\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_clsLeitner_1(_smallKansas), function (_clsLeitner) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _clsLeitner";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _CrystalLatticeStructureBrowser_2(_smallKansas, _clsLeitner),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.clsLeitner.then { :clsLeitner |\n\t\t\tsmallKansas.addFrame(\n\t\t\t\tsmallKansas.CrystalLatticeStructureBrowser(clsLeitner),\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
