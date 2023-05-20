// next 는 import React from 'react' 구문이 필요없음
// next 는 pages 폴더(이름 변경 불가) 안의 파일들을 개별적인 페이지(컴포넌트)로 코드스플리팅하여 만듦

import AppLayout from "../components/AppLayout";

const Home = ()=>{
    return(
        <AppLayout>
            <div>HOME</div>
        </AppLayout>
    )
}

export default Home;