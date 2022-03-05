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
    - RDX7, RObxdFilter
    - ExpRandN, IRandN, LinRandN, RandN, TExpRandN, TLinRandN, TRandN
    - TScramble
    - RBezier, RFreezer
    - BufMemCpy
- date: 2022-02-17
