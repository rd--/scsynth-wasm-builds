sl.addType(
  false,
  "DocumentTest",
  "DocumentTest",
  ["Object"],
  ["program", "expectedAnswer"],
);

sl.copyTraitToType(
  "Object",
  "DocumentTest",
);

sl.addMethod(
  "DocumentTest",
  "DocumentTest",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isDocumentTest_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_program_1(_self), _program_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(
            _expectedAnswer_1(_self),
            _expectedAnswer_1(_anObject),
          );
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isDocumentTest & {\n\t\t\tself.program = anObject.program & {\n\t\t\t\tself.expectedAnswer = anObject.expectedAnswer\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "DocumentTest",
  "DocumentTest",
  "evaluate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifError_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _evaluate_2(_system, _format_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self |\n\t\t{\n\t\t\tsystem.evaluate(self.format)\n\t\t}.ifError {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "DocumentTest",
  "DocumentTest",
  "format",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(_unwords_1(_program_1(_self)), " ~ ("),
        _unwords_1(_expectedAnswer_1(_self)),
      ),
      ")",
    );
  },
  "{ :self |\n\t\tself.program.unwords ++ ' ~ (' ++ self.expectedAnswer.unwords ++ ')'\n\t}",
);

sl.addMethod(
  "DocumentTest",
  "DocumentTest",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "DocumentTest(",
      _storeString_1(_program_1(_self)),
      ", ",
      _storeString_1(_expectedAnswer_1(_self)),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'DocumentTest(',\n\t\t\tself.program.storeString,\n\t\t\t', ',\n\t\t\tself.expectedAnswer.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "List",
  "DocumentTest",
  "asDocumentTest",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _program = _collect_2(
      _select_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _beginsWith_2(_each, ">>> ");
      }),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _drop_2(_each, 4);
      },
    );
    let _expectedAnswer = _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _beginsWith_2(_each, ">>> ");
    });
    /* Statements */
    return _DocumentTest_2(_program, _expectedAnswer);
  },
  "{ :self |\n\t\tlet program = self.select { :each |\n\t\t\teach.beginsWith('>>> ')\n\t\t}.collect { :each |\n\t\t\teach.drop(4)\n\t\t};\n\t\tlet expectedAnswer = self.reject { :each |\n\t\t\teach.beginsWith('>>> ')\n\t\t};\n\t\tDocumentTest(program, expectedAnswer)\n\t}",
);

sl.addMethod(
  "List",
  "DocumentTest",
  "extractDocumentTests",
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
    let _inBlock = false;
    let _block = [];
    /* Statements */
    _do_2(_self, function (_currentLine) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentLine";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(
        _ampersand_2(_beginsWith_2(_currentLine, ">>> "), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _not_1(_inBlock);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _inBlock = true;
        },
      );
      _ifTrue_2(
        _ampersand_2(
          _verticalLine_2(_isEmpty_1(_currentLine), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _isCodeFence_1(_currentLine);
          }),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _inBlock;
          },
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _add_2(_answer, _asDocumentTest_1(_block));
          _removeAll_1(_block);
          return _inBlock = false;
        },
      );
      return _ifTrue_2(_inBlock, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_block, _currentLine);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tlet inBlock = false;\n\t\tlet block = [];\n\t\tself.do { :currentLine |\n\t\t\t(\n\t\t\t\tcurrentLine.beginsWith('>>> ') & {\n\t\t\t\t\tinBlock.not\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tinBlock := true\n\t\t\t};\n\t\t\t(\n\t\t\t\t(\n\t\t\t\t\tcurrentLine.isEmpty | {\n\t\t\t\t\t\tcurrentLine.isCodeFence\n\t\t\t\t\t}\n\t\t\t\t) & {\n\t\t\t\t\tinBlock\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tanswer.add(block.asDocumentTest);\n\t\t\t\tblock.removeAll;\n\t\t\t\tinBlock := false\n\t\t\t};\n\t\t\tinBlock.ifTrue {\n\t\t\t\tblock.add(currentLine)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "List",
  "DocumentTest",
  "DocumentTest",
  ["program", "expectedAnswer"],
  function (_program, _expectedAnswer) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _program, _expectedAnswer";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newDocumentTest_0(), _program, _expectedAnswer);
  },
  "{ :program :expectedAnswer |\n\t\tnewDocumentTest().initializeSlots(program, expectedAnswer)\n\t}",
);
