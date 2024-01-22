/* {- Requires: ColumnBrowser SmallKansas -} */

sl.addMethod(
  "SmallKansas",
  "MethodBrowser",
  "MethodBrowser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _methodNames = _sort_1(
      _copyWithoutDuplicates_1(
        _collect_2(_allMethods_1(_system), _qualifiedName_1),
      ),
    );
    let _selectedMethod = null;
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Method Browser",
      "text/plain",
      true,
      true,
      [3, 1],
      null,
      function (_accepted) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _accepted";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _definition_2(_selectedMethod, _accepted);
      },
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
            return _methodNames;
          }),
          _minusGreaterThan_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _plusPlus_2(
              _methodTraits_2(_system, _at_2(_path, 1)),
              _methodTypes_2(_system, _at_2(_path, 1)),
            );
          }),
          _minusGreaterThan_2(2, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(
              _browser,
              _if_3(_isTypeName_2(_system, _at_2(_path, 2)), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                return "Type";
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                return "Trait";
              }),
            );
            _selectedMethod = _at_2(
              _methodDictionary_1(_traitOrType_2(_system, _at_2(_path, 2))),
              _at_2(_path, 1),
            );
            return _definition_1(_selectedMethod);
          }),
        ]);
      },
    );
  },
  "{ :self |\n\t\tlet methodNames = system.allMethods.collect(qualifiedName:/1).copyWithoutDuplicates.sort;\n\t\tlet selectedMethod = nil;\n\t\tself.ColumnBrowser('Method Browser', 'text/plain', true, true, [3, 1], nil) { :accepted |\n\t\t\tselectedMethod.definition := accepted\n\t\t} { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tmethodNames\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tsystem.methodTraits(path[1]) ++ system.methodTypes(path[1])\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tbrowser.setStatus(\n\t\t\t\t\t\tsystem.isTypeName(path[2]).if {\n\t\t\t\t\t\t\t'Type'\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t'Trait'\n\t\t\t\t\t\t}\n\t\t\t\t\t);\n\t\t\t\t\tselectedMethod := system.traitOrType(path[2]).methodDictionary[path[1]];\n\t\t\t\t\tselectedMethod.definition\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "MethodBrowser",
  "MethodBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MethodBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "MethodBrowser",
);

sl.addMethod(
  "MethodBrowser",
  "MethodBrowser",
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
    return _addFrame_3(_smallKansas, _MethodBrowser_1(_smallKansas), _event);
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(smallKansas.MethodBrowser, event)\n\t}",
);
