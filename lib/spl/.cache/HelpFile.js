/*  Requires: Cache  */

sl.addType(
  false,
  "HelpFile",
  "HelpFile",
  ["Object", "Cache"],
  ["origin", "source", "cache"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HelpFile",
);

sl.copyTraitMethodsToType(
  "Cache",
  "HelpFile",
);

sl.addMethodToExistingType(
  "HelpFile",
  "HelpFile",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
          _equalsSign_2,
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isHelp(anObject), { equalByAtNamedSlots(self,anObject, ['origin', 'source'], =) }) }",
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
  "{ :self | readCommaSeparatedField(self,'Categories: ') }",
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
                return _atPut_3(_each, "attributes", _Record_1([]));
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
  "{ :self | cached(self, 'codeBlocks', { collect(codeBlocks(markdown(self)), { :each | let information = at(each, 'information'); if(isEmpty(information), { atPut(each, 'attributes', Record([])) }, { atPut(each, 'attributes', asRecord(collect(words(information), { :each | let parts = splitBy(each,'='); ->(at(parts, 1), if((=(size(parts), 1)), { 'true' }, { at(parts, 2) })) }))) }); each }) }) }",
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
  "{ :self :key | select(codeBlocks(self), { :each | includesKey(at(each, 'attributes'),key) }) }",
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
  "{ :self :codeBlock :imageType | let imageIdentifier = at(at(codeBlock, 'attributes'), imageType); splFileName(system,format('Help/Image/%-%.%',[originName(self), imageIdentifier, imageType])) }",
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
  "{ :self :codeBlock | let attributes = at(codeBlock, 'attributes'); detect(['png', 'svg'], { :each | includesKey(attributes,each) }) }",
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
  "{ :self | select(codeBlocks(self), { :each | includesKey(at(each, 'attributes'),'define') }) }",
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
  "{ :self | let index = 3; ifTrue(hasSignatures(self), { index := +(+(index, size(signatures(self))), 1) }); paragraphFrom(self,index) }",
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
  "{ :self | cached(self, 'documentationTests', { extractDocumentationTests(lines(self)) }) }",
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
  "{ :self | extractDocumentationTests(lines(self)) }",
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
            let __SPL55 = _assertIsOfSize_2(_at_2(_each, "sourcePosition"), 2);
            let _start = _at_2(__SPL55, 1);
            let _end = _at_2(__SPL55, 2);
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
  "{ :self | let answer = []; do(markdown(self), { :each | ifTrue((=(at(each, 'type'), 'codeBlock')), { let __SPL55 = assertIsOfSize(at(each, 'sourcePosition'), 2); let start = at(__SPL55, 1); let end = at(__SPL55, 2); ifTrue(isCodeFence(at(lines(self), at(start, 1))), { add(answer,Range(at(start, 1), at(end, 1), 1)) }) }) }); answer }",
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
    return _notEmpty_1(_documentationTests_1(_self));
  }, ["self"]),
  "{ :self | notEmpty(documentationTests(self)) }",
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
    return _notEmpty_1(_rationale_1(_self));
  }, ["self"]),
  "{ :self | notEmpty(rationale(self)) }",
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
    return _notEmpty_1(_references_1(_self));
  }, ["self"]),
  "{ :self | notEmpty(references(self)) }",
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
    return _notEmpty_1(_signatures_1(_self));
  }, ["self"]),
  "{ :self | notEmpty(signatures(self)) }",
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
    return _notEmpty_1(_unicode_1(_self));
  }, ["self"]),
  "{ :self | notEmpty(unicode(self)) }",
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
  "{ :self | includesSubstring(pathName(origin(self)),'Help/Guide') }",
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
  "{ :self | includesSubstring(pathName(origin(self)),'Help/Reference') }",
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
  "{ :self | cached(self, 'lines', { lines(source(self)) }) }",
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
  "{ :self :index :aBlock:/2 | let lines = lines(self); let limit = size(lines); let answer = []; whileTrue({ &(<=(index, limit), { aBlock(at(lines, index), index) }) }, { add(answer,at(lines, index)); index := +(index, 1) }); answer }",
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
  "{ :self | cached(self, 'markdown', { Markdown(source(self)) }) }",
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
  "{ :self | cached(self, 'name', { let entry = at(lines(self), 1); if(beginsWith(entry,'# '), { drop(entry,2) }, { error(self,++('HelpFile>>name: ', entry)) }) }) }",
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
  "{ :self | decodeUri(fileNameWithoutExtensions(origin(self))) }",
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
        return _notEmpty_1(_each);
      }, ["each", "unusedIndex"]),
    );
  }, ["self", "index"]),
  "{ :self :index | linesFromWhile(self, index, { :each :unusedIndex | notEmpty(each) }) }",
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
  "{ :self | readParagraphField(self,'_Rationale_:') }",
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
  "{ :self :prefix | cached(self, prefix, { detectIfFoundIfNone(lines(self), { :each | beginsWith(each,prefix) }, { :item | splitBy(drop(item,size(prefix)),', ') }, { [] }) }) }",
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
                return _notEmpty_1(_each);
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
  "{ :self :prefix | cached(self, prefix, { let lines = lines(self); let limit = size(lines); let index = findFirst(lines, { :each | =(each, prefix) }); if(isPositive(index), { linesFromWhile(self, +(index, 1), { :each :unusedIndex | notEmpty(each) }) }, { [] }) }) }",
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
  "{ :self | readParagraphField(self,'References:') }",
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
  "{ :self | readCommaSeparatedField(self,'See also: ') }",
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
  "{ :self | linesFromWhile(self, 3, { :each :unusedIndex | beginsWith(each,'- _') }) }",
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
  "{ :self | first(sentences(unlines(description(self)))) }",
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
  "{ :self :options | let testCount = 0; let passCount = 0; let errorCount = 0; ifTrue((>(size(documentationTests(self)), 0)), { let verbose = at(options, 'verbose'); do(codeBlocks(self), { :each | ifTrue(includesKey(at(each, 'attributes'),'define'), { evaluate(system,at(each, 'contents')) }) }); do(documentationTests(self), { :each | testCount := +(testCount, 1); ifTrue(verbose, { postLine((++('\t', format(each)))) }); if(ifError({ evaluate(each) }, { postLine((++('\tERROR: ', format(each)))); errorCount := +(errorCount, 1); false }), { passCount := +(passCount, 1) }, { postLine((++('\tFAIL: ', format(each)))) }) }) }); [testCount, passCount, errorCount] }",
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
  "{ :self | readCommaSeparatedField(self,'Unicode: ') }",
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
  "{ :self | reject(codeBlocks(self), { :each | |(isDocumentationTestString(at(each, 'contents')), { not(isEmpty(at(each, 'attributes'))) }) }) }",
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
  "{ :self | let verbose = false; ifTrue(verbose, { postLine(['writeImageFiles', name(self)]) }); do(definitionCodeBlocks(self), { :each | evaluate(system,at(each, 'contents')) }); do(codeBlocksWithAttribute(self,'png'), { :each | let fileName = codeBlockImageFileName(self,each, 'png'); postLine(fileName); writePng(evaluate(system,at(each, 'contents')),fileName) }); do(codeBlocksWithAttribute(self,'svg'), { :each | let fileName = codeBlockImageFileName(self,each, 'svg'); postLine(fileName); writeSvg(drawing(evaluate(system,at(each, 'contents'))),fileName) }) }",
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
  "{ :origin :source | initializeSlots(newHelpFile(),origin, source, Record()) }",
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
  "{ :origin :source | initializeSlots(newHelpFile(),origin, source, Record()) }",
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
  "{ :topic | format('Help/%/%.help.sl',[if(includes(topic,' '), { 'Guide' }, { 'Reference' }), topic]) }",
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
  "{ :self :kind :pattern :verbose :aBlock:/1 | do(select(sort(readDirectoryFileNames(splFileName(self,++('Help/', kind)))), { :each | &(endsWith(each,'.help.sl'), { matchesRegularExpression(pathBasename(each),pattern) }) }), { :each | let text = readTextFile(each); let help = HelpFile(asFileUrl(each), text); ifTrue(verbose, { postLine(each) }); aBlock(help) }) }",
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
  "{ :self :pattern :aBlock:/1 | helpFilesDo(self,'Reference', pattern, aBlock:/1) }",
);
