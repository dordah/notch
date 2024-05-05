import fs from 'node:fs';
import dotenv from 'dotenv';
import {z} from "zod";

const configFile = fs.readFileSync('local.env').toString();
const configUnparsed = dotenv.parse(configFile);

const configSchema = z.object({
    PORT: z.number({coerce: true})
});
export const config = configSchema.parse(configUnparsed);
