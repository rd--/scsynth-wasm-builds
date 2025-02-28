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
  function (_self) {
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
      function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          throw new Error(errorMessage);
        } /* Statements */
        _unparsedContents_2(_self, _answer);
        return _self;
      },
      function (_reason) {
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
      },
    );
  },
  "{ :self | thenElse(cachedFetchMimeType(asUrl(url(self)),'SplLibraryItems', mimeType(self)), { :answer | unparsedContents(self, answer); self }, { :reason | postLine([self, reason]); error(self,++('LibraryItem>>cachedFetch: ', reason)) }) }",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "contents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifNil_2(_unparsedContents_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "contents: not acquired");
    });
    _ifNil_2(_parsedContents_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _parsedContents_2(
        _self,
        _value_2(_parser_1(_self), _unparsedContents_1(_self)),
      );
    });
    return _parsedContents_1(_self);
  },
  "{ :self | ifNil(unparsedContents(self), { error(self,'contents: not acquired') }); ifNil(parsedContents(self), { parsedContents(self, value(parser(self),unparsedContents(self))) }); parsedContents(self) }",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "printString",
  ["self"],
  function (_self) {
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
  },
  "{ :self | format('LibraryItem(%, %, %, %)',[name(self), category(self), url(self), mimeType(self)]) }",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "request",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Promise_1(function (_resolve_1, _reject_1) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _resolve_1, _reject_1";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifNotNil_3(_unparsedContents_1(_self), function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          throw new Error(errorMessage);
        } /* Statements */
        return _resolve_1(_answer);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _thenElse_3(_cachedFetch_1(_self), function (_answer) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _answer";
            throw new Error(errorMessage);
          } /* Statements */
          return _resolve_1(_answer);
        }, function (_message) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _message";
            throw new Error(errorMessage);
          } /* Statements */
          return _reject_1(_message);
        });
      });
    });
  },
  "{ :self | Promise({ :resolve:/1 :reject:/1 | ifNotNil(unparsedContents(self), { :answer | resolve(answer) }, { thenElse(cachedFetch(self), { :answer | resolve(answer) }, { :message | reject(message) }) }) }) }",
);

sl.addMethodToExistingType(
  "LibraryItem",
  "LibraryItem",
  "require",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(_unparsedContents_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _request_1(_self);
      return _error_2(_self, "require: item not on shelf, requested");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _contents_1(_self);
    });
  },
  "{ :self | ifNil(unparsedContents(self), { request(self); error(self,'require: item not on shelf, requested') }, { contents(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "LibraryItem",
  "LibraryItem",
  ["name", "category", "url", "mimeType", "parser"],
  function (_name, _category, _url, _mimeType, _parser) {
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
  },
  "{ :name :category :url :mimeType :parser | initializeSlots(newLibraryItem(),name, category, url, mimeType, parser, nil, nil) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "LibraryItem",
  "asLibraryItem",
  ["self"],
  function (_self) {
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
  },
  "{ :self | LibraryItem(at(self, 'name'), at(self, 'category'), at(self, 'url'), at(self, 'mimeType'), at(self, 'parser')) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "addLibraryItem",
  ["self", "libraryItem"],
  function (_self, _libraryItem) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _libraryItem";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _key = _name_1(_libraryItem);
    /* Statements */
    _ifTrue_2(_includesKey_2(_library_1(_self), _key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
  "{ :self :libraryItem | let key = name(libraryItem); ifTrue(includesKey(library(self),key), { error(self,++('addLibraryItem: item exists: ', key)) }); atPut(library(self), key, libraryItem); cachedFetch(libraryItem); libraryItem }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "awaitLibraryItem",
  ["self", "name", "aBlock:/0"],
  function (_self, _name, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(_requestLibraryItem_2(_self, _name), function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    }, function (_reason) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _reason";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("awaitLibraryItem: failure: ", _reason),
      );
    });
  },
  "{ :self :name :aBlock:/0 | thenElse(requestLibraryItem(self,name), { :unused | aBlock() }, { :reason | error(self,++('awaitLibraryItem: failure: ', reason)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "awaitLibraryItems",
  ["self", "names", "aBlock:/0"],
  function (_self, _names, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _names, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _allFulfilled_1(_collect_2(_names, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _requestLibraryItem_2(_self, _each);
      })),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      },
      function (_reason) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _reason";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("awaitLibraryItems: failure: ", _reason),
        );
      },
    );
  },
  "{ :self :names :aBlock:/0 | thenElse(allFulfilled(collect(names, { :each | requestLibraryItem(self,each) })), { :unused | aBlock() }, { :reason | error(self,++('awaitLibraryItems: failure: ', reason)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "includesLibraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_library_1(_self), _name);
  },
  "{ :self :name | includesKey(library(self),name) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "library",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "library", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _Record_1([]);
    });
  },
  "{ :self | cached(self, 'library', { Record([]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "libraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_library_1(_self), _name);
  },
  "{ :self :name | at(library(self), name) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "requestLibraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_library_1(_self), _name, function (_item) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _item";
        throw new Error(errorMessage);
      } /* Statements */
      return _request_1(_item);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("requestLibraryItem: does not exist: ", _name),
      );
    });
  },
  "{ :self :name | atIfPresentIfAbsent(library(self), name, { :item | request(item) }, { error(self,++('requestLibraryItem: does not exist: ', name)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "requestLibraryItems",
  ["self", "names"],
  function (_self, _names) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _names";
      throw new Error(errorMessage);
    } /* Statements */
    return _Promise_1(_collect_2(_names, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _requestLibraryItem_2(_self, _each);
    }));
  },
  "{ :self :names | Promise(collect(names, { :each | requestLibraryItem(self,each) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LibraryItem",
  "requireLibraryItem",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_library_1(_self), _name, function (_item) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _item";
        throw new Error(errorMessage);
      } /* Statements */
      return _require_1(_item);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("requireLibraryItem: does not exist: ", _name),
      );
    });
  },
  "{ :self :name | atIfPresentIfAbsent(library(self), name, { :item | require(item) }, { error(self,++('requireLibraryItem: does not exist: ', name)) }) }",
);
