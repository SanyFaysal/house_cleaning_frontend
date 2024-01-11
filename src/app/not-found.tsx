'use client'
import { Button, Result } from 'antd';
import { useRouter } from 'next/navigation';

const App = () => {
    const router = useRouter()
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button onClick={() => router.push('/')} type="primary">Back Home</Button>}
        />
    );
}

export default App;