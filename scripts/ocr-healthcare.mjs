import { createWorker } from "tesseract.js";

const imagePath = process.argv[2];
if (!imagePath) {
  console.error("Usage: node scripts/ocr-healthcare.mjs <imagePath>");
  process.exit(1);
}

const worker = await createWorker("eng");

try {
  const {
    data: { text },
  } = await worker.recognize(imagePath);
  process.stdout.write(text);
} finally {
  await worker.terminate();
}

