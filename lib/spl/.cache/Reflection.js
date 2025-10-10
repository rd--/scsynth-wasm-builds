/*  Requires: System  */

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "addAllTraitMethodsTo",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _values_1(_traitDictionary_1(_system)),
      sl.annotateFunction(function (_trait) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _trait";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _values_1(_methodDictionary_1(_trait)),
          sl.annotateFunction(function (_method) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _method";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_aCollection, _method);
          }, ["method"]),
        );
      }, ["trait"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tsystem.traitDictionary.values.do { :trait |\n\t\t\ttrait.methodDictionary.values.do { :method |\n\t\t\t\taCollection.add(method)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "addAllTypeMethodsTo",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _values_1(_typeDictionary_1(_system)),
      sl.annotateFunction(function (_trait) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _trait";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _values_1(_methodDictionary_1(_trait)),
          sl.annotateFunction(function (_method) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _method";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_aCollection, _method);
          }, ["method"]),
        );
      }, ["trait"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tsystem.typeDictionary.values.do { :trait |\n\t\t\ttrait.methodDictionary.values.do { :method |\n\t\t\t\taCollection.add(method)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "allMethods",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _addAllTraitMethodsTo_2(_system, _answer);
    _addAllTypeMethodsTo_2(_system, _answer);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tsystem.addAllTraitMethodsTo(answer);\n\t\tsystem.addAllTypeMethodsTo(answer);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "doesTraitImplementMethod",
  ["self", "traitName", "methodName"],
  sl.annotateFunction(function (_self, _traitName, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _traitName, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _methodDictionary_1(_traitLookup_2(_self, _traitName)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_name_1(_each), _methodName);
      }, ["each"]),
    );
  }, ["self", "traitName", "methodName"]),
  "{ :self :traitName :methodName |\n\t\tself.traitLookup(traitName).methodDictionary.anySatisfy { :each |\n\t\t\teach.name = methodName\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "doesTypeImplementMethod",
  ["self", "typeName", "methodName"],
  sl.annotateFunction(function (_self, _typeName, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _typeName, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _methodDictionary_1(_typeLookup_2(_self, _typeName)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_name_1(_each), _methodName);
      }, ["each"]),
    );
  }, ["self", "typeName", "methodName"]),
  "{ :self :typeName :methodName |\n\t\tself.typeLookup(typeName).methodDictionary.anySatisfy { :each |\n\t\t\teach.name = methodName\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "isMethodName",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_indices_1(_methodDictionary_1(_self)), _aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.methodDictionary.indices.includes(aString)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "isTraitName",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_traitDictionary_1(_self), _aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.traitDictionary.includesIndex(aString)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "isTraitOrTypeName",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isTraitName_2(_self, _aString),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isTypeName_2(_self, _aString);
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.isTraitName(aString) | {\n\t\t\tself.isTypeName(aString)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "isTypeName",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_typeDictionary_1(_self), _aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.typeDictionary.includesIndex(aString)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodArities",
  ["self", "methodName"],
  sl.annotateFunction(function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_at_2(_methodDictionary_1(_self), _methodName));
  }, ["self", "methodName"]),
  "{ :self :methodName |\n\t\t/* Arities methodName is implemented for. */\n\t\tself.methodDictionary[methodName].indices\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allMethods_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.allMethods\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _traitDictionary_1(_self),
      sl.annotateFunction(function (_aTrait) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aTrait";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _methodDictionary_1(_aTrait),
          sl.annotateFunction(function (_aMethod) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _aMethod";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_aMethod);
          }, ["aMethod"]),
        );
      }, ["aTrait"]),
    );
    return _do_2(
      _typeDictionary_1(_self),
      sl.annotateFunction(function (_aType) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aType";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _methodDictionary_1(_aType),
          sl.annotateFunction(function (_aMethod) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _aMethod";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_aMethod);
          }, ["aMethod"]),
        );
      }, ["aType"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.traitDictionary.do { :aTrait |\n\t\t\taTrait.methodDictionary.do { :aMethod |\n\t\t\t\taMethod.aBlock\n\t\t\t}\n\t\t};\n\t\tself.typeDictionary.do { :aType |\n\t\t\taType.methodDictionary.do { :aMethod |\n\t\t\t\taMethod.aBlock\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodImplementations",
  ["self", "methodName"],
  sl.annotateFunction(function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isMethodName_2(_self, _methodName),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _IdentitySet_0();
        let _table = _at_2(_methodDictionary_1(_self), _methodName);
        /* Statements */
        _do_2(
          _table,
          sl.annotateFunction(function (_dictionary) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _dictionary";
              throw new Error(errorMessage);
            } /* Statements */
            return _do_2(
              _dictionary,
              sl.annotateFunction(function (_method) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _method";
                  throw new Error(errorMessage);
                } /* Statements */
                return _uncheckedInclude_2(_answer, _method);
              }, ["method"]),
            );
          }, ["dictionary"]),
        );
        return _asList_1(_answer);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2(
            "System>>methodImplementations: not a methodName: ",
            _methodName,
          ),
        );
      }, []),
    );
  }, ["self", "methodName"]),
  "{ :self :methodName |\n\t\t/* Implementations of methodName. */\n\t\tself.isMethodName(methodName).if {\n\t\t\tlet answer = IdentitySet();\n\t\t\tlet table = self.methodDictionary[methodName];\n\t\t\ttable.do { :dictionary |\n\t\t\t\tdictionary.do { :method |\n\t\t\t\t\tanswer.uncheckedInclude(method)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer.asList\n\t\t} {\n\t\t\tself.error('System>>methodImplementations: not a methodName: ' ++ methodName)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodImplementors",
  ["self", "methodName"],
  sl.annotateFunction(function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _methodImplementations_2(_system, _methodName),
      _origin_1,
    );
  }, ["self", "methodName"]),
  "{ :self :methodName |\n\t\tsystem.methodImplementations(methodName).collect(origin:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodLookupAtSignature",
  ["self", "signature"],
  sl.annotateFunction(function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_parseMethodSignature_1(_signature), 2);
    let _qualifiedOriginName = _at_2(__SplVar1, 1);
    let _qualifiedMethodName = _at_2(__SplVar1, 2);
    /* Statements */
    return _if_3(
      _isQualifiedTraitName_1(_qualifiedOriginName),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(
          _methodDictionary_1(
            _at_2(
              _traitDictionary_1(_self),
              _parseQualifiedTraitName_1(_qualifiedOriginName),
            ),
          ),
          _qualifiedMethodName,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(
          _methodDictionary_1(
            _at_2(_typeDictionary_1(_self), _qualifiedOriginName),
          ),
          _qualifiedMethodName,
        );
      }, []),
    );
  }, ["self", "signature"]),
  "{ :self :signature |\n\t\tlet [qualifiedOriginName, qualifiedMethodName] = signature.parseMethodSignature;\n\t\tqualifiedOriginName.isQualifiedTraitName.if {\n\t\t\tself.traitDictionary[\n\t\t\t\tqualifiedOriginName.parseQualifiedTraitName\n\t\t\t].methodDictionary[\n\t\t\t\tqualifiedMethodName\n\t\t\t]\n\t\t} {\n\t\t\tself.typeDictionary[\n\t\t\t\tqualifiedOriginName\n\t\t\t].methodDictionary[\n\t\t\t\tqualifiedMethodName\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodLookupAtType",
  ["self", "methodName", "arity", "typeName"],
  sl.annotateFunction(function (_self, _methodName, _arity, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _methodName, _arity, _typeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(
      _at_2(_at_2(_methodDictionary_1(_self), _methodName), _arity),
      _typeName,
    );
  }, ["self", "methodName", "arity", "typeName"]),
  "{ :self :methodName :arity :typeName |\n\t\tself.methodDictionary[methodName][arity][typeName]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodPrintString",
  ["self", "methodName"],
  sl.annotateFunction(function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _methodImplementations_2(_self, _methodName),
      sl.annotateFunction(function (_method) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _method";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _format_2("+ %{\n\t% %\n}", [
            _qualifiedName_1(_origin_1(_method)),
            _name_1(_method),
            _sourceCode_1(_method),
          ]),
        );
      }, ["method"]),
    );
    return _answer;
  }, ["self", "methodName"]),
  "{ :self :methodName |\n\t\t/* Print string of implementations of methodName. */\n\t\tlet answer = [];\n\t\tself.methodImplementations(methodName).do { :method |\n\t\t\tanswer.add(\n\t\t\t\t'+ %{\\n\\t% %\\n}'.format([\n\t\t\t\t\tmethod.origin.qualifiedName,\n\t\t\t\t\tmethod.name,\n\t\t\t\t\tmethod.sourceCode\n\t\t\t\t])\n\t\t\t)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodSignatures",
  ["self", "methodName"],
  sl.annotateFunction(function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _methodImplementations_2(_self, _methodName),
      _signature_1,
    );
  }, ["self", "methodName"]),
  "{ :self :methodName |\n\t\t/* Signatures of each implementation of methodName. */\n\t\tself.methodImplementations(methodName).collect(signature:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodSourceCodeSearch",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _methodDo_2(
      _self,
      sl.annotateFunction(function (_aMethod) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aMethod";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _includesSubstring_2(_sourceCode_1(_aMethod), _aString),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _aMethod);
          }, []),
        );
      }, ["aMethod"]),
    );
    return _answer;
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tlet answer = [];\n\t\tself.methodDo { :aMethod |\n\t\t\taMethod.sourceCode.includesSubstring(aString).ifTrue {\n\t\t\t\tanswer.add(aMethod)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodTraits",
  ["self", "qualifiedMethodName"],
  sl.annotateFunction(function (_self, _qualifiedMethodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _qualifiedMethodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(
      _select_2(
        _traitDictionary_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _includes_2(
            _indices_1(_methodDictionary_1(_each)),
            _qualifiedMethodName,
          );
        }, ["each"]),
      ),
    );
  }, ["self", "qualifiedMethodName"]),
  "{ :self :qualifiedMethodName |\n\t\tself.traitDictionary.select { :each |\n\t\t\teach.methodDictionary.indices.includes(qualifiedMethodName)\n\t\t}.indices\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodTypes",
  ["self", "qualifiedMethodName"],
  sl.annotateFunction(function (_self, _qualifiedMethodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _qualifiedMethodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(
      _select_2(
        _typeDictionary_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _includes_2(
            _indices_1(_methodDictionary_1(_each)),
            _qualifiedMethodName,
          );
        }, ["each"]),
      ),
    );
  }, ["self", "qualifiedMethodName"]),
  "{ :self :qualifiedMethodName |\n\t\tself.typeDictionary.select { :each |\n\t\t\teach.methodDictionary.indices.includes(qualifiedMethodName)\n\t\t}.indices\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "multipleArityMethodList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _indices_1(_methodDictionary_1(_self)),
      sl.annotateFunction(function (_methodName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _methodName";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(
          _size_1(_methodArities_2(_self, _methodName)),
          1,
        );
      }, ["methodName"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.methodDictionary.indices.select { :methodName |\n\t\t\tself.methodArities(methodName).size > 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "splOperatorPrecedenceTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["^", 3], ["*", 2], ["/", 2], ["+", 1], ["-", 1]]);
  }, ["self"]),
  "{ :self |\n\t\t(\n\t\t\t'^': 3,\n\t\t\t'*': 2,\n\t\t\t'/': 2,\n\t\t\t'+': 1,\n\t\t\t'-': 1\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "onlyZeroArityMethodList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _indices_1(_methodDictionary_1(_self)),
      sl.annotateFunction(function (_methodName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _methodName";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_methodArities_2(_self, _methodName), [0]);
      }, ["methodName"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t/* Methods implemented by typeName. */\n\t\tself.methodDictionary.indices.select { :methodName |\n\t\t\tself.methodArities(methodName) = [0]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "packageMethods",
  ["self", "packageName"],
  sl.annotateFunction(function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _methodDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_packageName_1(_each), _packageName),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "packageName"]),
  "{ :self :packageName |\n\t\tlet answer = [];\n\t\tself.methodDo { :each |\n\t\t\t(each.packageName = packageName).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "packageTypes",
  ["self", "packageName"],
  sl.annotateFunction(function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _typeDictionary_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_packageName_1(_each), _packageName);
      }, ["each"]),
    );
  }, ["self", "packageName"]),
  "{ :self :packageName |\n\t\tself.typeDictionary.select { :each |\n\t\t\teach.packageName = packageName\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "packageTraits",
  ["self", "packageName"],
  sl.annotateFunction(function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(
      _select_2(
        _traitDictionary_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_packageName_1(_each), _packageName);
        }, ["each"]),
      ),
    );
  }, ["self", "packageName"]),
  "{ :self :packageName |\n\t\tself.traitDictionary.select { :each |\n\t\t\teach.packageName = packageName\n\t\t}.values\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "packageTypes",
  ["self", "packageName"],
  sl.annotateFunction(function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(
      _select_2(
        _typeDictionary_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_packageName_1(_each), _packageName);
        }, ["each"]),
      ),
    );
  }, ["self", "packageName"]),
  "{ :self :packageName |\n\t\tself.typeDictionary.select { :each |\n\t\t\teach.packageName = packageName\n\t\t}.values\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "traitLookup",
  ["self", "traitName"],
  sl.annotateFunction(function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isTraitName_2(_self, _traitName),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_traitDictionary_1(_self), _traitName);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2(
            "System>>traitLookup: no such trait: ",
            _traitName,
          ),
        );
      }, []),
    );
  }, ["self", "traitName"]),
  "{ :self :traitName |\n\t\tself.isTraitName(traitName).if {\n\t\t\tself.traitDictionary[traitName]\n\t\t} {\n\t\t\tself.error('System>>traitLookup: no such trait: ' ++ traitName)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "traitMethods",
  ["self", "traitName"],
  sl.annotateFunction(function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(_methodDictionary_1(_traitLookup_2(_self, _traitName)));
  }, ["self", "traitName"]),
  "{ :self :traitName |\n\t\tself.traitLookup(traitName).methodDictionary.values\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "traitOrType",
  ["self", "traitOrTypeName"],
  sl.annotateFunction(function (_self, _traitOrTypeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitOrTypeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isTypeName_2(_self, _traitOrTypeName),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_typeDictionary_1(_self), _traitOrTypeName);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isTraitName_2(_self, _traitOrTypeName),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_traitDictionary_1(_self), _traitOrTypeName);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              _plusSignPlusSign_2(
                "System>>traitOrType: not such trait or type: ",
                _traitOrTypeName,
              ),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "traitOrTypeName"]),
  "{ :self :traitOrTypeName |\n\t\tself.isTypeName(traitOrTypeName).if {\n\t\t\tself.typeDictionary[traitOrTypeName]\n\t\t} {\n\t\t\tself.isTraitName(traitOrTypeName).if {\n\t\t\t\tself.traitDictionary[traitOrTypeName]\n\t\t\t} {\n\t\t\t\tself.error('System>>traitOrType: not such trait or type: ' ++ traitOrTypeName)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "traitTypes",
  ["self", "traitName"],
  sl.annotateFunction(function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _unqualifiedTraitName = _parseQualifiedTraitName_1(_traitName);
    /* Statements */
    return _if_3(
      _isTraitName_2(_self, _unqualifiedTraitName),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _typesImplementingTrait_2(_self, _unqualifiedTraitName);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2(
            "System>>traitTypes: no such trait: ",
            _traitName,
          ),
        );
      }, []),
    );
  }, ["self", "traitName"]),
  "{ :self :traitName |\n\t\tlet unqualifiedTraitName = traitName.parseQualifiedTraitName;\n\t\tself.isTraitName(unqualifiedTraitName).if {\n\t\t\tself.typesImplementingTrait(unqualifiedTraitName)\n\t\t} {\n\t\t\tself.error('System>>traitTypes: no such trait: ' ++ traitName)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeDirectMethodDictionary",
  ["self", "typeName"],
  sl.annotateFunction(function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _methodDictionary_1(_typeLookup_2(_self, _typeName));
  }, ["self", "typeName"]),
  "{ :self :typeName |\n\t\t/* Methods implemented directly at typeName. */\n\t\tself.typeLookup(typeName).methodDictionary\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeInheritedMethodDictionary",
  ["self", "typeName"],
  sl.annotateFunction(function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Record_0();
    /* Statements */
    _do_2(
      _traitNameList_1(_typeLookup_2(_self, _typeName)),
      sl.annotateFunction(function (_traitName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _traitName";
          throw new Error(errorMessage);
        } /* Statements */
        return _valuesDo_2(
          _methodDictionary_1(_traitLookup_2(_self, _traitName)),
          sl.annotateFunction(function (_method) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _method";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_answer, _qualifiedName_1(_method), _method);
          }, ["method"]),
        );
      }, ["traitName"]),
    );
    return _answer;
  }, ["self", "typeName"]),
  "{ :self :typeName |\n\t\t/* Methods inherited from Traits at typeName, most specific only. */\n\t\tlet answer = (:);\n\t\tself.typeLookup(typeName).traitNameList.do { :traitName |\n\t\t\tself.traitLookup(traitName).methodDictionary.valuesDo { :method |\n\t\t\t\tanswer[method.qualifiedName] := method\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeLookup",
  ["self", "typeName"],
  sl.annotateFunction(function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isTypeName_2(_self, _typeName),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_typeDictionary_1(_self), _typeName);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("System>>typeLookup: not a type: ", _typeName),
        );
      }, []),
    );
  }, ["self", "typeName"]),
  "{ :self :typeName |\n\t\tself.isTypeName(typeName).if {\n\t\t\tself.typeDictionary[typeName]\n\t\t} {\n\t\t\tself.error('System>>typeLookup: not a type: ' ++ typeName)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeMethodDictionary",
  ["self", "typeName"],
  sl.annotateFunction(function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _typeInheritedMethodDictionary_2(_self, _typeName),
      _typeDirectMethodDictionary_2(_self, _typeName),
    );
  }, ["self", "typeName"]),
  "{ :self :typeName |\n\t\tself.typeInheritedMethodDictionary(typeName) ++ self.typeDirectMethodDictionary(typeName)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeTraits",
  ["self", "typeName"],
  sl.annotateFunction(function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _traitNameList_1(_typeLookup_2(_self, _typeName));
  }, ["self", "typeName"]),
  "{ :self :typeName |\n\t\tself.typeLookup(typeName).traitNameList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typesImplementingTrait",
  ["self", "traitName"],
  sl.annotateFunction(function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(
      _select_2(
        _typeDictionary_1(_system),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _includes_2(_traitNameList_1(_each), _traitName);
        }, ["each"]),
      ),
    );
  }, ["self", "traitName"]),
  "{ :self :traitName |\n\t\tsystem.typeDictionary.select { :each |\n\t\t\teach.traitNameList.includes(traitName)\n\t\t}.indices\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "uncategorisedMethods",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _select_2(
        _collect_2(
          _indices_1(_methodDictionary_1(_system)),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinusGreaterThanSign_2(
              _each,
              _categoryOf_3(_categoryDictionary_1(_system), "method", _each),
            );
          }, ["each"]),
        ),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_value_1(_each), "*Uncategorized*");
        }, ["each"]),
      ),
      _key_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.methodDictionary.indices.collect { :each |\n\t\t\teach -> system.categoryDictionary.categoryOf('method', each)\n\t\t}.select { :each |\n\t\t\teach.value = '*Uncategorized*'\n\t\t}.collect(key:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Reflection",
  "respondsTo",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _typeMethodDictionary_2(_system, _typeOf_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_qualifiedName_1(_each), _name_1(_aBlock));
      }, ["each"]),
    );
  }, ["self", "aBlock"]),
  "{ :self :aBlock |\n\t\tsystem.typeMethodDictionary(self.typeOf).anySatisfy { :each |\n\t\t\teach.qualifiedName = aBlock.name\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Reflection",
  "operatorPrecedence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_splOperatorPrecedenceTable_1(_system), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.splOperatorPrecedenceTable.at(self)\n\t}",
);
