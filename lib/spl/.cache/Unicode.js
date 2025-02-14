/*  Requires: LibraryItem  */

sl.addMethod(
  "System",
  "Unicode",
  "unicodeCharacterDatabase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "UnicodeCharacterDatabase");
  },
  "{ :self |\n\t\tself.requireLibraryItem('UnicodeCharacterDatabase')\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "UnicodeCharacterDatabase"],
      ["category", "Text/Encoding"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/text/unicode/unicode-character-table.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
