/*  Requires: CacheStorage, Url  */

sl.addType(
  false,
  "LibraryItem",
  "LibraryItem",
  ["Object"],
  [
    "name",
    "category",
    "url",
    "mimeType",
    "parser",
    "unparsedContents",
    "parsedContents",
  ],
);

sl.copyTraitMethodsToType(
  "Object",
  "LibraryItem",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "cachedFetch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _cachedFetchMimeType_3(
        _asUrl_1(_url_1(_self)),
        "SplLibraryItems",
        _mimeType_1(_self),
      ),
      sl.annotateFunction(function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          throw new Error(errorMessage);
        } /* Statements */
        _unparsedContents_2(_self, _answer);
        return _self;
      }, ["answer"]),
      sl.annotateFunction(function (_reason) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _reason";
          throw new Error(errorMessage);
        } /* Statements */
        _postLine_1([_self, _reason]);
        return _error_2(
          _self,
          _plusSignPlusSign_2("LibraryItem>>cachedFetch: ", _reason),
        );
      }, ["reason"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.url.asUrl.cachedFetchMimeType(\n\t\t\t'SplLibraryItems',\n\t\t\tself.mimeType\n\t\t).thenElse { :answer |\n\t\t\tself.unparsedContents := answer;\n\t\t\tself\n\t\t} { :reason |\n\t\t\t[self, reason].postLine;\n\t\t\tself.error('LibraryItem>>cachedFetch: ' ++ reason)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "clearCache",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresent_3(
      _caches_1(_system),
      "SplLibraryItems",
      sl.annotateFunction(function (_cache) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _cache";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeKeyIfAbsent_3(
          _cache,
          _asUrl_1(_url_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "clearCache: no such key");
          }, []),
        );
      }, ["cache"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.caches.atIfPresent('SplLibraryItems') { :cache |\n\t\t\tcache.removeKeyIfAbsent(self.url.asUrl) {\n\t\t\t\tself.error('clearCache: no such key')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "contents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifNil_2(
      _unparsedContents_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "contents: not acquired");
      }, []),
    );
    _ifNil_2(
      _parsedContents_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _parsedContents_2(
          _self,
          _value_2(_parser_1(_self), _unparsedContents_1(_self)),
        );
      }, []),
    );
    return _parsedContents_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.unparsedContents.ifNil {\n\t\t\tself.error('contents: not acquired')\n\t\t};\n\t\tself.parsedContents.ifNil {\n\t\t\tself.parsedContents := self.parser.value(self.unparsedContents)\n\t\t};\n\t\tself.parsedContents\n\t}",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("LibraryItem(%, %, %, %)", [
      _name_1(_self),
      _category_1(_self),
      _url_1(_self),
      _mimeType_1(_self),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'LibraryItem(%, %, %, %)'.format([self.name, self.category, self.url, self.mimeType])\n\t}",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "request",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Promise_1(sl.annotateFunction(function (_resolve_1, _reject_1) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _resolve_1, _reject_1";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifNotNil_3(
        _unparsedContents_1(_self),
        sl.annotateFunction(function (_unused) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _unused";
            throw new Error(errorMessage);
          } /* Statements */
          return _resolve_1(_contents_1(_self));
        }, ["unused"]),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _thenElse_3(
            _cachedFetch_1(_self),
            sl.annotateFunction(function (_unused) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _unused";
                throw new Error(errorMessage);
              } /* Statements */
              return _resolve_1(_contents_1(_self));
            }, ["unused"]),
            sl.annotateFunction(function (_message) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _message";
                throw new Error(errorMessage);
              } /* Statements */
              return _reject_1(_message);
            }, ["message"]),
          );
        }, []),
      );
    }, ["resolve:/1", "reject:/1"]));
  }, ["self"]),
  "{ :self |\n\t\tPromise { :resolve:/1 :reject:/1 |\n\t\t\tself.unparsedContents.ifNotNil { :unused |\n\t\t\t\tresolve(self.contents)\n\t\t\t} {\n\t\t\t\tself.cachedFetch.thenElse { :unused |\n\t\t\t\t\tresolve(self.contents)\n\t\t\t\t} { :message |\n\t\t\t\t\treject(message)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "require",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _unparsedContents_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _request_1(_self);
        return _error_2(_self, "require: item not on shelf, requested");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _contents_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.unparsedContents.ifNil {\n\t\t\tself.request;\n\t\t\tself.error('require: item not on shelf, requested')\n\t\t} {\n\t\t\tself.contents\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "LibraryItem",
  "LibraryItem",
  ["name", "category", "url", "mimeType", "parser"],
  sl.annotateFunction(function (_name, _category, _url, _mimeType, _parser) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _name, _category, _url, _mimeType, _parser";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_8(
      _newLibraryItem_0(),
      _name,
      _category,
      _url,
      _mimeType,
      _parser,
      null,
      null,
    );
  }, ["name", "category", "url", "mimeType", "parser"]),
  "{ :name :category :url :mimeType :parser |\n\t\tnewLibraryItem().initializeSlots(name, category, url, mimeType, parser, nil, nil)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "LibraryItem",
  "asLibraryItem",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LibraryItem_5(
      _at_2(_self, "name"),
      _at_2(_self, "category"),
      _at_2(_self, "url"),
      _at_2(_self, "mimeType"),
      _at_2(_self, "parser"),
    );
  }, ["self"]),
  "{ :self |\n\t\tLibraryItem(\n\t\t\tself['name'],\n\t\t\tself['category'],\n\t\t\tself['url'],\n\t\t\tself['mimeType'],\n\t\t\tself['parser']\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "addLibraryItem",
  ["self", "libraryItem"],
  sl.annotateFunction(function (_self, _libraryItem) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _libraryItem";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _key = _name_1(_libraryItem);
    /* Statements */
    _ifTrue_2(
      _includesKey_2(_library_1(_self), _key),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("addLibraryItem: item exists: ", _key),
        );
      }, []),
    );
    _atPut_3(_library_1(_self), _key, _libraryItem);
    _cachedFetch_1(_libraryItem);
    return _libraryItem;
  }, ["self", "libraryItem"]),
  "{ :self :libraryItem |\n\t\tlet key = libraryItem.name;\n\t\tself.library.includesKey(key).ifTrue {\n\t\t\tself.error('addLibraryItem: item exists: ' ++ key)\n\t\t};\n\t\tself.library[key] := libraryItem;\n\t\tlibraryItem.cachedFetch;\n\t\tlibraryItem\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "awaitLibraryItem",
  ["self", "name", "aBlock:/0"],
  sl.annotateFunction(function (_self, _name, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _requestLibraryItem_2(_self, _name),
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      }, ["unused"]),
      sl.annotateFunction(function (_reason) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _reason";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("awaitLibraryItem: failure: ", _reason),
        );
      }, ["reason"]),
    );
  }, ["self", "name", "aBlock:/0"]),
  "{ :self :name :aBlock:/0 |\n\t\tself.requestLibraryItem(name).thenElse { :unused |\n\t\t\taBlock()\n\t\t} { :reason |\n\t\t\tself.error('awaitLibraryItem: failure: ' ++ reason)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "awaitLibraryItems",
  ["self", "names", "aBlock:/0"],
  sl.annotateFunction(function (_self, _names, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _names, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _allFulfilled_1(_collect_2(
        _names,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _requestLibraryItem_2(_self, _each);
        }, ["each"]),
      )),
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      }, ["unused"]),
      sl.annotateFunction(function (_reason) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _reason";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("awaitLibraryItems: failure: ", _reason),
        );
      }, ["reason"]),
    );
  }, ["self", "names", "aBlock:/0"]),
  "{ :self :names :aBlock:/0 |\n\t\tnames.collect { :each |\n\t\t\tself.requestLibraryItem(each)\n\t\t}.allFulfilled.thenElse { :unused |\n\t\t\taBlock()\n\t\t} { :reason |\n\t\t\tself.error('awaitLibraryItems: failure: ' ++ reason)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "includesLibraryItem",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_library_1(_self), _name);
  }, ["self", "name"]),
  "{ :self :name |\n\t\tself.library.includesKey(name)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "library",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "library",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_0();
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('library') {\n\t\t\t(:)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "libraryItem",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_library_1(_self), _name);
  }, ["self", "name"]),
  "{ :self :name |\n\t\tself.library[name]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "requestLibraryItem",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(
      _library_1(_self),
      _name,
      sl.annotateFunction(function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          throw new Error(errorMessage);
        } /* Statements */
        return _request_1(_item);
      }, ["item"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("requestLibraryItem: does not exist: ", _name),
        );
      }, []),
    );
  }, ["self", "name"]),
  "{ :self :name |\n\t\tself.library.atIfPresentIfAbsent(name) { :item |\n\t\t\titem.request\n\t\t} {\n\t\t\tself.error('requestLibraryItem: does not exist: ' ++ name)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "requestLibraryItems",
  ["self", "names"],
  sl.annotateFunction(function (_self, _names) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _names";
      throw new Error(errorMessage);
    } /* Statements */
    return _Promise_1(_collect_2(
      _names,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _requestLibraryItem_2(_self, _each);
      }, ["each"]),
    ));
  }, ["self", "names"]),
  "{ :self :names |\n\t\tnames.collect { :each |\n\t\t\tself.requestLibraryItem(each)\n\t\t}.Promise\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "requireLibraryItem",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(
      _library_1(_self),
      _name,
      sl.annotateFunction(function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          throw new Error(errorMessage);
        } /* Statements */
        return _require_1(_item);
      }, ["item"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("requireLibraryItem: does not exist: ", _name),
        );
      }, []),
    );
  }, ["self", "name"]),
  "{ :self :name |\n\t\tself.library.atIfPresentIfAbsent(name) { :item |\n\t\t\titem.require\n\t\t} {\n\t\t\tself.error('requireLibraryItem: does not exist: ' ++ name)\n\t\t}\n\t}",
);
