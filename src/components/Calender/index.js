import React from 'react'
import { WEEK_DAYS } from '../../utils'
const calenderContainer = {
    display: 'flex',
}
const tableColumn = {
    display: 'flex',
    flexDirection: 'column'

};
const tableData = {
    padding: '20px',
    border: '1px solid black'

}
const HOUR = 24;
const calenderItem = {


}

function index() {
    const renderTableData = (isHeader) => {

        let i = 0;
        let arrJsx = [];
        while (i < 24) {
            arrJsx.push(<td style={tableData}>{`${isHeader ? (i < 12 ? i + 'am' : i + 'pm') : i}`}</td>)
            i++;

        }
        return arrJsx;



    }
    return (
        <table style={calenderContainer} >
            {
                <tc style={tableColumn}>
                    <th> Hours</th>
                    {renderTableData(true)}

                </tc>
            }
            {WEEK_DAYS.map((item, index) => {
                return <tc style={tableColumn}><th style={calenderItem} >
                    {item}
                </th>

                    {renderTableData()}
                </tc>

            })}


        </table >
    )
}

export default index
