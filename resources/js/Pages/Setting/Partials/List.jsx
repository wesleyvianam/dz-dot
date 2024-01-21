
export default function List({ settings }) {
    console.log(settings)
    const settingElements = settings.map((setting) => (
        <li key={setting.id} className="flex justify-between items-center border-b p-3">
            <h1 className="w-2/6 flex flex-col font-bold">{ !setting.team_name ? setting.company_name : 'Configuração equipe '+ setting.team_name }
                {!setting.team_name ? <small className="font-normal">Configuração padrão</small> : ""}
            </h1>

            <div className="w-1/6 flex justify-end">
                <a href="#" className="me-2 p-1 rounded-lg border border-indigo-700 text-indigo-700 hover:text-indigo-400 hover:border-indigo-400">
                    Editar
                </a>

                {setting.team_name
                    ? <a href="#" className="p-1 rounded-lg border border-red-700 text-red-700 hover:text-red-400 hover:border-red-400">Deletar</a>
                    : ""
                }
            </div>
        </li>
    ));

    return <ul>{settingElements}</ul>
}
