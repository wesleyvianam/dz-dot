
export default function List({ members }) {

    const memberElements = members.map((member) => (
        <li key={member.id} className="flex justify-between items-center border-b p-3">
            <h1 className="w-2/6">{member.name}</h1>

            <span className="w-2/6">{member.email}</span>

            <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${member.team_name
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`
            }>
                {member.team_name ?? "Sem equipe"}
            </span>

            <div className="w-1/6 flex justify-end">
                <a href="#" className="me-2 p-1 rounded-lg border border-indigo-700 text-indigo-700 hover:text-indigo-400 hover:border-indigo-400">
                    Editar
                </a>

                <a href="#" className="p-1 rounded-lg border border-red-700 text-red-700 hover:text-red-400 hover:border-red-400">
                    Deletar
                </a>
            </div>
        </li>
    ));

    return <ul>{memberElements}</ul>
}
