/* 
🏠 page.jsx - Página principal de la aplicación 
🏘️ home.jsx - Equivalente a React puro
*/

// --------------------------------------------------------------- */
/* 📌 Este archivo representa la página de inicio (/).   
   ✅ En Next.js, `page.jsx` define automáticamente una ruta.
   ✅ No es necesario importarlo en `App.jsx`, Next.js lo maneja solo.
   ✅ Puede incluir UI, botones y llamadas a API.
*/
"use client"; // evitar hidration error
import { Button, Card, CardBody, Typography } from "@/app/components/ui";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { TaskList } from "./components/TaskList";

/* 🏠 Componente Home - Página de bienvenida */
export default function Home() {
    return (
        <main className="flex flex-col items-center min-h-screen justify-center bg-gray-900 text-white p-6 gap-6">
            
            {/*✅ Componente Welcome reutilizable*/ }
            <WelcomeMessage name="Adri" />
            
            {/* 📂 Contenedor principal con Card*/}
            <Card className="w-full max-w-lg shadow-xl border border-gray-700 bg-gray-800">
                <CardBody className="text-center flex flex-col gap-4">
                
                {/* 📝 Título principal */}
                    <Typography variant="h1" color="amber" className="font-bold">
                        🚀 Bienvenidos a la Misión: Red Planet
                    </Typography>

                    {/* 📄 Texto descriptivo */}
                    <div>
                        <Typography variant="paragraph" className="text-gray-300">
                        Nuestra misión es explorar y colonizar Marte. La humanidad está
                        dando su primer gran paso hacia el planeta rojo.
                        </Typography>
                        <Typography variant="small" className="mt-2 italic text-gray-400">
                        Fecha estimada de lanzamiento: 15 de julio de 2030.
                        </Typography>
                    </div>
                    <TaskList /> {/*📝 Renderiza TaskList*/ }
                    {/* 🎯 Botón de acción */}
                    <Button color="amber" size="lg" className="mt-1">
                        Unirse a la Misión
                    </Button>
                </CardBody>
            </Card>
        </main>
    );
};