import React from 'react'

type IProps = {
    Titulo : string
}

interface IState {
    Titulo: string;
  }
  

class Title extends React.Component<IProps>{

    // state: IState;
  
    // constructor(props: IProps) {
    //   super(props);
    //   this.state = { Titulo: props.Titulo };
    // }


    render() {

        return (

            <div>
        
                <div className="row">
                            
                        {/* {this.state.irAtras ? (
                        <div className="col-12 col-md-1 align-content-end">
                        <button className="btn align-self-end pt-2 mt-1" onClick={this.GoBack}>
                            <i id="btn-back" className="fa fa-arrow-left " aria-hidden="true"></i>
                        </button> 
                        </div>
                        ) :
                        (null)
                        
                        } */}
                    <div className="col">
                        <h1 className=" font-weight-bold txtTitle2 text-left  pt-2 ml-n-3" id="txtTitulo">{this.props.Titulo}</h1> 
                        <hr id="hrTitulo" className="text-white" style={{color: 'white', width:"90%"}}/> 
                    </div>
                </div>
            </div>
        )

    }

}

export default Title