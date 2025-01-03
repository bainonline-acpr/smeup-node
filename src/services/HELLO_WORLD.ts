import {
  ExecutionContext,
  Fun,
  KokosService,
  SmeupDataStructureWriter,
} from "@sme.up/kokos-sdk-node";

const HELLO_WORLD: KokosService = {
  methods: {
    "HLL.WRL": helloWorld,
  },
};

async function helloWorld(
  _fun: Fun,
  _context: ExecutionContext,
  printer: SmeupDataStructureWriter
) {
  printer.writeDataNode({
    children: [],
    obj: {
      t: "fgfgd",
      p: "",
      k: "",
    },
    value: "Hello World",
  });
}

export default HELLO_WORLD;
