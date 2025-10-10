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
  sl.annotateFunction(function (_self, _path) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _path";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNotNil_2(
      _path,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _url = _urlFor_3(_self, _at_2(_path, 1), _at_2(_path, 2));
        /* Statements */
        _notify_2(
          _self,
          _plusSignPlusSign_2("fetch: ", _stringIntercalate_2(_path, "/")),
        );
        return _fetchTextWithDefault_2(_url, "*Fetch Failed*");
      }, []),
    );
  }, ["self", "path"]),
  "{ :self :path |\n\t\tpath.ifNotNil {\n\t\t\tlet url = self.urlFor(path[1], path[2]);\n\t\t\tself.notify('fetch: ' ++ path.stringIntercalate('/'));\n\t\t\turl.fetchTextWithDefault('*Fetch Failed*')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "fetchFor",
  ["self", "topic"],
  sl.annotateFunction(function (_self, _topic) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _topic";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetch_2(_self, _find_2(_self, _topic));
  }, ["self", "topic"]),
  "{ :self :topic |\n\t\tself.fetch(self.find(topic))\n\t}",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "find",
  ["self", "topic"],
  sl.annotateFunction(function (_self, _topic) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _topic";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfNone_3(
      _contents_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_second_1(_each), _topic);
      }, ["each"]),
      sl.annotateFunction(function () {
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
      }, []),
    );
  }, ["self", "topic"]),
  "{ :self :topic |\n\t\tself.contents.detectIfNone { :each |\n\t\t\teach.second = topic\n\t\t} {\n\t\t\tself.warning('HelpIndex>>find: no help for: ' ++ topic);\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "kind",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return ["Guide", "Reference", "Terse"];
  }, ["unused"]),
  "{ :unused |\n\t\t['Guide', 'Reference', 'Terse']\n\t}",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "names",
  ["self", "kind"],
  sl.annotateFunction(function (_self, _kind) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _kind";
      throw new Error(errorMessage);
    } /* Statements */
    return _sorted_1(
      _collect_2(
        _select_2(
          _contents_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_first_1(_each), _kind);
          }, ["each"]),
        ),
        _second_1,
      ),
    );
  }, ["self", "kind"]),
  "{ :self :kind |\n\t\tself.contents.select { :each |\n\t\t\teach.first = kind\n\t\t}.collect(second:/1).sorted\n\t}",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "urlFor",
  ["unused", "kind", "name"],
  sl.annotateFunction(function (_unused, _kind, _name) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _unused, _kind, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1([
      "./lib/spl/Help/",
      _kind,
      "/",
      _name,
      ".help.sl",
    ]);
  }, ["unused", "kind", "name"]),
  "{ :unused :kind :name |\n\t\t[\n\t\t\t'./lib/spl/Help/',\n\t\t\tkind,\n\t\t\t'/',\n\t\t\tname,\n\t\t\t'.help.sl'\n\t\t].stringCatenate\n\t}",
);

sl.addMethodToExistingType(
  "HelpIndex",
  "HelpIndex",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HelpIndex",
  "HelpIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newHelpIndex_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewHelpIndex().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpIndex",
  "helpIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "HelpIndex");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('HelpIndex')\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "HelpIndex"],
      ["category", "System/Help"],
      ["url", "https://rohandrape.net/sw/spl/Help/Index.text"],
      ["mimeType", "text/plain"],
      [
        "parser",
        sl.annotateFunction(function (_text) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _text";
            throw new Error(errorMessage);
          } /* Statements */
          return _HelpIndex_1(
            _collect_2(
              _select_2(_lines_1(_text), _isNotEmpty_1),
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let __SplVar1 = _assertIsOfSize_2(
                  _splitBy_2(_replaceString_3(_each, ".help.sl", ""), "/"),
                  2,
                );
                let _kind = _at_2(__SplVar1, 1);
                let _name = _at_2(__SplVar1, 2);
                /* Statements */
                return [_kind, _name];
              }, ["each"]),
            ),
          );
        }, ["text"]),
      ],
    ]),
  ),
);
