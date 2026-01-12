sl.extendTypeOrTraitWithMethod(
  "List",
  "NaturalColourSystem",
  "ncsToRgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    let Sn = _self[0];
    let Cn = _self[1];
    let C1 = _self[2];
    let N = _self[3];
    if (C1 !== "N") {
      const S = 1.05 * Sn - 5.25;
      const C = Cn;
      let Ra = null, Ba = null, Ga = null;
      if (C1 === "Y" && N <= 60) {
        Ra = 1;
      } else if ((C1 === "Y" && N > 60) || (C1 === "R" && N <= 80)) {
        const x = (C1 === "Y") ? N - 60 : N + 40;
        Ra = ((Math.sqrt(14884 - Math.pow(x, 2))) - 22) / 100;
      } else if ((C1 === "R" && N > 80) || (C1 === "B")) {
        Ra = 0;
      } else if (C1 === "G") {
        const x = N - 170;
        Ra = ((Math.sqrt(33800 - Math.pow(x, 2))) - 70) / 100;
      }
      if (C1 === "Y" && N <= 80) {
        Ba = 0;
      } else if ((C1 === "Y" && N > 80) || (C1 === "R" && N <= 60)) {
        const x = (C1 === "Y") ? (N - 80) + 20.5 : (N + 20) + 20.5;
        Ba = (104 - (Math.sqrt(11236 - Math.pow(x, 2)))) / 100;
      } else if ((C1 === "R" && N > 60) || (C1 === "B" && N <= 80)) {
        const x = (C1 === "R") ? (N - 60) - 60 : (N + 40) - 60;
        Ba = ((Math.sqrt(10000 - Math.pow(x, 2))) - 10) / 100;
      } else if ((C1 === "B" && N > 80) || (C1 === "G" && N <= 40)) {
        const x = (C1 === "B") ? (N - 80) - 131 : (N + 20) - 131;
        Ba = (122 - (Math.sqrt(19881 - Math.pow(x, 2)))) / 100;
      } else if (C1 === "G" && N > 40) {
        Ba = 0;
      }
      if (C1 === "Y") {
        Ga = (85 - 17 / 20 * N) / 100;
      } else if (C1 === "R" && N <= 60) {
        Ga = 0;
      } else if (C1 === "R" && N > 60) {
        const x = (N - 60) + 35;
        Ga = (67.5 - (Math.sqrt(5776 - Math.pow(x, 2)))) / 100;
      } else if (C1 === "B" && N <= 60) {
        const x = 1 * N - 68.5;
        Ga = (6.5 + (Math.sqrt(7044.5 - Math.pow(x, 2)))) / 100;
      } else if ((C1 === "B" && N > 60) || (C1 === "G" && N <= 60)) {
        Ga = 0.9;
      } else if (C1 === "G" && N > 60) {
        const x = N - 60;
        Ga = (90 - (1 / 8 * x)) / 100;
      }
      const x = (Ra + Ga + Ba) / 3;
      const Rc = ((x - Ra) * (100 - C) / 100) + Ra;
      const Gc = ((x - Ga) * (100 - C) / 100) + Ga;
      const Bc = ((x - Ba) * (100 - C) / 100) + Ba;
      const ss = 1 / Math.max(Rc, Gc, Bc);
      return [
        Rc * ss * (100 - S) / 100,
        Gc * ss * (100 - S) / 100,
        Bc * ss * (100 - S) / 100,
      ];
    } else {
      const v = 1 - (Sn / 100);
      return [v, v, v];
    }
  }, ["self"]),
  "{ :self |\n\t\t/* https://github.com/m90/ncs-color/ */\n\t\t<primitive:\n\t\tlet Sn = _self[0];\n\t\tlet Cn = _self[1];\n\t\tlet C1 = _self[2];\n\t\tlet N = _self[3];\n\t\tif (C1 !== 'N') {\n\t\t\tconst S = (1.05 * Sn - 5.25);\n\t\t\tconst C = Cn;\n\t\t\tlet Ra = null, Ba = null, Ga = null;\n\t\t\tif (C1 === 'Y' && N <= 60) {\n\t\t\t\tRa = 1\n\t\t\t} else if ((C1 === 'Y' && N > 60) || (C1 === 'R' && N <= 80)) {\n\t\t\t\tconst x = (C1 === 'Y') ? N - 60 : N + 40;\n\t\t\t\tRa = ((Math.sqrt(14884 - Math.pow(x, 2))) - 22) / 100;\n\t\t\t} else if ((C1 === 'R' && N > 80) || (C1 === 'B')) {\n\t\t\t\tRa = 0;\n\t\t\t} else if (C1 === 'G') {\n\t\t\t\tconst x = (N - 170);\n\t\t\t\tRa = ((Math.sqrt(33800 - Math.pow(x, 2))) - 70) / 100;\n\t\t\t}\n\t\t\tif (C1 === 'Y' && N <= 80) {\n\t\t\t\tBa = 0;\n\t\t\t} else if ((C1 === 'Y' && N > 80) || (C1 === 'R' && N <= 60)) {\n\t\t\t\tconst x = (C1 === 'Y') ? (N - 80) + 20.5 : (N + 20) + 20.5;\n\t\t\t\tBa = (104 - (Math.sqrt(11236 - Math.pow(x, 2)))) / 100;\n\t\t\t} else if ((C1 === 'R' && N > 60) || (C1 === 'B' && N <= 80)) {\n\t\t\t\tconst x = (C1 === 'R') ? (N - 60) - 60 : (N + 40) - 60;\n\t\t\t\tBa = ((Math.sqrt(10000 - Math.pow(x, 2))) - 10) / 100;\n\t\t\t} else if ((C1 === 'B' && N > 80) || (C1 === 'G' && N <= 40)) {\n\t\t\t\tconst x = (C1 === 'B') ? (N - 80) - 131 : (N + 20) - 131;\n\t\t\t\tBa = (122 - (Math.sqrt(19881 - Math.pow(x, 2)))) / 100;\n\t\t\t} else if (C1 === 'G' && N > 40) {\n\t\t\t\tBa = 0;\n\t\t\t}\n\t\t\tif (C1 === 'Y') {\n\t\t\t\tGa = (85 - 17 / 20 * N) / 100;\n\t\t\t} else if (C1 === 'R' && N <= 60) {\n\t\t\t\tGa = 0;\n\t\t\t} else if (C1 === 'R' && N > 60) {\n\t\t\t\tconst x = (N - 60) + 35;\n\t\t\t\tGa = (67.5 - (Math.sqrt(5776 - Math.pow(x, 2)))) / 100;\n\t\t\t} else if (C1 === 'B' && N <= 60) {\n\t\t\t\tconst x = (1 * N - 68.5);\n\t\t\t\tGa = (6.5 + (Math.sqrt(7044.5 - Math.pow(x, 2)))) / 100;\n\t\t\t} else if ((C1 === 'B' && N > 60) || (C1 === 'G' && N <= 60)) {\n\t\t\t\tGa = 0.9;\n\t\t\t} else if (C1 === 'G' && N > 60) {\n\t\t\t\tconst x = (N - 60);\n\t\t\t\tGa = (90 - (1 / 8 * x)) / 100;\n\t\t\t}\n\t\t\tconst x = (Ra + Ga + Ba) / 3;\n\t\t\tconst Rc = ((x - Ra) * (100 - C) / 100) + Ra;\n\t\t\tconst Gc = ((x - Ga) * (100 - C) / 100) + Ga;\n\t\t\tconst Bc = ((x - Ba) * (100 - C) / 100) + Ba;\n\t\t\tconst ss = 1 / Math.max(Rc, Gc, Bc);\n\t\t\treturn [\n\t\t\t\t(Rc * ss * (100 - S) / 100),\n\t\t\t\t(Gc * ss * (100 - S) / 100),\n\t\t\t\t(Bc * ss * (100 - S) / 100)\n\t\t\t]\n\t\t} else {\n\t\t\tconst v = 1 - (Sn / 100);\n\t\t\treturn [v, v, v];\n\t\t}\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NaturalColourSystem",
  "NcsColour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(_ncsToRgb_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tRgbColour(self.ncsToRgb, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "NaturalColourSystem",
  "NcsColour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _NcsColour_1(_parseNcs_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tNcsColour(self.parseNcs)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "NaturalColourSystem",
  "ncsLookup",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _beginsWith_2(_self, "NCS "),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asColour_1(
          _at_2(_ncsColourCatalogue_1(_system), _drop_2(_self, 4)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "ncsLookup");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.beginsWith('NCS ').if {\n\t\t\tsystem.ncsColourCatalogue.at(\n\t\t\t\tself.drop(4)\n\t\t\t).asColour\n\t\t} {\n\t\t\tself.error('ncsLookup')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "NaturalColourSystem",
  "parseNcs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const ncsRe =
      /^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|R|G|B|Y)(\d{2})?(R|G|B|Y)?$/;
    let ncs = _self.trim().toUpperCase().match(ncsRe);
    return [
      parseInt(ncs[1], 10),
      parseInt(ncs[2], 10),
      ncs[3],
      parseInt(ncs[4], 10) || 0,
      ncs[5],
    ];
  }, ["self"]),
  "{ :self |\n\t\t/* https://github.com/m90/ncs-color/ */\n\t\t<primitive:\n\t\tconst ncsRe = /^(?:NCS|NCS\\sS)\\s(\\d{2})(\\d{2})-(N|R|G|B|Y)(\\d{2})?(R|G|B|Y)?$/;\n\t\tlet ncs = _self.trim().toUpperCase().match(ncsRe);\n\t\treturn [\n\t\t\tparseInt(ncs[1], 10),\n\t\t\tparseInt(ncs[2], 10),\n\t\t\tncs[3],\n\t\t\tparseInt(ncs[4], 10) || 0,\n\t\t\tncs[5]\n\t\t];\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "NaturalColourSystem",
  "ncsColourCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "NcsColourCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'NcsColourCatalogue'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "NcsColourCatalogue"],
      ["category", "Graphics/Colour"],
      ["url", "https://rohandrape.net/sw/hsc3-data/data/colour/ncs.json"],
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
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _b = _parseBase16_1(_each);
              /* Statements */
              return _solidus_2(_contents_1(_b), 255);
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
