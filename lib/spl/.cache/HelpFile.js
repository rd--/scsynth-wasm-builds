/* {- Requires: Cache -} */

sl.addType(
  false,
  "HelpFile",
  "HelpFile",
  ["Object", "Cache"],
  ["origin", "source", "cache"],
);

sl.copyTraitToType(
  "Object",
  "HelpFile",
);

sl.copyTraitToType(
  "Cache",
  "HelpFile",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "categories",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _readCommaSeparatedField_2(_self, "Categories: ");
  },
  "{ :self |\n\t\tself.readCommaSeparatedField('Categories: ')\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "codeBlocks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "codeBlocks", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _codeBlocks_1(_markdown_1(_self));
    });
  },
  "{ :self |\n\t\tself.cached('codeBlocks') {\n\t\t\tself.markdown.codeBlocks\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "description",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = 3;
    /* Statements */
    _ifTrue_2(_hasSignatures_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _index = _plusSign_2(
        _plusSign_2(_index, _size_1(_signatures_1(_self))),
        1,
      );
    });
    return _paragraphFrom_2(_self, _index);
  },
  "{ :self |\n\t\tlet index = 3;\n\t\tself.hasSignatures.ifTrue {\n\t\t\tindex := index + self.signatures.size + 1\n\t\t};\n\t\tself.paragraphFrom(index)\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "documentTests",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "documentTests", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _extractDocumentTests_1(_lines_1(_self));
    });
  },
  "{ :self |\n\t\tself.cached('documentTests') {\n\t\t\tself.lines.extractDocumentTests\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "extractDocumentTests",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _extractDocumentTests_1(_lines_1(_self));
  },
  "{ :self |\n\t\tself.lines.extractDocumentTests\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "fencedCodeBlockLineRanges",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_markdown_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _equalsSign_2(_at_2(_each, "type"), "codeBlock"),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let __genSym22 = _assertIsOfSize_2(_at_2(_each, "sourcePosition"), 2),
            _start = _at_2(__genSym22, 1),
            _end = _at_2(__genSym22, 2);
          /* Statements */
          return _ifTrue_2(
            _isCodeFence_1(_at_2(_lines_1(_self), _at_2(_start, 1))),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _add_2(
                _answer,
                _Range_3(_at_2(_start, 1), _at_2(_end, 1), 1),
              );
            },
          );
        },
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.markdown.do { :each |\n\t\t\t(each::type = 'codeBlock').ifTrue {\n\t\t\t\tlet [start, end] = each::sourcePosition;\n\t\t\t\tself.lines[start[1]].isCodeFence.ifTrue {\n\t\t\t\t\tanswer.add(Range(start[1], end[1], 1))\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "hasDocumentTests",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _notEmpty_1(_documentTests_1(_self));
  },
  "{ :self |\n\t\tself.documentTests.notEmpty\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "hasRationale",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _notEmpty_1(_rationale_1(_self));
  },
  "{ :self |\n\t\tself.rationale.notEmpty\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "hasReferences",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _notEmpty_1(_references_1(_self));
  },
  "{ :self |\n\t\tself.references.notEmpty\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "hasSignatures",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _notEmpty_1(_signatures_1(_self));
  },
  "{ :self |\n\t\tself.signatures.notEmpty\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "hasUnicode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _notEmpty_1(_unicode_1(_self));
  },
  "{ :self |\n\t\tself.unicode.notEmpty\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "lines",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "lines", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lines_1(_source_1(_self));
    });
  },
  "{ :self |\n\t\tself.cached('lines') {\n\t\t\tself.source.lines\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "linesFromWhile",
  ["self", "index", "aBlock:/2"],
  function (_self, _index, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _lines = _lines_1(_self);
    let _limit = _size_1(_lines);
    let _answer = [];
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _lessThanSignEqualsSign_2(_index, _limit),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _aBlock_2(_at_2(_lines, _index), _index);
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _at_2(_lines, _index));
      return _index = _plusSign_2(_index, 1);
    });
    return _answer;
  },
  "{ :self :index :aBlock:/2 |\n\t\tlet lines = self.lines;\n\t\tlet limit = lines.size;\n\t\tlet answer = [];\n\t\t{\n\t\t\tindex <= limit & {\n\t\t\t\taBlock(lines[index], index)\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tanswer.add(lines[index]);\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "markdown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "markdown", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Markdown_1(_source_1(_self));
    });
  },
  "{ :self |\n\t\tself.cached('markdown') {\n\t\t\tMarkdown(self.source)\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "name", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _entry = _at_2(_lines_1(_self), 1);
      /* Statements */
      return _if_3(_beginsWith_2(_entry, "# "), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _drop_2(_entry, 2);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "HelpFile>>name");
      });
    });
  },
  "{ :self |\n\t\tself.cached('name') {\n\t\t\tlet entry = self.lines[1];\n\t\t\tentry.beginsWith('# ').if {\n\t\t\t\tentry.drop(2)\n\t\t\t} {\n\t\t\t\tself.error('HelpFile>>name')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "paragraphFrom",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _linesFromWhile_3(_self, _index, function (_each, _unusedIndex) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _unusedIndex";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _notEmpty_1(_each);
    });
  },
  "{ :self :index |\n\t\tself.linesFromWhile(index) { :each :unusedIndex |\n\t\t\teach.notEmpty\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "rationale",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _readParagraphField_2(_self, "_Rationale_:");
  },
  "{ :self |\n\t\tself.readParagraphField('_Rationale_:')\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "readCommaSeparatedField",
  ["self", "prefix"],
  function (_self, _prefix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _prefix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, _prefix, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _detectIfFoundIfNone_4(_lines_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _beginsWith_2(_each, _prefix);
      }, function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _splitBy_2(_drop_2(_item, _size_1(_prefix)), ", ");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [];
      });
    });
  },
  "{ :self :prefix |\n\t\tself.cached(prefix) {\n\t\t\tself.lines.detectIfFoundIfNone { :each |\n\t\t\t\teach.beginsWith(prefix)\n\t\t\t} { :item |\n\t\t\t\titem.drop(prefix.size).splitBy(', ')\n\t\t\t} {\n\t\t\t\t[]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "readParagraphField",
  ["self", "prefix"],
  function (_self, _prefix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _prefix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, _prefix, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _lines = _lines_1(_self);
      let _limit = _size_1(_lines);
      let _index = _findFirst_2(_lines, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_each, _prefix);
      });
      /* Statements */
      return _if_3(_isPositive_1(_index), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _linesFromWhile_3(
          _self,
          _plusSign_2(_index, 1),
          function (_each, _unusedIndex) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _each, _unusedIndex";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _notEmpty_1(_each);
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [];
      });
    });
  },
  "{ :self :prefix |\n\t\tself.cached(prefix) {\n\t\t\tlet lines = self.lines;\n\t\t\tlet limit = lines.size;\n\t\t\tlet index = lines.findFirst { :each |\n\t\t\t\teach = prefix\n\t\t\t};\n\t\t\tindex.isPositive.if {\n\t\t\t\tself.linesFromWhile(index + 1) { :each :unusedIndex |\n\t\t\t\t\teach.notEmpty\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t[]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "references",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _readParagraphField_2(_self, "References:");
  },
  "{ :self |\n\t\tself.readParagraphField('References:')\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "seeAlso",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _readCommaSeparatedField_2(_self, "See also: ");
  },
  "{ :self |\n\t\tself.readCommaSeparatedField('See also: ')\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "signatures",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _linesFromWhile_3(_self, 3, function (_each, _unusedIndex) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _unusedIndex";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _beginsWith_2(_each, "- _");
    });
  },
  "{ :self |\n\t\tself.linesFromWhile(3) { :each :unusedIndex |\n\t\t\teach.beginsWith('- _')\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "synopsis",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _first_1(_sentences_1(_unlines_1(_description_1(_self))));
  },
  "{ :self |\n\t\tself.description.unlines.sentences.first\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "terseReferenceEntry",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _testCount = 0;
    let _passCount = 0;
    /* Statements */
    _ifTrue_2(_at_2(_options, "verbose"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _postLine_1(
        _asTuple_1([
          _fileNameWithoutExtensions_1(_origin_1(_self)),
          _name_1(_self),
        ]),
      );
    });
    _do_2(_documentTests_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _testCount = _plusSign_2(_testCount, 1);
      _ifTrue_2(_at_2(_options, "verbose"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _postLine_1(_plusSignPlusSign_2("	", _format_1(_each)));
      });
      return _if_3(_evaluate_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _passCount = _plusSign_2(_passCount, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _postLine_1(["Fail", _format_1(_each)]);
      });
    });
    return [_testCount, _passCount];
  },
  "{ :self :options |\n\t\tlet testCount = 0;\n\t\tlet passCount = 0;\n\t\toptions::verbose.ifTrue {\n\t\t\t(self.origin.fileNameWithoutExtensions, self.name).postLine\n\t\t};\n\t\tself.documentTests.do { :each |\n\t\t\ttestCount := testCount + 1;\n\t\t\toptions::verbose.ifTrue {\n\t\t\t\t('\t' ++ each.format).postLine\n\t\t\t};\n\t\t\teach.evaluate.if {\n\t\t\t\tpassCount := passCount + 1\n\t\t\t} {\n\t\t\t\t['Fail', each.format].postLine\n\t\t\t}\n\t\t};\n\t\t[testCount, passCount]\n\t}",
);

sl.addMethod(
  "HelpFile",
  "HelpFile",
  "unicode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _readCommaSeparatedField_2(_self, "Unicode: ");
  },
  "{ :self |\n\t\tself.readCommaSeparatedField('Unicode: ')\n\t}",
);

sl.addMethod(
  "String",
  "HelpFile",
  "HelpFile",
  ["origin", "source"],
  function (_origin, _source) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _origin, _source";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newHelpFile_0(), _origin, _source, _Record_0());
  },
  "{ :origin :source |\n\t\tnewHelpFile().initializeSlots(origin, source, Record())\n\t}",
);

sl.addMethod(
  "URL",
  "HelpFile",
  "HelpFile",
  ["origin", "source"],
  function (_origin, _source) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _origin, _source";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newHelpFile_0(), _origin, _source, _Record_0());
  },
  "{ :origin :source |\n\t\tnewHelpFile().initializeSlots(origin, source, Record())\n\t}",
);
