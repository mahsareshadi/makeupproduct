import { useState, useEffect } from 'react';
import './Content.css'
import Filter from './Filter';
import Item from './Item';
import Title from './Title';


function Content() {
    const [allData, setAllData] = useState([]);
    const [fileter, setFilter] = useState({});

    useEffect(() => {
        const url = "http://makeup-api.herokuapp.com/api/v1/products.json";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAllData(json);
                console.log(json)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
    }, [fileter])

    function handleSet(checked, name) {
        let temp = { ...fileter };
        if (checked) {
            temp[name] = name;
        } else if (temp[name]) {
            delete temp[name]
        }
        setFilter(temp);
    }
    let newData;
    if (Object.keys(fileter).length === 0) {
        newData = allData
    } else {
        newData = allData.filter((item) => { return item.brand in fileter })

    }
    // console.log(newData)

    return (
        <div id="content">
            <div id="filter-by-brand">
                <Title></Title>
                <Filter handleSet={handleSet}></Filter>
            </div>
            <div id="items">

                {
                    newData.map((item) => {
                        return <Item
                            image={item.image_link}
                            brand={item.brand}
                            category={item.category}
                            name={item.name}
                            price={item.price}
                            priceSign={item.price_sign}
                        />
                    })}

            </div>
        </div>
    )
}
export default Content;