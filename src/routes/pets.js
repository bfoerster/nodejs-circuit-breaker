const Joi = require('joi');

module.exports = [{
    method: 'GET',
    path: '/pets',

    config: {
        handler: (request, reply) => {
            return reply('All pets');
        },
        description: 'Get All Pets',
        notes: 'Returns a list including all pets available',
        tags: ['api']
    }
},
    {
        method: 'GET',
        path: '/pets/{id}',

        config: {
            handler: (request, reply) => {
                return reply(`Pet with id ${request.params.id}`);
            },
            description: 'Get A Pet By Id',
            notes: 'Returns a single pet',
            tags: ['api'],
            validate: {
                params: {
                    id: Joi.string()
                        .required()
                        .description('The pets id'),
                }
            }
        }
    }]