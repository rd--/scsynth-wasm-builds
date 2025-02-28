/*  Requires: LibraryItem  */

sl.addType(
  false,
  "SuperColliderProgramIndex",
  "ScProgram",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SuperColliderProgramIndex",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "asTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tree_2(
      "SuperColliderProgramIndex",
      _collect_2(_categories_1(_self), function (_category) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _category";
          throw new Error(errorMessage);
        } /* Statements */
        return _Tree_2(
          _category,
          _collect_2(_authors_2(_self, _category), function (_author) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _author";
              throw new Error(errorMessage);
            } /* Statements */
            return _Tree_2(
              _author,
              _collect_2(_names_3(_self, _category, _author), function (_name) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _name";
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
  "{ :self | Tree('SuperColliderProgramIndex', collect(categories(self), { :category | Tree(category, collect(authors(self,category), { :author | Tree(author, collect(names(self,category, author), { :name | Tree(name, []) })) })) })) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "atRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atRandom_1(_contents_1(_self));
  },
  "{ :self | atRandom(contents(self)) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "authors",
  ["self", "category"],
  function (_self, _category) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _category";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(
      _copyWithoutIdenticalElements_1(
        _collect_2(
          _select_2(_contents_1(_self), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_each, 1), _category);
          }),
          _second_1,
        ),
      ),
    );
  },
  "{ :self :category | sort(copyWithoutIdenticalElements(collect(select(contents(self), { :each | =(at(each, 1), category) }),second:/1))) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "categories",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(
      _copyWithoutIdenticalElements_1(_collect_2(_contents_1(_self), _first_1)),
    );
  },
  "{ :self | sort(copyWithoutIdenticalElements(collect(contents(self),first:/1))) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "names",
  ["self", "category", "author"],
  function (_self, _category, _author) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _category, _author";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_collect_2(
      _select_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_at_2(_each, 1), _category),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_each, 2), _author);
          },
        );
      }),
      _third_1,
    ));
  },
  "{ :self :category :author | sort(collect(select(contents(self), { :each | &(=(at(each, 1), category), { =(at(each, 2), author) }) }),third:/1)) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self | size(contents(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScProgram",
  "SuperColliderProgramIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newSuperColliderProgramIndex_0(), _self);
  },
  "{ :self | initializeSlots(newSuperColliderProgramIndex(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScProgram",
  "parseSuperColliderProgramIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SuperColliderProgramIndex_1(
      _collect_2(_select_2(_lines_1(_self), _notEmpty_1), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _splitByRegExp_2(
          _replaceString_3(_each, ".sp", ""),
          _RegExp_1(" - |/"),
        );
      }),
    );
  },
  "{ :self | SuperColliderProgramIndex(collect(select(lines(self),notEmpty:/1), { :each | splitByRegExp(replaceString(each,'.sp', ''),RegExp(' - |/')) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScProgram",
  "superColliderProgramIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SuperColliderProgramIndex");
  },
  "{ :self | requireLibraryItem(self,'SuperColliderProgramIndex') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScProgram",
  "superColliderProgramOracle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SuperColliderProgramOracle");
  },
  "{ :self | requireLibraryItem(self,'SuperColliderProgramOracle') }",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
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
    _Record_1([
      ["name", "SuperColliderProgramOracle"],
      ["category", "Music/Synthesis"],
      ["url", "https://rohandrape.net/sw/jssc3/text/SmallHoursOracle.text"],
      ["mimeType", "text/plain"],
      ["parser", _parseSuperColliderProgramIndex_1],
    ]),
  ),
);
