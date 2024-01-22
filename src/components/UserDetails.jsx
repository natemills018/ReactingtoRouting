import { useParams } from "react-router-dom";


const UserDetails = () => {


    const { userid } = useParams();


    return(
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">
                        UserDetails {userid} Page
                    </h1>
                </div>
            </section>
        </main>
    )
};


export default UserDetails;