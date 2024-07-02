export interface Pokemon {
  name: string;
  order: number;
  types: { type: { name: string } }[];
  moves: { move: { name: string } }[];
  sprites: {
    front_default: string; 
  };
}
