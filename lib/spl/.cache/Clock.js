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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_self, _PriorityQueue_0(), null, null);
  }, ["self"]),
  "{ :self | initializeSlots(self,PriorityQueue(), nil, nil) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "recurseEvery",
  ["self", "aBlock:/2", "anObject", "delay"],
  sl.annotateFunction(function (_self, _aBlock_2, _anObject, _delay) {
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
      sl.annotateFunction(function (_currentTime, _inputValue) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _currentTime, _inputValue";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextDelay = _value_1(_delay);
        /* Statements */
        return _ifTrue_2(
          _ampersand_2(
            _notNil_1(_inputValue),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _notNil_1(_nextDelay);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_nextDelay, _aBlock_2(_currentTime, _inputValue)];
          }, []),
        );
      }, ["currentTime", "inputValue"]),
    );
  }, ["self", "aBlock:/2", "anObject", "delay"]),
  "{ :self :aBlock:/2 :anObject :delay | scheduleInjecting(self, 0, anObject, { :currentTime :inputValue | let nextDelay = value(delay); ifTrue((&(notNil(inputValue), { notNil(nextDelay) })), { [nextDelay, aBlock(currentTime, inputValue)] }) }) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAllAndShrink_1(_priorityQueue_1(_self));
    _ifNotNil_2(
      _existingDelay_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cancel_1(_existingDelay_1(_self));
      }, []),
    );
    _nextEntryTime_2(_self, null);
    return _existingDelay_2(_self, null);
  }, ["self"]),
  "{ :self | removeAllAndShrink(priorityQueue(self)); ifNotNil(existingDelay(self), { cancel(existingDelay(self)) }); nextEntryTime(self, nil); existingDelay(self, nil) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "repeatEvery",
  ["self", "aBlock:/2", "delay"],
  sl.annotateFunction(function (_self, _aBlock_2, _delay) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(
      _self,
      0,
      sl.annotateFunction(function (_currentTime) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _currentTime";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextDelay = _value_1(_delay);
        /* Statements */
        return _ifNotNil_2(
          _nextDelay,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _aBlock_2(_currentTime, _nextDelay);
            return _nextDelay;
          }, []),
        );
      }, ["currentTime"]),
    );
  }, ["self", "aBlock:/2", "delay"]),
  "{ :self :aBlock:/2 :delay | schedule(self, 0, { :currentTime | let nextDelay = value(delay); ifNotNil(nextDelay, { aBlock(currentTime, nextDelay); nextDelay }) }) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "schedule",
  ["self", "deltaTime", "aBlock:/1"],
  sl.annotateFunction(function (_self, _deltaTime, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _deltaTime, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _currentTime = _sessionTime_1(_system);
    let _scheduledTime = _plusSign_2(_currentTime, _deltaTime);
    let _wakeupTime = _nextEntryTime_1(_self);
    /* Statements */
    _pushWithPriority_3(_priorityQueue_1(_self), _aBlock_1, _scheduledTime);
    return _ifTrue_2(
      _verticalLine_2(
        _equalsSign_2(_wakeupTime, null),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_scheduledTime, _wakeupTime);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _nextEntryTime_2(_self, _scheduledTime);
        _ifNotNil_2(
          _existingDelay_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _cancel_1(_existingDelay_1(_self));
          }, []),
        );
        return _existingDelay_2(
          _self,
          _valueAfter_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _wakeup_2(_self, _scheduledTime);
            }, []),
            _deltaTime,
          ),
        );
      }, []),
    );
  }, ["self", "deltaTime", "aBlock:/1"]),
  "{ :self :deltaTime :aBlock:/1 | let currentTime = sessionTime(system); let scheduledTime = +(currentTime, deltaTime); let wakeupTime = nextEntryTime(self); pushWithPriority(priorityQueue(self),aBlock:/1, scheduledTime); ifTrue((|(=(wakeupTime, nil), { <(scheduledTime, wakeupTime) })), { nextEntryTime(self, scheduledTime); ifNotNil(existingDelay(self), { cancel(existingDelay(self)) }); existingDelay(self, valueAfter({ wakeup(self,scheduledTime) },deltaTime)) }) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "scheduleInjecting",
  ["self", "deltaTime", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _deltaTime, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _deltaTime, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(
      _self,
      _deltaTime,
      sl.annotateFunction(function (_currentTime) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _currentTime";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _reply = _aBlock_2(_currentTime, _anObject);
        /* Statements */
        _ifNotNil_2(
          _reply,
          sl.annotateFunction(function () {
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
          }, []),
        );
        return null;
      }, ["currentTime"]),
    );
  }, ["self", "deltaTime", "anObject", "aBlock:/2"]),
  "{ :self :deltaTime :anObject :aBlock:/2 | schedule(self, deltaTime, { :currentTime | let reply = aBlock(currentTime, anObject); ifNotNil(reply, { scheduleInjecting(self,at(reply, 1), at(reply, 2), aBlock:/2) }); nil }) }",
);

sl.addMethodToExistingType(
  "Clock",
  "Clock",
  "wakeup",
  ["self", "scheduledTime"],
  sl.annotateFunction(function (_self, _scheduledTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scheduledTime";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _currentTime = _sessionTime_1(_system);
    let _queue = _priorityQueue_1(_self);
    let _frontOfQueueTime = _nextEntryTime_1(_self);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _tildeEqualsSign_2(_frontOfQueueTime, null),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_frontOfQueueTime, _currentTime);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _activityBlock_1 = _pop_1(_queue);
        let _rescheduleAfter = _activityBlock_1(_scheduledTime);
        /* Statements */
        _ifNotNil_2(
          _rescheduleAfter,
          sl.annotateFunction(function () {
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
          }, []),
        );
        return _frontOfQueueTime = _peekPriority_1(_queue);
      }, []),
    );
    _nextEntryTime_2(_self, _frontOfQueueTime);
    return _ifNotNil_2(
      _frontOfQueueTime,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifNotNil_2(
          _existingDelay_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _cancel_1(_existingDelay_1(_self));
          }, []),
        );
        return _existingDelay_2(
          _self,
          _valueAfter_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _wakeup_2(_self, _frontOfQueueTime);
            }, []),
            _hyphenMinus_2(_frontOfQueueTime, _currentTime),
          ),
        );
      }, []),
    );
  }, ["self", "scheduledTime"]),
  "{ :self :scheduledTime | let currentTime = sessionTime(system); let queue = priorityQueue(self); let frontOfQueueTime = nextEntryTime(self); whileTrue({ &(~=(frontOfQueueTime, nil), { <=(frontOfQueueTime, currentTime) }) }, { let activityBlock:/1 = pop(queue); let rescheduleAfter = activityBlock(scheduledTime); ifNotNil(rescheduleAfter, { pushWithPriority(priorityQueue(self),activityBlock:/1, +(scheduledTime, rescheduleAfter)) }); frontOfQueueTime := peekPriority(queue) }); nextEntryTime(self, frontOfQueueTime); ifNotNil(frontOfQueueTime, { ifNotNil(existingDelay(self), { cancel(existingDelay(self)) }); existingDelay(self, valueAfter({ wakeup(self,frontOfQueueTime) },-(frontOfQueueTime, currentTime))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Clock",
  "Clock",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_1(_newClock_0());
  }, []),
  "{ initialize(newClock()) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Clock",
  "clock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "clock",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Clock_0();
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'clock', { Clock() }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Clock",
  "schedule",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(_clock_1(_system), _self, _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | schedule(clock(system),self, aBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Clock",
  "scheduleInjecting",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleInjecting_4(_clock_1(_system), _self, _anObject, _aBlock_2);
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | scheduleInjecting(clock(system),self, anObject, aBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "schedule",
  ["self:/1"],
  sl.annotateFunction(function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(_clock_1(_system), 0, _self_1);
  }, ["self:/1"]),
  "{ :self:/1 | schedule(clock(system),0, self:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "scheduleInjecting",
  ["self:/2", "anObject"],
  sl.annotateFunction(function (_self_2, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleInjecting_4(_clock_1(_system), 0, _anObject, _self_2);
  }, ["self:/2", "anObject"]),
  "{ :self:/2 :anObject | scheduleInjecting(clock(system),0, anObject, self:/2) }",
);
