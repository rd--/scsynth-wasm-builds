sl.addMethod(
  "String",
  "Markdown",
  "parseMarkdownIndentedCodeBlocks",
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
    let _previous = "";
    let _inBlock = false;
    let _block = [];
    /* Statements */
    _do_2(_lines_1(_self), function (_current) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _current";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(
        _ampersand_2(_notEmpty_1(_current), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(_isTab_1(_first_1(_current)), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _ampersand_2(_isEmpty_1(_previous), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _not_1(_inBlock);
            });
          });
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
        _ampersand_2(_isEmpty_1(_current), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(_notEmpty_1(_previous), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _ampersand_2(_isTab_1(_first_1(_previous)), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _inBlock;
            });
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _add_2(_answer, _copy_1(_block));
          _removeAll_1(_block);
          return _inBlock = false;
        },
      );
      _ifTrue_2(_inBlock, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_block, _current);
      });
      return _previous = _current;
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tlet previous = '';\n\t\tlet inBlock = false;\n\t\tlet block = [];\n\t\tself.lines.do { :current |\n\t\t\t(current.notEmpty & {\n\t\t\t\tcurrent.first.isTab & {\n\t\t\t\t\tprevious.isEmpty & {\n\t\t\t\t\t\tinBlock.not\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}).ifTrue {\n\t\t\t\tinBlock := true\n\t\t\t};\n\t\t\t(current.isEmpty & {\n\t\t\t\tprevious.notEmpty & {\n\t\t\t\t\tprevious.first.isTab & {\n\t\t\t\t\t\tinBlock\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}).ifTrue {\n\t\t\t\tanswer.add(block.copy);\n\t\t\t\tblock.removeAll;\n\t\t\t\tinBlock := false\n\t\t\t};\n\t\t\tinBlock.ifTrue {\n\t\t\t\tblock.add(current)\n\t\t\t};\n\t\t\tprevious := current\n\t\t};\n\t\tanswer\n\t}",
);
