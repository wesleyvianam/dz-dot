import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import List from "./Partials/List.jsx";

export default function Index({ auth, settings }) {

    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Configurações" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-gray-900">
                            <div className="border-b py-4 px-6 flex justify-between items-center">
                                <h2 className="text-xl font-bold">Configurações</h2>

                                <a href={route('settings.create')}
                                   className="border p-1 px-2 rounded-lg border-gray-800 cursor-pointer">
                                    Nova configuração
                                </a>
                            </div>

                            <List settings={settings}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
