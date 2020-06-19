import React from "react";
import {useRouter} from "next/router";
import useSWR from 'swr';
import Layout from "../../components/common/Layout";

const fetcher = url => fetch(url).then(res => res.json())

const UserProfile = () => {

    const router = useRouter();
    const {data, error} = useSWR(`http://localhost:8080/api/users/${router.query.id}`, fetcher)

    if (error) return <div>Failed to load articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <Layout>
            <h1>
                User:
                <p>{data.userName}</p>

            </h1>
            <section>
                <p>This section will display user name, first name, last name, and email</p>
                <p> First Name: {data.firstName} </p>
                <p> Last Name: {data.lastName} </p>
                <p> Email: {data.email} </p>
            </section>
        </Layout>
    )
}

export default UserProfile;
