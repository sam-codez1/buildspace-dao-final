import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x4088a76755ed95fbF5E4A98B6a5F6096ba531F8B", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Grab a Plate",
        description: "Grab a plate to get access to FeastDAO!",
        image: readFileSync("scripts/assets/takeoutbox.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();