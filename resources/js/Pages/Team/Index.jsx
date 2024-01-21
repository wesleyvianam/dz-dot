import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import List from "./Partials/List.jsx";

export default function Index({ auth, teams }) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Teams" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-gray-900">
                            <div className="border-b py-4 px-6 flex justify-between items-center">
                                <h2 className="text-xl font-bold">Times</h2>
                                <a className="border p-1 rounded-lg border-gray-800" href={route('teams.create')}>New</a>
                            </div>
                            <List teams={teams}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
