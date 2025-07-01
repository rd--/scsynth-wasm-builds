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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tree_2(
      "SuperColliderProgramIndex",
      _collect_2(
        _categories_1(_self),
        sl.annotateFunction(function (_category) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _category";
            throw new Error(errorMessage);
          } /* Statements */
          return _Tree_2(
            _category,
            _collect_2(
              _authors_2(_self, _category),
              sl.annotateFunction(function (_author) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _author";
                  throw new Error(errorMessage);
                } /* Statements */
                return _Tree_2(
                  _author,
                  _collect_2(
                    _names_3(_self, _category, _author),
                    sl.annotateFunction(function (_name) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _name";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _Tree_2(_name, []);
                    }, ["name"]),
                  ),
                );
              }, ["author"]),
            ),
          );
        }, ["category"]),
      ),
    );
  }, ["self"]),
  "{ :self | Tree('SuperColliderProgramIndex', collect(categories(self), { :category | Tree(category, collect(authors(self,category), { :author | Tree(author, collect(names(self,category, author), { :name | Tree(name, []) })) })) })) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "atRandom",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomChoice_3(_contents_1(_self), _system, []);
  }, ["self"]),
  "{ :self | randomChoice(contents(self),system, []) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "authors",
  ["self", "category"],
  sl.annotateFunction(function (_self, _category) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _category";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(
      _copyWithoutIdenticalElements_1(
        _collect_2(
          _select_2(
            _contents_1(_self),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_at_2(_each, 1), _category);
            }, ["each"]),
          ),
          _second_1,
        ),
      ),
    );
  }, ["self", "category"]),
  "{ :self :category | sort(copyWithoutIdenticalElements(collect(select(contents(self), { :each | =(at(each, 1), category) }),second:/1))) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "categories",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(
      _copyWithoutIdenticalElements_1(_collect_2(_contents_1(_self), _first_1)),
    );
  }, ["self"]),
  "{ :self | sort(copyWithoutIdenticalElements(collect(contents(self),first:/1))) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "names",
  ["self", "category", "author"],
  sl.annotateFunction(function (_self, _category, _author) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _category, _author";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(
      _collect_2(
        _select_2(
          _contents_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _equalsSign_2(_at_2(_each, 1), _category),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_at_2(_each, 2), _author);
              }, []),
            );
          }, ["each"]),
        ),
        _third_1,
      ),
    );
  }, ["self", "category", "author"]),
  "{ :self :category :author | sort(collect(select(contents(self), { :each | &(=(at(each, 1), category), { =(at(each, 2), author) }) }),third:/1)) }",
);

sl.addMethodToExistingType(
  "SuperColliderProgramIndex",
  "ScProgram",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | size(contents(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScProgram",
  "SuperColliderProgramIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newSuperColliderProgramIndex_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newSuperColliderProgramIndex(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScProgram",
  "parseSuperColliderProgramIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SuperColliderProgramIndex_1(
      _collect_2(
        _select_2(_lines_1(_self), _notEmpty_1),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _splitByRegularExpression_2(
            _replaceString_3(_each, ".sp", ""),
            _RegularExpression_1(" - |/"),
          );
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self | SuperColliderProgramIndex(collect(select(lines(self),notEmpty:/1), { :each | splitByRegularExpression(replaceString(each,'.sp', ''),RegularExpression(' - |/')) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScProgram",
  "superColliderProgramIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SuperColliderProgramIndex");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'SuperColliderProgramIndex') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScProgram",
  "superColliderProgramOracle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SuperColliderProgramOracle");
  }, ["self"]),
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
