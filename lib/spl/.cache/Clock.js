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
  "scheduleBlock",
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
  "scheduleBlockInjecting",
  ["self", "deltaTime", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _deltaTime, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _deltaTime, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleBlock_3(
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
            return _scheduleBlockInjecting_4(
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
  "{ :self :deltaTime :anObject :aBlock:/2 |\n\t\tself.scheduleBlock(deltaTime) { :currentTime |\n\t\t\tlet reply = aBlock(currentTime, anObject);\n\t\t\treply.ifNotNil {\n\t\t\t\tself.scheduleBlockInjecting(reply[1], reply[2], aBlock:/2)\n\t\t\t};\n\t\t\tnil\n\t\t}\n\t}",
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
  "Block",
  "Clock",
  "recurseEvery",
  ["self:/2", "anObject", "delayTime", "aClock"],
  sl.annotateFunction(function (_self_2, _anObject, _delayTime, _aClock) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self_2, _anObject, _delayTime, _aClock";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleInjecting_4(
      sl.annotateFunction(function (_currentTime, _inputValue) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _currentTime, _inputValue";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextDelay = _value_1(_delayTime);
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
            return [_nextDelay, _self_2(_currentTime, _inputValue)];
          }, []),
        );
      }, ["currentTime", "inputValue"]),
      _anObject,
      0,
      _aClock,
    );
  }, ["self:/2", "anObject", "delayTime", "aClock"]),
  "{ :self:/2 :anObject :delayTime :aClock |\n\t\t{ :currentTime :inputValue |\n\t\t\tlet nextDelay = delayTime.value;\n\t\t\t(\n\t\t\t\tinputValue.isNotNil & {\n\t\t\t\t\tnextDelay.isNotNil\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\t[nextDelay, self(currentTime, inputValue)]\n\t\t\t}\n\t\t}.scheduleInjecting(anObject, 0, aClock)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "recurseEvery",
  ["self:/2", "anObject", "delayTime"],
  sl.annotateFunction(function (_self_2, _anObject, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _anObject, _delayTime";
      throw new Error(errorMessage);
    } /* Statements */
    return _recurseEvery_4(_self_2, _anObject, _delayTime, _clock_1(_system));
  }, ["self:/2", "anObject", "delayTime"]),
  "{ :self:/2 :anObject :delayTime |\n\t\trecurseEvery(self:/2, anObject, delayTime, system.clock)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "repeatEvery",
  ["self:/2", "delayTime", "aClock"],
  sl.annotateFunction(function (_self_2, _delayTime, _aClock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _delayTime, _aClock";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(
      sl.annotateFunction(function (_currentTime) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _currentTime";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextDelay = _value_1(_delayTime);
        /* Statements */
        return _ifNotNil_2(
          _nextDelay,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _self_2(_currentTime, _nextDelay);
            return _nextDelay;
          }, []),
        );
      }, ["currentTime"]),
      0,
      _aClock,
    );
  }, ["self:/2", "delayTime", "aClock"]),
  "{ :self:/2 :delayTime :aClock |\n\t\t{ :currentTime |\n\t\t\tlet nextDelay = delayTime.value;\n\t\t\tnextDelay.ifNotNil {\n\t\t\t\tself(currentTime, nextDelay);\n\t\t\t\tnextDelay\n\t\t\t}\n\t\t}.schedule(0, aClock)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "repeatEvery",
  ["self:/2", "delayTime"],
  sl.annotateFunction(function (_self_2, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _delayTime";
      throw new Error(errorMessage);
    } /* Statements */
    return _repeatEvery_3(_self_2, _delayTime, _clock_1(_system));
  }, ["self:/2", "delayTime"]),
  "{ :self:/2 :delayTime |\n\t\trepeatEvery(self:/2, delayTime, system.clock)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "schedule",
  ["self:/1", "deltaTime", "aClock"],
  sl.annotateFunction(function (_self_1, _deltaTime, _aClock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _deltaTime, _aClock";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleBlock_3(_aClock, _deltaTime, _self_1);
  }, ["self:/1", "deltaTime", "aClock"]),
  "{ :self:/1 :deltaTime :aClock |\n\t\taClock.scheduleBlock(deltaTime, self:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "schedule",
  ["self:/1", "deltaTime"],
  sl.annotateFunction(function (_self_1, _deltaTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _deltaTime";
      throw new Error(errorMessage);
    } /* Statements */
    return _schedule_3(_self_1, _deltaTime, _clock_1(_system));
  }, ["self:/1", "deltaTime"]),
  "{ :self:/1 :deltaTime |\n\t\tschedule(self:/1, deltaTime, system.clock)\n\t}",
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
    return _schedule_3(_self_1, 0, _clock_1(_system));
  }, ["self:/1"]),
  "{ :self:/1 |\n\t\tschedule(self:/1, 0, system.clock)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "scheduleInjecting",
  ["self:/2", "anObject", "deltaTime", "aClock"],
  sl.annotateFunction(function (_self_2, _anObject, _deltaTime, _aClock) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self_2, _anObject, _deltaTime, _aClock";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleBlockInjecting_4(_aClock, _deltaTime, _anObject, _self_2);
  }, ["self:/2", "anObject", "deltaTime", "aClock"]),
  "{ :self:/2 :anObject :deltaTime :aClock |\n\t\taClock.scheduleBlockInjecting(deltaTime, anObject, self:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Clock",
  "scheduleInjecting",
  ["self:/2", "anObject", "deltaTime"],
  sl.annotateFunction(function (_self_2, _anObject, _deltaTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _anObject, _deltaTime";
      throw new Error(errorMessage);
    } /* Statements */
    return _scheduleInjecting_4(
      _self_2,
      _anObject,
      _deltaTime,
      _clock_1(_system),
    );
  }, ["self:/2", "anObject", "deltaTime"]),
  "{ :self:/2 :anObject :deltaTime |\n\t\tscheduleInjecting(self:/2, anObject, deltaTime, system.clock)\n\t}",
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
    return _scheduleInjecting_4(_self_2, _anObject, 0, _clock_1(_system));
  }, ["self:/2", "anObject"]),
  "{ :self:/2 :anObject |\n\t\tscheduleInjecting(self:/2, anObject, 0, system.clock)\n\t}",
);
