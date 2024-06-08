sl.addType(
  false,
  "InfinitePlane",
  "Line",
  ["Object"],
  ["u", "v", "w"],
);

sl.copyTraitToType(
  "Object",
  "InfinitePlane",
);

sl.addType(
  false,
  "HalfLine",
  "Line",
  ["Object"],
  ["u", "v"],
);

sl.copyTraitToType(
  "Object",
  "HalfLine",
);
