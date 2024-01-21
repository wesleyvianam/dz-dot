import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useForm} from "@inertiajs/react";

export default function Form({ teams }) {
    const {
        data,
        setData,
        processing,
        post,
        reset,
        errors,
    } = useForm({
        team_id: '',
        workload: '',
    });

    const dayWeek= {
        monday: {
            label: "Segunda",
        },
        tuesday: {
            label: "Terça",
        },
        wednesday: {
            label: "Quarta",
        },
        thursday: {
            label: "Quinta",
        },
        friday: {
            label: "Sexta",
        },
        saturday: {
            label: "Sábado",
        },
        sunday: {
            label: "Domingo",
        },
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('settings.store'));
    };

    return (
        <form className="px-6 pb-4" onSubmit={submit}>
            <div className="flex w-full items-center">
                <div className="mt-6 w-1/5 pe-4">
                    <InputLabel htmlFor="workload" value="Carga horária"/>

                    <TextInput
                        id="workload"
                        type="number"
                        name="workload"
                        value={data.workload}
                        onChange={(e) => setData('workload', e.target.value)}
                        className="mt-1 block w-full"
                        isFocused
                    />

                    <InputError message={errors.workload} className="mt-2"/>
                </div>

                <div className="mt-6 w-2/5 pe-4">
                    <InputLabel htmlFor="team_id" value="Equipe"/>

                    <select id="team_id"
                            name="team_id"
                            onChange={(e) => setData('team_id', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded"
                    >
                        {teams.map((item) => {
                            return <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        })}
                    </select>

                    <InputError message={errors.workload} className="mt-2"/>
                </div>

                <div className="pt-16 me-5">
                    <InputLabel htmlFor="overtime" value=""/>

                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <TextInput
                            id="overtime"
                            type="checkbox"
                            name="overtime"
                            value={data.overtime}
                            onChange={(e) => setData('overtime', e.target.value)}
                            className="sr-only peer"
                            isFocused
                        />

                        <div
                            className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span
                            className="ms-3 text-sm font-medium text-gray-900">Aceita hora extra?</span>
                    </label>

                    <InputError message={errors.overtime} className="mt-2"/>
                </div>
            </div>

            {Object.keys(dayWeek).map((key) => {
                return (<>
                    <h2 className="mt-2 w-1/6 text-md font-semibold">{dayWeek[key].label}:</h2>

                    <div key={key} className="flex items-center w-full py-3">
                        <div className="w-1/5 pe-4">
                            <InputLabel htmlFor="monday" value="Início"/>

                            <TextInput
                                id="monday"
                                type="time"
                                name={key + "[start]"}
                                onChange={(e) => setData(`${key}.start`, e.target.value)}
                                className="mt-1 block w-full"
                                isFocused
                            />
                        </div>

                        <div className="mt-2 w-1/5 pe-4">
                            <InputLabel htmlFor="monday" value="Almoço"/>

                            <TextInput
                                id="monday"
                                type="time"
                                name={key + "[launch]"}
                                onChange={(e) => setData(`${key}.launch`, e.target.value)}
                                className="mt-1 block w-full"
                                isFocused
                            />
                        </div>

                        <div className="mt-2 w-1/5 pe-4">
                            <InputLabel htmlFor="monday" value="Retorno"/>

                            <TextInput
                                id="monday"
                                type="time"
                                name={key + "[back]"}
                                onChange={(e) => setData(`${key}.back`, e.target.value)}
                                className="mt-1 block w-full"
                                isFocused
                            />
                        </div>

                        <div className="mt-2 w-1/5 pe-4">
                            <InputLabel htmlFor="monday" value="Saída"/>

                            <TextInput
                                id={key}
                                type="time"
                                name={key + "[end]"}
                                onChange={(e) => setData(`${key}.end`, e.target.value)}
                                className="mt-1 block w-full"
                                isFocused
                            />
                        </div>

                        <div className="mt-2 w-1/5">
                            <InputLabel htmlFor="monday" value="Horas totais"/>

                            <TextInput id={key+'Total'} className="text-end mt-1 block w-full" />
                        </div>
                    </div>
                </>);
            })}

            <div className="mt-6 flex justify-end">
                <PrimaryButton className="ms-3" disabled={processing}>
                    Salvar
                </PrimaryButton>
            </div>
        </form>
    );
}
