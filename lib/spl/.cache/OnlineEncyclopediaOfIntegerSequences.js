sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA014486",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _catalanUnrank_1(_n);
  }, ["n"]),
  "{ :n |\n\t\tn.catalanUnrank\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA071156",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _oeisA085198_1(_oeisA014486_1(_n));
  }, ["n"]),
  "{ :n |\n\t\tn.oeisA014486.oeisA085198\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA085198",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = 0;
    let _h = 1;
    let _i = 2;
    let _fi = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_n, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isOdd_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _n = _solidus_2(_hyphenMinus_2(_n, 1), 2);
            return _h = _hyphenMinus_2(_h, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _n = _solidus_2(_n, 2);
            _s = _plusSign_2(_s, _asterisk_2(_h, _fi));
            _h = _plusSign_2(_h, 1);
            _fi = _asterisk_2(_fi, _i);
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
      }, []),
    );
    return _s;
  }, ["n"]),
  "{ :n |\n\t\tlet s = 0;\n\t\tlet h = 1;\n\t\tlet i = 2;\n\t\tlet fi = 1;\n\t\t{ n != 0 }.whileTrue {\n\t\t\tn.isOdd.if {\n\t\t\t\tn := (n - 1) / 2;\n\t\t\t\th := h - 1\n\t\t\t} {\n\t\t\t\tn := n / 2;\n\t\t\t\ts := s + (h * fi);\n\t\t\t\th := h + 1;\n\t\t\t\tfi := fi * i;\n\t\t\t\ti := i + 1\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.addType(
  false,
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  ["Object", "Storeable", "Equatable"],
  ["identifier", "contents", "bFile"],
);

sl.copyTraitMethodsToType(
  "Object",
  "OeisEntry",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "OeisEntry",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "OeisEntry",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "bFileData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _bFile_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "bFileData: not fetched");
      }, []),
      sl.annotateFunction(function (_bFile) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _bFile";
          throw new Error(errorMessage);
        } /* Statements */
        return _column_2(_bFile, 2);
      }, ["bFile"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.bFile.ifNil {\n\t\t\tself.error('bFileData: not fetched')\n\t\t} { :bFile |\n\t\t\tbFile.column(2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "bFileUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Url_1(
      _format_2("https://oeis.org/%/b%.txt", [
        _identifier_1(_self),
        _allButFirst_1(_identifier_1(_self)),
      ]),
    );
  }, ["self"]),
  "{ :self |\n\t\tUrl(\n\t\t\t'https://oeis.org/%/b%.txt'.format(\n\t\t\t\t[\n\t\t\t\t\tself.identifier,\n\t\t\t\t\tself.identifier.allButFirst\n\t\t\t\t]\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "data",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _splitBy_2(_lookupField_2(_self, "data"), ","),
      _parseDecimalInteger_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('data')\n\t\t.splitBy(',')\n\t\t.collect(parseDecimalInteger:/1)\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "equalBy",
  ["self", "operand", "aBlock:/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_identifier_1(_self), _identifier_1(_operand));
  }, ["self", "operand", "aBlock:/2"]),
  "{ :self :operand :aBlock:/2 |\n\t\taBlock(self.identifier, operand.identifier)\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "fetch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _allFulfilled_1([_fetchContents_1(_self), _fetchBFile_1(_self)]),
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, ["unused"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.fetchContents,\n\t\t\tself.fetchBFile\n\t\t].allFulfilled.then { :unused |\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "fetchContents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _contents_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _then_2(
          _fetchMimeType_2(_jsonUrl_1(_self), "application/json"),
          sl.annotateFunction(function (_data) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _data";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar1 = _assertIsOfSize_2(_data, 1);
            let _entry = _at_2(__SplVar1, 1);
            /* Statements */
            return _contents_2(_self, _entry);
          }, ["data"]),
        );
      }, []),
      sl.annotateFunction(function (_contents) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _contents";
          throw new Error(errorMessage);
        } /* Statements */
        return _resolvedPromise_1(_contents);
      }, ["contents"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.contents.ifNil {\n\t\t\tself.jsonUrl.fetchMimeType(\n\t\t\t\t'application/json'\n\t\t\t).then { :data |\n\t\t\t\tlet [entry] = data;\n\t\t\t\tself.contents := entry\n\t\t\t}\n\t\t} { :contents |\n\t\t\tcontents.resolvedPromise\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "fetchBFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _cachedFetchMimeType_3(
        _bFileUrl_1(_self),
        "OnlineEncyclopediaOfIntegerSequences",
        "text/plain",
      ),
      sl.annotateFunction(function (_data) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _data";
          throw new Error(errorMessage);
        } /* Statements */
        _bFile_2(_self, _oeisParseBFile_1(_data));
        return _self;
      }, ["data"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.bFileUrl.cachedFetchMimeType(\n\t\t\t'OnlineEncyclopediaOfIntegerSequences',\n\t\t\t'text/plain'\n\t\t).then { :data |\n\t\t\tself.bFile := data.oeisParseBFile;\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isValid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOeisIdentifier_1(_identifier_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.identifier.isOeisIdentifier\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "jsonUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Url_1(
      _format_2("https://oeis.org/search?q=id:%&fmt=json", [
        _identifier_1(_self),
      ]),
    );
  }, ["self"]),
  "{ :self |\n\t\tUrl(\n\t\t\t'https://oeis.org/search?q=id:%&fmt=json'.format(\n\t\t\t\t[\n\t\t\t\t\tself.identifier\n\t\t\t\t]\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "keywords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _splitBy_2(_lookupField_2(_self, "keyword"), ",");
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('keyword').splitBy(',')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "lookupField",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _contents_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _fetchContents_1(_self);
        return _error_2(_self, "lookupField: contents not fetched");
      }, []),
      sl.annotateFunction(function (_contents) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _contents";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_contents, _key);
      }, ["contents"]),
    );
  }, ["self", "key"]),
  "{ :self :key |\n\t\tself.contents.ifNil {\n\t\t\tself.fetchContents;\n\t\t\tself.error('lookupField: contents not fetched')\n\t\t} { :contents |\n\t\t\tcontents.at(key)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lookupField_2(_self, "name");
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('name')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "number",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lookupField_2(_self, "number");
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('number')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "offset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseDecimalInteger_1(
      _at_2(_splitBy_2(_lookupField_2(_self, "offset"), ","), 1),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('offset')\n\t\t.splitBy(',')\n\t\t.at(1)\n\t\t.parseDecimalInteger\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("OeisEntry(%)", [_storeString_1(_identifier_1(_self))]);
  }, ["self"]),
  "{ :self |\n\t\t'OeisEntry(%)'.format([self.identifier.storeString])\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "then",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(_fetch_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.fetch.then(aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "OeisEntry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(
      _oeisEntries_1(_system),
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_4(_newOeisEntry_0(), _self, null, null);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.oeisEntries.atIfAbsentPut(self) {\n\t\t\tnewOeisEntry().initializeSlots(self, nil, nil)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "isOeisIdentifier",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _characters_1(_self);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_size_1(_c), 7),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_at_2(_c, 1), "A"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _rangeOrRelativeRange_3(2, 7, 1),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isDigit_1(_at_2(_c, _i));
              }, ["i"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.characters;\n\t\tc.size = 7 & {\n\t\t\tc[1] = 'A' & {\n\t\t\t\t2:7.allSatisfy { :i |\n\t\t\t\t\tc[i].isDigit\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisParseBFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _reject_2(
        _lines_1(_self),
        sl.annotateFunction(function (_s) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _s";
            throw new Error(errorMessage);
          } /* Statements */
          return _verticalLine_2(
            _isEmpty_1(_s),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _beginsWith_2(_s, "#");
            }, []),
          );
        }, ["s"]),
      ),
      sl.annotateFunction(function (_s) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _s";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _splitBy_2(_s, " "),
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _parseDecimalInteger_1(_n);
          }, ["n"]),
        );
      }, ["s"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.lines.reject { :s |\n\t\t\ts.isEmpty | {\n\t\t\t\ts.beginsWith('#')\n\t\t\t}\n\t\t}.collect { :s |\n\t\t\ts.splitBy(' ').collect { :n |\n\t\t\t\tn.parseDecimalInteger\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseDecimalInteger_1(_allButFirst_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.allButFirst.parseDecimalInteger\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "OeisEntry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _OeisEntry_1(_oeisIdentifier_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tOeisEntry(self.oeisIdentifier)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisIdentifier",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2("A", _padLeft_3(_asString_1(_self), [6], "0"));
  }, ["self"]),
  "{ :self |\n\t\t'A' ++ self.asString.padLeft([6], '0')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisSplFunctionReferenceTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "oeisSplFunctionReferenceTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_1([
          ["additivePersistence", [31286]],
          ["aliquotSequence", [44050]],
          ["aliquotSum", [1065]],
          ["aperysConstant", [2117]],
          ["arithmeticGeometricMean", [68521, 84895, 84896, 84897]],
          ["arithmeticProgression", [27, 5408, 5843, 8585, 8586, 1477]],
          ["artinsConstant", [5596]],
          ["balancedCayleyTree", [3945, 3946, 3947, 83329, 25192, 136412]],
          ["baumSweetSequence", [86747]],
          ["beattySequence", [
            1951,
            1952,
            22838,
            54406,
            22843,
            54385,
            22844,
            54386,
            201,
            1950,
            54347,
          ]],
          ["bellB", [106800]],
          ["bellNumber", [110, 11971]],
          ["bernoulliNumber", [367, 2445]],
          ["bernoulliSequence", [27641, 27642]],
          ["bernoulliTriangle", [8949]],
          ["binaryExpansion", [7088]],
          ["binomial", [
            125,
            6542,
            27907,
            127,
            984,
            166556,
            109449,
            332,
            60693,
            2260,
            4736,
          ]],
          ["bitAnd", [279125, 246028]],
          ["bitReversalPermutation", [30109]],
          ["bitShiftLeft", [1317]],
          ["bitXor", [3188, 48720, 193231]],
          ["braceletCount", [81720, 29, 27671, 32275]],
          ["brunsConstant", [65421]],
          ["calabisConstant", [46095]],
          ["calkinWilfSequence", [2487]],
          ["cantorNumbers", [5823]],
          ["cantorStaircase", [95844, 95845]],
          ["carmichaelLambda", [2322]],
          ["cartesianIndexToDiagonalIndex", [124, 217]],
          ["catalanNumber", [108, 14137, 14138]],
          ["catalanTriangle", [9766, 96, 5586, 5587]],
          ["catalansConstant", [6752]],
          ["catalanRank", [215406]],
          ["catalanUnrank", [14486, 80300, 57514]],
          ["ceiling", [5041]],
          ["centeredHexagonalNumber", [3215]],
          ["centeredPolygonalNumber", [5448, 1844, 5891, 3215]],
          ["champernowneSequence", [7376]],
          ["chebyshevT", [8310, 53120]],
          ["chebyshevU", [8312, 53117]],
          ["chordDiagrams", [7769]],
          ["circumflexAccent", [272]],
          ["collatzSequence", [70165, 8884, 6877, 6577, 127824]],
          ["connellSequence", [1614]],
          ["continuedFraction", [3417]],
          ["cos", [268038]],
          ["convergents", [1040, 1053]],
          ["convolve", [1629]],
          ["conwaysConstant", [14715]],
          ["copelandErdosSequence", [33308]],
          ["cot", [69855]],
          ["coth", [85984]],
          ["decimalPeriod", [1913, 51626]],
          ["delannoySequence", [8288]],
          ["derangements", [166]],
          ["differences", [49296]],
          ["digitCount", [120, 6046, 5823, 5811, 788, 69, 1969, 23416]],
          ["digitalRoot", [10888]],
          ["digitSum", [
            120,
            53735,
            53737,
            53824,
            53827,
            53828,
            53829,
            53830,
            7953,
          ]],
          ["discriminant", [7878]],
          ["distinctPrimeFactors", [8472]],
          ["divisorSigma", [5, 203, 78923, 5114]],
          ["divisorSummatoryFunction", [6218]],
          ["doubleFactorial", [1147, 165]],
          ["dualZeckendorfRepresentation", [
            104326,
            112309,
            112310,
            3754,
            331191,
            104325,
          ]],
          ["e", [1113]],
          ["ekgSequence", [64413, 64664]],
          ["engelExpansion", [6784, 27, 28254]],
          ["entringerTriangle", [8281]],
          ["equispacedTriples", [2620]],
          ["erdosSelfridgeFunction", [3458]],
          ["euclidNumber", [6862]],
          ["eulerGamma", [2852, 1620, 94640]],
          ["eulerGradusSuavitatis", [275314]],
          ["eulerNumber", [122045, 111, 364, 28296]],
          ["eulerUpDownNumber", [111]],
          ["eulerianNumber", [8292]],
          ["eulerianNumberSecondOrder", [8517]],
          ["eulerPhi", [10, 2088]],
          ["eulerTransform", [219, 23871, 34899, 166861]],
          ["evenPart", [6519]],
          ["fabiusFunction", [272755, 272757]],
          ["factorial", [142, 435, 5130, 55151]],
          ["factorialPower", [68424]],
          ["factorInteger", [6881, 124859]],
          ["fareySequence", [5728, 6842, 6843]],
          ["feigenbaumConstant", [6890]],
          ["fibonacci", [
            45,
            129,
            6190,
            1076,
            52918,
            58071,
            1060,
            105870,
            3893,
            1177,
            71,
          ]],
          ["fibonacciEntryPoint", [1177]],
          ["fibonacciFactorial", [3266]],
          ["fibonacciFactorialConstant", [62073]],
          ["fibonacciPolynomial", [162515, 49310]],
          ["fibonacciSequence", [45, 7660, 82115]],
          ["fibonacciWord", [3849]],
          ["finesSequence", [957]],
          ["finiteGroupCount", [1]],
          ["finiteAbelianGroupCount", [688, 60689]],
          ["floor", [7891]],
          ["fortunateNumber", [5235]],
          ["freimansConstant", [118472]],
          ["fromContinuedFraction", [39662]],
          ["fromDigits", [19518, 7088, 30101]],
          ["fussCatalanNumber", [7318, 108, 245, 2057, 1764, 2293]],
          ["gamma", [94640, 94641]],
          ["gausssConstant", [53002, 53003, 14549]],
          ["gcd", [8364]],
          ["gelfondsConstant", [39661, 60295, 18938]],
          ["generalizedPentagonalNumbers", [1318]],
          ["gijswijtsSequence", [90822]],
          ["glaisher", [74962]],
          ["goebelsSequence", [3504]],
          ["goldenRatio", [1622, 5206, 104457, 84531]],
          ["golombsSequence", [1462]],
          ["gompertzConstant", [73003]],
          ["gouldsNumber", [1316]],
          ["gouldsSequence", [1316, 6046, 120]],
          ["gradedReflectedColexicographicSort", [36038]],
          ["grahlSequence", [229037, 309890]],
          ["grayDecode", [6068]],
          ["grayEncode", [14550, 3188, 105530, 98488]],
          ["haltonSequence", [30101, 30102]],
          ["hammingWeight", [120, 10060, 14311]],
          ["harmonicNumber", [2805, 1008]],
          ["harmoniousNumber", [1622, 60006, 60007, 160155, 230159, 230160]],
          ["hexagonalNumber", [384]],
          ["hofstadterQSequence", [5185]],
          ["hypergeometric2F1", [10683]],
          ["integerDigits", [
            62756,
            364024,
            7376,
            265326,
            117966,
            160855,
            10060,
            5811,
            14311,
            29931,
            66099,
            48793,
            167489,
            101211,
            322182,
            7954,
          ]],
          ["integerExponent", [1511, 7814, 25480, 110963, 366601]],
          ["integerLength", [70939, 61384]],
          ["integerPartitions", [36036, 80577, 80576, 193073, 334301]],
          ["integerPartitionUnrank", [227739, 129594, 112798, 215366]],
          ["integerSquareRoot", [196]],
          ["interprime", [24675]],
          ["inventorySequence", [342585]],
          ["involutionNumber", [85]],
          ["iota", [2260, 4736]],
          ["isAbundantNumber", [5101]],
          ["isAlmostPrime", [40, 1358, 46308, 69272]],
          ["isAmicablePair", [259180]],
          ["isBalancedPrime", [6562]],
          ["isCarmichaelNumber", [2997]],
          ["isChenPrime", [109611]],
          ["isColossallyAbundantNumber", [4490]],
          ["isComposite", [2808]],
          ["isCubicResidue", [46530]],
          ["isDeficientNumber", [5100]],
          ["isDyckWord", [80116, 14486, 63171]],
          ["isEven", [5843]],
          ["isFullReptendPrime", [1913]],
          ["isGaussianPrime", [2145]],
          ["isHarmonicDivisorNumber", [1599]],
          ["isHarshadNumber", [5349]],
          ["isHeronian", [46128, 46129, 46130, 46131, 55592, 55593, 55594]],
          ["isHighlyAbundantNumber", [5101]],
          ["isHighlyCompositeNumber", [2182, 2183]],
          ["isKaprekarNumber", [6886]],
          ["isLesserCousinPrime", [23200, 46132]],
          ["isLesserTwinPrime", [1359, 14574, 6512]],
          ["isLukasiewiczWord", [71153]],
          ["isNarcissisticNumber", [5188]],
          ["isOdd", [5408]],
          ["isPalindrome", [2113, 6072, 6995]],
          ["isPerfectNumber", [396]],
          ["isPerfectPower", [1597]],
          ["isPerfectSquare", [290]],
          ["isPoliteNumber", [138591]],
          ["isPowerfulNumber", [1694, 118896, 60355]],
          ["isPracticalNumber", [5153]],
          ["isPrime", [5846, 5385, 5384, 353, 6285]],
          ["isPrimePower", [246655, 246547, 15]],
          ["isPrimitiveAbundantNumber", [71395]],
          ["isPronicNumber", [2378]],
          ["isPseudoperfectNumber", [5835]],
          ["isPythagoreanPrime", [2144]],
          ["isRefactorableNumber", [33950]],
          ["isRegularNumber", [51037]],
          ["isRoughNumber", [7775, 8364]],
          ["isSemiprime", [1358, 6881]],
          ["isSinglyEven", [16825]],
          ["isSmoothNumber", [
            79,
            3586,
            51037,
            2473,
            51038,
            80197,
            80681,
            80682,
            80683,
          ]],
          ["isSphenicNumber", [7304, 165936]],
          ["isSquareFreeWord", [337005]],
          ["isSternPrime", [42978]],
          ["isStrongPseudoprime", [
            1262,
            20229,
            20230,
            20231,
            20232,
            2023,
            20234,
            20235,
          ]],
          ["isStrongPrime", [51634]],
          ["isSumOfTwoSquares", [1481]],
          ["isSumProductNumber", [38369]],
          ["isSuperabundantNumber", [4394]],
          ["isSuperiorHighlyCompositeNumber", [2201]],
          ["isUnitFraction", [3592]],
          ["isWeakPrime", [51635]],
          ["isWeirdNumber", [6037]],
          ["iterate", [14707, 118006]],
          ["jacobiSymbol", [47713]],
          ["jacobsthalNumber", [1045]],
          ["josephusProblem", [6257, 54995, 32434]],
          ["josephusSequence", [209258]],
          ["jugglerSequence", [7320, 94716, 94683, 389383]],
          ["kaprekarSequence", [99009]],
          ["keplerBouwkampConstant", [85365]],
          ["keplerTree", [294442, 20651]],
          ["khinchinsConstant", [2210, 2211]],
          ["kolakoskiSequence", [2]],
          ["landauConstant", [81760]],
          ["landauRamanujanConstant", [81760]],
          ["lassalleNumber", [180874]],
          ["leastPrimeFactorList", [20639]],
          ["legendreP", [8316]],
          ["leibnizHarmonicTriangle", [3506]],
          ["lemniscateConstant", [62539]],
          ["levysConstant", [86702, 86703]],
          ["linearRecurrence", [
            931,
            204,
            129,
            2203,
            1608,
            975,
            5578,
            295,
            225,
            45,
            51049,
            1590,
            930,
            79398,
            103372,
            103373,
            1076,
            134816,
            3269,
            17817,
            3520,
            975,
            1687,
            52920,
            17827,
            1653,
            1519,
            2943,
            127,
            931,
            56530,
            124,
            78,
            1108,
            1840,
            45,
            1333,
            129,
            84519,
            6356,
          ]],
          ["liouvilleLambda", [8836]],
          ["lobbNumber", [39599]],
          ["log", [130233]],
          ["logarithmicIntegral", [70769, 69284]],
          ["lookAndSaySequence", [5150, 5341]],
          ["lowerChristoffelWord", [144595, 144596, 144608]],
          ["lucasNumber", [32, 1606]],
          ["lucasNumbers", [32, 5479]],
          ["lyndonWords", [1037]],
          ["madelungConstant", [85469]],
          ["magicSquare", [33812, 127907]],
          ["magicSquareSummary", [33812, 126649, 126650, 126651, 127907]],
          ["mallowsSequence", [5229]],
          ["mangoldtLambda", [14963]],
          ["markovNumberTree", [2559]],
          ["matrixPower", [52534]],
          ["meisselMertensConstant", [77761]],
          ["memoize", [4001, 2083]],
          ["mersenneNumber", [225]],
          ["mersennePrimeExponent", [43]],
          ["mertensFunction", [2321]],
          ["metallicMean", [1622, 14176, 98316, 98317, 98318]],
          ["minkowskiQuestionMark", [48819]],
          ["mod", [224, 48152, 28897, 88705]],
          ["moebiusMu", [8683, 2321, 6575]],
          ["moserDeBruijnSequence", [695]],
          ["motzkinNumber", [1006]],
          ["motzkinSequence", [1006]],
          ["multiplicativeOrder", [
            1913,
            1122,
            19334,
            19335,
            19336,
            19337,
            19338,
            19339,
            6694,
          ]],
          ["namedConstant", [86088]],
          ["narayanaNumber", [1263]],
          ["narayanaSequence", [930]],
          ["nearestPrime", [51697]],
          ["necklaceCount", [54631, 31, 87854]],
          ["nestWhile", [3602]],
          ["noergaardInfinitySequence", [4718, 256184, 83866, 256185]],
          ["noergaardRhythmicInfinitySystem", [73334]],
          ["numberOfCompositions", [7318]],
          ["numberOfCompositionsWeak", [178300]],
          ["oddPart", [265]],
          ["oloid", [215447]],
          ["omegaConstant", [30178, 30797]],
          ["optimalGolombRulers", [3022]],
          ["padovanSequence", [931, 1608, 182097]],
          ["paperFoldingConstant", [143347]],
          ["partitionFunctionP", [41, 8284, 26820]],
          ["partitionFunctionQ", [8289]],
          ["partitionsQ", [9]],
          ["partitionsQ", [41]],
          ["pascalTriangle", [7318, 6046, 7318, 47999]],
          ["pellLucasNumbers", [2203]],
          ["pellNumbers", [129, 86383, 96650, 86383]],
          ["pentagonalNumber", [326]],
          ["perfectDigitalInvariantSequence", [193995]],
          ["perfectNumber", [396]],
          ["periodDoublingSequence", [96268]],
          ["perrinFunction", [1608, 112881]],
          ["perrinSequence", [1608]],
          ["pi", [796, 1203, 2485, 2486]],
          ["pisanoPeriod", [1175, 66853]],
          ["plasticRatio", [60006]],
          ["politeness", [69283]],
          ["polygonalNumber", [
            124,
            217,
            139610,
            27,
            217,
            290,
            326,
            384,
            566,
            567,
            1106,
            1107,
            51682,
            51864,
            51865,
            51866,
            51867,
            51868,
            51869,
            51870,
            51871,
            51872,
            51873,
            51874,
            51875,
            51876,
          ]],
          ["Polynomial", [3263]],
          ["powerMod", [96008, 1567, 2371]],
          ["previousPrime", [7917]],
          ["prime", [40, 46929, 243353, 1348, 6450]],
          ["primeDistance", [51699]],
          ["primeDivisors", [3592]],
          ["primeFactors", [20639, 27746, 238689, 1414, 268868]],
          ["primeGap", [1223]],
          ["primeOmega", [1222]],
          ["primeNu", [1221, 34444]],
          ["primePi", [720, 49084, 156552, 112798, 56239]],
          ["primesList", [40]],
          ["primeSignature", [36035, 25487, 118914, 46523, 181819]],
          ["primitiveRootList", [33948, 46144, 1913, 1122]],
          ["primorial", [2110, 278159]],
          ["pyramidalNumber", [292, 330, 2411, 2412, 2413]],
          ["pythagorasConstant", [2193]],
          ["quotient", [601]],
          ["quadraticNonresidues", [53760, 28786, 28736]],
          ["quadraticResidues", [
            46071,
            96008,
            105612,
            47210,
            96103,
            48152,
            10434,
            10385,
          ]],
          ["quotientRemainder", [118006]],
          ["rabbitConstant", [14565]],
          ["radical", [7947]],
          ["ramanujanTau", [594]],
          ["recamanSequence", [5132]],
          ["reciprocalFibonacciConstant", [79586]],
          ["regularPaperfoldingSequence", [14577]],
          ["replicate", [2024]],
          ["repunit", [
            225,
            3462,
            2450,
            3463,
            3464,
            23000,
            23001,
            2452,
            2275,
            16123,
            16125,
          ]],
          ["rudinShapiro", [20985]],
          ["rulerFunction", [1511]],
          ["runLengthsOf", [245562]],
          ["runLengthTransform", [246028, 278159]],
          ["schroderNumber", [6318, 33877]],
          ["schroderSequence", [6318]],
          ["secondFeigenbaumConstant", [6891]],
          ["secondOrderEulerianTriangle", [8517]],
          ["seidelTriangle", [8280]],
          ["selfCountingNumber", [2024]],
          ["selfCountingSequence", [2024]],
          ["sequenceCount", [3714, 104326, 3754]],
          ["sierpinskiConstant", [241017, 62089]],
          ["sieveOfAtkin", [40]],
          ["sieveOfEratosthenes", [40]],
          ["sieveOfPritchard", [40]],
          ["sieveOfSundaram", [40]],
          ["signatureSequence", [7337, 84531, 84532, 118276]],
          ["silverConstant", [116425]],
          ["silverRatio", [14176]],
          ["sin", [174344]],
          ["soldnersConstant", [70769, 91723]],
          ["somosSequence", [6720]],
          ["sortingNumber", [1855]],
          ["square", [290]],
          ["squarePyramidalNumber", [330]],
          ["squareSpiral", [174344, 268038]],
          ["squaresR", [118, 4018, 1481]],
          ["sqrt", [7336, 37]],
          ["stanleySequence", [
            5836,
            5836,
            185256,
            5487,
            188053,
            188054,
            187843,
            188055,
            188052,
            188056,
            188057,
          ]],
          ["sternBrocotNumber", [2487]],
          ["sternBrocotSequence", [2487]],
          ["stirlingS1", [8275]],
          ["stirlingS2", [8277, 392, 453]],
          ["stolarskyArray", [35506]],
          ["stolarskyHarborthConstant", [6046, 77464]],
          ["stolarskyIndex", [98861, 98862]],
          ["subfactorial", [166]],
          ["substitutionSystem", [3849, 10060, 14577, 20985, 96268]],
          ["superCatalanNumber", [1003, 6318]],
          ["supergoldenRatio", [92526]],
          ["supersilverRatio", [356035]],
          ["sylvesterExpansion", [50205]],
          ["sylvestersSequence", [58]],
          ["szekeresSequence", [3278]],
          ["tetrahedralNumber", [292]],
          ["tetranacciConstant", [58265]],
          ["thueMorseSequence", [10060]],
          ["toothpickSequence", [139250]],
          ["triangularArray", [
            7318,
            75363,
            75364,
            94587,
            166556,
            77028,
            48601,
            2260,
            4736,
            96470,
            3991,
          ]],
          ["triangularNumber", [217]],
          ["tribonacciConstant", [58265]],
          ["tribonacciNumber", [73]],
          ["tribonacciWord", [92782]],
          ["unitaryDivisors", [77610]],
          ["unitaryDivisorSigma", [34444, 68068]],
          ["vanDerCorputNumber", [30101, 30102, 62383]],
          ["vanDerCorputsConstant", [143305]],
          ["vanDerLaanSequence", [182097]],
          ["vanEckSequence", [181391]],
          ["vedicSquare", [125959, 180592, 180593, 180594]],
          ["wedderburnEtheringtonNumbers", [1190]],
          ["wheelSieve", [40]],
          ["wythoffArray", [3622, 35513]],
          ["wythoffLower", [201]],
          ["wythoffPair", [201, 1950]],
          ["wythoffUpper", [1950]],
          ["xorTriangle", [334556, 334769]],
          ["yellowstonePermutation", [98550]],
          ["zeckendorfRepresentation", [
            14417,
            7895,
            3714,
            328208,
            35517,
            94202,
            35614,
            87172,
            102364,
          ]],
          ["zero", [4]],
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('oeisSplFunctionReferenceTable') {\n\t\t\t(\n\t\t\t\tadditivePersistence: [031286],\n\t\t\t\taliquotSequence: [044050],\n\t\t\t\taliquotSum: [001065],\n\t\t\t\taperysConstant: [002117],\n\t\t\t\tarithmeticGeometricMean: [068521 084895 084896 084897],\n\t\t\t\tarithmeticProgression: [000027 005408 005843 008585 008586 001477],\n\t\t\t\tartinsConstant: [005596],\n\t\t\t\tbalancedCayleyTree: [003945 003946 003947 083329 025192 136412],\n\t\t\t\tbaumSweetSequence: [086747],\n\t\t\t\tbeattySequence: [001951 001952 022838 054406 022843 054385 022844 054386 000201 001950 054347],\n\t\t\t\tbellB: [106800],\n\t\t\t\tbellNumber: [000110 011971],\n\t\t\t\tbernoulliNumber: [000367 002445],\n\t\t\t\tbernoulliSequence: [027641 027642],\n\t\t\t\tbernoulliTriangle: [008949],\n\t\t\t\tbinaryExpansion: [007088],\n\t\t\t\tbinomial: [000125 006542 027907 000127 000984 166556 109449 000332 060693 002260 004736],\n\t\t\t\tbitAnd: [279125 246028],\n\t\t\t\tbitReversalPermutation: [030109],\n\t\t\t\tbitShiftLeft: [001317],\n\t\t\t\tbitXor: [003188 048720 193231],\n\t\t\t\tbraceletCount: [081720 000029 027671 032275],\n\t\t\t\tbrunsConstant: [065421],\n\t\t\t\tcalabisConstant: [046095],\n\t\t\t\tcalkinWilfSequence: [002487],\n\t\t\t\tcantorNumbers: [005823],\n\t\t\t\tcantorStaircase: [095844 095845],\n\t\t\t\tcarmichaelLambda: [002322],\n\t\t\t\tcartesianIndexToDiagonalIndex: [000124 000217],\n\t\t\t\tcatalanNumber: [000108 014137 014138],\n\t\t\t\tcatalanTriangle: [009766 000096 005586 005587],\n\t\t\t\tcatalansConstant: [006752],\n\t\t\t\tcatalanRank: [215406],\n\t\t\t\tcatalanUnrank: [014486 080300 057514],\n\t\t\t\tceiling: [005041],\n\t\t\t\tcenteredHexagonalNumber: [003215],\n\t\t\t\tcenteredPolygonalNumber: [005448 001844 005891 003215],\n\t\t\t\tchampernowneSequence: [007376],\n\t\t\t\tchebyshevT: [008310 053120],\n\t\t\t\tchebyshevU: [008312 053117],\n\t\t\t\tchordDiagrams: [007769],\n\t\t\t\tcircumflexAccent: [000272],\n\t\t\t\tcollatzSequence: [070165 008884 006877 006577 127824],\n\t\t\t\tconnellSequence: [001614],\n\t\t\t\tcontinuedFraction: [003417],\n\t\t\t\tcos: [268038],\n\t\t\t\tconvergents: [001040 001053],\n\t\t\t\tconvolve: [001629],\n\t\t\t\tconwaysConstant: [014715],\n\t\t\t\tcopelandErdosSequence: [033308],\n\t\t\t\tcot: [069855],\n\t\t\t\tcoth: [085984],\n\t\t\t\tdecimalPeriod: [001913 051626],\n\t\t\t\tdelannoySequence: [008288],\n\t\t\t\tderangements: [000166],\n\t\t\t\tdifferences: [049296],\n\t\t\t\tdigitCount: [000120 006046 005823 005811 000788 000069 001969 023416],\n\t\t\t\tdigitalRoot: [010888],\n\t\t\t\tdigitSum: [000120 053735 053737 053824 053827 053828 053829 053830 007953],\n\t\t\t\tdiscriminant: [007878],\n\t\t\t\tdistinctPrimeFactors: [008472],\n\t\t\t\tdivisorSigma: [000005 000203 078923 005114],\n\t\t\t\tdivisorSummatoryFunction: [006218],\n\t\t\t\tdoubleFactorial: [001147 000165],\n\t\t\t\tdualZeckendorfRepresentation: [104326 112309 112310 003754 331191 104325],\n\t\t\t\te: [001113],\n\t\t\t\tekgSequence: [064413 064664],\n\t\t\t\tengelExpansion: [006784 000027 028254],\n\t\t\t\tentringerTriangle: [008281],\n\t\t\t\tequispacedTriples: [002620],\n\t\t\t\terdosSelfridgeFunction: [003458],\n\t\t\t\teuclidNumber: [006862],\n\t\t\t\teulerGamma: [002852 001620 094640],\n\t\t\t\teulerGradusSuavitatis: [275314],\n\t\t\t\teulerNumber: [122045 000111 000364 028296],\n\t\t\t\teulerUpDownNumber: [000111],\n\t\t\t\teulerianNumber: [008292],\n\t\t\t\teulerianNumberSecondOrder: [008517],\n\t\t\t\teulerPhi: [000010 002088],\n\t\t\t\teulerTransform: [000219 023871 034899 166861],\n\t\t\t\tevenPart: [006519],\n\t\t\t\tfabiusFunction: [272755 272757],\n\t\t\t\tfactorial: [000142 000435 005130 055151],\n\t\t\t\tfactorialPower: [068424],\n\t\t\t\tfactorInteger: [006881 124859],\n\t\t\t\tfareySequence: [005728 006842 006843],\n\t\t\t\tfeigenbaumConstant: [006890],\n\t\t\t\tfibonacci: [000045 000129 006190 001076 052918 058071 001060 105870 003893 001177 000071],\n\t\t\t\tfibonacciEntryPoint: [001177],\n\t\t\t\tfibonacciFactorial: [003266],\n\t\t\t\tfibonacciFactorialConstant: [062073],\n\t\t\t\tfibonacciPolynomial: [162515 049310],\n\t\t\t\tfibonacciSequence: [000045 007660 082115],\n\t\t\t\tfibonacciWord: [003849],\n\t\t\t\tfinesSequence: [000957],\n\t\t\t\tfiniteGroupCount: [000001],\n\t\t\t\tfiniteAbelianGroupCount: [000688 060689],\n\t\t\t\tfloor: [007891],\n\t\t\t\tfortunateNumber: [005235],\n\t\t\t\tfreimansConstant: [118472],\n\t\t\t\tfromContinuedFraction: [039662],\n\t\t\t\tfromDigits: [019518 007088 030101],\n\t\t\t\tfussCatalanNumber: [007318 000108 000245 002057 001764 002293],\n\t\t\t\tgamma: [094640 094641],\n\t\t\t\tgausssConstant: [053002 053003 014549],\n\t\t\t\tgcd: [008364],\n\t\t\t\tgelfondsConstant: [039661 060295 018938],\n\t\t\t\tgeneralizedPentagonalNumbers: [001318],\n\t\t\t\tgijswijtsSequence: [090822],\n\t\t\t\tglaisher: [074962],\n\t\t\t\tgoebelsSequence: [003504],\n\t\t\t\tgoldenRatio: [001622 005206 104457 084531],\n\t\t\t\tgolombsSequence: [001462],\n\t\t\t\tgompertzConstant: [073003],\n\t\t\t\tgouldsNumber: [001316],\n\t\t\t\tgouldsSequence: [001316 006046 000120],\n\t\t\t\tgradedReflectedColexicographicSort: [036038],\n\t\t\t\tgrahlSequence: [229037 309890],\n\t\t\t\tgrayDecode: [006068],\n\t\t\t\tgrayEncode: [014550 003188 105530 098488],\n\t\t\t\thaltonSequence: [030101 030102],\n\t\t\t\thammingWeight: [000120 010060 014311],\n\t\t\t\tharmonicNumber: [002805 001008],\n\t\t\t\tharmoniousNumber: [001622 060006 060007 160155 230159 230160],\n\t\t\t\thexagonalNumber: [000384],\n\t\t\t\thofstadterQSequence: [005185],\n\t\t\t\thypergeometric2F1: [010683],\n\t\t\t\tintegerDigits: [062756 364024 007376 265326 117966 160855 010060 005811 014311 029931 066099 048793 167489 101211 322182 007954],\n\t\t\t\tintegerExponent: [001511 007814 025480 110963 366601],\n\t\t\t\tintegerLength: [070939 061384],\n\t\t\t\tintegerPartitions: [036036 080577 080576 193073 334301],\n\t\t\t\tintegerPartitionUnrank: [227739 129594 112798 215366],\n\t\t\t\tintegerSquareRoot: [000196],\n\t\t\t\tinterprime: [024675],\n\t\t\t\tinventorySequence: [342585],\n\t\t\t\tinvolutionNumber: [000085],\n\t\t\t\tiota: [002260 004736],\n\t\t\t\tisAbundantNumber: [005101],\n\t\t\t\tisAlmostPrime: [000040 001358 046308 069272],\n\t\t\t\tisAmicablePair: [259180],\n\t\t\t\tisBalancedPrime: [006562],\n\t\t\t\tisCarmichaelNumber: [002997],\n\t\t\t\tisChenPrime: [109611],\n\t\t\t\tisColossallyAbundantNumber: [004490],\n\t\t\t\tisComposite: [002808],\n\t\t\t\tisCubicResidue: [046530],\n\t\t\t\tisDeficientNumber: [005100],\n\t\t\t\tisDyckWord: [080116 014486 063171],\n\t\t\t\tisEven: [005843],\n\t\t\t\tisFullReptendPrime: [001913],\n\t\t\t\tisGaussianPrime: [002145],\n\t\t\t\tisHarmonicDivisorNumber: [001599],\n\t\t\t\tisHarshadNumber: [005349],\n\t\t\t\tisHeronian: [046128 046129 046130 046131 055592 055593 055594],\n\t\t\t\tisHighlyAbundantNumber: [005101],\n\t\t\t\tisHighlyCompositeNumber: [002182 002183],\n\t\t\t\tisKaprekarNumber: [006886],\n\t\t\t\tisLesserCousinPrime: [023200 046132],\n\t\t\t\tisLesserTwinPrime: [001359 014574 006512],\n\t\t\t\tisLukasiewiczWord: [071153],\n\t\t\t\tisNarcissisticNumber: [005188],\n\t\t\t\tisOdd: [005408],\n\t\t\t\tisPalindrome: [002113 006072 006995],\n\t\t\t\tisPerfectNumber: [000396],\n\t\t\t\tisPerfectPower: [001597],\n\t\t\t\tisPerfectSquare: [000290],\n\t\t\t\tisPoliteNumber: [138591],\n\t\t\t\tisPowerfulNumber: [001694 118896 060355],\n\t\t\t\tisPracticalNumber: [005153],\n\t\t\t\tisPrime: [005846 005385 005384 000353 006285],\n\t\t\t\tisPrimePower: [246655 246547 000015],\n\t\t\t\tisPrimitiveAbundantNumber: [071395],\n\t\t\t\tisPronicNumber: [002378],\n\t\t\t\tisPseudoperfectNumber: [005835],\n\t\t\t\tisPythagoreanPrime: [002144],\n\t\t\t\tisRefactorableNumber: [033950],\n\t\t\t\tisRegularNumber: [051037],\n\t\t\t\tisRoughNumber: [007775 008364],\n\t\t\t\tisSemiprime: [001358 006881],\n\t\t\t\tisSinglyEven: [016825],\n\t\t\t\tisSmoothNumber: [000079 003586 051037 002473 051038 080197 080681 080682 080683],\n\t\t\t\tisSphenicNumber: [007304 165936],\n\t\t\t\tisSquareFreeWord: [337005],\n\t\t\t\tisSternPrime: [042978],\n\t\t\t\tisStrongPseudoprime: [001262 020229 020230 020231 020232 02023 020234 020235],\n\t\t\t\tisStrongPrime: [051634],\n\t\t\t\tisSumOfTwoSquares: [001481],\n\t\t\t\tisSumProductNumber: [038369],\n\t\t\t\tisSuperabundantNumber: [004394],\n\t\t\t\tisSuperiorHighlyCompositeNumber: [002201],\n\t\t\t\tisUnitFraction: [003592],\n\t\t\t\tisWeakPrime: [051635],\n\t\t\t\tisWeirdNumber: [006037],\n\t\t\t\titerate: [014707 118006],\n\t\t\t\tjacobiSymbol: [047713],\n\t\t\t\tjacobsthalNumber: [001045],\n\t\t\t\tjosephusProblem: [006257 054995 032434],\n\t\t\t\tjosephusSequence: [209258],\n\t\t\t\tjugglerSequence: [007320 094716 094683 389383],\n\t\t\t\tkaprekarSequence: [099009],\n\t\t\t\tkeplerBouwkampConstant: [085365],\n\t\t\t\tkeplerTree: [294442 020651],\n\t\t\t\tkhinchinsConstant: [002210 002211],\n\t\t\t\tkolakoskiSequence: [000002],\n\t\t\t\tlandauConstant: [081760],\n\t\t\t\tlandauRamanujanConstant: [081760],\n\t\t\t\tlassalleNumber: [180874],\n\t\t\t\tleastPrimeFactorList: [020639],\n\t\t\t\tlegendreP: [008316],\n\t\t\t\tleibnizHarmonicTriangle: [003506],\n\t\t\t\tlemniscateConstant: [062539],\n\t\t\t\tlevysConstant: [086702 086703],\n\t\t\t\tlinearRecurrence: [\n\t\t\t\t\t000931 000204 000129 002203 001608 000975 005578 000295 000225 000045\n\t\t\t\t\t051049 001590 000930 079398 103372 103373 001076 134816 003269 017817\n\t\t\t\t\t003520 000975 001687 052920 017827 001653 001519 002943 000127 000931\n\t\t\t\t\t056530 000124 000078 001108 001840 000045 001333 000129 084519 006356\n\t\t\t\t],\n\t\t\t\tliouvilleLambda: [008836],\n\t\t\t\tlobbNumber: [039599],\n\t\t\t\tlog: [130233],\n\t\t\t\tlogarithmicIntegral: [070769 069284],\n\t\t\t\tlookAndSaySequence: [005150 005341],\n\t\t\t\tlowerChristoffelWord: [144595 144596 144608],\n\t\t\t\tlucasNumber: [000032 001606],\n\t\t\t\tlucasNumbers: [000032 005479],\n\t\t\t\tlyndonWords: [001037],\n\t\t\t\tmadelungConstant: [085469],\n\t\t\t\tmagicSquare: [033812 127907],\n\t\t\t\tmagicSquareSummary: [033812 126649 126650 126651 127907],\n\t\t\t\tmallowsSequence: [005229],\n\t\t\t\tmangoldtLambda: [014963],\n\t\t\t\tmarkovNumberTree: [002559],\n\t\t\t\tmatrixPower: [052534],\n\t\t\t\tmeisselMertensConstant: [077761],\n\t\t\t\tmemoize: [004001 002083],\n\t\t\t\tmersenneNumber: [000225],\n\t\t\t\tmersennePrimeExponent: [000043],\n\t\t\t\tmertensFunction: [002321],\n\t\t\t\tmetallicMean: [001622 014176 098316 098317 098318],\n\t\t\t\tminkowskiQuestionMark: [048819],\n\t\t\t\tmod: [000224 048152 028897 088705],\n\t\t\t\tmoebiusMu: [008683 002321 006575],\n\t\t\t\tmoserDeBruijnSequence: [000695],\n\t\t\t\tmotzkinNumber: [001006],\n\t\t\t\tmotzkinSequence: [001006],\n\t\t\t\tmultiplicativeOrder: [001913 001122 019334 019335 019336 019337 019338 019339 006694],\n\t\t\t\tnamedConstant: [086088],\n\t\t\t\tnarayanaNumber: [001263],\n\t\t\t\tnarayanaSequence: [000930],\n\t\t\t\tnearestPrime: [051697],\n\t\t\t\tnecklaceCount: [054631 000031 087854],\n\t\t\t\tnestWhile: [003602],\n\t\t\t\tnoergaardInfinitySequence: [004718 256184 083866 256185],\n\t\t\t\tnoergaardRhythmicInfinitySystem: [073334],\n\t\t\t\tnumberOfCompositions: [007318],\n\t\t\t\tnumberOfCompositionsWeak: [178300],\n\t\t\t\toddPart: [000265],\n\t\t\t\toloid: [215447],\n\t\t\t\tomegaConstant: [030178 030797],\n\t\t\t\toptimalGolombRulers: [003022],\n\t\t\t\tpadovanSequence: [000931 001608 182097],\n\t\t\t\tpaperFoldingConstant: [143347],\n\t\t\t\tpartitionFunctionP: [000041 008284 026820],\n\t\t\t\tpartitionFunctionQ: [008289],\n\t\t\t\tpartitionsQ: [000009],\n\t\t\t\tpartitionsQ: [000041],\n\t\t\t\tpascalTriangle: [007318 006046 007318 047999],\n\t\t\t\tpellLucasNumbers: [002203],\n\t\t\t\tpellNumbers: [000129 086383 096650 086383],\n\t\t\t\tpentagonalNumber: [000326],\n\t\t\t\tperfectDigitalInvariantSequence: [193995],\n\t\t\t\tperfectNumber: [000396],\n\t\t\t\tperiodDoublingSequence: [096268],\n\t\t\t\tperrinFunction: [001608 112881],\n\t\t\t\tperrinSequence: [001608],\n\t\t\t\tpi: [000796 001203 002485 002486],\n\t\t\t\tpisanoPeriod: [001175 066853],\n\t\t\t\tplasticRatio: [060006],\n\t\t\t\tpoliteness: [069283],\n\t\t\t\tpolygonalNumber: [\n\t\t\t\t\t000124 000217 139610 000027 000217 000290 000326 000384\n\t\t\t\t\t000566 000567 001106 001107 051682 051864 051865 051866\n\t\t\t\t\t051867 051868 051869 051870 051871 051872 051873 051874\n\t\t\t\t\t051875 051876\n\t\t\t\t],\n\t\t\t\tPolynomial: [003263],\n\t\t\t\tpowerMod: [096008 001567 002371],\n\t\t\t\tpreviousPrime: [007917],\n\t\t\t\tprime: [000040 046929 243353 001348 006450],\n\t\t\t\tprimeDistance: [051699],\n\t\t\t\tprimeDivisors: [003592],\n\t\t\t\tprimeFactors: [020639 027746 238689 001414 268868],\n\t\t\t\tprimeGap: [001223],\n\t\t\t\tprimeOmega: [001222],\n\t\t\t\tprimeNu: [001221 034444],\n\t\t\t\tprimePi: [000720 049084 156552 112798 056239],\n\t\t\t\tprimesList: [000040],\n\t\t\t\tprimeSignature: [036035 025487 118914 046523 181819],\n\t\t\t\tprimitiveRootList: [033948 046144 001913 001122],\n\t\t\t\tprimorial: [002110 278159],\n\t\t\t\tpyramidalNumber: [000292 000330 002411 002412 002413],\n\t\t\t\tpythagorasConstant: [002193],\n\t\t\t\tquotient: [000601],\n\t\t\t\tquadraticNonresidues: [053760 028786 028736],\n\t\t\t\tquadraticResidues: [046071 096008 105612 047210 096103 048152 010434 010385],\n\t\t\t\tquotientRemainder: [118006],\n\t\t\t\trabbitConstant: [014565],\n\t\t\t\tradical: [007947],\n\t\t\t\tramanujanTau: [000594],\n\t\t\t\trecamanSequence: [005132],\n\t\t\t\treciprocalFibonacciConstant: [079586],\n\t\t\t\tregularPaperfoldingSequence: [014577],\n\t\t\t\treplicate: [002024],\n\t\t\t\trepunit: [000225 003462 002450 003463 003464 023000 023001 002452 002275 016123 016125],\n\t\t\t\trudinShapiro: [020985],\n\t\t\t\trulerFunction: [001511],\n\t\t\t\trunLengthsOf: [245562],\n\t\t\t\trunLengthTransform: [246028 278159],\n\t\t\t\tschroderNumber: [006318 033877],\n\t\t\t\tschroderSequence: [006318],\n\t\t\t\tsecondFeigenbaumConstant: [006891],\n\t\t\t\tsecondOrderEulerianTriangle: [008517],\n\t\t\t\tseidelTriangle: [008280],\n\t\t\t\tselfCountingNumber: [002024],\n\t\t\t\tselfCountingSequence: [002024],\n\t\t\t\tsequenceCount: [003714 104326 003754],\n\t\t\t\tsierpinskiConstant: [241017 062089],\n\t\t\t\tsieveOfAtkin: [000040],\n\t\t\t\tsieveOfEratosthenes: [000040],\n\t\t\t\tsieveOfPritchard: [000040],\n\t\t\t\tsieveOfSundaram: [000040],\n\t\t\t\tsignatureSequence: [007337 084531 084532 118276],\n\t\t\t\tsilverConstant: [116425],\n\t\t\t\tsilverRatio: [014176],\n\t\t\t\tsin: [174344],\n\t\t\t\tsoldnersConstant: [070769 091723],\n\t\t\t\tsomosSequence: [006720],\n\t\t\t\tsortingNumber: [001855],\n\t\t\t\tsquare: [000290],\n\t\t\t\tsquarePyramidalNumber: [000330],\n\t\t\t\tsquareSpiral: [174344 268038],\n\t\t\t\tsquaresR: [000118 004018 001481],\n\t\t\t\tsqrt: [007336 000037],\n\t\t\t\tstanleySequence: [005836 005836 185256 005487 188053 188054 187843 188055 188052 188056 188057],\n\t\t\t\tsternBrocotNumber: [002487],\n\t\t\t\tsternBrocotSequence: [002487],\n\t\t\t\tstirlingS1: [008275],\n\t\t\t\tstirlingS2: [008277 000392 000453],\n\t\t\t\tstolarskyArray: [035506],\n\t\t\t\tstolarskyHarborthConstant: [006046 077464],\n\t\t\t\tstolarskyIndex: [098861 098862],\n\t\t\t\tsubfactorial: [000166],\n\t\t\t\tsubstitutionSystem: [003849 010060 014577 020985 096268],\n\t\t\t\tsuperCatalanNumber: [001003 006318],\n\t\t\t\tsupergoldenRatio: [092526],\n\t\t\t\tsupersilverRatio: [356035],\n\t\t\t\tsylvesterExpansion: [050205],\n\t\t\t\tsylvestersSequence: [000058],\n\t\t\t\tszekeresSequence: [003278],\n\t\t\t\ttetrahedralNumber: [000292],\n\t\t\t\ttetranacciConstant: [058265],\n\t\t\t\tthueMorseSequence: [010060],\n\t\t\t\ttoothpickSequence: [139250],\n\t\t\t\ttriangularArray: [007318 075363 075364 094587 166556 077028 048601 002260 004736 096470 003991],\n\t\t\t\ttriangularNumber: [000217],\n\t\t\t\ttribonacciConstant: [058265],\n\t\t\t\ttribonacciNumber: [000073],\n\t\t\t\ttribonacciWord: [092782],\n\t\t\t\tunitaryDivisors: [077610],\n\t\t\t\tunitaryDivisorSigma: [034444 068068],\n\t\t\t\tvanDerCorputNumber: [030101 030102 062383],\n\t\t\t\tvanDerCorputsConstant: [143305],\n\t\t\t\tvanDerLaanSequence: [182097],\n\t\t\t\tvanEckSequence: [181391],\n\t\t\t\tvedicSquare: [125959 180592 180593 180594],\n\t\t\t\twedderburnEtheringtonNumbers: [001190],\n\t\t\t\twheelSieve: [000040],\n\t\t\t\twythoffArray: [003622 035513],\n\t\t\t\twythoffLower: [000201],\n\t\t\t\twythoffPair: [000201 001950],\n\t\t\t\twythoffUpper: [001950],\n\t\t\t\txorTriangle: [334556 334769],\n\t\t\t\tyellowstonePermutation: [098550],\n\t\t\t\tzeckendorfRepresentation: [014417 007895 003714 328208 035517 094202 035614 087172 102364],\n\t\t\t\tzero: [000004]\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisSplFunctionListing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesDo_2(
      _oeisSplFunctionReferenceTable_1(_self),
      sl.annotateFunction(function (_k, _v) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _k, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _postLine_1(
          _format_2("- `%`: %", [
            _k,
            _if_3(
              _isEmpty_1(_v),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return "...";
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _unwords_1(_collect_2(_sort_1(_v), _oeisIdentifier_1));
              }, []),
            ),
          ]),
        );
      }, ["k", "v"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.oeisSplFunctionReferenceTable\n\t\t.keysAndValuesDo { :k :v |\n\t\t\t'- `%`: %'.format(\n\t\t\t\t[\n\t\t\t\t\tk,\n\t\t\t\t\tv.isEmpty.if {\n\t\t\t\t\t\t'...'\n\t\t\t\t\t} {\n\t\t\t\t\t\tv.sort.collect(\n\t\t\t\t\t\t\toeisIdentifier:/1\n\t\t\t\t\t\t).unwords\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t).postLine\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisEntries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "oeisEntries",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Map_0();
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('oeisEntries') {\n\t\t\tMap()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisSequenceData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "OeisSequenceData");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('OeisSequenceData')\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "OeisSequenceData"],
      ["category", "Math/IntegerSequences"],
      ["url", "https://rohandrape.net/sw/hsc3-data/data/oeis/oeis.json"],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
