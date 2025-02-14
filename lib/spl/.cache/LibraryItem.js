/*  Requires: CacheStorage, Url  */

sl.addType(
  false,
  "LibraryItem",
  "LibraryItem",
  ["Object"],
  ["name", "category", "url", "mimeType", "parser", "contents"],
);

sl.copyTraitToType(
  "Object",
  "LibraryItem",
);

sl.addMethod(
  "LibraryItem",
  "LibraryItem",
  "cachedFetch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _cachedFetchMimeType_3(
        _asUrl_1(_url_1(_self)),
        "SplLibraryItems",
        _mimeType_1(_self),
      ),
      function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _contents_2(_self, _parse_2(_self, _answer));
        _atPut_3(_cache_1(_system), _name_1(_self), _contents_1(_self));
        return _contents_1(_self);
      },
      function (_reason) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _reason";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, _reason);
      },
    );
  },
  "{ :self |\n\t\tself.url.asUrl.cachedFetchMimeType('SplLibraryItems', self.mimeType).thenElse { :answer |\n\t\t\tself.contents := self.parse(answer);\n\t\t\tsystem.cache[self.name] := self.contents;\n\t\t\tself.contents\n\t\t} { :reason |\n\t\t\tself.error(reason)\n\t\t}\n\t}",
);

sl.addMethod(
  "LibraryItem",
  "LibraryItem",
  "parse",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_parser_1(_self), _aString);
  },
  "{ :self :aString |\n\t\tself.parser.value(aString)\n\t}",
);

sl.addMethod(
  "LibraryItem",
  "LibraryItem",
  "request",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Promise_1(function (_resolve_1, _reject_1) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _resolve_1, _reject_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifNotNil_3(_contents_1(_self), function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _resolve_1(_answer);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _thenElse_3(_cachedFetch_1(_self), function (_answer) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _answer";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _resolve_1(_answer);
        }, function (_message) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _message";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _reject_1(_message);
        });
      });
    });
  },
  "{ :self |\n\t\tPromise { :resolve:/1 :reject:/1 |\n\t\t\tself.contents.ifNotNil { :answer |\n\t\t\t\tresolve(answer)\n\t\t\t} {\n\t\t\t\tself.cachedFetch.thenElse { :answer |\n\t\t\t\t\tresolve(answer)\n\t\t\t\t} { :message |\n\t\t\t\t\treject(message)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_2(_contents_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _request_1(_self);
      return _error_2(_self, "require: item not on shelf, requested");
    });
  },
  "{ :self |\n\t\tself.contents.ifNil {\n\t\t\tself.request;\n\t\t\tself.error('require: item not on shelf, requested')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "LibraryItem",
  "LibraryItem",
  ["name", "category", "url", "mimeType", "parser"],
  function (_name, _category, _url, _mimeType, _parser) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _name, _category, _url, _mimeType, _parser";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_7(
      _newLibraryItem_0(),
      _name,
      _category,
      _url,
      _mimeType,
      _parser,
      null,
    );
  },
  "{ :name :category :url :mimeType :parser |\n\t\tnewLibraryItem().initializeSlots(name, category, url, mimeType, parser, nil)\n\t}",
);

sl.addMethod(
  "Record",
  "LibraryItem",
  "asLibraryItem",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LibraryItem_5(
      _at_2(_self, "name"),
      _at_2(_self, "category"),
      _at_2(_self, "url"),
      _at_2(_self, "mimeType"),
      _at_2(_self, "parser"),
    );
  },
  "{ :self |\n\t\tLibraryItem(\n\t\t\tself['name'],\n\t\t\tself['category'],\n\t\t\tself['url'],\n\t\t\tself['mimeType'],\n\t\t\tself['parser']\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "LibraryItem",
  "addLibraryItem",
  ["self", "libraryItem"],
  function (_self, _libraryItem) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _libraryItem";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _key = _name_1(_libraryItem);
    /* Statements */
    _ifTrue_2(_includesKey_2(_library_1(_self), _key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("addLibraryItem: item exists: ", _key),
      );
    });
    _atPut_3(_library_1(_self), _key, _libraryItem);
    _cachedFetch_1(_libraryItem);
    return _libraryItem;
  },
  "{ :self :libraryItem |\n\t\tlet key = libraryItem.name;\n\t\tself.library.includesKey(key).ifTrue {\n\t\t\tself.error('addLibraryItem: item exists: ' ++ key)\n\t\t};\n\t\tself.library[key] := libraryItem;\n\t\tlibraryItem.cachedFetch;\n\t\tlibraryItem\n\t}",
);

sl.addMethod(
  "System",
  "LibraryItem",
  "awaitLibraryItem",
  ["self", "name", "aBlock:/0"],
  function (_self, _name, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(_requestLibraryItem_2(_self, _name), function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    });
  },
  "{ :self :name :aBlock:/0 |\n\t\tself.requestLibraryItem(name).then { :unused |\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "LibraryItem",
  "awaitLibraryItems",
  ["self", "names", "aBlock:/0"],
  function (_self, _names, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _names, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _allFulfilled_1(_collect_2(_names, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _requestLibraryItem_2(_self, _each);
      })),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      },
    );
  },
  "{ :self :names :aBlock:/0 |\n\t\tnames.collect { :each |\n\t\t\tself.requestLibraryItem(each)\n\t\t}.allFulfilled.then { :unused |\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "LibraryItem",
  "includesLibraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_library_1(_self), _name);
  },
  "{ :self :name |\n\t\tself.library.includesKey(name)\n\t}",
);

sl.addMethod(
  "System",
  "LibraryItem",
  "library",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "library", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return Object.fromEntries([]);
    });
  },
  "{ :self |\n\t\tself.cached('library') {\n\t\t\t()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "LibraryItem",
  "libraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_library_1(_self), _name);
  },
  "{ :self :name |\n\t\tself.library[name]\n\t}",
);

sl.addMethod(
  "System",
  "LibraryItem",
  "requestLibraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_library_1(_self), _name, function (_item) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _item";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _request_1(_item);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("requestLibraryItem: does not exist: ", _name),
      );
    });
  },
  "{ :self :name |\n\t\tself.library.atIfPresentIfAbsent(name) { :item |\n\t\t\titem.request\n\t\t} {\n\t\t\tself.error('requestLibraryItem: does not exist: ' ++ name)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "LibraryItem",
  "requestLibraryItems",
  ["self", "names"],
  function (_self, _names) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _names";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Promise_1(_collect_2(_names, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _requestLibraryItem_2(_self, _each);
    }));
  },
  "{ :self :names |\n\t\tnames.collect { :each |\n\t\t\tself.requestLibraryItem(each)\n\t\t}.Promise\n\t}",
);

sl.addMethod(
  "System",
  "LibraryItem",
  "requireLibraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_library_1(_self), _name, function (_item) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _item";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _require_1(_item);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("requireLibraryItem: does not exist: ", _name),
      );
    });
  },
  "{ :self :name |\n\t\tself.library.atIfPresentIfAbsent(name) { :item |\n\t\t\titem.require\n\t\t} {\n\t\t\tself.error('requireLibraryItem: does not exist: ' ++ name)\n\t\t}\n\t}",
);
