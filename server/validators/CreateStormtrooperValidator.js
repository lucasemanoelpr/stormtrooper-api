import Joi from 'joi';
import util from '../utils/Util.js';

const { uuidv4RegexPattern } = util;

const CreateStormtrooperSchema = Joi.object({
	name: Joi.string().required(),
	nickname: Joi.string().required(),
	id_patent: Joi.string().pattern(new RegExp(uuidv4RegexPattern)).required(),
	division_id: Joi.string().pattern(new RegExp(uuidv4RegexPattern)).required(),
});

export default CreateStormtrooperSchema;