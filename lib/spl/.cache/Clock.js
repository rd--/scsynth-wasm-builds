/*  Requires: PriorityQueue  */

sl.addType(
  false,
  "Clock",
  "Clock",
  ["Object"],
  ["priorityQueue", "nextEntryTime", "existingDelay"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Clock",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_self, _PriorityQueue_0(), null, null);
  },
  "{ :self | initializeSlots(self,PriorityQueue(), nil, nil) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "recurseEvery",
  ["self", "aBlock:/2", "anObject", "delay"],
  function (_self, _aBlock_2, _anObject, _delay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aBlock_2, _anObject, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleInjecting_4(
      _self,
      0,
      _anObject,
      function (_currentTime, _inputValue) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _currentTime, _inputValue";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextDelay = _value_1(_delay);
        /* Statements */
        return _ifTrue_2(
          _ampersand_2(_notNil_1(_inputValue), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _notNil_1(_nextDelay);
          }),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_nextDelay, _aBlock_2(_currentTime, _inputValue)];
          },
        );
      },
    );
  },
  "{ :self :aBlock:/2 :anObject :delay | scheduleInjecting(self, 0, anObject, { :currentTime :inputValue | let nextDelay = value(delay); ifTrue((&(notNil(inputValue), { notNil(nextDelay) })), { [nextDelay, aBlock(currentTime, inputValue)] }) }) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAllAndShrink_1(_priorityQueue_1(_self));
    _ifNotNil_2(_existingDelay_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _cancel_1(_existingDelay_1(_self));
    });
    _nextEntryTime_2(_self, null);
    return _existingDelay_2(_self, null);
  },
  "{ :self | removeAllAndShrink(priorityQueue(self)); ifNotNil(existingDelay(self), { cancel(existingDelay(self)) }); nextEntryTime(self, nil); existingDelay(self, nil) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "repeatEvery",
  ["self", "aBlock:/2", "delay"],
  function (_self, _aBlock_2, _delay) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(_self, 0, function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentTime";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _nextDelay = _value_1(_delay);
      /* Statements */
      return _ifNotNil_2(_nextDelay, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_2(_currentTime, _nextDelay);
        return _nextDelay;
      });
    });
  },
  "{ :self :aBlock:/2 :delay | schedule(self, 0, { :currentTime | let nextDelay = value(delay); ifNotNil(nextDelay, { aBlock(currentTime, nextDelay); nextDelay }) }) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "schedule",
  ["self", "deltaTime", "aBlock:/1"],
  function (_self, _deltaTime, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _deltaTime, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _currentTime = _systemTimeInSeconds_1(_system);
    let _scheduledTime = _plusSign_2(_currentTime, _deltaTime);
    let _wakeupTime = _nextEntryTime_1(_self);
    /* Statements */
    _pushWithPriority_3(_priorityQueue_1(_self), _aBlock_1, _scheduledTime);
    return _ifTrue_2(
      _verticalLine_2(_equalsSign_2(_wakeupTime, null), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_scheduledTime, _wakeupTime);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _nextEntryTime_2(_self, _scheduledTime);
        _ifNotNil_2(_existingDelay_1(_self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _cancel_1(_existingDelay_1(_self));
        });
        return _existingDelay_2(
          _self,
          _valueAfterMilliseconds_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _wakeup_2(_self, _scheduledTime);
          }, _asterisk_2(_deltaTime, 1000)),
        );
      },
    );
  },
  "{ :self :deltaTime :aBlock:/1 | let currentTime = systemTimeInSeconds(system); let scheduledTime = +(currentTime, deltaTime); let wakeupTime = nextEntryTime(self); pushWithPriority(priorityQueue(self),aBlock:/1, scheduledTime); ifTrue((|(=(wakeupTime, nil), { <(scheduledTime, wakeupTime) })), { nextEntryTime(self, scheduledTime); ifNotNil(existingDelay(self), { cancel(existingDelay(self)) }); existingDelay(self, valueAfterMilliseconds({ wakeup(self,scheduledTime) },*(deltaTime, 1000))) }) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "scheduleInjecting",
  ["self", "deltaTime", "anObject", "aBlock:/2"],
  function (_self, _deltaTime, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _deltaTime, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(_self, _deltaTime, function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentTime";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _reply = _aBlock_2(_currentTime, _anObject);
      /* Statements */
      _ifNotNil_2(_reply, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _scheduleInjecting_4(
          _self,
          _at_2(_reply, 1),
          _at_2(_reply, 2),
          _aBlock_2,
        );
      });
      return null;
    });
  },
  "{ :self :deltaTime :anObject :aBlock:/2 | schedule(self, deltaTime, { :currentTime | let reply = aBlock(currentTime, anObject); ifNotNil(reply, { scheduleInjecting(self,at(reply, 1), at(reply, 2), aBlock:/2) }); nil }) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "wakeup",
  ["self", "scheduledTime"],
  function (_self, _scheduledTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scheduledTime";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _currentTime = _systemTimeInSeconds_1(_system);
    let _queue = _priorityQueue_1(_self);
    let _frontOfQueueTime = _nextEntryTime_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _tildeEqualsSign_2(_frontOfQueueTime, null),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_frontOfQueueTime, _currentTime);
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _activityBlock_1 = _pop_1(_queue);
      let _rescheduleAfter = _activityBlock_1(_scheduledTime);
      /* Statements */
      _ifNotNil_2(_rescheduleAfter, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _pushWithPriority_3(
          _priorityQueue_1(_self),
          _activityBlock_1,
          _plusSign_2(_scheduledTime, _rescheduleAfter),
        );
      });
      return _frontOfQueueTime = _peekPriority_1(_queue);
    });
    _nextEntryTime_2(_self, _frontOfQueueTime);
    return _ifNotNil_2(_frontOfQueueTime, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _ifNotNil_2(_existingDelay_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cancel_1(_existingDelay_1(_self));
      });
      return _existingDelay_2(
        _self,
        _valueAfterMilliseconds_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _wakeup_2(_self, _frontOfQueueTime);
        }, _asterisk_2(_hyphenMinus_2(_frontOfQueueTime, _currentTime), 1000)),
      );
    });
  },
  "{ :self :scheduledTime | let currentTime = systemTimeInSeconds(system); let queue = priorityQueue(self); let frontOfQueueTime = nextEntryTime(self); whileTrue({ &(~=(frontOfQueueTime, nil), { <=(frontOfQueueTime, currentTime) }) }, { let activityBlock:/1 = pop(queue); let rescheduleAfter = activityBlock(scheduledTime); ifNotNil(rescheduleAfter, { pushWithPriority(priorityQueue(self),activityBlock:/1, +(scheduledTime, rescheduleAfter)) }); frontOfQueueTime := peekPriority(queue) }); nextEntryTime(self, frontOfQueueTime); ifNotNil(frontOfQueueTime, { ifNotNil(existingDelay(self), { cancel(existingDelay(self)) }); existingDelay(self, valueAfterMilliseconds({ wakeup(self,frontOfQueueTime) },*(-(frontOfQueueTime, currentTime), 1000))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Clock",
  "Clock",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_1(_newClock_0());
  },
  "{ initialize(newClock()) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Clock",
  "clock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "clock", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _Clock_0();
    });
  },
  "{ :self | cached(self, 'clock', { Clock() }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Clock",
  "schedule",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(_clock_1(_system), _self, _aBlock_2);
  },
  "{ :self :aBlock:/2 | schedule(clock(system),self, aBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Clock",
  "scheduleInjecting",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleInjecting_4(_clock_1(_system), _self, _anObject, _aBlock_2);
  },
  "{ :self :anObject :aBlock:/2 | scheduleInjecting(clock(system),self, anObject, aBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "schedule",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(_clock_1(_system), 0, _self_1);
  },
  "{ :self:/1 | schedule(clock(system),0, self:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "scheduleInjecting",
  ["self:/2", "anObject"],
  function (_self_2, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleInjecting_4(_clock_1(_system), 0, _anObject, _self_2);
  },
  "{ :self:/2 :anObject | scheduleInjecting(clock(system),0, anObject, self:/2) }",
);
