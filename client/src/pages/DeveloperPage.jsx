import React from "react";

const developers = [
    {
        name: "Alice Johnson",
        role: "Frontend Developer",
        bio: "Passionate about building beautiful and accessible UIs.",
        github: "https://github.com/alicejohnson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Bob Smith",
        role: "Backend Developer",
        bio: "Loves scalable APIs and clean code.",
        github: "https://github.com/bobsmith",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
];

export default function DeveloperPage() {
    return (
        <div style={{ maxWidth: 800, margin: "40px auto", padding: 24 }}>
            <h1>Meet the Developers</h1>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                {developers.map((dev) => (
                    <div
                        key={dev.github}
                        style={{
                            border: "1px solid #eee",
                            borderRadius: 12,
                            padding: 24,
                            width: 300,
                            background: "#fafafa",
                            boxShadow: "0 2px 8px #eee",
                        }}
                    >
                        <img
                            src={dev.avatar}
                            alt={dev.name}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: "50%",
                                objectFit: "cover",
                                marginBottom: 16,
                            }}
                        />
                        <h2 style={{ margin: "8px 0 4px" }}>{dev.name}</h2>
                        <h4 style={{ margin: "0 0 12px", color: "#888" }}>{dev.role}</h4>
                        <p style={{ marginBottom: 16 }}>{dev.bio}</p>
                        <a
                            href={dev.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#0366d6",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                        >
                            GitHub Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}