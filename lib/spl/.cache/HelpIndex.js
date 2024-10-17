sl.addType(
  false,
  "HelpIndex",
  "HelpIndex",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "HelpIndex",
);

sl.addMethod(
  "HelpIndex",
  "HelpIndex",
  "fetch",
  ["self", "path"],
  function (_self, _path) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _path";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifNotNil_2(_path, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _url = _url_3(_self, _at_2(_path, 1), _at_2(_path, 2));
      /* Statements */
      _notify_2(_self, _plusSignPlusSign_2("fetch: ", _join_2(_path, "/")));
      return _fetchTextWithDefault_2(_url, "*Fetch Failed*");
    });
  },
  "{ :self :path |\n\t\tpath.ifNotNil {\n\t\t\tlet url = self.url(path[1], path[2]);\n\t\t\tself.notify('fetch: ' ++ path.join('/'));\n\t\t\turl.fetchTextWithDefault('*Fetch Failed*')\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpIndex",
  "HelpIndex",
  "fetchFor",
  ["self", "topic"],
  function (_self, _topic) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _topic";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetch_2(_self, _find_2(_self, _topic));
  },
  "{ :self :topic |\n\t\tself.fetch(self.find(topic))\n\t}",
);

sl.addMethod(
  "HelpIndex",
  "HelpIndex",
  "find",
  ["self", "topic"],
  function (_self, _topic) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _topic";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _detectIfNone_3(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_second_1(_each), _topic);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _warning_2(
        _self,
        _plusSignPlusSign_2("HelpIndex>>find: no help for: ", _topic),
      );
      return null;
    });
  },
  "{ :self :topic |\n\t\tself.contents.detectIfNone { :each |\n\t\t\teach.second = topic\n\t\t} {\n\t\t\tself.warning('HelpIndex>>find: no help for: ' ++ topic);\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpIndex",
  "HelpIndex",
  "kind",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return ["Guide", "Reference"];
  },
  "{ :self |\n\t\t['Guide', 'Reference']\n\t}",
);

sl.addMethod(
  "HelpIndex",
  "HelpIndex",
  "names",
  ["self", "kind"],
  function (_self, _kind) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _kind";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sorted_1(_collect_2(
      _select_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_first_1(_each), _kind);
      }),
      _second_1,
    ));
  },
  "{ :self :kind |\n\t\tself.contents.select { :each |\n\t\t\teach.first = kind\n\t\t}.collect(second:/1).sorted\n\t}",
);

sl.addMethod(
  "HelpIndex",
  "HelpIndex",
  "url",
  ["self", "kind", "name"],
  function (_self, _kind, _name) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _kind, _name";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1(["./lib/spl/help/", _kind, "/", _name, ".help.sl"]);
  },
  "{ :self :kind :name |\n\t\t[\n\t\t\t'./lib/spl/help/',\n\t\t\tkind,\n\t\t\t'/',\n\t\t\tname,\n\t\t\t'.help.sl'\n\t\t].join\n\t}",
);

sl.addMethod(
  "String",
  "HelpIndex",
  "HelpIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(
      _newHelpIndex_0(),
      _collect_2(_select_2(_lines_1(_self), _notEmpty_1), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let __genSym65 = _assertIsOfSize_2(
            _splitBy_2(_replaceString_3(_each, ".help.sl", ""), "/"),
            2,
          ),
          _kind = _at_2(__genSym65, 1),
          _name = _at_2(__genSym65, 2);
        /* Statements */
        return [_kind, _name];
      }),
    );
  },
  "{ :self |\n\t\tnewHelpIndex().initializeSlots(\n\t\t\tself.lines.select(notEmpty:/1).collect { :each |\n\t\t\t\tlet [kind, name] = each.replaceString('.help.sl', '').splitBy('/');\n\t\t\t\t[kind, name]\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "HelpIndex",
  "helpIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _useLibraryItem_2(
      _self,
      _LibraryItem_4(
        "helpIndex",
        "https://rohandrape.net/sw/spl/help/Index.text",
        "text/plain",
        _HelpIndex_1,
      ),
    );
  },
  "{ :self |\n\t\tself.useLibraryItem(\n\t\t\tLibraryItem(\n\t\t\t\t'helpIndex',\n\t\t\t\t'https://rohandrape.net/sw/spl/help/Index.text',\n\t\t\t\t'text/plain',\n\t\t\t\tHelpIndex:/1\n\t\t\t)\n\t\t)\n\t}",
);
