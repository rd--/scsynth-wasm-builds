sl.addType(
  false,
  "Table",
  "Table",
  ["Object", "Storeable", "Equatable"],
  ["contents", "columnLabels", "columnTypes"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Table",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Table",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Table",
);

sl.addMethodToExistingType(
  "Table",
  "Table",
  "asHtml",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _h = _format_2("<tr><th></th>%</tr>", [
      _stringCatenate_1(
        _collect_2(
          _columnLabels_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _format_2('<th scope="col">%</th>', [_asString_1(_each)]);
          }, ["each"]),
        ),
      ),
    ]);
    let _r = _withIndexCollect_2(
      _contents_1(_self),
      sl.annotateFunction(function (_a, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('<tr><th scope="row">%</th>%<tr>', [
          _asString_1(_i),
          _stringCatenate_1(_collect_2(
            _a,
            sl.annotateFunction(function (_b) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _b";
                throw new Error(errorMessage);
              } /* Statements */
              return _format_2("<td>%</td>", [_asString_1(_b)]);
            }, ["b"]),
          )),
        ]);
      }, ["a", "i"]),
    );
    /* Statements */
    return _format_2('<table class="TableData">\n%\n%\n</table>', [
      _h,
      _unlines_1(_r),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet h = '<tr><th></th>%</tr>'.format([\n\t\t\tself.columnLabels.collect { :each |\n\t\t\t\t'<th scope=\"col\">%</th>'.format([each.asString])\n\t\t\t}.stringCatenate\n\t\t]);\n\t\tlet r = self.contents.withIndexCollect { :a :i |\n\t\t\t'<tr><th scope=\"row\">%</th>%<tr>'.format([\n\t\t\t\ti.asString,\n\t\t\t\ta.collect { :b |\n\t\t\t\t\t'<td>%</td>'.format([b.asString])\n\t\t\t\t}.stringCatenate\n\t\t\t])\n\t\t};\n\t\t'<table class=\"TableData\">\\n%\\n%\\n</table>'.format([h, r.unlines])\n\t}",
);

sl.addMethodToExistingType(
  "Table",
  "Table",
  "at",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_at_2(_contents_1(_self), _i), _columnIndex_2(_self, _j));
  }, ["self", "i", "j"]),
  "{ :self :i :j |\n\t\tself.contents[i][self.columnIndex(j)]\n\t}",
);

sl.addMethodToExistingType(
  "Table",
  "Table",
  "columnIndex",
  ["self", "j"],
  sl.annotateFunction(function (_self, _j) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _j";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isString_1(_j),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _indexOf_2(_columnLabels_1(_self), _j);
        /* Statements */
        return _if_3(
          _equalsSign_2(_i, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "columnIndex: invalid column label");
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isInteger_1(_j),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _j;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "columnIndex: invalid column index");
          }, []),
        );
      }, []),
    );
  }, ["self", "j"]),
  "{ :self :j |\n\t\tj.isString.if {\n\t\t\tlet i = self.columnLabels.indexOf(j);\n\t\t\t(i = 0).if {\n\t\t\t\tself.error('columnIndex: invalid column label')\n\t\t\t} {\n\t\t\t\ti\n\t\t\t}\n\t\t} {\n\t\t\tj.isInteger.if {\n\t\t\t\tj\n\t\t\t} {\n\t\t\t\tself.error('columnIndex: invalid column index')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Table",
  "Table",
  "columnIndices",
  ["self", "j"],
  sl.annotateFunction(function (_self, _j) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _j";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _j,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _columnIndex_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "j"]),
  "{ :self :j |\n\t\tj.collect { :each |\n\t\t\tself.columnIndex(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Table",
  "Table",
  "columns",
  ["self", "j"],
  sl.annotateFunction(function (_self, _j) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _columnIndices_2(_self, _j);
    /* Statements */
    return _Table_3(
      _columns_2(_contents_1(_self), _i),
      _atAll_2(_columnLabels_1(_self), _i),
      _atAll_2(_columnTypes_1(_self), _i),
    );
  }, ["self", "j"]),
  "{ :self :j |\n\t\tlet i = self.columnIndices(j);\n\t\tTable(\n\t\t\tself.contents.columns(i),\n\t\t\tself.columnLabels.atAll(i),\n\t\t\tself.columnTypes.atAll(i)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Table",
  "Table",
  "rank",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["unused"]),
  "{ :unused |\n\t\t2\n\t}",
);

sl.addMethodToExistingType(
  "Table",
  "Table",
  "rows",
  ["self", "i"],
  sl.annotateFunction(function (_self, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _i";
      throw new Error(errorMessage);
    } /* Statements */
    return _Table_3(
      _rows_2(_contents_1(_self), _i),
      _columnLabels_1(_self),
      _columnTypes_1(_self),
    );
  }, ["self", "i"]),
  "{ :self :i |\n\t\tTable(\n\t\t\tself.contents.rows(i),\n\t\t\tself.columnLabels,\n\t\t\tself.columnTypes\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Table",
  "Table",
  "shape",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shape_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.shape\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Table",
  "asTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _keys_1(_self);
    let _r = _transpose_1(_collect_2(
      _c,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _each);
      }, ["each"]),
    ));
    /* Statements */
    return _Table_2(_r, _c);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.keys;\n\t\tlet r = c.collect { :each |\n\t\t\tself.at(each)\n\t\t}.transpose;\n\t\tTable(r, c)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Table",
  "Table",
  ["self", "columnLabels", "columnTypes"],
  sl.annotateFunction(function (_self, _columnLabels, _columnTypes) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _columnLabels, _columnTypes";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newTable_0(),
      _self,
      _columnLabels,
      _columnTypes,
    );
  }, ["self", "columnLabels", "columnTypes"]),
  "{ :self :columnLabels :columnTypes |\n\t\tnewTable().initializeSlots(self, columnLabels, columnTypes)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Table",
  "Table",
  ["self", "columnLabels"],
  sl.annotateFunction(function (_self, _columnLabels) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _columnLabels";
      throw new Error(errorMessage);
    } /* Statements */
    return _Table_3(
      _self,
      _columnLabels,
      _collect_2(_at_2(_self, 1), _typeOf_1),
    );
  }, ["self", "columnLabels"]),
  "{ :self :columnLabels |\n\t\tTable(self, columnLabels, self[1].collect(typeOf:/1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Table",
  "Table",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _size_1(_anyOne_1(_self));
        /* Statements */
        return _Table_2(
          _self,
          _collect_2(_asList_1(_nonemptyRange_3(1, _n, 1)), _printString_1),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _allSatisfy_2(_self, _isDictionary_1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _c = _keys_1(_anyOne_1(_self));
            let _r = _collect_2(
              _self,
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _collect_2(
                  _c,
                  sl.annotateFunction(function (_k) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _k";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _at_2(_each, _k);
                  }, ["k"]),
                );
              }, ["each"]),
            );
            /* Statements */
            return _Table_2(_r, _c);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "Table: invalid data");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tlet n = self.anyOne.size;\n\t\t\tTable(self, [1 .. n].collect(printString:/1))\n\t\t} {\n\t\t\tself.allSatisfy(isDictionary:/1).if {\n\t\t\t\tlet c = self.anyOne.keys;\n\t\t\t\tlet r = self.collect { :each |\n\t\t\t\t\tc.collect { :k | each.at(k) }\n\t\t\t\t};\n\t\t\t\tTable(r, c)\n\t\t\t} {\n\t\t\t\tself.error('Table: invalid data')\n\t\t\t}\n\t\t}\n\t}",
);
