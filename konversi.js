import React, {Component} from 'react';


class Konversi extends Component {

	constructor(props){
		super(props);
		this.state = {
      detik: '',
      menit: '',
      jam: ''
		};

		this.detikChange = this.detikChange.bind(this);
    this.convert = this.convert.bind(this);
	}

	detikChange(event) {
		this.setState({detik: event.target.value})
	}

	convert = (event) => {
        const detik = parseInt(this.state.detik);

        const menit = (detik / 60) + " " +  "Menit";
        const jam = (detik / 3600) + " " + "Jam";

        this.setState({menit: menit});
        this.setState({jam: jam});
			
		event.preventDefault();
	}

	render(){
		return(
			
            <div className="container">
                <br></br>
             
    <center>                           
      <h5 className="card-title"><center>Konversi Detik</center></h5>
      <input type="text" onChange={this.detikChange} className="form-control"></input>

       <br/> 
        <button className="btn btn-danger mb-2" type="submit" onClick={this.convert}>Konversikan</button>
        <br/>
        <div>
        <h5 className="card-title"><center>Konversi Menit</center></h5>
        <input type="text" value={this.state.menit} className="form-control" ></input>
        </div>
        <br/>
        <div>
        <h5 className="card-title"><center>Konversi Jam</center></h5>
        <input type="text" value={this.state.jam} className="form-control"></input>
        </div>
        </center>
      </div>
      
      
      
		);
	}
}

export default Konversi;