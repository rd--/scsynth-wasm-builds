sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "PoissonDiskSampling",
  "poissonDiskSampling",
  ["self", "shape", "radius", "tries"],
  sl.annotateFunction(function (_self, _shape, _radius, _tries) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _shape, _radius, _tries";
      throw new Error(errorMessage);
    } /* Primitive */
    let shape = _shape;
    let radius = _radius;
    let tries = _tries;
    let rng = function () {
      return _nextRandomFloat_1(_self);
    };
    let piDiv3 = Math.PI / 3;
    let neighbourhood = [
      [0, 0],
      [0, -1],
      [-1, 0],
      [1, 0],
      [0, 1],
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
      [0, -2],
      [-2, 0],
      [2, 0],
      [0, 2],
      [-1, -2],
      [1, -2],
      [-2, -1],
      [2, -1],
      [-2, 1],
      [2, 1],
      [-1, 2],
      [1, 2],
    ];
    let neighbourhoodLength = neighbourhood.length;
    let width = shape[0];
    let height = shape[1];
    let maxTries = Math.max(3, Math.ceil(tries));
    let floatPrecisionMitigation = Math.max(
      1,
      Math.max(width, height) / 64 | 0,
    );
    let epsilonRadius = 1e-14 * floatPrecisionMitigation;
    let epsilonAngle = 2e-14;
    let squareRadius = radius * radius;
    let radiusPlusEpsilon = radius + epsilonRadius;
    let cellSize = radius * Math.SQRT1_2;
    let angleIncrement = Math.PI * 2 / maxTries;
    let angleIncrementOnSuccess = piDiv3 + epsilonAngle;
    let triesIncrementOnSuccess = Math.ceil(
      angleIncrementOnSuccess / angleIncrement,
    );
    let processList = [];
    let samplePoints = [];
    let gridShape = [
      Math.ceil(width / cellSize),
      Math.ceil(height / cellSize),
    ];
    let strideX = gridShape[1];
    let grid = new Uint32Array(gridShape[0] * gridShape[1]);
    let addRandomPoint = function () {
      return directAddPoint([
        rng() * width,
        rng() * height,
        rng() * Math.PI * 2,
        0,
      ]);
    };
    let directAddPoint = function (point) {
      let coordsOnly = [point[0], point[1]];
      processList.push(point);
      samplePoints.push(coordsOnly);
      let internalArrayIndex = ((point[0] / cellSize) | 0) * strideX +
        ((point[1] / cellSize) | 0);
      grid[internalArrayIndex] = samplePoints.length;
      return coordsOnly;
    };
    let inNeighbourhood = function (point) {
      let boundX = gridShape[0];
      let boundY = gridShape[1];
      let cellX = point[0] / cellSize | 0;
      let cellY = point[1] / cellSize | 0;
      for (
        let neighbourIndex = 0;
        neighbourIndex < neighbourhoodLength;
        neighbourIndex++
      ) {
        let currentDimensionX = cellX + neighbourhood[neighbourIndex][0];
        let currentDimensionY = cellY + neighbourhood[neighbourIndex][1];
        let internalArrayIndex =
          currentDimensionX < 0 || currentDimensionY < 0 ||
            currentDimensionX >= boundX || currentDimensionY >= boundY
            ? -1
            : currentDimensionX * strideX + currentDimensionY;
        if (internalArrayIndex !== -1 && grid[internalArrayIndex] !== 0) {
          let existingPoint = samplePoints[grid[internalArrayIndex] - 1];
          if (
            Math.pow(point[0] - existingPoint[0], 2) +
                Math.pow(point[1] - existingPoint[1], 2) < squareRadius
          ) {
            return true;
          }
        }
      }
      return false;
    };
    let next = function () {
      while (processList.length > 0) {
        let index = processList.length * rng() | 0;
        let currentPoint = processList[index];
        let currentAngle = currentPoint[2];
        let tries = currentPoint[3];
        if (tries === 0) {
          currentAngle = currentAngle + (rng() - 0.5) * piDiv3 * 4;
        }
        for (; tries < maxTries; tries++) {
          let newPoint = [
            currentPoint[0] + Math.cos(currentAngle) * radiusPlusEpsilon,
            currentPoint[1] + Math.sin(currentAngle) * radiusPlusEpsilon,
            currentAngle,
            0,
          ];
          if (
            (newPoint[0] >= 0 && newPoint[0] < width) &&
            (newPoint[1] >= 0 && newPoint[1] < height) &&
            !inNeighbourhood(newPoint)
          ) {
            currentPoint[2] = currentAngle + angleIncrementOnSuccess +
              rng() * angleIncrement;
            currentPoint[3] = tries + triesIncrementOnSuccess;
            return directAddPoint(newPoint);
          }
          currentAngle = currentAngle + angleIncrement;
        }
        if (tries >= maxTries) {
          const r = processList.pop();
          if (index < processList.length) {
            processList[index] = r;
          }
        }
      }
      return null;
    };
    if (samplePoints.length === 0) {
      addRandomPoint();
    }
    while (next()) {
      continue;
    }
    return samplePoints;
  }, ["self", "shape", "radius", "tries"]),
  "{ :self :shape :radius :tries |\n\t\t<primitive:\n\t\t/* https://github.com/kchapelier/fast-2d-poisson-disk-sampling/ */\n\t\tlet shape = _shape;\n\t\tlet radius = _radius;\n\t\tlet tries = _tries;\n\t\tlet rng = function() {\n\t\t\treturn _nextRandomFloat_1(_self);\n\t\t};\n\t\tlet piDiv3 = Math.PI / 3;\n\t\tlet neighbourhood = [\n\t\t\t[ 0, 0 ],   [ 0, -1 ],  [ -1, 0 ],\n\t\t\t[ 1, 0 ],   [ 0, 1 ],   [ -1, -1 ],\n\t\t\t[ 1, -1 ],  [ -1, 1 ],  [ 1, 1 ],\n\t\t\t[ 0, -2 ],  [ -2, 0 ],  [ 2, 0 ],\n\t\t\t[ 0, 2 ],   [ -1, -2 ], [ 1, -2 ],\n\t\t\t[ -2, -1 ], [ 2, -1 ],  [ -2, 1 ],\n\t\t\t[ 2, 1 ],   [ -1, 2 ],  [ 1, 2 ]\n\t\t];\n\t\tlet neighbourhoodLength = neighbourhood.length;\n\t\tlet width = shape[0];\n\t\tlet height = shape[1];\n\t\tlet maxTries = Math.max(3, Math.ceil(tries));\n\t\tlet floatPrecisionMitigation = Math.max(1, Math.max(width, height) / 64 | 0);\n\t\tlet epsilonRadius = 1e-14 * floatPrecisionMitigation;\n\t\tlet epsilonAngle = 2e-14;\n\t\tlet squareRadius = radius * radius;\n\t\tlet radiusPlusEpsilon = radius + epsilonRadius;\n\t\tlet cellSize = radius * Math.SQRT1_2;\n\t\tlet angleIncrement = Math.PI * 2 / maxTries;\n\t\tlet angleIncrementOnSuccess = piDiv3 + epsilonAngle;\n\t\tlet triesIncrementOnSuccess = Math.ceil(angleIncrementOnSuccess / angleIncrement);\n\t\tlet processList = [];\n\t\tlet samplePoints = [];\n\t\tlet gridShape = [\n\t\t\tMath.ceil(width / cellSize),\n\t\t\tMath.ceil(height / cellSize)\n\t\t];\n\t\tlet strideX = gridShape[1];\n\t\tlet grid = new Uint32Array(gridShape[0] * gridShape[1]);\n\t\tlet addRandomPoint = function () {\n\t\t\treturn directAddPoint([\n\t\t\t\trng() * width,\n\t\t\t\trng() * height,\n\t\t\t\trng() * Math.PI * 2,\n\t\t\t\t0\n\t\t\t]);\n\t\t};\n\t\tlet directAddPoint = function (point) {\n\t\t\tlet coordsOnly = [point[0], point[1]];\n\t\t\tprocessList.push(point);\n\t\t\tsamplePoints.push(coordsOnly);\n\t\t\tlet internalArrayIndex = ((point[0] / cellSize) | 0) * strideX + ((point[1] / cellSize) | 0);\n\t\t\tgrid[internalArrayIndex] = samplePoints.length;\n\t\t\treturn coordsOnly;\n\t\t};\n\t\tlet inNeighbourhood = function (point) {\n\t\t\tlet boundX = gridShape[0];\n\t\t\tlet boundY = gridShape[1];\n\t\t\tlet cellX = point[0] / cellSize | 0;\n\t\t\tlet cellY = point[1] / cellSize | 0;\n\t\t\tfor (let neighbourIndex = 0; neighbourIndex < neighbourhoodLength; neighbourIndex++) {\n\t\t\t\tlet currentDimensionX = cellX + neighbourhood[neighbourIndex][0];\n\t\t\t\tlet currentDimensionY = cellY + neighbourhood[neighbourIndex][1];\n\t\t\t\tlet internalArrayIndex = (\n\t\t\t\t\tcurrentDimensionX < 0 || currentDimensionY < 0 || currentDimensionX >= boundX || currentDimensionY >= boundY ?\n\t\t\t\t\t-1 :\n\t\t\t\t\tcurrentDimensionX * strideX + currentDimensionY\n\t\t\t\t);\n\t\t\t\tif (internalArrayIndex !== -1 && grid[internalArrayIndex] !== 0) {\n\t\t\t\t\tlet existingPoint = samplePoints[grid[internalArrayIndex] - 1];\n\t\t\t\t\tif (Math.pow(point[0] - existingPoint[0], 2) + Math.pow(point[1] - existingPoint[1], 2) < squareRadius) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t};\n\t\tlet next = function () {\n\t\t\twhile (processList.length > 0) {\n\t\t\t\tlet index = processList.length * rng() | 0;\n\t\t\t\tlet currentPoint = processList[index];\n\t\t\t\tlet currentAngle = currentPoint[2];\n\t\t\t\tlet tries = currentPoint[3];\n\t\t\t\tif (tries === 0) {\n\t\t\t\t\tcurrentAngle = currentAngle + (rng() - 0.5) * piDiv3 * 4;\n\t\t\t\t}\n\t\t\t\tfor (; tries < maxTries; tries++) {\n\t\t\t\t\tlet newPoint = [\n\t\t\t\t\t\tcurrentPoint[0] + Math.cos(currentAngle) * radiusPlusEpsilon,\n\t\t\t\t\t\tcurrentPoint[1] + Math.sin(currentAngle) * radiusPlusEpsilon,\n\t\t\t\t\t\tcurrentAngle,\n\t\t\t\t\t\t0\n\t\t\t\t\t];\n\t\t\t\t\tif (\n\t\t\t\t\t\t(newPoint[0] >= 0 && newPoint[0] < width) &&\n\t\t\t\t\t\t(newPoint[1] >= 0 && newPoint[1] < height) &&\n\t\t\t\t\t\t!inNeighbourhood(newPoint)\n\t\t\t\t\t) {\n\t\t\t\t\t\tcurrentPoint[2] = currentAngle + angleIncrementOnSuccess + rng() * angleIncrement;\n\t\t\t\t\t\tcurrentPoint[3] = tries + triesIncrementOnSuccess;\n\t\t\t\t\t\treturn directAddPoint(newPoint);\n\t\t\t\t\t}\n\t\t\t\t\tcurrentAngle = currentAngle + angleIncrement;\n\t\t\t\t}\n\t\t\t\tif (tries >= maxTries) {\n\t\t\t\t\tconst r = processList.pop();\n\t\t\t\t\tif (index < processList.length) {\n\t\t\t\t\t\tprocessList[index] = r;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn null;\n\t\t};\n\t\tif (samplePoints.length === 0) {\n\t\t\taddRandomPoint();\n\t\t}\n\t\twhile(next()) {\n\t\t\tcontinue;\n\t\t}\n\t\treturn samplePoints;\n\t\t>\n\t}",
);
