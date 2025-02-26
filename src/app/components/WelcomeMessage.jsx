"use client"; // ✅ Solo se renderiza en el cliente 
// 👌🏼 Evitamos hydration error

import React from "react";
import { Card, CardBody, Typography } from "@/app/components/ui";

// componente reutilizable ➡️ nos permite realizar Saludo dinámico utilizando props 
const WelcomeMessage = ({ names }) => {
    return (
        <Card className= "w-full max-w-md shadow-lg">
            <CardBody className="bg-blue-500 text-white text-center p-6 rounded-lg">
                <Typography variant="h5" className="font-bold">
                    <ul>
                        {names.map((name) => (
                          <li key={name}> Bienvenido a la misión {name}</li>
                        ))}
                    </ul>
                </Typography>
            </CardBody>
        </Card>
    )
}

export { WelcomeMessage };