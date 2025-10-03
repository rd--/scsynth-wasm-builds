sl.addType(
  false,
  "DocumentationTest",
  "DocumentationTest",
  ["Object", "Equatable"],
  ["prefix", "program", "expectedAnswer"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DocumentationTest",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "DocumentationTest",
);

sl.addMethodToExistingType(
  "DocumentationTest",
  "DocumentationTest",
  "evaluate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifError_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _evaluate_2(_system, _format_1(_self));
      }, []),
      sl.annotateFunction(function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          throw new Error(errorMessage);
        } /* Statements */
        _postLine_1(["DocumentationTest>>evaluate", _err]);
        return false;
      }, ["err"]),
    );
  }, ["self"]),
  "{ :self | ifError({ evaluate(system,format(self)) }, { :err | postLine(['DocumentationTest>>evaluate', err]); false }) }",
);

sl.addMethodToExistingType(
  "DocumentationTest",
  "DocumentationTest",
  "format",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_prefix_1(_self), ">>>"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("% ~ (%)", [
          _unwords_1(_program_1(_self)),
          _unwords_1(_expectedAnswer_1(_self)),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_prefix_1(_self), ">>"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _format_2("{ % }.value.asString.utf8ByteArray = %", [
              _unwords_1(_program_1(_self)),
              _storeString_1(
                _utf8ByteArray_1(_unlines_1(_expectedAnswer_1(_self))),
              ),
            ]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              _plusSignPlusSign_2("format: unknown prefix: ", _prefix_1(_self)),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(prefix(self), '>>>')), { format('% ~ (%)',[unwords(program(self)), unwords(expectedAnswer(self))]) }, { if((=(prefix(self), '>>')), { format('{ % }.value.asString.utf8ByteArray = %',[unwords(program(self)), storeString(utf8ByteArray(unlines(expectedAnswer(self))))]) }, { error(self,++('format: unknown prefix: ', prefix(self))) }) }) }",
);

sl.addMethodToExistingType(
  "DocumentationTest",
  "DocumentationTest",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DocumentationTest",
  "asDocumentationTest",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _prefix = _match_2(_RegularExpression_1(">+"), _at_2(_self, 1));
    let _program = _collect_2(
      _select_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _beginsWith_2(_each, _prefix);
        }, ["each"]),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _drop_2(_each, _plusSign_2(_size_1(_prefix), 1));
      }, ["each"]),
    );
    let _expectedAnswer = _reject_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _beginsWith_2(_each, _prefix);
      }, ["each"]),
    );
    /* Statements */
    return _DocumentationTest_3(_prefix, _program, _expectedAnswer);
  }, ["self"]),
  "{ :self | let prefix = match(RegularExpression('>+'),at(self, 1)); let program = collect(select(self, { :each | beginsWith(each,prefix) }), { :each | drop(each,+(size(prefix), 1)) }); let expectedAnswer = reject(self, { :each | beginsWith(each,prefix) }); DocumentationTest(prefix, program, expectedAnswer) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DocumentationTest",
  "extractDocumentationTests",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _inBlock = false;
    let _block = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_currentLine) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _currentLine";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _ampersand_2(
            _beginsWithAny_2(_currentLine, [">> ", ">>> "]),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _not_1(_inBlock);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _inBlock = true;
          }, []),
        );
        _ifTrue_2(
          _ampersand_2(
            _verticalLine_2(
              _isEmpty_1(_currentLine),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isCodeFence_1(_currentLine);
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _inBlock;
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _asDocumentationTest_1(_block));
            _removeAll_1(_block);
            return _inBlock = false;
          }, []),
        );
        return _ifTrue_2(
          _inBlock,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_block, _currentLine);
          }, []),
        );
      }, ["currentLine"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; let inBlock = false; let block = []; do(self, { :currentLine | ifTrue((&(beginsWithAny(currentLine,['>> ', '>>> ']), { not(inBlock) })), { inBlock := true }); ifTrue((&((|(isEmpty(currentLine), { isCodeFence(currentLine) })), { inBlock })), { add(answer,asDocumentationTest(block)); removeAll(block); inBlock := false }); ifTrue(inBlock, { add(block,currentLine) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentationTest",
  "isDocumentationTestString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _beginsWith_2(_self, ">>");
  }, ["self"]),
  "{ :self | beginsWith(self,'>>') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DocumentationTest",
  "DocumentationTest",
  ["prefix", "program", "expectedAnswer"],
  sl.annotateFunction(function (_prefix, _program, _expectedAnswer) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _prefix, _program, _expectedAnswer";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newDocumentationTest_0(),
      _prefix,
      _program,
      _expectedAnswer,
    );
  }, ["prefix", "program", "expectedAnswer"]),
  "{ :prefix :program :expectedAnswer | initializeSlots(newDocumentationTest(),prefix, program, expectedAnswer) }",
);
