sl.addType(
  false,
  "DocumentationTest",
  "DocumentationTest",
  ["Object"],
  ["prefix", "program", "expectedAnswer"],
);

sl.copyTraitToType(
  "Object",
  "DocumentationTest",
);

sl.addMethod(
  "DocumentationTest",
  "DocumentationTest",
  "evaluate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifError_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluate_2(_system, _format_1(_self));
    }, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _postLine_1(["DocumentationTest>>evaluate", _err]);
      return false;
    });
  },
  "{ :self |\n\t\t{\n\t\t\tsystem.evaluate(self.format)\n\t\t}.ifError { :err |\n\t\t\t['DocumentationTest>>evaluate', err].postLine;\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "DocumentationTest",
  "DocumentationTest",
  "format",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_prefix_1(_self), ">>>"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSignPlusSign_2(
        _plusSignPlusSign_2(
          _plusSignPlusSign_2(_unwords_1(_program_1(_self)), " ~ ("),
          _unwords_1(_expectedAnswer_1(_self)),
        ),
        ")",
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_prefix_1(_self), ">>"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _join_2([
          "(",
          _unwords_1(_program_1(_self)),
          ").printString.utf8ByteArray = ",
          _storeString_1(
            _utf8ByteArray_1(_unlines_1(_expectedAnswer_1(_self))),
          ),
        ], "");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("format: unknown prefix: ", _prefix_1(_self)),
        );
      });
    });
  },
  "{ :self |\n\t\t(self.prefix = '>>>').if {\n\t\t\tself.program.unwords ++ ' ~ (' ++ self.expectedAnswer.unwords ++ ')'\n\t\t} {\n\t\t\t(self.prefix = '>>').if {\n\t\t\t\t[\n\t\t\t\t\t'(',\n\t\t\t\t\tself.program.unwords,\n\t\t\t\t\t').printString.utf8ByteArray = ',\n\t\t\t\t\tself.expectedAnswer.unlines.utf8ByteArray.storeString\n\t\t\t\t].join('')\n\t\t\t} {\n\t\t\t\tself.error('format: unknown prefix: ' ++ self.prefix)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "DocumentationTest",
  "DocumentationTest",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "List",
  "DocumentationTest",
  "asDocumentationTest",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _prefix = _match_2(_RegExp_1(">+"), _at_2(_self, 1));
    let _program = _collect_2(
      _select_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _beginsWith_2(_each, _prefix);
      }),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _drop_2(_each, _plusSign_2(_size_1(_prefix), 1));
      },
    );
    let _expectedAnswer = _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _beginsWith_2(_each, _prefix);
    });
    /* Statements */
    return _DocumentationTest_3(_prefix, _program, _expectedAnswer);
  },
  "{ :self |\n\t\tlet prefix = RegExp('>+').match(self[1]);\n\t\tlet program = self.select { :each |\n\t\t\teach.beginsWith(prefix)\n\t\t}.collect { :each |\n\t\t\teach.drop(prefix.size + 1)\n\t\t};\n\t\tlet expectedAnswer = self.reject { :each |\n\t\t\teach.beginsWith(prefix)\n\t\t};\n\t\tDocumentationTest(prefix, program, expectedAnswer)\n\t}",
);

sl.addMethod(
  "List",
  "DocumentationTest",
  "extractDocumentationTests",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _inBlock = false;
    let _block = [];
    /* Statements */
    _do_2(_self, function (_currentLine) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentLine";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(
        _ampersand_2(
          _beginsWithAnyOf_2(_currentLine, [">> ", ">>> "]),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _not_1(_inBlock);
          },
        ),
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
        _ampersand_2(
          _verticalLine_2(_isEmpty_1(_currentLine), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _isCodeFence_1(_currentLine);
          }),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _inBlock;
          },
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          _add_2(_answer, _asDocumentationTest_1(_block));
          _removeAll_1(_block);
          return _inBlock = false;
        },
      );
      return _ifTrue_2(_inBlock, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_block, _currentLine);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tlet inBlock = false;\n\t\tlet block = [];\n\t\tself.do { :currentLine |\n\t\t\t(\n\t\t\t\tcurrentLine.beginsWithAnyOf(['>> ', '>>> ']) & {\n\t\t\t\t\tinBlock.not\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tinBlock := true\n\t\t\t};\n\t\t\t(\n\t\t\t\t(\n\t\t\t\t\tcurrentLine.isEmpty | {\n\t\t\t\t\t\tcurrentLine.isCodeFence\n\t\t\t\t\t}\n\t\t\t\t) & {\n\t\t\t\t\tinBlock\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tanswer.add(block.asDocumentationTest);\n\t\t\t\tblock.removeAll;\n\t\t\t\tinBlock := false\n\t\t\t};\n\t\t\tinBlock.ifTrue {\n\t\t\t\tblock.add(currentLine)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "String",
  "DocumentationTest",
  "DocumentationTest",
  ["prefix", "program", "expectedAnswer"],
  function (_prefix, _program, _expectedAnswer) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _prefix, _program, _expectedAnswer";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newDocumentationTest_0(),
      _prefix,
      _program,
      _expectedAnswer,
    );
  },
  "{ :prefix :program :expectedAnswer |\n\t\tnewDocumentationTest().initializeSlots(prefix, program, expectedAnswer)\n\t}",
);
