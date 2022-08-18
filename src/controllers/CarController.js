const connection = require('../database/connection');

module.exports = {
    async index(request, response){
      const car = await connection('car')
      .join('model', 'model.model_id', '=', 'car.model_id')
      .select([
          'car.chassis',
          'car.plate_number',
          'model.name',
          'car.color',
          'car.car_year',
          'car.fuel_type',
          'car.door_number',
          'car.mileage',
          'car.renavam',
          'car.rental_price',
          'car.created_at',
          'car.updated_at',
      ]);
      return response.json(car);
    },

    async create(request, response){
      const {
        chassis,
        plate_number,
        color,
        car_year,
        fuel_type,
        door_number,
        mileage,
        renavam,
        rental_price,
        model_id
      } = request.body;
  
          await connection('car').insert({
            chassis,
            plate_number,
            color,
            car_year,
            fuel_type,
            door_number,
            mileage,
            renavam,
            rental_price,
            model_id,
            created_at: new Date(),
            updated_at: new Date(),
          })
      return response.json({ chassis });
  }
};