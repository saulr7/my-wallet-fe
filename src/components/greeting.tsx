import  React from 'react'

type IProps = {
    msg: string
  }

  interface IState {
    name?: string;
  }
  

class Greeeting extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {
            name : "Saulr"
        }

      }


    render() {
    
        return (
            <div>
                {this.props.msg +" " + this.state.name}
            </div>
        )
    }

}

export default Greeeting