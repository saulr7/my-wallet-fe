import React from 'react'
import { Interface } from 'readline';

interface IProps {
    Loading : boolean
}

interface IState {
    Loading : boolean
}



class Loading extends React.Component<IProps, IState> {

    state : IState

    constructor(props: IProps)
    {
        super(props)

        this.state = {Loading : this.props.Loading}

    }
  
    componentWillReceiveProps(newProps : IProps)
    {
        this.setState({Loading: newProps.Loading});
    }


    render() {

        if (this.state.Loading) {
            return (
                <div>
                    <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="text-center">
                        <p className="text-muted">Loading...</p>
                    </div>
                </div>
            )
        } else {
            return (null )
        }

    }

}

export default Loading