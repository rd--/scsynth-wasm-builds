# scsynth-wasm-builds

This archive has [web assembly](https://webassembly.org/) builds of the [SuperCollider](https://www.audiosynth.com/) synthesiser.

These builds are made using the archive at [dylans:wasm-no-submodules](https://github.com/dylans/supercollider/tree/wasm-no-submodules)

The port of scsynth to web assembly was made by [Hanns Holger Rutz](https://www.sciss.de/):

- <https://github.com/Sciss/supercollider/tree/wasm>
- <https://scsynth.org/t/webassembly-support/3037/6>
- <https://github.com/supercollider/supercollider/issues/5224>
- <https://github.com/supercollider/supercollider/pull/5571>

### core:

- initial memory: 64mb
- packet size: 512kb
- unit generators: default
- date: 2022-02-01

### ext:

- initial memory: 256mb
- packet size: 16mb
- unit generators: default
  + sc3-plugins:
    - Bhob
      + Flt: MoogLadder, RLPFD, MultiFilt, NestedAllpass{NLC}, DoubleNestedAllpass{NLC}, Streson, NLFilt{NLC}
      + Grains: TGrains2 TGrains3
      + Noise: GaussTrig, LFBrownNoise{012}, TBrownRand, Dbrown2, Dgauss, TGaussRand, TBetaRand, Gendy{45}
	- MCLD
      + Chaos: RosslerL, FincoSprott{LMS}, Perlin3
	  + Filters: Friction, Crest, Goertzel
      + Osc: SawDPW
    - Josh
      + Grain
    - SkUGens
      + FM7
    - VOSIM
  + portedplugins
    - AnalogFoldOsc
    - Rongs
    - VA1Pole, VADiodeFilter, VAKorg35, VALadder
    - VadimFilter
  + vb:
    - RCD, SCM
    - VBChebyFilt, VBFourses, VBJonVerb
    - Lores, Slide
  + sc3-rdu:
    - Dx7, ObxdFilter
    - ExpRandN, IRandN, LinRandN, RandN, TExpRandN, TLinRandN, TRandN
    - TScramble
    - Bezier, Freezer
    - BufMemCpy
	- TrigAllocator
- date: 2023-09-30

## JsSc3 & Spl

This archive also has builds of the related projects <https://gitlab.com/rd--/jssc3> and <https://gitlab.com/rd--/spl>.

The builds are made by _deno bundle_.

There are also copies of libraries required by _JsSc3_ and _Spl_ and _BlkSc3_.

- CommonMark - <https://github.com/commonmark/commonmark.js/>
- Blockly - <https://github.com/google/blockly>
  + Toolbox Search - <https://github.com/google/blockly-samples/tree/master/plugins/toolbox-search>
- Fft - <https://github.com/indutny/fft.js/>
- Graphviz - <https://github.com/hpcc-systems/hpcc-js-wasm>
- MersenneTwister - <https://github.com/misteltein/mersenne-twister>
- OpenSoundControl - <https://github.com/colinbdclark/osc.js>
- PriorityQueue - <https://github.com/mourner/flatqueue>
- Robust-Predicates - <https://github.com/mourner/robust-predicates>
- Delaunator - <https://github.com/mapbox/delaunator>
