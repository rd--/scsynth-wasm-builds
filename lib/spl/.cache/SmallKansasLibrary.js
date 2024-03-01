_then_2(
  _primitiveLoadPackageSequence_1([
    "Dom",
    "Midi",
    "UserEventTarget",
    "View",
    "SmallKansas",
    "ColumnBrowser",
    "Frame",
    "ListChooser",
    "Menu",
    "TextEditor",
    "TextElement",
    "AnalogueClock",
    "CategoryBrowser",
    "ColourChooser",
    "CrystalLatticeStructureBrowser",
    "CrystalLatticeStructureOracle",
    "DigitalClock",
    "HelpBrowser",
    "HelpViewer",
    "Inspector",
    "MethodBrowser",
    "MethodSignatureBrowser",
    "MidiMonitorMenu",
    "MidiPortBrowser",
    "PackageBrowser",
    "PackageIndexBrowser",
    "PngViewer",
    "ScProgramBrowser",
    "ScProgramOracle",
    "ScSynthStatusMonitor",
    "ScalaJiMetaBrowser",
    "ScalaJiTuningBrowser",
    "ScalaScaleBrowser",
    "SvgViewer",
    "SystemBrowser",
    "TableViewer",
    "TraitBrowser",
    "TranscriptViewer",
    "TypeBrowser",
    "WindowMenu",
    "Workspace",
    "WorldMenu",
  ]),
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _smallKansas_1(_system);
  },
);
