export default function RoleCard({ role }: { role: string }) {
    return (
        <div className="bg-white shadow rounded p-4 border border-zinc-200">
            <h3 className="font-semibold text-xl text-black">{role}</h3>
        </div>
    );
}
