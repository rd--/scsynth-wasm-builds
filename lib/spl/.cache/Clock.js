/* {- Requires: PriorityQueue -} */

sl.addType(
  false,
  "Clock",
  "Clock",
  ["Object"],
  ["priorityQueue", "nextEntryTime", "existingDelay"],
);

sl.copyTraitToType(
  "Object",
  "Clock",
);

sl.addMethod(
  "Clock",
  "Clock",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_self, _PriorityQueue_0(), null, null);
  },
  "{ :self |\n\t\tself.initializeSlots(PriorityQueue(), nil, nil)\n\t}",
);

sl.addMethod(
  "Clock",
  "Clock",
  "recurseEvery",
  ["self", "aBlock:/2", "anObject", "delay"],
  function (_self, _aBlock_2, _anObject, _delay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aBlock_2, _anObject, _delay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _scheduleInjecting_4(
      _self,
      0,
      _anObject,
      function (_currentTime, _inputValue) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _currentTime, _inputValue";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _nextDelay = _value_1(_delay);
        /* Statements */
        return _ifTrue_2(
          _and_2(_notNil_1(_inputValue), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _notNil_1(_nextDelay);
          }),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return [_nextDelay, _aBlock_2(_currentTime, _inputValue)];
          },
        );
      },
    );
  },
  "{ :self :aBlock:/2 :anObject :delay |\n\t\tself.scheduleInjecting(0, anObject) { :currentTime :inputValue |\n\t\t\tlet nextDelay = delay.value;\n\t\t\t(\n\t\t\t\tinputValue.notNil & {\n\t\t\t\t\tnextDelay.notNil\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\t[nextDelay, aBlock(currentTime, inputValue)]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Clock",
  "Clock",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _removeAllAndShrink_1(_priorityQueue_1(_self));
    _ifNotNil_2(_existingDelay_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _cancel_1(_existingDelay_1(_self));
    });
    _nextEntryTime_2(_self, null);
    return _existingDelay_2(_self, null);
  },
  "{ :self |\n\t\tself.priorityQueue.removeAllAndShrink;\n\t\tself.existingDelay.ifNotNil {\n\t\t\tself.existingDelay.cancel\n\t\t};\n\t\tself.nextEntryTime := nil;\n\t\tself.existingDelay := nil\n\t}",
);

sl.addMethod(
  "Clock",
  "Clock",
  "repeatEvery",
  ["self", "aBlock:/2", "delay"],
  function (_self, _aBlock_2, _delay) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _delay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _schedule_3(_self, 0, function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentTime";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _nextDelay = _value_1(_delay);
      /* Statements */
      return _ifNotNil_2(_nextDelay, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _aBlock_2(_currentTime, _nextDelay);
        return _nextDelay;
      });
    });
  },
  "{ :self :aBlock:/2 :delay |\n\t\tself.schedule(0) { :currentTime |\n\t\t\tlet nextDelay = delay.value;\n\t\t\tnextDelay.ifNotNil {\n\t\t\t\taBlock(currentTime, nextDelay);\n\t\t\t\tnextDelay\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Clock",
  "Clock",
  "schedule",
  ["self", "deltaTime", "aBlock:/1"],
  function (_self, _deltaTime, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _deltaTime, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _currentTime = _systemTimeInSeconds_1(_system);
    let _scheduledTime = _plus_2(_currentTime, _deltaTime);
    let _wakeupTime = _nextEntryTime_1(_self);
    /* Statements */
    _pushWithPriority_3(_priorityQueue_1(_self), _aBlock_1, _scheduledTime);
    return _ifTrue_2(
      _or_2(_equals_2(_wakeupTime, null), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThan_2(_scheduledTime, _wakeupTime);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _nextEntryTime_2(_self, _scheduledTime);
        _ifNotNil_2(_existingDelay_1(_self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _cancel_1(_existingDelay_1(_self));
        });
        return _existingDelay_2(
          _self,
          _valueAfterMilliseconds_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _wakeup_2(_self, _scheduledTime);
          }, _times_2(_deltaTime, 1000)),
        );
      },
    );
  },
  "{ :self :deltaTime :aBlock:/1 |\n\t\tlet currentTime = system.systemTimeInSeconds;\n\t\tlet scheduledTime = currentTime + deltaTime;\n\t\tlet wakeupTime = self.nextEntryTime;\n\t\tself.priorityQueue.pushWithPriority(aBlock:/1, scheduledTime);\n\t\t(wakeupTime = nil | {\n\t\t\tscheduledTime < wakeupTime\n\t\t}).ifTrue {\n\t\t\tself.nextEntryTime := scheduledTime;\n\t\t\tself.existingDelay.ifNotNil {\n\t\t\t\tself.existingDelay.cancel\n\t\t\t};\n\t\t\tself.existingDelay := {\n\t\t\t\tself.wakeup(scheduledTime)\n\t\t\t}.valueAfterMilliseconds(deltaTime * 1000)\n\t\t}\n\t}",
);

sl.addMethod(
  "Clock",
  "Clock",
  "scheduleInjecting",
  ["self", "deltaTime", "anObject", "aBlock:/2"],
  function (_self, _deltaTime, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _deltaTime, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _schedule_3(_self, _deltaTime, function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentTime";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _reply = _aBlock_2(_currentTime, _anObject);
      /* Statements */
      _ifNotNil_2(_reply, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
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
  "{ :self :deltaTime :anObject :aBlock:/2 |\n\t\tself.schedule(deltaTime) { :currentTime |\n\t\t\tlet reply = aBlock(currentTime, anObject);\n\t\t\treply.ifNotNil {\n\t\t\t\tself.scheduleInjecting(reply[1], reply[2], aBlock:/2)\n\t\t\t};\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethod(
  "Clock",
  "Clock",
  "wakeup",
  ["self", "scheduledTime"],
  function (_self, _scheduledTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scheduledTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _currentTime = _systemTimeInSeconds_1(_system);
    let _queue = _priorityQueue_1(_self);
    let _frontOfQueueTime = _nextEntryTime_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_tildeEquals_2(_frontOfQueueTime, null), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanEquals_2(_frontOfQueueTime, _currentTime);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _activityBlock_1 = _pop_1(_queue);
      let _rescheduleAfter = _activityBlock_1(_scheduledTime);
      /* Statements */
      _ifNotNil_2(_rescheduleAfter, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _pushWithPriority_3(
          _priorityQueue_1(_self),
          _activityBlock_1,
          _plus_2(_scheduledTime, _rescheduleAfter),
        );
      });
      return _frontOfQueueTime = _peekPriority_1(_queue);
    });
    _nextEntryTime_2(_self, _frontOfQueueTime);
    return _ifNotNil_2(_frontOfQueueTime, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _ifNotNil_2(_existingDelay_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _cancel_1(_existingDelay_1(_self));
      });
      return _existingDelay_2(
        _self,
        _valueAfterMilliseconds_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _wakeup_2(_self, _frontOfQueueTime);
        }, _times_2(_minus_2(_frontOfQueueTime, _currentTime), 1000)),
      );
    });
  },
  "{ :self :scheduledTime |\n\t\tlet currentTime = system.systemTimeInSeconds;\n\t\tlet queue = self.priorityQueue;\n\t\tlet frontOfQueueTime = self.nextEntryTime;\n\t\t{\n\t\t\tfrontOfQueueTime ~= nil & {\n\t\t\t\tfrontOfQueueTime <= currentTime\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tlet activityBlock:/1 = queue.pop;\n\t\t\tlet rescheduleAfter = activityBlock(scheduledTime);\n\t\t\trescheduleAfter.ifNotNil {\n\t\t\t\tself.priorityQueue.pushWithPriority(\n\t\t\t\t\tactivityBlock:/1,\n\t\t\t\t\tscheduledTime + rescheduleAfter\n\t\t\t\t)\n\t\t\t};\n\t\t\tfrontOfQueueTime := queue.peekPriority\n\t\t};\n\t\tself.nextEntryTime := frontOfQueueTime;\n\t\tfrontOfQueueTime.ifNotNil {\n\t\t\tself.existingDelay.ifNotNil {\n\t\t\t\tself.existingDelay.cancel\n\t\t\t};\n\t\t\tself.existingDelay := {\n\t\t\t\tself.wakeup(frontOfQueueTime)\n\t\t\t}.valueAfterMilliseconds(frontOfQueueTime - currentTime * 1000)\n\t\t}\n\t}",
);

sl.addMethod(
  "Void",
  "Clock",
  "Clock",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initialize_1(_newClock_0());
  },
  "{\n\t\tnewClock().initialize\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Clock",
  "clock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "clock", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _Clock_0();
    });
  },
  "{ :self |\n\t\tself.cached('clock') {\n\t\t\tClock()\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Clock",
  "schedule",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _schedule_3(_clock_1(_system), _self, _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tsystem.clock.schedule(self, aBlock:/2)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Clock",
  "scheduleInjecting",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _scheduleInjecting_4(_clock_1(_system), _self, _anObject, _aBlock_2);
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tsystem.clock.scheduleInjecting(self, anObject, aBlock:/2)\n\t}",
);

sl.addMethod(
  "Block",
  "Clock",
  "schedule",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _schedule_3(_clock_1(_system), 0, _self_1);
  },
  "{ :self:/1 |\n\t\tsystem.clock.schedule(0, self:/1)\n\t}",
);

sl.addMethod(
  "Block",
  "Clock",
  "scheduleInjecting",
  ["self:/2", "anObject"],
  function (_self_2, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _scheduleInjecting_4(_clock_1(_system), 0, _anObject, _self_2);
  },
  "{ :self:/2 :anObject |\n\t\tsystem.clock.scheduleInjecting(0, anObject, self:/2)\n\t}",
);
