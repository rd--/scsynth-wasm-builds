/*  Requires: Cache  */

sl.extendTypeOrTraitWithMethod(
  "Record",
  "HelpFile",
  "codeBlockImageIdentifier",
  ["codeBlock"],
  sl.annotateFunction(function (_codeBlock) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _codeBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(
      _at_2(_codeBlock, "attributes"),
      _codeBlockImageType_1(_codeBlock),
    );
  }, ["codeBlock"]),
  "{ :codeBlock |\n\t\tcodeBlock['attributes'][codeBlock.codeBlockImageType]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "HelpFile",
  "codeBlockImageType",
  ["codeBlock"],
  sl.annotateFunction(function (_codeBlock) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _codeBlock";
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
  }, ["codeBlock"]),
  "{ :codeBlock |\n\t\tlet attributes = codeBlock['attributes'];\n\t\t['png' 'svg'].detect { :each |\n\t\t\tattributes.includesKey(each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "HelpFile",
  "codeBlockIsImage",
  ["codeBlock"],
  sl.annotateFunction(function (_codeBlock) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _codeBlock";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _attributes = _at_2(_codeBlock, "attributes");
    /* Statements */
    return _anySatisfy_2(
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
  }, ["codeBlock"]),
  "{ :codeBlock |\n\t\tlet attributes = codeBlock['attributes'];\n\t\t['png' 'svg'].anySatisfy { :each |\n\t\t\tattributes.includesKey(each)\n\t\t}\n\t}",
);

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
                  _parseUnquotedAttributeList_1(_information),
                );
              }, []),
            );
            return _each;
          }, ["each"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('codeBlocks') {\n\t\t\tself.markdown.codeBlocks.collect { :each |\n\t\t\t\tlet information = each['information'];\n\t\t\t\tinformation.isEmpty.if {\n\t\t\t\t\teach['attributes'] := (:)\n\t\t\t\t} {\n\t\t\t\t\teach['attributes'] := information.parseUnquotedAttributeList\n\t\t\t\t};\n\t\t\t\teach\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "codeBlockImageFileName",
  ["self", "codeBlock"],
  sl.annotateFunction(function (_self, _codeBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _codeBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _splFileName_2(
      _system,
      _format_2("Help/Image/%-%.%", [
        _originName_1(_self),
        _codeBlockImageIdentifier_1(_codeBlock),
        _codeBlockImageType_1(_codeBlock),
      ]),
    );
  }, ["self", "codeBlock"]),
  "{ :self :codeBlock |\n\t\tsystem.splFileName(\n\t\t\t'Help/Image/%-%.%'.format(\n\t\t\t\t[\n\t\t\t\t\tself.originName,\n\t\t\t\t\tcodeBlock.codeBlockImageIdentifier,\n\t\t\t\t\tcodeBlock.codeBlockImageType\n\t\t\t\t]\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "codeBlocksWithAttribute",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
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
        return _includesAssociation_2(
          _at_2(_each, "attributes"),
          _hyphenMinusGreaterThanSign_2(_key, _value),
        );
      }, ["each"]),
    );
  }, ["self", "key", "value"]),
  "{ :self :key :value |\n\t\tself.codeBlocks.select { :each |\n\t\t\teach['attributes'].includesAssociation(key -> value)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "codeBlocksWithKey",
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
  "definitionCodeBlocks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _codeBlocksWithKey_2(_self, "define");
  }, ["self"]),
  "{ :self |\n\t\tself.codeBlocksWithKey('define')\n\t}",
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
  "evaluateDefinitionCodeBlocks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _codeBlocksWithKey_2(_self, "define"),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _evaluate_2(_system, _at_2(_each, "contents"));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.codeBlocksWithKey('define').do { :each |\n\t\t\tsystem.evaluate(each['contents'])\n\t\t}\n\t}",
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
  "hasValidImageSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _imageCodeBlocks_1(_self);
    /* Statements */
    return _verticalLine_2(
      _isEmpty_1(_c),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _l = _collect_2(
          _c,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _asciiValue_1(_codeBlockImageIdentifier_1(_each));
          }, ["each"]),
        );
        let _k = _size_1(_l);
        let _a = _asciiValue_1("A");
        /* Statements */
        return (_exclamationMarkEqualsSign_2(
          _l,
          _asList_1(_nonemptyRange_3(_a, _plusSign_2(_a, _k), 1)),
        ));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.imageCodeBlocks;\n\t\tc.isEmpty | {\n\t\t\tlet l = c.collect { :each |\n\t\t\t\teach.codeBlockImageIdentifier.asciiValue\n\t\t\t};\n\t\t\tlet k = l.size;\n\t\t\tlet a = 'A'.asciiValue;\n\t\t\t(l != [a .. a + k])\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "helpPrograms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _paragraphs = _paragraphs_1(_self);
    let _topic = _originName_1(_self);
    let _language = "spl";
    /* Statements */
    return _collect_2(
      _detectIndices_2(
        _paragraphs,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _beginsWith_2(_each, "~~~spl");
        }, ["each"]),
      ),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _commentary = _at_2(_paragraphs, _hyphenMinus_2(_i, 1));
        let _codeBlock = _lines_1(_at_2(_paragraphs, _i));
        let _annotations = _parseUnquotedAttributeList_1(
          _allButFirst_2(_at_2(_codeBlock, 1), 6),
        );
        let _programText = _unlines_1(_allButFirstAndLast_1(_codeBlock));
        let _helpProgram = _HelpProgram_5(
          _topic,
          _language,
          _commentary,
          _annotations,
          _programText,
        );
        /* Statements */
        _ifTrue_2(
          _isImageProgram_1(_helpProgram),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(
                _markdownImageReference_1(_helpProgram),
                _at_2(_paragraphs, _plusSign_2(_i, 1)),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _postLine_1([
                  "helpPrograms: Image reference mismatch?",
                  _topic,
                  _annotations,
                ]);
              }, []),
            );
          }, []),
        );
        return _helpProgram;
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet paragraphs = self.paragraphs;\n\t\tlet topic = self.originName;\n\t\tlet language = 'spl';\n\t\tparagraphs.detectIndices { :each |\n\t\t\teach.beginsWith('~~~spl')\n\t\t}.collect { :i |\n\t\t\tlet commentary = paragraphs[i - 1];\n\t\t\tlet codeBlock = paragraphs[i].lines;\n\t\t\tlet annotations = codeBlock[1].allButFirst(6).parseUnquotedAttributeList;\n\t\t\tlet programText = codeBlock.allButFirstAndLast.unlines;\n\t\t\tlet helpProgram = HelpProgram(topic, language, commentary, annotations, programText);\n\t\t\thelpProgram.isImageProgram.ifTrue {\n\t\t\t\t(helpProgram.markdownImageReference != paragraphs[i + 1]).ifTrue {\n\t\t\t\t\t['helpPrograms: Image reference mismatch?', topic, annotations].postLine\n\t\t\t\t}\n\t\t\t};\n\t\t\thelpProgram\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "imageCodeBlocks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_codeBlocks_1(_self), _codeBlockIsImage_1);
  }, ["self"]),
  "{ :self |\n\t\tself.codeBlocks.select(codeBlockIsImage:/1)\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "imageHelpPrograms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_helpPrograms_1(_self), _isImageProgram_1);
  }, ["self"]),
  "{ :self |\n\t\tself.helpPrograms.select(isImageProgram:/1)\n\t}",
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
  "oeisHelpPrograms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_helpPrograms_1(_self), _isOeisProgram_1);
  }, ["self"]),
  "{ :self |\n\t\tself.helpPrograms.select(isOeisProgram:/1)\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "oeisReferences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nub_1(
      _lexicographicSort_1(
        _collect_2(
          _deleteMissing_1(
            _collect_2(
              _lines_1(_self),
              sl.annotateFunction(function (_s) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _s";
                  throw new Error(errorMessage);
                } /* Statements */
                return _matchRegularExpression_2(_s, "oeis.org/A[0-9]+");
              }, ["s"]),
            ),
          ),
          sl.annotateFunction(function (_s) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _s";
              throw new Error(errorMessage);
            } /* Statements */
            return _last_2(_s, 7);
          }, ["s"]),
        ),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.lines\n\t\t.collect { :s |\n\t\t\ts.matchRegularExpression('oeis.org/A[0-9]+')\n\t\t}.deleteMissing\n\t\t.collect { :s |\n\t\t\ts.last(7)\n\t\t}.lexicographicSort\n\t\t.nub\n\t}",
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
  "paragraphs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "paragraphs",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _paragraphs_1(_source_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('paragraphs') {\n\t\t\tself.source.paragraphs\n\t\t}\n\t}",
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
        _evaluateDefinitionCodeBlocks_1(_self);
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
  "{ :self :options |\n\t\tlet testCount = 0;\n\t\tlet passCount = 0;\n\t\tlet errorCount = 0;\n\t\t(self.documentationTests.size > 0).ifTrue {\n\t\t\tlet verbose = options['verbose'];\n\t\t\tself.evaluateDefinitionCodeBlocks;\n\t\t\tself.documentationTests.do { :each |\n\t\t\t\ttestCount := testCount + 1;\n\t\t\t\tverbose.ifTrue {\n\t\t\t\t\t('\t' ++ each.format).postLine\n\t\t\t\t};\n\t\t\t\t{\n\t\t\t\t\teach.evaluate\n\t\t\t\t}.ifError {\n\t\t\t\t\t('\tERROR: ' ++ each.format).postLine;\n\t\t\t\t\terrorCount := errorCount + 1;\n\t\t\t\t\tfalse\n\t\t\t\t}.if {\n\t\t\t\t\tpassCount := passCount + 1\n\t\t\t\t} {\n\t\t\t\t\t('\tFAIL: ' ++ each.format).postLine\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[testCount, passCount, errorCount]\n\t}",
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
    _writePngImageFiles_1(_self);
    return _writeSvgImageFiles_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tlet verbose = false;\n\t\tverbose.ifTrue {\n\t\t\t['writeImageFiles', self.name].postLine\n\t\t};\n\t\tself.writePngImageFiles;\n\t\tself.writeSvgImageFiles\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "writePngImageFiles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _evaluateDefinitionCodeBlocks_1(_self);
    return _do_2(
      _codeBlocksWithKey_2(_self, "png"),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _fileName = _codeBlockImageFileName_2(_self, _each);
        /* Statements */
        _postLine_1(_fileName);
        return _writePng_2(
          _evaluate_2(_system, _at_2(_each, "contents")),
          _fileName,
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.evaluateDefinitionCodeBlocks;\n\t\tself.codeBlocksWithKey('png').do { :each |\n\t\t\tlet fileName = self.codeBlockImageFileName(each);\n\t\t\tfileName.postLine;\n\t\t\tsystem.evaluate(each['contents']).writePng(fileName)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "writeSvgImageFiles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _evaluateDefinitionCodeBlocks_1(_self);
    return _do_2(
      _codeBlocksWithKey_2(_self, "svg"),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _fileName = _codeBlockImageFileName_2(_self, _each);
        /* Statements */
        _postLine_1(_fileName);
        return _writeSvg_2(
          _drawing_1(_evaluate_2(_system, _at_2(_each, "contents"))),
          _fileName,
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.evaluateDefinitionCodeBlocks;\n\t\tself.codeBlocksWithKey('svg').do { :each |\n\t\t\tlet fileName = self.codeBlockImageFileName(each);\n\t\t\tfileName.postLine;\n\t\t\tsystem.evaluate(each['contents']).drawing.writeSvg(fileName)\n\t\t}\n\t}",
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
  ["topic", "extension"],
  sl.annotateFunction(function (_topic, _extension) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _topic, _extension";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Help/%/%.help%", [
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
      _extension,
    ]);
  }, ["topic", "extension"]),
  "{ :topic :extension |\n\t\t'Help/%/%.help%'.format(\n\t\t\t[\n\t\t\t\ttopic.includes(' ').if {\n\t\t\t\t\t'Guide'\n\t\t\t\t} {\n\t\t\t\t\t'Reference'\n\t\t\t\t},\n\t\t\t\ttopic,\n\t\t\t\textension\n\t\t\t]\n\t\t)\n\t}",
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
    return _helpFileName_2(_topic, ".sl");
  }, ["topic"]),
  "{ :topic |\n\t\ttopic.helpFileName('.sl')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpFiles",
  ["self", "kind"],
  sl.annotateFunction(function (_self, _kind) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _kind";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      _plusSignPlusSign_2("helpFiles", _kind),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        /* Statements */
        _helpFilesDo_5(
          _self,
          _kind,
          ".*",
          false,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, ["each"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "kind"]),
  "{ :self :kind |\n\t\tself.cached('helpFiles' ++ kind) {\n\t\t\tlet answer = [];\n\t\t\tself.helpFilesDo(\n\t\t\t\tkind, '.*', false\n\t\t\t) { :each |\n\t\t\t\tanswer.add(each)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
    } /* Temporaries */
    let _directoryName = _splFileName_2(
      _self,
      _plusSignPlusSign_2("Help/", _kind),
    );
    /* Statements */
    return _do_2(
      _select_2(
        _sort_1(_readDirectoryFileNames_2(_self, _directoryName)),
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
        let _text = _readTextFile_2(_system, _each);
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
  "{ :self :kind :pattern :verbose :aBlock:/1 |\n\t\tlet directoryName = self.splFileName('Help/' ++ kind);\n\t\tself\n\t\t.readDirectoryFileNames(directoryName)\n\t\t.sort\n\t\t.select { :each |\n\t\t\teach.endsWith('.help.sl') & {\n\t\t\t\teach.pathBasename.matchesRegularExpression(pattern)\n\t\t\t}\n\t\t}.do { :each |\n\t\t\tlet text = system.readTextFile(each);\n\t\t\tlet help = HelpFile(\n\t\t\t\teach.asFileUrl,\n\t\t\t\ttext\n\t\t\t);\n\t\t\tverbose.ifTrue {\n\t\t\t\teach.postLine\n\t\t\t};\n\t\t\taBlock(help)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpImageIndex",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      ["# Help Image Index", ""],
      _catenate_1(
        _values_1(
          _keysAndValuesCollect_2(
            _helpProgramDictionary_2(_self, _isImageProgram_1),
            sl.annotateFunction(function (_n, _e) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _n, _e";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                [_format_2("- `%`", [_n])],
                _withIndexCollect_2(
                  _e,
                  sl.annotateFunction(function (_p, _i) {
                    /* ArityCheck */
                    if (arguments.length !== 2) {
                      const errorMessage = "Arity: expected 2, _p, _i";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _imageTitle = _if_3(
                      _at_2(_options, "imageProgramText"),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _format_2(' "%"', [_condensedProgramText_1(_p)]);
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return "";
                      }, []),
                    );
                    /* Statements */
                    _postLine_1([_n, _size_1(_e), _i]);
                    return _format_2("  %. ![](Help/Image/%%)", [
                      _i,
                      _imageFileName_1(_p),
                      _imageTitle,
                    ]);
                  }, ["p", "i"]),
                ),
              );
            }, ["n", "e"]),
          ),
        ),
      ),
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\t[\n\t\t\t'# Help Image Index',\n\t\t\t''\n\t\t] ++ self.helpProgramDictionary(\n\t\t\tisImageProgram:/1\n\t\t).keysAndValuesCollect { :n :e |\n\t\t\t[\n\t\t\t\t'- `%`'.format([n])\n\t\t\t] ++ e.withIndexCollect { :p :i |\n\t\t\t\tlet imageTitle = options['imageProgramText'].if {\n\t\t\t\t\t' \"%\"'.format([p.condensedProgramText])\n\t\t\t\t} {\n\t\t\t\t\t''\n\t\t\t\t};\n\t\t\t\t[n, e.size, i].postLine;\n\t\t\t\t'  %. ![](Help/Image/%%)'\n\t\t\t\t.format(\n\t\t\t\t\t[\n\t\t\t\t\t\ti,\n\t\t\t\t\t\tp.imageFileName,\n\t\t\t\t\t\timageTitle\n\t\t\t\t\t]\n\t\t\t\t)\n\t\t\t}\n\t\t}.values.catenate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpImageIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _helpImageIndex_2(_self, _Record_1([["imageProgramText", false]]));
  }, ["self"]),
  "{ :self |\n\t\tself.helpImageIndex (\n\t\t\timageProgramText: false\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpImageProgramsText",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _helpProgramsSelect_2(_system, _isImageProgram_1),
      sl.annotateFunction(function (_p) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _p";
          throw new Error(errorMessage);
        } /* Statements */
        return _markdownText_2(_p, _options);
      }, ["p"]),
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\tsystem.helpProgramsSelect(\n\t\t\tisImageProgram:/1\n\t\t).collect { :p |\n\t\t\tp.markdownText(options)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpProgramDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "helpProgramDictionary",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _Record_0();
        /* Statements */
        _do_2(
          _helpFiles_2(_self, "Reference"),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _p = _helpPrograms_1(_each);
            /* Statements */
            return _ifNotEmpty_2(
              _p,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(
                  _answer,
                  _hyphenMinusGreaterThanSign_2(_originName_1(_each), _p),
                );
              }, []),
            );
          }, ["each"]),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('helpProgramDictionary') {\n\t\t\tlet answer = (:);\n\t\t\tself.helpFiles('Reference').do { :each |\n\t\t\t\tlet p = each.helpPrograms;\n\t\t\t\tp.ifNotEmpty {\n\t\t\t\t\tanswer.add(each.originName -> p)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpProgramDictionary",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _collect_2(
        _helpProgramDictionary_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _select_2(_each, _aBlock_1);
        }, ["each"]),
      ),
      _isNotEmpty_1,
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.helpProgramDictionary.collect { :each |\n\t\t\teach.select(aBlock:/1)\n\t\t}.select(isNotEmpty:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpProgramTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "helpProgramTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _keysAndEachValue_1(_helpProgramDictionary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('helpProgramTable') {\n\t\t\tself.helpProgramDictionary.keysAndEachValue\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpProgramTable",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _helpProgramTable_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_at_2(_each, 2));
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.helpProgramTable.select { :each |\n\t\t\taBlock(each[2])\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpProgramsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _helpFiles_2(_self, "Reference"),
      sl.annotateFunction(function (_helpFile) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _helpFile";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(_helpPrograms_1(_helpFile), _aBlock_1);
      }, ["helpFile"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.helpFiles('Reference').do { :helpFile |\n\t\t\thelpFile.helpPrograms.do(aBlock:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "helpProgramsSelect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _helpProgramsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.helpProgramsDo { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "oeisImageIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _oeisPrograms = _helpProgramsSelect_2(_self, _isOeisProgram_1);
    let _oeisIdentifiers = _unique_1(
      _collect_2(_oeisPrograms, _oeisIdentifier_1),
    );
    /* Statements */
    return _plusSignPlusSign_2(
      ["# Integer Sequence Image Index", ""],
      _collect_2(
        _oeisIdentifiers,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _unlines_1([
            _format_2("- [%](https://oeis.org/%/)", [_i, _i]),
            _unlines_1(
              _withIndexCollect_2(
                _select_2(
                  _oeisPrograms,
                  sl.annotateFunction(function (_p) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _p";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_oeisIdentifier_1(_p), _i);
                  }, ["p"]),
                ),
                sl.annotateFunction(function (_p, _j) {
                  /* ArityCheck */
                  if (arguments.length !== 2) {
                    const errorMessage = "Arity: expected 2, _p, _j";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _format_2("  %. %", [
                    _j,
                    _markdownImageReference_1(_p),
                  ]);
                }, ["p", "j"]),
              ),
            ),
          ]);
        }, ["i"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet oeisPrograms = self.helpProgramsSelect(\n\t\t\tisOeisProgram:/1\n\t\t);\n\t\tlet oeisIdentifiers = oeisPrograms.collect(\n\t\t\toeisIdentifier:/1\n\t\t).unique;\n\t\t[\n\t\t\t'# Integer Sequence Image Index',\n\t\t\t''\n\t\t] ++ oeisIdentifiers.collect { :i |\n\t\t\t[\n\t\t\t\t'- [%](https://oeis.org/%/)'.format([i, i]),\n\t\t\t\toeisPrograms.select { :p |\n\t\t\t\t\tp.oeisIdentifier = i\n\t\t\t\t}.withIndexCollect { :p :j |\n\t\t\t\t\t'  %. %'.format([j, p.markdownImageReference])\n\t\t\t\t}.unlines\n\t\t\t].unlines\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "oeisImageProgramsText",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _sortOn_2(
        _helpProgramsSelect_2(
          _system,
          _predicateAnd_2(_isImageProgram_1, _isOeisProgram_1),
        ),
        _oeisIdentifier_1,
      ),
      sl.annotateFunction(function (_p) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _p";
          throw new Error(errorMessage);
        } /* Statements */
        return _markdownText_2(_p, _options);
      }, ["p"]),
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\tsystem.helpProgramsSelect(\n\t\t\tisImageProgram:/1.predicateAnd(\n\t\t\t\tisOeisProgram:/1\n\t\t\t)\n\t\t).sortOn(\n\t\t\toeisIdentifier:/1\n\t\t).collect { :p |\n\t\t\tp.markdownText(options)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "HelpFile",
  "readHelpFile",
  ["self", "topic"],
  sl.annotateFunction(function (_self, _topic) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _topic";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fileName = _splFileName_2(_self, _helpFileName_1(_topic));
    /* Statements */
    return _HelpFile_2(
      _asFileUrl_1(_fileName),
      _readTextFile_2(_self, _fileName),
    );
  }, ["self", "topic"]),
  "{ :self :topic |\n\t\tlet fileName = self.splFileName(\n\t\t\ttopic.helpFileName\n\t\t);\n\t\tHelpFile(\n\t\t\tfileName.asFileUrl,\n\t\t\tself.readTextFile(fileName)\n\t\t)\n\t}",
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

sl.extendTypeOrTraitWithMethod(
  "String",
  "HelpFile",
  "helpFragment",
  ["topic", "key", "value"],
  sl.annotateFunction(function (_topic, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _topic, _key, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _helpFile = _readHelpFile_2(_system, _topic);
    let __SplVar2 = _assertIsOfSize_2(
      _codeBlocksWithAttribute_3(_helpFile, _key, _value),
      1,
    );
    let _codeBlock = _at_2(__SplVar2, 1);
    /* Statements */
    return _at_2(_codeBlock, "contents");
  }, ["topic", "key", "value"]),
  "{ :topic :key :value |\n\t\tlet helpFile = system.readHelpFile(topic);\n\t\tlet [codeBlock] = helpFile.codeBlocksWithAttribute(key, value);\n\t\tcodeBlock.at('contents')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HelpFile",
  "helpFragment",
  ["topic", "key", "value", "indices"],
  sl.annotateFunction(function (_topic, _key, _value, _indices) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _topic, _key, _value, _indices";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _helpFile = _readHelpFile_2(_system, _topic);
    let _paragraphs = _paragraphs_1(_helpFile);
    let _prefix = _format_2("~~~spl %=%", [_key, _value]);
    let _index = _detectIndex_2(
      _paragraphs,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _beginsWith_2(_each, _prefix);
      }, ["each"]),
    );
    let _codeFragment = _allButFirstAndLast_1(
      _lines_1(_at_2(_paragraphs, _index)),
    );
    /* Statements */
    return [
      _atAll_2(_paragraphs, _plusSign_2(_index, _indices)),
      _unlines_1(_codeFragment),
    ];
  }, ["topic", "key", "value", "indices"]),
  "{ :topic :key :value :indices |\n\t\tlet helpFile = system.readHelpFile(topic);\n\t\tlet paragraphs = helpFile.paragraphs;\n\t\tlet prefix = '~~~spl %=%'.format([key, value]);\n\t\tlet index = paragraphs.detectIndex { :each |\n\t\t\teach.beginsWith(prefix)\n\t\t};\n\t\tlet codeFragment = paragraphs[index].lines.allButFirstAndLast;\n\t\t[\n\t\t\tparagraphs.atAll(index + indices),\n\t\t\tcodeFragment.unlines\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HelpFile",
  "helpFragmentPreprocessor",
  ["inputText"],
  sl.annotateFunction(function (_inputText) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inputText";
      throw new Error(errorMessage);
    } /* Statements */
    return _unlines_1(
      _collect_2(
        _lines_1(_inputText),
        sl.annotateFunction(function (_line) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _line";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _beginsWith_2(_line, "<<<"),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar3 = _assertIsOfSize_2(
                _splitBy_2(_drop_2(_line, 3), ","),
                3,
              );
              let _a = _at_2(__SplVar3, 1);
              let _b = _at_2(__SplVar3, 2);
              let _c = _at_2(__SplVar3, 3);
              let __SplVar4 = _assertIsOfSize_2(
                _helpFragment_4(_a, _b, _c, [-1, 1]),
                2,
              );
              let _d = _at_2(__SplVar4, 1);
              let _e = _at_2(__SplVar4, 2);
              /* Statements */
              return _unlines_1([
                _at_2(_d, 1),
                "",
                "```",
                _withoutTrailingBlanks_1(_e),
                "```",
                "",
                _at_2(_d, 2),
              ]);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _line;
            }, []),
          );
        }, ["line"]),
      ),
    );
  }, ["inputText"]),
  "{ :inputText |\n\t\tinputText.lines.collect { :line |\n\t\t\tline.beginsWith('<<<').if {\n\t\t\t\tlet [a, b, c] = line.drop(3).splitBy(',');\n\t\t\t\tlet [d, e] = helpFragment(a, b, c, [-1, 1]);\n\t\t\t\t[\n\t\t\t\t\td[1],\n\t\t\t\t\t'',\n\t\t\t\t\t'```',\n\t\t\t\t\te.withoutTrailingBlanks,\n\t\t\t\t\t'```',\n\t\t\t\t\t'',\n\t\t\t\t\td[2]\n\t\t\t\t].unlines\n\t\t\t} {\n\t\t\t\tline\n\t\t\t}\n\t\t}.unlines\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HelpFile",
  "helpFilePreprocessor",
  ["topic"],
  sl.annotateFunction(function (_topic) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _topic";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _inputFilePath = _splFilePath_1(_helpFileName_2(_topic, ".pre"));
    /* Statements */
    return _helpFragmentPreprocessor_1(_inputFilePath);
  }, ["topic"]),
  "{ :topic |\n\t\tlet inputFilePath = topic.helpFileName('.pre').splFilePath;\n\t\tinputFilePath.helpFragmentPreprocessor\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "FilePath",
  "HelpFile",
  "helpFragmentPreprocessor",
  ["inputFilePath", "outputFilePath"],
  sl.annotateFunction(function (_inputFilePath, _outputFilePath) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inputFilePath, _outputFilePath";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _inputText = _readTextFile_1(_inputFilePath);
    let _outputText = _helpFragmentPreprocessor_1(_inputText);
    /* Statements */
    return _writeTextFile_2(_outputFilePath, _outputText);
  }, ["inputFilePath", "outputFilePath"]),
  "{ :inputFilePath :outputFilePath |\n\t\tlet inputText = inputFilePath.readTextFile;\n\t\tlet outputText = inputText.helpFragmentPreprocessor;\n\t\toutputFilePath.writeTextFile(outputText)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "FilePath",
  "HelpFile",
  "helpFragmentPreprocessor",
  ["inputFilePath"],
  sl.annotateFunction(function (_inputFilePath) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inputFilePath";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _inputText = _readTextFile_1(_inputFilePath);
    let _outputFilePath = _replaceExtension_3(_inputFilePath, ".pre", ".sl");
    /* Statements */
    return _helpFragmentPreprocessor_2(_inputFilePath, _outputFilePath);
  }, ["inputFilePath"]),
  "{ :inputFilePath |\n\t\tlet inputText = inputFilePath.readTextFile;\n\t\tlet outputFilePath = inputFilePath.replaceExtension('.pre', '.sl');\n\t\tinputFilePath.helpFragmentPreprocessor(outputFilePath)\n\t}",
);
