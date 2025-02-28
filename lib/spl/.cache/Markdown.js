/*  Requires: Cache Iterable Tree  */

sl.addType(
  false,
  "Markdown",
  "Markdown",
  ["Object", "Cache", "Iterable"],
  ["source", "cache"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Markdown",
);

sl.copyTraitMethodsToType(
  "Cache",
  "Markdown",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Markdown",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isMarkdown_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_source_1(_self), _source_1(_anObject));
    });
  },
  "{ :self :anObject | &(isMarkdown(anObject), { =(source(self), source(anObject)) }) }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "asHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "html", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicAsHtml_1(_self);
    });
  },
  "{ :self | cached(self, 'html', { basicAsHtml(self) }) }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "asMarkdown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _source_1(_self);
  },
  "{ :self | source(self) }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "asTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _items = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_items, _Tree_2(_each, []));
    });
    _withIndexDo_2(_items, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _value = _value_1(_each);
      /* Statements */
      _assert_1(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_at_2(_value, "id"), _index);
      });
      return _ifTrue_2(_includesKey_2(_value, "parent"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addChild_2(_at_2(_items, _at_2(_value, "parent")), _each);
      });
    });
    _do_2(_first_1(_items), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _removeAllKeys_2(_value_1(_each), ["id", "parent"]);
    });
    return _first_1(_items);
  },
  "{ :self | let items = []; do(self, { :each | add(items,Tree(each, [])) }); withIndexDo(items, { :each :index | let value = value(each); assert({ =(at(value, 'id'), index) }); ifTrue(includesKey(value,'parent'), { addChild(at(items, at(value, 'parent')),each) }) }); do(first(items), { :each | removeAllKeys(value(each),['id', 'parent']) }); first(items) }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "basicAsHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const writer = new commonmark.HtmlRenderer();
    return writer.render(_parseTree_1(_self));
  },
  "{ :self | <primitive: const writer = new commonmark.HtmlRenderer();\n\t\treturn writer.render(_parseTree_1(_self));>\n }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "basicParseTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const reader = new commonmark.Parser({ smart: true });
    return reader.parse(_self.source);
  },
  "{ :self | <primitive: const reader = new commonmark.Parser({smart: true});\n\t\treturn reader.parse(_self.source);>\n }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "codeBlocks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(
        _equalsSign_2(_at_2(_each, "type"), "codeBlock"),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _codeBlock = _Record_1([["contents", _at_2(_each, "literal")]]);
          let _annotation = _if_3(_includesKey_2(_each, "info"), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_each, "info");
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "";
          });
          /* Statements */
          _atPut_3(_codeBlock, "information", _annotation);
          return _add_2(_answer, _codeBlock);
        },
      );
    });
    return _answer;
  },
  "{ :self | let answer = []; do(self, { :each | ifTrue((=(at(each, 'type'), 'codeBlock')), { let codeBlock = Record([['contents', at(each, 'literal')]]); let annotation = if(includesKey(each,'info'), { at(each, 'info') }, { '' }); atPut(codeBlock, 'information', annotation); add(answer,codeBlock) }) }); answer }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    const walker = _parseTree_1(_self).walker();
    let event = null;
    let id = 1;
    const nodeMap = new Map();
    while ((event = walker.next())) {
      if (event.entering) {
        const node = event.node;
        const item = Object.create(null);
        item.id = id;
        nodeMap.set(node, id);
        id = id + 1;
        if (node.parent) {
          item.parent = nodeMap.get(node.parent);
        }
        item.type = node.type;
        if (node.literal) {
          item.literal = node.literal;
        }
        if (node.type === "link" || node.type === "image") {
          item.destination = node.destination;
          item.title = node.title;
        }
        if (
          node.type === "code_block" && node.info !== null && node.info !== ""
        ) {
          item.info = node.info;
        }
        if (node.type === "heading") {
          item.level = node.level;
        }
        if (node.type === "list") {
          item.listType = node.listType;
        }
        if (node.sourcepos) {
          item.sourcePosition = node.sourcepos;
        }
        switch (node.type) {
          case "code_block":
            item.type = "codeBlock";
            break;
          case "block_quote":
            item.type = "blockQuote";
            break;
          case "emph":
            item.type = "emphasis";
            break;
          case "html_block":
            item.type = "htmlBlock";
            break;
          case "html_inline":
            item.type = "htmlInline";
            break;
          case "item":
            item.type = "listItem";
            break;
          case "linebreak":
            item.type = "lineBreak";
            break;
          case "softbreak":
            item.type = "softBreak";
            break;
          case "thematic_break":
            item.type = "thematicBreak";
            break;
        }
        _aBlock_1(item);
      }
    }
    /* Statements */
    return _self;
  },
  "{ :self :aBlock:/1 | <primitive: const walker = _parseTree_1(_self).walker();\n\t\tlet event = null;\n\t\tlet id = 1;\n\t\tconst nodeMap = new Map();\n\t\twhile ((event = walker.next())) {\n\t\t\tif (event.entering) {\n\t\t\t\tconst node = event.node;\n\t\t\t\tconst item = Object.create(null);\n\t\t\t\titem.id = id;\n\t\t\t\tnodeMap.set(node, id)\n\t\t\t\tid = id + 1;\n\t\t\t\tif(node.parent) {\n\t\t\t\t\titem.parent = nodeMap.get(node.parent);\n\t\t\t\t}\n\t\t\t\titem.type = node.type;\n\t\t\t\tif(node.literal) {\n\t\t\t\t\titem.literal = node.literal;\n\t\t\t\t}\n\t\t\t\tif(node.type === 'link' || node.type === 'image') {\n\t\t\t\t\titem.destination = node.destination;\n\t\t\t\t\titem.title = node.title;\n\t\t\t\t}\n\t\t\t\tif(node.type === 'code_block' && node.info !== null && node.info !== '') {\n\t\t\t\t\titem.info = node.info;\n\t\t\t\t}\n\t\t\t\tif(node.type === 'heading') {\n\t\t\t\t\titem.level = node.level;\n\t\t\t\t}\n\t\t\t\tif(node.type === 'list') {\n\t\t\t\t\titem.listType = node.listType;\n\t\t\t\t}\n\t\t\t\tif(node.sourcepos) {\n\t\t\t\t\titem.sourcePosition = node.sourcepos;\n\t\t\t\t}\n\t\t\t\tswitch(node.type) {\n\t\t\t\t\tcase 'code_block': item.type = 'codeBlock'; break;\n\t\t\t\t\tcase 'block_quote': item.type = 'blockQuote'; break;\n\t\t\t\t\tcase 'emph': item.type = 'emphasis'; break;\n\t\t\t\t\tcase 'html_block': item.type = 'htmlBlock'; break;\n\t\t\t\t\tcase 'html_inline': item.type = 'htmlInline'; break;\n\t\t\t\t\tcase 'item': item.type = 'listItem'; break;\n\t\t\t\t\tcase 'linebreak': item.type = 'lineBreak'; break;\n\t\t\t\t\tcase 'softbreak': item.type = 'softBreak'; break;\n\t\t\t\t\tcase 'thematic_break': item.type = 'thematicBreak'; break;\n\t\t\t\t}\n\t\t\t\t_aBlock_1(item);\n\t\t\t}\n\t\t}>\nself }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "elements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "elements", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _contents_1(_self);
    });
  },
  "{ :self | cached(self, 'elements', { contents(self) }) }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "indentedCodeBlocks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _previous = "";
    let _inBlock = false;
    let _block = [];
    /* Statements */
    _do_2(_lines_1(_self), function (_current) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _current";
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(
        _ampersand_2(_notEmpty_1(_current), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(_isTab_1(_first_1(_current)), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(_isEmpty_1(_previous), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _not_1(_inBlock);
            });
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _inBlock = true;
        },
      );
      _ifTrue_2(
        _ampersand_2(_isEmpty_1(_current), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(_notEmpty_1(_previous), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(_isTab_1(_first_1(_previous)), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _inBlock;
            });
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _add_2(_answer, _copy_1(_block));
          _removeAll_1(_block);
          return _inBlock = false;
        },
      );
      _ifTrue_2(_inBlock, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_block, _current);
      });
      return _previous = _current;
    });
    return _answer;
  },
  "{ :self | let answer = []; let previous = ''; let inBlock = false; let block = []; do(lines(self), { :current | ifTrue((&(notEmpty(current), { &(isTab(first(current)), { &(isEmpty(previous), { not(inBlock) }) }) })), { inBlock := true }); ifTrue((&(isEmpty(current), { &(notEmpty(previous), { &(isTab(first(previous)), { inBlock }) }) })), { add(answer,copy(block)); removeAll(block); inBlock := false }); ifTrue(inBlock, { add(block,current) }); previous := current }); answer }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "parseTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "parseTree", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicParseTree_1(_self);
    });
  },
  "{ :self | cached(self, 'parseTree', { basicParseTree(self) }) }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "lines",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "lines", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _lines_1(_source_1(_self));
    });
  },
  "{ :self | cached(self, 'lines', { lines(source(self)) }) }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "<Markdown>";
  },
  "{ :self | '<Markdown>' }",
);

sl.addMethodToExistingType(
  "Markdown",
  "Markdown",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2("Markdown(", _storeString_1(_source_1(_self))),
      ")",
    );
  },
  "{ :self | ++(++('Markdown(', storeString(source(self))), ')') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Markdown",
  "isCodeFence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_beginsWith_2(_self, "~~~"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _beginsWith_2(_self, "```");
    });
  },
  "{ :self | |(beginsWith(self,'~~~'), { beginsWith(self,'```') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Markdown",
  "isTildeCodeFence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _beginsWith_2(_self, "~~~");
  },
  "{ :self | beginsWith(self,'~~~') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Markdown",
  "isGraveAccentCodeFence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _beginsWith_2(_self, "```");
  },
  "{ :self | beginsWith(self,'```') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Markdown",
  "Markdown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newMarkdown_0(), _self, _Record_0());
  },
  "{ :self | initializeSlots(newMarkdown(),self, Record()) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Markdown",
  "markdownToHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtml_1(_Markdown_1(_self));
  },
  "{ :self | asHtml(Markdown(self)) }",
);
