/*  Requires: ColumnBrowser SmallKansas  */

sl.addType(
  false,
  "SuperColliderProgramIndex",
  "SuperColliderProgramBrowser",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "SuperColliderProgramIndex",
);

sl.addMethod(
  "SuperColliderProgramIndex",
  "SuperColliderProgramBrowser",
  "atRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atRandom_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.atRandom\n\t}",
);

sl.addMethod(
  "SuperColliderProgramIndex",
  "SuperColliderProgramBrowser",
  "authors",
  ["self", "category"],
  function (_self, _category) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _category"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sort_1(
      _copyWithoutIdenticalElements_1(
        _collect_2(
          _select_2(_contents_1(_self), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage =
                "Arity: expected 1, _each"; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(_at_2(_each, 1), _category);
          }),
          _second_1,
        ),
      ),
    );
  },
  "{ :self :category |\n\t\tself.contents.select { :each |\n\t\t\teach[1] = category\n\t\t}.collect(second:/1).copyWithoutIdenticalElements.sort\n\t}",
);

sl.addMethod(
  "SuperColliderProgramIndex",
  "SuperColliderProgramBrowser",
  "categories",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reject_2(
      _sort_1(
        _copyWithoutIdenticalElements_1(
          _collect_2(_contents_1(_self), _first_1),
        ),
      ),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _each"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_each, "collect");
      },
    );
  },
  "{ :self |\n\t\tself.contents.collect(first:/1).copyWithoutIdenticalElements.sort.reject { :each |\n\t\t\teach = 'collect'\n\t\t}\n\t}",
);

sl.addMethod(
  "SuperColliderProgramIndex",
  "SuperColliderProgramBrowser",
  "names",
  ["self", "category", "author"],
  function (_self, _category, _author) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _category, _author"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sort_1(_collect_2(
      _select_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _each"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _equalsSign_2(_at_2(_each, 1), _category),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(_at_2(_each, 2), _author);
          },
        );
      }),
      _third_1,
    ));
  },
  "{ :self :category :author |\n\t\tself.contents.select { :each |\n\t\t\teach[1] = category & {\n\t\t\t\teach[2] = author\n\t\t\t}\n\t\t}.collect(third:/1).sort\n\t}",
);

sl.addMethod(
  "String",
  "SuperColliderProgramBrowser",
  "SuperColliderProgramIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(
      _newSuperColliderProgramIndex_0(),
      _collect_2(_select_2(_lines_1(_self), _notEmpty_1), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _each"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _splitByRegExp_2(
          _replaceString_3(_each, ".sl", ""),
          _RegExp_1(" - |/"),
        );
      }),
    );
  },
  "{ :self |\n\t\tnewSuperColliderProgramIndex().initializeSlots(\n\t\t\tself.lines.select(notEmpty:/1).collect { :each |\n\t\t\t\teach.replaceString('.sl', '').splitByRegExp(RegExp(' - |/'))\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "SuperColliderProgramBrowser",
  "superColliderProgramIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _useLibraryItem_2(
      _self,
      _LibraryItem_4(
        "superColliderProgramIndex",
        "https://rohandrape.net/sw/jssc3/text/SmallHoursPrograms.text",
        "text/plain",
        _SuperColliderProgramIndex_1,
      ),
    );
  },
  "{ :self |\n\t\tself.useLibraryItem(\n\t\t\tLibraryItem(\n\t\t\t\t'superColliderProgramIndex',\n\t\t\t\t'https://rohandrape.net/sw/jssc3/text/SmallHoursPrograms.text',\n\t\t\t\t'text/plain',\n\t\t\t\tSuperColliderProgramIndex:/1\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SuperColliderProgramBrowser",
  "SuperColliderProgramBrowser",
  ["self", "index", "path"],
  function (_self, _index, _path) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _index, _path"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _setPath_2(
      _ColumnBrowser_9(
        _self,
        "SuperCollider Program Browser",
        "text/plain",
        false,
        false,
        [1, 1, 3],
        null,
        null,
        function (_browser, _path) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage =
              "Arity: expected 2, _browser, _path"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _caseOf_2(_size_1(_path), [
            _hyphenMinusGreaterThanSign_2(0, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _categories_1(_index);
            }),
            _hyphenMinusGreaterThanSign_2(1, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _authors_2(_index, _at_2(_path, 1));
            }),
            _hyphenMinusGreaterThanSign_2(2, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _names_3(_index, _at_2(_path, 1), _at_2(_path, 2));
            }),
            _hyphenMinusGreaterThanSign_2(3, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Temporaries */
              let __genSym124 = _assertIsOfSize_2(
                  _commercialAtAsterisk_2(_path, [1, 2, 3]),
                  3,
                ),
                _category = _at_2(__genSym124, 1),
                _author = _at_2(__genSym124, 2),
                _name = _at_2(__genSym124, 3);
              let _url = _join_2([
                "./lib/spl/Program/SuperCollider/",
                _category,
                "/",
                _author,
                " - ",
                _name,
                ".play.sl",
              ], "");
              /* Statements */
              return _fetchTextWithDefault_2(_url, "*Fetch failed*");
            }),
          ]);
        },
      ),
      _path,
    );
  },
  "{ :self :index :path |\n\t\tself.ColumnBrowser(\n\t\t\t'SuperCollider Program Browser',\n\t\t\t'text/plain',\n\t\t\tfalse,\n\t\t\tfalse,\n\t\t\t[1, 1, 3],\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t{ :browser :path |\n\t\t\t\tpath.size.caseOf([\n\t\t\t\t\t0 -> {\n\t\t\t\t\t\tindex.categories\n\t\t\t\t\t},\n\t\t\t\t\t1 -> {\n\t\t\t\t\t\tindex.authors(path[1])\n\t\t\t\t\t},\n\t\t\t\t\t2 -> {\n\t\t\t\t\t\tindex.names(path[1], path[2])\n\t\t\t\t\t},\n\t\t\t\t\t3 -> {\n\t\t\t\t\t\tlet [category, author, name] = path @* [1, 2, 3];\n\t\t\t\t\t\tlet url = [\n\t\t\t\t\t\t\t'./lib/spl/Program/SuperCollider/',\n\t\t\t\t\t\t\tcategory,\n\t\t\t\t\t\t\t'/',\n\t\t\t\t\t\t\tauthor,\n\t\t\t\t\t\t\t' - ',\n\t\t\t\t\t\t\tname,\n\t\t\t\t\t\t\t'.play.sl'\n\t\t\t\t\t\t].join('');\n\t\t\t\t\t\turl.fetchTextWithDefault('*Fetch failed*')\n\t\t\t\t\t}\n\t\t\t\t])\n\t\t\t}\n\t\t).setPath(path)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "SuperColliderProgramBrowser",
  "SuperColliderProgramBrowser",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _index"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _SuperColliderProgramBrowser_3(_self, _index, []);
  },
  "{ :self :index |\n\t\tself.SuperColliderProgramBrowser(index, [])\n\t}",
);

sl.addType(
  false,
  "SuperColliderProgramBrowser",
  "SuperColliderProgramBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "SuperColliderProgramBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "SuperColliderProgramBrowser",
);

sl.addMethod(
  "SuperColliderProgramBrowser",
  "SuperColliderProgramBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _smallKansas, _event"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(
      _superColliderProgramIndex_1(_smallKansas),
      function (_superColliderProgramIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _superColliderProgramIndex"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addFrame_3(
          _smallKansas,
          _SuperColliderProgramBrowser_2(
            _smallKansas,
            _superColliderProgramIndex,
          ),
          _event,
        );
      },
    );
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.superColliderProgramIndex.then { :superColliderProgramIndex |\n\t\t\tsmallKansas.addFrame(smallKansas.SuperColliderProgramBrowser(superColliderProgramIndex), event)\n\t\t}\n\t}",
);
