import './Item.css'

function Item({ airlineName, airlineLogo, allianceName, phoneNumber, website }) {
    const url = 'https://www.kayak.com/' + airlineLogo;
    const length = airlineName.length;
    let alliancename;
    switch (allianceName) {
        case "OW":
            alliancename = "Oneworld";
            break;
        case "ST":
            alliancename = "Sky Team";
            break;
        case "SA":
            alliancename = "Star Alliance";
            break;
        default:
            allianceName = ""
    }

    website= website.replace("https://www.","").replace("http://www.","").replace("www.","").replace("https://","").split(/[/?#]/)[0];
 

    return (
        <div id='item'>
            <div id="airline-info">

                <div id="airline-logo">
                    <img id="logo" src={url} alt='logo test' />
                </div>

                <div id="info">
                    <span id={length > 27 ? "airline-name-limit" : "airline-name"}>{airlineName}</span>
                    <span id="alliance-name" className="item-hover">{alliancename}</span>
                    <span id="phone-number" className="item-hover">{phoneNumber}</span>
                    <span id="website" className="item-hover">{website}</span>
                </div>

            </div>
        </div>
    )
}
export default Item;