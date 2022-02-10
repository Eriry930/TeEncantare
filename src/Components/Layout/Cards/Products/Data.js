/* eslint-disable no-unused-vars */
import { useState } from "react";
import Data from '../../../Data/Data.json'
import Cards from '../Cards'

function Gifts (props) {
    const {obj} = props
    const [Data, setFilterData] = useState(Data);
    const [searchText, setSearchText] = useState("");
  
    const category = (text) => {
      setSearchText(text);
    }
    function filter(type) {
        setFilterData(
            Data.filter((val) => {

                return (val.type.toLowerCase().includes(type.toLowerCase()));
            })
        );
    }
    
    return (
        <div>
            <Data />
        </div>
    );
}

export default Data 