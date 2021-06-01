import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Box} from '@material-ui/core';

const Chart = ({data:{confirmed,recovered,deaths}})=>{
    return(
        confirmed ? (
            <Box className='graph'>
        <Bar
        data = {{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'Peoples',
                data: [confirmed.value,recovered.value,deaths.value],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(255, 0, 0, 0.5)'
                ],
            }]
        }}
        options = {{
            legend: {display:false},
                title:{display:true, text:'Current state in Country'}
        }}
        />
        </Box> ) : ''
    )
}

export default Chart;