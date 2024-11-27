/*  Requires: Clock Ugen  */

sl.addType(
  false,
  "TextureProgram",
  "Texture",
  ["Object"],
  ["iterationCounter", "soundBlock", "envelopeBlock", "delayTime"],
);

sl.copyTraitToType(
  "Object",
  "TextureProgram",
);

sl.addMethod(
  "TextureProgram",
  "Texture",
  "play",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _schedule_1(function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _currentTime"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _playAt_2(
        _value_2(
          _envelopeBlock_1(_self),
          _cull_2(_soundBlock_1(_self), _iterationCounter_1(_self)),
        ),
        _currentTime,
      );
      _iterationCounter_2(_self, _plusSign_2(_iterationCounter_1(_self), 1));
      return _value_1(_delayTime_1(_self));
    });
  },
  "{ :self |\n\t\t{ :currentTime |\n\t\t\tself.envelopeBlock.value(\n\t\t\t\tself.soundBlock.cull(\n\t\t\t\t\tself.iterationCounter\n\t\t\t\t)\n\t\t\t).playAt(currentTime);\n\t\t\tself.iterationCounter := self.iterationCounter + 1;\n\t\t\tself.delayTime.value\n\t\t}.schedule\n\t}",
);

sl.addMethod(
  "Block",
  "Texture",
  "TextureProgram",
  ["soundBlock:/0", "envelopeBlock:/1", "delayTime"],
  function (_soundBlock_0, _envelopeBlock_1, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _soundBlock_0, _envelopeBlock_1, _delayTime"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(
      _newTextureProgram_0(),
      0,
      _soundBlock_0,
      _envelopeBlock_1,
      _delayTime,
    );
  },
  "{ :soundBlock:/0 :envelopeBlock:/1 :delayTime |\n\t\tnewTextureProgram().initializeSlots(\n\t\t\t0,\n\t\t\tsoundBlock:/0,\n\t\t\tenvelopeBlock:/1,\n\t\t\tdelayTime\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "Texture",
  "withOverlapEnvelope",
  ["aUgen", "sustainTime", "transitionTime"],
  function (_aUgen, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _aUgen, _sustainTime, _transitionTime"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _env = _Env_6(
      [0, 1, 1, 0],
      [_transitionTime, _sustainTime, _transitionTime],
      "sin",
      null,
      null,
      0,
    );
    let _amp = _EnvGen_6(1, 1, 0, 1, 2, _asList_1(_env));
    /* Statements */
    return _Out_2(0, _asterisk_2(_aUgen, _amp));
  },
  "{ :aUgen :sustainTime :transitionTime |\n\t\tlet env = Env(\n\t\t\t[0, 1, 1, 0],\n\t\t\t[transitionTime, sustainTime, transitionTime],\n\t\t\t'sin',\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t0\n\t\t);\n\t\tlet amp = EnvGen(1, 1, 0, 1, 2, env.asList);\n\t\tOut(0, aUgen * amp)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Texture",
  "withOverlapEnvelope",
  ["aUgen", "sustainTime", "transitionTime"],
  function (_aUgen, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _aUgen, _sustainTime, _transitionTime"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _env = _Env_6(
      [0, 1, 1, 0],
      [_transitionTime, _sustainTime, _transitionTime],
      "sin",
      null,
      null,
      0,
    );
    let _amp = _EnvGen_6(1, 1, 0, 1, 2, _asList_1(_env));
    /* Statements */
    return _Out_2(0, _asterisk_2(_aUgen, _amp));
  },
  "{ :aUgen :sustainTime :transitionTime |\n\t\tlet env = Env(\n\t\t\t[0, 1, 1, 0],\n\t\t\t[transitionTime, sustainTime, transitionTime],\n\t\t\t'sin',\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t0\n\t\t);\n\t\tlet amp = EnvGen(1, 1, 0, 1, 2, env.asList);\n\t\tOut(0, aUgen * amp)\n\t}",
);

sl.addMethod(
  "Ugen",
  "Texture",
  "withOverlapEnvelope",
  ["aUgen", "sustainTime", "transitionTime"],
  function (_aUgen, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _aUgen, _sustainTime, _transitionTime"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _env = _Env_6(
      [0, 1, 1, 0],
      [_transitionTime, _sustainTime, _transitionTime],
      "sin",
      null,
      null,
      0,
    );
    let _amp = _EnvGen_6(1, 1, 0, 1, 2, _asList_1(_env));
    /* Statements */
    return _Out_2(0, _asterisk_2(_aUgen, _amp));
  },
  "{ :aUgen :sustainTime :transitionTime |\n\t\tlet env = Env(\n\t\t\t[0, 1, 1, 0],\n\t\t\t[transitionTime, sustainTime, transitionTime],\n\t\t\t'sin',\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t0\n\t\t);\n\t\tlet amp = EnvGen(1, 1, 0, 1, 2, env.asList);\n\t\tOut(0, aUgen * amp)\n\t}",
);

sl.addMethod(
  "Block",
  "Texture",
  "overlapTextureProgram",
  ["self", "sustainTime", "transitionTime", "overlap"],
  function (_self, _sustainTime, _transitionTime, _overlap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _sustainTime, _transitionTime, _overlap"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _delayTime = _solidus_2(
      _plusSign_2(_sustainTime, _asterisk_2(_transitionTime, 2)),
      _overlap,
    );
    let _envelopeBlock_1 = function (_sound) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _sound"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withOverlapEnvelope_3(_sound, _sustainTime, _transitionTime);
    };
    /* Statements */
    return _TextureProgram_3(_self, _envelopeBlock_1, _delayTime);
  },
  "{ :self :sustainTime :transitionTime :overlap |\n\t\tlet delayTime = (sustainTime + (transitionTime * 2)) / overlap;\n\t\tlet envelopeBlock = { :sound |\n\t\t\tsound.withOverlapEnvelope(\n\t\t\t\tsustainTime,\n\t\t\t\ttransitionTime\n\t\t\t)\n\t\t};\n\t\tTextureProgram(self, envelopeBlock:/1, delayTime)\n\t}",
);

sl.addMethod(
  "Block",
  "Texture",
  "playEvery",
  ["self:/1", "delay"],
  function (_self_1, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self_1, _delay"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _playEvery_3(_clock_1(_system), _self_1, _delay);
  },
  "{ :self:/1 :delay |\n\t\tsystem.clock.playEvery(self:/1, delay)\n\t}",
);

sl.addMethod(
  "Block",
  "Texture",
  "recurseEvery",
  ["self:/2", "anObject", "delay"],
  function (_self_2, _anObject, _delay) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_2, _anObject, _delay"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _recurseEvery_4(_clock_1(_system), _self_2, _anObject, _delay);
  },
  "{ :self:/2 :anObject :delay |\n\t\tsystem.clock.recurseEvery(self:/2, anObject, delay)\n\t}",
);

sl.addMethod(
  "Block",
  "Texture",
  "spawnTextureProgram",
  ["self", "nextTime"],
  function (_self, _nextTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _nextTime"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TextureProgram_3(_self, _identity_1, _nextTime);
  },
  "{ :self :nextTime |\n\t\tTextureProgram(self, identity:/1, nextTime)\n\t}",
);

sl.addMethod(
  "Block",
  "Texture",
  "xFadeTextureProgram",
  ["self", "sustainTime", "transitionTime"],
  function (_self, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _sustainTime, _transitionTime"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _overlapTextureProgram_4(_self, _sustainTime, _transitionTime, 2);
  },
  "{ :self :sustainTime :transitionTime |\n\t\tself.overlapTextureProgram(sustainTime, transitionTime, 2)\n\t}",
);

sl.addMethod(
  "Clock",
  "Texture",
  "playEvery",
  ["self", "aBlock:/1", "delay"],
  function (_self, _aBlock_1, _delay) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlock_1, _delay"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _repeatEvery_3(_self, function (_currentTime, _nextDelay) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage =
          "Arity: expected 2, _currentTime, _nextDelay"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _playAt_2(_aBlock_1(_nextDelay), _currentTime);
    }, _delay);
  },
  "{ :self :aBlock:/1 :delay |\n\t\tself.repeatEvery({ :currentTime :nextDelay |\n\t\t\taBlock(nextDelay).playAt(currentTime)\n\t\t}, delay)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Texture",
  "collectTextureProgram",
  ["self", "soundBlock:/1", "delayTime"],
  function (_self, _soundBlock_1, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _soundBlock_1, _delayTime"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = 1;
    let _endIndex = _size_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "collectTextureProgram: empty collection");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _TextureProgram_3(
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _answer = _soundBlock_1(_at_2(_self, _index));
          /* Statements */
          _index = _plusSign_2(_index, 1);
          return _answer;
        },
        _identity_1,
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(_greaterThanSign_2(_index, _endIndex), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return null;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _value_1(_delayTime);
          });
        },
      );
    });
  },
  "{ :self :soundBlock:/1 :delayTime |\n\t\tlet index = 1;\n\t\tlet endIndex = self.size;\n\t\tself.isEmpty.if {\n\t\t\tself.error('collectTextureProgram: empty collection')\n\t\t} {\n\t\t\tTextureProgram(\n\t\t\t\t{\n\t\t\t\t\tlet answer = soundBlock(self[index]);\n\t\t\t\t\tindex := index + 1;\n\t\t\t\t\tanswer\n\t\t\t\t},\n\t\t\t\tidentity:/1,\n\t\t\t\t{\n\t\t\t\t\t(index > endIndex).if {\n\t\t\t\t\t\tnil\n\t\t\t\t\t} {\n\t\t\t\t\t\tdelayTime.value\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t)\n\t\t}\n\t}",
);
