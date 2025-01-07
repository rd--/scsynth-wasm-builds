/*  Requires: Cache Iterable Tree  */

sl.addType(
  false,
  "Markdown",
  "Markdown",
  ["Object", "Cache", "Iterable"],
  ["source", "cache"],
);

sl.copyTraitToType(
  "Object",
  "Markdown",
);

sl.copyTraitToType(
  "Cache",
  "Markdown",
);

sl.copyTraitToType(
  "Iterable",
  "Markdown",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isMarkdown_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_source_1(_self), _source_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isMarkdown & {\n\t\t\tself.source = anObject.source\n\t\t}\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "asHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "html", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _basicAsHtml_1(_self);
    });
  },
  "{ :self |\n\t\tself.cached('html') {\n\t\t\tself.basicAsHtml\n\t\t}\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "asMarkdown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _source_1(_self);
  },
  "{ :self |\n\t\tself.source\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "asTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _items = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_items, _Tree_2(_each, []));
    });
    _withIndexDo_2(_items, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _value = _value_1(_each);
      /* Statements */
      _assert_1(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_at_2(_value, "id"), _index);
      });
      return _ifTrue_2(_includesKey_2(_value, "parent"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _addChild_2(_at_2(_items, _at_2(_value, "parent")), _each);
      });
    });
    _do_2(_first_1(_items), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _removeAllKeys_2(_value_1(_each), ["id", "parent"]);
    });
    return _first_1(_items);
  },
  "{ :self |\n\t\tlet items = [];\n\t\tself.do { :each |\n\t\t\titems.add(Tree(each, []))\n\t\t};\n\t\titems.withIndexDo { :each :index |\n\t\t\tlet value = each.value;\n\t\t\t{\n\t\t\t\tvalue['id'] = index\n\t\t\t}.assert;\n\t\t\tvalue.includesKey('parent').ifTrue {\n\t\t\t\titems[value['parent']].addChild(each)\n\t\t\t}\n\t\t};\n\t\titems.first.do { :each |\n\t\t\teach.value.removeAllKeys(['id' 'parent'])\n\t\t};\n\t\titems.first\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "basicAsHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    const writer = new commonmark.HtmlRenderer();
    return writer.render(_parseTree_1(_self));
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst writer = new commonmark.HtmlRenderer();\n\t\treturn writer.render(_parseTree_1(_self));\n\t\t>\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "basicParseTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    const reader = new commonmark.Parser({ smart: true });
    return reader.parse(_self.source);
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst reader = new commonmark.Parser({smart: true});\n\t\treturn reader.parse(_self.source);\n\t\t>\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "codeBlocks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(
        _equalsSign_2(_at_2(_each, "type"), "codeBlock"),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _codeBlock = Object.fromEntries([[
            "contents",
            _at_2(_each, "literal"),
          ]]);
          let _annotation = _if_3(_includesKey_2(_each, "info"), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_each, "info");
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\t(each['type'] = 'codeBlock').ifTrue {\n\t\t\t\tlet codeBlock = (contents: each['literal']);\n\t\t\t\tlet annotation = each.includesKey('info').if {\n\t\t\t\t\teach['info']\n\t\t\t\t} {\n\t\t\t\t\t''\n\t\t\t\t};\n\t\t\t\tcodeBlock['information'] := annotation;\n\t\t\t\tanswer.add(codeBlock)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
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
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\tconst walker = _parseTree_1(_self).walker();\n\t\tlet event = null;\n\t\tlet id = 1;\n\t\tconst nodeMap = new Map();\n\t\twhile ((event = walker.next())) {\n\t\t\tif (event.entering) {\n\t\t\t\tconst node = event.node;\n\t\t\t\tconst item = Object.create(null);\n\t\t\t\titem.id = id;\n\t\t\t\tnodeMap.set(node, id)\n\t\t\t\tid = id + 1;\n\t\t\t\tif(node.parent) {\n\t\t\t\t\titem.parent = nodeMap.get(node.parent);\n\t\t\t\t}\n\t\t\t\titem.type = node.type;\n\t\t\t\tif(node.literal) {\n\t\t\t\t\titem.literal = node.literal;\n\t\t\t\t}\n\t\t\t\tif(node.type === 'link' || node.type === 'image') {\n\t\t\t\t\titem.destination = node.destination;\n\t\t\t\t\titem.title = node.title;\n\t\t\t\t}\n\t\t\t\tif(node.type === 'code_block' && node.info !== null && node.info !== '') {\n\t\t\t\t\titem.info = node.info;\n\t\t\t\t}\n\t\t\t\tif(node.type === 'heading') {\n\t\t\t\t\titem.level = node.level;\n\t\t\t\t}\n\t\t\t\tif(node.type === 'list') {\n\t\t\t\t\titem.listType = node.listType;\n\t\t\t\t}\n\t\t\t\tif(node.sourcepos) {\n\t\t\t\t\titem.sourcePosition = node.sourcepos;\n\t\t\t\t}\n\t\t\t\tswitch(node.type) {\n\t\t\t\t\tcase 'code_block': item.type = 'codeBlock'; break;\n\t\t\t\t\tcase 'block_quote': item.type = 'blockQuote'; break;\n\t\t\t\t\tcase 'emph': item.type = 'emphasis'; break;\n\t\t\t\t\tcase 'html_block': item.type = 'htmlBlock'; break;\n\t\t\t\t\tcase 'html_inline': item.type = 'htmlInline'; break;\n\t\t\t\t\tcase 'item': item.type = 'listItem'; break;\n\t\t\t\t\tcase 'linebreak': item.type = 'lineBreak'; break;\n\t\t\t\t\tcase 'softbreak': item.type = 'softBreak'; break;\n\t\t\t\t\tcase 'thematic_break': item.type = 'thematicBreak'; break;\n\t\t\t\t}\n\t\t\t\t_aBlock_1(item);\n\t\t\t}\n\t\t}\n\t\t>\n\t\tself\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "elements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "elements", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _contents_1(_self);
    });
  },
  "{ :self |\n\t\tself.cached('elements') {\n\t\t\tself.contents\n\t\t}\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "indentedCodeBlocks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
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
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(
        _ampersand_2(_notEmpty_1(_current), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(_isTab_1(_first_1(_current)), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(_isEmpty_1(_previous), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
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
            /* console.error(errorMessage); */
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
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(_notEmpty_1(_previous), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(_isTab_1(_first_1(_previous)), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
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
            /* console.error(errorMessage); */
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
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_block, _current);
      });
      return _previous = _current;
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tlet previous = '';\n\t\tlet inBlock = false;\n\t\tlet block = [];\n\t\tself.lines.do { :current |\n\t\t\t(current.notEmpty & {\n\t\t\t\tcurrent.first.isTab & {\n\t\t\t\t\tprevious.isEmpty & {\n\t\t\t\t\t\tinBlock.not\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}).ifTrue {\n\t\t\t\tinBlock := true\n\t\t\t};\n\t\t\t(current.isEmpty & {\n\t\t\t\tprevious.notEmpty & {\n\t\t\t\t\tprevious.first.isTab & {\n\t\t\t\t\t\tinBlock\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}).ifTrue {\n\t\t\t\tanswer.add(block.copy);\n\t\t\t\tblock.removeAll;\n\t\t\t\tinBlock := false\n\t\t\t};\n\t\t\tinBlock.ifTrue {\n\t\t\t\tblock.add(current)\n\t\t\t};\n\t\t\tprevious := current\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "parseTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "parseTree", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _basicParseTree_1(_self);
    });
  },
  "{ :self |\n\t\tself.cached('parseTree') {\n\t\t\tself.basicParseTree\n\t\t}\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "lines",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "lines", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lines_1(_source_1(_self));
    });
  },
  "{ :self |\n\t\tself.cached('lines') {\n\t\t\tself.source.lines\n\t\t}\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return "<Markdown>";
  },
  "{ :self |\n\t\t'<Markdown>'\n\t}",
);

sl.addMethod(
  "Markdown",
  "Markdown",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2("Markdown(", _storeString_1(_source_1(_self))),
      ")",
    );
  },
  "{ :self |\n\t\t'Markdown(' ++ self.source.storeString ++ ')'\n\t}",
);

sl.addMethod(
  "String",
  "Markdown",
  "isCodeFence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_beginsWith_2(_self, "~~~"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _beginsWith_2(_self, "```");
    });
  },
  "{ :self |\n\t\tself.beginsWith('~~~') | {\n\t\t\tself.beginsWith('```')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Markdown",
  "isTildeCodeFence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _beginsWith_2(_self, "~~~");
  },
  "{ :self |\n\t\tself.beginsWith('~~~')\n\t}",
);

sl.addMethod(
  "String",
  "Markdown",
  "isGraveAccentCodeFence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _beginsWith_2(_self, "```");
  },
  "{ :self |\n\t\tself.beginsWith('```')\n\t}",
);

sl.addMethod(
  "String",
  "Markdown",
  "Markdown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newMarkdown_0(), _self, _Record_0());
  },
  "{ :self |\n\t\tnewMarkdown().initializeSlots(self, Record())\n\t}",
);

sl.addMethod(
  "String",
  "Markdown",
  "markdownToHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asHtml_1(_Markdown_1(_self));
  },
  "{ :self |\n\t\tMarkdown(self).asHtml\n\t}",
);
