_then_2(
  _primitiveLoadPackageSequence_1([
    "Prototype",
    "ArrayBuffer",
    "Bag",
    "Bitset",
    "ByteArray",
    "CategoryDictionary",
    "Float32Array",
    "Float64Array",
    "Graph",
    "Heap",
    "LinkedList",
    "PriorityQueue",
    "RunArray",
    "Set",
    "Stack",
    "SortedList",
    "Tuple",
    "WeakMap",
    "Angle",
    "CartesianCoordinate",
    "Length",
    "PolarCoordinate",
    "RectangularCoordinate",
    "Circle",
    "Matrix22",
    "Matrix33",
    "Projection3",
    "Rectangle",
    "FourVector",
    "CylindricalCoordinate",
    "Sphere",
    "SphericalCoordinate",
    "Point",
    "Colour",
    "HelpIndex",
    "Complex",
    "Fraction",
    "LargeInteger",
    "Iterator",
    "Stream",
    "PositionableStream",
    "WriteStream",
    "BlockStream",
    "CollectionStream",
    "MutableCollectionStream",
    "AsciiStream",
    "Utf8Stream",
    "LinearCongruential",
    "Mersenne",
    "ProbabilityDistribution",
    "Sfc32",
    "SplitMix",
    "Blob",
    "Event",
    "EventTarget",
    "File",
    "FileSystem",
    "LibraryItem",
    "Method",
    "MessageEvent",
    "Storage",
    "SubProcess",
    "Trait",
    "Transcript",
    "Type",
    "Url",
    "UrlSearchParams",
    "WebSocket",
    "Window",
    "Character",
    "Markdown",
    "RegExp",
    "Clock",
    "Date",
    "Duration",
    "Frequency",
    "TimeStamp",
    "Mass",
    "SiUnit",
    "Categories",
    "TerseGuide",
    "TerseReference",
    "SoundFile",
    "Apl",
  ]),
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(
      _primitiveReadLocalFile_1("config/preferences.json"),
      function (_byteList) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _byteList";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(
          _cache_1(_system),
          "preferences",
          _parseJson_1(_utf8String_1(_byteList)),
        );
      },
    );
  },
);
