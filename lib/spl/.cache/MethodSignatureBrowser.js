sl.addMethod(
  "SmallKansas",
  "MethodSignatureBrowser",
  "MethodSignatureBrowser",
  ["self", "methods", "withFilter"],
  function (_self, _methods, _withFilter) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _methods, _withFilter"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _selectedMethod = null;
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Method Signature Browser",
      "text/plain",
      _withFilter,
      true,
      [1],
      null,
      function (_accepted) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _accepted"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _definition_2(_selectedMethod, _accepted);
      },
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
            return _methods;
          }),
          _hyphenMinusGreaterThanSign_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            _selectedMethod = _methodLookupAtSignature_2(
              _system,
              _at_2(_path, 1),
            );
            _setStatus_2(_browser, _provenance_1(_selectedMethod));
            return _definition_1(_selectedMethod);
          }),
        ]);
      },
    );
  },
  "{ :self :methods :withFilter |\n\t\tlet selectedMethod = nil;\n\t\tself.ColumnBrowser('Method Signature Browser', 'text/plain', withFilter, true, [1], nil) { :accepted |\n\t\t\tselectedMethod.definition := accepted\n\t\t} { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tmethods\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tselectedMethod := system.methodLookupAtSignature(path[1]);\n\t\t\t\t\tbrowser.setStatus(selectedMethod.provenance);\n\t\t\t\t\tselectedMethod.definition\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "MethodSignatureBrowser",
  "MethodSignatureBrowser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MethodSignatureBrowser_3(
      _self,
      _sort_1(
        _copyWithoutIdenticalElements_1(
          _collect_2(_allMethods_1(_system), _signature_1),
        ),
      ),
      true,
    );
  },
  "{ :self |\n\t\tself.MethodSignatureBrowser(\n\t\t\tsystem.allMethods.collect(signature:/1).copyWithoutIdenticalElements.sort,\n\t\t\ttrue\n\t\t)\n\t}",
);

sl.addType(
  false,
  "MethodSignatureBrowser",
  "MethodSignatureBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MethodSignatureBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "MethodSignatureBrowser",
);

sl.addMethod(
  "MethodSignatureBrowser",
  "MethodSignatureBrowser",
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
    return _addFrame_3(
      _smallKansas,
      _MethodSignatureBrowser_1(_smallKansas),
      _event,
    );
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(smallKansas.MethodSignatureBrowser, event)\n\t}",
);
