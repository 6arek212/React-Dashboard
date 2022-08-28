import './home.css'

const Home = () => {
    return (
        <div className="home">
            <h1>בית</h1>


            <div className="top">
                <div className="card-container">
                    <h3>לקוח נוכחי</h3>
                    <div className="current-customer border-gray">

                        <div className="inline">
                            <h4>שם</h4>
                            <h4>טארק חוסין</h4>
                        </div>

                        <div className="inline">
                            <h4>שעה</h4>
                            <h4>12:00</h4>
                        </div>


                    </div>
                </div>


                <div className="card-container">
                    <h3>לקוח הבא</h3>
                    <div className="next-customer border-gray">
                        <div className="inline">
                            <h4>שם</h4>
                            <h4>טארק חוסין</h4>
                        </div>

                        <div className="inline">
                            <h4>שעה</h4>
                            <h4>12:00</h4>
                        </div>

                    </div>
                </div>
            </div>

            <div className='appointments-list-container'>
                <h3>רשימת התורים</h3>
                <div className="appointments-list border-gray">



                </div>
            </div>
        </div>
    );
}

export default Home;