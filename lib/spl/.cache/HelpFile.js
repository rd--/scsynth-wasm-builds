/*  Requires: Cache  */

sl.addType(
  false,
  "HelpFile",
  "HelpFile",
  ["Object", "Equatable", "Cache"],
  ["origin", "source", "cache"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HelpFile",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "HelpFile",
);

sl.copyTraitMethodsToType(
  "Cache",
  "HelpFile",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "categories",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readCommaSeparatedField_2(_self, "Categories: ");
  }, ["self"]),
  "{ :self |\n\t\tself.readCommaSeparatedField('Categories: ')\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "codeBlocks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "codeBlocks",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _codeBlocks_1(_markdown_1(_self)),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _information = _at_2(_each, "information");
            /* Statements */
            _if_3(
              _isEmpty_1(_information),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_each, "attributes", _Record_0());
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _each,
                  "attributes",
                  _asRecord_1(
                    _collect_2(
                      _words_1(_information),
                      sl.annotateFunction(function (_each) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _each";
                          throw new Error(errorMessage);
                        } /* Temporaries */
                        let _parts = _splitBy_2(_each, "=");
                        /* Statements */
                        return _hyphenMinusGreaterThanSign_2(
                          _at_2(_parts, 1),
                          _if_3(
                            _equalsSign_2(_size_1(_parts), 1),
                            sl.annotateFunction(function () {
                              /* ArityCheck */
                              if (arguments.length !== 0) {
                                const errorMessage = "Arity: expected 0, ";
                                throw new Error(errorMessage);
                              } /* Statements */
                              return "true";
                            }, []),
                            sl.annotateFunction(function () {
                              /* ArityCheck */
                              if (arguments.length !== 0) {
                                const errorMessage = "Arity: expected 0, ";
                                throw new Error(errorMessage);
                              } /* Statements */
                              return _at_2(_parts, 2);
                            }, []),
                          ),
                        );
                      }, ["each"]),
                    ),
                  ),
                );
              }, []),
            );
            return _each;
          }, ["each"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('codeBlocks') {\n\t\t\tself.markdown.codeBlocks.collect { :each |\n\t\t\t\tlet information = each['information'];\n\t\t\t\tinformation.isEmpty.if {\n\t\t\t\t\teach['attributes'] := (:)\n\t\t\t\t} {\n\t\t\t\t\teach['attributes'] := information.words.collect { :each |\n\t\t\t\t\t\tlet parts = each.splitBy('=');\n\t\t\t\t\t\tparts[1] -> (parts.size = 1).if {\n\t\t\t\t\t\t\t'true'\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tparts[2]\n\t\t\t\t\t\t}\n\t\t\t\t\t}.asRecord\n\t\t\t\t};\n\t\t\t\teach\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "codeBlocksWithAttribute",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _codeBlocks_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesKey_2(_at_2(_each, "attributes"), _key);
      }, ["each"]),
    );
  }, ["self", "key"]),
  "{ :self :key |\n\t\tself.codeBlocks.select { :each |\n\t\t\teach['attributes'].includesKey(key)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "codeBlockImageFileName",
  ["self", "codeBlock", "imageType"],
  sl.annotateFunction(function (_self, _codeBlock, _imageType) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _codeBlock, _imageType";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _imageIdentifier = _at_2(_at_2(_codeBlock, "attributes"), _imageType);
    /* Statements */
    return _splFileName_2(
      _system,
      _format_2("Help/Image/%-%.%", [
        _originName_1(_self),
        _imageIdentifier,
        _imageType,
      ]),
    );
  }, ["self", "codeBlock", "imageType"]),
  "{ :self :codeBlock :imageType |\n\t\tlet imageIdentifier = codeBlock['attributes'][imageType];\n\t\tsystem.splFileName(\n\t\t\t'Help/Image/%-%.%'.format(\n\t\t\t\t[\n\t\t\t\t\tself.originName,\n\t\t\t\t\timageIdentifier,\n\t\t\t\t\timageType\n\t\t\t\t]\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "codeBlockImageType",
  ["self", "codeBlock"],
  sl.annotateFunction(function (_self, _codeBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _codeBlock";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _attributes = _at_2(_codeBlock, "attributes");
    /* Statements */
    return _detect_2(
      ["png", "svg"],
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesKey_2(_attributes, _each);
      }, ["each"]),
    );
  }, ["self", "codeBlock"]),
  "{ :self :codeBlock |\n\t\tlet attributes = codeBlock['attributes'];\n\t\t['png' 'svg'].detect { :each |\n\t\t\tattributes.includesKey(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "definitionCodeBlocks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _codeBlocks_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesKey_2(_at_2(_each, "attributes"), "define");
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.codeBlocks.select { :each |\n\t\t\teach['attributes'].includesKey('define')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "description",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 3;
    /* Statements */
    _ifTrue_2(
      _hasSignatures_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _index = _plusSign_2(
          _plusSign_2(_index, _size_1(_signatures_1(_self))),
          1,
        );
      }, []),
    );
    return _paragraphFrom_2(_self, _index);
  }, ["self"]),
  "{ :self |\n\t\tlet index = 3;\n\t\tself.hasSignatures.ifTrue {\n\t\t\tindex := index + self.signatures.size + 1\n\t\t};\n\t\tself.paragraphFrom(index)\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "documentationTests",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "documentationTests",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _extractDocumentationTests_1(_lines_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('documentationTests') {\n\t\t\tself.lines.extractDocumentationTests\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isHelp_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalByAtNamedSlots_4(
          _self,
          _anObject,
          ["origin", "source"],
          _aBlock_2,
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isHelp & {\n\t\t\tself.equalByAtNamedSlots(\n\t\t\t\tanObject,\n\t\t\t\t['origin' 'source'],\n\t\t\t\taBlock:/2\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "extractDocumentationTests",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _extractDocumentationTests_1(_lines_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.lines.extractDocumentationTests\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "fencedCodeBlockLineRanges",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _markdown_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_at_2(_each, "type"), "codeBlock"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar1 = _assertIsOfSize_2(
              _at_2(_each, "sourcePosition"),
              2,
            );
            let _start = _at_2(__SplVar1, 1);
            let _end = _at_2(__SplVar1, 2);
            /* Statements */
            return _ifTrue_2(
              _isCodeFence_1(_at_2(_lines_1(_self), _at_2(_start, 1))),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(
                  _answer,
                  _Range_3(_at_2(_start, 1), _at_2(_end, 1), 1),
                );
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.markdown.do { :each |\n\t\t\t(each['type'] = 'codeBlock').ifTrue {\n\t\t\t\tlet [start, end] = each['sourcePosition'];\n\t\t\t\tself.lines[start[1]].isCodeFence.ifTrue {\n\t\t\t\t\tanswer.add(Range(start[1], end[1], 1))\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "guides",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readCommaSeparatedField_2(_self, "Guides: ");
  }, ["self"]),
  "{ :self |\n\t\tself.readCommaSeparatedField('Guides: ')\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "hasDocumentationTests",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNotEmpty_1(_documentationTests_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.documentationTests.isNotEmpty\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "hasRationale",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNotEmpty_1(_rationale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rationale.isNotEmpty\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "hasReferences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNotEmpty_1(_references_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.references.isNotEmpty\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "hasSignatures",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNotEmpty_1(_signatures_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.signatures.isNotEmpty\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "hasUnicode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNotEmpty_1(_unicode_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.unicode.isNotEmpty\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "isGuideFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesSubstring_2(_pathName_1(_origin_1(_self)), "Help/Guide");
  }, ["self"]),
  "{ :self |\n\t\tself.origin.pathName.includesSubstring('Help/Guide')\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "isReferenceFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesSubstring_2(
      _pathName_1(_origin_1(_self)),
      "Help/Reference",
    );
  }, ["self"]),
  "{ :self |\n\t\tself.origin.pathName.includesSubstring('Help/Reference')\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "lines",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "lines",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lines_1(_source_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('lines') {\n\t\t\tself.source.lines\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "linesFromWhile",
  ["self", "index", "aBlock:/2"],
  sl.annotateFunction(function (_self, _index, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lines = _lines_1(_self);
    let _limit = _size_1(_lines);
    let _answer = [];
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSignEqualsSign_2(_index, _limit),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_at_2(_lines, _index), _index);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _at_2(_lines, _index));
        return _index = _plusSign_2(_index, 1);
      }, []),
    );
    return _answer;
  }, ["self", "index", "aBlock:/2"]),
  "{ :self :index :aBlock:/2 |\n\t\tlet lines = self.lines;\n\t\tlet limit = lines.size;\n\t\tlet answer = [];\n\t\t{\n\t\t\tindex <= limit & {\n\t\t\t\taBlock(lines[index], index)\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tanswer.add(lines[index]);\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "markdown",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "markdown",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Markdown_1(_source_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('markdown') {\n\t\t\tMarkdown(self.source)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "name",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _entry = _at_2(_lines_1(_self), 1);
        /* Statements */
        return _if_3(
          _beginsWith_2(_entry, "# "),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _drop_2(_entry, 2);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              _plusSignPlusSign_2("HelpFile>>name: ", _entry),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('name') {\n\t\t\tlet entry = self.lines[1];\n\t\t\tentry.beginsWith('# ').if {\n\t\t\t\tentry.drop(2)\n\t\t\t} {\n\t\t\t\tself.error('HelpFile>>name: ' ++ entry)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "originName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _decodeUri_1(_fileNameWithoutExtensions_1(_origin_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.origin.fileNameWithoutExtensions.decodeUri\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "paragraphFrom",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _linesFromWhile_3(
      _self,
      _index,
      sl.annotateFunction(function (_each, _unusedIndex) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _unusedIndex";
          throw new Error(errorMessage);
        } /* Statements */
        return _isNotEmpty_1(_each);
      }, ["each", "unusedIndex"]),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.linesFromWhile(index) { :each :unusedIndex |\n\t\t\teach.isNotEmpty\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "rationale",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readParagraphField_2(_self, "_Rationale_:");
  }, ["self"]),
  "{ :self |\n\t\tself.readParagraphField('_Rationale_:')\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "readCommaSeparatedField",
  ["self", "prefix"],
  sl.annotateFunction(function (_self, _prefix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _prefix";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      _prefix,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _detectIfFoundIfNone_4(
          _lines_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _beginsWith_2(_each, _prefix);
          }, ["each"]),
          sl.annotateFunction(function (_item) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _item";
              throw new Error(errorMessage);
            } /* Statements */
            return _splitBy_2(_drop_2(_item, _size_1(_prefix)), ", ");
          }, ["item"]),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [];
          }, []),
        );
      }, []),
    );
  }, ["self", "prefix"]),
  "{ :self :prefix |\n\t\tself.cached(prefix) {\n\t\t\tself.lines.detectIfFoundIfNone { :each |\n\t\t\t\teach.beginsWith(prefix)\n\t\t\t} { :item |\n\t\t\t\titem.drop(prefix.size).splitBy(', ')\n\t\t\t} {\n\t\t\t\t[]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "readParagraphField",
  ["self", "prefix"],
  sl.annotateFunction(function (_self, _prefix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _prefix";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      _prefix,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _lines = _lines_1(_self);
        let _limit = _size_1(_lines);
        let _index = _findFirst_2(
          _lines,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_each, _prefix);
          }, ["each"]),
        );
        /* Statements */
        return _if_3(
          _isPositive_1(_index),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _linesFromWhile_3(
              _self,
              _plusSign_2(_index, 1),
              sl.annotateFunction(function (_each, _unusedIndex) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _each, _unusedIndex";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isNotEmpty_1(_each);
              }, ["each", "unusedIndex"]),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [];
          }, []),
        );
      }, []),
    );
  }, ["self", "prefix"]),
  "{ :self :prefix |\n\t\tself.cached(prefix) {\n\t\t\tlet lines = self.lines;\n\t\t\tlet limit = lines.size;\n\t\t\tlet index = lines.findFirst { :each |\n\t\t\t\teach = prefix\n\t\t\t};\n\t\t\tindex.isPositive.if {\n\t\t\t\tself.linesFromWhile(index + 1) { :each :unusedIndex |\n\t\t\t\t\teach.isNotEmpty\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t[]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "references",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readParagraphField_2(_self, "References:");
  }, ["self"]),
  "{ :self |\n\t\tself.readParagraphField('References:')\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "seeAlso",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readCommaSeparatedField_2(_self, "See also: ");
  }, ["self"]),
  "{ :self |\n\t\tself.readCommaSeparatedField('See also: ')\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "signatures",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linesFromWhile_3(
      _self,
      3,
      sl.annotateFunction(function (_each, _unusedIndex) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _unusedIndex";
          throw new Error(errorMessage);
        } /* Statements */
        return _beginsWith_2(_each, "- _");
      }, ["each", "unusedIndex"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.linesFromWhile(3) { :each :unusedIndex |\n\t\t\teach.beginsWith('- _')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "synopsis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_sentences_1(_unlines_1(_description_1(_self))));
  }, ["self"]),
  "{ :self |\n\t\tself.description.unlines.sentences.first\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "terseReferenceEntry",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _testCount = 0;
    let _passCount = 0;
    let _errorCount = 0;
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_size_1(_documentationTests_1(_self)), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _verbose = _at_2(_options, "verbose");
        /* Statements */
        _do_2(
          _codeBlocks_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _includesKey_2(_at_2(_each, "attributes"), "define"),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _evaluate_2(_system, _at_2(_each, "contents"));
              }, []),
            );
          }, ["each"]),
        );
        return _do_2(
          _documentationTests_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            _testCount = _plusSign_2(_testCount, 1);
            _ifTrue_2(
              _verbose,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _postLine_1(_plusSignPlusSign_2("	", _format_1(_each)));
              }, []),
            );
            return _if_3(
              _ifError_2(
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _evaluate_1(_each);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _postLine_1(
                    _plusSignPlusSign_2("	ERROR: ", _format_1(_each)),
                  );
                  _errorCount = _plusSign_2(_errorCount, 1);
                  return false;
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _passCount = _plusSign_2(_passCount, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _postLine_1(
                  _plusSignPlusSign_2("	FAIL: ", _format_1(_each)),
                );
              }, []),
            );
          }, ["each"]),
        );
      }, []),
    );
    return [_testCount, _passCount, _errorCount];
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet testCount = 0;\n\t\tlet passCount = 0;\n\t\tlet errorCount = 0;\n\t\t(self.documentationTests.size > 0).ifTrue {\n\t\t\tlet verbose = options['verbose'];\n\t\t\tself.codeBlocks.do { :each |\n\t\t\t\teach['attributes'].includesKey('define').ifTrue {\n\t\t\t\t\tsystem.evaluate(each['contents'])\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.documentationTests.do { :each |\n\t\t\t\ttestCount := testCount + 1;\n\t\t\t\tverbose.ifTrue {\n\t\t\t\t\t('\t' ++ each.format).postLine\n\t\t\t\t};\n\t\t\t\t{\n\t\t\t\t\teach.evaluate\n\t\t\t\t}.ifError {\n\t\t\t\t\t('\tERROR: ' ++ each.format).postLine;\n\t\t\t\t\terrorCount := errorCount + 1;\n\t\t\t\t\tfalse\n\t\t\t\t}.if {\n\t\t\t\t\tpassCount := passCount + 1\n\t\t\t\t} {\n\t\t\t\t\t('\tFAIL: ' ++ each.format).postLine\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[testCount, passCount, errorCount]\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "unicode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readCommaSeparatedField_2(_self, "Unicode: ");
  }, ["self"]),
  "{ :self |\n\t\tself.readCommaSeparatedField('Unicode: ')\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "unspecifiedCodeBlocks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(
      _codeBlocks_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _isDocumentationTestString_1(_at_2(_each, "contents")),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _not_1(_isEmpty_1(_at_2(_each, "attributes")));
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.codeBlocks.reject { :each |\n\t\t\teach['contents'].isDocumentationTestString | {\n\t\t\t\teach['attributes'].isEmpty.not\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "writeImageFiles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _verbose = false;
    /* Statements */
    _ifTrue_2(
      _verbose,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _postLine_1(["writeImageFiles", _name_1(_self)]);
      }, []),
    );
    _do_2(
      _definitionCodeBlocks_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _evaluate_2(_system, _at_2(_each, "contents"));
      }, ["each"]),
    );
    _do_2(
      _codeBlocksWithAttribute_2(_self, "png"),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _fileName = _codeBlockImageFileName_3(_self, _each, "png");
        /* Statements */
        _postLine_1(_fileName);
        return _writePng_2(
          _evaluate_2(_system, _at_2(_each, "contents")),
          _fileName,
        );
      }, ["each"]),
    );
    return _do_2(
      _codeBlocksWithAttribute_2(_self, "svg"),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _fileName = _codeBlockImageFileName_3(_self, _each, "svg");
        /* Statements */
        _postLine_1(_fileName);
        return _writeSvg_2(
          _drawing_1(_evaluate_2(_system, _at_2(_each, "contents"))),
          _fileName,
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet verbose = false;\n\t\tverbose.ifTrue {\n\t\t\t['writeImageFiles', self.name].postLine\n\t\t};\n\t\tself.definitionCodeBlocks.do { :each |\n\t\t\tsystem.evaluate(each['contents'])\n\t\t};\n\t\tself.codeBlocksWithAttribute('png').do { :each |\n\t\t\tlet fileName = self.codeBlockImageFileName(each, 'png');\n\t\t\tfileName.postLine;\n\t\t\tsystem.evaluate(each['contents']).writePng(fileName)\n\t\t};\n\t\tself.codeBlocksWithAttribute('svg').do { :each |\n\t\t\tlet fileName = self.codeBlockImageFileName(each, 'svg');\n\t\t\tfileName.postLine;\n\t\t\tsystem.evaluate(each['contents']).drawing.writeSvg(fileName)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HelpFile",
  "HelpFile",
  ["origin", "source"],
  sl.annotateFunction(function (_origin, _source) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _origin, _source";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHelpFile_0(), _origin, _source, _Record_0());
  }, ["origin", "source"]),
  "{ :origin :source |\n\t\tnewHelpFile().initializeSlots(origin, source, Record())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "HelpFile",
  "HelpFile",
  ["origin", "source"],
  sl.annotateFunction(function (_origin, _source) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _origin, _source";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHelpFile_0(), _origin, _source, _Record_0());
  }, ["origin", "source"]),
  "{ :origin :source |\n\t\tnewHelpFile().initializeSlots(origin, source, Record())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HelpFile",
  "helpFileName",
  ["topic"],
  sl.annotateFunction(function (_topic) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _topic";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Help/%/%.help.sl", [
      _if_3(
        _includes_2(_topic, " "),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Guide";
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Reference";
        }, []),
      ),
      _topic,
    ]);
  }, ["topic"]),
  "{ :topic |\n\t\t'Help/%/%.help.sl'.format([\n\t\t\ttopic.includes(' ').if {\n\t\t\t\t'Guide'\n\t\t\t} {\n\t\t\t\t'Reference'\n\t\t\t},\n\t\t\ttopic\n\t\t])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpFilesDo",
  ["self", "kind", "pattern", "verbose", "aBlock:/1"],
  sl.annotateFunction(function (_self, _kind, _pattern, _verbose, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _kind, _pattern, _verbose, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _select_2(
        _sort_1(
          _readDirectoryFileNames_1(
            _splFileName_2(_self, _plusSignPlusSign_2("Help/", _kind)),
          ),
        ),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _endsWith_2(_each, ".help.sl"),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _matchesRegularExpression_2(
                _pathBasename_1(_each),
                _pattern,
              );
            }, []),
          );
        }, ["each"]),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _text = _readTextFile_1(_each);
        let _help = _HelpFile_2(_asFileUrl_1(_each), _text);
        /* Statements */
        _ifTrue_2(
          _verbose,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _postLine_1(_each);
          }, []),
        );
        return _aBlock_1(_help);
      }, ["each"]),
    );
  }, ["self", "kind", "pattern", "verbose", "aBlock:/1"]),
  "{ :self :kind :pattern :verbose :aBlock:/1 |\n\t\tself\n\t\t.splFileName('Help/' ++ kind)\n\t\t.readDirectoryFileNames\n\t\t.sort\n\t\t.select { :each |\n\t\t\teach.endsWith('.help.sl') & {\n\t\t\t\teach.pathBasename.matchesRegularExpression(pattern)\n\t\t\t}\n\t\t}.do { :each |\n\t\t\tlet text = each.readTextFile;\n\t\t\tlet help = HelpFile(\n\t\t\t\teach.asFileUrl,\n\t\t\t\ttext\n\t\t\t);\n\t\t\tverbose.ifTrue {\n\t\t\t\teach.postLine\n\t\t\t};\n\t\t\taBlock(help)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "referenceHelpFilesDo",
  ["self", "pattern", "aBlock:/1"],
  sl.annotateFunction(function (_self, _pattern, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _pattern, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _helpFilesDo_4(_self, "Reference", _pattern, _aBlock_1);
  }, ["self", "pattern", "aBlock:/1"]),
  "{ :self :pattern :aBlock:/1 |\n\t\tself.helpFilesDo('Reference', pattern, aBlock:/1)\n\t}",
);
