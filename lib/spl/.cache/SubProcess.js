sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "currentWorkingDirectory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.currentWorkingDirectory();
  },
  "{ :self | <primitive: return host.currentWorkingDirectory();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "environmentVariable",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.environmentVariableGet(_name);
  },
  "{ :self :name | <primitive: return host.environmentVariableGet(_name);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "environmentVariable",
  ["self", "name", "aString"],
  function (_self, _name, _aString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.environmentVariableSet(_name, _aString);
  },
  "{ :self :name :aString | <primitive: return host.environmentVariableSet(_name, _aString);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "environmentVariables",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.environmentVariables();
  },
  "{ :self | <primitive: return host.environmentVariables();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "exit",
  ["self", "exitCode"],
  function (_self, _exitCode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _exitCode";
      throw new Error(errorMessage);
    } /* Primitive */
    host.exit(_exitCode);
  },
  "{ :self :exitCode | <primitive: host.exit(_exitCode);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "hostName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.hostName();
  },
  "{ :self | <primitive: return host.hostName();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "instructionSetArchitecture",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.instructionSetArchitecture();
  },
  "{ :self | <primitive: return host.instructionSetArchitecture();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "operatingSystem",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.operatingSystem();
  },
  "{ :self | <primitive: return host.operatingSystem();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "primitiveSystemCommand",
  ["self", "commandName", "arguments"],
  function (_self, _commandName, _arguments) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _commandName, _arguments";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.systemCommand(_commandName, _arguments);
  },
  "{ :self :commandName :arguments | <primitive: return host.systemCommand(_commandName, _arguments);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "scriptArguments",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Deno.args;
  },
  "{ :self | <primitive: return Deno.args;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "systemCommand",
  ["self", "commandName", "arguments"],
  function (_self, _commandName, _arguments) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _commandName, _arguments";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(_isString_1(_commandName), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("systemCommand: invalid arguments", _arguements),
      );
    });
    return _primitiveSystemCommand_3(_self, _commandName, _arguments);
  },
  "{ :self :commandName :arguments | ifFalse(isString(commandName), { error(self,++('systemCommand: invalid command name', commandName)) }); ifFalse(isList(arguments), { error(self,++('systemCommand: invalid arguments', arguements)) }); primitiveSystemCommand(self,commandName, arguments) }",
);
