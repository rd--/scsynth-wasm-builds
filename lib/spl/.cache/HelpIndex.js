sl.addType(
  false,
  "HelpIndex",
  "HelpIndex",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HelpIndex",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "fetch",
  ["self", "path"],
  function (_self, _path) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _path";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNotNil_2(_path, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _url = _urlFor_3(_self, _at_2(_path, 1), _at_2(_path, 2));
      /* Statements */
      _notify_2(_self, _plusSignPlusSign_2("fetch: ", _join_2(_path, "/")));
      return _fetchTextWithDefault_2(_url, "*Fetch Failed*");
    });
  },
  "{ :self :path | ifNotNil(path, { let url = urlFor(self,at(path, 1), at(path, 2)); notify(self,++('fetch: ', join(path,'/'))); fetchTextWithDefault(url,'*Fetch Failed*') }) }",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "fetchFor",
  ["self", "topic"],
  function (_self, _topic) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _topic";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetch_2(_self, _find_2(_self, _topic));
  },
  "{ :self :topic | fetch(self,find(self,topic)) }",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "find",
  ["self", "topic"],
  function (_self, _topic) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _topic";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfNone_3(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_second_1(_each), _topic);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _warning_2(
        _self,
        _plusSignPlusSign_2("HelpIndex>>find: no help for: ", _topic),
      );
      return null;
    });
  },
  "{ :self :topic | detectIfNone(contents(self), { :each | =(second(each), topic) }, { warning(self,++('HelpIndex>>find: no help for: ', topic)); nil }) }",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "kind",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["Guide", "Reference", "Terse"];
  },
  "{ :self | ['Guide', 'Reference', 'Terse'] }",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "names",
  ["self", "kind"],
  function (_self, _kind) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _kind";
      throw new Error(errorMessage);
    } /* Statements */
    return _sorted_1(_collect_2(
      _select_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_first_1(_each), _kind);
      }),
      _second_1,
    ));
  },
  "{ :self :kind | sorted(collect(select(contents(self), { :each | =(first(each), kind) }),second:/1)) }",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "urlFor",
  ["self", "kind", "name"],
  function (_self, _kind, _name) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _kind, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2(["./lib/spl/Help/", _kind, "/", _name, ".help.sl"], "");
  },
  "{ :self :kind :name | join(['./lib/spl/Help/', kind, '/', name, '.help.sl'],'') }",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self | size(contents(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HelpIndex",
  "HelpIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newHelpIndex_0(), _self);
  },
  "{ :self | initializeSlots(newHelpIndex(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpIndex",
  "helpIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "HelpIndex");
  },
  "{ :self | requireLibraryItem(self,'HelpIndex') }",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "HelpIndex"],
      ["category", "System/Help"],
      ["url", "https://rohandrape.net/sw/spl/Help/Index.text"],
      ["mimeType", "text/plain"],
      ["parser", function (_text) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _text";
          throw new Error(errorMessage);
        } /* Statements */
        return _HelpIndex_1(
          _collect_2(_select_2(_lines_1(_text), _notEmpty_1), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL175 = _assertIsOfSize_2(
              _splitBy_2(_replaceString_3(_each, ".help.sl", ""), "/"),
              2,
            );
            let _kind = _at_2(__SPL175, 1);
            let _name = _at_2(__SPL175, 2);
            /* Statements */
            return [_kind, _name];
          }),
        );
      }],
    ]),
  ),
);
