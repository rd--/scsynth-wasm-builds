/*  Requires: DocumentationTest HelpFile SmallKansas SmallProgram TextEditor  */

sl.addType(
  false,
  "HelpFileViewer",
  "HelpFileViewer",
  ["Object", "UserEventTarget", "View"],
  ["smallKansas", "outerElement", "eventListeners"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HelpFileViewer",
);

sl.copyTraitMethodsToType(
  "UserEventTarget",
  "HelpFileViewer",
);

sl.copyTraitMethodsToType(
  "View",
  "HelpFileViewer",
);

sl.addMethodToExistingType(
  "HelpFileViewer",
  "HelpFileViewer",
  "initialize",
  ["self", "smallKansas"],
  function (_self, _smallKansas) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallKansas";
      throw new Error(errorMessage);
    } /* Statements */
    _smallKansas_2(_self, _smallKansas);
    _outerElement_2(
      _self,
      _createElement_2("div", _Record_1([["class", "helpFileViewerPane"]])),
    );
    _eventListeners_2(_self, _Record_0());
    return _self;
  },
  "{ :self :smallKansas | smallKansas(self, smallKansas); outerElement(self, createElement('div', Record([['class', 'helpFileViewerPane']]))); eventListeners(self, Record()); self }",
);

sl.addMethodToExistingType(
  "HelpFileViewer",
  "HelpFileViewer",
  "showHelpFile",
  ["self", "helpFile"],
  function (_self, _helpFile) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _helpFile";
      throw new Error(errorMessage);
    } /* Temporaries */
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
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_start_1(_p), _start_1(_q));
      },
    );
    let _fragments = _collect_2(_allRanges, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _commercialAtAsterisk_2(_lines, _each);
    });
    let _place_1 = function (_item) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _item";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _helpItem = _createElement_2(
        "div",
        _Record_1([["class", "helpViewerItem"]]),
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
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isCodeFence_1(_first_1(_each)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _splitBy_2(_allButFirstAndLast_1(_each), [""]),
          function (_codeBlock) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _codeBlock";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _beginsWith_2(_first_1(_codeBlock), ">>> "),
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _place_1(
                  _asSmallProgram_2(
                    _asDocumentationTest_1(_codeBlock),
                    _smallKansas_1(_self),
                  ),
                );
              },
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
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
          throw new Error(errorMessage);
        } /* Statements */
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
  "{ :self :helpFile | let lines = lines(helpFile); let codeRanges = fencedCodeBlockLineRanges(helpFile); let nonCodeRanges = asRangeList(differenceAll(upOrDownTo(1, size(lines)),codeRanges)); let allRanges = sortBy((++(codeRanges, nonCodeRanges)), { :p :q | <(start(p), start(q)) }); let fragments = collect(allRanges, { :each | @*(lines, each) }); let place = { :item | let helpItem = createElement('div', Record([['class', 'helpViewerItem']])); appendChild(helpItem,outerElement(item)); appendChild(outerElement(self),helpItem) }; removeAllChildren(outerElement(self)); do(fragments, { :each | if(isCodeFence(first(each)), { do(splitBy(allButFirstAndLast(each),['']), { :codeBlock | if(beginsWith(first(codeBlock),'>>> '), { place(asSmallProgram(asDocumentationTest(codeBlock),smallKansas(self))) }, { place(SmallProgram(smallKansas(self), '', unlines(codeBlock), '')) }) }) }, { place(TextEditor(smallKansas(self), 'Help File Fragment', 'text/markdown', unlines(each))) }) }) }",
);

sl.addMethodToExistingType(
  "HelpFileViewer",
  "HelpFileViewer",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "Help File Viewer";
  },
  "{ :self | 'Help File Viewer' }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "HelpFileViewer",
  "helpFor",
  ["self", "topic", "event"],
  function (_self, _topic, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _topic, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "HelpIndex"),
      function (_helpIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _helpIndex";
          throw new Error(errorMessage);
        } /* Statements */
        return _then_2(_fetchFor_2(_helpIndex, _topic), function (_aString) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _aString";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifNotNil_2(_aString, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _subject = _subject_1(_helpFileViewer_2(_self, _event));
            let _helpFile = _HelpFile_2(_topic, _aString);
            /* Statements */
            return _showHelpFile_2(_subject, _helpFile);
          });
        });
      },
    );
  },
  "{ :self :topic :event | then(requestLibraryItem(system,'HelpIndex'), { :helpIndex | then(fetchFor(helpIndex,topic), { :aString | ifNotNil(aString, { let subject = subject(helpFileViewer(self,event)); let helpFile = HelpFile(topic, aString); showHelpFile(subject,helpFile) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "HelpFileViewer",
  "helpFileViewer",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfNone_3(_frameSet_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_title_1(_each), "Help File Viewer");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _viewer = _initialize_2(_newHelpFileViewer_0(), _self);
      /* Statements */
      return _addFrame_3(_self, _viewer, _event);
    });
  },
  "{ :self :event | detectIfNone(frameSet(self), { :each | =(title(each), 'Help File Viewer') }, { let viewer = initialize(newHelpFileViewer(),self); addFrame(self,viewer, event) }) }",
);
