sl.extendTypeOrTraitWithMethod(
  "String",
  "HashFunction",
  "hash",
  ["self", "seed"],
  sl.annotateFunction(function (_self, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _seed";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_murmurHashGenerator_2(_self, _seed));
  }, ["self", "seed"]),
  "{ :self :seed | value(murmurHashGenerator(self,seed)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HashFunction",
  "hash",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hash_2(_self, 2166136261);
  }, ["self"]),
  "{ :self | hash(self,2166136261) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HashFunction",
  "murmurHashGenerator",
  ["self", "seed"],
  sl.annotateFunction(function (_self, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _seed";
      throw new Error(errorMessage);
    } /* Primitive */
    let h = _seed >>> 0;
    const key = _self;
    const len = key.length;
    const c1 = 0xcc9e2d51; /* 0xcc9e2d51 === 3432918353 */
    const c2 = 0x1b873593; /* 0x1b873593 ===  461845907 */
    const r1 = 15;
    const r2 = 13;
    const m = 5;
    const n = 0xe6546b64; /* 0xe6546b64 === 3864292196 */
    for (let i = 0; i < len; i++) {
      let k = key.charCodeAt(i);
      k = Math.imul(k, c1);
      k = k << r1 | k >>> 17;
      k = Math.imul(k, c2);
      h ^= k;
      h = h << r2 | h >>> 19;
      h = Math.imul(h, m) + n | 0;
    }
    h ^= len;
    return function () {
      h ^= h >>> 16;
      h = Math.imul(h, 0x85ebca6b); /* 0x85ebca6b === 2246822507 */
      h ^= h >>> 13;
      h = Math.imul(h, 0xc2b2ae35); /* 0xc2b2ae35 === 3266489909 */
      h ^= h >>> 16;
      return h >>> 0;
    };
  }, ["self", "seed"]),
  "{ :self :seed | <primitive: let h = _seed >>> 0;\n\t\tconst key = _self;\n\t\tconst len = key.length;\n\t\tconst c1 = 0xcc9e2d51; /* 0xcc9e2d51 === 3432918353 */\n\t\tconst c2 = 0x1b873593; /* 0x1b873593 ===  461845907 */\n\t\tconst r1 = 15;\n\t\tconst r2 = 13;\n\t\tconst m = 5;\n\t\tconst n = 0xe6546b64; /* 0xe6546b64 === 3864292196 */\n\t\tfor (let i = 0; i < len; i++) {\n\t\t\tlet k = key.charCodeAt(i);\n\t\t\tk = Math.imul(k, c1);\n\t\t\tk = k << r1 | k >>> 17;\n\t\t\tk = Math.imul(k, c2);\n\t\t\th ^= k;\n\t\t\th = h << r2 | h >>> 19;\n\t\t\th = Math.imul(h, m) + n | 0;\n\t\t}\n\t\th ^= len;\n\t\treturn function () {\n\t\t\th ^= h >>> 16;\n\t\t\th = Math.imul(h, 0x85ebca6b); /* 0x85ebca6b === 2246822507 */\n\t\t\th ^= h >>> 13;\n\t\t\th = Math.imul(h, 0xc2b2ae35); /* 0xc2b2ae35 === 3266489909 */\n\t\t\th ^= h >>> 16;\n\t\t\treturn h >>> 0;\n\t\t};>\n }",
);
