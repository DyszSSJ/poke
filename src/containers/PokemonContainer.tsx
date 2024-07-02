import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Form, Container, Alert } from 'react-bootstrap';
import PokemonCard from '../components/Card';
import { Pokemon } from '../types';
import Loading from '../components/Loading';

const PokemonContainer: React.FC = () => {
    const [pokemonName, setPokemonName] = useState<string>('bulbasaur');
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handlePokemonChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(event.target.value);
    }, []);

    useEffect(() => {
        const fetchPokemonData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                const data: Pokemon = response.data;
                setPokemon(data);
                localStorage.setItem('pokemonName', data.name);
                console.log(`Nombre del Pokémon almacenado: ${localStorage.getItem('pokemonName')}`);
            } catch (error) {
                setError('Error al obtener datos del Pokémon. Por favor, inténtalo de nuevo.');
                console.error('Error fetching data:', error);
            }

            setTimeout(() => {
                setLoading(false);
            }, 3000);
        };

        fetchPokemonData();
    }, [pokemonName]);

    return (
        <Container className="mt-4">
            <h2 className="text-center font-monospace font-bold fs-1">Explora Pokémon</h2>
            <Form className="text-center mb-4">
                <Form.Group controlId="pokemonSelect">
                    <Form.Label
                        className='fs-5 font-monospace font-bold mb-3'
                    >Selecciona un Pokémon:</Form.Label>
                    <Form.Control as="select" onChange={handlePokemonChange} value={pokemonName}
                        className='form-select form-select-lg mb-3'
                    >
                        <option value="bulbasaur">Bulbasaur</option>
                        <option value="charmander">Charmander</option>
                        <option value="squirtle">Squirtle</option>
                        <option value="pikachu">Pikachu</option>
                        <option value="eevee">Eevee</option>
                        <option value="mewtwo">Mewtwo</option>
                        <option value="charizard">Charizard</option>
                        <option value="jigglypuff">Jigglypuff</option>
                        <option value="gengar">Gengar</option>
                        <option value="onix">Onix</option>
                        <option value="invalid-pokemon">Pokemon Inválido</option>
                    </Form.Control>
                </Form.Group>
            </Form>

            {loading ? (
                <div className="text-center">
                    <Loading />
                </div>
            ) : error ? (
                <Alert variant="danger" className="text-center">{error}</Alert>
            ) : (
                pokemon && (
                    <PokemonCard
                        pokemon={pokemon}
                    />
                )
            )}
        </Container>
    );
};

export default PokemonContainer;
