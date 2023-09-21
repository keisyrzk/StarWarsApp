import { Planet, PlanetsContainer } from './Entities/Planet';
import { baseEndpoints, fetchData } from './StarWarsServices';

export const planets = {
    getAll: async (): Promise<PlanetsContainer> => {
        return fetchData<PlanetsContainer>(baseEndpoints.planets);
    },

    get: async (id: string): Promise<Planet | null> => {
        return fetchData<Planet | null>(`${baseEndpoints.planets}/${id}`);
    },
  };