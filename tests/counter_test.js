const anchor = require("@coral-xyz/anchor");
const { SystemProgram } = anchor.web3;

describe("hello_solana counter test", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.HelloSolana;

  let counterPda;

  it("Initializes a counter", async () => {
    const [pda] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from("counter"), provider.wallet.publicKey.toBuffer()],
      program.programId
    );
    counterPda = pda;

    await program.methods
      .initCounter()
      .accounts({
        authority: provider.wallet.publicKey,
        counter: counterPda,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const account = await program.account.counter.fetch(counterPda);
    console.log("Counter initialized:", account.count.toString());
  });

  it("Increments the counter", async () => {
    await program.methods
      .increment()
      .accounts({
        authority: provider.wallet.publicKey,
        counter: counterPda,
      })
      .rpc();

    const account = await program.account.counter.fetch(counterPda);
    console.log("Counter after increment:", account.count.toString());
  });
});

//added some comments
//another comment

//comment from new dev branch