import preloader from '../../../assets/images/icon-ajax-loading-spinner.svg';

let Preloader = (props) => {
  return <div style={{backgroundColor: 'white'}}>
    <img src={preloader}/>
  </div>
}

export default Preloader;