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
  "{ :self :aCollection | do(values(traitDictionary(system)), { :trait | do(values(methodDictionary(trait)), { :method | add(aCollection,method) }) }) }",
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
  "{ :self :aCollection | do(values(typeDictionary(system)), { :trait | do(values(methodDictionary(trait)), { :method | add(aCollection,method) }) }) }",
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
  "{ :self | let answer = []; addAllTraitMethodsTo(system,answer); addAllTypeMethodsTo(system,answer); answer }",
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
  "{ :self :traitName :methodName | anySatisfy(methodDictionary(traitLookup(self,traitName)), { :each | =(name(each), methodName) }) }",
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
  "{ :self :typeName :methodName | anySatisfy(methodDictionary(typeLookup(self,typeName)), { :each | =(name(each), methodName) }) }",
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
  "{ :self :aString | includes(indices(methodDictionary(self)),aString) }",
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
  "{ :self :aString | includesIndex(traitDictionary(self),aString) }",
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
  "{ :self :aString | |(isTraitName(self,aString), { isTypeName(self,aString) }) }",
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
  "{ :self :aString | includesIndex(typeDictionary(self),aString) }",
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
  "{ :self :methodName | indices(at(methodDictionary(self), methodName)) }",
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
  "{ :self | allMethods(self) }",
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
  "{ :self :aBlock:/1 | do(traitDictionary(self), { :aTrait | do(methodDictionary(aTrait), { :aMethod | aBlock(aMethod) }) }); do(typeDictionary(self), { :aType | do(methodDictionary(aType), { :aMethod | aBlock(aMethod) }) }) }",
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
  "{ :self :methodName | if(isMethodName(self,methodName), { let answer = IdentitySet(); let table = at(methodDictionary(self), methodName); do(table, { :dictionary | do(dictionary, { :method | uncheckedInclude(answer,method) }) }); asList(answer) }, { error(self,++('System>>methodImplementations: not a methodName: ', methodName)) }) }",
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
  "{ :self :methodName | collect(methodImplementations(system,methodName),origin:/1) }",
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
    let __SPL17 = _assertIsOfSize_2(_parseMethodSignature_1(_signature), 2);
    let _qualifiedOriginName = _at_2(__SPL17, 1);
    let _qualifiedMethodName = _at_2(__SPL17, 2);
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
  "{ :self :signature | let __SPL17 = assertIsOfSize(parseMethodSignature(signature), 2); let qualifiedOriginName = at(__SPL17, 1); let qualifiedMethodName = at(__SPL17, 2); if(isQualifiedTraitName(qualifiedOriginName), { at(methodDictionary(at(traitDictionary(self), parseQualifiedTraitName(qualifiedOriginName))), qualifiedMethodName) }, { at(methodDictionary(at(typeDictionary(self), qualifiedOriginName)), qualifiedMethodName) }) }",
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
  "{ :self :methodName :arity :typeName | at(at(at(methodDictionary(self), methodName), arity), typeName) }",
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
  "{ :self :methodName | let answer = []; do(methodImplementations(self,methodName), { :method | add(answer,format('+ %{\\n\\t% %\\n}',[qualifiedName(origin(method)), name(method), sourceCode(method)])) }); answer }",
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
  "{ :self :methodName | collect(methodImplementations(self,methodName),signature:/1) }",
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
  "{ :self :aString | let answer = []; methodDo(self, { :aMethod | ifTrue(includesSubstring(sourceCode(aMethod),aString), { add(answer,aMethod) }) }); answer }",
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
  "{ :self :qualifiedMethodName | indices(select(traitDictionary(self), { :each | includes(indices(methodDictionary(each)),qualifiedMethodName) })) }",
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
  "{ :self :qualifiedMethodName | indices(select(typeDictionary(self), { :each | includes(indices(methodDictionary(each)),qualifiedMethodName) })) }",
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
  "{ :self | select(indices(methodDictionary(self)), { :methodName | >(size(methodArities(self,methodName)), 1) }) }",
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
  "{ :self | select(indices(methodDictionary(self)), { :methodName | =(methodArities(self,methodName), [0]) }) }",
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
  "{ :self :packageName | let answer = []; methodDo(self, { :each | ifTrue((=(packageName(each), packageName)), { add(answer,each) }) }); answer }",
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
  "{ :self :packageName | select(typeDictionary(self), { :each | =(packageName(each), packageName) }) }",
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
  "{ :self :packageName | values(select(traitDictionary(self), { :each | =(packageName(each), packageName) })) }",
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
  "{ :self :packageName | values(select(typeDictionary(self), { :each | =(packageName(each), packageName) })) }",
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
  "{ :self :traitName | if(isTraitName(self,traitName), { at(traitDictionary(self), traitName) }, { error(self,++('System>>traitLookup: no such trait: ', traitName)) }) }",
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
  "{ :self :traitName | values(methodDictionary(traitLookup(self,traitName))) }",
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
  "{ :self :traitOrTypeName | if(isTypeName(self,traitOrTypeName), { at(typeDictionary(self), traitOrTypeName) }, { if(isTraitName(self,traitOrTypeName), { at(traitDictionary(self), traitOrTypeName) }, { error(self,++('System>>traitOrType: not such trait or type: ', traitOrTypeName)) }) }) }",
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
  "{ :self :traitName | let unqualifiedTraitName = parseQualifiedTraitName(traitName); if(isTraitName(self,unqualifiedTraitName), { typesImplementingTrait(self,unqualifiedTraitName) }, { error(self,++('System>>traitTypes: no such trait: ', traitName)) }) }",
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
  "{ :self :typeName | methodDictionary(typeLookup(self,typeName)) }",
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
  "{ :self :typeName | let answer = Record(); do(traitNameList(typeLookup(self,typeName)), { :traitName | valuesDo(methodDictionary(traitLookup(self,traitName)), { :method | atPut(answer, qualifiedName(method), method) }) }); answer }",
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
  "{ :self :typeName | if(isTypeName(self,typeName), { at(typeDictionary(self), typeName) }, { error(self,++('System>>typeLookup: not a type: ', typeName)) }) }",
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
  "{ :self :typeName | ++(typeInheritedMethodDictionary(self,typeName), typeDirectMethodDictionary(self,typeName)) }",
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
  "{ :self :typeName | traitNameList(typeLookup(self,typeName)) }",
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
  "{ :self :traitName | indices(select(typeDictionary(system), { :each | includes(traitNameList(each),traitName) })) }",
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
  "{ :self | collect(select(collect(indices(methodDictionary(system)), { :each | ->(each, categoryOf(categoryDictionary(system),'method', each)) }), { :each | =(value(each), '*Uncategorized*') }),key:/1) }",
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
  "{ :self :aBlock | anySatisfy(typeMethodDictionary(system,typeOf(self)), { :each | =(qualifiedName(each), name(aBlock)) }) }",
);
