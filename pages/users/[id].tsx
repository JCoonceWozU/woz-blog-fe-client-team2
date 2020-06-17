import React from "react";
import {useRouter} from "next/router";
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json())

const UserProfile = () => {

    const router = useRouter();
    const { data, error } = useSWR(`http://localhost:8080/api/users/${router.query.id}`, fetcher)

    if (error) return <div>Failed to load articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <title> {data.id} | Woz U Woz U Next.js Blog Project Team 2</title>
            <section>
                <h1>
                    <p>User: {data.userName}</p>
                </h1>

            </section>
            <section>
                <p>This section will display user name, first name, last name, and email</p>
                <p> First Name: {data.firstName} </p>
                <p> Last Name: {data.lastName} </p>
                <p> Email: {data.email} </p>
            </section>
            <section>

            </section>

        </div>
    )
}

export default UserProfile;
