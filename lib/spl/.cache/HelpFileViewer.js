sl.addType(
  false,
  "HelpFileViewer",
  "HelpFileViewer",
  ["Object", "UserEventTarget", "View"],
  ["smallKansas", "outerElement", "eventListeners"],
);

sl.copyTraitToType(
  "Object",
  "HelpFileViewer",
);

sl.copyTraitToType(
  "UserEventTarget",
  "HelpFileViewer",
);

sl.copyTraitToType(
  "View",
  "HelpFileViewer",
);

sl.addMethod(
  "HelpFileViewer",
  "HelpFileViewer",
  "initialize",
  ["self", "smallKansas"],
  function (_self, _smallKansas) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallKansas";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _smallKansas_2(_self, _smallKansas);
    _outerElement_2(
      _self,
      _createElement_2(
        "div",
        Object.fromEntries([["class", "helpFileViewerPane"]]),
      ),
    );
    _eventListeners_2(_self, _Record_0());
    return _self;
  },
  "{ :self :smallKansas |\n\t\tself.smallKansas := smallKansas;\n\t\tself.outerElement := 'div'.createElement(\n\t\t\tclass: 'helpFileViewerPane'\n\t\t);\n\t\tself.eventListeners := Record();\n\t\tself\n\t}",
);

sl.addMethod(
  "HelpFileViewer",
  "HelpFileViewer",
  "showHelpFile",
  ["self", "helpFile"],
  function (_self, _helpFile) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _helpFile";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _lines = _lines_1(_helpFile);
    let _codeRanges = _fencedCodeBlockLineRanges_1(_helpFile);
    let _nonCodeRanges = _asRangeList_1(
      _differenceAll_2(_upOrDownTo_2(1, _size_1(_lines)), _codeRanges),
    );
    let _allRanges = _sortBy_2(
      _plusSignPlusSign_2(_codeRanges, _nonCodeRanges),
      function (_p, _q) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _q";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSign_2(_start_1(_p), _start_1(_q));
      },
    );
    let _fragments = _collect_2(_allRanges, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _commercialAtAsterisk_2(_lines, _each);
    });
    let _place_1 = function (_item) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _item";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _helpItem = _createElement_2(
        "div",
        Object.fromEntries([["class", "helpViewerItem"]]),
      );
      /* Statements */
      _appendChild_2(_helpItem, _outerElement_1(_item));
      return _appendChild_2(_outerElement_1(_self), _helpItem);
    };
    /* Statements */
    _removeAllChildren_1(_outerElement_1(_self));
    return _do_2(_fragments, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isCodeFence_1(_first_1(_each)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _do_2(
          _splitBy_2(_allButFirstAndLast_1(_each), [""]),
          function (_codeBlock) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _codeBlock";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _if_3(
              _beginsWith_2(_first_1(_codeBlock), ">>> "),
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _place_1(
                  _asSmallProgram_2(
                    _asDocumentTest_1(_codeBlock),
                    _smallKansas_1(_self),
                  ),
                );
              },
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _place_1(
                  _SmallProgram_4(
                    _smallKansas_1(_self),
                    "",
                    _unlines_1(_codeBlock),
                    "",
                  ),
                );
              },
            );
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
        return _place_1(
          _TextEditor_4(
            _smallKansas_1(_self),
            "Help File Fragment",
            "text/markdown",
            _unlines_1(_each),
          ),
        );
      });
    });
  },
  "{ :self :helpFile |\n\t\tlet lines = helpFile.lines;\n\t\tlet codeRanges = helpFile.fencedCodeBlockLineRanges;\n\t\tlet nonCodeRanges = (1 .. lines.size).differenceAll(codeRanges).asRangeList;\n\t\tlet allRanges = (codeRanges ++ nonCodeRanges).sortBy { :p :q |\n\t\t\tp.start < q.start\n\t\t};\n\t\tlet fragments = allRanges.collect { :each |\n\t\t\tlines @* each\n\t\t};\n\t\tlet place = { :item |\n\t\t\tlet helpItem = 'div'.createElement(class: 'helpViewerItem');\n\t\t\thelpItem.appendChild(item.outerElement);\n\t\t\tself.outerElement.appendChild(helpItem)\n\t\t};\n\t\tself.outerElement.removeAllChildren;\n\t\tfragments.do { :each |\n\t\t\teach.first.isCodeFence.if {\n\t\t\t\teach.allButFirstAndLast.splitBy(['']).do { :codeBlock |\n\t\t\t\t\tcodeBlock.first.beginsWith('>>> ').if {\n\t\t\t\t\t\tcodeBlock.asDocumentTest.asSmallProgram(self.smallKansas).place\n\t\t\t\t\t} {\n\t\t\t\t\t\tSmallProgram(self.smallKansas, '', codeBlock.unlines, '').place\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tTextEditor(self.smallKansas, 'Help File Fragment', 'text/markdown', each.unlines).place\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HelpFileViewer",
  "HelpFileViewer",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return "Help File Viewer";
  },
  "{ :self |\n\t\t'Help File Viewer'\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "HelpFileViewer",
  "helpFor",
  ["self", "topic", "event"],
  function (_self, _topic, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _topic, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(_helpIndex_1(_self), function (_helpIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _helpIndex";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _then_2(_fetchFor_2(_helpIndex, _topic), function (_aString) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aString";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifNotNil_2(_aString, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _subject = _subject_1(_helpFileViewer_2(_self, _event));
          let _helpFile = _HelpFile_2(_topic, _aString);
          /* Statements */
          return _showHelpFile_2(_subject, _helpFile);
        });
      });
    });
  },
  "{ :self :topic :event |\n\t\tself.helpIndex.then { :helpIndex |\n\t\t\thelpIndex.fetchFor(topic).then { :aString |\n\t\t\t\taString.ifNotNil {\n\t\t\t\t\tlet subject = self.helpFileViewer(event).subject;\n\t\t\t\t\tlet helpFile = HelpFile(topic, aString);\n\t\t\t\t\tsubject.showHelpFile(helpFile)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "HelpFileViewer",
  "helpFileViewer",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _detectIfNone_3(_frameSet_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_title_1(_each), "Help File Viewer");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _viewer = _initialize_2(_newHelpFileViewer_0(), _self);
      /* Statements */
      return _addFrame_3(_self, _viewer, _event);
    });
  },
  "{ :self :event |\n\t\tself.frameSet.detectIfNone { :each |\n\t\t\teach.title = 'Help File Viewer'\n\t\t} {\n\t\t\tlet viewer = newHelpFileViewer().initialize(self);\n\t\t\tself.addFrame(viewer, event)\n\t\t}\n\t}",
);
