import { Outlet } from "react-router-dom";
import style from './base.module.scss';
import Header from '../../header/header.component';
import Footer from '../../footer/footer.component';

const Base = () => {
    return (
        <main className={style.dark}>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </main>
    )
}

export default Base;