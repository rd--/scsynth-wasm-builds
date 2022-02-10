# scsynth-wasm-builds

This archive has [web assembly](https://webassembly.org/) builds of the [SuperCollider](https://www.audiosynth.com/) synthesiser.

These builds are made using the archive at [dylans:wasm-no-submodules](https://github.com/dylans/supercollider/tree/wasm-no-submodules)

### core:

- initial memory: 64mb
- packet size: 512kb
- unit generators: default
- date: 2022-02-01

### ext:

- initial memory: 64mb
- packet size: 512kb
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
  + portedplugins
    - AnalogFoldOsc
    - Rongs
    - VA1Pole, VADiodeFilter, VAKorg35, VALadder, VadimFilter
  + sc3-rdu:
    - RDX7, RObxdFilter
    - ExpRandN, IRandN, LinRandN, RandN, TExpRandN, TLinRandN, TRandN
    - TScramble
    - RBezier, RFreezer
- date: 2022-02-09

