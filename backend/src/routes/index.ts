import { Router, Request, Response } from 'express';
import validator from '../validator/Validator';
import {KeystrokeModel} from '../database/keystroke/keystroke.model';

// Init router and path
const router = Router();

// Keystroke route
router.post('/keystroke', (req: Request, res: Response) => {
    const val = validator.validate(req.body);
    if (val.error != null){
        res.status(400).json(val.error)
    }

    const keystroke = new KeystrokeModel(req.body);
    keystroke.save(function (err, keystroke) {
        if (err){
            res.status(500).json({
                status: 'error',
                message: 'Failed to save data to database'})
        }
      });

    return res.status(200).json({
        status: 'success',
        message: 'data entered into database',
        content: req.body
    });
});

// Export the base-router
export default router;
