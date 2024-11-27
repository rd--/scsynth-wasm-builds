sl.extendTraitWithMethod(
  "Cache",
  "Unicode",
  "unicodeData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _useLibraryItem_2(
      _self,
      _LibraryItem_4(
        "unicodeData",
        "https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt",
        "text/plain",
        function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _libraryItem"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _collect_2(_lines_1(_libraryItem), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage =
                "Arity: expected 1, _each"; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _splitBy_2(_each, ";");
          });
        },
      ),
    );
  },
  "{ :self |\n\t\tself.useLibraryItem(\n\t\t\tLibraryItem(\n\t\t\t\t'unicodeData',\n\t\t\t\t'https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt',\n\t\t\t\t'text/plain',\n\t\t\t\t{ :libraryItem |\n\t\t\t\t\tlibraryItem.lines.collect { :each |\n\t\t\t\t\t\teach.splitBy(';')\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t)\n\t\t)\n\t}",
);
