import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from 'axios';

const Product = () => {
    const [data, setData] = useState([]);
    // const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://gorest.co.in/public-api/users');
                setData(data.data);

                postProducts(data.data);
            } catch (error) {
                console.log(error);
            }
        };

        const postProducts = async (items) => {
            try {
                for (const item of items) {
                     await axios.post('http://localhost:5000/add', item);
                    // const { user } = response.data;
                   
                    // setUser(prevUser => [...prevUser, user]);
                }
            } catch (error) {
                console.log(error);
            }
        };

        const fetchDataMine = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/getproducts');
                // console.log(data.users);
                // setData(data.users);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        fetchDataMine();
    }, []);

    return (
        <div className="app">
            <h1>Product List</h1>
            <div className="ProductBox">
                {data.map(item => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        gender={item.gender}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default Product;
