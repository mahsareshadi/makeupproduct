import './Filter.css';


function Filter({ handleSet }) {

    function handleCheck(e) {
        if (e.target.checked) {
            handleSet(true, e.target.value)
        }
        if (e.target.checked === false) {
            handleSet(false, e.target.value)
        }
    }


    return (
        <div id="filter">
            <div id="filter-title">Filter by Alliances</div>
            <input type="checkbox" id="ow" className="checkbox" name="oneworld" value="OW"
                onChange={handleCheck}
            />
            <span className="alliance"> Oneworld </span>

            <input type="checkbox" id="st" className="checkbox" name="skyteam" value="ST"
                onChange={handleCheck}
            />
            <span className="alliance"> Sky Team </span>

            <input type="checkbox" id="sa" className="checkbox" name="staralliance" value="SA"
                onChange={handleCheck}
            />
            <span className="alliance"> Star Alliance</span>

        </div>
    )
}
export default Filter;
