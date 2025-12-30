import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { IncomingForm, File } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const uploadDir = path.join(process.cwd(), 'public', 'team-photos');

  // Ensure upload directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = new IncomingForm({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
  });

  try {
    const [fields, files] = await new Promise<[any, any]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const file = Array.isArray(files.image) ? files.image[0] : files.image;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const personId = Array.isArray(fields.personId) ? fields.personId[0] : fields.personId;
    if (!personId) {
      return res.status(400).json({ error: 'No person ID provided' });
    }

    // Rename file to person ID
    const ext = path.extname(file.originalFilename || '.jpg');
    const newFilename = `${personId}${ext}`;
    const newPath = path.join(uploadDir, newFilename);

    // Move file to new location
    fs.renameSync(file.filepath, newPath);

    return res.status(200).json({
      ok: true,
      filename: newFilename,
      url: `/team-photos/${newFilename}`,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Upload failed' });
  }
}
