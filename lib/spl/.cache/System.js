sl.addType(
  true,
  "System",
  "System",
  ["Object", "Cache", "Indexable", "Random"],
  [],
);

sl.copyTraitToType(
  "Object",
  "System",
);

sl.copyTraitToType(
  "Cache",
  "System",
);

sl.copyTraitToType(
  "Indexable",
  "System",
);

sl.copyTraitToType(
  "Random",
  "System",
);

sl.addMethod(
  "System",
  "System",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "addAllTraitMethodsTo",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_values_1(_traitDictionary_1(_system)), function (_trait) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _trait";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _do_2(_values_1(_methodDictionary_1(_trait)), function (_method) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _method";
          console.error(errorMessage);
          throw Error(errorMessage);
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
  "System",
  "addAllTypeMethodsTo",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_values_1(_typeDictionary_1(_system)), function (_trait) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _trait";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _do_2(_values_1(_methodDictionary_1(_trait)), function (_method) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _method";
          console.error(errorMessage);
          throw Error(errorMessage);
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
  "System",
  "allMethods",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
  "System",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_globalDictionary_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.globalDictionary[index]\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "atPut",
  ["self", "key", "anObject"],
  function (_self, _key, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_globalDictionary_1(_self), _key, _anObject);
  },
  "{ :self :key :anObject |\n\t\tself.globalDictionary[key] := anObject\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "cache",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.cache;
  },
  "{ :self |\n\t\t<primitive: return _self.cache;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleClear",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    console.clear;
    return null;
  },
  "{ :self |\n\t\t<primitive:\n\t\tconsole.clear;\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleError",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    console.error(_message);
    return null;
  },
  "{ :self :message |\n\t\t<primitive:\n\t\tconsole.error(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleNotification",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    console.log(_message);
    return null;
  },
  "{ :self :message |\n\t\t<primitive:\n\t\tconsole.log(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleWarning",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    console.warn(_message);
    return null;
  },
  "{ :self :message |\n\t\t<primitive:\n\t\tconsole.warn(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "doesTraitImplementMethod",
  ["self", "traitName", "methodName"],
  function (_self, _traitName, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _traitName, _methodName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _anySatisfy_2(
      _methodDictionary_1(_traitLookup_2(_self, _traitName)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
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
  "System",
  "doesTypeImplementMethod",
  ["self", "typeName", "methodName"],
  function (_self, _typeName, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _typeName, _methodName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _anySatisfy_2(
      _methodDictionary_1(_typeLookup_2(_self, _typeName)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
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
  "System",
  "evaluateOrSignalError",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sl.evaluateForSignalling("*Interactive*", _aString);
  },
  "{ :self :aString |\n\t\t<primitive: return sl.evaluateForSignalling('*Interactive*', _aString);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "evaluateNotifying",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifError_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _evaluateOrSignalError_2(_self, _aString);
    }, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_err);
    });
  },
  "{ :self :aString :aBlock:/1 |\n\t\t{ self.evaluateOrSignalError(aString) }.ifError { :err |\n\t\t\taBlock(err)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "evaluate",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _evaluateNotifying_3(_self, _aString, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _consoleError_2(_system, _err);
    });
  },
  "{ :self :aString |\n\t\tself.evaluateNotifying(aString) { :err |\n\t\t\tsystem.consoleError(err)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "fetch",
  ["self", "resource"],
  function (_self, _resource) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _resource";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return fetch(_resource);
  },
  "{ :self :resource |\n\t\t<primitive: return fetch(_resource);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "fetch",
  ["self", "resource", "options"],
  function (_self, _resource, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _resource, _options";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return fetch(_resource, _options);
  },
  "{ :self :resource :options |\n\t\t<primitive: return fetch(_resource, _options);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "fetchJson",
  ["self", "resource", "options"],
  function (_self, _resource, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _resource, _options";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fetchJson_4(_self, _resource, _options, function (_errorCode) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _errorCode";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, _plusSignPlusSign_2("fetchJson: ", _errorCode));
    });
  },
  "{ :self :resource :options |\n\t\tself.fetchJson(resource, options) { :errorCode |\n\t\t\tself.error('fetchJson: ' ++ errorCode)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "fetchJson",
  ["self", "resource", "options", "onError"],
  function (_self, _resource, _options, _onError) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _resource, _options, _onError";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_fetch_3(_self, _resource, _options), function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_ok_1(_response), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _json_1(_response);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _cull_2(_onError, _ok_1(_reponse));
      });
    });
  },
  "{ :self :resource :options :onError |\n\t\tself.fetch(resource, options).then { :response |\n\t\t\tresponse.ok.if {\n\t\t\t\tresponse.json\n\t\t\t} {\n\t\t\t\tonError.cull(reponse.ok)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "fetchMimeType",
  ["self", "resource", "mimeType", "options"],
  function (_self, _resource, _mimeType, _options) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _resource, _mimeType, _options";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fetchMimeType_5(
      _self,
      _resource,
      _mimeType,
      _options,
      function (_errorCode) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _errorCode";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("fetchMimeType: ", _errorCode),
        );
      },
    );
  },
  "{ :self :resource :mimeType :options |\n\t\tself.fetchMimeType(resource, mimeType, options) { :errorCode |\n\t\t\tself.error('fetchMimeType: ' ++ errorCode)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "fetchMimeType",
  ["self", "resource", "mimeType", "options", "onError"],
  function (_self, _resource, _mimeType, _options, _onError) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _resource, _mimeType, _options, _onError";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_fetch_3(_self, _resource, _options), function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_ok_1(_response), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _caseOfOtherwise_3(_mimeType, [
          _hyphenMinusGreaterThanSign_2("application/json", function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _json_1(_response);
          }),
          _hyphenMinusGreaterThanSign_2("text/plain", function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _text_1(_response);
          }),
        ], function (_unused) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _unused";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _cull_2(_onError, "unknown mime type");
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _cull_2(_onError, _ok_1(_reponse));
      });
    });
  },
  "{ :self :resource :mimeType :options :onError |\n\t\tself.fetch(resource, options).then { :response |\n\t\t\tresponse.ok.if {\n\t\t\t\tmimeType.caseOfOtherwise([\n\t\t\t\t\t'application/json' -> {\n\t\t\t\t\t\tresponse.json\n\t\t\t\t\t},\n\t\t\t\t\t'text/plain' -> {\n\t\t\t\t\t\tresponse.text\n\t\t\t\t\t}\n\t\t\t\t]) { :unused |\n\t\t\t\t\tonError.cull('unknown mime type')\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tonError.cull(reponse.ok)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "fetchString",
  ["self", "resource", "options"],
  function (_self, _resource, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _resource, _options";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fetchString_4(_self, _resource, _options, function (_errorCode) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _errorCode";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, _plusSignPlusSign_2("fetchString: ", _errorCode));
    });
  },
  "{ :self :resource :options |\n\t\tself.fetchString(resource, options) { :errorCode |\n\t\t\tself.error('fetchString: ' ++ errorCode)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "fetchString",
  ["self", "resource", "options", "onError"],
  function (_self, _resource, _options, _onError) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _resource, _options, _onError";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_fetch_3(_self, _resource, _options), function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_ok_1(_response), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _text_1(_response);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _cull_2(_onError, _ok_1(_response));
      });
    });
  },
  "{ :self :resource :options :onError |\n\t\tself.fetch(resource, options).then { :response |\n\t\t\tresponse.ok.if {\n\t\t\t\tresponse.text\n\t\t\t} {\n\t\t\t\tonError.cull(response.ok)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "globalDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "globalDictionary", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return Object.fromEntries([]);
    });
  },
  "{ :self |\n\t\tself.cached('globalDictionary') {\n\t\t\t()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_globalDictionary_1(_self));
  },
  "{ :self |\n\t\tself.globalDictionary.indices\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "isMethodName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _includes_2(_indices_1(_methodDictionary_1(_self)), _aString);
  },
  "{ :self :aString |\n\t\tself.methodDictionary.indices.includes(aString)\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "isTraitName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _includesIndex_2(_traitDictionary_1(_self), _aString);
  },
  "{ :self :aString |\n\t\tself.traitDictionary.includesIndex(aString)\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "isTraitOrTypeName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_isTraitName_2(_self, _aString), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _isTypeName_2(_self, _aString);
    });
  },
  "{ :self :aString |\n\t\tself.isTraitName(aString) | {\n\t\t\tself.isTypeName(aString)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "isTypeName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _includesIndex_2(_typeDictionary_1(_self), _aString);
  },
  "{ :self :aString |\n\t\tself.typeDictionary.includesIndex(aString)\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "loadFile",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    evaluateFile(_fileName);
  },
  "{ :self :fileName |\n\t\t<primitive: evaluateFile(_fileName);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "loadUrl",
  ["self", "url"],
  function (_self, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _url";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    evaluateUrl(_url);
  },
  "{ :self :url |\n\t\t<primitive: evaluateUrl(_url);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "localStorage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _localStorage_1(_window_1(_self));
  },
  "{ :self |\n\t\tself.window.localStorage\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "methodArities",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_at_2(_methodDictionary_1(_self), _methodName));
  },
  "{ :self :methodName |\n\t\t{- Arities methodName is implemented for. -}\n\t\tself.methodDictionary[methodName].indices\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "methodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allMethods_1(_self);
  },
  "{ :self |\n\t\tself.allMethods\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "methodDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.methodDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.methodDictionary;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "methodDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _do_2(_traitDictionary_1(_self), function (_aTrait) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aTrait";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _do_2(_methodDictionary_1(_aTrait), function (_aMethod) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aMethod";
          console.error(errorMessage);
          throw Error(errorMessage);
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
        throw Error(errorMessage);
      }
      /* Statements */
      return _do_2(_methodDictionary_1(_aType), function (_aMethod) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aMethod";
          console.error(errorMessage);
          throw Error(errorMessage);
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
  "System",
  "methodImplementations",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isMethodName_2(_self, _methodName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
          throw Error(errorMessage);
        }
        /* Statements */
        return _do_2(_dictionary, function (_method) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _method";
            console.error(errorMessage);
            throw Error(errorMessage);
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
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1(
        _plusSignPlusSign_2(
          "methodImplementations: not a methodName: ",
          _methodName,
        ),
      );
    });
  },
  "{ :self :methodName |\n\t\t{- Implementations of methodName. -}\n\t\tself.isMethodName(methodName).if {\n\t\t\tlet answer = Set();\n\t\t\tlet table = self.methodDictionary[methodName];\n\t\t\ttable.do { :dictionary |\n\t\t\t\tdictionary.do { :method |\n\t\t\t\t\tanswer.basicInclude(method)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer.asList\n\t\t} {\n\t\t\t('methodImplementations: not a methodName: ' ++ methodName).error\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "methodImplementors",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw Error(errorMessage);
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
  "System",
  "methodLookupAtSignature",
  ["self", "signature"],
  function (_self, _signature) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _signature";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym32 = _assertIsOfSize_2(_parseMethodSignature_1(_signature), 2),
      _qualifiedOriginName = _at_2(__genSym32, 1),
      _qualifiedMethodName = _at_2(__genSym32, 2);
    /* Statements */
    return _if_3(_isQualifiedTraitName_1(_qualifiedOriginName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
        throw Error(errorMessage);
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
  "System",
  "methodLookupAtType",
  ["self", "methodName", "arity", "typeName"],
  function (_self, _methodName, _arity, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _methodName, _arity, _typeName";
      console.error(errorMessage);
      throw Error(errorMessage);
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
  "System",
  "methodPrintString",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_methodImplementations_2(_self, _methodName), function (_method) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _method";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "System",
  "methodSignatures",
  ["self", "methodName"],
  function (_self, _methodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _methodName";
      console.error(errorMessage);
      throw Error(errorMessage);
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
  "System",
  "methodSourceCodeSearch",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _methodDo_2(_self, function (_aMethod) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aMethod";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _includesSubstring_2(_sourceCode_1(_aMethod), _aString),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
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
  "System",
  "methodTraits",
  ["self", "qualifiedMethodName"],
  function (_self, _qualifiedMethodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _qualifiedMethodName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_select_2(_traitDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "System",
  "methodTypes",
  ["self", "qualifiedMethodName"],
  function (_self, _qualifiedMethodName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _qualifiedMethodName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_select_2(_typeDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "System",
  "millisecondsToRun",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _beginTime = _systemTimeInMilliseconds_1(_self);
    /* Statements */
    _aBlock_0();
    return _hyphenMinus_2(_systemTimeInMilliseconds_1(_self), _beginTime);
  },
  "{ :self :aBlock:/0 |\n\t\tlet beginTime = self.systemTimeInMilliseconds;\n\t\taBlock();\n\t\tself.systemTimeInMilliseconds - beginTime\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "multipleArityMethodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _select_2(
      _indices_1(_methodDictionary_1(_self)),
      function (_methodName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _methodName";
          console.error(errorMessage);
          throw Error(errorMessage);
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
  "System",
  "nextUniqueId",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "nextUniqueId", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    });
  },
  "{ :self |\n\t\tself.cached('nextUniqueId') {\n\t\t\t1\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "nextUniqueId",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_cached_1(_self), "nextUniqueId", _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.cached::nextUniqueId := aNumber\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "onlyZeroArityMethodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _select_2(
      _indices_1(_methodDictionary_1(_self)),
      function (_methodName) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _methodName";
          console.error(errorMessage);
          throw Error(errorMessage);
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
  "System",
  "operatorCharacterNameTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sl.operatorCharacterNameTable;
  },
  "{ :self |\n\t\t<primitive: return sl.operatorCharacterNameTable;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "operatorNameTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _table = _operatorCharacterNameTable_1(_self);
    /* Statements */
    return _cached_3(_self, "operatorNameTable", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _asRecord_1(
        _collect_2(
          _words_1(
            "+ ++ * - -> / // & && | || < << <= <~ <=> > >> >= >~ = == ==> % ! !~ \\ \\\\ ~ ~~ ~= ~? ? ?? ^",
          ),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _hyphenMinusGreaterThanSign_2(
              _each,
              _join_1(
                _camelCase_1(
                  _collect_2(_stringList_1(_each), function (_letter) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _letter";
                      console.error(errorMessage);
                      throw Error(errorMessage);
                    }
                    /* Statements */
                    return _at_2(_table, _letter);
                  }),
                ),
              ),
            );
          },
        ),
      );
    });
  },
  "{ :self |\n\t\tlet table = self.operatorCharacterNameTable;\n\t\tself.cached('operatorNameTable') {\n\t\t\t'+ ++ * - -> / // & && | || < << <= <~ <=> > >> >= >~ = == ==> % ! !~ \\\\ \\\\\\\\ ~ ~~ ~= ~? ? ?? ^'.words.collect { :each |\n\t\t\t\teach -> each.stringList.collect { :letter |\n\t\t\t\t\ttable[letter]\n\t\t\t\t}.camelCase.join\n\t\t\t}.asRecord\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "packageDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.packageDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.packageDictionary;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "packageMethods",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _methodDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _equalsSign_2(_packageName_1(_each), _packageName),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
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
  "System",
  "packageTypes",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _select_2(_typeDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_packageName_1(_each), _packageName);
    });
  },
  "{ :self :packageName |\n\t\tself.typeDictionary.select { :each |\n\t\t\teach.packageName = packageName\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "packageTraits",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _values_1(_select_2(_traitDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_packageName_1(_each), _packageName);
    }));
  },
  "{ :self :packageName |\n\t\tself.traitDictionary.select { :each |\n\t\t\teach.packageName = packageName\n\t\t}.values\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "packageTypes",
  ["self", "packageName"],
  function (_self, _packageName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _packageName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _values_1(_select_2(_typeDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_packageName_1(_each), _packageName);
    }));
  },
  "{ :self :packageName |\n\t\tself.typeDictionary.select { :each |\n\t\t\teach.packageName = packageName\n\t\t}.values\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "postLine",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _consoleNotification_2(_system, _aString);
  },
  "{ :self :aString |\n\t\tsystem.consoleNotification(aString)\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "preference",
  ["self", "path", "defaultValue"],
  function (_self, _path, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _path, _defaultValue";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _preferencesReadPath_3(_self, _splitBy_2(_path, "/"), _defaultValue);
  },
  "{ :self :path :defaultValue |\n\t\tself.preferencesReadPath(path.splitBy('/'), defaultValue)\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "preferences",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "preferences", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return Object.fromEntries([]);
    });
  },
  "{ :self |\n\t\tself.cached('preferences') {\n\t\t\t()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "preferencesRead",
  ["self", "key", "defaultValue"],
  function (_self, _key, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _defaultValue";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sl.preferencesRead(_preferences_1(_self), _key, _defaultValue);
  },
  "{ :self :key :defaultValue |\n\t\t<primitive: return sl.preferencesRead(_preferences_1(_self), _key, _defaultValue);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "preferencesReadPath",
  ["self", "path", "defaultValue"],
  function (_self, _path, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _path, _defaultValue";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_path), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("System>>preferencesReadPath: empty path");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _item = _preferencesRead_3(_self, _at_2(_path, 1), null);
      let _index = 2;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_notNil_1(_item), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _lessThanSignEqualsSign_2(_index, _size_1(_path));
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _item = _atIfAbsent_3(_item, _at_2(_path, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return null;
        });
        return _index = _plusSign_2(_index, 1);
      });
      return _questionMark_2(_item, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _defaultValue;
      });
    });
  },
  "{ :self :path :defaultValue |\n\t\tpath.isEmpty.if {\n\t\t\t'System>>preferencesReadPath: empty path'.error\n\t\t} {\n\t\t\tlet item = self.preferencesRead(path[1], nil);\n\t\t\tlet index = 2;\n\t\t\t{\n\t\t\t\titem.notNil & {\n\t\t\t\t\tindex <= path.size\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\titem := item.atIfAbsent(path[index]) { nil };\n\t\t\t\tindex := index + 1\n\t\t\t};\n\t\t\titem ? {\n\t\t\t\tdefaultValue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [
      "cache",
      "methodDictionary",
      "traitDictionary",
      "typeDictionary",
      "packageDictionary",
      "window",
      "library",
      "transcript",
    ];
  },
  "{ :self |\n\t\t[\n\t\t\t'cache',\n\t\t\t'methodDictionary',\n\t\t\t'traitDictionary',\n\t\t\t'typeDictionary',\n\t\t\t'packageDictionary',\n\t\t\t'window',\n\t\t\t'library', {- Package -}\n\t\t\t'transcript' {- Package -}\n\t\t]\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "nextRandomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.random();
  },
  "{ :self |\n\t\t<primitive: return Math.random();>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "nextRandomFloat",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _nextRandomFloat_1(_system);
    }, _count);
  },
  "{ :self :count |\n\t\t{ system.nextRandomFloat } ! count\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "sessionStorage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sessionStorage_1(_window_1(_self));
  },
  "{ :self |\n\t\tself.window.sessionStorage\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "traitDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.traitDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.traitDictionary;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "traitLookup",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTraitName_2(_self, _traitName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _at_2(_traitDictionary_1(_self), _traitName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("trait: not a trait: ", _traitName),
      );
    });
  },
  "{ :self :traitName |\n\t\tself.isTraitName(traitName).if {\n\t\t\tself.traitDictionary[traitName]\n\t\t} {\n\t\t\tself.error('trait: not a trait: ' ++ traitName)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "traitMethods",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _values_1(_methodDictionary_1(_traitLookup_2(_self, _traitName)));
  },
  "{ :self :traitName |\n\t\tself.traitLookup(traitName).methodDictionary.values\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "traitOrType",
  ["self", "traitOrTypeName"],
  function (_self, _traitOrTypeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitOrTypeName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTypeName_2(_self, _traitOrTypeName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _at_2(_typeDictionary_1(_self), _traitOrTypeName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isTraitName_2(_self, _traitOrTypeName), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _at_2(_traitDictionary_1(_self), _traitOrTypeName);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2(
            "traitOrType: not a trait or type: ",
            _traitOrTypeName,
          ),
        );
      });
    });
  },
  "{ :self :traitOrTypeName |\n\t\tself.isTypeName(traitOrTypeName).if {\n\t\t\tself.typeDictionary[traitOrTypeName]\n\t\t} {\n\t\t\tself.isTraitName(traitOrTypeName).if {\n\t\t\t\tself.traitDictionary[traitOrTypeName]\n\t\t\t} {\n\t\t\t\tself.error('traitOrType: not a trait or type: ' ++ traitOrTypeName)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "traitTypes",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTraitName_2(_self, _traitName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _typesImplementingTrait_2(_self, _traitName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("traitTypes: not a trait: ", _traitName),
      );
    });
  },
  "{ :self :traitName |\n\t\tself.isTraitName(traitName).if {\n\t\t\tself.typesImplementingTrait(traitName)\n\t\t} {\n\t\t\tself.error('traitTypes: not a trait: ' ++ traitName)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "typeDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.typeDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.typeDictionary;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "typeDirectMethodDictionary",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _methodDictionary_1(_typeLookup_2(_self, _typeName));
  },
  "{ :self :typeName |\n\t\t{- Methods implemented directly at typeName. -}\n\t\tself.typeLookup(typeName).methodDictionary\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "typeInheritedMethodDictionary",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw Error(errorMessage);
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
          throw Error(errorMessage);
        }
        /* Statements */
        return _valuesDo_2(
          _methodDictionary_1(_traitLookup_2(_self, _traitName)),
          function (_method) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _method";
              console.error(errorMessage);
              throw Error(errorMessage);
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
  "System",
  "typeLookup",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTypeName_2(_self, _typeName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _at_2(_typeDictionary_1(_self), _typeName);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("typeLookup: not a type: ", _typeName),
      );
    });
  },
  "{ :self :typeName |\n\t\tself.isTypeName(typeName).if {\n\t\t\tself.typeDictionary[typeName]\n\t\t} {\n\t\t\tself.error('typeLookup: not a type: ' ++ typeName)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "typeMethodDictionary",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw Error(errorMessage);
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
  "System",
  "typeTraits",
  ["self", "typeName"],
  function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _traitNameList_1(_typeLookup_2(_self, _typeName));
  },
  "{ :self :typeName |\n\t\tself.typeLookup(typeName).traitNameList\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "typesImplementingTrait",
  ["self", "traitName"],
  function (_self, _traitName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _traitName";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_select_2(_typeDictionary_1(_system), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_traitNameList_1(_each), _traitName);
    }));
  },
  "{ :self :traitName |\n\t\tsystem.typeDictionary.select { :each |\n\t\t\teach.traitNameList.includes(traitName)\n\t\t}.indices\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "systemTimeInMilliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return performance.now();
  },
  "{ :self |\n\t\t<primitive: return performance.now();>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "systemTimeInSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return performance.now() * 0.001;
  },
  "{ :self |\n\t\t<primitive: return performance.now() * 0.001;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "uncategorisedMethods",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _select_2(
        _collect_2(_indices_1(_methodDictionary_1(_system)), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw Error(errorMessage);
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
            throw Error(errorMessage);
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

sl.addMethod(
  "System",
  "System",
  "uniqueId",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _cached_3(_self, "uniqueId", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    });
    /* Statements */
    _atPut_3(_cache_1(_self), "uniqueId", _plusSign_2(_answer, 1));
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.cached('uniqueId') { 1 };\n\t\tself.cache::uniqueId := answer + 1;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "unixTimeInMilliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Date.now();
  },
  "{ :self |\n\t\t<primitive: return Date.now();>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "window",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.window;
  },
  "{ :self |\n\t\t<primitive: return _self.window;>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "System",
  "cancel",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    clearTimeout(_self);
    return null;
  },
  "{ :self |\n\t\t<primitive: clearTimeout(_self); return null;>\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "once",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _cache = _cached_3(_system, "onceCache", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _WeakMap_0();
    });
    /* Statements */
    return _atIfAbsentPut_3(_cache, _self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _value_1(_self);
    });
  },
  "{ :self |\n\t\tlet cache = system.cached('onceCache') {\n\t\t\tWeakMap()\n\t\t};\n\t\tcache.atIfAbsentPut(self) {\n\t\t\tself.value\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "once",
  ["self", "where", "key"],
  function (_self, _where, _key) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _where, _key";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_where, _key, _self);
  },
  "{ :self :where :key |\n\t\twhere.cached(key, self)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "System",
  "respondsTo",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _anySatisfy_2(
      _typeMethodDictionary_2(_system, _typeOf_1(_self)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_qualifiedName_1(_each), _name_1(_aBlock));
      },
    );
  },
  "{ :self :aBlock |\n\t\tsystem.typeMethodDictionary(self.typeOf).anySatisfy { :each |\n\t\t\teach.qualifiedName = aBlock.name\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "benchForMilliseconds",
  ["self:/0", "interval"],
  function (_self_0, _interval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _interval";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _t0 = _systemTimeInMilliseconds_1(_system);
    let _t1 = null;
    let _t2 = _plusSign_2(_t0, _interval);
    let _count = 1;
    /* Statements */
    _self_0();
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _t1 = _systemTimeInMilliseconds_1(_system);
      return _lessThanSign_2(_t1, _t2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _self_0();
      return _count = _plusSign_2(_count, 1);
    });
    return [_count, _hyphenMinus_2(_t1, _t0)];
  },
  "{ :self:/0 :interval |\n\t\tlet t0 = system.systemTimeInMilliseconds;\n\t\tlet t1 = nil;\n\t\tlet t2 = t0 + interval;\n\t\tlet count = 1;\n\t\tself();\n\t\t{\n\t\t\tt1 := system.systemTimeInMilliseconds;\n\t\t\tt1 < t2\n\t\t}.whileTrue {\n\t\t\tself();\n\t\t\tcount := count + 1\n\t\t};\n\t\t[count, t1 - t0]\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "benchFor",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym33 = _assertIsOfSize_2(
        _benchForMilliseconds_2(_self, _milliseconds_1(_aDuration)),
        2,
      ),
      _count = _at_2(__genSym33, 1),
      _elapsedTime = _at_2(__genSym33, 2);
    /* Statements */
    return _join_1([
      _roundTo_2(_solidus_2(_count, _solidus_2(_elapsedTime, 1000)), 0.001),
      " per second; ",
      _roundTo_2(_solidus_2(_solidus_2(_elapsedTime, 1000), _count), 0.001),
      " per count",
    ]);
  },
  "{ :self :aDuration |\n\t\tlet [count, elapsedTime] = self.benchForMilliseconds(aDuration.milliseconds);\n\t\t[\n\t\t\t(count / (elapsedTime / 1000)).roundTo(0.001), ' per second; ',\n\t\t\t((elapsedTime / 1000) / count).roundTo(0.001), ' per count'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "valueAfterMilliseconds",
  ["self:/0", "delayInMilliseconds"],
  function (_self_0, _delayInMilliseconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delayInMilliseconds";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (!sl.isSmallFloat(_delayInMilliseconds)) {
      return Error("valueAfterMilliseconds: not a number");
    } else {
      return setTimeout(_self_0, _delayInMilliseconds);
    }
  },
  "{ :self:/0 :delayInMilliseconds |\n\t\t<primitive:\n\t\tif(!sl.isSmallFloat(_delayInMilliseconds)) {\n\t\t\treturn Error('valueAfterMilliseconds: not a number');\n\t\t} else {\n\t\t\treturn setTimeout(_self_0, _delayInMilliseconds);\n\t\t}\n\t\t>\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "valueAfterMillisecondsWith",
  ["self:/1", "delayInMilliseconds", "anObject"],
  function (_self_1, _delayInMilliseconds, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_1, _delayInMilliseconds, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (!sl.isSmallFloat(_delayInMilliseconds)) {
      return Error("valueAfterMillisecondsWith: not a number");
    } else {
      return setTimeout(_self_1, _delayInMilliseconds, _anObject);
    }
  },
  "{ :self:/1 :delayInMilliseconds :anObject |\n\t\t<primitive:\n\t\tif(!sl.isSmallFloat(_delayInMilliseconds)) {\n\t\t\treturn Error('valueAfterMillisecondsWith: not a number');\n\t\t} else {\n\t\t\treturn setTimeout(_self_1, _delayInMilliseconds, _anObject);\n\t\t}\n\t\t>\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "valueEveryMilliseconds",
  ["self:/0", "delayInMilliseconds"],
  function (_self_0, _delayInMilliseconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delayInMilliseconds";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (!sl.isSmallFloat(_delayInMilliseconds)) {
      return Error("valueEveryMilliseconds: not a number");
    } else {
      return setInterval(_self_0, _delayInMilliseconds);
    }
  },
  "{ :self:/0 :delayInMilliseconds |\n\t\t<primitive:\n\t\tif(!sl.isSmallFloat(_delayInMilliseconds)) {\n\t\t\treturn Error('valueEveryMilliseconds: not a number');\n\t\t} else {\n\t\t\treturn setInterval(_self_0, _delayInMilliseconds);\n\t\t}\n\t\t>\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "millisecondsToRun",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _startTime = _systemTimeInMilliseconds_1(_system);
    /* Statements */
    _self_0();
    return _hyphenMinus_2(_systemTimeInMilliseconds_1(_system), _startTime);
  },
  "{ :self:/0 |\n\t\tlet startTime = system.systemTimeInMilliseconds;\n\t\tself();\n\t\tsystem.systemTimeInMilliseconds - startTime\n\t}",
);
