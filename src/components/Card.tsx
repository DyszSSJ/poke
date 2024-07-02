import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Pokemon } from "../types";

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const { name, order, types, moves, sprites } = pokemon;

    const getBackgroundClass = (type: string): string => {
        switch (type) {
            case "fire":
                return "fire-background";
            case "water":
                return "water-background";
            case "grass":
                return "grass-background";
            case "electric":
                return "electric-background";
            default:
                return "default-background";
        }
    };

    const getTypeColor = (type: string): string => {
        switch (type) {
            case "fire":
                return "danger";
            case "water":
                return "primary";
            case "grass":
                return "success";
            case "electric":
                return "warning";
            default:
                return "secondary";
        }
    };
    const mainType = types[0].type.name;

    return (
        <Card className="pokemon-card">
            <div
                className={`pokemon-image-container ${getBackgroundClass(mainType)}`}
            >
                <Card.Img
                    variant="top"
                    src={sprites.front_default}
                    alt={name}
                    className="pokemon-image image"
                />
            </div>
            <Card.Body>
                <div
                    className={`d-flex justify-content-between align-items-center mb-2`}
                >
                    <Card.Title className="fs-3 font-monospace">{name}</Card.Title>
                    <Card.Text>
                        <strong className="font-monospace">Order:</strong> {order}°
                    </Card.Text>
                </div>
                <div>
                    <strong className="fs-5 font-monospace">Tipos: </strong>
                    <div className="d-flex flex-wrap">
                        {types.map((type, index) => (
                            <Badge
                                key={index}
                                className="fs-6 me-2"
                                bg={getTypeColor(type.type.name)}
                            >
                                {type.type.name}
                            </Badge>
                        ))}
                    </div>
                    <div className="mt-3">
                        <strong className="fs-5 font-monospace">Movimientos:</strong>
                        <ul className="fs-6 list-unstyled">
                            {moves.slice(0, 5).map((move, index) => (
                                <li key={index}>{move.move.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PokemonCard;
