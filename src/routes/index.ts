import { Router, Request, Response } from 'express';
import validator from '../validator/Validator';
import {KeystrokeModel} from '../database/keystroke/keystroke.model';

// Init router and path
const router = Router();

// Keystroke route
router.post('/keystroke', async (req: Request, res: Response) => {
    const val = validator.validate(req.body);
    console.log(req.body);
    if (val.error != null){
         return res.status(400).json(val.error)
    }

    const keystroke = new KeystrokeModel(req.body);
    try {
        await keystroke.save();
    }
    catch(err){
        return res.status(500).json({
            status: 'error',
            message: 'Failed to save data to database'})
    }

    return res.status(200).json({
        status: 'success',
        message: 'data entered into database',
        content: req.body
    });
});

// Export the base-router
export default router;
