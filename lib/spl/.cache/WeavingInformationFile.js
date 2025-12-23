sl.addType(
  false,
  "WeavingInformationFile",
  "WeavingInformationFile",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "WeavingInformationFile",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "drawdownMatrix",
  ["self", "m", "n"],
  sl.annotateFunction(function (_self, _m, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _hasLiftplan_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _dot_2(
          _take_2(_liftplanMatrix_1(_self), _m),
          _collect_2(
            _threadingMatrix_1(_self),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _take_2(_each, _n);
            }, ["each"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _drawdownMatrix_3(
          _collect_2(
            _threadingMatrix_1(_self),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _take_2(_each, _n);
            }, ["each"]),
          ),
          _tieupMatrix_1(_self),
          _take_2(_treadlingMatrix_1(_self), _m),
        );
      }, []),
    );
  }, ["self", "m", "n"]),
  "{ :self :m :n |\n\t\tself.hasLiftplan.if {\n\t\t\tself.liftplanMatrix.take(m).dot(\n\t\t\t\tself.threadingMatrix.collect { :each |\n\t\t\t\t\teach.take(n)\n\t\t\t\t}\n\t\t\t)\n\t\t} {\n\t\t\tdrawdownMatrix(\n\t\t\t\tself.threadingMatrix.collect { :each |\n\t\t\t\t\teach.take(n)\n\t\t\t\t},\n\t\t\t\tself.tieupMatrix,\n\t\t\t\tself.treadlingMatrix.take(m)\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "drawdownMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _hasLiftplan_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _dot_2(_liftplanMatrix_1(_self), _threadingMatrix_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _drawdownMatrix_3(
          _threadingMatrix_1(_self),
          _tieupMatrix_1(_self),
          _treadlingMatrix_1(_self),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.hasLiftplan.if {\n\t\t\tself.liftplanMatrix.dot(\n\t\t\t\tself.threadingMatrix\n\t\t\t)\n\t\t} {\n\t\t\tdrawdownMatrix(\n\t\t\t\tself.threadingMatrix,\n\t\t\t\tself.tieupMatrix,\n\t\t\t\tself.treadlingMatrix\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "hasLiftplan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasSection_2(_self, "LIFTPLAN");
  }, ["self"]),
  "{ :self |\n\t\tself.hasSection('LIFTPLAN')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "hasSection",
  ["self", "sectionName"],
  sl.annotateFunction(function (_self, _sectionName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sectionName";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keys_1(_contents_1(_self)), _sectionName);
  }, ["self", "sectionName"]),
  "{ :self :sectionName |\n\t\tself.contents.keys.includes(sectionName)\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "liftplanMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _hasLiftplan_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _liftplanRecord_1(_self);
        let _m = _size_1(_r);
        let _n = _shafts_1(_self);
        /* Statements */
        return _weavingInformationFileRecordToMatrix_3(_r, _m, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _liftplanMatrix_2(
          _tieupMatrix_1(_self),
          _treadlingMatrix_1(_self),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.hasLiftplan.if {\n\t\t\tlet r = self.liftplanRecord;\n\t\t\tlet m = r.size;\n\t\t\tlet n = self.shafts;\n\t\t\tr.weavingInformationFileRecordToMatrix(m, n)\n\t\t} {\n\t\t\tliftplanMatrix(\n\t\t\t\tself.tieupMatrix,\n\t\t\t\tself.treadlingMatrix\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "liftplanRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "LIFTPLAN");
  }, ["self"]),
  "{ :self |\n\t\tself.contents.at('LIFTPLAN')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "shafts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_weaving_1(_self), "Shafts");
  }, ["self"]),
  "{ :self |\n\t\tself.weaving.at('Shafts')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "threadingMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _threadingRecord_1(_self);
    let _m = _size_1(_r);
    let _n = _shafts_1(_self);
    /* Statements */
    return _transpose_1(_weavingInformationFileRecordToMatrix_3(_r, _m, _n));
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.threadingRecord;\n\t\tlet m = r.size;\n\t\tlet n = self.shafts;\n\t\tr.weavingInformationFileRecordToMatrix(m, n).transpose\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "threadingRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "THREADING");
  }, ["self"]),
  "{ :self |\n\t\tself.contents.at('THREADING')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "tieupMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrixRotate_2(
      _weavingInformationFileRecordToMatrix_3(
        _tieupRecord_1(_self),
        _treadles_1(_self),
        _shafts_1(_self),
      ),
      1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.tieupRecord\n\t\t.weavingInformationFileRecordToMatrix(\n\t\t\tself.treadles,\n\t\t\tself.shafts\n\t\t).matrixRotate(1)\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "tieupRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "TIEUP");
  }, ["self"]),
  "{ :self |\n\t\tself.contents.at('TIEUP')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "treadles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_weaving_1(_self), "Treadles");
  }, ["self"]),
  "{ :self |\n\t\tself.weaving.at('Treadles')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "treadlingMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _treadlingRecord_1(_self);
    let _m = _size_1(_r);
    let _n = _treadles_1(_self);
    /* Statements */
    return _weavingInformationFileRecordToMatrix_3(_r, _m, _n);
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.treadlingRecord;\n\t\tlet m = r.size;\n\t\tlet n = self.treadles;\n\t\tr.weavingInformationFileRecordToMatrix(m, n)\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "treadlingRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "TREADLING");
  }, ["self"]),
  "{ :self |\n\t\tself.contents.at('TREADLING')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "warp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "WARP");
  }, ["self"]),
  "{ :self |\n\t\tself.contents.at('WARP')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "warpThreads",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_warp_1(_self), "Threads");
  }, ["self"]),
  "{ :self |\n\t\tself.warp.at('Threads')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "weaving",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "WEAVING");
  }, ["self"]),
  "{ :self |\n\t\tself.contents.at('WEAVING')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "weft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "WEFT");
  }, ["self"]),
  "{ :self |\n\t\tself.contents.at('WEFT')\n\t}",
);

sl.addMethodToExistingType(
  "WeavingInformationFile",
  "WeavingInformationFile",
  "weftThreads",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_weft_1(_self), "Threads");
  }, ["self"]),
  "{ :self |\n\t\tself.weft.at('Threads')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "WeavingInformationFile",
  "WeavingInformationFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newWeavingInformationFile_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewWeavingInformationFile().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "WeavingInformationFile",
  "WeavingInformationFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _WeavingInformationFile_1(_parseIni_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tWeavingInformationFile(self.parseIni)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "WeavingInformationFile",
  "parseWeavingInformationFileIntegerList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _reject_2(_splitBy_2(_self, ","), _isEmpty_1),
      _parseDecimalInteger_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.splitBy(',')\n\t\t.reject(isEmpty:/1)\n\t\t.collect(parseDecimalInteger:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "WeavingInformationFile",
  "parseWeavingInformationFileIntegerList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_self];
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t[]\n\t\t} {\n\t\t\t[self]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "WeavingInformationFile",
  "weavingInformationFileRecordToMatrix",
  ["self", "rowCount", "columnCount"],
  sl.annotateFunction(function (_self, _rowCount, _columnCount) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rowCount, _columnCount";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _collect_2(_keys_1(_self), _parseDecimalInteger_1);
    let _q = _collect_2(
      _values_1(_self),
      _parseWeavingInformationFileIntegerList_1,
    );
    let _matrix = _zeroMatrix_1([_rowCount, _columnCount]);
    /* Statements */
    _toDo_3(
      1,
      _size_1(_p),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _at_2(_p, _i);
        /* Statements */
        return _do_2(
          _at_2(_q, _i),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_at_2(_matrix, _r), _j, 1);
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _matrix;
  }, ["self", "rowCount", "columnCount"]),
  "{ :self :rowCount :columnCount |\n\t\tlet p = self.keys.collect(parseDecimalInteger:/1);\n\t\tlet q = self.values.collect(parseWeavingInformationFileIntegerList:/1);\n\t\tlet matrix = [rowCount, columnCount].zeroMatrix;\n\t\t1.toDo(p.size) { :i |\n\t\t\tlet r = p[i];\n\t\t\tq[i].do { :j |\n\t\t\t\tmatrix[r][j] := 1\n\t\t\t}\n\t\t};\n\t\tmatrix\n\t}",
);
