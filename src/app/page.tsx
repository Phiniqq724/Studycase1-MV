import Table, { ColumnDefs } from "@/components/Table";
import { employees, Employee } from "@/data/employee";

export default function Home() {
    const columnDefs: ColumnDefs<Employee>[] = [
        {
            title: "Name",
            render: (row) => `${row.firstName} ${row.lastName}`,
        },
        {
            title: "Age",
            field: "age" as keyof Employee,
        },
        {
            title: "Email",
            field: "email" as keyof Employee,
        },
        {
            title: "Phone",
            field: "phone" as keyof Employee,
        },
        {
            title: "Address",
            field: "address" as keyof Employee,
        },
        {
            title: "Verified",
            render: (row) =>
                row.verified ? (
                    <span className="text-green-600 font-semibold">✔ Yes</span>
                ) : (
                    <span className="text-red-600 font-semibold">✖ No</span>
                ),
        },
    ];

    return (
        <main className="flex min-h-screen items-center justify-around bg-slate-50">
            <section>
                <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
                    Generic Table
                </h1>
                <Table columnDefs={columnDefs} data={employees} />
            </section>
        </main>
    );
}
