import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Form from "./Partials/Form.jsx";

export default function Create({ auth, teams }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-gray-900">
                            <div className="border-b py-4 px-6 flex justify-between items-center">
                                <h2 className="text-xl font-bold">Nova Configuração</h2>

                                <a href={route('settings.index')}
                                   className="border p-1 px-2 rounded-lg border-gray-800 cursor-pointer">
                                    Voltar
                                </a>
                            </div>
                            <Form teams={teams} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
);
}
