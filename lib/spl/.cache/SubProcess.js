sl.addMethod(
  "System",
  "SubProcess",
  "currentWorkingDirectory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return host.currentWorkingDirectory();
  },
  "{ :self |\n\t\t<primitive: return host.currentWorkingDirectory();>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "environmentVariable",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return host.environmentVariableGet(_name);
  },
  "{ :self :name |\n\t\t<primitive: return host.environmentVariableGet(_name);>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "environmentVariable",
  ["self", "name", "aString"],
  function (_self, _name, _aString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return host.environmentVariableSet(_name, _aString);
  },
  "{ :self :name :aString |\n\t\t<primitive: return host.environmentVariableSet(_name, _aString);>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "environmentVariables",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return host.environmentVariables();
  },
  "{ :self |\n\t\t<primitive: return host.environmentVariables();>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "exit",
  ["self", "exitCode"],
  function (_self, _exitCode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _exitCode";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    host.exit(_exitCode);
  },
  "{ :self :exitCode |\n\t\t<primitive: host.exit(_exitCode);>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "hostName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return host.hostName();
  },
  "{ :self |\n\t\t<primitive: return host.hostName();>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "instructionSetArchitecture",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return host.instructionSetArchitecture();
  },
  "{ :self |\n\t\t<primitive: return host.instructionSetArchitecture();>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "operatingSystem",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return host.operatingSystem();
  },
  "{ :self |\n\t\t<primitive: return host.operatingSystem();>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "primitiveSystemCommand",
  ["self", "commandName", "arguments"],
  function (_self, _commandName, _arguments) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _commandName, _arguments";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return host.systemCommand(_commandName, _arguments);
  },
  "{ :self :commandName :arguments |\n\t\t<primitive: return host.systemCommand(_commandName, _arguments);>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "scriptArguments",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Deno.args;
  },
  "{ :self |\n\t\t<primitive: return Deno.args;>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "systemCommand",
  ["self", "commandName", "arguments"],
  function (_self, _commandName, _arguments) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _commandName, _arguments";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(_isString_1(_commandName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2(
          "systemCommand: invalid command name",
          _commandName,
        ),
      );
    });
    _ifFalse_2(_isList_1(_arguments), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("systemCommand: invalid arguments", _arguements),
      );
    });
    return _primitiveSystemCommand_3(_self, _commandName, _arguments);
  },
  "{ :self :commandName :arguments |\n\t\tcommandName.isString.ifFalse {\n\t\t\tself.error('systemCommand: invalid command name' ++ commandName)\n\t\t};\n\t\targuments.isList.ifFalse {\n\t\t\tself.error('systemCommand: invalid arguments' ++ arguements)\n\t\t};\n\t\tself.primitiveSystemCommand(commandName, arguments)\n\t}",
);
