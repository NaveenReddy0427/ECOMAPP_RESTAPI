import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Define the absolute path for the uploads directory
const uploadDir = path.resolve('./uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage with filename and location
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        cb(null, `${timestamp}-${file.originalname}`);
    },
});

const upload = multer({
    storage: storage,
});

export default upload;

/**
 * below code is not working for me, i dont know why
 */
// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null, './uploads/');
//     },
//     filename:(req, file, cb)=>{
//         cb(null, new Date().toISOString() + file.originalname);
//     },
// });