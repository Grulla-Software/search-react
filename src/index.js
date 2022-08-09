import React from 'react';
class SearchReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', hover: false, searchCriteria: this.props.searchCriteria};
    this.handleChange = this.handleChange.bind(this);
    this.searchByButton = this.searchByButton.bind(this);
    this.search = this.search.bind(this);
    this.getHoverBackground = this.getHoverBackground.bind(this);
    this.getHoverTextColor = this.getHoverTextColor.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    if(this.props.hideButton){
      this.props.callBack(this.search(event.target.value));
    }
  }
  searchByButton(){
    this.props.callBack(this.search(this.state.value));
  }
  order(objects,arrayCriterias){
    let result = [];
    if(arrayCriterias.length > 0){
      result = objects.sort((a,b) => {
        for (let i = 0; i < arrayCriterias.length; i++) {
          a = a[arrayCriterias[i]];
          b = b[arrayCriterias[i]];
        }
        return (''+a > b) ? 1 : ((b> a) ? -1 : 0);
      });
    }
    return result;
  }
  search(value){
    if(!this.state.searchCriteria){
      console.error('Must specify a search criteria for the search-react component!');
      return this.props.listObjects;
    }
    if(this.props.listObjects){
      let arrayCriterias = this.state.searchCriteria.split('.');
      let arrayObjects = this.props.listObjects;
      if(value.trim() === ''){
        return this.order(arrayObjects,arrayCriterias);
      }
      const objects= arrayObjects.filter((object) => {
        let filtered = false;
        for (let i = 0; i < arrayCriterias.length; i++) {
          object = object[arrayCriterias[i]];
          filtered = object;
        }
        if(filtered && value.trim() != ''){
          if(isNaN(value) && isNaN(filtered)){
            return filtered.toUpperCase().includes(value.toUpperCase());
          }else{
            return filtered.includes(value);
          }
        }
      });
      return this.order(objects,arrayCriterias);
    }
    console.error('Must specify a list of objects for the search-react component!');
    return this.props.listObjects;
  }
  getHoverBackground(){
    return this.props.btnHoverBackground? this.props.btnHoverBackground: '#3dbadc';
  }
  getHoverTextColor(){
    return this.props.btnHoverTextColor? this.props.btnHoverTextColor: '#ffff';
  }
  render() {
    return (
      <div  style={{
        'display': 'flex',
        'alignItems': 'center'
      }}>
        <label  style={{
          'minHeight': '41px',
          'display': 'flex',
          'alignItems': 'center'
        }}>
          <input 
            type="text" 
            value={this.state.value}
            onChange={this.handleChange}  
            placeholder={this.props.placeholder?this.props.placeholder:"Serach"}
            style={{
              "color": this.props.inputColor? this.props.inputColor : "blue",
              'width': this.props.inputWidth? this.props.inputWidth: '200px',
              'height': this.props.height? this.props.height: '30px',
              'padding': '0px',
              'paddingLeft': '10px',
              'borderRadius': this.props.borderRadius? this.props.borderRadius: '5px',
              'border': 'none',
              'fontFamily': 'inherit',
              'fontWeight': 'bolder',
              'fontSize': this.props.fontSize? this.props.fontSize: ''
            }}
          />
        </label>
        {!this.props.hideButton?
          <input 
            type="button" 
            value={this.props.btnName?this.props.btnName:"Serach"}
            onClick={this.searchByButton}
            onMouseEnter={()=>{
              this.setState({hover: true});
            }}
            onMouseLeave={()=>{
              this.setState({hover: false});
            }}
            style={{
              "color": this.state.hover? this.getHoverTextColor(): this.props.btnColor? this.props.btnColor : "black",
              'width': this.props.btnWidth? this.props.btnWidth: '100px',
              'height': this.props.height? this.props.height: '30px',
              'background': this.state.hover? this.getHoverBackground(): this.props.btnBackground? this.props.btnBackground: '#61DAFB',
              'border': this.props.btnBorder? !this.state.hover? this.props.btnBorder: 'none': !this.state.hover?'2px solid #61DAFB':'none',
              'borderRadius': this.props.borderRadius? this.props.borderRadius: '5px',
              'marginLeft': '3px',
              'fontWeight': 'bolder',
              'fontFamily': 'inherit',
              'cursor': 'pointer',
              'fontSize': this.props.fontSize? this.props.fontSize: ''
            }}
        />:<div></div>}

      </div>
    );
  }
}
export default SearchReact;