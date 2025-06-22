export default function Button({ label, icon }: {
    label: string
    icon: string
}) {
    return (
        <button
            className="bg-gradient-to-tr from-blue-500 
                to-green-500 
                text-white px-4 py-2 rounded-lg">
            <i className={`fa fa-${icon} mr-2`}></i>
            {label}
        </button>
    )
}