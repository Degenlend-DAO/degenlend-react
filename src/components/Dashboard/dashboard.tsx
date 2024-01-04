import React from 'react';
import { Progress } from 'antd';


const Dashboard = () => {
<div>
    <div className="row">
        <div className="column">
            <h3>
                Supply Balance
            </h3>
            <p>
                0%
            </p>
        </div>

        <div className="column">
            Net APY
        </div>
        <div className="column">
            <h3>
            Borrow Balance
            </h3>
            <p>
                0%
            </p>
        </div>
    </div>
    <div className='row'>
        <div>
        Borrow Limit
            <div>
                <Progress percent={30} status="active" />
            </div>
        </div>
    </div>
</div>
}

export default Dashboard