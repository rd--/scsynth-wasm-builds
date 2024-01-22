/* {- Requires: ColumnBrowser SmallKansas -} */

sl.addMethod(
  "SmallKansas",
  "ScalaJiMetaBrowser",
  "ScalaJiMetaBrowser",
  ["self", "jiMeta"],
  function (_self, _jiMeta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _jiMeta";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
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
            return _indices_1(_jiMeta);
          }),
          _minusGreaterThan_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _collect_2(_at_2(_jiMeta, _at_2(_path, 1)), _description_1);
          }),
          _minusGreaterThan_2(2, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _outerHTML_1(
              _htmlView_1(
                _detect_2(_at_2(_jiMeta, _at_2(_path, 1)), function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _equals_2(_description_1(_each), _at_2(_path, 2));
                }),
              ),
            );
          }),
        ]);
      },
    );
  },
  "{ :self :jiMeta |\n\t\tself.ColumnBrowser('Scala Ji Meta Browser', 'text/html', false, false, [1, 4], nil, nil) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tjiMeta.indices\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tjiMeta[path[1]].collect(description:/1)\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tjiMeta[path[1]].detect { :each |\n\t\t\t\t\t\teach.description = path[2]\n\t\t\t\t\t}.htmlView.outerHTML\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "ScalaJiMetaBrowser",
  "jiMeta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_jiScala_1(_self), function (_jiScala) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _jiScala";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _useLibraryItem_2(
        _self,
        _LibraryItem_4(
          "jiMeta",
          "https://rohandrape.net/sw/hmt/data/json/scala-meta-au.json",
          "application/json",
          function (_item) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _item";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _collect_2(_item, function (_anArray) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _anArray";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _select_2(
                _collect_2(_anArray, function (_aName) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _aName";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _at_2(_jiScala, _aName);
                }),
                _notNil_1,
              );
            });
          },
        ),
      );
    });
  },
  "{ :self |\n\t\tself.jiScala.then { :jiScala |\n\t\t\tself.useLibraryItem(\n\t\t\t\tLibraryItem(\n\t\t\t\t\t'jiMeta',\n\t\t\t\t\t'https://rohandrape.net/sw/hmt/data/json/scala-meta-au.json',\n\t\t\t\t\t'application/json',\n\t\t\t\t\t{ :item |\n\t\t\t\t\t\titem.collect { :anArray |\n\t\t\t\t\t\t\tanArray.collect { :aName |\n\t\t\t\t\t\t\t\tjiScala[aName]\n\t\t\t\t\t\t\t}.select(notNil:/1)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t)\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_jiMeta_1(_smallKansas), function (_jiMeta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _jiMeta";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _ScalaJiMetaBrowser_2(_smallKansas, _jiMeta),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.jiMeta.then { :jiMeta |\n\t\t\tsmallKansas.addFrame(smallKansas.ScalaJiMetaBrowser(jiMeta), event)\n\t\t}\n\t}",
);
