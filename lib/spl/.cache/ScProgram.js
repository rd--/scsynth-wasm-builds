/*  Requires: LibraryItem  */

sl.addType(
  false,
  "SuperColliderProgramIndex",
  "ScProgram",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "SuperColliderProgramIndex",
);

sl.addMethod(
  "SuperColliderProgramIndex",
  "ScProgram",
  "asTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Tree_2(
      "SuperColliderProgramIndex",
      _collect_2(_categories_1(_self), function (_category) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _category";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Tree_2(
          _category,
          _collect_2(_authors_2(_self, _category), function (_author) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _author";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _Tree_2(
              _author,
              _collect_2(_names_3(_self, _category, _author), function (_name) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _name";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return _Tree_2(_name, []);
              }),
            );
          }),
        );
      }),
    );
  },
  "{ :self |\n\t\tTree(\n\t\t\t'SuperColliderProgramIndex',\n\t\t\tself.categories.collect { :category |\n\t\t\t\tTree(\n\t\t\t\t\tcategory,\n\t\t\t\t\tself.authors(category).collect { :author |\n\t\t\t\t\t\tTree(\n\t\t\t\t\t\t\tauthor,\n\t\t\t\t\t\t\tself.names(category, author).collect { :name |\n\t\t\t\t\t\t\t\tTree(name, [])\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t}\n\t\t)\n\t}",
);

sl.addMethod(
  "SuperColliderProgramIndex",
  "ScProgram",
  "atRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atRandom_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.atRandom\n\t}",
);

sl.addMethod(
  "SuperColliderProgramIndex",
  "ScProgram",
  "authors",
  ["self", "category"],
  function (_self, _category) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _category";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(
      _copyWithoutIdenticalElements_1(
        _collect_2(
          _select_2(_contents_1(_self), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_each, 1), _category);
          }),
          _second_1,
        ),
      ),
    );
  },
  "{ :self :category |\n\t\tself.contents.select { :each |\n\t\t\teach[1] = category\n\t\t}\n\t\t.collect(second:/1)\n\t\t.copyWithoutIdenticalElements\n\t\t.sort\n\t}",
);

sl.addMethod(
  "SuperColliderProgramIndex",
  "ScProgram",
  "categories",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(
      _copyWithoutIdenticalElements_1(_collect_2(_contents_1(_self), _first_1)),
    );
  },
  "{ :self |\n\t\tself\n\t\t.contents\n\t\t.collect(first:/1)\n\t\t.copyWithoutIdenticalElements\n\t\t.sort\n\t}",
);

sl.addMethod(
  "SuperColliderProgramIndex",
  "ScProgram",
  "names",
  ["self", "category", "author"],
  function (_self, _category, _author) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _category, _author";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_collect_2(
      _select_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_at_2(_each, 1), _category),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
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
  "SuperColliderProgramIndex",
  "ScProgram",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethod(
  "List",
  "ScProgram",
  "SuperColliderProgramIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newSuperColliderProgramIndex_0(), _self);
  },
  "{ :self |\n\t\tnewSuperColliderProgramIndex().initializeSlots(self)\n\t}",
);

sl.addMethod(
  "String",
  "ScProgram",
  "parseSuperColliderProgramIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SuperColliderProgramIndex_1(
      _collect_2(_select_2(_lines_1(_self), _notEmpty_1), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _splitByRegExp_2(
          _replaceString_3(_each, ".sp", ""),
          _RegExp_1(" - |/"),
        );
      }),
    );
  },
  "{ :self |\n\t\tSuperColliderProgramIndex(\n\t\t\tself.lines.select(notEmpty:/1).collect { :each |\n\t\t\t\teach.replaceString('.sp', '').splitByRegExp(RegExp(' - |/'))\n\t\t\t}\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "ScProgram",
  "superColliderProgramIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SuperColliderProgramIndex");
  },
  "{ :self |\n\t\tself.requireLibraryItem('SuperColliderProgramIndex')\n\t}",
);

sl.addMethod(
  "System",
  "ScProgram",
  "superColliderProgramOracle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SuperColliderProgramOracle");
  },
  "{ :self |\n\t\tself.requireLibraryItem('SuperColliderProgramOracle')\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "SuperColliderProgramIndex"],
      ["category", "Music/Synthesis"],
      ["url", "https://rohandrape.net/sw/jssc3/text/SmallHoursPrograms.text"],
      ["mimeType", "text/plain"],
      ["parser", _parseSuperColliderProgramIndex_1],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "SuperColliderProgramOracle"],
      ["category", "Music/Synthesis"],
      ["url", "https://rohandrape.net/sw/jssc3/text/SmallHoursOracle.text"],
      ["mimeType", "text/plain"],
      ["parser", _parseSuperColliderProgramIndex_1],
    ]),
  ),
);
