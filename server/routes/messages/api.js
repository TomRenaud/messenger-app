import express from 'express';
import path from 'path';
import { getMessages } from '../../services/messages';

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const result = await getMessages();
		res.send(result);
	} catch (e) {
		console.error("Error while fetching messages, return mock instead: ", e.message);
		res.sendFile(path.join(__dirname, "../../mock/messages.json"));
	}
});

export default router;