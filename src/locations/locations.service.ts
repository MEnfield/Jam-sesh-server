import { Injectable } from '@nestjs/common';
import { Repository, Point } from 'typeorm';
import { Locations } from 'src/entities/Locations';
import { CreateLocationDto } from 'src/locations/dto/create-location.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Locations)
    private readonly locationRepository: Repository<Locations>,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Locations> {
    const { latitude, longitude, ...rest } = createLocationDto;

    const point: Point = { type: 'Point', coordinates: [longitude, latitude] };

    const location = this.locationRepository.create({
      ...rest,
      coordinates: point, // Assuming the entity has a `coordinates` column of type geography
    });

    return this.locationRepository.save(location);
  }

  // findAll() {
  //   return `This action returns all locations`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} location`;
  // }

  // update(id: number, updateLocationDto: UpdateLocationDto) {
  //   return `This action updates a #${id} location`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} location`;
  // }

  async findNearby(latitude: number, longitude: number, distance: number) {
    return this.locationRepository.query(
      `
        SELECT * 
        FROM locations 
        WHERE ST_DWithin(
            coordinates, 
            ST_SetSRID(ST_MakePoint($1, $2), 4326), 
            $3
        );
        `,
      [longitude, latitude, distance],
    );
  }
}
