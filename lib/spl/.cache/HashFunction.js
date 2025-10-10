sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "HashFunction",
  "basicDigest",
  ["self", "algorithm"],
  sl.annotateFunction(function (_self, _algorithm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _algorithm";
      throw new Error(errorMessage);
    } /* Primitive */
    return crypto.subtle.digest(_algorithm, _self);
  }, ["self", "algorithm"]),
  "{ :self :algorithm |\n\t\t<primitive: return crypto.subtle.digest(_algorithm, _self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "HashFunction",
  "digest",
  ["self", "algorithm"],
  sl.annotateFunction(function (_self, _algorithm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _algorithm";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(_basicDigest_2(_self, _algorithm), _asByteArray_1);
  }, ["self", "algorithm"]),
  "{ :self :algorithm |\n\t\tself.basicDigest(algorithm).then(asByteArray:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
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
  "{ :self :seed |\n\t\tself.murmurHashGenerator(seed).value\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
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
  "{ :self |\n\t\tself.hash(2166136261)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
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
    function rotateLeft(n, r) {
      return (n << r) | (n >>> (32 - r));
    }
    function mix(h, k) {
      const c1 = 0xcc9e2d51; /* 0xcc9e2d51 === 3432918353 */
      const c2 = 0x1b873593; /* 0x1b873593 ===  461845907 */
      const r1 = 15; /* 32 - 15 === 17 */
      const r2 = 13; /* 32 - 13 === 19 */
      k = Math.imul(k, c1);
      k = rotateLeft(k, r1);
      k = Math.imul(k, c2);
      const m = 5;
      const n = 0xe6546b64; /* 0xe6546b64 === 3864292196 */
      h ^= k;
      h = rotateLeft(h, r2);
      h = Math.imul(h, m) + n;
      return h;
    }
    function fmix(h) {
      h ^= h >>> 16;
      h = Math.imul(h, 0x85ebca6b); /* 0x85ebca6b === 2246822507 */
      h ^= h >>> 13;
      h = Math.imul(h, 0xc2b2ae35); /* 0xc2b2ae35 === 3266489909 */
      h ^= h >>> 16;
      return h;
    }
    const key = _self;
    const len = key.length;
    for (let i = 0; i < len; i++) {
      h = mix(h, key[i]) | 0;
    }
    h ^= len & 0xffffffff; /* 0xffffffff === 4294967295 */
    return function () {
      h = fmix(h) >>> 0;
      return h;
    };
  }, ["self", "seed"]),
  "{ :self :seed |\n\t\t<primitive:\n\t\tlet h = _seed >>> 0;\n\t\tfunction rotateLeft(n, r) {\n\t\t\treturn (n << r) | (n >>> (32 - r));\n\t\t}\n\t\tfunction mix (h, k) {\n\t\t\tconst c1 = 0xcc9e2d51; /* 0xcc9e2d51 === 3432918353 */\n\t\t\tconst c2 = 0x1b873593; /* 0x1b873593 ===  461845907 */\n\t\t\tconst r1 = 15; /* 32 - 15 === 17 */\n\t\t\tconst r2 = 13; /* 32 - 13 === 19 */\n\t\t\tk = Math.imul(k, c1);\n\t\t\tk = rotateLeft(k, r1);\n\t\t\tk = Math.imul(k, c2);\n\t\t\tconst m = 5;\n\t\t\tconst n = 0xe6546b64; /* 0xe6546b64 === 3864292196 */\n\t\t\th ^= k;\n\t\t\th = rotateLeft(h, r2);\n\t\t\th = Math.imul(h, m) + n;\n\t\t\treturn h;\n\t\t}\n\t\tfunction fmix (h) {\n\t\t\th ^= h >>> 16;\n\t\t\th = Math.imul(h, 0x85ebca6b); /* 0x85ebca6b === 2246822507 */\n\t\t\th ^= h >>> 13;\n\t\t\th = Math.imul(h, 0xc2b2ae35); /* 0xc2b2ae35 === 3266489909 */\n\t\t\th ^= h >>> 16;\n\t\t\treturn h;\n\t\t};\n\t\tconst key = _self;\n\t\tconst len = key.length;\n\t\tfor (let i = 0; i < len; i++) {\n\t\t\th = mix(h, key[i]) | 0;\n\t\t}\n\t\th ^= len & 0xffffffff; /* 0xffffffff === 4294967295 */\n\t\treturn function () {\n\t\t\th = fmix(h) >>> 0;\n\t\t\treturn h;\n\t\t};\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HashFunction",
  "digest",
  ["self", "algorithm"],
  sl.annotateFunction(function (_self, _algorithm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _algorithm";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _digest_2(_utf8ByteArray_1(_self), _algorithm),
      _base16Encode_1,
    );
  }, ["self", "algorithm"]),
  "{ :self :algorithm |\n\t\tself.utf8ByteArray.digest(algorithm).then(base16Encode:/1)\n\t}",
);

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
  "{ :self :seed |\n\t\tself.murmurHashGenerator(seed).value\n\t}",
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
  "{ :self |\n\t\tself.hash(2166136261)\n\t}",
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
    } /* Statements */
    return _murmurHashGenerator_2(_utf8ByteArray_1(_self), _seed);
  }, ["self", "seed"]),
  "{ :self :seed |\n\t\tself.utf8ByteArray.murmurHashGenerator(seed)\n\t}",
);
