const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const brand = await connection('brand').select([
            'brand.brand_id',
            'brand.name',
            'brand.created_at',
            'brand.updated_at'
        ]);
        
        return response.json(brand);
    }
};