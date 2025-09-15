sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "currentWorkingDirectory",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.currentWorkingDirectory();
  }, ["unused"]),
  "{ :unused | <primitive: return host.currentWorkingDirectory();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "currentWorkingDirectory",
  ["unused", "aPath"],
  sl.annotateFunction(function (_unused, _aPath) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _aPath";
      throw new Error(errorMessage);
    } /* Primitive */
    host.changeCurrentWorkingDirectory(_aPath);
    /* Statements */
    return _aPath;
  }, ["unused", "aPath"]),
  "{ :unused :aPath | <primitive: host.changeCurrentWorkingDirectory(_aPath);>\naPath }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "environmentVariable",
  ["unused", "name"],
  sl.annotateFunction(function (_unused, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.environmentVariableGet(_name);
  }, ["unused", "name"]),
  "{ :unused :name | <primitive: return host.environmentVariableGet(_name);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "environmentVariable",
  ["unused", "name", "aString"],
  sl.annotateFunction(function (_unused, _name, _aString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _unused, _name, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.environmentVariableSet(_name, _aString);
  }, ["unused", "name", "aString"]),
  "{ :unused :name :aString | <primitive: return host.environmentVariableSet(_name, _aString);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "environmentVariables",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.environmentVariables();
  }, ["unused"]),
  "{ :unused | <primitive: return host.environmentVariables();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "exit",
  ["unused", "exitCode"],
  sl.annotateFunction(function (_unused, _exitCode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _exitCode";
      throw new Error(errorMessage);
    } /* Primitive */
    host.exit(_exitCode);
  }, ["unused", "exitCode"]),
  "{ :unused :exitCode | <primitive: host.exit(_exitCode);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "hostName",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.hostName();
  }, ["unused"]),
  "{ :unused | <primitive: return host.hostName();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "instructionSetArchitecture",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.instructionSetArchitecture();
  }, ["unused"]),
  "{ :unused | <primitive: return host.instructionSetArchitecture();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "operatingSystem",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.operatingSystem();
  }, ["unused"]),
  "{ :unused | <primitive: return host.operatingSystem();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "primitiveSystemCommand",
  ["unused", "commandName", "arguments"],
  sl.annotateFunction(function (_unused, _commandName, _arguments) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _unused, _commandName, _arguments";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.systemCommand(_commandName, _arguments);
  }, ["unused", "commandName", "arguments"]),
  "{ :unused :commandName :arguments | <primitive: return host.systemCommand(_commandName, _arguments);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "scriptArguments",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return Deno.args;
  }, ["unused"]),
  "{ :unused | <primitive: return Deno.args;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SubProcess",
  "systemCommand",
  ["self", "commandName", "arguments"],
  sl.annotateFunction(function (_self, _commandName, _arguments) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _commandName, _arguments";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isString_1(_commandName),
      sl.annotateFunction(function () {
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
      }, []),
    );
    _ifFalse_2(
      _isList_1(_arguments),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("systemCommand: invalid arguments", _arguements),
        );
      }, []),
    );
    return _primitiveSystemCommand_3(_self, _commandName, _arguments);
  }, ["self", "commandName", "arguments"]),
  "{ :self :commandName :arguments | ifFalse(isString(commandName), { error(self,++('systemCommand: invalid command name', commandName)) }); ifFalse(isList(arguments), { error(self,++('systemCommand: invalid arguments', arguements)) }); primitiveSystemCommand(self,commandName, arguments) }",
);
