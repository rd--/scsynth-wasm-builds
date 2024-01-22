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
  "areas",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["Language", "SmallKansas", "SuperCollider"];
  },
  "{ :self |\n\t\t['Language', 'SmallKansas', 'SuperCollider']\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifNotNil_2(_path, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _url = _url_4(
        _self,
        _at_2(_path, 1),
        _at_2(_path, 2),
        _at_2(_path, 3),
      );
      /* Statements */
      _notify_2(_self, _plusPlus_2("fetch: ", _joinSeparatedBy_2(_path, "/")));
      return _fetchString_4(
        _system,
        _url,
        Object.fromEntries([["cache", "no-cache"]]),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return "*Fetch Failed*";
        },
      );
    });
  },
  "{ :self :path |\n\t\tpath.ifNotNil {\n\t\t\tlet url = self.url(path[1], path[2], path[3]);\n\t\t\tself.notify('fetch: ' ++ path.joinSeparatedBy('/'));\n\t\t\tsystem.fetchString(url, (cache: 'no-cache'), { '*Fetch Failed*' })\n\t\t}\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _detectIfNone_3(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_third_1(_each), _topic);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _warning_2(_self, _plusPlus_2("find: no help for: ", _topic));
      return null;
    });
  },
  "{ :self :topic |\n\t\tself.contents.detectIfNone { :each |\n\t\t\teach.third = topic\n\t\t} {\n\t\t\tself.warning('find: no help for: ' ++ topic);\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpIndex",
  "HelpIndex",
  "kind",
  ["self", "area"],
  function (_self, _area) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _area";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["Guide", "Reference"];
  },
  "{ :self :area |\n\t\t['Guide', 'Reference']\n\t}",
);

sl.addMethod(
  "HelpIndex",
  "HelpIndex",
  "names",
  ["self", "area", "kind"],
  function (_self, _area, _kind) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _area, _kind";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sort_1(
      _copyWithoutDuplicates_1(
        _collect_2(
          _select_2(_contents_1(_self), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _and_2(_equals_2(_first_1(_each), _area), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _equals_2(_second_1(_each), _kind);
            });
          }),
          _third_1,
        ),
      ),
    );
  },
  "{ :self :area :kind |\n\t\tself.contents.select { :each |\n\t\t\teach.first = area & {\n\t\t\t\teach.second = kind\n\t\t\t}\n\t\t}.collect(third:/1).copyWithoutDuplicates.sort\n\t}",
);

sl.addMethod(
  "HelpIndex",
  "HelpIndex",
  "url",
  ["self", "area", "kind", "name"],
  function (_self, _area, _kind, _name) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _area, _kind, _name";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "./lib/spl/help/",
      _area,
      "/",
      _kind,
      "/",
      _name,
      ".help.sl",
    ]);
  },
  "{ :self :area :kind :name |\n\t\t['./lib/spl/help/', area, '/', kind, '/', name, '.help.sl'].join\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(
      _newHelpIndex_0(),
      _collect_2(_select_2(_lines_1(_self), _notEmpty_1), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let __genSym1 = _assertIsOfSize_2(
            _splitBy_2(_replaceString_3(_each, ".help.sl", ""), "/"),
            5,
          ),
          _spl = _at_2(__genSym1, 1),
          _help = _at_2(__genSym1, 2),
          _area = _at_2(__genSym1, 3),
          _kind = _at_2(__genSym1, 4),
          _name = _at_2(__genSym1, 5);
        /* Statements */
        return [_area, _kind, _name];
      }),
    );
  },
  "{ :self |\n\t\tnewHelpIndex().initializeSlots(\n\t\t\tself.lines.select(notEmpty:/1).collect { :each |\n\t\t\t\tlet [spl, help, area, kind, name] = each.replaceString('.help.sl', '').splitBy('/');\n\t\t\t\t[area, kind, name]\n\t\t\t}\n\t\t)\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _useLibraryItem_2(
      _self,
      _LibraryItem_4(
        "helpIndex",
        "https://rohandrape.net/sw/jssc3/text/SmallHoursHelp.text",
        "text/plain",
        _HelpIndex_1,
      ),
    );
  },
  "{ :self |\n\t\tself.useLibraryItem(\n\t\t\tLibraryItem(\n\t\t\t\t'helpIndex',\n\t\t\t\t'https://rohandrape.net/sw/jssc3/text/SmallHoursHelp.text',\n\t\t\t\t'text/plain',\n\t\t\t\tHelpIndex:/1\n\t\t\t)\n\t\t)\n\t}",
);
