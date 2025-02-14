/*  Requires: ColumnBrowser SmallKansas  */

sl.addMethod(
  "SmallKansas",
  "ScalaJiMetaBrowser",
  "ScalaJiMetaBrowser",
  ["self", "meta"],
  function (_self, _meta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _meta";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Scala Ji Meta Browser",
      "text/html",
      false,
      false,
      [1, 4],
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
            return _keys_1(_meta);
          }),
          _hyphenMinusGreaterThanSign_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_at_2(_meta, _at_2(_path, 1)), _description_1);
          }),
          _hyphenMinusGreaterThanSign_2(2, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _outerHtml_1(
              _htmlView_1(
                _detect_2(_at_2(_meta, _at_2(_path, 1)), function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_description_1(_each), _at_2(_path, 2));
                }),
              ),
            );
          }),
        ]);
      },
    );
  },
  "{ :self :meta |\n\t\tself.ColumnBrowser(\n\t\t\t'Scala Ji Meta Browser',\n\t\t\t'text/html',\n\t\t\tfalse, false, [1, 4], nil, nil\n\t\t) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tmeta.keys\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tmeta[path[1]].collect(description:/1)\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tmeta[path[1]].detect { :each |\n\t\t\t\t\t\teach.description = path[2]\n\t\t\t\t\t}.htmlView.outerHtml\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "ScalaJiMetaBrowser",
  "ScalaJiMetaBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ScalaJiMetaBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "ScalaJiMetaBrowser",
);

sl.addMethod(
  "ScalaJiMetaBrowser",
  "ScalaJiMetaBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _awaitLibraryItems_3(_system, [
      "ScalaTuningArchive",
      "ScalaTuningMetaArchive",
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _meta = _scalaTuningMetaArchive_1(_system);
      let _archive = _scalaRationalTuningArchive_1(_system);
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _ScalaJiMetaBrowser_2(
          _smallKansas,
          _collect_2(_meta, function (_author) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _author";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_author, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _at_2(_archive, _each);
            });
          }),
        ),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsystem.awaitLibraryItems([\n\t\t\t'ScalaTuningArchive',\n\t\t\t'ScalaTuningMetaArchive'\n\t\t]) {\n\t\t\tlet meta = system.scalaTuningMetaArchive;\n\t\t\tlet archive = system.scalaRationalTuningArchive;\n\t\t\tsmallKansas.addFrame(\n\t\t\t\tsmallKansas.ScalaJiMetaBrowser(\n\t\t\t\t\tmeta.collect { :author |\n\t\t\t\t\t\tauthor.collect { :each |\n\t\t\t\t\t\t\tarchive[each]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t),\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
