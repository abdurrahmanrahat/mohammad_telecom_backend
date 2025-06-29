import express from 'express';
import fileController from './file.controller';
import upload from './file.upload';

const router = express.Router();

router.post('/upload', upload.single('image'), fileController.uploadFile);

export const fileRoutes = router;
