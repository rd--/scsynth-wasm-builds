/*  Requires: Clock Ugen  */

sl.addType(
  false,
  "TextureProgram",
  "Texture",
  ["Object"],
  ["iterationCounter", "soundBlock", "envelopeBlock", "delayTime"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TextureProgram",
);

sl.addMethodToExistingType(
  "TextureProgram",
  "Texture",
  "play",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_1(function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentTime";
        throw new Error(errorMessage);
      } /* Statements */
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
  "{ :self | schedule({ :currentTime | playAt(value(envelopeBlock(self),cull(soundBlock(self),iterationCounter(self))),currentTime); iterationCounter(self, +(iterationCounter(self), 1)); value(delayTime(self)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Texture",
  "TextureProgram",
  ["soundBlock:/0", "envelopeBlock:/1", "delayTime"],
  function (_soundBlock_0, _envelopeBlock_1, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _soundBlock_0, _envelopeBlock_1, _delayTime";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newTextureProgram_0(),
      0,
      _soundBlock_0,
      _envelopeBlock_1,
      _delayTime,
    );
  },
  "{ :soundBlock:/0 :envelopeBlock:/1 :delayTime | initializeSlots(newTextureProgram(),0, soundBlock:/0, envelopeBlock:/1, delayTime) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Texture",
  "withOverlapEnvelope",
  ["aUgen", "sustainTime", "transitionTime"],
  function (_aUgen, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _aUgen, _sustainTime, _transitionTime";
      throw new Error(errorMessage);
    } /* Temporaries */
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
  "{ :aUgen :sustainTime :transitionTime | let env = Env([0, 1, 1, 0], [transitionTime, sustainTime, transitionTime], 'sin', nil, nil, 0); let amp = EnvGen(1, 1, 0, 1, 2, asList(env)); Out(0, *(aUgen, amp)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Texture",
  "withOverlapEnvelope",
  ["aUgen", "sustainTime", "transitionTime"],
  function (_aUgen, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _aUgen, _sustainTime, _transitionTime";
      throw new Error(errorMessage);
    } /* Temporaries */
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
  "{ :aUgen :sustainTime :transitionTime | let env = Env([0, 1, 1, 0], [transitionTime, sustainTime, transitionTime], 'sin', nil, nil, 0); let amp = EnvGen(1, 1, 0, 1, 2, asList(env)); Out(0, *(aUgen, amp)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "Texture",
  "withOverlapEnvelope",
  ["aUgen", "sustainTime", "transitionTime"],
  function (_aUgen, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _aUgen, _sustainTime, _transitionTime";
      throw new Error(errorMessage);
    } /* Temporaries */
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
  "{ :aUgen :sustainTime :transitionTime | let env = Env([0, 1, 1, 0], [transitionTime, sustainTime, transitionTime], 'sin', nil, nil, 0); let amp = EnvGen(1, 1, 0, 1, 2, asList(env)); Out(0, *(aUgen, amp)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Texture",
  "overlapTextureProgram",
  ["self", "sustainTime", "transitionTime", "overlap"],
  function (_self, _sustainTime, _transitionTime, _overlap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _sustainTime, _transitionTime, _overlap";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _delayTime = _solidus_2(
      _plusSign_2(_sustainTime, _asterisk_2(_transitionTime, 2)),
      _overlap,
    );
    let _envelopeBlock_1 = function (_sound) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _sound";
        throw new Error(errorMessage);
      } /* Statements */
      return _withOverlapEnvelope_3(_sound, _sustainTime, _transitionTime);
    };
    /* Statements */
    return _TextureProgram_3(_self, _envelopeBlock_1, _delayTime);
  },
  "{ :self :sustainTime :transitionTime :overlap | let delayTime = /((+(sustainTime, (*(transitionTime, 2)))), overlap); let envelopeBlock = { :sound | withOverlapEnvelope(sound,sustainTime, transitionTime) }; TextureProgram(self, envelopeBlock:/1, delayTime) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Texture",
  "playEvery",
  ["self:/1", "delay"],
  function (_self_1, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _playEvery_3(_clock_1(_system), _self_1, _delay);
  },
  "{ :self:/1 :delay | playEvery(clock(system),self:/1, delay) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Texture",
  "recurseEvery",
  ["self:/2", "anObject", "delay"],
  function (_self_2, _anObject, _delay) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _anObject, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _recurseEvery_4(_clock_1(_system), _self_2, _anObject, _delay);
  },
  "{ :self:/2 :anObject :delay | recurseEvery(clock(system),self:/2, anObject, delay) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Texture",
  "spawnTextureProgram",
  ["self", "nextTime"],
  function (_self, _nextTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _nextTime";
      throw new Error(errorMessage);
    } /* Statements */
    return _TextureProgram_3(_self, _identity_1, _nextTime);
  },
  "{ :self :nextTime | TextureProgram(self, identity:/1, nextTime) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Texture",
  "xFadeTextureProgram",
  ["self", "sustainTime", "transitionTime"],
  function (_self, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _sustainTime, _transitionTime";
      throw new Error(errorMessage);
    } /* Statements */
    return _overlapTextureProgram_4(_self, _sustainTime, _transitionTime, 2);
  },
  "{ :self :sustainTime :transitionTime | overlapTextureProgram(self,sustainTime, transitionTime, 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Clock",
  "Texture",
  "playEvery",
  ["self", "aBlock:/1", "delay"],
  function (_self, _aBlock_1, _delay) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _repeatEvery_3(_self, function (_currentTime, _nextDelay) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _currentTime, _nextDelay";
        throw new Error(errorMessage);
      } /* Statements */
      return _playAt_2(_aBlock_1(_nextDelay), _currentTime);
    }, _delay);
  },
  "{ :self :aBlock:/1 :delay | repeatEvery(self,{ :currentTime :nextDelay | playAt(aBlock(nextDelay),currentTime) }, delay) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Texture",
  "collectTextureProgram",
  ["self", "soundBlock:/1", "delayTime"],
  function (_self, _soundBlock_1, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _soundBlock_1, _delayTime";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    let _endIndex = _size_1(_self);
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "collectTextureProgram: empty collection");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _TextureProgram_3(
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _answer = _soundBlock_1(_at_2(_self, _index));
          /* Statements */
          _index = _plusSign_2(_index, 1);
          return _answer;
        },
        _identity_1,
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_greaterThanSign_2(_index, _endIndex), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _value_1(_delayTime);
          });
        },
      );
    });
  },
  "{ :self :soundBlock:/1 :delayTime | let index = 1; let endIndex = size(self); if(isEmpty(self), { error(self,'collectTextureProgram: empty collection') }, { TextureProgram({ let answer = soundBlock(at(self, index)); index := +(index, 1); answer }, identity:/1, { if((>(index, endIndex)), { nil }, { value(delayTime) }) }) }) }",
);
