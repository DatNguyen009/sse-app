import React from 'react'
import { Result, Button } from 'antd';
import { useHistory } from 'react-router';

export default function NotFound() {
    const history = useHistory();
    const goHome = () => {
        history.push({pathname:'/'})
    }
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang này không tồn tại!!!"
                extra={<Button type="primary" onClick={goHome}>Back Home</Button>}
            />,
        </div>
    )
}
