import React from 'react'


interface IProps {
    noData      : boolean
    Message?    : string
}

interface IState {
    noData      : boolean
    Message?    : string
}

class NoData extends React.Component<IProps, IState>{

    state : IState

    constructor(props: IProps) {
        super(props);
        
        this.state ={
            noData      : props.noData ,
            Message     : props.Message
        }

    }


    componentWillReceiveProps(newProps : IProps)
    {
        this.setState({noData : newProps.noData, Message : newProps.Message})
    }

    render() {

        if (this.state.noData) {
            return (
                <div className="" >
                    <i className="fa fa-exclamation-triangle text-secondary" aria-hidden="true"  style={{fontSize: "3rem"}} ></i>
                    <br/>
                    <span className="font-weight-bold text-secondary">No data found</span>
                    <br/>
                    <h4 className="card-title font-weight-bolder text-secondary">{this.state.Message}</h4>
                </div>
            )
        } else {
            return (null )
        }

    }

}


export default NoData