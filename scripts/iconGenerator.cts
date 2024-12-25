import sharp from "sharp";
import path from "path";
import fs from "fs";

// Define the sizes required by Chrome extensions
const iconSizes = [16, 32, 48, 128];

// Input and output paths
const baseIconPath = "./src/assets/icon.png";
const outputDir = "./public/icons";

if (!fs.existsSync(baseIconPath)) {
  throw new Error(
    `Icon png Not Found!. you should put your icon in ${baseIconPath} path for this script to work.`
  );
}

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate icons
async function generateIcons() {
  try {
    for (const size of iconSizes) {
      const outputPath = path.join(outputDir, `icon-${size}.png`);
      await sharp(baseIconPath).resize(size, size).toFile(outputPath);
      console.log(`Generated: ${outputPath}`);
    }
    console.log("All icons generated successfully!");
  } catch (error) {
    console.error("Error generating icons:", error);
  }
}

generateIcons();
