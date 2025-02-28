sl.addType(
  true,
  "SoundFile",
  "SoundFile",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SoundFile",
);

sl.addMethodToExistingType(
  "SoundFile",
  "SoundFile",
  "allocSendMessage",
  ["self", "bufferNumber"],
  function (_self, _bufferNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _bufferNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.b_allocMemcpyFloat32Array(
      _bufferNumber,
      _self.numberOfFrames,
      _self.numberOfChannels,
      _self.sampleRate,
      _self.interleavedData,
    );
  },
  "{ :self :bufferNumber | <primitive: return sc.b_allocMemcpyFloat32Array(\n\t\t\t_bufferNumber,\n\t\t\t_self.numberOfFrames,\n\t\t\t_self.numberOfChannels,\n\t\t\t_self.sampleRate,\n\t\t\t_self.interleavedData\n\t\t);>\n }",
);

sl.addMethodToExistingType(
  "SoundFile",
  "SoundFile",
  "channelData",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.channelData(_index - 1);
  },
  "{ :self :index | <primitive: return _self.channelData(_index - 1);>\n }",
);

sl.addMethodToExistingType(
  "SoundFile",
  "SoundFile",
  "interleavedData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.interleavedData;
  },
  "{ :self | <primitive: return _self.interleavedData;>\n }",
);

sl.addMethodToExistingType(
  "SoundFile",
  "SoundFile",
  "numberOfChannels",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numberOfChannels;
  },
  "{ :self | <primitive: return _self.numberOfChannels;>\n }",
);

sl.addMethodToExistingType(
  "SoundFile",
  "SoundFile",
  "numberOfFrames",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numberOfFrames;
  },
  "{ :self | <primitive: return _self.numberOfFrames;>\n }",
);

sl.addMethodToExistingType(
  "SoundFile",
  "SoundFile",
  "sampleRate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sampleRate;
  },
  "{ :self | <primitive: return _self.sampleRate;>\n }",
);

sl.addMethodToExistingType(
  "SoundFile",
  "SoundFile",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      "interleavedData",
      "numberOfChannels",
      "numberOfFrames",
      "sampleRate",
      "url",
    ];
  },
  "{ :self | ['interleavedData', 'numberOfChannels', 'numberOfFrames', 'sampleRate', 'url'] }",
);

sl.addMethodToExistingType(
  "SoundFile",
  "SoundFile",
  "url",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.url;
  },
  "{ :self | <primitive: return _self.url;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "ArrayBuffer",
  "SoundFile",
  "SoundFile",
  ["self", "url"],
  function (_self, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _url";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.arrayBufferToSoundFile(_url, _self);
  },
  "{ :self :url | <primitive: return sc.arrayBufferToSoundFile(_url, _self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Float32Array",
  "SoundFile",
  "SoundFile",
  [
    "interleavedData",
    "numberOfChannels",
    "numberOfFrames",
    "sampleRate",
    "urlOrNil",
  ],
  function (
    _interleavedData,
    _numberOfChannels,
    _numberOfFrames,
    _sampleRate,
    _urlOrNil,
  ) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _interleavedData, _numberOfChannels, _numberOfFrames, _sampleRate, _urlOrNil";
      throw new Error(errorMessage);
    } /* Primitive */
    return new sc.SoundFile(
      _urlOrNil,
      _numberOfChannels,
      _numberOfFrames,
      _sampleRate,
      _interleavedData,
    );
  },
  "{ :interleavedData :numberOfChannels :numberOfFrames :sampleRate :urlOrNil | <primitive: return new sc.SoundFile(_urlOrNil, _numberOfChannels, _numberOfFrames, _sampleRate, _interleavedData);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Url",
  "SoundFile",
  "SoundFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.fetchSoundFile(_self);
  },
  "{ :self | <primitive: return sc.fetchSoundFile(_self);>\n }",
);
