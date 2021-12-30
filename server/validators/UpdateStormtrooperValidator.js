import Joi from 'joi';
import util from '../utils/Util.js';

const { uuidv4RegexPattern } = util;

const UpdateStormtrooperSchema = Joi.object({
	name: Joi.string(),
	nickname: Joi.string(),
	id_patent: Joi.string().pattern(new RegExp(uuidv4RegexPattern)),
	division_id: Joi.string().pattern(new RegExp(uuidv4RegexPattern)),
});

export default UpdateStormtrooperSchema;