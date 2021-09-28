import { useState, useEffect } from 'react';
import './Content.css'
import Filter from './Filter';
import Item from './Item';
import Title from './Title';

const loadData = function (callback) {
    window.jsonpCallback = callback;
    let data = document.createElement("script");
    data.src = `https://www.kayak.com/h/mobileapis/directory/airlines/homework?jsonp=jsonpCallback`
    document.body.appendChild(data);
}



function Content() {
    const [allData, setAllData] = useState([]);
    const [fileter, setFilter] = useState({});


    useEffect(() => {
        loadData(setAllData)
    }, [])
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
        newData = allData.filter((item) => { return item.alliance in fileter })

    }
    console.log(newData)

    return (
        <div id="content">
            <div id="filter-by-alliances">
                <Title></Title>
                <Filter handleSet={handleSet}></Filter>
            </div>
            <div id="items">

                {
                    newData.map((item) => {
                        return <Item
                            airlineName={item.name}
                            airlineLogo={item.logoURL}
                            allianceName={item.alliance}
                            phoneNumber={item.phone}
                            website={item.site}
                        />
                    })}

            </div>
        </div>
    )
}
export default Content;