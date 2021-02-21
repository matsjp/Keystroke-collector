import { Router, Request, Response } from 'express';
import validator from '../validator/Validator';
import {KeystrokeModel} from '../database/keystroke/keystroke.model';
import db from '../Firebase';
import { randomString } from '../utils';

// Init router and path
const router = Router();

// Keystroke route
// eslint-disable-next-line 
router.post('/keystroke', async (req: Request, res: Response) => {
    const val = validator.validate(req.body);
    console.log(req.body);
    if (val.error != null){
         return res.status(400).json(val.error)
    }

    try {
        const docRef = db.collection('keystrokes').doc(randomString());


        await docRef.set(req.body);   
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            status: 'error',
            message: 'Failed to save data to database'})
    }


    /*const keystroke = new KeystrokeModel(req.body);
    try {
        console.log('Saving to db');
        await keystroke.save();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            status: 'error',
            message: 'Failed to save data to database'})
    }*/

    return res.status(200).json({
        status: 'success',
        message: 'data entered into database',
        content: req.body
    });
});

// Export the base-router
export default router;
