import React from 'react'


export default function StudentDash() {
    const data = localStorage.getItem("user");
    const user = data ? JSON.parse(data) : null;

    if (!user) {
        return (
            <div className="min-h-screen bg-black text-white flex">
                No user found
            </div>

        );

    }
    return (
        <div className="min-h-screen p-10">
            <h1 className="text-3x1 font-bold">Student Dashboard</h1>

            <div className="mt-6 space-y-2">
                <p>UID: {user.uid}</p>
                <p>Role: {user.role}</p>
                <p>Name: {user.name}</p>
            </div>
        </div>


    );
}