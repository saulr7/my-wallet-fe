import  React from 'react'

type IProps = {
    msg: string
  }

  interface IState {
    name?: string;
  }
  

class Greeeting extends React.Component<IProps, IState> {

  state: IState;
  
  constructor(props: IProps) {
    super(props);
    this.state = { name: '100' };
  }

    render() {
    
        return (
            <div>
                { this.state.name}
            </div>
        )
    }

}

export default Greeeting