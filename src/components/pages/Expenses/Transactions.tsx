import React from 'react'


class Transactions extends React.Component<{},{}> {



    render() {

        return (
            <div>
                <h2>
                    Transactions
                </h2>


                <table className="table table-bordered bg-white ">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        </tr>
                        
                        <tr className="table-active">
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        </tr>
                        <tr className="table-active">
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        )

    }


}

export default Transactions