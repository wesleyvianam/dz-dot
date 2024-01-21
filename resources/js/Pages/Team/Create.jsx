import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Index({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('teams.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teams</h2>}
        >
            <Head title="Teams" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-gray-900">
                            <div className="border-b py-4 px-6 flex justify-between">
                                <h2 className="text-xl font-bold">Create new team</h2>
                                <a className="border p-2 rounded-lg border-gray-800" href={route('teams.index')}>Back</a>
                            </div>
                            <div className="flex justify-between border-b p-6">
                                <form className="w-full flex items-center" onSubmit={submit}>
                                    <div className="w-1/3 me-3">
                                        <InputLabel htmlFor="name" value="Name"/>

                                        <TextInput
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                        />

                                        <InputError message={errors.name} className="mt-2"/>
                                    </div>

                                    <div className="w-2/3">
                                        <InputLabel htmlFor="description" value="Descrição"/>

                                        <TextInput
                                            id="description"
                                            name="description"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            autoComplete="description"
                                            onChange={(e) => setData('description', e.target.value)}
                                            required
                                        />

                                        <InputError message={errors.email} className="mt-2"/>
                                    </div>

                                    <div className="flex items-center justify-end mt-4">

                                        <PrimaryButton className="ms-4" disabled={processing}>
                                            Criar
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
