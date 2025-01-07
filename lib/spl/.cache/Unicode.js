sl.addMethod(
  "System",
  "Unicode",
  "unicodeData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "Text/Unicode/CharacterDatabase");
  },
  "{ :self |\n\t\tself.requireLibraryItem('Text/Unicode/CharacterDatabase')\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "Text/Unicode/CharacterDatabase"],
      ["url", "https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt"],
      ["mimeType", "text/plain"],
      ["parser", function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_lines_1(_item), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _splitBy_2(_each, ";");
        });
      }],
    ]),
  ),
);
