/* {- Requires: System -} */

sl.addMethod(
  "System",
  "Reflection",
  "addAllTraitMethodsTo",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_values_1(_traitDictionary_1(_system)), function (_trait) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _trait";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_values_1(_methodDictionary_1(_trait)), function (_method) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _method";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_aCollection, _method);
      });
    });
  },
  "{ :self :aCollection |\n\t\tsystem.traitDictionary.values.do { :trait |\n\t\t\ttrait.methodDictionary.values.do { :method |\n\t\t\t\taCollection.add(method)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "addAllTypeMethodsTo",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_values_1(_typeDictionary_1(_system)), function (_trait) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _trait";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_values_1(_methodDictionary_1(_trait)), function (_method) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _method";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_aCollection, _method);
      });
    });
  },
  "{ :self :aCollection |\n\t\tsystem.typeDictionary.values.do { :trait |\n\t\t\ttrait.methodDictionary.values.do { :method |\n\t\t\t\taCollection.add(method)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "allMethods",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _addAllTraitMethodsTo_2(_system, _answer);
    _addAllTypeMethodsTo_2(_system, _answer);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tsystem.addAllTraitMethodsTo(answer);\n\t\tsystem.addAllTypeMethodsTo(answer);\n\t\tanswer\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "doesTraitImplementMethod",
  ["self", "traitName", "methodName"],
  function (_self, _traitName, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _traitName, _methodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _anySatisfy_2(
      _methodDictionary_1(_traitLookup_2(_self, _traitName)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_name_1(_each), _methodName);
      },
    );
  },
  "{ :self :traitName :methodName |\n\t\tself.traitLookup(traitName).methodDictionary.anySatisfy { :each |\n\t\t\teach.name = methodName\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "doesTypeImplementMethod",
  ["self", "typeName", "methodName"],
  function (_self, _typeName, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _typeName, _methodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _anySatisfy_2(
      _methodDictionary_1(_typeLookup_2(_self, _typeName)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_name_1(_each), _methodName);
      },
    );
  },
  "{ :self :typeName :methodName |\n\t\tself.typeLookup(typeName).methodDictionary.anySatisfy { :each |\n\t\t\teach.name = methodName\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "isMethodName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includes_2(_indices_1(_methodDictionary_1(_self)), _aString);
  },
  "{ :self :aString |\n\t\tself.methodDictionary.indices.includes(aString)\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "isTraitName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includesIndex_2(_traitDictionary_1(_self), _aString);
  },
  "{ :self :aString |\n\t\tself.traitDictionary.includesIndex(aString)\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "isTraitOrTypeName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_isTraitName_2(_self, _aString), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isTypeName_2(_self, _aString);
    });
  },
  "{ :self :aString |\n\t\tself.isTraitName(aString) | {\n\t\t\tself.isTypeName(aString)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "isTypeName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includesIndex_2(_typeDictionary_1(_self), _aString);
  },
  "{ :self :aString |\n\t\tself.typeDictionary.includesIndex(aString)\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodArities",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_at_2(_methodDictionary_1(_self), _methodName));
  },
  "{ :self :methodName |\n\t\t{- Arities methodName is implemented for. -}\n\t\tself.methodDictionary[methodName].indices\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _allMethods_1(_self);
  },
  "{ :self |\n\t\tself.allMethods\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _do_2(_traitDictionary_1(_self), function (_aTrait) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aTrait";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_methodDictionary_1(_aTrait), function (_aMethod) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aMethod";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_aMethod);
      });
    });
    return _do_2(_typeDictionary_1(_self), function (_aType) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aType";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_methodDictionary_1(_aType), function (_aMethod) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aMethod";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_aMethod);
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.traitDictionary.do { :aTrait |\n\t\t\taTrait.methodDictionary.do { :aMethod |\n\t\t\t\taMethod.aBlock\n\t\t\t}\n\t\t};\n\t\tself.typeDictionary.do { :aType |\n\t\t\taType.methodDictionary.do { :aMethod |\n\t\t\t\taMethod.aBlock\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodImplementations",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isMethodName_2(_self, _methodName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _Set_0();
      let _table = _at_2(_methodDictionary_1(_self), _methodName);
      /* Statements */
      _do_2(_table, function (_dictionary) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _dictionary";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _do_2(_dictionary, function (_method) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _method";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _basicInclude_2(_answer, _method);
        });
      });
      return _asList_1(_answer);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2(
          "System>>methodImplementations: not a methodName: ",
          _methodName,
        ),
      );
    });
  },
  "{ :self :methodName |\n\t\t{- Implementations of methodName. -}\n\t\tself.isMethodName(methodName).if {\n\t\t\tlet answer = Set();\n\t\t\tlet table = self.methodDictionary[methodName];\n\t\t\ttable.do { :dictionary |\n\t\t\t\tdictionary.do { :method |\n\t\t\t\t\tanswer.basicInclude(method)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer.asList\n\t\t} {\n\t\t\tself.error('System>>methodImplementations: not a methodName: ' ++ methodName)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodImplementors",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _methodImplementations_2(_system, _methodName),
      _origin_1,
    );
  },
  "{ :self :methodName |\n\t\tsystem.methodImplementations(methodName).collect(origin:/1)\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodLookupAtSignature",
  ["self", "signature"],
  function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym52 = _assertIsOfSize_2(_parseMethodSignature_1(_signature), 2),
      _qualifiedOriginName = _at_2(__genSym52, 1),
      _qualifiedMethodName = _at_2(__genSym52, 2);
    /* Statements */
    return _if_3(_isQualifiedTraitName_1(_qualifiedOriginName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(
        _methodDictionary_1(
          _at_2(_typeDictionary_1(_self), _qualifiedOriginName),
        ),
        _qualifiedMethodName,
      );
    });
  },
  "{ :self :signature |\n\t\tlet [qualifiedOriginName, qualifiedMethodName] = signature.parseMethodSignature;\n\t\tqualifiedOriginName.isQualifiedTraitName.if {\n\t\t\tself.traitDictionary[\n\t\t\t\tqualifiedOriginName.parseQualifiedTraitName\n\t\t\t].methodDictionary[\n\t\t\t\tqualifiedMethodName\n\t\t\t]\n\t\t} {\n\t\t\tself.typeDictionary[\n\t\t\t\tqualifiedOriginName\n\t\t\t].methodDictionary[\n\t\t\t\tqualifiedMethodName\n\t\t\t]\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodLookupAtType",
  ["self", "methodName", "arity", "typeName"],
  function (_self, _methodName, _arity, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _methodName, _arity, _typeName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(
      _at_2(_at_2(_methodDictionary_1(_self), _methodName), _arity),
      _typeName,
    );
  },
  "{ :self :methodName :arity :typeName |\n\t\tself.methodDictionary[methodName][arity][typeName]\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodPrintString",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_methodImplementations_2(_self, _methodName), function (_method) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _method";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(
        _answer,
        _join_1([
          "+ ",
          _qualifiedName_1(_origin_1(_method)),
          " {\n\t",
          _name_1(_method),
          " ",
          _sourceCode_1(_method),
          "\n}",
        ]),
      );
    });
    return _answer;
  },
  "{ :self :methodName |\n\t\t{- Print string of implementations of methodName. -}\n\t\tlet answer = [];\n\t\tself.methodImplementations(methodName).do { :method |\n\t\t\tanswer.add(\n\t\t\t\t[\n\t\t\t\t\t'+ ',\n\t\t\t\t\tmethod.origin.qualifiedName,\n\t\t\t\t\t' {\\n\\t',\n\t\t\t\t\t\tmethod.name,\n\t\t\t\t\t\t' ',\n\t\t\t\t\t\tmethod.sourceCode,\n\t\t\t\t\t'\\n}'\n\t\t\t\t].join\n\t\t\t)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodSignatures",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _methodImplementations_2(_self, _methodName),
      _signature_1,
    );
  },
  "{ :self :methodName |\n\t\t{- Signatures of each implementation of methodName. -}\n\t\tself.methodImplementations(methodName).collect(signature:/1)\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodSourceCodeSearch",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _methodDo_2(_self, function (_aMethod) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aMethod";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _includesSubstring_2(_sourceCode_1(_aMethod), _aString),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, _aMethod);
        },
      );
    });
    return _answer;
  },
  "{ :self :aString |\n\t\tlet answer = [];\n\t\tself.methodDo { :aMethod |\n\t\t\taMethod.sourceCode.includesSubstring(aString).ifTrue {\n\t\t\t\tanswer.add(aMethod)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodTraits",
  ["self", "qualifiedMethodName"],
  function (_self, _qualifiedMethodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _qualifiedMethodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_select_2(_traitDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(
        _indices_1(_methodDictionary_1(_each)),
        _qualifiedMethodName,
      );
    }));
  },
  "{ :self :qualifiedMethodName |\n\t\tself.traitDictionary.select { :each |\n\t\t\teach.methodDictionary.indices.includes(qualifiedMethodName)\n\t\t}.indices\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "methodTypes",
  ["self", "qualifiedMethodName"],
  function (_self, _qualifiedMethodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _qualifiedMethodName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_select_2(_typeDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(
        _indices_1(_methodDictionary_1(_each)),
        _qualifiedMethodName,
      );
    }));
  },
  "{ :self :qualifiedMethodName |\n\t\tself.typeDictionary.select { :each |\n\t\t\teach.methodDictionary.indices.includes(qualifiedMethodName)\n\t\t}.indices\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "multipleArityMethodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(
      _indices_1(_methodDictionary_1(_self)),
      function (_methodName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _methodName";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(
          _size_1(_methodArities_2(_self, _methodName)),
          1,
        );
      },
    );
  },
  "{ :self |\n\t\tself.methodDictionary.indices.select { :methodName |\n\t\t\tself.methodArities(methodName).size > 1\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "onlyZeroArityMethodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(
      _indices_1(_methodDictionary_1(_self)),
      function (_methodName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _methodName";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_methodArities_2(_self, _methodName), [0]);
      },
    );
  },
  "{ :self |\n\t\t{- Methods implemented by typeName. -}\n\t\tself.methodDictionary.indices.select { :methodName |\n\t\t\tself.methodArities(methodName) = [0]\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "packageMethods",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _methodDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _equalsSign_2(_packageName_1(_each), _packageName),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, _each);
        },
      );
    });
    return _answer;
  },
  "{ :self :packageName |\n\t\tlet answer = [];\n\t\tself.methodDo { :each |\n\t\t\t(each.packageName = packageName).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "packageTypes",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_typeDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_packageName_1(_each), _packageName);
    });
  },
  "{ :self :packageName |\n\t\tself.typeDictionary.select { :each |\n\t\t\teach.packageName = packageName\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "packageTraits",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _values_1(_select_2(_traitDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_packageName_1(_each), _packageName);
    }));
  },
  "{ :self :packageName |\n\t\tself.traitDictionary.select { :each |\n\t\t\teach.packageName = packageName\n\t\t}.values\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "packageTypes",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _values_1(_select_2(_typeDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_packageName_1(_each), _packageName);
    }));
  },
  "{ :self :packageName |\n\t\tself.typeDictionary.select { :each |\n\t\t\teach.packageName = packageName\n\t\t}.values\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "traitLookup",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTraitName_2(_self, _traitName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_traitDictionary_1(_self), _traitName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("System>>traitLookup: no such trait: ", _traitName),
      );
    });
  },
  "{ :self :traitName |\n\t\tself.isTraitName(traitName).if {\n\t\t\tself.traitDictionary[traitName]\n\t\t} {\n\t\t\tself.error('System>>traitLookup: no such trait: ' ++ traitName)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "traitMethods",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _values_1(_methodDictionary_1(_traitLookup_2(_self, _traitName)));
  },
  "{ :self :traitName |\n\t\tself.traitLookup(traitName).methodDictionary.values\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "traitOrType",
  ["self", "traitOrTypeName"],
  function (_self, _traitOrTypeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitOrTypeName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTypeName_2(_self, _traitOrTypeName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_typeDictionary_1(_self), _traitOrTypeName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isTraitName_2(_self, _traitOrTypeName), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_traitDictionary_1(_self), _traitOrTypeName);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
  "{ :self :traitOrTypeName |\n\t\tself.isTypeName(traitOrTypeName).if {\n\t\t\tself.typeDictionary[traitOrTypeName]\n\t\t} {\n\t\t\tself.isTraitName(traitOrTypeName).if {\n\t\t\t\tself.traitDictionary[traitOrTypeName]\n\t\t\t} {\n\t\t\t\tself.error('System>>traitOrType: not such trait or type: ' ++ traitOrTypeName)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "traitTypes",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTraitName_2(_self, _traitName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _typesImplementingTrait_2(_self, _traitName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("System>>traitTypes: no such trait: ", _traitName),
      );
    });
  },
  "{ :self :traitName |\n\t\tself.isTraitName(traitName).if {\n\t\t\tself.typesImplementingTrait(traitName)\n\t\t} {\n\t\t\tself.error('System>>traitTypes: no such trait: ' ++ traitName)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "typeDirectMethodDictionary",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _methodDictionary_1(_typeLookup_2(_self, _typeName));
  },
  "{ :self :typeName |\n\t\t{- Methods implemented directly at typeName. -}\n\t\tself.typeLookup(typeName).methodDictionary\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "typeInheritedMethodDictionary",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = Object.fromEntries([]);
    /* Statements */
    _do_2(
      _traitNameList_1(_typeLookup_2(_self, _typeName)),
      function (_traitName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _traitName";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _valuesDo_2(
          _methodDictionary_1(_traitLookup_2(_self, _traitName)),
          function (_method) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _method";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _atPut_3(_answer, _qualifiedName_1(_method), _method);
          },
        );
      },
    );
    return _answer;
  },
  "{ :self :typeName |\n\t\t{- Methods inherited from Traits at typeName, most specific only. -}\n\t\tlet answer = ();\n\t\tself.typeLookup(typeName).traitNameList.do { :traitName |\n\t\t\tself.traitLookup(traitName).methodDictionary.valuesDo { :method |\n\t\t\t\tanswer[method.qualifiedName] := method\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "typeLookup",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTypeName_2(_self, _typeName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_typeDictionary_1(_self), _typeName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("System>>typeLookup: not a type: ", _typeName),
      );
    });
  },
  "{ :self :typeName |\n\t\tself.isTypeName(typeName).if {\n\t\t\tself.typeDictionary[typeName]\n\t\t} {\n\t\t\tself.error('System>>typeLookup: not a type: ' ++ typeName)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "typeMethodDictionary",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _typeInheritedMethodDictionary_2(_self, _typeName),
      _typeDirectMethodDictionary_2(_self, _typeName),
    );
  },
  "{ :self :typeName |\n\t\tself.typeInheritedMethodDictionary(typeName) ++ self.typeDirectMethodDictionary(typeName)\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "typeTraits",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _traitNameList_1(_typeLookup_2(_self, _typeName));
  },
  "{ :self :typeName |\n\t\tself.typeLookup(typeName).traitNameList\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "typesImplementingTrait",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_select_2(_typeDictionary_1(_system), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_traitNameList_1(_each), _traitName);
    }));
  },
  "{ :self :traitName |\n\t\tsystem.typeDictionary.select { :each |\n\t\t\teach.traitNameList.includes(traitName)\n\t\t}.indices\n\t}",
);

sl.addMethod(
  "System",
  "Reflection",
  "uncategorisedMethods",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _select_2(
        _collect_2(_indices_1(_methodDictionary_1(_system)), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _hyphenMinusGreaterThanSign_2(
            _each,
            _categoryOf_3(_categoryDictionary_1(_system), "method", _each),
          );
        }),
        function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_value_1(_each), "*Uncategorized*");
        },
      ),
      _key_1,
    );
  },
  "{ :self |\n\t\tsystem.methodDictionary.indices.collect { :each |\n\t\t\teach -> system.categoryDictionary.categoryOf('method', each)\n\t\t}.select { :each |\n\t\t\teach.value = '*Uncategorized*'\n\t\t}.collect(key:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Reflection",
  "respondsTo",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _anySatisfy_2(
      _typeMethodDictionary_2(_system, _typeOf_1(_self)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_qualifiedName_1(_each), _name_1(_aBlock));
      },
    );
  },
  "{ :self :aBlock |\n\t\tsystem.typeMethodDictionary(self.typeOf).anySatisfy { :each |\n\t\t\teach.qualifiedName = aBlock.name\n\t\t}\n\t}",
);
