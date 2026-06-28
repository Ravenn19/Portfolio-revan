import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'public/images';

const tasks = [
  { file: 'pt_rajawali.jpg', width: 600, type: 'jpeg', quality: 80 },
  { file: 'porto4.png', width: 600, type: 'png', quality: 80 },
  { file: 'porto6.png', width: 600, type: 'png', quality: 80 },
  { file: 'porto7.png', width: 600, type: 'png', quality: 80 },
  { file: 'itpln1.jpg', width: 600, type: 'jpeg', quality: 80 },
  { file: 'logorevan_3.png', width: 150, type: 'png', quality: 85 },
  { file: 'google.png', width: 100, type: 'png', quality: 85 },
  { file: 'revan.jpg', width: 500, type: 'jpeg', quality: 80 },
  { file: 'logorevan_4.png', width: 120, type: 'png', quality: 85 },
  { file: 'logorevan_1.png', width: 120, type: 'png', quality: 85 }
];

async function run() {
  for (const task of tasks) {
    const inputPath = path.join(imagesDir, task.file);
    const tempPath = path.join(imagesDir, 'temp_' + task.file);
    
    if (fs.existsSync(inputPath)) {
      try {
        console.log(`Optimizing ${task.file}...`);
        let pipeline = sharp(inputPath).resize({ width: task.width, withoutEnlargement: true });
        
        if (task.type === 'jpeg') {
          pipeline = pipeline.jpeg({ quality: task.quality, mozjpeg: true });
        } else if (task.type === 'png') {
          pipeline = pipeline.png({ quality: task.quality, compressionLevel: 9 });
        }
        
        await pipeline.toFile(tempPath);
        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, inputPath);
        console.log(`Success! Optimized ${task.file}`);
      } catch (err) {
        console.error(`Error processing ${task.file}:`, err);
      }
    } else {
      console.warn(`File not found: ${task.file}`);
    }
  }
}

run();
