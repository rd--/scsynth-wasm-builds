/*  Requires: ImageViewer SmallKansas  */

sl.addMethod(
  "SmallKansas",
  "PngViewer",
  "PngViewer",
  ["self", "title", "pngData"],
  function (_self, _title, _pngData) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _title, _pngData"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _url = _createObjectUrl_1(_pngData);
    /* Statements */
    return _onClose_2(
      _addFrame_3(_self, _ImageViewer_2(_title, _url), null),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _unused"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _revokeObjectUrl_1(_url);
      },
    );
  },
  "{ :self :title :pngData |\n\t\tlet url = pngData.createObjectUrl;\n\t\tself.addFrame(ImageViewer(title, url), nil).onClose { :unused |\n\t\t\turl.revokeObjectUrl\n\t\t}\n\t}",
);
