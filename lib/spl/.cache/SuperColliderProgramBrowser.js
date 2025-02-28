/*  Requires: ColumnBrowser SmallKansas  */

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "SuperColliderProgramBrowser",
  "SuperColliderProgramBrowser",
  ["self", "index", "path"],
  function (_self, _index, _path) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _path";
      throw new Error(errorMessage);
    } /* Statements */
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
              return _categories_1(_index);
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
              return _authors_2(_index, _at_2(_path, 1));
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
              return _names_3(_index, _at_2(_path, 1), _at_2(_path, 2));
            }),
            _hyphenMinusGreaterThanSign_2(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return 3;
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SPL246 = _assertIsOfSize_2(
                _commercialAtAsterisk_2(_path, [1, 2, 3]),
                3,
              );
              let _category = _at_2(__SPL246, 1);
              let _author = _at_2(__SPL246, 2);
              let _name = _at_2(__SPL246, 3);
              let _url = _join_2([
                "./lib/spl/Program/SuperCollider/",
                _category,
                "/",
                _author,
                " - ",
                _name,
                ".sp",
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
  "{ :self :index :path | setPath(ColumnBrowser(self,'SuperCollider Program Browser', 'text/plain', false, false, [1, 1, 3], nil, nil, { :browser :path | caseOf(size(path),[->({ 0 }, { categories(index) }), ->({ 1 }, { authors(index,at(path, 1)) }), ->({ 2 }, { names(index,at(path, 1), at(path, 2)) }), ->({ 3 }, { let __SPL246 = assertIsOfSize(@*(path, [1, 2, 3]), 3); let category = at(__SPL246, 1); let author = at(__SPL246, 2); let name = at(__SPL246, 3); let url = join(['./lib/spl/Program/SuperCollider/', category, '/', author, ' - ', name, '.sp'],''); fetchTextWithDefault(url,'*Fetch failed*') })]) }),path) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "SuperColliderProgramBrowser",
  "SuperColliderProgramBrowser",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _SuperColliderProgramBrowser_3(_self, _index, []);
  },
  "{ :self :index | SuperColliderProgramBrowser(self,index, []) }",
);

sl.addType(
  false,
  "SuperColliderProgramBrowser",
  "SuperColliderProgramBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SuperColliderProgramBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "SuperColliderProgramBrowser",
);

sl.addMethodToExistingType(
  "SuperColliderProgramBrowser",
  "SuperColliderProgramBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "SuperColliderProgramIndex"),
      function (_superColliderProgramIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _superColliderProgramIndex";
          throw new Error(errorMessage);
        } /* Statements */
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
  "{ :self :smallKansas :event | then(requestLibraryItem(system,'SuperColliderProgramIndex'), { :superColliderProgramIndex | addFrame(smallKansas,SuperColliderProgramBrowser(smallKansas,superColliderProgramIndex), event) }) }",
);
