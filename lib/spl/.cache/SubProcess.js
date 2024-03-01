sl.addMethod(
  "System",
  "SubProcess",
  "architecture",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.getArch();
  },
  "{ :self |\n\t\t<primitive: return host.getArch();>\n\t}",
);

sl.addMethod(
  "System",
  "SubProcess",
  "currentWorkingDirectory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.getCwd();
  },
  "{ :self |\n\t\t<primitive: return host.getCwd();>\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.getEnv(_name);
  },
  "{ :self :name |\n\t\t<primitive: return host.getEnv(_name);>\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.getEnviron();
  },
  "{ :self |\n\t\t<primitive: return host.getEnviron();>\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.getHostname();
  },
  "{ :self |\n\t\t<primitive: return host.getHostname();>\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.getOs;
  },
  "{ :self |\n\t\t<primitive: return host.getOs;>\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.systemCommand(_commandName, _arguments);
  },
  "{ :self :commandName :arguments |\n\t\t<primitive: return host.systemCommand(_commandName, _arguments);>\n\t}",
);
