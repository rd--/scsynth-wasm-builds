sl.addType(
  false,
  "Table",
  "Table",
  ["Object", "Equatable"],
  ["contents", "columnLabels", "columnTypes"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "{ :self | let h = format('<tr><th></th>%</tr>',[stringCatenate(collect(columnLabels(self), { :each | format('<th scope=\"col\">%</th>',[asString(each)]) }))]); let r = withIndexCollect(contents(self), { :a :i | format('<tr><th scope=\"row\">%</th>%<tr>',[asString(i), stringCatenate(collect(a, { :b | format('<td>%</td>',[asString(b)]) }))]) }); format('<table class=\"TableData\">\\n%\\n%\\n</table>',[h, unlines(r)]) }",
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
  "{ :self :i :j | at(at(contents(self), i), columnIndex(self,j)) }",
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
  "{ :self :j | if(isString(j), { let i = indexOf(columnLabels(self),j); if((=(i, 0)), { error(self,'columnIndex: invalid column label') }, { i }) }, { if(isInteger(j), { j }, { error(self,'columnIndex: invalid column index') }) }) }",
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
  "{ :self :j | collect(j, { :each | columnIndex(self,each) }) }",
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
  "{ :self :j | let i = columnIndices(self,j); Table(columns(contents(self),i), atAll(columnLabels(self),i), atAll(columnTypes(self),i)) }",
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
  "{ :unused | 2 }",
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
  "{ :self :i | Table(rows(contents(self),i), columnLabels(self), columnTypes(self)) }",
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
  "{ :self | shape(contents(self)) }",
);

sl.addMethodToExistingType(
  "Table",
  "Table",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :self | let c = keys(self); let r = transpose(collect(c, { :each | at(self,each) })); Table(r, c) }",
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
  "{ :self :columnLabels :columnTypes | initializeSlots(newTable(),self, columnLabels, columnTypes) }",
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
  "{ :self :columnLabels | Table(self, columnLabels, collect(at(self, 1),typeOf:/1)) }",
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
          _collect_2(_asList_1(_upOrDownTo_2(1, _n)), _printString_1),
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
  "{ :self | if(isMatrix(self), { let n = size(anyOne(self)); Table(self, collect(asList(upOrDownTo(1, n)),printString:/1)) }, { if(allSatisfy(self,isDictionary:/1), { let c = keys(anyOne(self)); let r = collect(self, { :each | collect(c, { :k | at(each,k) }) }); Table(r, c) }, { error(self,'Table: invalid data') }) }) }",
);
