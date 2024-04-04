sl.addType(
  false,
  "ScProgramCollectionIndex",
  "ScProgramCollectionBrowser",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "ScProgramCollectionIndex",
);

sl.addMethod(
  "SmallKansas",
  "ScProgramCollectionBrowser",
  "ScProgramCollectionBrowser",
  ["self", "index", "path"],
  function (_self, _index, _path) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _path";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _setPath_2(
      _ColumnBrowser_9(
        _self,
        "Sc Program Collection Browser",
        "text/plain",
        false,
        false,
        [1, 3],
        null,
        null,
        function (_browser, _path) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _browser, _path";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _caseOf_2(_size_1(_path), [
            _hyphenMinusGreaterThanSign_2(0, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _categories_1(_index);
            }),
            _hyphenMinusGreaterThanSign_2(1, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _authors_2(_index, _at_2(_path, 1));
            }),
            _hyphenMinusGreaterThanSign_2(2, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _names_3(_index, _at_2(_path, 1), _at_2(_path, 2));
            }),
            _hyphenMinusGreaterThanSign_2(3, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Temporaries */
              let __genSym42 = _assertIsOfSize_2(
                  _commercialAtAsterisk_2(_path, [1, 2, 3]),
                  3,
                ),
                _category = _at_2(__genSym42, 1),
                _author = _at_2(__genSym42, 2),
                _name = _at_2(__genSym42, 3);
              let _url = _join_1([
                "./lib/spl/help/",
                _category,
                "/",
                _author,
                " - ",
                _name,
                ".sl",
              ]);
              /* Statements */
              return _fetchTextWithDefault_2(_url, "*Fetch failed*");
            }),
          ]);
        },
      ),
      _path,
    );
  },
  "{ :self :index :path |\n\t\tself.ColumnBrowser(\n\t\t\t'Sc Program Collection Browser',\n\t\t\t'text/plain',\n\t\t\tfalse,\n\t\t\tfalse,\n\t\t\t[1, 3],\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t{ :browser :path |\n\t\t\t\tpath.size.caseOf([\n\t\t\t\t\t0 -> {\n\t\t\t\t\t\tindex.categories\n\t\t\t\t\t},\n\t\t\t\t\t1 -> {\n\t\t\t\t\t\tindex.authors(path[1])\n\t\t\t\t\t},\n\t\t\t\t\t2 -> {\n\t\t\t\t\t\tindex.names(path[1], path[2])\n\t\t\t\t\t},\n\t\t\t\t\t3 -> {\n\t\t\t\t\t\tlet [category, author, name] = path @* [1, 2, 3];\n\t\t\t\t\t\tlet url = [\n\t\t\t\t\t\t\t'./lib/spl/help/',\n\t\t\t\t\t\t\tcategory,\n\t\t\t\t\t\t\t'/',\n\t\t\t\t\t\t\tauthor,\n\t\t\t\t\t\t\t' - ',\n\t\t\t\t\t\t\tname,\n\t\t\t\t\t\t\t'.sl'\n\t\t\t\t\t\t].join;\n\t\t\t\t\t\turl.fetchTextWithDefault('*Fetch failed*')\n\t\t\t\t\t}\n\t\t\t\t])\n\t\t\t}\n\t\t).setPath(path)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "ScProgramCollectionBrowser",
  "ScProgramBrowser",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ScProgramBrowser_3(_self, _index, []);
  },
  "{ :self :index |\n\t\tself.ScProgramBrowser(index, [])\n\t}",
);

sl.addType(
  false,
  "ScProgramCollectionBrowser",
  "ScProgramCollectionBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ScProgramCollectionBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "ScProgramCollectionBrowser",
);

sl.addMethod(
  "ScProgramCollectionBrowser",
  "ScProgramCollectionBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(
      _scProgramCollectionIndex_1(_smallKansas),
      function (_scProgramIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _scProgramIndex";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addFrame_3(
          _smallKansas,
          _ScProgramBrowser_2(_smallKansas, _scProgramIndex),
          _event,
        );
      },
    );
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.scProgramCollectionIndex.then { :scProgramIndex |\n\t\t\tsmallKansas.addFrame(smallKansas.ScProgramBrowser(scProgramIndex), event)\n\t\t}\n\t}",
);
