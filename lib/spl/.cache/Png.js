_dotLayout_1(function (_dotSource, _outputFormat, _layoutEngine) {
  /* ArityCheck */
  if (arguments.length !== 3) {
    const errorMessage =
      "Arity: expected 3, _dotSource, _outputFormat, _layoutEngine";
    /* console.error(errorMessage); */
    throw new Error(errorMessage);
  } /* Primitive */
  return import(
    "../lib/scsynth-wasm-builds/lib/ext/graphviz.js"
  ).then(
    function ({ Graphviz }) {
      return Graphviz.load().then(
        function (graphviz) {
          return graphviz.layout(
            _dotSource,
            _outputFormat,
            _layoutEngine,
            {},
          );
        },
      );
    },
  );
});
