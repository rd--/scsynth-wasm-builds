// parse.ts
var SECTION_REGEXP = /^\[(?<name>.*\S.*)]$/;
var KEY_VALUE_REGEXP = /^(?<key>.*?)\s*=\s*(?<value>.*?)$/;
function isComment(input) {
  return input.startsWith("#") || input.startsWith(";") || input.startsWith("//");
}
function isSection(input, lineNumber) {
  if (input.startsWith("[")) {
    if (input.endsWith("]")) {
      return true;
    }
    throw new SyntaxError(`Unexpected end of INI section at line ${lineNumber}`);
  }
  return false;
}
function* readTextLines(text) {
  let line = "";
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    switch (char) {
      case "\n":
        yield line;
        line = "";
        break;
      case "\r":
        yield line;
        line = "";
        if (text[i + 1] === "\n") i += 1;
        break;
      default:
        line += char;
        break;
    }
  }
  yield line;
}
var QUOTED_VALUE_REGEXP = /^"(?<value>.*)"$/;
function parseValue(_key, value) {
  if (value === "null") return null;
  if (value === "true") return true;
  if (value === "false") return false;
  const match = value.match(QUOTED_VALUE_REGEXP);
  if (match) return match.groups?.value;
  if (!isNaN(+value)) return +value;
  return value;
}
function parse(text, options = {}) {
  if (typeof text !== "string") {
    throw new SyntaxError(`Unexpected token ${text} in INI at line 0`);
  }
  const root = {};
  let object = root;
  let sectionName;
  let lineNumber = 0;
  for (let line of readTextLines(text)) {
    line = line.trim();
    lineNumber += 1;
    if (line === "") continue;
    if (isComment(line)) continue;
    if (isSection(line, lineNumber)) {
      sectionName = SECTION_REGEXP.exec(line)?.groups?.name;
      if (!sectionName) {
        throw new SyntaxError(`Unexpected empty section name at line ${lineNumber}`);
      }
      object = {};
      Object.defineProperty(root, sectionName, {
        value: object,
        writable: true,
        enumerable: true,
        configurable: true
      });
      continue;
    }
    const groups = KEY_VALUE_REGEXP.exec(line)?.groups;
    if (!groups) {
      throw new SyntaxError(`Unexpected token ${line[0]} in INI at line ${lineNumber}`);
    }
    const { key, value } = groups;
    if (!key.length) {
      throw new SyntaxError(`Unexpected empty key name at line ${lineNumber}`);
    }
    const parsedValue = parseValue(key, value);
    let val = parsedValue;
    if (options.reviver) val = options.reviver(key, parsedValue, sectionName);
    Object.defineProperty(object, key, {
      value: val,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  return root;
}

// stringify.ts
function isPlainObject(object) {
  return Object.prototype.toString.call(object) === "[object Object]";
}
function sort([_a, valA], [_b, valB]) {
  if (isPlainObject(valA)) return 1;
  if (isPlainObject(valB)) return -1;
  return 0;
}
function defaultReplacer(_key, value, _section) {
  return `${value}`;
}
function stringify(object, options = {}) {
  const { replacer = defaultReplacer, pretty = false, lineBreak = "\n" } = options;
  const assignment = pretty ? " = " : "=";
  const entries = Object.entries(object).sort(sort);
  const lines = [];
  for (const [key, value] of entries) {
    if (isPlainObject(value)) {
      const sectionName = key;
      lines.push(`[${sectionName}]`);
      for (const [key2, val] of Object.entries(value)) {
        const line = `${key2}${assignment}${replacer(key2, val, sectionName)}`;
        lines.push(line);
      }
    } else {
      const line = `${key}${assignment}${replacer(key, value)}`;
      lines.push(line);
    }
  }
  return lines.join(lineBreak);
}
export {
  parse,
  stringify
};
