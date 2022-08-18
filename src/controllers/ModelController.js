const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const model = await connection('model')
            .join('brand', 'brand.brand_id', '=', 'model.brand_id')
            .select([
                'model.model_id',
                'model.name',
                'brand.name AS brand_name',
                'model.created_at',
                'model.updated_at',
            ]);
        return response.json(model);
    }
};