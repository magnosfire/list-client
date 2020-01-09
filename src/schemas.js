import { schema } from 'normalizr';

export const listSchema = new schema.Entity(
    'lists', 
    {}, 
    { idAtrribute: id}
)