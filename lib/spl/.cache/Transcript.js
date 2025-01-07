sl.addType(
  false,
  "TranscriptEntry",
  "Transcript",
  ["Object"],
  ["category", "message", "time"],
);

sl.copyTraitToType(
  "Object",
  "TranscriptEntry",
);

sl.addMethod(
  "String",
  "Transcript",
  "TranscriptEntry",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newTranscriptEntry_0(),
      _self,
      _message,
      _unixTimeInMilliseconds_1(_system),
    );
  },
  "{ :self :message |\n\t\tnewTranscriptEntry().initializeSlots(self, message, system.unixTimeInMilliseconds)\n\t}",
);

sl.addType(
  false,
  "Transcript",
  "Transcript",
  ["Object"],
  ["entries"],
);

sl.copyTraitToType(
  "Object",
  "Transcript",
);

sl.addMethod(
  "Transcript",
  "Transcript",
  "addError",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _add_2(_entries_1(_self), _TranscriptEntry_2("error", _message));
    return _consoleError_2(_system, _message);
  },
  "{ :self :message |\n\t\tself.entries.add(TranscriptEntry('error', message));\n\t\tsystem.consoleError(message)\n\t}",
);

sl.addMethod(
  "Transcript",
  "Transcript",
  "addNotification",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _add_2(_entries_1(_self), _TranscriptEntry_2("notification", _message));
    return _consoleNotification_2(_system, _message);
  },
  "{ :self :message |\n\t\tself.entries.add(TranscriptEntry('notification', message));\n\t\tsystem.consoleNotification(message)\n\t}",
);

sl.addMethod(
  "Transcript",
  "Transcript",
  "addWarning",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _add_2(_entries_1(_self), _TranscriptEntry_2("warning", _message));
    return _consoleWarning_2(_system, _message);
  },
  "{ :self :message |\n\t\tself.entries.add(TranscriptEntry('warning', message));\n\t\tsystem.consoleWarning(message)\n\t}",
);

sl.addMethod(
  "Transcript",
  "Transcript",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _consoleClear_1(_system);
    return _removeAll_1(_entries_1(_self));
  },
  "{ :self |\n\t\tsystem.consoleClear;\n\t\tself.entries.removeAll\n\t}",
);

sl.addMethod(
  "Transcript",
  "Transcript",
  "errorMessages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _messages_2(_self, "error");
  },
  "{ :self |\n\t\tself.messages('error')\n\t}",
);

sl.addMethod(
  "Transcript",
  "Transcript",
  "messages",
  ["self", "category"],
  function (_self, _category) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _category";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _selectThenCollect_3(_entries_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_category_1(_each), _category);
    }, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _message_1(_each);
    });
  },
  "{ :self :category |\n\t\tself.entries.selectThenCollect { :each |\n\t\t\teach.category = category\n\t\t} { :each |\n\t\t\teach.message\n\t\t}\n\t}",
);

sl.addMethod(
  "Transcript",
  "Transcript",
  "notificationMessages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _messages_2(_self, "notification");
  },
  "{ :self |\n\t\tself.messages('notification')\n\t}",
);

sl.addMethod(
  "Transcript",
  "Transcript",
  "String",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _unlines_1(_collect_2(_entries_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_category_1(_each), "notification"),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _message_1(_each);
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(
            _plusSignPlusSign_2(_category_1(_each), ": "),
            _message_1(_each),
          );
        },
      );
    }));
  },
  "{ :self |\n\t\tself.entries.collect { :each |\n\t\t\t(each.category = 'notification').if {\n\t\t\t\teach.message\n\t\t\t} {\n\t\t\t\teach.category ++ ': ' ++ each.message\n\t\t\t}\n\t\t}.unlines\n\t}",
);

sl.addMethod(
  "Transcript",
  "Transcript",
  "warningMessages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _messages_2(_self, "warning");
  },
  "{ :self |\n\t\tself.messages('warning')\n\t}",
);

sl.addMethod(
  "Void",
  "Transcript",
  "Transcript",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTranscript_0(), []);
  },
  "{\n\t\tnewTranscript().initializeSlots([])\n\t}",
);

sl.addMethod(
  "System",
  "Transcript",
  "postLine",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _addNotification_2(_transcript_1(_self), _aString);
  },
  "{ :self :aString |\n\t\tself.transcript.addNotification(aString)\n\t}",
);

sl.addMethod(
  "System",
  "Transcript",
  "transcript",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "transcript", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Transcript_0();
    });
  },
  "{ :self |\n\t\tself.cached('transcript') {\n\t\t\tTranscript()\n\t\t}\n\t}",
);
