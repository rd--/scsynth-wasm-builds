sl.addMethod(
  "List",
  "Texture",
  "withOverlapEnvelope",
  ["aUgen", "sustainTime", "transitionTime"],
  function (_aUgen, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _aUgen, _sustainTime, _transitionTime";
      console.error(errorMessage);
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
        "Arity: expected 3, _aUgen, _sustainTime, _transitionTime";
      console.error(errorMessage);
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
        "Arity: expected 3, _aUgen, _sustainTime, _transitionTime";
      console.error(errorMessage);
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
  "overlap",
  ["self:/1", "sustainTime", "transitionTime", "overlap"],
  function (_self_1, _sustainTime, _transitionTime, _overlap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self_1, _sustainTime, _transitionTime, _overlap";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _period = _solidus_2(
      _plusSign_2(_sustainTime, _asterisk_2(_transitionTime, 2)),
      _overlap,
    );
    let _counter = 0;
    /* Statements */
    return _schedule_3(_clock_1(_system), 0, function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentTime";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _counter = _plusSign_2(_counter, 1);
      _playAt_2(
        _withOverlapEnvelope_3(
          _cull_2(_self_1, _counter),
          _sustainTime,
          _transitionTime,
        ),
        _plusSign_2(_currentTime, 0.5),
      );
      return _period;
    });
  },
  "{ :self:/1 :sustainTime :transitionTime :overlap |\n\t\tlet period = (sustainTime + (transitionTime * 2)) / overlap;\n\t\tlet counter = 0;\n\t\tsystem.clock.schedule(0) { :currentTime |\n\t\t\tcounter := counter + 1;\n\t\t\tself:/1.cull(\n\t\t\t\tcounter\n\t\t\t).withOverlapEnvelope(\n\t\t\t\tsustainTime,\n\t\t\t\ttransitionTime\n\t\t\t).playAt(\n\t\t\t\tcurrentTime + 0.5 /* fixed delay... */\n\t\t\t);\n\t\t\tperiod\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Texture",
  "playEvery",
  ["self:/1", "delay"],
  function (_self_1, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _delay";
      console.error(errorMessage);
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
      const errorMessage = "Arity: expected 3, _self_2, _anObject, _delay";
      console.error(errorMessage);
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
  "spawn",
  ["self:/1", "nextTime"],
  function (_self_1, _nextTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _nextTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _counter = 0;
    /* Statements */
    return _schedule_3(_clock_1(_system), 0, function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentTime";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _counter = _plusSign_2(_counter, 1);
      _playAt_2(_cull_2(_self_1, _counter), _plusSign_2(_currentTime, 0.5));
      return _value_1(_nextTime);
    });
  },
  "{ :self:/1 :nextTime |\n\t\tlet counter = 0;\n\t\tsystem.clock.schedule(0) { :currentTime |\n\t\t\tcounter := counter + 1;\n\t\t\tself:/1.cull(counter).playAt(currentTime + 0.5); /* fixed delay... */\n\t\t\tnextTime.value\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Texture",
  "xfade",
  ["self", "sustainTime", "transitionTime"],
  function (_self, _sustainTime, _transitionTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _sustainTime, _transitionTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _overlap_4(_self, _sustainTime, _transitionTime, 2);
  },
  "{ :self :sustainTime :transitionTime |\n\t\tself.overlap(sustainTime, transitionTime, 2)\n\t}",
);

sl.addMethod(
  "Clock",
  "Texture",
  "collectTexture",
  ["self", "aCollection", "aBlock:/1", "delay"],
  function (_self, _aCollection, _aBlock_1, _delay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aCollection, _aBlock_1, _delay";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _end = _size_1(_aCollection);
    /* Statements */
    return _recurseEvery_4(
      _self,
      function (_currentTime, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _currentTime, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _playAt_2(
          _aBlock_1(_at_2(_aCollection, _index)),
          _plusSign_2(_currentTime, 0.5),
        );
        return _if_3(_equalsSign_2(_index, _end), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return null;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _plusSign_2(_index, 1);
        });
      },
      1,
      _value_1(_delay),
    );
  },
  "{ :self :aCollection :aBlock:/1 :delay |\n\t\tlet end = aCollection.size;\n\t\tself.recurseEvery({ :currentTime :index |\n\t\t\taBlock(aCollection[index]).playAt(currentTime + 0.5); /* fixed delay... */\n\t\t\t(index = end).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tindex + 1\n\t\t\t}\n\t\t}, 1, delay.value)\n\t}",
);

sl.addMethod(
  "Clock",
  "Texture",
  "playEvery",
  ["self", "aBlock:/1", "delay"],
  function (_self, _aBlock_1, _delay) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _delay";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _repeatEvery_3(_self, function (_currentTime, _nextDelay) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _currentTime, _nextDelay";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _playAt_2(
        _cull_2(_aBlock_1, _nextDelay),
        _plusSign_2(_currentTime, 0.5),
      );
    }, _delay);
  },
  "{ :self :aBlock:/1 :delay |\n\t\tself.repeatEvery({ :currentTime :nextDelay |\n\t\t\taBlock:/1.cull(nextDelay).playAt(currentTime + 0.5) /* fixed delay... */\n\t\t}, delay)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Texture",
  "collectTexture",
  ["self", "aBlock:/1", "delay"],
  function (_self, _aBlock_1, _delay) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _delay";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collectTexture_4(_clock_1(_system), _self, _aBlock_1, _delay);
  },
  "{ :self :aBlock:/1 :delay |\n\t\tsystem.clock.collectTexture(\n\t\t\tself,\n\t\t\taBlock:/1,\n\t\t\tdelay\n\t\t)\n\t}",
);
