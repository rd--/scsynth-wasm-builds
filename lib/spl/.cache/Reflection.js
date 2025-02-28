/*  Requires: System  */

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "addAllTraitMethodsTo",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_values_1(_traitDictionary_1(_system)), function (_trait) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _trait";
        throw new Error(errorMessage);
      } /* Statements */
      return _do_2(_values_1(_methodDictionary_1(_trait)), function (_method) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _method";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_aCollection, _method);
      });
    });
  },
  "{ :self :aCollection | do(values(traitDictionary(system)), { :trait | do(values(methodDictionary(trait)), { :method | add(aCollection,method) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "addAllTypeMethodsTo",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_values_1(_typeDictionary_1(_system)), function (_trait) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _trait";
        throw new Error(errorMessage);
      } /* Statements */
      return _do_2(_values_1(_methodDictionary_1(_trait)), function (_method) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _method";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_aCollection, _method);
      });
    });
  },
  "{ :self :aCollection | do(values(typeDictionary(system)), { :trait | do(values(methodDictionary(trait)), { :method | add(aCollection,method) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "allMethods",
  ["self"],
  function (_self) {
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
  },
  "{ :self | let answer = []; addAllTraitMethodsTo(system,answer); addAllTypeMethodsTo(system,answer); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "doesTraitImplementMethod",
  ["self", "traitName", "methodName"],
  function (_self, _traitName, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _traitName, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _methodDictionary_1(_traitLookup_2(_self, _traitName)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_name_1(_each), _methodName);
      },
    );
  },
  "{ :self :traitName :methodName | anySatisfy(methodDictionary(traitLookup(self,traitName)), { :each | =(name(each), methodName) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "doesTypeImplementMethod",
  ["self", "typeName", "methodName"],
  function (_self, _typeName, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _typeName, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _methodDictionary_1(_typeLookup_2(_self, _typeName)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_name_1(_each), _methodName);
      },
    );
  },
  "{ :self :typeName :methodName | anySatisfy(methodDictionary(typeLookup(self,typeName)), { :each | =(name(each), methodName) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "isMethodName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_indices_1(_methodDictionary_1(_self)), _aString);
  },
  "{ :self :aString | includes(indices(methodDictionary(self)),aString) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "isTraitName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_traitDictionary_1(_self), _aString);
  },
  "{ :self :aString | includesIndex(traitDictionary(self),aString) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "isTraitOrTypeName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_isTraitName_2(_self, _aString), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isTypeName_2(_self, _aString);
    });
  },
  "{ :self :aString | |(isTraitName(self,aString), { isTypeName(self,aString) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "isTypeName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_typeDictionary_1(_self), _aString);
  },
  "{ :self :aString | includesIndex(typeDictionary(self),aString) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodArities",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_at_2(_methodDictionary_1(_self), _methodName));
  },
  "{ :self :methodName | indices(at(methodDictionary(self), methodName)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allMethods_1(_self);
  },
  "{ :self | allMethods(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_traitDictionary_1(_self), function (_aTrait) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aTrait";
        throw new Error(errorMessage);
      } /* Statements */
      return _do_2(_methodDictionary_1(_aTrait), function (_aMethod) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aMethod";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_aMethod);
      });
    });
    return _do_2(_typeDictionary_1(_self), function (_aType) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aType";
        throw new Error(errorMessage);
      } /* Statements */
      return _do_2(_methodDictionary_1(_aType), function (_aMethod) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aMethod";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_aMethod);
      });
    });
  },
  "{ :self :aBlock:/1 | do(traitDictionary(self), { :aTrait | do(methodDictionary(aTrait), { :aMethod | aBlock(aMethod) }) }); do(typeDictionary(self), { :aType | do(methodDictionary(aType), { :aMethod | aBlock(aMethod) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodImplementations",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isMethodName_2(_self, _methodName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = _IdentitySet_0();
      let _table = _at_2(_methodDictionary_1(_self), _methodName);
      /* Statements */
      _do_2(_table, function (_dictionary) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _dictionary";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(_dictionary, function (_method) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _method";
            throw new Error(errorMessage);
          } /* Statements */
          return _basicInclude_2(_answer, _method);
        });
      });
      return _asList_1(_answer);
    }, function () {
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
    });
  },
  "{ :self :methodName | if(isMethodName(self,methodName), { let answer = IdentitySet(); let table = at(methodDictionary(self), methodName); do(table, { :dictionary | do(dictionary, { :method | basicInclude(answer,method) }) }); asList(answer) }, { error(self,++('System>>methodImplementations: not a methodName: ', methodName)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodImplementors",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _methodImplementations_2(_system, _methodName),
      _origin_1,
    );
  },
  "{ :self :methodName | collect(methodImplementations(system,methodName),origin:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodLookupAtSignature",
  ["self", "signature"],
  function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL253 = _assertIsOfSize_2(_parseMethodSignature_1(_signature), 2);
    let _qualifiedOriginName = _at_2(__SPL253, 1);
    let _qualifiedMethodName = _at_2(__SPL253, 2);
    /* Statements */
    return _if_3(_isQualifiedTraitName_1(_qualifiedOriginName), function () {
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
    }, function () {
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
    });
  },
  "{ :self :signature | let __SPL253 = assertIsOfSize(parseMethodSignature(signature), 2); let qualifiedOriginName = at(__SPL253, 1); let qualifiedMethodName = at(__SPL253, 2); if(isQualifiedTraitName(qualifiedOriginName), { at(methodDictionary(at(traitDictionary(self), parseQualifiedTraitName(qualifiedOriginName))), qualifiedMethodName) }, { at(methodDictionary(at(typeDictionary(self), qualifiedOriginName)), qualifiedMethodName) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodLookupAtType",
  ["self", "methodName", "arity", "typeName"],
  function (_self, _methodName, _arity, _typeName) {
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
  },
  "{ :self :methodName :arity :typeName | at(at(at(methodDictionary(self), methodName), arity), typeName) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodPrintString",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_methodImplementations_2(_self, _methodName), function (_method) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _method";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(
        _answer,
        _join_2([
          "+ ",
          _qualifiedName_1(_origin_1(_method)),
          " {\n\t",
          _name_1(_method),
          " ",
          _sourceCode_1(_method),
          "\n}",
        ], ""),
      );
    });
    return _answer;
  },
  "{ :self :methodName | let answer = []; do(methodImplementations(self,methodName), { :method | add(answer,join(['+ ', qualifiedName(origin(method)), ' {\\n\\t', name(method), ' ', sourceCode(method), '\\n}'],'')) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodSignatures",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _methodImplementations_2(_self, _methodName),
      _signature_1,
    );
  },
  "{ :self :methodName | collect(methodImplementations(self,methodName),signature:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodSourceCodeSearch",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _methodDo_2(_self, function (_aMethod) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aMethod";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(
        _includesSubstring_2(_sourceCode_1(_aMethod), _aString),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(_answer, _aMethod);
        },
      );
    });
    return _answer;
  },
  "{ :self :aString | let answer = []; methodDo(self, { :aMethod | ifTrue(includesSubstring(sourceCode(aMethod),aString), { add(answer,aMethod) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodTraits",
  ["self", "qualifiedMethodName"],
  function (_self, _qualifiedMethodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _qualifiedMethodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_select_2(_traitDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(
        _indices_1(_methodDictionary_1(_each)),
        _qualifiedMethodName,
      );
    }));
  },
  "{ :self :qualifiedMethodName | indices(select(traitDictionary(self), { :each | includes(indices(methodDictionary(each)),qualifiedMethodName) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "methodTypes",
  ["self", "qualifiedMethodName"],
  function (_self, _qualifiedMethodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _qualifiedMethodName";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_select_2(_typeDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(
        _indices_1(_methodDictionary_1(_each)),
        _qualifiedMethodName,
      );
    }));
  },
  "{ :self :qualifiedMethodName | indices(select(typeDictionary(self), { :each | includes(indices(methodDictionary(each)),qualifiedMethodName) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "multipleArityMethodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _indices_1(_methodDictionary_1(_self)),
      function (_methodName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _methodName";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(
          _size_1(_methodArities_2(_self, _methodName)),
          1,
        );
      },
    );
  },
  "{ :self | select(indices(methodDictionary(self)), { :methodName | >(size(methodArities(self,methodName)), 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "onlyZeroArityMethodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _indices_1(_methodDictionary_1(_self)),
      function (_methodName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _methodName";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_methodArities_2(_self, _methodName), [0]);
      },
    );
  },
  "{ :self | select(indices(methodDictionary(self)), { :methodName | =(methodArities(self,methodName), [0]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "packageMethods",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _methodDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(
        _equalsSign_2(_packageName_1(_each), _packageName),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(_answer, _each);
        },
      );
    });
    return _answer;
  },
  "{ :self :packageName | let answer = []; methodDo(self, { :each | ifTrue((=(packageName(each), packageName)), { add(answer,each) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "packageTypes",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_typeDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_packageName_1(_each), _packageName);
    });
  },
  "{ :self :packageName | select(typeDictionary(self), { :each | =(packageName(each), packageName) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "packageTraits",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(_select_2(_traitDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_packageName_1(_each), _packageName);
    }));
  },
  "{ :self :packageName | values(select(traitDictionary(self), { :each | =(packageName(each), packageName) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "packageTypes",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(_select_2(_typeDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_packageName_1(_each), _packageName);
    }));
  },
  "{ :self :packageName | values(select(typeDictionary(self), { :each | =(packageName(each), packageName) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "traitLookup",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isTraitName_2(_self, _traitName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_traitDictionary_1(_self), _traitName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("System>>traitLookup: no such trait: ", _traitName),
      );
    });
  },
  "{ :self :traitName | if(isTraitName(self,traitName), { at(traitDictionary(self), traitName) }, { error(self,++('System>>traitLookup: no such trait: ', traitName)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "traitMethods",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(_methodDictionary_1(_traitLookup_2(_self, _traitName)));
  },
  "{ :self :traitName | values(methodDictionary(traitLookup(self,traitName))) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "traitOrType",
  ["self", "traitOrTypeName"],
  function (_self, _traitOrTypeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitOrTypeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isTypeName_2(_self, _traitOrTypeName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_typeDictionary_1(_self), _traitOrTypeName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isTraitName_2(_self, _traitOrTypeName), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_traitDictionary_1(_self), _traitOrTypeName);
      }, function () {
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
      });
    });
  },
  "{ :self :traitOrTypeName | if(isTypeName(self,traitOrTypeName), { at(typeDictionary(self), traitOrTypeName) }, { if(isTraitName(self,traitOrTypeName), { at(traitDictionary(self), traitOrTypeName) }, { error(self,++('System>>traitOrType: not such trait or type: ', traitOrTypeName)) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "traitTypes",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isTraitName_2(_self, _traitName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _typesImplementingTrait_2(_self, _traitName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("System>>traitTypes: no such trait: ", _traitName),
      );
    });
  },
  "{ :self :traitName | if(isTraitName(self,traitName), { typesImplementingTrait(self,traitName) }, { error(self,++('System>>traitTypes: no such trait: ', traitName)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeDirectMethodDictionary",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _methodDictionary_1(_typeLookup_2(_self, _typeName));
  },
  "{ :self :typeName | methodDictionary(typeLookup(self,typeName)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeInheritedMethodDictionary",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Record_1([]);
    /* Statements */
    _do_2(
      _traitNameList_1(_typeLookup_2(_self, _typeName)),
      function (_traitName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _traitName";
          throw new Error(errorMessage);
        } /* Statements */
        return _valuesDo_2(
          _methodDictionary_1(_traitLookup_2(_self, _traitName)),
          function (_method) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _method";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_answer, _qualifiedName_1(_method), _method);
          },
        );
      },
    );
    return _answer;
  },
  "{ :self :typeName | let answer = Record([]); do(traitNameList(typeLookup(self,typeName)), { :traitName | valuesDo(methodDictionary(traitLookup(self,traitName)), { :method | atPut(answer, qualifiedName(method), method) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeLookup",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isTypeName_2(_self, _typeName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_typeDictionary_1(_self), _typeName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("System>>typeLookup: not a type: ", _typeName),
      );
    });
  },
  "{ :self :typeName | if(isTypeName(self,typeName), { at(typeDictionary(self), typeName) }, { error(self,++('System>>typeLookup: not a type: ', typeName)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeMethodDictionary",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _typeInheritedMethodDictionary_2(_self, _typeName),
      _typeDirectMethodDictionary_2(_self, _typeName),
    );
  },
  "{ :self :typeName | ++(typeInheritedMethodDictionary(self,typeName), typeDirectMethodDictionary(self,typeName)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typeTraits",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Statements */
    return _traitNameList_1(_typeLookup_2(_self, _typeName));
  },
  "{ :self :typeName | traitNameList(typeLookup(self,typeName)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "typesImplementingTrait",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_select_2(_typeDictionary_1(_system), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_traitNameList_1(_each), _traitName);
    }));
  },
  "{ :self :traitName | indices(select(typeDictionary(system), { :each | includes(traitNameList(each),traitName) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Reflection",
  "uncategorisedMethods",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _select_2(
        _collect_2(_indices_1(_methodDictionary_1(_system)), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinusGreaterThanSign_2(
            _each,
            _categoryOf_3(_categoryDictionary_1(_system), "method", _each),
          );
        }),
        function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_value_1(_each), "*Uncategorized*");
        },
      ),
      _key_1,
    );
  },
  "{ :self | collect(select(collect(indices(methodDictionary(system)), { :each | ->(each, categoryOf(categoryDictionary(system),'method', each)) }), { :each | =(value(each), '*Uncategorized*') }),key:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Reflection",
  "respondsTo",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _typeMethodDictionary_2(_system, _typeOf_1(_self)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_qualifiedName_1(_each), _name_1(_aBlock));
      },
    );
  },
  "{ :self :aBlock | anySatisfy(typeMethodDictionary(system,typeOf(self)), { :each | =(qualifiedName(each), name(aBlock)) }) }",
);
