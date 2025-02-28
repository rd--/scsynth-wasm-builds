/*  Requires: ColumnBrowser SmallKansas  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "ScalaJiMetaBrowser",
  "ScalaJiMetaBrowser",
  ["self", "meta"],
  function (_self, _meta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _meta";
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
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_size_1(_path), [
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
            return _keys_1(_meta);
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
            return _collect_2(_at_2(_meta, _at_2(_path, 1)), _description_1);
          }),
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _outerHtml_1(
              _htmlView_1(
                _detect_2(_at_2(_meta, _at_2(_path, 1)), function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
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
  "{ :self :meta | ColumnBrowser(self, 'Scala Ji Meta Browser', 'text/html', false, false, [1, 4], nil, nil, { :browser :path | caseOf(size(path),[->({ 0 }, { keys(meta) }), ->({ 1 }, { collect(at(meta, at(path, 1)),description:/1) }), ->({ 2 }, { outerHtml(htmlView(detect(at(meta, at(path, 1)), { :each | =(description(each), at(path, 2)) }))) })]) }) }",
);

sl.addType(
  false,
  "ScalaJiMetaBrowser",
  "ScalaJiMetaBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ScalaJiMetaBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "ScalaJiMetaBrowser",
);

sl.addMethodToExistingType(
  "ScalaJiMetaBrowser",
  "ScalaJiMetaBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _awaitLibraryItems_3(_system, [
      "ScalaTuningArchive",
      "ScalaTuningMetaArchive",
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_author, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
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
  "{ :self :smallKansas :event | awaitLibraryItems(system, ['ScalaTuningArchive', 'ScalaTuningMetaArchive'], { let meta = scalaTuningMetaArchive(system); let archive = scalaRationalTuningArchive(system); addFrame(smallKansas,ScalaJiMetaBrowser(smallKansas,collect(meta, { :author | collect(author, { :each | at(archive, each) }) })), event) }) }",
);
