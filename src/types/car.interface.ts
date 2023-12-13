type typeCar = "suv" | "estate" | "sedan";

export interface Car {
  id: string;
  modelName: string;
  bodyType: typeCar;
  modelType: string;
  imageUrl: string;
}
