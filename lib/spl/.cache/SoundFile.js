sl.addType(
  true,
  "SoundFile",
  "SoundFile",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "SoundFile",
);

sl.addMethod(
  "SoundFile",
  "SoundFile",
  "allocSendMessage",
  ["self", "bufferNumber"],
  function (_self, _bufferNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _bufferNumber";
      /* console.error(errorMessage); */
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
  "{ :self :bufferNumber |\n\t\t<primitive:\n\t\treturn sc.b_allocMemcpyFloat32Array(\n\t\t\t_bufferNumber,\n\t\t\t_self.numberOfFrames,\n\t\t\t_self.numberOfChannels,\n\t\t\t_self.sampleRate,\n\t\t\t_self.interleavedData\n\t\t);\n\t\t>\n\t}",
);

sl.addMethod(
  "SoundFile",
  "SoundFile",
  "channelData",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.channelData(_index - 1);
  },
  "{ :self :index |\n\t\t<primitive: return _self.channelData(_index - 1);>\n\t}",
);

sl.addMethod(
  "SoundFile",
  "SoundFile",
  "interleavedData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.interleavedData;
  },
  "{ :self |\n\t\t<primitive: return _self.interleavedData;>\n\t}",
);

sl.addMethod(
  "SoundFile",
  "SoundFile",
  "numberOfChannels",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numberOfChannels;
  },
  "{ :self |\n\t\t<primitive: return _self.numberOfChannels;>\n\t}",
);

sl.addMethod(
  "SoundFile",
  "SoundFile",
  "numberOfFrames",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numberOfFrames;
  },
  "{ :self |\n\t\t<primitive: return _self.numberOfFrames;>\n\t}",
);

sl.addMethod(
  "SoundFile",
  "SoundFile",
  "sampleRate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sampleRate;
  },
  "{ :self |\n\t\t<primitive: return _self.sampleRate;>\n\t}",
);

sl.addMethod(
  "SoundFile",
  "SoundFile",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
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
  "{ :self |\n\t\t['interleavedData', 'numberOfChannels', 'numberOfFrames', 'sampleRate', 'url']\n\t}",
);

sl.addMethod(
  "SoundFile",
  "SoundFile",
  "url",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.url;
  },
  "{ :self |\n\t\t<primitive: return _self.url;>\n\t}",
);

sl.addMethod(
  "ArrayBuffer",
  "SoundFile",
  "SoundFile",
  ["self", "url"],
  function (_self, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _url";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.arrayBufferToSoundFile(_url, _self);
  },
  "{ :self :url |\n\t\t<primitive: return sc.arrayBufferToSoundFile(_url, _self);>\n\t}",
);

sl.addMethod(
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
      /* console.error(errorMessage); */
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
  "{ :interleavedData :numberOfChannels :numberOfFrames :sampleRate :urlOrNil |\n\t\t<primitive: return new sc.SoundFile(_urlOrNil, _numberOfChannels, _numberOfFrames, _sampleRate, _interleavedData);>\n\t}",
);

sl.extendTraitWithMethod(
  "Url",
  "SoundFile",
  "SoundFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.fetchSoundFile(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.fetchSoundFile(_self);>\n\t}",
);
