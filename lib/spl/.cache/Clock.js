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
  "{ :self |\n\t\tself.initializeSlots(PriorityQueue(), nil, nil)\n\t}",
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
            _isNotNil_1(_inputValue),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isNotNil_1(_nextDelay);
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
  "{ :self :aBlock:/2 :anObject :delay |\n\t\tself.scheduleInjecting(0, anObject) { :currentTime :inputValue |\n\t\t\tlet nextDelay = delay.value;\n\t\t\t(\n\t\t\t\tinputValue.isNotNil & {\n\t\t\t\t\tnextDelay.isNotNil\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\t[nextDelay, aBlock(currentTime, inputValue)]\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.priorityQueue.removeAllAndShrink;\n\t\tself.existingDelay.ifNotNil {\n\t\t\tself.existingDelay.cancel\n\t\t};\n\t\tself.nextEntryTime := nil;\n\t\tself.existingDelay := nil\n\t}",
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
  "{ :self :aBlock:/2 :delay |\n\t\tself.schedule(0) { :currentTime |\n\t\t\tlet nextDelay = delay.value;\n\t\t\tnextDelay.ifNotNil {\n\t\t\t\taBlock(currentTime, nextDelay);\n\t\t\t\tnextDelay\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :deltaTime :aBlock:/1 |\n\t\tlet currentTime = system.sessionTime;\n\t\tlet scheduledTime = currentTime + deltaTime;\n\t\tlet wakeupTime = self.nextEntryTime;\n\t\tself.priorityQueue.pushWithPriority(aBlock:/1, scheduledTime);\n\t\t(wakeupTime = nil | {\n\t\t\tscheduledTime < wakeupTime\n\t\t}).ifTrue {\n\t\t\tself.nextEntryTime := scheduledTime;\n\t\t\tself.existingDelay.ifNotNil {\n\t\t\t\tself.existingDelay.cancel\n\t\t\t};\n\t\t\tself.existingDelay := {\n\t\t\t\tself.wakeup(scheduledTime)\n\t\t\t}.valueAfter(deltaTime)\n\t\t}\n\t}",
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
  "{ :self :deltaTime :anObject :aBlock:/2 |\n\t\tself.schedule(deltaTime) { :currentTime |\n\t\t\tlet reply = aBlock(currentTime, anObject);\n\t\t\treply.ifNotNil {\n\t\t\t\tself.scheduleInjecting(reply[1], reply[2], aBlock:/2)\n\t\t\t};\n\t\t\tnil\n\t\t}\n\t}",
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
          _exclamationMarkEqualsSign_2(_frontOfQueueTime, null),
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
  "{ :self :scheduledTime |\n\t\tlet currentTime = system.sessionTime;\n\t\tlet queue = self.priorityQueue;\n\t\tlet frontOfQueueTime = self.nextEntryTime;\n\t\t{\n\t\t\tfrontOfQueueTime != nil & {\n\t\t\t\tfrontOfQueueTime <= currentTime\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tlet activityBlock:/1 = queue.pop;\n\t\t\tlet rescheduleAfter = activityBlock(scheduledTime);\n\t\t\trescheduleAfter.ifNotNil {\n\t\t\t\tself.priorityQueue.pushWithPriority(\n\t\t\t\t\tactivityBlock:/1,\n\t\t\t\t\tscheduledTime + rescheduleAfter\n\t\t\t\t)\n\t\t\t};\n\t\t\tfrontOfQueueTime := queue.peekPriority\n\t\t};\n\t\tself.nextEntryTime := frontOfQueueTime;\n\t\tfrontOfQueueTime.ifNotNil {\n\t\t\tself.existingDelay.ifNotNil {\n\t\t\t\tself.existingDelay.cancel\n\t\t\t};\n\t\t\tself.existingDelay := {\n\t\t\t\tself.wakeup(frontOfQueueTime)\n\t\t\t}.valueAfter(frontOfQueueTime - currentTime)\n\t\t}\n\t}",
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
  "{\n\t\tnewClock().initialize\n\t}",
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
  "{ :self |\n\t\tself.cached('clock') {\n\t\t\tClock()\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tsystem.clock.schedule(self, aBlock:/2)\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\tsystem.clock.scheduleInjecting(self, anObject, aBlock:/2)\n\t}",
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
  "{ :self:/1 |\n\t\tsystem.clock.schedule(0, self:/1)\n\t}",
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
  "{ :self:/2 :anObject |\n\t\tsystem.clock.scheduleInjecting(0, anObject, self:/2)\n\t}",
);
