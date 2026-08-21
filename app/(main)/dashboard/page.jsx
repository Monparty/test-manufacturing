"use client";
function Page() {
    return (
        <main className="grid gap-4">
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
                <div className="h-40 w-full border border-x rounded bg-blue-50"></div>
                <div className="h-40 w-full border border-x rounded bg-blue-50"></div>
                <div className="h-40 w-full border border-x rounded bg-blue-50"></div>
                <div className="h-40 w-full border border-x rounded bg-blue-50"></div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
                <div className="flex-2 h-[40dvh] border border-x rounded bg-blue-50"></div>
                <div className="flex-1 border border-x rounded bg-blue-50"></div>
            </div>
            <div className="h-[40dvh] border border-x rounded bg-blue-50"></div>
        </main>
    );
}

export default Page;
