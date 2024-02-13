/* {- Requires: Url -} */

sl.addType(
  false,
  "LibraryItem",
  "LibraryItem",
  ["Object"],
  ["name", "url", "mimeType", "parser", "useLocalStorage", "value"],
);

sl.copyTraitToType(
  "Object",
  "LibraryItem",
);

sl.addMethod(
  "LibraryItem",
  "LibraryItem",
  "key",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2("sl/library/", _hostname_1(_url_1(_self))),
      _pathname_1(_url_1(_self)),
    );
  },
  "{ :self |\n\t\t'sl/library/' ++ self.url.hostname ++ self.url.pathname\n\t}",
);

sl.addMethod(
  "LibraryItem",
  "LibraryItem",
  "readLocalStorage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _text = _at_2(_localStorage_1(_system), _key_1(_self));
    /* Statements */
    return _caseOfOtherwise_3(_mimeType_1(_self), [
      _hyphenMinusGreaterThanSign_2("application/json", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _value_2(_parser_1(_self), _parseJson_1(_text));
      }),
      _hyphenMinusGreaterThanSign_2("text/plain", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _value_2(_parser_1(_self), _text);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "readLocalStorage: unsupported mimeType");
    });
  },
  "{ :self |\n\t\tlet text = system.localStorage[self.key];\n\t\tself.mimeType.caseOfOtherwise([\n\t\t\t'application/json' -> {\n\t\t\t\tself.parser.value(text.parseJson)\n\t\t\t},\n\t\t\t'text/plain' -> {\n\t\t\t\tself.parser.value(text)\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('readLocalStorage: unsupported mimeType')\n\t\t}\n\t}",
);

sl.addMethod(
  "LibraryItem",
  "LibraryItem",
  "require",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _postLine_1(_plusSignPlusSign_2("LibraryItem>>require", _name_1(_self)));
    return _Promise_1(function (_resolve_1, _reject_1) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _resolve_1, _reject_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifNotNil_3(_value_1(_self), function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _resolve_1(_answer);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(
          _includesIndex_2(_localStorage_1(_system), _key_1(_self)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _value_2(_self, _readLocalStorage_1(_self));
            return _resolve_1(_value_1(_self));
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _thenElse_3(
              _fetchMimeType_5(
                _system,
                _url_1(_self),
                _mimeType_1(_self),
                Object.fromEntries([]),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _error_2(
                    _self,
                    _plusSignPlusSign_2("Fetch failed: ", _url_1(_self)),
                  );
                },
              ),
              function (_answer) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _answer";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                _ifTrue_2(_useLocalStorage_1(_self), function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _writeLocalStorage_2(_self, _answer);
                });
                _value_2(_self, _value_2(_parser_1(_self), _answer));
                return _resolve_1(_value_1(_self));
              },
              function (_message) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _message";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                return _reject_1(_message);
              },
            );
          },
        );
      });
    });
  },
  "{ :self |\n\t\t('LibraryItem>>require' ++ self.name).postLine;\n\t\tPromise { :resolve:/1 :reject:/1 |\n\t\t\tself.value.ifNotNil { :answer |\n\t\t\t\tanswer.resolve\n\t\t\t} {\n\t\t\t\tsystem.localStorage.includesIndex(self.key).if {\n\t\t\t\t\tself.value := self.readLocalStorage;\n\t\t\t\t\tself.value.resolve\n\t\t\t\t} {\n\t\t\t\t\tsystem.fetchMimeType(\n\t\t\t\t\t\tself.url,\n\t\t\t\t\t\tself.mimeType,\n\t\t\t\t\t\t(),\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tself.error('Fetch failed: ' ++ self.url)\n\t\t\t\t\t\t}\n\t\t\t\t\t).thenElse { :answer |\n\t\t\t\t\t\tself.useLocalStorage.ifTrue {\n\t\t\t\t\t\t\tself.writeLocalStorage(answer)\n\t\t\t\t\t\t};\n\t\t\t\t\t\tself.value := self.parser.value(answer);\n\t\t\t\t\t\tself.value.resolve\n\t\t\t\t\t} { :message |\n\t\t\t\t\t\tmessage.reject\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "LibraryItem",
  "LibraryItem",
  "writeLocalStorage",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_mimeType_1(_self), [
      _hyphenMinusGreaterThanSign_2("application/json", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(
          _localStorage_1(_system),
          _key_1(_self),
          _json_1(_anObject),
        );
      }),
      _hyphenMinusGreaterThanSign_2("text/plain", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(
          _localStorage_1(_system),
          _key_1(_self),
          _asString_1(_anObject),
        );
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "writeLocalStorage: unsupported mimeType");
    });
  },
  "{ :self :anObject |\n\t\tself.mimeType.caseOfOtherwise([\n\t\t\t'application/json' -> {\n\t\t\t\tsystem.localStorage[self.key] := anObject.json\n\t\t\t},\n\t\t\t'text/plain' -> {\n\t\t\t\tsystem.localStorage[self.key] := anObject.asString\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('writeLocalStorage: unsupported mimeType')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "LibraryItem",
  "LibraryItem",
  ["name", "url", "mimeType", "parser"],
  function (_name, _url, _mimeType, _parser) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _name, _url, _mimeType, _parser";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_7(
      _newLibraryItem_0(),
      _name,
      _asUrl_1(_url),
      _mimeType,
      _parser,
      true,
      null,
    );
  },
  "{ :name :url :mimeType :parser |\n\t\tnewLibraryItem().initializeSlots(name, url.asUrl, mimeType, parser, true, nil)\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "LibraryItem",
  "addLibraryItem",
  ["self", "libraryItem"],
  function (_self, _libraryItem) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _libraryItem";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _includesIndex_2(_library_1(_self), _name_1(_libraryItem)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _warning_2(
          _self,
          _plusSignPlusSign_2(
            "addLibraryItem: item exists: ",
            _name_1(_libraryItem),
          ),
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(_library_1(_self), _name_1(_libraryItem), _libraryItem);
      },
    );
  },
  "{ :self :libraryItem |\n\t\tself.library.includesIndex(libraryItem.name).if {\n\t\t\tself.warning('addLibraryItem: item exists: ' ++ libraryItem.name)\n\t\t} {\n\t\t\tself.library[libraryItem.name] := libraryItem\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "LibraryItem",
  "includesLibraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _includesIndex_2(_library_1(_self), _name);
  },
  "{ :self :name |\n\t\tself.library.includesIndex(name)\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "LibraryItem",
  "library",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "library", function () {
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
  "{ :self |\n\t\tself.cached('library') {\n\t\t\t()\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "LibraryItem",
  "libraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _require_1(_at_2(_library_1(_self), _name));
  },
  "{ :self :name |\n\t\tself.library[name].require\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "LibraryItem",
  "requireLibraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesLibraryItem_2(_self, _name), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _libraryItem_2(_self, _name);
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
          "@Cache>>requireLibraryItem: does not exist: ",
          _name,
        ),
      );
    });
  },
  "{ :self :name |\n\t\tself.includesLibraryItem(name).if {\n\t\t\tself.libraryItem(name)\n\t\t} {\n\t\t\tself.error('@Cache>>requireLibraryItem: does not exist: ' ++ name)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "LibraryItem",
  "requireLibraryItems",
  ["self", "names"],
  function (_self, _names) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _names";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Promise_1(_collect_2(_name, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _requireLibraryItem_2(_self, _each);
    }));
  },
  "{ :self :names |\n\t\tname.collect { :each |\n\t\t\tself.requireLibraryItem(each)\n\t\t}.Promise\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "LibraryItem",
  "useLibraryItem",
  ["self", "libraryItem"],
  function (_self, _libraryItem) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _libraryItem";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _name = _name_1(_libraryItem);
    /* Statements */
    _ifFalse_2(_includesLibraryItem_2(_self, _name), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _addLibraryItem_2(_self, _libraryItem);
    });
    return _requireLibraryItem_2(_self, _name);
  },
  "{ :self :libraryItem |\n\t\tlet name = libraryItem.name;\n\t\tself.includesLibraryItem(name).ifFalse {\n\t\t\tself.addLibraryItem(libraryItem)\n\t\t};\n\t\tself.requireLibraryItem(name)\n\t}",
);
